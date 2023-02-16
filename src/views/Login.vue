<template>
  <div class="background-login">
    <div class="box-shadow">
      <div class="logo"><span>C</span>LONE<span>CRM</span></div>
      <div v-if="isLogin">
        <p class="title">Logowanie</p>
        <form class="login-form">
          <label>Login</label>
          <input type="email" :value="login" class="login">
          <label>Password</label>
          <input type="password" :value="password" class="password">
          <button type="submit">Zaloguj się</button>
        </form>
      </div>

      <div v-if="isForgot">
        <p class="title-marg">Zmiana hasła</p>
        <p class="sub-title">Wpisz swój adres E-mail, aby zmienić hasło:</p>
        <form class="forgot-form">
          <label>E-mail lub login</label>
          <input type="email" :value="login">
          <div class="register-box-btn">
            <button class="btn-reg" type="submit">Zmienić hasło</button>
            <button class="btn-cancel" @click="goLogin" type="button">Anuluj</button>
          </div>
        </form>
      </div>

      <div v-if="isRegister">
        <p class="title-marg">Rejestracja</p>
        <p class="sub-title">Zarejestruj się, aby połączyć się z serwisem</p>
        <form class="register-form">
          <label>Nazwisko <span>*</span></label>
          <input type="text" :value="lastName">
          <label>Imię <span>*</span></label>
          <input type="text" :value="firstName">
          <label>E-mail <span>*</span></label>
          <input type="text" :value="emailRegister">
          <label>Hasło <span>*</span></label>
          <input type="password" :value="passwordR">
          <label>Powtórz hasło <span>*</span></label>
          <input type="password" :value="passwordR2">
          <label>Telefon <span>*</span></label>
          <input type="text" :value="phone">
          <p class="little-text">Dokonując rejestracji, akceptujesz Regulamin crm.mcgroup.pl wraz z Polityką Prywatności
            i Cookies oraz zawierasz z MIA CONSULT GROUP Sp. z o.o. Umowę powierzenia przetwarzania danych osobowych.
          </p>
          <div class="register-box-btn">
            <button class="btn-reg" type="submit">Zarejestrować</button>
            <button class="btn-cancel" @click="goLogin" type="button">Anuluj</button>
          </div>
        </form>
      </div>
      <p class="link-forgot" @click="goForgot">Nie pamiętasz hasła?</p>
      <p v-if="isRegisterBtn">Nie masz jeszcze konta?<span class="register" @click="goRegister">Rejestracja</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
    }

  }
};
</script>

<style scoped>
.background-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.box-shadow {
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  padding: 75px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(168, 179, 187, 0.94);
  -moz-box-shadow: 0px 5px 10px 2px rgba(168, 179, 187, 0.94);
  box-shadow: 0px 5px 10px 2px rgba(168, 179, 187, 0.94);
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
  max-width: 300px;
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
  border: none;
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
  background: var(--active-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
}
.background-login .title {
  color: var(--main-color);
  font-size: 1.6rem;
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
  background: var(--active-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
}

.btn-cancel {
  padding: 5px 15px;
  background: #fff;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
}

.title-marg {
  color: var(--main-color);
  font-size: 1.6rem;
  margin-bottom: 5px;
}

.sub-title {
  color: var(--main-color);
  font-size: 1.2rem;
  margin-top: 5px;
  margin-bottom: 15px;
}

.little-text {
  max-width: 300px;
  font-size: .7rem;
}
.logo {margin: 20px auto;}

</style>
