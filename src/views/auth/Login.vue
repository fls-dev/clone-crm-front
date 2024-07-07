<template>
  <div class="authentication-wrapper authentication-cover">
    <!-- Logo -->
    <a href="/../index.html" class="auth-cover-brand d-flex align-items-center gap-2">
        <span class="app-brand-logo demo">
          <span style="color: var(--bs-primary)">
            <svg width="268" height="150" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M30.0944 2.22569C29.0511 0.444187 26.7508 -0.172113 24.9566 0.849138C23.1623 1.87039 22.5536 4.14247 23.5969 5.92397L30.5368 17.7743C31.5801 19.5558 33.8804 20.1721 35.6746 19.1509C37.4689 18.1296 38.0776 15.8575 37.0343 14.076L30.0944 2.22569Z"
                  fill="currentColor" />
              <path
                  d="M30.171 2.22569C29.1277 0.444187 26.8274 -0.172113 25.0332 0.849138C23.2389 1.87039 22.6302 4.14247 23.6735 5.92397L30.6134 17.7743C31.6567 19.5558 33.957 20.1721 35.7512 19.1509C37.5455 18.1296 38.1542 15.8575 37.1109 14.076L30.171 2.22569Z"
                  fill="url(#paint0_linear_2989_100980)"
                  fill-opacity="0.4" />
              <path
                  d="M22.9676 2.22569C24.0109 0.444187 26.3112 -0.172113 28.1054 0.849138C29.8996 1.87039 30.5084 4.14247 29.4651 5.92397L22.5251 17.7743C21.4818 19.5558 19.1816 20.1721 17.3873 19.1509C15.5931 18.1296 14.9843 15.8575 16.0276 14.076L22.9676 2.22569Z"
                  fill="currentColor" />
              <path
                  d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z"
                  fill="currentColor" />
              <path
                  d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z"
                  fill="url(#paint1_linear_2989_100980)"
                  fill-opacity="0.4" />
              <path
                  d="M7.82901 2.22569C8.87231 0.444187 11.1726 -0.172113 12.9668 0.849138C14.7611 1.87039 15.3698 4.14247 14.3265 5.92397L7.38656 17.7743C6.34325 19.5558 4.04298 20.1721 2.24875 19.1509C0.454514 18.1296 -0.154233 15.8575 0.88907 14.076L7.82901 2.22569Z"
                  fill="currentColor" />
              <defs>
                <linearGradient
                    id="paint0_linear_2989_100980"
                    x1="5.36642"
                    y1="0.849138"
                    x2="10.532"
                    y2="24.104"
                    gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-opacity="1" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_2989_100980"
                    x1="5.19475"
                    y1="0.849139"
                    x2="10.3357"
                    y2="24.1155"
                    gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-opacity="1" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      <span class="app-brand-text demo text-heading fw-semibold">Materialize</span>
    </a>
    <!-- /Logo -->
    <div class="authentication-inner row m-0">
      <!-- /Left Section -->
      <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center justify-content-center p-12 pb-2">
        <img
            src="/assets/img/illustrations/auth-login-illustration-light.png"
            class="auth-cover-illustration w-100"
            alt="auth-illustration"
            data-app-light-img="illustrations/auth-login-illustration-light.png"
            data-app-dark-img="illustrations/auth-login-illustration-dark.png" />
        <img
            src="/assets/img/illustrations/auth-cover-login-mask-light.png"
            class="authentication-image"
            alt="mask"
            data-app-light-img="illustrations/auth-cover-login-mask-light.png"
            data-app-dark-img="illustrations/auth-cover-login-mask-dark.png" />
      </div>
      <!-- /Left Section -->

      <!-- Login -->
      <div
          class="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg position-relative py-sm-12 px-12 py-6">
        <div class="w-px-400 mx-auto pt-5 pt-lg-0">
          <h4 class="mb-1">{{ $t("authorization.log_title") }} 👋</h4>
          <p class="mb-5">Please sign-in to your account and start the adventure</p>

          <form id="formAuthentication" @submit.prevent="actionLogin" class="mb-5">
            <div class="form-floating form-floating-outline mb-5">
              <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email-username"
                  v-model=login :placeholder="$t('authorization.pl_email')"
                  autofocus />
              <label for="email">{{ $t('authorization.email') }}</label>
            </div>
            <div class="mb-5">
              <div class="form-password-toggle">
                <div class="input-group input-group-merge">
                  <div class="form-floating form-floating-outline">
                    <input
                        id="password"
                        class="form-control"
                        name="password"
                        :type="passwordType" v-model=password :placeholder="$t('authorization.pass')"
                        aria-describedby="password" />
                    <label for="password">{{ $t('authorization.pass') }}</label>
                  </div>
                  <span class="input-group-text cursor-pointer">
                    	<i v-if="passwordType === 'password'" class="ri-eye-off-line" @click="setPasswordType('text')"></i>
									<i v-if="passwordType === 'text'" class="ri-eye-line" @click="setPasswordType('password')"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="mb-5 d-flex justify-content-between mt-5">
              <div class="form-check mt-2">
                <input class="form-check-input" type="checkbox" id="remember-me" />
                <label class="form-check-label" for="remember-me">{{ $t('authorization.remember') }}</label>
              </div>
              <router-link to="/forgot">
                <span>{{ $t('authorization.forgot') }}</span>
              </router-link>
            </div>
            <button class="btn btn-primary d-grid w-100">{{ $t('authorization.btn_login') }}</button>
          </form>

          <p class="text-center">
            <span>{{ $t('authorization.no_acc') }} </span>
            <router-link to="/signup">
              <span>{{ $t('authorization.no_acc_2') }}</span>
            </router-link>
          </p>

          <div class="divider my-5">
            <div class="divider-text">{{ $t('authorization.lang') }}</div>
          </div>

          <div class="d-flex justify-content-center gap-2">
            <a @click="setLang('ru')" class="btn btn-icon rounded-circle">
              <i class="tf-icons">RU</i>
            </a>

            <a @click="setLang('pl')" class="btn btn-icon rounded-circle">
              <i class="tf-icons">PL</i>
            </a>

            <a @click="setLang('en')" class="btn btn-icon rounded-circle">
              <i class="tf-icons">EN</i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Login -->
    </div>
  </div>


