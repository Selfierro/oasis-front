<template lang="pug">
    header
        .container
            .flex
                .rightSide
                    .hotelLink
                        NLink(to="/residence").oasisResidence
                        NLink(to="/karaOi").oasisKaraOi
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
                    .lang
                        a(href="").active RU
                        a(href="") ENG
</template>

<script>
    export default {
        name: 'MainHeader',
        props: {
            contacts: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }

    }
</script>

<style lang="sass">

</style>
