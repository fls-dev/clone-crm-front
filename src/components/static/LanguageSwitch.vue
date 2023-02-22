<template>
  <div class="language">
    <select @change="setLang($event)" v-model=lang>
      <option value="en">EN</option>
      <option value="pl">PL</option>
      <option value="ru">RU</option>
    </select>
  </div>
</template>

<script>

import i18n from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";

export default {
  name: "LanguageSwitch",
  data() {
    return {
      lang: i18n.global.locale
    }
  },
  methods:{
    setLang(event){
      useInfoStore().setAppLanguage(event.target.value)
    },
  },
  mounted() {
    i18n.global.locale.value = useInfoStore().getAppLanguage
  }
}
</script>

<style scoped>
.language{
  margin-right: 15px;
}
.language select{
  outline: none;
  appearance: none;
  background-color: transparent;
  padding: 8px;
  margin: 0;
  width: 35px;
  height: 35px;
  font-size: 14px;
  font-family: inherit;
  line-height: inherit;
  color: #fff;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
}
</style>
