<template lang="pug">
    div.page
        Preloader
        nuxt

</template>

<script>
    import Preloader from '~/components/Preloader'
    export default {
        components: {
            Preloader
        },
        mounted() {
            window.onload = () => {
                this.htmlClass = 'loaded'
            }
        },
        data() {
            return {
                htmlClass: ''
            }
        },
        head() {
            return {
                htmlAttrs: {
                    class: this.htmlClass
                }
            }
        }
    }
</script>

<style lang="sass">

</style>
