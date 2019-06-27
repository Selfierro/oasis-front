<template lang="pug">
    header
        .container
            .flex
                .rightSide
                    .hotelLink
                        NLink(to="/residence").oasisResidence
                        NLink(to="/karaOi").oasisKaraOi
                .center
                .rightSide
                    .mail
                        a(:href="`mailto:${contacts.regency_common_email}`") {{ contacts.regency_common_email }}
                    .social
                        a(:href="contacts.regency_instagram").instagram
                        a(:href="contacts.regency_facebook").facebook
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
