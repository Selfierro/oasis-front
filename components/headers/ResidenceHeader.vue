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
                    NLink(to="/conferenceHall") Конференц зал
                    NLink(to="/restorane") Ресторан
                    NLink(to="/") Контакты
                .rightSide
                    .mail
                        a(:href="`mailto:${contacts.regency_common_email}`") {{ contacts.regency_common_email }}
                    .social
                        a(:href="contacts.regency_instagram").instagram
                        a(:href="contacts.regency_facebook").facebook
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
