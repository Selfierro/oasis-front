<template lang="pug">
    .modalSlider(v-show="display")
        button(@click="close") закрыть
        .slider
            hooper(:settings="hooperSettings" :autoPlay="true" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, index) in slides" :key="`slides-${index}`" :index="index")
                    div.item
                        img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
</template>

<script>
    import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        name: 'ModalSlider',
        props: ['id', 'slides'],
        components: {
            Hooper, Slide, HooperNavigation, HooperPagination
        },
        data() {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 1
                },
                display: false
            }
        },
        mounted() {
            this.$nuxt.$on('MODAL_SLIDER_TOGGLE', (id) => {
                this.display = this.id === id;
            })
        },
        methods: {
            close() {
                this.display = false
            }
        }
    }
</script>

<style scoped lang="sass">
    .modalSlider
        position: fixed
        z-index: 999
        top: 0
        bottom: 0
        right: 0
        left: 0
        width: 100% !important
        padding: 20px
</style>
