import Vue from 'vue';
import VeeValidate from 'vee-validate';
import locale_ru from 'vee-validate/dist/locale/ru'

Vue.use(VeeValidate);

VeeValidate.Validator.localize('ru', {
  messages: locale_ru.messages
})
