<template>
  <div class="header-menu">
    <div class="item">
      <div class="logo-box">
        <router-link class="link-white" to="/user">
          <div class="logo"><span>C</span>LONE<span>CRM</span></div>
        </router-link>
        <i @click="isSidebar" class="fa-light fa-bars fa-3x"></i>
      </div>
    </div>
    <div class="item">
      <span class="mr-15"><i class="fa-light fa-file-invoice"></i> : 30</span>
      <span class="mr-15"><i class="fa-light fa-list-check"></i> : 30</span>
      <span><i class="fa-light  fa-bullhorn"></i> : 30</span>
    </div>
    <div class="item add-menu">

        <i v-if="color === 'b-white'" @click="changeColor" class="fa-light fa-brightness day-night"></i>
        <i v-else  @click="changeColor" class="fa-light fa-moon day-night"></i>
      <LanguageSwitch/>
      <div class="head-info">
        <div class="auth-name"><span>Klient:</span> Pavel Misko</div>
        <router-link class="link-white" to="/user/profile">
        <img class="user-avatar" src="@/assets/img/avatar.png">
        </router-link>
        <i @click="logOut" class="fa-light fa-sign-out fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="mobile">
    <div class="logo"><span>C</span>LONE<span>CRM</span></div>
    <div>
      <i class="fa-light fa-bars fa-3x mr-15"></i>
      <i class="fa-light fa-ellipsis-vertical fa-3x"></i>
    </div>
  </div>
</template>

<script>
import LanguageSwitch from "@/components/static/LanguageSwitch.vue";
import i18n from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";
import {useAuthStore} from "@/stores";
import router from "@/router";

export default {
  name: "HeaderUser",
  components: {LanguageSwitch},
  data() {
    return {
    }
  },
  computed: {
    color () {
      return useInfoStore().getActiveColor
    }
  },
  methods: {
    isSidebar() {
      const s = document.querySelector('.sidebar');
      if (s) {
        s.classList.toggle('none')
      }
    },
    changeColor(){
      useInfoStore().setActiveColor(this.color)
    },
    logOut(){
      useAuthStore().user = null;
      useAuthStore().role = null;
      useAuthStore().accessToken = null;
      router.push('/login');
    }
  },

}
</script>

<style scoped>
.add-menu {
  display: flex;
  align-items: center;
}

.logo-box {
  display: flex;
  width: 100%;
//padding: 0 25px; justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 20px 15px;
  width: 180px;
  text-align: center;
}

.logo-box i {
  cursor: pointer
}

.logo span {
  font-size: 30px;
  color: rgb(0, 142, 135);
}

.link-white {
  color: white
}
.day-night{
  font-size: 19px;
  color: #fff;
  border-radius: 50px;
  border: 1px solid white;
  padding: 7px;
  margin-right: 15px;
  cursor: pointer;
}

@media screen and (min-width: 1020px) {
  .mobile {
    display: none
  }

  .header-menu {
    position: fixed;
    top: 0;
    color: white;
    background: #313131;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px 0 0;
    align-items: center;
    z-index: 1;
  }
}

@media screen and (max-width: 1020px) {
  .mobile {
    width: 100%;
    padding: 0px 20px;
    background: #313131;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    color: white;
  }

  .mobile i {
    cursor: pointer
  }

  .header-menu {
    display: none;
  }
}
</style>
