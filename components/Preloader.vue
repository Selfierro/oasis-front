<template lang="pug">
    div.preloader
        div
            img(src="~/static/svg/oasis.svg")
            p Загружаем сайт
</template>

<script>
    export default {

    }
</script>

<style lang="sass">
    .preloader
        position: fixed
        top: 0
        bottom: 0
        right: 0
        left: 0
        z-index: 999
        background-color: $white
        display: flex
        align-items: center
        justify-content: center
        @include tr0-6
        opacity: 1
        text-align: center
        img
            width: 400px
            @media (max-width: 640px)
                width: 100%
        > div
            animation: bounce 2s infinite ease
        @keyframes bounce
            0%
                transform: translateY(0)
            50%
                transform: translateY(20px)
            100%
                transform: translateY(0)

</style>
