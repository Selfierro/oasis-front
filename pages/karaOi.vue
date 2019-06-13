<template lang="pug">
    div
        KaraOiHeader
        hooper(:settings="hooperSettings")
            slide(v-for="(slide, index) in 5" :key="index")
                div.item 123123
</template>

<script>
    import KaraOiHeader from '../components/headers/KaraOiHeader'
    import { Hooper, Slide, Navigation as HooperNavigation , Pagination as HooperPagination  } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        components: { KaraOiHeader, Hooper, Slide, HooperNavigation, HooperPagination },
        data () {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 1
                }
            }
        }
    }
</script>

<style lang="sass">

</style>
