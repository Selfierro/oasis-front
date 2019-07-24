<template lang="pug">
    div
        footer.secondFooter
            .grid
                .left
                    div
                        .margin
                            h3(style="color: #F4AE61") {{ $t('footer.oasis_regency')  }}
                            .iconAddress
                                p(v-html="contacts.regency_address")
                            br
                            .iconPhone
                                p {{ contacts.regency_booking_phone }}
                                p {{ contacts.regency_booking_mobile_phone }}
                        .margin
                            h3(style="color: #F4AE61") {{ $t('footer.booking_department')  }}
                            .iconAddress
                                p {{ contacts.regency_booking_email }}
                        .margin
                            h3(style="color: #F4AE61") {{ $t('footer.common_questions')  }}
                            .iconAddress
                                p {{ contacts.regency_common_email }}
                        .margin
                            h3(style="color: #F4AE61") {{ $t('footer.restaurant')  }}
                            .iconPhone
                                p {{ contacts.restaurant_phone }}
                            .insta
                                a(:href="contacts.restaurant_instagram", target="_blank") instagram
                .right
                    iframe(src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2925.6965390791383!2d74.5980483!3d42.8370236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb73d3d024303%3A0xf6571c1c345101ac!2s%22Oasis+Residence%22!5e0!3m2!1sru!2skg!4v1562323524453!5m2!1sru!2skg', width='100%', height='100%', frameborder='0', style='border:0', allowfullscreen='')
        .sunrise
            a(href="http://sunrisestudio.pro/") Сделано в Sunrise
</template>

<script>
    export default {
        name: 'ThirdFooter',
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

