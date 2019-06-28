<template lang="pug">
    div.karaOi.residence
        ResidenceHeader
        .slider

            hooper(:settings="hooperSettings")
                slide(v-for="(slide, index) in 5" :key="index")
                    div.item
                        img(src="~/static/jpg/slide2.jpg")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs
            .container
                .wrapper
                    h2 Конференц зал
                    p.
                        Останавливаясь в нашем отеле Вы насладитесь элегантным и изысканным пространством, в которое захочется снова и снова возвращаться.

                    p.
                        Команда Отеля  «OASIS Residence» сделает все возможное что бы Ваше пребывание было максимально комфортным и поможет Вам почувствовать все тонкости «современного гостеприимства».
                    p.
                        Конференц-зал на 1 этаже отеля
                        Оборудован проектором, переносным экраном, флипчарт, микрофоном.
                        А также, гостям предоставляются канцелярские принадлежности и вода.
                .flexContainer.hall
                    .flexGrid.hall
                        .flexItem
                            h3 Вместимость до 40 человек при театральной рассадке
                            p 80$ (полный день - 8 часов)
                            p 40 $ (пол дня - 4 часа)
                        .flexItem
                            h3 Стоимость кофе-брейка
                            p от 6 $ (на 1 персону)
                        .flexItem
                            h3 Стоимость обеда
                            p от 10 $ (на 1 персону)
        .carousel
            hooper(:settings="hooperSettings4")
                slide(v-for="item in 7" :key="index")
                    img(src="~/static/jpg/nomer.jpg")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        SecondFooter
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
                }
            }
        }
    }
</script>

<style lang="sass">

</style>
