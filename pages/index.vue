<template lang="pug">
    div
        MainHeader
        .bannerChoiceHotel.actions
            .flex.active
                .item.leftImage
                    img(src="~/static/svg/oasisResidence.svg").logo
                    img(src="~/static/png/leftBanner.png").hotelLeft
                .item.rightImage
                    img(src="~/static/svg/oasisKaraOi.svg").logo
                    img(src="~/static/png/rightBanner.png").hotelRight
        .reservation
            .container
                h1 БРОНИРОВАНИЕ НА САЙТЕ
                p Вы можете выбрать номер и все доступные опции, <br> забронировать его прямо на сайте
                form
                    .flexGrid
                        .flexItem
                            div
                                input(placeholder="Выберите дату заезда" type="text" id="dataIn")
                            div
                                input(placeholder="Ваше имя" type="text" id="name")
                            div
                                input(placeholder="Номер телефона" type="text" id="phone")
                            div
                                input(placeholder="Гостей" type="number" id="geust")
                            div
                                input(placeholder="Детей" type="number" id="child")
                        .flexItem
                            div
                                input(placeholder="Выберите дату выезда" type="text" id="dataOut")
                            div
                                input(placeholder="Электронная почта" type="text" id="email")
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
        .newsSlider
            hooper(sync='slider' class="imageText" :wheelControl='false' :touchDrag='false' :mouseDrag='false')
                slide
                    div
                        h2 новости и мероприятия
                        h3 What is Lorem Ipsum?
                        p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page 1960s with the release of Letraset sheets software like Aldus Page..........
                slide
                    div
                        h2 новости и мероприятия
                        h3 What is Lorem Ipsum?
                        p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum

            hooper(ref='slider', :itemsToShow='1', :centerMode='true' :wheelControl='false' :touchDrag='false' :mouseDrag='false' class="imageSlider")
                slide
                    img(src="~/static/jpg/slide.jpg")
                slide
                    img(src="~/static/jpg/nomer.jpg")
                hooper-navigation(slot='hooper-addons')
        .aboutOasis
            .container
                h2 почему вы должны выбрать отель “ОASIS”
                .flexGrid
                    .flexItem
                        div(style="background-image: url(/svg/location.svg)")
                            h3 Удобное расположение
                            p за настоящий пятизвездочный отель в Кыргызстане
                    .flexItem
                        div(style="background-image: url(/svg/24-hours.svg)")
                            h3 Круглосуточное обслуживание
                            p Ваш номер будет готов к заселению в любое время дня и ночи
                    .flexItem
                        div(style="background-image: url(/svg/key.svg)")
                            h3 Просторные номера
                            p 96 номеров восьми категорий в Jannat Regency и 85 номеров четырех категорий в Jannat Resort
                    .flexItem
                        div(style="background-image: url(/svg/tray.svg)")
                            h3 Собственный ресторан и бар
                            p банкетных залов, а также аллеи бракосочетания позволят сделать Ваше мероприятие в нашей гостинице особенным и запоминающимся
                    .flexItem
                        div(style="background-image: url(/svg/parking.svg)")
                            h3 Парковка для автомобилей
                            p с кристально чистой водой, и сауна позволят сохранить и укрепить форму во время Вашего пребывания у нас
                    .flexItem
                        div(style="background-image: url(/svg/conference.svg)")
                            h3 Конференц-зал
                            p Современные и функциональные конференц-залы позволят провести Ваше мероприятие на самом высоком уровне
        .reviews
            .container
                hooper(:settings="hooperSettings")
                    slide(v-for="(slide, index) in 5" :key="index")
                        div.item
                            img(src="~/static/svg/Booking.com_logo.svg")
                            h5 Имя фамилия
                            span Март {{ index + 4 }} 2019
                            p.
                                Расположение отеля - огонь!
                                От ТЦ Галерея - минут 5 неспешно.
                                Новый отель, свежий, чудесная кровать.
                                Номер "Стандарт" был очень приличного размера, просторный и 2 больших высоких окна. Сам холл в стиле лофт, очень красиво всё сделано.
                                Всё свежее, добротно сделано, кровать - выше всех похвал, удобная и высокая. Внизу душевнейший ресторан грузинской кухни, пальцы скушать можно :)
                    hooper-navigation(slot='hooper-addons')
                    hooper-pagination(slot='hooper-addons')
        MainFooter
</template>

<script>
    import MainHeader from '../components/headers/MainHeader'
    import MainFooter from '../components/footers/MainFooter'

    import { Hooper, Slide, Navigation as HooperNavigation , Pagination as HooperPagination  } from 'hooper'
    import 'hooper/dist/hooper.css'

    export default {
        components: { MainHeader, MainFooter, Hooper, Slide, HooperNavigation, HooperPagination },
        data () {
            return {
                hooperSettings: {
                    wheelControl: false,
                    touchDrag: false,
                    mouseDrag: false,
                    breakpoints: {
                        640: {
                            itemsToShow: 1,
                            wheelControl: true,
                            touchDrag: true,
                            mouseDrag: true,
                        },
                        1000: {
                            itemsToShow: 2,
                            wheelControl: false,
                            touchDrag: false,
                            mouseDrag: false
                        },
                        1336: {
                            itemsToShow: 3,
                        }
                    },
                }
            }
        }
    }

</script>

<style lang="sass">
</style>
