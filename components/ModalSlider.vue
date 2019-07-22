<template lang="pug">
    .modalSlider(:class="modalClass")
        button(@onclick="close") закрыть
        .slider
            hooper(:settings="hooperSettings" :autoPlay="true" :infiniteScroll="true" :transition="1000")
                slide(v-for="(slide, index) in slides" :key="`slides-${index}`" :index="index")
                    div.item
                        img(:src="slide.image")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
</template>

<script>
  export default {
    name: 'ModalSlider',
    props: ['id', 'slides'],
    data() {
        return {
            hooperSettings: {
                wheelControl: false,
                touchDrag: true,
                mouseDrag: true,
                itemsToShow: 1
            },
            modalClass: ''
        }
    },
    mounted() {
        this.$nuxt.$on('MODAL_SLIDER_TOGGLE', (id) => {
            if (this.id === id) {
                this.modalClass = 'active'
            } else {
                this.modalClass = ''
            }
        })
    },
    methods: {
        close() {
            this.modalClass = ''
        }
    }
  }
</script>

<style scoped lang="sass">

</style>