<!--  <div class="vh-100">-->
<!--    <div class="authincation h-100">-->
<!--      <div class="container-fluid h-100">-->
<!--        <div class="row h-100">-->
<!--          <div class="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">-->
<!--            <div class="login-form">-->
<!--              <div class="text-center">-->
<!--                <h3 class="title mb-4">{{ $t("authorization.log_title") }}</h3>-->
<!--                <div class="language-line">-->
<!--                  <button @click="setLang('ru')">RU</button>-->
<!--                  <button @click="setLang('pl')">PL</button>-->
<!--                  <button @click="setLang('en')">EN</button>-->
<!--                </div>-->
<!--&lt;!&ndash;                <p>Sign in to your account to start using Dompact</p>&ndash;&gt;-->
<!--              </div>-->
<!--              <form @submit.prevent="actionLogin">-->
<!--                <div class="mb-4">-->
<!--                  <label class="mb-1 text-dark">{{ $t('authorization.email') }}</label>-->
<!--                  <input class="form-control" v-model=login :placeholder="$t('authorization.pl_email')">-->
<!--                </div>-->
<!--                <div class="mb-4 position-relative">-->
<!--                  <label class="mb-1 text-dark">{{ $t('authorization.pass') }}</label>-->
<!--                  <input id="dlab-password" class="form-control" :type="passwordType" v-model=password :placeholder="$t('authorization.pass')">-->
<!--                  <span class="show-pass eye" :class="{ active: passwordType === 'text' }">-->

<!--									<i v-if="passwordType === 'password'" class="fa fa-eye-slash" @click="setPasswordType('text')"></i>-->
<!--									<i v-if="passwordType === 'text'" class="fa fa-eye" @click="setPasswordType('password')"></i>-->

<!--								</span>-->
<!--                </div>-->
<!--                <div class="form-row d-flex justify-content-between mt-4 mb-2">-->
<!--                  <div class="mb-4">-->
<!--                    <a href="page-forgot-password.html" class="btn-link text-primary">{{ $t('authorization.forgot') }}</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="text-center mb-4">-->
<!--                  <button type="submit" class="btn btn-primary btn-block">{{ $t('authorization.btn_login') }}</button>-->
<!--                </div>-->
<!--                <p class="text-center">{{ $t('authorization.no_acc') }}-->
<!--                  <a class="btn-link text-primary" href="page-register.html">{{ $t('authorization.no_acc_2') }}</a>-->
<!--                </p>-->
<!--              </form>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-6 col-lg-6">-->
<!--            <div class="pages-left h-100">-->
<!--              <div class="login-content">-->
<!--                <a href="index.html"><img src="/src/assets/images/logo-full.png" class="mb-3 logo-login" alt=""></a>-->

<!--                <p>Your true value is determined by how much more you give in value than you take in payment. ...</p>-->
<!--              </div>-->
<!--              <div class="login-media text-center">-->
<!--                <img src="/src/assets/images/login.png" alt="">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="background-login">-->
<!--    <div class="language">-->
<!--      <select @change="setLang($event)" v-model=lang>-->
<!--        <option value="en">EN</option>-->
<!--        <option value="pl">PL</option>-->
<!--        <option value="ru">RU</option>-->
<!--      </select>-->
<!--    </div>-->
<!--    <div></div>-->
<!--    <div class="box-shadow">-->
<!--      <router-link class="link-white" to="/"><div class="logo"><span>C</span>LONE<span>CRM</span></div></router-link>-->
<!--      <div v-if="isLogin">-->
<!--        <p class="title">{{ $t("authorization.log_title") }}</p>-->
<!--        <form @submit.prevent="actionLogin" class="login-form">-->
<!--          <label>{{ $t('authorization.email') }}</label>-->
<!--          <input type="text" v-model=login :placeholder="$t('authorization.pl_email')" class="login">-->
<!--          <label>{{ $t('authorization.pass') }}</label>-->
<!--          <input type="password" v-model=password :placeholder="$t('authorization.pass')" class="password">-->
<!--          <button type="submit">{{ $t('authorization.btn_login') }}</button>-->
<!--        </form>-->
<!--      </div>-->

