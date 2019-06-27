<template lang="pug">
    footer.secondFooter
        .grid
            .left
                div
                    .margin
                        h3 OASIS кара-ой
                        p {{ contacts.karaoi_address }}
                        p {{ contacts.karaoi_booking_phone }}
                        p {{ contacts.karaoi_booking_mobile_phone }}
                    .margin
                        h3 ОТДЕЛ БРОНИРОВАНИЯ
                        p.
                            {{ contacts.karaoi_booking_email }}
                    .margin
                        h3 Общие вопросы/предложения
                        p.
                            {{ contacts.karaoi_common_email }}
            .right
                iframe(src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11695.94529647709!2d74.6283202!3d42.8731328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1560850063377!5m2!1sru!2skg', width='100%', height='100%', frameborder='0', style='border:0', allowfullscreen='')

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

