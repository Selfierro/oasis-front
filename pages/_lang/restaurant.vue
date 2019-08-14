<template lang="pug">
    div.karaOi.residence
        ResidenceHeader(:contacts="contacts")
        .slider

            hooper(:settings="hooperSettings"   :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, index) in restaurant_page.top_residence_slides" :key="`top-slides-${index}`" :index="index")
                    div.item
                        picture
                            source(media="(max-width: 799px)" :srcset="slide.image_small_thumbnail")
                            source(media="(min-width: 800px)" :srcset="slide.image")
                            img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs
            .container
                .wrapper
                    h2 {{ $t('restaurant') }}
                    p(v-html="about_text")
        .carousel.book
            hooper(:settings="hooperSettings5" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, slideIndex) in restaurant_page.menu" :key="`menu-slides-${slideIndex}`" :index="slideIndex")
                    img(:src="slide.image_thumbnail")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .carousel
            hooper(:settings="hooperSettings4" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, slideIndex) in restaurant_page.bottom_residence_slides" :key="`bottom-slides-${slideIndex}`" :index="slideIndex")
                    picture
                        source(media="(max-width: 799px)" :srcset="slide.image_small_thumbnail")
                        source(media="(min-width: 800px)" :srcset="slide.image")
                        img(:src="slide.image" @click="openModalSlider(`modal-slider-bottom-slides`, slideIndex)")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')

            ModalSlider(:id="`modal-slider-bottom-slides`", :slides="restaurant_page.bottom_residence_slides")
        ThirdFooter(:contacts="contacts" id="contact")
</template>

<script>
    import ResidenceHeader from '~/components/headers/ResidenceHeader'
    import ThirdFooter from '~/components/footers/ThirdFooter'
    import BookingForm from '~/components/BookingForm'
    import { Hooper, Slide, Navigation as HooperNavigation , Pagination as HooperPagination  } from 'hooper'
    import 'hooper/dist/hooper.css'

    import ModalSlider from '~/components/ModalSlider'

    export default {
        components: { ResidenceHeader, ThirdFooter, Hooper, Slide, HooperNavigation, HooperPagination, BookingForm, ModalSlider },
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
            let rest_page = restaurant_result['response']

            let locale = app.$getCurrentLocale()
            let messages = app.$getLocaleMessages()

            if (rest_page.seo.length > 0) {
                let seo = rest_page.seo[0]

                app.$buildSeoTags({
                    'title': messages[locale].header.restaurant,
                    'desc': seo.restaurant_description,
                    'kw': seo.restaurant_keywords,
                    'image': ''
                })
            }

            return {
                restaurant_page: rest_page
            }
        },
        mounted() {
            let contacts = this.restaurant_page.contacts
            let info = this.restaurant_page.info

            this.contacts = contacts.length > 0 ? contacts[0]: {}
            this.about_text = info.length > 0 ? info[0].text: {}
        },
        methods: {
            openModalSlider(id, index) {
                this.$nuxt.$emit('MODAL_SLIDER_TOGGLE', id, index)
            }
        }
    }
</script>

<style lang="sass">

</style>
