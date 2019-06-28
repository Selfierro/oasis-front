<template lang="pug">
    div
        MainHeader
        .newsDetail
            h2 новости и мероприятия
            .slider

                hooper(:settings="hooperSettings0")
                    slide(v-for="(slide, index) in 5" :key="index")
                        div.item
                            img(src="~/static/jpg/slide2.jpg")
                    hooper-navigation(slot='hooper-addons')
            .text
                h1 What is Lorem Ipsum?
                .date Март 03 2019
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus, earum? Ab iste neque obcaecati omnis ullam vel voluptate voluptates?
            .carousel
                hooper(:settings="hooperSettings4")
                    slide(v-for="item in 7" :key="index")
                        img(src="~/static/jpg/nomer.jpg")
                        .desc
                            h3 Тема мероприятия
                            .date Март 03 2019
                    hooper-navigation(slot='hooper-addons')
                    hooper-pagination(slot='hooper-addons')
        MainFooter
</template>

<script>
    import MainHeader from '~/components/headers/MainHeader'
    import MainFooter from '~/components/footers/MainFooter'
    import { Hooper, Slide, Navigation as HooperNavigation   } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        components: { MainHeader, MainFooter, Hooper, Slide, HooperNavigation },
        data () {
            return {
                hooperSettings0: {
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
                            itemsToShow: 1,
                            wheelControl: false,
                            touchDrag: false,
                            mouseDrag: false
                        },
                        1336: {
                            itemsToShow: 1,
                        }
                    },
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
