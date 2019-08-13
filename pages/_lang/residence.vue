<template lang="pug">
    div.karaOi.residence
        ResidenceHeader(:contacts="contacts")
        .slider
            hooper(:settings="hooperSettings" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, index) in about_page.top_residence_slides" :key="`top-slides-${index}`" :index="index")
                    div.item
                        img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs#about
            .container
                .wrapper
                    h2 {{ $t('about_us') }}
                    p(v-html="about_text")
                .flexContainer
                    .flexGrid
                        .flexItem(v-for="(item, index) in about_text_additional" :key="`about-additional-${index}`" :index="index" v-if="item.position === 'top'")
                            h3 {{ item.title }}
                            p(v-html="item.text")
        .reservation(v-show="booking_modal_opened")
            .wrapper
                .close(@click="closeBookingModal") закрыть
                .container
                    h1 {{ $t('index.booking') }}
                    p {{ $t('index.booking_help_text') }}
                    BookingForm(:rooms_choices="about_page.residence_rooms", :closeModal="closeBookingModal")
        .hotel#num
            h2 {{ $t('rooms') }}
            .hotelGrid(v-for="(item, index) in about_page.residence_rooms" :key="`room-${index}`" :index="index")
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(:group='`slider-${index}`' :settings="hooperSettings2" :infiniteScroll="true" :transition="1000").bigSlide
                                slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-gallery-${index}-${slideIndex}`" :index="slideIndex")
                                    img(:src="slide.image_normal_thumbnail" @click="openModalSlider(`modal-slider-${item.id}`, slideIndex)")
                                hooper-navigation(slot='hooper-addons')
                            .priceWrapper
                                div.start
                                    .rooms {{ item.title }}
                                    .peoples {{ item.subtitle }}
                                div.end
                                    .prices(:class="item.currency === 'som' ? 'som' : 'dollar'") {{ item.price }}
                                    // {{ $t('som') }}
                        hooper(:group="`slider-${index}`" :settings="hooperSettings3" :infiniteScroll="true" :transition="1000").smallSlide
                            slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-gallery-small-${index}-${slideIndex}`" :index="slideIndex")
                                img(:src="slide.image_normal_thumbnail")
                    .rightSide
                        label(@click="bookRoom(item.id)") {{ $t('book') }}
                        p(v-html="item.description")
                        h6 {{ item.additional_text }}

                    ModalSlider(:id="`modal-slider-${item.id}`", :slides="item.gallery")

            .hotelGrid(v-for="(item, index) in about_page.residence_additional_services" :key="`room-as-${index}`" :index="index")
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(:settings="hooperSettings2").bigSlide
                                slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-as-${index}-${slideIndex}`" :index="slideIndex")
                                    img(:src="slide.image_thumbnail" @click="openModalSlider(`modal-slider-add-service-${item.id}`, slideIndex)")
                                hooper-navigation(slot='hooper-addons')
                    .rightSide
                        h4 {{ item.title }}
                        p(v-html="item.text")

                    ModalSlider(:id="`modal-slider-add-service-${item.id}`", :slides="item.gallery")
        .carousel
            hooper(:settings="hooperSettings4" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, slideIndex) in about_page.bottom_residence_slides" :key="`bottom-slides-${slideIndex}`" :index="slideIndex")
                    img(:src="slide.image_small_thumbnail" @click="openModalSlider(`modal-slider-bottom-slides`, slideIndex)")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')

            ModalSlider(:id="`modal-slider-bottom-slides`", :slides="about_page.bottom_residence_slides")
        .textBlock
            .grid
                .text(v-for="(item, index) in about_text_additional" :key="`about-additional-bottom-${index}`" :index="index" v-if="item.position === 'bottom'")
                    h3 {{ item.title }}
                    p(v-html="item.text")
            .pay
                h4 {{ $t('accept_cards') }}
                img(src="~/static/png/pay.png")

        ThirdFooter(:contacts="contacts" id="contact")
</template>

<script>
    import ResidenceHeader from '~/components/headers/ResidenceHeader'
    import ThirdFooter from '~/components/footers/ThirdFooter'
    import BookingForm from '~/components/BookingForm'
    import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
    import 'hooper/dist/hooper.css'

    import ModalSlider from '~/components/ModalSlider'

    let common = {
        'scrollTo': (context) => {
            let currentPath = context.$route.fullPath

            if (currentPath.includes('about')) {
                context.$nuxt.$emit('SCROLL_TO', 'about')
            } else if (currentPath.includes('num')) {
                context.$nuxt.$emit('SCROLL_TO', 'rooms')
            }
        }
    }

    export default {
        components: {
            ResidenceHeader,
            ThirdFooter,
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
            BookingForm,
            ModalSlider
        },
        data() {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 1
                },
                hooperSettings2: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 1
                },
                hooperSettings3: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 6
                },
                hooperSettings4: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 3,
                    centerMode: true,
                    breakpoints: {
                        320: {
                            centerMode: false,
                            itemsToShow: 1
                        },
                        800: {
                            centerMode: false,
                            itemsToShow: 2
                        },
                        1000: {
                            centerMode: false,
                            itemsToShow: 3
                        }
                    }
                },
                contacts: {},
                about_text: '',
                about_text_additional: [],
                booking_modal_opened: false
            }
        },
        async asyncData({ params, app }) {
            const about_result = await app.$api('get', '/about')
            let about_page = about_result['response']

            let locale = app.$getCurrentLocale()
            let messages = app.$getLocaleMessages()

            if (about_page.seo.length > 0) {
                let seo = about_page.seo[0]

                app.$buildSeoTags({
                    'title': messages[locale].footer.oasis_regency,
                    'desc': seo.residence_description,
                    'kw': seo.residence_keywords,
                    'image': ''
                })
            }

            return {
                about_page: about_page
            }
        },
        mounted() {
            let contacts = this.about_page.contacts
            let info = this.about_page.residence_info

            this.contacts = contacts.length > 0 ? contacts[0] : {}
            this.about_text = info.length > 0 ? info[0].text : {}
            this.about_text_additional = info.length > 0 ? info[0].additional : []

            common.scrollTo(this)
        },
        methods: {
            bookRoom(id) {
                this.$nuxt.$emit('ROOM_CHOSEN', id)
                this.booking_modal_opened = true
            },
            openModalSlider(id, slideIndex) {
                this.$nuxt.$emit('MODAL_SLIDER_TOGGLE', id, slideIndex)
            },
            closeBookingModal() {
                this.booking_modal_opened = false
            }
        },
        common: common
    }
</script>

<style lang="sass">

</style>
