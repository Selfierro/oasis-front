<template lang="pug">
    div
        MainHeader(:contacts="contacts")
        .bannerChoiceHotel.actions
            .flex.active
                .item.leftImage
                    img(src="~/static/svg/oasisResidence.svg").logo
                    img(src="~/static/png/leftBanner.png").hotelLeft
                .item.rightImage
                    img(src="~/static/svg/oasisKaraOi.svg").logo
                    img(src="~/static/png/rightBanner.png").hotelRight
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

        .reservation
            .container
                h1 БРОНИРОВАНИЕ НА САЙТЕ
                p Вы можете выбрать номер и все доступные опции, <br> забронировать его прямо на сайте
                .wrapper
                BookingForm(:rooms_choices="index_page.residence_rooms")
        .newsSlider
            hooper(sync='slider' class="imageText" :wheelControl='false' :touchDrag='false' :mouseDrag='false')
                slide(v-for="(item, index) in index_page.news" :key="`news-${index}`")
                    div
                        h2 новости и мероприятия
                        h3 {{ item.title }}
                        p {{ item.short_description }}
                        NLink(:to="$path(`/news/${item.id}`)") ПОДРОБНЕЕ

            hooper(ref='slider', :itemsToShow='1', :centerMode='true' :wheelControl='false' :touchDrag='false' :mouseDrag='false' class="imageSlider")
                slide(v-for="(item, index) in index_page.news" :key="`news-image-${index}`")
                    img(:src="item.image")
                hooper-navigation(slot='hooper-addons')
        .aboutOasis
            .container
                h2 почему вы должны выбрать отель “ОASIS”
                .flexGrid
                    .flexItem(v-for="(item, index) in index_page.info", :key="`info-${index}`")
                        div(:style="`background-image: url(${item.icon})`")
                            h3 {{ item.title }}
                            p(v-html="item.text")
        .reviews
            .container
                h2 отзывы
                hooper(:settings="hooperSettings")
                    slide(v-for="(feedback, index) in index_page.feedbacks" :key="`feedback-${index}`")
                        div.item
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

    export default {
        components: { MainHeader, MainFooter, Hooper, Slide, HooperNavigation, HooperPagination, BookingForm },
        data () {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: false,
                    mouseDrag: false,
                    breakpoints: {
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
                contacts: {}
            }
        },
        async asyncData({params, app}) {
            const index_result = await app.$api('get', '/index')

            return {
                index_page: index_result['response']
            }
        },
        mounted() {
            let contacts = this.index_page.contacts

            this.contacts = contacts.length > 0 ? contacts[0]: {}
        },
    }

</script>

<style lang="sass">
</style>
