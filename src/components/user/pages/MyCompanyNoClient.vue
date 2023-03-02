<template>
  <div class="page-head">
    <h1 class="title-page">{{ $t("title_page.company") }}
    </h1>
  </div>
  <div class="top-head">
    <h2><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("title_page.company") }}</h2>
    <button class="connect-company">{{ $t('company.company_is_auth') }}</button>
  </div>
  <div class="body-content">
    <div class="section-input">
      <label>{{ $t('company.name_company') }}</label>
      <input type="text" :value="name_company" :placeholder="$t('company.name_company')">
      <label>{{ $t('company.nip') }}</label>
      <input type="text" :value="nip" :placeholder="$t('company.nip')">
      <label>{{ $t('company.address') }}</label>
      <input type="text" :value="address" :placeholder="$t('company.address')">

      <div class="line-three-inp">
        <div>
          <label>{{ $t('company.index') }}</label>
          <input type="text" :value="index" :placeholder="$t('company.index')">
        </div>
        <div>
          <label>{{ $t('company.city') }}</label>
          <input type="text" :value="city" :placeholder="$t('company.city')">
        </div>
        <div>
          <label>{{ $t('company.country') }}</label>
          <input type="text" :value="country" :placeholder="$t('company.country')">
        </div>
      </div>

      <label>{{ $t('company.bank_details') }}</label>
      <input type="text" :value="bank_details" :placeholder="$t('company.bank_details')">
      <label>{{ $t('company.bank_name') }}</label>
      <input type="text" :value="bank_name" :placeholder="$t('company.bank_name')">
      <label>{{ $t('company.swift') }}</label>
      <input type="text" :value="swift" :placeholder="$t('company.swift')">
    </div>
    <div class="section-input-bottom">
      <button>{{$t('company.btn')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCompany",
  data() {
    return {
      name_company: "",
      nip: "",
      address: "",
      index: "",
      city: "",
      country: "",
      bank_details: "",
      bank_name: "",
      swift: "",
      company_is_auth: ""
    }
  }
}
</script>

<style scoped>
.section-input{
  width: 100%;
  max-width: 50%;
}
.section-input input{
  padding: 0px 15px;
  margin-bottom: 30px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.section-input label{
  display: block;
  text-align: left;
  color: var(--active-color);
  margin-bottom: 5px;
  font-size: .8rem;
}
.top-head{
  background: #fff;
  border-radius: 5px;
  padding: 7px 20px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.top-head button, .section-input-bottom button{
  padding: 10px 15px;
  background: var(--btn-back-second);
  color: #fff;
  font-size: 0.8rem;
  line-height: 0.8rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.top-head h2{
  font-size: 1.2rem;
  color: #48465b;
  font-weight: 500;
  margin: 0 35px 0 0;
}
.top-head i{color: var(--active-color)}
.section-input input:focus{
  outline: none;
  border-bottom: 1px solid var(--active-color);
}
.line-three-inp{
  display: flex;
  justify-content: space-between;
}
.line-three-inp div{
  width: 100%;
  max-width: 32%;
}
@media screen and (max-width: 770px) {
  .section-input{
    max-width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .line-three-inp{flex-wrap: wrap}
  .line-three-inp div{max-width: 100%}
  .section-input-bottom{text-align: center}
}
@media screen and (max-width: 400px) {
  .top-head h2{ margin: 0 0 15px 0; display: block;text-align: center; width: 100%}
  .top-head{justify-content: center}
}
</style>
