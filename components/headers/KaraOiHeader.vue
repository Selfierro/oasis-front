<template lang="pug">
    header
        .container
            .flex
                .rightSide
                    .hotelLink
                        NLink(:to="this.$path('/residence')").oasisResidence
                        NLink(:to="this.$path('/karaOi')").oasisKaraOi
                .center
                    NLink(to="/") Главная
                    NLink(to="/") О нас
                    NLink(to="/") Номера
                    NLink(to="/") Контакты
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
