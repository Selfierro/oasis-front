<template lang="pug">
    header
        .container
            .flex
                .rightSide
                    .hotelLink
                        NLink(to="/residence").oasisResidence
                        NLink(to="/karaOi").oasisKaraOi
                .center
                .rightSide
                    .mail
                        a(href="mailto: mymail@gmail.com") mymail@gmail.com
                    .social
                        a(href="").instagram
                        a(href="").facebook
                    .lang
                        a(href="").active RU
                        a(href="") ENG
</template>

<script>
  export default {
    name: 'MainHeader'
  }
</script>

<style lang="sass">

</style>
