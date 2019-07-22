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
                    a(:href="this.buildAboutLink()" v-smooth-scroll="{ duration: 1000, offset: -50 }" :ref="'about-link'") {{ $t('header.about')  }}
                    a(:href="this.buildRoomsLink()" v-smooth-scroll="{ duration: 1000, offset: -100 }" :ref="'rooms-link'") {{ $t('header.rooms')  }}
                    NLink(:to="this.$path('/confhall')") {{ $t('header.confhall')  }}
                    NLink(:to="this.$path('/restaurant')") {{ $t('header.restaurant')  }}
                    a(href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }") {{ $t('header.contacts')  }}
                .rightSide
                    .phone
                        a(:href="`tel:${contacts.regency_main_phone}`" target="_blank") {{ contacts.regency_main_phone }}
                    .social
                        a(:href="contacts.regency_instagram" target="_blank").instagram
                        a(:href="contacts.regency_facebook" target="_blank").facebook
                    LS
                .mobileBurger
                    span(@click="myFilter") {{ $t('header.menu')  }}
                    .dropdown(:class="{active: isActive}")
                        .link
                            NLink(to="/") {{ $t('header.main')  }}
                            a(:href="this.buildAboutLink()" v-smooth-scroll="{ duration: 1000, offset: -50 }") {{ $t('header.about')  }}
                            a(:href="this.buildRoomsLink()" v-smooth-scroll="{ duration: 1000, offset: -100 }") {{ $t('header.rooms')  }}
                            NLink(:to="this.$path('/confhall')") {{ $t('header.confhall')  }}
                            NLink(:to="this.$path('/restaurant')") {{ $t('header.restaurant')  }}
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

    let common = {
        'bindScrollTo': (context) => {
            context.$nuxt.$on('SCROLL_TO', (id) => {
                if (id === 'about') {
                    context.$refs['about-link'].click()
                } else if (id === 'rooms') {
                    context.$refs['rooms-link'].click()
                }
            })
        }
    }

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
            },
            buildAboutLink() {
                let currentPath = this.$route.fullPath

                if (currentPath.includes('restaurant') || currentPath.includes('confhall')) {
                    return this.$path('/residence#about')
                } else {
                    return '#about'
                }
            },
            buildRoomsLink() {
                let currentPath = this.$route.fullPath

                if (currentPath.includes('restaurant') || currentPath.includes('confhall')) {
                    return this.$path('/residence#num')
                } else {
                    return '#num'
                }
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
        },
        mounted() {
            common.bindScrollTo(this)
        }
    }
</script>

<style lang="sass">

</style>
