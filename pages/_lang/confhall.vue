<template lang="pug">
    div.karaOi.residence
        ResidenceHeader(:contacts="contacts")
        .slider

            hooper(:settings="hooperSettings")
                slide(v-for="(slide, index) in conf_page.top_residence_slides" :key="`conference-top-${index}`", :index="index")
                    div.item
                        img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs
            .container
                .wrapper
                    h2 Конференц зал
                    p(v-html="about_text")
                .flexContainer.hall
                    .flexGrid.hall
                        .flexItem(v-for="(item, index) in about_text_additional" :key="`about-text-${index}`", :index="index")
                            h3 {{ item.title }}
                            p(v-html="item.text")
        .carousel
            hooper(:settings="hooperSettings4")
                slide(v-for="(slide, index) in conf_page.bottom_residence_slides" :key="`conference-bottom-${index}`", :index="index")
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
                contacts: {},
                about_text: '',
                about_text_additional: []
            }
        },
        async asyncData({params, app}) {
            const conference_result = await app.$api('get', '/conference')

            return {
                conf_page: conference_result['response']
            }
        },
        mounted() {
            let contacts = this.conf_page.contacts
            let info = this.conf_page.info

            this.contacts = contacts.length > 0 ? contacts[0]: {}
            this.about_text = info.length > 0 ? info[0].text: {}
            this.about_text_additional = info.length > 0 ? info[0].additional: []
        },
    }
</script>

<style lang="sass">

</style>
