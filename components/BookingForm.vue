<template lang="pug">
    form(@submit.prevent="createBooking")
        .flexGrid
            .flexItem
                div
                    input(placeholder="Выберите дату заезда" type="text" v-model="coming_date")
                div
                    input(placeholder="Ваше имя" type="text" v-model="full_name")
                div
                    input(placeholder="Номер телефона" type="text" v-model="phone")
                div
                    input(placeholder="Гостей" type="number" v-model="adult_quantity")
                div
                    input(placeholder="Детей" type="number" v-model="children_quantity")
            .flexItem
                div
                    input(placeholder="Выберите дату выезда" type="text" v-model="leaving_date")
                div
                    input(placeholder="Электронная почта" type="text" v-model="email")
                div
                    .nameForm Выберите номер (можно несколько)
                    .flexGridInner
                        .flexItem(v-for="item in rooms_choices")
                            label
                                input(type="checkbox", v-model="rooms", :value="item.id")
                                span.indicator
                                img(:src="getImage(item.gallery)")
                                | {{ item.title }}
        button(type="submit").send забронировать
</template>

<script>
  export default {
    name: 'BookingForm',
    props: {
        rooms_choices: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            coming_date: '',
            full_name: '',
            phone: '',
            adult_quantity: '',
            children_quantity: '',
            leaving_date: '',
            email: '',
            rooms: [],
        }
    },
    methods: {
        async createBooking() {
            // let response = await this.$api('post', '/booking/create/', {
            //     leaving_date: this.leaving_date,
            //     adult_quantity: this.adult_quantity,
            //     coming_date: this.coming_date,
            //     children_quantity: this.children_quantity,
            //     phone: this.phone,
            //     rooms: this.rooms,
            //     full_name: this.full_name,
            //     email: this.email,
            // })
        },
        getImage(gallery) {
            return gallery.length > 0 ? gallery[0].image : null
        }
    }
  }
</script>

<style scoped>

</style>
