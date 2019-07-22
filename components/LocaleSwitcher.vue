<template lang="pug">
    .lang
        NLink(:to="switchLocaleInPath('ru')", :class="$store.getters['getLocale'] === 'ru' ? 'active' : ''") РУС
        NLink(:to="switchLocaleInPath('en')", :class="$store.getters['getLocale'] === 'en' ? 'active' : ''") ENG
</template>

<script>
  export default {
    name: 'LocaleSwitcher',
    methods: {
        switchLocaleInPath(newLocale) {
            let currentLocale = this.$store.getters['getLocale'];
            let path = this.$nuxt.$route.path

            if (path === '/') {
                return `/${newLocale}`
            }

            return path.replace(currentLocale, newLocale)
        }
    }
  }
</script>

<style lang="sass">

</style>
