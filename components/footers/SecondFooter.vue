<template lang="pug">
    div
        footer.secondFooter
            .grid
                .left
                    div
                        .margin
                            h3(style="color: #8EA7D0") {{ $t('footer.oasis_karaoi')  }}
                            .iconAddress
                                p(v-html="contacts.karaoi_address")
                            br
                            .iconPhone
                                p {{ contacts.karaoi_booking_phone }}
                                p {{ contacts.karaoi_booking_mobile_phone }}
                        .margin
                            h3(style="color: #8EA7D0") {{ $t('footer.booking_department')  }}
                            .iconAddress
                                p {{ contacts.karaoi_booking_email }}
                        .margin
                            h3(style="color: #8EA7D0") {{ $t('footer.common_questions')  }}
                            .iconAddress
                                p {{ contacts.karaoi_common_email }}
                .right
                    iframe(src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2935.9516409652756!2d76.9928748!3d42.6199816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884efc954854c7f%3A0x680cc931ac40e213!2z0KbQniAiINCe0LDQt9C40YEi!5e0!3m2!1sru!2skg!4v1562323638833!5m2!1sru!2skg', width='100%', height='100%', frameborder='0', style='border:0', allowfullscreen='')
        .sunrise
            a(href="http://sunrisestudio.pro/") Сделано в Sunrise
</template>

<script>
    export default {
        name: 'Footer',
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

