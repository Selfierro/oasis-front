<template lang="pug">
    div.karaOi.residence
        ResidenceHeader(:contacts="contacts")
        .slider

            hooper(:settings="hooperSettings")
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
        .reservation
            .container
                h1 {{ $t('index.booking') }}
                p {{ $t('index.booking_help_text') }}
                .wrapper
                BookingForm(:rooms_choices="about_page.residence_rooms")
        .hotel#num
            h2 {{ $t('rooms') }}
            .hotelGrid(v-for="(item, index) in about_page.residence_rooms" :key="`room-${index}`" :index="index")
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(:sync='`slider-${index}`' :settings="hooperSettings2").bigSlide
                                slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-gallery-${index}-${slideIndex}`" :index="slideIndex")
                                    img(:src="slide.image")
                                hooper-navigation(slot='hooper-addons')
                            .priceWrapper
                                div.start
                                    .rooms {{ item.title }}
                                    .peoples {{ item.subtitle }}
                                div.end
                                    .prices {{ item.price }} {{ $t('som') }}
                        hooper(:ref="'`slider-${index}`'" :settings="hooperSettings3").smallSlide
                            slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-gallery-small-${index}-${slideIndex}`" :index="slideIndex")
                                img(:src="slide.image")
                    .rightSide
                        label(@click="bookRoom(item.id)") {{ $t('book') }}
                        p(v-html="item.description")
                        h6 {{ item.additional_text }}

            .hotelGrid(v-for="(item, index) in about_page.residence_additional_services" :key="`room-as-${index}`" :index="index")
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(:settings="hooperSettings2").bigSlide
                                slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-as-${index}-${slideIndex}`" :index="slideIndex")
                                    img(:src="slide.image")
                                hooper-navigation(slot='hooper-addons')
                    .rightSide
                        h4 {{ item.title }}
                        p(v-html="item.text")
        .carousel
            hooper(:settings="hooperSettings4")
                slide(v-for="(slide, slideIndex) in about_page.bottom_residence_slides" :key="`bottom-slides-${slideIndex}`" :index="slideIndex")
                    img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .textBlock
            .grid
                .text(v-for="(item, index) in about_text_additional" :key="`about-additional-bottom-${index}`" :index="index" v-if="item.position === 'bottom'")
                    h3 {{ item.title }}
                    p(v-html="item.text")
            .pay
                h4 {{ $t('accept_cards') }}
                img(src="~/static/png/pay.png")

        SecondFooter(:contacts="contacts" id="contact")
</template>

<script>
    import ResidenceHeader from '~/components/headers/ResidenceHeader'
    import SecondFooter from '~/components/footers/SecondFooter'
    import BookingForm from '~/components/BookingForm'
    import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        components: {
            ResidenceHeader,
            SecondFooter,
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
            BookingForm,
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
                about_text_additional: []
            }
        },
        async asyncData({ params, app }) {
            const about_result = await app.$api('get', '/about')

            return {
                about_page: about_result['response']
            }
        },
        mounted() {
            let contacts = this.about_page.contacts
            let info = this.about_page.residence_info

            this.contacts = contacts.length > 0 ? contacts[0] : {}
            this.about_text = info.length > 0 ? info[0].text : {}
            this.about_text_additional = info.length > 0 ? info[0].additional : []
        },
        methods: {
            bookRoom(id) {
                this.$nuxt.$emit('ROOM_CHOSEN', id)
            }
        }
    }
</script>

<style lang="sass">

</style>
