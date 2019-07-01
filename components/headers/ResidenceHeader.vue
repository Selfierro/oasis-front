<template lang="pug">
    header
        .container
            .flex
                .leftSide
                    .hotelLink
                        NLink(:to="this.$path('/residence')").oasisResidence
                        NLink(:to="this.$path('/karaoi')").oasisKaraOi
                .center
                    NLink(to="/") Главная
                    a(href="#about" v-smooth-scroll="{ duration: 1000, offset: -50 }") О нас
                    a(href="#num" v-smooth-scroll="{ duration: 1000, offset: -100 }") Номера
                    NLink(:to="this.$path('/confhall')") Конференц зал
                    NLink(:to="this.$path('/restaurant')") Ресторан
                    a(href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }") Контакты
                .rightSide
                    .mail
                        a(:href="`mailto:${contacts.regency_common_email}`") {{ contacts.regency_common_email }}
                    .social
                        a(:href="contacts.regency_instagram").instagram
                        a(:href="contacts.regency_facebook").facebook
                    LS
                .mobileBurger
                    span(@click="myFilter") Меню
                    .dropdown(:class="{active: isActive}")
                        .link
                            NLink(to="/") Главная
                            a(href="#about" v-smooth-scroll="{ duration: 1000, offset: -50 }") О нас
                            a(href="#num" v-smooth-scroll="{ duration: 1000, offset: -100 }") Номера
                            NLink(:to="this.$path('/confhall')") Конференц зал
                            NLink(:to="this.$path('/restaurant')") Ресторан
                            a(href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }") Контакты
                        LS
                        .social
                            a(:href="contacts.regency_instagram").instagram
                            a(:href="contacts.regency_facebook").facebook
                        .mail
                            a(:href="`mailto:${contacts.regency_common_email}`") {{ contacts.regency_common_email }}
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
