<template lang="pug">
    .modalSlider(v-show="display")
        .wrapper
            div(@click="close").close
            .slider()
                hooper(:settings="hooperSettings" :autoPlay="false" :infiniteScroll="false" :transition="1000" ref="slider")
                    slide(v-for="(slide, index) in slides" :key="`slides-${index}`" :index="index")
                        div.item
                            img(:src="slide.image" v-if="display")
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
                display: false,
                slider: null
            }
        },
        mounted() {
            this.slider = this.$refs['slider']
            let that = this

            this.$nuxt.$on('MODAL_SLIDER_TOGGLE', (id, slideIndex) => {
                this.display = this.id === id;

                this.$nextTick(function() {
                    that.slider.updateWidth()
                    that.slider.slideTo(slideIndex)
                })
            })
        },
        methods: {
            close() {
                this.display = false
            }
        }
    }
</script>

<style lang="sass">
    .modalSlider
        position: fixed
        z-index: 999
        top: 0
        bottom: 0
        right: 0
        left: 0
        width: 100% !important
        padding: 40px !important
        background-color: rgba(0, 0, 0, 0.5)
        align-items: center
        flex-direction: column
        display: flex
        justify-content: center
        @media (max-width: 960px)
            padding: 20px !important
            .hooper-pagination
                display: none
        .wrapper
            height: 100%
            width: 100%
            position: relative
            @media (max-width: 960px)
                height: 300px
                .slider:before
                    display: none
            img
                border: 0 !important
        .close
            position: absolute
            top: 50px
            z-index: 1
            right: 50px
            background-image: url(../static/svg/close.svg)
            background-repeat: no-repeat
            background-position: center
            width: 40px
            height: 40px
            background-size: 30px
            background-color: rgba(0, 0, 0, 0.8)
            border-radius: 50%
            cursor: pointer
            @media (max-width: 960px)
                top: 20px
                right: 20px
        .slider
            height: 100%
            .hooper
                height: 100%
                .item
                    height: 100%
        .hooper-prev
            left: 20px
        .hooper-next
            right: 20px
        .hooper-next, .hooper-prev
            align-items: center
            display: flex
            justify-content: center
            opacity: 0.4
</style>
