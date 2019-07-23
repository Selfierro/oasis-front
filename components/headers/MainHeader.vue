<template lang="pug">
    header
        .container
            .flex
                .leftSide
                    .hotelLink
                        NLink(:to="this.$path('/residence')").oasisResidence
                        NLink(:to="this.$path('/karaoi')").oasisKaraOi
                .center
                .rightSide
                    .mail
                        a(:href="`mailto:${contacts.regency_common_email}`" target="_blank") {{ contacts.regency_common_email }}
                    .social
                        a(:href="contacts.regency_instagram" target="_blank").instagram
                        a(:href="contacts.regency_facebook" target="_blank").facebook
                    LS
                .mobileBurger
                    span(@click="myFilter") {{ $t('header.menu')  }}
                    .dropdown(:class="{active: isActive}")
                        LS
                        .social
                            a(:href="contacts.regency_instagram" target="_blank").instagram
                            a(:href="contacts.regency_facebook" target="_blank").facebook

                        .mail
                            a(:href="`mailto:${contacts.regency_common_email}`" target="_blank") {{ contacts.regency_common_email }}

</template>

<script>
    import LS from '~/components/LocaleSwitcher'

    export default {
        name: 'MainHeader',
        data() {
            return {
                isActive: false
            }
        },

        methods: {
            myFilter: function(){
                this.isActive = !this.isActive;
                // some code to filter users
            }
        },
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
