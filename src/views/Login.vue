<template>
  <!DOCTYPE html>
  <html lang="en" dir="ltr" data-nav-layout="vertical" data-theme-mode="light" data-header-styles="light" data-menu-styles="dark" data-toggled="close">

  <head>

    <!-- Meta Data -->
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> SPRUHA - Bootstrap 5 Premium Admin & Dashboard Template </title>
    <meta name="Description" content="Bootstrap Responsive Admin Web Dashboard HTML5 Template">
    <meta name="Author" content="Spruko Technologies Private Limited">
    <meta name="keywords" content="admin,admin dashboard,admin panel,admin template,bootstrap,clean,dashboard,flat,jquery,modern,responsive,premium admin templates,responsive admin,ui,ui kit.">

  </head>

  <body class="error-1">
  <div class="page main-signin-wrapper">

    <!-- Start::row-1 -->
    <div class="row signpages text-center">
      <div class="col-md-12">
        <div class="card mb-0">
          <div class="row row-sm">
            <div class="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
              <div class="mt-5 pt-4 p-2 position-absolute">
                <a href="index.html">
                  <img src="/assets/images/brand-logos/desktop-white.png" class="header-brand-img mb-4" alt="logo">
                </a>
                <div class="clearfix"></div>
                <img src="/assets/images/svgs/user.svg" class="ht-100 mb-0" alt="user">
                <h5 class="mt-4">Create Your Account</h5>
                <span class="text-white-6 fs-13 mb-5 mt-xl-0">Signup to your account to start using System</span>
              </div>
            </div>
            <div class="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
              <div class="main-container container-fluid">
                <div class="row row-sm">
                  <div class="card-body mt-2 mb-2">
                    <div class="clearfix"></div>
                    <form>
                      <h5 class="text-start mb-2">{{ $t("authorization.log_title") }}</h5>
                      <p class="mb-4 text-muted fs-13 ms-0 text-start">Sign in to your account to start using System</p>
                      <div class="form-group text-start">
                        <label class="form-label">{{ $t('authorization.email') }}</label>
                        <input class="form-control" v-model=login :placeholder="$t('authorization.pl_email')">
                      </div>
                      <div class="form-group text-start">
                        <label class="form-label">Password</label>
                        <input class="form-control" placeholder="Enter your password" type="password">
                      </div>
                      <div class="d-grid">
                        <a href="index.html" class="btn btn-primary">Sign In</a>
                      </div>
                    </form>
                    <div class="text-start mt-5 ms-0">
                      <div class="mb-1"><a href="forgot.html">Forgot password?</a></div>
                      <div>Don't have an account? <a href="signup.html">Register Here</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End::row-1 -->

  </div>

  </body>

  </html>
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
import LanguageSwitch from "@/components/static/LanguageSwitch.vue";
import i18n from "@/locales/i18n";
import {useInfoStore} from "@/stores/info.store";
import {useAuthStore} from "@/stores";
// import {setConfig} from "../../set-config";

export default {
  name: "Login",
  components: {LanguageSwitch},
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
      document.querySelector("html").setAttribute("data-theme-mode","dark")
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
