<template lang="pug">
    form(@submit.prevent="createBooking")
        .flexGrid
            .flexItem
                div
                    datetime(:placeholder="$t('booking_form.coming_date')" type="text" v-model="coming_date" required="required",
                            format="yyyy-MM-dd" :phrases="phrases")
                    span(v-for="e in errors.collect('coming_date')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.full_name')" type="text" v-model="full_name" required="'required'")
                    span(v-for="e in errors.collect('full_name')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.phone')" type="text" v-model="phone" required="'required'")
                    span(v-for="e in errors.collect('phone')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.adult_quantity')" type="number" v-model="adult_quantity" required="'required'")
                    span(v-for="e in errors.collect('adult_quantity')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.children_quantity')" type="number" v-model="children_quantity" required="'required'")
                    span(v-for="e in errors.collect('children_quantity')") {{ e }}
            .flexItem
                div
                    datetime(:placeholder="$t('booking_form.leaving_date')" type="text" v-model="leaving_date" required="required",
                             format="yyyy-MM-dd" :phrases="phrases")
                    span(v-for="e in errors.collect('leaving_date')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.email')" type="email" v-model="email" required="'required'")
                    span(v-for="e in errors.collect('email')") {{ e }}
                div
                    .nameForm {{ $t('booking_form.choose_rooms') }}
                    .flexGridInner
                        .flexItem(v-for="item in rooms_choices")
                            label
                                input(type="checkbox", v-model="rooms", :value="item.id")
                                span.indicator
                                img(:src="getImage(item.gallery)")
                                | {{ item.title }}
        button(type="submit").send {{ $t('booking_form.book') }}
</template>

<script>

  import { Datetime } from 'vue-datetime'
  import 'vue-datetime/dist/vue-datetime.css'

  import { Settings } from 'luxon'

  export default {
    name: 'BookingForm',
    components: {
        Datetime
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
            phrases: {
                ok: 'ОК',
                cancel: this.$t('cancel'),
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
        Settings.defaultLocale = this.$store.getters['getLocale']

        this.$nuxt.$on('ROOM_CHOSEN', (id) => {
            this.rooms.push(id)
        })
    }
  }
</script>

<style scoped>

</style>
