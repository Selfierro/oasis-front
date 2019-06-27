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
    data() {
        return {
            contacts: {
                regency_address: '',
                regency_booking_phone: '',
                regency_booking_mobile_phone: '',
                regency_booking_email: '',
                regency_common_email: '',
                karaoi_address: '',
                karaoi_booking_phone: '',
                karaoi_booking_mobile_phone: '',
                karaoi_booking_email: '',
                karaoi_common_email: '',
            }
        }
    },
    mounted() {
        this.$nuxt.$on('CONTACTS_LOADED', (contacts) => {
            this.contacts = contacts
        })
    }
  }
</script>

<style lang="sass">

</style>
