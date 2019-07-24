<template lang="pug">
    div
        footer.mainFooter
            .mainFlexGrid
                .mainFlexItem.leftSide
                    .flexGrid
                        .flexItem
                            h4 {{ $t('footer.oasis_regency')  }}
                            .iconAddress
                                p(v-html="contacts.regency_address")
                            br
                            .iconPhone
                                p {{ contacts.regency_booking_phone }}
                                p {{ contacts.regency_booking_mobile_phone }}
                        .flexItem
                            h4 {{ $t('footer.booking_department')  }}
                            .iconMail
                                p {{ contacts.regency_booking_email }}
                        .flexItem
                            h4 {{ $t('footer.common_questions')  }}
                            .iconMail
                                p {{ contacts.regency_common_email }}
                        .flexItem
                            h4 {{ $t('footer.restaurant')  }}
                            .iconPhone
                                p {{ contacts.restaurant_phone }}
                .mainFlexItem.rightSide
                    .flexGrid
                        .flexItem
                            h4 {{ $t('footer.oasis_karaoi')  }}
                            .iconAddress
                                p(v-html="contacts.karaoi_address")
                            br
                            .iconPhone
                                p {{ contacts.karaoi_booking_phone }}
                                p {{ contacts.karaoi_booking_mobile_phone }}
                        .flexItem
                            h4 {{ $t('footer.booking_department')  }}
                            .iconMail
                                p {{ contacts.karaoi_booking_email }}
                        .flexItem
                            h4 {{ $t('footer.common_questions')  }}
                            .iconMail
                                p {{ contacts.karaoi_common_email }}
        .sunrise
            .container
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
