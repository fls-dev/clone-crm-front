<template>
  <div class="background-login">
    <div class="language">
      <select @change="setLang($event)" v-model=lang>
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="ru">RU</option>
      </select>
    </div>
    <div></div>
    <div class="box-shadow">
      <router-link class="link-white" to="/"><div class="logo"><span>C</span>LONE<span>CRM</span></div></router-link>
      <div v-if="isLogin">
        <p class="title">{{ $t("authorization.log_title") }}</p>
        <form class="login-form">
          <label>{{ $t('authorization.email') }}</label>
          <input type="email" :value="login" :placeholder="$t('authorization.pl_email')" class="login">
          <label>{{ $t('authorization.pass') }}</label>
          <input type="password" :value="password" :placeholder="$t('authorization.pass')" class="password">
          <button type="submit">{{ $t('authorization.btn_login') }}</button>
        </form>
      </div>

      <div v-if="isForgot">
        <p class="title-marg">{{ $t('authorization.p_change') }}</p>
        <p class="sub-title">{{ $t('authorization.enter_email') }}</p>
        <form class="forgot-form">
          <label>{{ $t('authorization.pl_email') }}</label>
          <input type="email" :value="login">
          <div class="register-box-btn">
            <button class="btn-reg" type="submit">{{ $t('authorization.btn_ch') }}</button>
            <button class="btn-cancel" @click="goLogin" type="button">{{ $t('authorization.cancel')}}</button>
          </div>
        </form>
      </div>

      <div v-if="isRegister">
        <p class="title-marg">{{$t('authorization.reg_title')}}</p>
        <p class="sub-title">{{$t('authorization.reg_sub_title')}}</p>
        <form class="register-form">
          <label>{{$t('authorization.reg_last_name')}}<span>*</span></label>
          <input type="text" :value="lastName">
          <label>{{ $t('authorization.reg_name') }} <span>*</span></label>
          <input type="text" :value="firstName">
          <label>{{$t('authorization.email')}}<span>*</span></label>
          <input type="text" :value="emailRegister">
          <label>{{$t('authorization.pass')}} <span>*</span></label>
          <input type="password" :value="passwordR">
          <label>{{$t('authorization.reg_rep_pass')}}<span>*</span></label>
          <input type="password" :value="passwordR2">
          <label>{{$t('authorization.reg_phone')}} <span>*</span></label>
          <input type="text" :value="phone">
          <p class="little-text">Dokonując rejestracji, akceptujesz Regulamin crm.mcgroup.pl wraz z Polityką Prywatności
            i Cookies oraz zawierasz z MIA CONSULT GROUP Sp. z o.o. Umowę powierzenia przetwarzania danych osobowych.
          </p>
          <div class="register-box-btn">
            <button class="btn-reg" type="submit">{{$t('authorization.btn_reg')}}</button>
            <button class="btn-cancel" @click="goLogin" type="button">{{$t('authorization.cancel')}}</button>
          </div>
        </form>
      </div>
      <p class="link-forgot" @click="goForgot">{{ $t('authorization.forgot') }}</p>
      <p v-if="isRegisterBtn">{{ $t('authorization.no_acc') }}<span class="register" @click="goRegister">{{ $t('authorization.no_acc_2') }}</span></p>
    </div>
    <div class="footer">
      <div class="icon-pay">
        <img src="@/assets/img/login/pay1.svg">
        <img src="@/assets/img/login/pay2.svg">
        <img src="@/assets/img/login/pay3.svg">
        <img src="@/assets/img/login/pay4.svg">
        <img src="@/assets/img/login/pay5.svg">
      </div>
     <p> 2022 © MIA CONSULT GROUP Sp. z o.o. | v3.2 | NIP: 1133018235 |Oferta |Regulamin |Cookies | Support: support@mcgroup.pl</p>
    </div>
  </div>

</template>

<script>
import LanguageSwitch from "@/components/static/LanguageSwitch.vue";
import i18n from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";
// import {setConfig} from "../../set-config";

