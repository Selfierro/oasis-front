<template lang="pug">
    div
        MainHeader(:contacts="contacts")
        .newsDetail
            h2 новости и мероприятия
            .slider

                hooper(:settings="hooperSettings0")
                    slide(v-for="(slide, index) in news_page.gallery" :key="`gallery-${index}`", :index="index")
                        div.item
                            img(:src="slide.image")
                    hooper-navigation(slot='hooper-addons')
            .text
                h1 {{ news_page.title }}
                .date {{ news_page.date }}
                p(v-html="news_page.description")
            .carousel
                hooper(:settings="hooperSettings4")
                    slide(v-for="(item, index) in news_page.other_news" :key="`other-news-${index}`", :index="index")
                        img(:src="item.image")
                        .desc
                            NLink(:to="$path(`/news/${item.id}`)")
                                h3 {{ item.title }}
                            .date {{ item.date }}
                    hooper-navigation(slot='hooper-addons')
                    hooper-pagination(slot='hooper-addons')
        MainFooter(:contacts="contacts")
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
                },
                contacts: {},
            }
        },
        async asyncData({params, app}) {
            const news_result = await app.$api('get', `news/${params.id}`)

            return {
                news_page: news_result['response']
            }
        },
        mounted() {
            let contacts = this.news_page.contacts

            this.contacts = contacts.length > 0 ? contacts[0]: {}
        },
    }

</script>

<style lang="sass">
</style>