<!--      <div v-if="isForgot">-->
<!--        <p class="title-marg">{{ $t('authorization.p_change') }}</p>-->
<!--        <p class="sub-title">{{ $t('authorization.enter_email') }}</p>-->
<!--        <form class="forgot-form">-->
<!--          <label>{{ $t('authorization.pl_email') }}</label>-->
<!--          <input type="email" v-model=loginForgot>-->
<!--          <div class="register-box-btn">-->
<!--            <button class="btn-reg" type="submit">{{ $t('authorization.btn_ch') }}</button>-->
<!--            <button class="btn-cancel" @click="goLogin" type="button">{{ $t('authorization.cancel')}}</button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->

<!--      <div v-if="isRegister">-->
<!--        <p class="title-marg">{{$t('authorization.reg_title')}}</p>-->
<!--        <p class="sub-title">{{$t('authorization.reg_sub_title')}}</p>-->
<!--        <form class="register-form">-->
<!--          <label>{{$t('authorization.reg_last_name')}}<span>*</span></label>-->
<!--          <input type="text" v-model=lastName>-->
<!--          <label>{{ $t('authorization.reg_name') }} <span>*</span></label>-->
<!--          <input type="text" v-model=firstName>-->
<!--          <label>{{$t('authorization.email')}}<span>*</span></label>-->
<!--          <input type="text" v-model=emailRegister>-->
<!--          <label>{{$t('authorization.pass')}} <span>*</span></label>-->
<!--          <input type="password" v-model=passwordR>-->
<!--          <label>{{$t('authorization.reg_rep_pass')}}<span>*</span></label>-->
<!--          <input type="password" v-model=passwordR2>-->
<!--          <label>{{$t('authorization.reg_phone')}} <span>*</span></label>-->
<!--          <input type="text" v-model=phone>-->
<!--          <p class="little-text">Dokonując rejestracji, akceptujesz Regulamin crm.mcgroup.pl wraz z Polityką Prywatności-->
<!--            i Cookies oraz zawierasz z MIA CONSULT GROUP Sp. z o.o. Umowę powierzenia przetwarzania danych osobowych.-->
<!--          </p>-->
<!--          <div class="register-box-btn">-->
<!--            <button class="btn-reg" type="submit">{{$t('authorization.btn_reg')}}</button>-->
<!--            <button class="btn-cancel" @click="goLogin" type="button">{{$t('authorization.cancel')}}</button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
<!--      <p class="link-forgot" @click="goForgot">{{ $t('authorization.forgot') }}</p>-->
<!--      <p v-if="isRegisterBtn">{{ $t('authorization.no_acc') }}<span class="register" @click="goRegister">{{ $t('authorization.no_acc_2') }}</span></p>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <div class="icon-pay">-->
<!--        <img src="@/assets/img/login/pay1.svg">-->
<!--        <img src="@/assets/img/login/pay2.svg">-->
<!--        <img src="@/assets/img/login/pay3.svg">-->
<!--        <img src="@/assets/img/login/pay4.svg">-->
<!--        <img src="@/assets/img/login/pay5.svg">-->
<!--      </div>-->
<!--     <p> 2022 © MIA CONSULT GROUP Sp. z o.o. | v3.2 | NIP: 1133018235 |Oferta |Regulamin |Cookies | Support: support@mcgroup.pl</p>-->
<!--    </div>-->
<!--  </div>-->

</template>

<!-- JAVASCRIPT -->
<script>
import i18n from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";
import {useAuthStore} from "@/stores";
import { onMounted, onUnmounted } from 'vue';
// import {setConfig} from "/set-config";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      login: '',
      password: '',
      //
      loginForgot: '',
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
      lang: i18n.global.locale,
      passwordType: 'password',
      fullYear: new Date().getFullYear()
    }
  },
  setup() {
    let originalClass = '';

    onMounted(() => {
      originalClass = document.documentElement.className;
      document.documentElement.className = 'light-style layout-wide customizer-hide';
    });

    onUnmounted(() => {
      document.documentElement.className = originalClass;
    });
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
    setLang(lang){
      this.lang = lang;
      useInfoStore().setAppLanguage(lang,this.$route.meta.title)
    },
    actionLogin(){
      console.log(this.login, this.password)
      useAuthStore().login(this.login, this.password)
    },
    setPasswordType(type){
      console.log(type)
      this.passwordType = type;
    },
  },
  mounted() {
    if(localStorage.spruhalandingdarktheme){
      document.querySelector("html").setAttribute("data-style","dark")
    }
    if(localStorage.spruhalandingrtl){
      document.querySelector("html").setAttribute("dir","rtl")
      document.querySelector("#style")?.setAttribute("href", "/assets/libs/bootstrap/css/bootstrap.rtl.min.css");
    }
    i18n.global.locale.value = useInfoStore().getAppLanguage
    // console.log(setConfig.settings.baseURL)
  }
};
</script>

<style scoped>

</style>
