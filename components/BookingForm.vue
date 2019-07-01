<template lang="pug">
    form(@submit.prevent="createBooking")
        .flexGrid
            .flexItem
                div
                    input(placeholder="Выберите дату заезда" type="text" v-model="coming_date" required="'required'",
                            format="yyyy-MM-dd" :phrases="dt_phrases")
                    span(v-for="e in errors.collect('coming_date')") {{ e }}
                div
                    input(placeholder="Ваше имя" type="text" v-model="full_name" required="'required'")
                    span(v-for="e in errors.collect('full_name')") {{ e }}
                div
                    input(placeholder="Номер телефона" type="text" v-model="phone" required="'required'")
                    span(v-for="e in errors.collect('phone')") {{ e }}
                div
                    input(placeholder="Гостей" type="number" v-model="adult_quantity" required="'required'")
                    span(v-for="e in errors.collect('adult_quantity')") {{ e }}
                div
                    input(placeholder="Детей" type="number" v-model="children_quantity" required="'required'")
                    span(v-for="e in errors.collect('children_quantity')") {{ e }}
            .flexItem
                div
                    input(placeholder="Выберите дату выезда" type="text" v-model="leaving_date" required="'required'",
                             format="yyyy-MM-dd" :phrases="dt_phrases")
                    span(v-for="e in errors.collect('leaving_date')") {{ e }}
                div
                    input(placeholder="Электронная почта" type="email" v-model="email" required="'required'")
                    span(v-for="e in errors.collect('email')") {{ e }}
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
    components: {

    },
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
            dt_phrases: {
                ok: 'OK',
                cancel: 'Отмена'
            }
        }
    },
    methods: {
        async createBooking() {
            this.$validate(this, async () => {
                let result = await this.$api('post', '/booking/create/', {
                    leaving_date: this.leaving_date,
                    adult_quantity: this.adult_quantity,
                    coming_date: this.coming_date,
                    children_quantity: this.children_quantity,
                    phone: this.phone,
                    rooms: this.rooms,
                    full_name: this.full_name,
                    email: this.email,
                })

                if (result['success']) {

                } else {
                    this.$pushErrors(this, result['response'].data)
                }
            })
        },
        getImage(gallery) {
            return gallery.length > 0 ? gallery[0].image : null
        }
    },
    mounted() {
        this.$nuxt.$on('ROOM_CHOSEN', (id) => {
            this.rooms.push(id)
        })
    }
  }
</script>

<style scoped>

</style>
