<template lang="pug">
    div
        footer.mainFooter
            .mainFlexGrid
                .mainFlexItem.leftSide
                    .flexGrid
                        .flexItem
                            h4 {{ $t('footer.oasis_regency')  }}
                            p(v-html="contacts.regency_address")
                            p {{ contacts.regency_booking_phone }}
                            p {{ contacts.regency_booking_mobile_phone }}
                        .flexItem
                            h4 {{ $t('footer.booking_department')  }}
                            p {{ contacts.regency_booking_email }}
                        .flexItem
                            h4 {{ $t('footer.common_questions')  }}
                            p {{ contacts.regency_common_email }}
                        .flexItem
                            h4 {{ $t('footer.restaurant')  }}
                            p {{ contacts.restaurant_phone }}
                .mainFlexItem.rightSide
                    .flexGrid
                        .flexItem
                            h4 {{ $t('footer.oasis_karaoi')  }}
                            p(v-html="contacts.karaoi_address")
                            p {{ contacts.karaoi_booking_phone }}
                            p {{ contacts.karaoi_booking_mobile_phone }}
                        .flexItem
                            h4 {{ $t('footer.booking_department')  }}
                            p {{ contacts.karaoi_booking_email }}
                        .flexItem
                            h4 {{ $t('footer.common_questions')  }}
                            p {{ contacts.karaoi_common_email }}
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
