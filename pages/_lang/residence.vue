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
                    h2 О НАС
                    p(v-html="about_text")
                .flexContainer
                    .flexGrid
                        .flexItem(v-for="(item, index) in about_text_additional" :key="`about-additional-${index}`" :index="index")
                            h3 {{ item.title }}
                            p(v-html="item.text")
        .reservation
            .container
                h1 БРОНИРОВАНИЕ НА САЙТЕ
                p Вы можете выбрать номер и все доступные опции, <br> забронировать его прямо на сайте
                .wrapper
                BookingForm(:rooms_choices="about_page.residence_rooms")
        .hotel#num
            h2 номера
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
                                    .prices {{ item.price }} сом
                        hooper(:ref="'`slider-${index}`'" :settings="hooperSettings3").smallSlide
                            slide(v-for="(slide, slideIndex) in item.gallery" :key="`room-gallery-small-${index}-${slideIndex}`" :index="slideIndex")
                                img(:src="slide.image")
                    .rightSide
                        label() забронировать
                        p(v-html="item.description")
                        h6 {{ item.additional_text }}

            .hotelGrid(v-for="(item, index) in about_page.residence_additional_services" :key="`room-${index}`" :index="index")
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
                .text
                    h3 В стоимость номера входит:
                    p Трансфер
                    p Трансфер
                    p Трансфер
                    p Трансфер
                .text
                    h3 Так же к Вашим услугам в «OASIS Residence»:
                    p Возможность заказать обед или ужин в номер
                    p Возможность заказать обед или ужин в номер
                    p Возможность заказать обед или ужин в номер
                    p Возможность заказать обед или ужин в номер
            .pay
                h4 Мы принимаем следующие карты
                img(src="~/static/png/pay.png")

        SecondFooter(:contacts="contacts" id="contact")
</template>

<script>
    import ItemHotel from '~/components/ItemHotel'
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
            ItemHotel
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
        }
    }
</script>

<style lang="sass">

</style>
