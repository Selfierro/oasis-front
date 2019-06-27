<template lang="pug">
    .lang
        NLink(:to="switchLocaleInPath('ru')", :class="$store.getters['getLocale'] === 'ru' ? 'active' : ''") RU
        NLink(:to="switchLocaleInPath('en')", :class="$store.getters['getLocale'] === 'en' ? 'active' : ''") ENG
</template>

<script>
  export default {
    name: 'LocaleSwitcher',
    methods: {
        switchLocaleInPath(newLocale) {
            let currentLocale = this.$store.getters['getLocale'];

            return this.$nuxt.$route.path.replace(currentLocale, newLocale)
        }
    }
  }
</script>

<style lang="sass">

</style>
