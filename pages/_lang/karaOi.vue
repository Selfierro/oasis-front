<template lang="pug">
    div.karaOi
        KaraOiHeader
        .slider

            hooper(:settings="hooperSettings")
                slide(v-for="(slide, index) in 5" :key="index")
                    div.item
                        img(src="~/static/jpg/slide2.jpg")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        .aboutUs
            .container
                .wrapper
                    h2 О НАС
                    p.
                        Центр отдыха «Оазис Кара-ой» расположен на побережье одного из самых красивых и чистых озер на Земле - Иссык-Куль, в его северной части  - селе Кара-Ой.
                        Расстояние от города Бишкек - 250 км, от города Чолпон-Ата - 5 км.
                        Территория «Оазис Кара-ой» утопает в зелени, великолепных деревьев и цветов.
                        А что бы добраться до песчаного пляжа вам понадобится пройти всего 5-7 минут и вы можете насладится теплой водой кристально чистого озера.
                .flexContainer
                    .flexGrid
                        .flexItem
                            h3 What is Lorem Ipsum?
                            p.
                                «Оазис Кара-ой» предлагает для вашего отдыха однокомнатные и двухкомнатные номера, которые оснащены всем необходимым. В каждом номере есть своя мини-кухня с небольшим набором посуды, телевизор со спутниковым телевидением,  холодильник, а так же постельное белье и свой сан. узел.
                        .flexItem
                            h3 What is Lorem Ipsum?
                            p.
                                Если у вас большая семья или вы хотите отдохнуть  компанией с друзьями, мы предлагаем вам остановится в особняке. Максимальное количество гостей - 11 человек.  На первом этаже нахо-дится гостиная, столовая зона, кухня и терраса.  На втором этаже есть 3 спальни с 2х спальны-ми кроватями, в каждой из них свой сан.узел. А также, на втором этаже есть терраса с замеча-тельным видом.
                        .flexItem
                            h3 What is Lorem Ipsum?
                            p.
                                В распоряжении наших гостей - детская площадка, парковка и топчаны которые располагают
                                к приятному досугу.
                                Так же на территории «Оазис Кара-ой», для гостей работает кафе с национальной кыргызской, европейской и азиатской кухней.  По желанию, вы можете заказать
                                у нас питание.
                                Мы заботимся о своих гостях и для комфортного и безопасного отдыха территория круглосуточно охраняется, посторонним вход строго запрещен.
        .reservation
            .container
                h1 БРОНИРОВАНИЕ НА САЙТЕ
                p Вы можете выбрать номер и все доступные опции, <br> забронировать его прямо на сайте
                .wrapper
                BookingForm
        .hotel
            h2 номера
            .hotelGrid
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(sync='slider1' :settings="hooperSettings2").bigSlide
                                slide(v-for="item in 7" :key="index")
                                    img(src="~/static/jpg/nomer.jpg")
                                hooper-navigation(slot='hooper-addons')
                            .priceWrapper
                                div.start
                                    .rooms 1 комнатный номер
                                    .peoples на 2х человек
                                div.end
                                    .prices 1000 сом
                        hooper(ref='slider1' :settings="hooperSettings3").smallSlide
                            slide(v-for="item in 7" :key="index")
                                img(src="~/static/jpg/nomer.jpg")
                    .rightSide
                        label() забронировать
                        ul
                            li • 2х спальная кровать
                            li • мини кухня
                            li • посуда
                            li • чайник
                            li • телевизор
                            li • спальный гарнитур
                            li • журнальный столик
                            li • постельное белье
                            li • сан.узел с душ кабиной
                        h6 размещение макс 2 человек
            .hotelGrid
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(sync='slider2' :settings="hooperSettings2").bigSlide
                                slide(v-for="item in 7" :key="index")
                                    img(src="~/static/jpg/nomer.jpg")
                                hooper-navigation(slot='hooper-addons')
                            .priceWrapper
                                div.start
                                    .rooms 1 комнатный номер
                                    .peoples на 2х человек
                                div.end
                                    .prices 1000 сом
                        hooper(ref='slider2' :settings="hooperSettings3").smallSlide
                            slide(v-for="item in 7" :key="index")
                                img(src="~/static/jpg/nomer.jpg")
                    .rightSide
                        label() забронировать
                        ul
                            li • 2х спальная кровать
                            li • мини кухня
                            li • посуда
                            li • чайник
                            li • телевизор
                            li • спальный гарнитур
                            li • журнальный столик
                            li • постельное белье
                            li • сан.узел с душ кабиной
                            h6 размещение макс 2 человек
            .hotelGrid
                .ItemHotel
                    .leftSide
                        .wrapperShadow
                            hooper(:settings="hooperSettings2").bigSlide
                                slide(v-for="item in 7" :key="index")
                                    img(src="~/static/jpg/nomer.jpg")
                                hooper-navigation(slot='hooper-addons')
                    .rightSide
                        h4 кафе
                        p Каждый день с 7:00 до 10:00 в ресторане "Хачо и Пури" наших гостей ждет сытный завтрак (шведский стол), с возможностью заказа еды в номер.
        .carousel
            hooper(:settings="hooperSettings4")
                slide(v-for="item in 7" :key="index")
                    img(src="~/static/jpg/nomer.jpg")
                hooper-navigation(slot='hooper-addons')
                hooper-pagination(slot='hooper-addons')
        SecondFooter
</template>

<script>
    import ItemHotel from '~/components/ItemHotel'
    import KaraOiHeader from '~/components/headers/KaraOiHeader'
    import SecondFooter from '~/components/footers/SecondFooter'
    import BookingForm from '~/components/BookingForm'
    import { Hooper, Slide, Navigation as HooperNavigation , Pagination as HooperPagination  } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        components: { KaraOiHeader, SecondFooter, Hooper, Slide, HooperNavigation, HooperPagination, BookingForm, ItemHotel },
        data () {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 1
                },
                hooperSettings2: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 1
                },
                hooperSettings3: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 6
                },
                hooperSettings4: {
                    wheelControl: false,
                    touchDrag: true,
                    mouseDrag: true,
                    itemsToShow: 3,
                    centerMode: true,
                    breakpoints: {
                        320: {
                            centerMode: false,
                            itemsToShow: 1
                        },
                        800: {
                            centerMode: false,
                            itemsToShow: 2
                        },
                        1000: {
                            centerMode: false,
                            itemsToShow: 3
                        },
                    }
                }
            }
        }
    }
</script>

<style lang="sass">

</style>
