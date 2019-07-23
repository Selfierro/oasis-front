<template lang="pug">
    form(@submit.prevent="createBooking")
        .flexGrid
            .flexItem
                div
                    datetime(:placeholder="$t('booking_form.coming_date')" id="dataIn" type="text" v-model="coming_date" required="required",
                            format="yyyy-MM-dd" :phrases="phrases")
                    span(v-for="e in errors.collect('coming_date')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.full_name')" id="name" type="text" v-model="full_name" required="'required'")
                    span(v-for="e in errors.collect('full_name')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.phone')" id="phone" type="text" v-model="phone" required="'required'")
                    span(v-for="e in errors.collect('phone')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.adult_quantity')" id="geust" type="number" v-model="adult_quantity" required="'required'")
                    span(v-for="e in errors.collect('adult_quantity')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.children_quantity')" id="child" type="number" v-model="children_quantity" required="'required'")
                    span(v-for="e in errors.collect('children_quantity')") {{ e }}
            .flexItem
                div
                    datetime(:placeholder="$t('booking_form.leaving_date')" id="dataOut" type="text" v-model="leaving_date" required="required",
                             format="yyyy-MM-dd" :phrases="phrases")
                    span(v-for="e in errors.collect('leaving_date')") {{ e }}
                div
                    input(:placeholder="$t('booking_form.email')" id="email" type="email" v-model="email" required="'required'")
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
                                | {{ item.subtitle }}
        button(type="submit").send {{ $t('booking_form.book') }}
        p(v-if="show_book_success") {{ book_success_msg }}
        p(v-for="msg in this.error_messages") {{ msg }}
</template>

<script>

  import { Datetime } from 'vue-datetime'
  import 'vue-datetime/dist/vue-datetime.css'
  import moment from 'moment'

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
            },
            book_success_msg: '',
            show_book_success: false,
            error_messages: []
        }
    },
    methods: {
        async createBooking() {
            this.error_messages = []
            this.show_book_success = false

            this.$validate(this, async () => {
                if (this.rooms.length > 0) {
                    let result = await this.$api('post', '/booking/create/', {
                        leaving_date: moment(this.leaving_date).format('YYYY-MM-DD'),
                        adult_quantity: this.adult_quantity,
                        coming_date: moment(this.coming_date).format('YYYY-MM-DD'),
                        children_quantity: this.children_quantity,
                        phone: this.phone,
                        rooms: this.rooms,
                        full_name: this.full_name,
                        email: this.email,
                    })

                    if (result['success']) {
                        this.book_success_msg = this.$t('book_success_msg').replace('%s', this.full_name)
                        this.$cleanForm(this, [
                            'leaving_date', 'adult_quantity', 'coming_date', 'children_quantity',
                            'phone', 'rooms', 'full_name', 'email'
                        ])
                        this.show_book_success = true
                    } else {
                        this.$pushErrors(this, result['response'].data)
                    }
                } else {
                    this.error_messages.push(this.$t('booking_form.no_room_error'))
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
            this.rooms = []
            this.rooms.push(id)
        })
    }
  }
</script>

<style scoped>

</style>