export default {
  name: "Login",
  components: {LanguageSwitch},
  data() {
    return {
      login: null,
      password: '',
      //
      lastName: null,
      firstName: null,
      emailRegister: null,
      passwordR: null,
      passwordR2: null,
      phone: null,

      isLogin: true,
      isForgot: false,
      isRegister: false,
      isRegisterBtn: true,
      lang: i18n.global.locale
    }
  },
  methods: {
    goRegister() {
      this.isRegister = true
      this.isLogin = false
      this.isForgot = false
      this.isRegisterBtn = false
    },
    goLogin() {
      this.isLogin = true
      this.isRegister = false
      this.isForgot = false
      this.isRegisterBtn = true
    },
    goForgot() {
      this.isLogin = false
      this.isRegister = false
      this.isForgot = true
      this.isRegisterBtn = true
    },
    setLang(event){
      useInfoStore().setAppLanguage(event.target.value,this.$route.meta.title)
    },
  },
  mounted() {
    i18n.global.locale.value = useInfoStore().getAppLanguage
    // console.log(setConfig.settings.baseURL)
  }
};
</script>

<style scoped>
.logo {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 20px auto;
  width: 180px;
  text-align: center;
}

.logo span {
  font-size: 30px;
  color: rgb(0, 142, 135);
}
.background-login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //background: #fff;
  background-image: url(@/assets/img/login/back_l.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:  center center;
}

.box-shadow {
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  padding: 75px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(168, 179, 187, 0.94);
  -moz-box-shadow: 0px 5px 10px 2px rgba(168, 179, 187, 0.94);
  box-shadow: 0px 5px 10px 2px rgba(168, 179, 187, 0.94);
  background: rgba(255, 255, 255, 0.96);
}

.login-form {
  margin-bottom: 30px;
}

.login-form input {
  padding: 0px 15px;
  display: block;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}

.register-form input , .forgot-form input, .forgot-form input{
  padding: 0px 15px;
  margin: 0 auto 10px auto;
  display: block;
  width: 100%;
  min-width: 300px;
  //max-width: 300px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}

.login-form .login {
  margin: 0 auto 10px auto;
}

.login-form .password {
  margin: 0 auto 20px auto;
}

.login-form input:focus, .register-form input:focus, .forgot-form input:focus{
  outline: none;
  border-bottom: 1px solid var(--active-color);
}

.login-form label, .register-form label, .forgot-form label {
  display: block;
  text-align: left;
  color: #9f9f9f;
  margin-bottom: 5px;
}

.login-form button {
  padding: 5px 15px;
  background: var(--btn-back-first);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
.background-login .title {
  color: var(--main-color);
  font-size: 1.3rem;
}

.link-forgot {
  cursor: pointer;
  color: var(--main-color);
}

.register {
  cursor: pointer;
  margin-left: 5px;
  color: var(--main-color);
}

.register-box-btn {
  margin: 20px auto 20px auto;
  display: flex;
  justify-content: space-between;
}

.btn-reg {
  padding: 5px 15px;
  background: var(--btn-back-first);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-cancel {
  padding: 5px 15px;
  background: #fff;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.title-marg {
  color: var(--main-color);
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.sub-title {
  color: var(--main-color);
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 15px;
}

.little-text {
  max-width: 300px;
  font-size: .5rem;
}
.logo {margin: 20px auto;}

.language{
  position: fixed;
  top: 20px;
  right: 50px;
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
  //color: #000;
  //border: 1px solid #000;
  color: #fff;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
}
.icon-pay img{width: 50px}
.icon-pay{
  display: flex;
  justify-content: center;
  column-gap: 7px;
  margin: 0 auto 15px auto;
}
.footer{text-align: center}
.footer p{color: #fff; font-size: .9rem}
.link-white {
  color: #313131;
}

@media screen and (max-width: 500px){
  .box-shadow{padding: 15px; margin-bottom: 20px}
  .background-login {min-height: 100%; height: auto}
  .register-form input,.forgot-form input,.login-form input {min-width: auto; box-sizing: border-box}
  .register-form,.forgot-form,.login-form{
    max-width: 280px;
    margin: 0 auto;
  }
  .sub-title{font-size: 0.7rem}
  .language {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .language select{
    color: #000;
    border: 1px solid #000;
  }
}
</style>
