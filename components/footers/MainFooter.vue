<template lang="pug">
    footer.mainFooter
        .mainFlexGrid
            .mainFlexItem.leftSide
                .flexGrid
                    .flexItem
                        h4 OASIS REGENCY
                        p {{ contacts.regency_address }}
                        p {{ contacts.regency_booking_phone }}
                        p {{ contacts.regency_booking_mobile_phone }}
                    .flexItem
                        h4 ОТДЕЛ БРОНИРОВАНИЯ
                        p {{ contacts.regency_booking_email }}
                    .flexItem
                        h4 Общие вопросы/предложения
                        p {{ contacts.regency_common_email }}
            .mainFlexItem.rightSide
                .flexGrid
                    .flexItem
                        h4 OASIS кара-ой
                        p {{ contacts.karaoi_address }}
                        p {{ contacts.karaoi_booking_phone }}
                        p {{ contacts.karaoi_booking_mobile_phone }}
                    .flexItem
                        h4 ОТДЕЛ БРОНИРОВАНИЯ
                        p {{ contacts.karaoi_booking_email }}
                    .flexItem
                        h4 Общие вопросы/предложения
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
