<template lang="pug">
    form
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
                        .flexItem
                            label
                                input(type="checkbox")
                                span.indicator
                                img(src="~/static/jpg/nomer.jpg")
                                | 1 комнатный номер
                        .flexItem
                            label
                                input(type="checkbox")
                                span.indicator
                                img(src="~/static/jpg/nomer.jpg")
                                | 2х комнатный номер
                        .flexItem
                            label
                                input(type="checkbox")
                                span.indicator
                                img(src="~/static/jpg/nomer.jpg")
                                | 2х комнатный улучшенный
                        .flexItem
                            label
                                input(type="checkbox")
                                span.indicator
                                img(src="~/static/jpg/nomer.jpg")
                                | Особняк
        button.send забронировать
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
            rooms: []
        }
    }
  }
</script>

<style scoped>

</style>
