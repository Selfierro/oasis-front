<template lang="pug">
    header
        .container
            .flex
                .rightSide
                    .hotelLink
                        NLink(:to="this.$path('/residence')").oasisResidence
                        NLink(:to="this.$path('/karaoi')").oasisKaraOi
                .center
                    NLink(to="/") Главная
                    a(href="#about" v-smooth-scroll="{ duration: 1000, offset: -50 }") О нас
                    a(href="#num" v-smooth-scroll="{ duration: 1000, offset: -100 }") Номера
                    a(href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }") Контакты
                .rightSide
                    .phone
                        a(:href="`tel:${contacts.karaoi_main_phone}`") {{ contacts.karaoi_main_phone }}
                    .social
                        a(:href="contacts.karaoi_instagram").instagram
                        a(:href="contacts.karaoi_facebook").facebook
                    LS
</template>

<script>
    import LS from '~/components/LocaleSwitcher'

    export default {
        name: 'MainHeader',
        props: {
            contacts: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        components: {
            LS
        }

    }
</script>

<style lang="sass">

</style>
