<template lang="pug">
    header
        .container
            .flex
                .leftSide
                    .hotelLink
                        NLink(:to="this.$path('/residence')").oasisResidence
                        NLink(:to="this.$path('/karaoi')").oasisKaraOi
                .center
                    NLink(to="/") {{ $t('header.main')  }}
                    a(href="#about" v-smooth-scroll="{ duration: 1000, offset: -50 }") {{ $t('header.about')  }}
                    a(href="#num" v-smooth-scroll="{ duration: 1000, offset: -100 }") {{ $t('header.rooms')  }}
                    a(href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }") {{ $t('header.contacts')  }}
                .rightSide
                    .phone
                        a(:href="`tel:${contacts.karaoi_main_phone}`" target="_blank") {{ contacts.karaoi_main_phone }}
                    .social
                        a(:href="contacts.karaoi_instagram" target="_blank").instagram
                        a(:href="contacts.karaoi_facebook" target="_blank").facebook
                    LS
                .mobileBurger
                    span(@click="myFilter") {{ $t('header.menu')  }}
                    .dropdown(:class="{active: isActive}")
                        .link
                            NLink(to="/") {{ $t('header.main')  }}
                            a(href="#about" v-smooth-scroll="{ duration: 1000, offset: -50 }") {{ $t('header.about')  }}
                            a(href="#num" v-smooth-scroll="{ duration: 1000, offset: -100 }") {{ $t('header.rooms')  }}
                            a(href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }") {{ $t('header.contacts')  }}
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
