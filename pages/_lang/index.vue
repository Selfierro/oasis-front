<template lang="pug">
    div
        MainHeader(:contacts="contacts")
        .bannerChoiceHotel.actions
            .flex.active
                .item.leftImage
                    NLink(:to="this.$path('/residence')")
                        img(src="~/static/svg/oasisResidence.svg").logo
                    img(src="~/static/jpg/home1.jpg").hotelLeft

                .item.rightImage
                    NLink(:to="this.$path('/karaoi')")
                        img(src="~/static/svg/oasisKaraOi.svg").logo
                    img(src="~/static/jpg/home2.jpg").hotelRight
        //.reservation
          .container
                h1 БРОНИРОВАНИЕ НА САЙТЕ
                p Вы можете выбрать номер и все доступные опции, <br> забронировать его прямо на сайте
                .wrapper
                    .flex
                        .btn(:class="residence_book_active ? 'active': ''", @click="residence_book_active = !residence_book_active") Residence
                        .btn(:class="!residence_book_active ? 'active': ''", @click="residence_book_active = !residence_book_active") кара-ой
                    BookingForm(v-show="residence_book_active", :rooms_choices="index_page.residence_rooms")
                    BookingForm(v-show="!residence_book_active", :rooms_choices="index_page.karaoi_rooms")

        .reservation.noFixed
            .container
                h1 {{ $t('index.booking') }}
                p {{ $t('index.booking_help_text') }}
                .flex
                    .lightGalleryGrid
                        div.item(v-for="item in index_page.residence_rooms")
                            .grid
                                div
                                    b {{ item.title }}
                                div.right
                                    span {{ item.price }} {{ item.currency === 'som' ? 'с' : '$'  }}
                                div
                                    span {{ item.subtitle }}
                                div.right
                                    label
                                        span {{ $t('choose') }}
                                        input(type="checkbox" v-model="chosen_rooms" :value="item.id").choiceRoom
                            img(:src="item.gallery[0].image" @click="openModalRoom(`room-modal-${item.id}`)")
                            ModalRoom(:id="`room-modal-${item.id}`", :room="item")
                    .wrapper
                        BookingForm(:rooms_choices="index_page.residence_rooms")
        .newsSlider
            hooper(group='slider' class="imageText" :wheelControl='false' :touchDrag='false' :mouseDrag='false' :infiniteScroll="true" :transition="1000")
                slide(v-for="(item, index) in index_page.news" :key="`news-${index}`" :index="index")
                    div
                        h2 {{ $t('index.news_and_events') }}
                        h3 {{ item.title }}
                        p {{ item.short_description }}
                        NLink(:to="$path(`/news/${item.id}`)") {{ $t('index.more') }}

            hooper(group='slider', :itemsToShow='1', :centerMode='true' :wheelControl='false' :touchDrag='false' :mouseDrag='false' class="imageSlider" :infiniteScroll="true" :transition="1000")
                slide(v-for="(item, index) in index_page.news" :key="`news-image-${index}`" :index="index")
                    img(:src="item.image")
                hooper-navigation(slot='hooper-addons')
        .aboutOasis
            .container
                h2 {{ $t('index.why_choose_oasis') }}
                .flexGrid
                    .flexItem(v-scroll-reveal.reset="{distance: '100px',duration: 900,delay: 800, interval: 3000 }" v-for="(item, index) in index_page.info", :key="`info-${index}`" :index="index" )
                        div(:style="`background-image: url(${item.icon})`")
                            h3 {{ item.title }}
                            p(v-html="item.text")
        .reviews
            .container
                h2 {{ $t('index.feedbacks') }}
                hooper(:settings="hooperSettings" :infiniteScroll="true" :transition="1000")
                    slide(v-for="(feedback, index) in index_page.feedbacks" :key="`feedback-${index}`" :index="index")
                        div.item
                            a(:href="feedback.url" target="_blank")
                              img(:src="feedback.logo")
                            h5 {{ feedback.full_name }}
                            span {{ feedback.date }}
                            p {{ feedback.comment }}
                    hooper-navigation(slot='hooper-addons')
                    hooper-pagination(slot='hooper-addons')
        MainFooter(:contacts="contacts")
</template>

<script>
    import MainHeader from '~/components/headers/MainHeader'
    import MainFooter from '~/components/footers/MainFooter'
    import BookingForm from '~/components/BookingForm'
    import { Hooper, Slide, Navigation as HooperNavigation , Pagination as HooperPagination  } from 'hooper'
    import 'hooper/dist/hooper.css'
    import ModalRoom from '~/components/ModalRoom'

    export default {
        components: { MainHeader, MainFooter, Hooper, Slide, HooperNavigation, HooperPagination, BookingForm, ModalRoom },
        data () {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: false,
                    breakpoints: {
                        0: {
                            itemsToShow: 1,
                            wheelControl: true,
                            touchDrag: true,
                            mouseDrag: true,
                        },
                        640: {
                            itemsToShow: 1,
                            wheelControl: true,
                            touchDrag: true,
                            mouseDrag: true,
                        },
                        1000: {
                            itemsToShow: 2,
                            wheelControl: false,
                            touchDrag: false,
                            mouseDrag: false
                        },
                        1336: {
                            itemsToShow: 3,
                        }
                    },
                },
                residence_book_active: true,
                contacts: {},
                chosen_rooms: []
            }
        },
        async asyncData({params, app}) {
            const index_result = await app.$api('get', '/index')
            let index_page = index_result['response']

            let locale = app.$getCurrentLocale()
            let messages = app.$getLocaleMessages()

            if (index_page.seo.length > 0) {
                let seo = index_page.seo[0]

                app.$buildSeoTags({
                    'title': messages[locale].header.main,
                    'desc': seo.index_description,
                    'kw': seo.index_keywords,
                    'image': ''
                })
            }

            return {
                index_page: index_page
            }
        },
        mounted() {
            let contacts = this.index_page.contacts

            this.contacts = contacts.length > 0 ? contacts[0]: {}

            this.$nuxt.$on('BOOKING_SUCCESS', () => {
                this.chosen_rooms = []
            })
        },
        watch: {
            chosen_rooms() {
                this.$nuxt.$emit('ROOM_CHOSEN', this.chosen_rooms)
            }
        },
        methods: {
            openModalRoom(id) {
                this.$nuxt.$emit('MODAL_ROOM_TOGGLE', id)
            }
        }
    }

</script>

<style lang="sass">
</style>
