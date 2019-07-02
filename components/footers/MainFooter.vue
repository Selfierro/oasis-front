<template lang="pug">
    footer.mainFooter
        .mainFlexGrid
            .mainFlexItem.leftSide
                .flexGrid
                    .flexItem
                        h4 {{ $t('footer.oasis_regency')  }}
                        p {{ contacts.regency_address }}
                        p {{ contacts.regency_booking_phone }}
                        p {{ contacts.regency_booking_mobile_phone }}
                    .flexItem
                        h4 {{ $t('footer.booking_department')  }}
                        p {{ contacts.regency_booking_email }}
                    .flexItem
                        h4 {{ $t('footer.common_questions')  }}
                        p {{ contacts.regency_common_email }}
            .mainFlexItem.rightSide
                .flexGrid
                    .flexItem
                        h4 {{ $t('footer.oasis_karaoi')  }}
                        p {{ contacts.karaoi_address }}
                        p {{ contacts.karaoi_booking_phone }}
                        p {{ contacts.karaoi_booking_mobile_phone }}
                    .flexItem
                        h4 {{ $t('footer.booking_department')  }}
                        p {{ contacts.karaoi_booking_email }}
                    .flexItem
                        h4 {{ $t('footer.common_questions')  }}
                        p {{ contacts.karaoi_common_email }}
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
