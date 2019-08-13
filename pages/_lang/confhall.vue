<template lang="pug">
    div.karaOi.residence
        ResidenceHeader(:contacts="contacts")
        .slider

            hooper(:settings="hooperSettings"   :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, index) in conf_page.top_residence_slides" :key="`conference-top-${index}`", :index="index")
                    div.item
                        img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs
            .container
                .wrapper
                    h2 {{ $t('confhall.conference_hall') }}
                    p(v-html="about_text")
                .flexContainer.hall
                    .flexGrid.hall
                        .flexItem(v-for="(item, index) in about_text_additional" :key="`about-text-${index}`", :index="index")
                            h3 {{ item.title }}
                            p(v-html="item.text")
        .carousel
            hooper(:settings="hooperSettings4" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, index) in conf_page.bottom_residence_slides" :key="`conference-bottom-${index}`", :index="index")
                    img(:src="slide.image_small_thumbnail" @click="openModalSlider(`modal-slider-bottom-slides`, index)")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')

            ModalSlider(:id="`modal-slider-bottom-slides`", :slides="conf_page.bottom_residence_slides")
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
                contacts: {},
                about_text: '',
                about_text_additional: []
            }
        },
        async asyncData({params, app}) {
            const conference_result = await app.$api('get', '/conference')
            let conf_page = conference_result['response']

            let locale = app.$getCurrentLocale()
            let messages = app.$getLocaleMessages()

            if (conf_page.seo.length > 0) {
                let seo = conf_page.seo[0]

                app.$buildSeoTags({
                    'title': messages[locale].header.confhall,
                    'desc': seo.confhall_description,
                    'kw': seo.confhall_keywords,
                    'image': ''
                })
            }

            return {
                conf_page: conf_page
            }
        },
        mounted() {
            let contacts = this.conf_page.contacts
            let info = this.conf_page.info

            this.contacts = contacts.length > 0 ? contacts[0]: {}
            this.about_text = info.length > 0 ? info[0].text: {}
            this.about_text_additional = info.length > 0 ? info[0].additional: []
        },
        methods: {
            openModalSlider(id, slideIndex) {
                this.$nuxt.$emit('MODAL_SLIDER_TOGGLE', id, slideIndex)
            }
        }
    }
</script>

<style lang="sass">

</style>
