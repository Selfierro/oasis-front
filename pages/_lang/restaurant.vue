<template lang="pug">
    div.karaOi.residence
        ResidenceHeader(:contacts="contacts")
        .slider

            hooper(:settings="hooperSettings")
                slide(v-for="(slide, index) in restaurant_page.top_residence_slides" :key="`top-slides-${index}`" :index="index")
                    div.item
                        img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs
            .container
                .wrapper
                    h2 Ресторан
                    p(v-html="about_text")
        .carousel.book
            hooper(:settings="hooperSettings5")
                slide(v-for="(slide, slideIndex) in restaurant_page.menu" :key="`menu-slides-${slideIndex}`" :index="slideIndex")
                    img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .carousel
            hooper(:settings="hooperSettings4")
                slide(v-for="(slide, slideIndex) in restaurant_page.bottom_residence_slides" :key="`bottom-slides-${slideIndex}`" :index="slideIndex")
                    img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        SecondFooter(:contacts="contacts" id="contact")
</template>

<script>
    import ItemHotel from '~/components/ItemHotel'
    import ResidenceHeader from '~/components/headers/ResidenceHeader'
    import SecondFooter from '~/components/footers/SecondFooter'
    import BookingForm from '~/components/BookingForm'
    import { Hooper, Slide, Navigation as HooperNavigation , Pagination as HooperPagination  } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        components: { ResidenceHeader, SecondFooter, Hooper, Slide, HooperNavigation, HooperPagination, BookingForm, ItemHotel },
        data () {
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
                        },
                    }
                },
                hooperSettings5: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
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
                            itemsToShow: 2
                        },
                    }
                },
                contacts: {},
                about_text: '',
            }
        },
        async asyncData({params, app}) {
            const restaurant_result = await app.$api('get', '/restaurant')

            return {
                restaurant_page: restaurant_result['response']
            }
        },
        mounted() {
            let contacts = this.restaurant_page.contacts
            let info = this.restaurant_page.info

            this.contacts = contacts.length > 0 ? contacts[0]: {}
            this.about_text = info.length > 0 ? info[0].text: {}
        },
    }
</script>

<style lang="sass">

</style>
