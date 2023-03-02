<template>
  <div class="page-head">
    <h1 class="title-page">{{ $t("title_page.company") }}</h1>
  </div>
  <div class="top-head">
    <p><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("company.name_company") }}: <span class="company-name">{{name_company}}</span></p>
  </div>
  <div class="body-content">
<!-- name_company   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.name_company') }}</label>
          <input type="text" :value="name_company" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.personnel_VAT') }}</label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            VAT
          </label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            VAT UE
          </label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            {{ $t('company.employees') }}
          </label>
      </div>
    </div>
<!-- nip   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.nip') }}</label>
        <input type="text" :value="nip" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.personnel_VAT') }}</label>
        <input type="text" :value="personnel_VAT" disabled>
      </div>
    </div>


    <hr>
    <div class="section-company">


      <div class="section-input">
        <label>{{ $t('company.name_company') }}</label>
        <input type="text" :value="name_company" disabled>
        <label>{{ $t('company.type_of_ownership') }}</label>
        <input type="text" :value="type_of_ownership" disabled>
        <label>{{ $t('company.nip') }}</label>
        <input type="text" :value="nip" disabled>

        <div class="line-three-inp">
          <div>
            <label>{{ $t('company.street') }}</label>
            <input type="text" :value="street" disabled>
          </div>
          <div>
            <label>{{ $t('company.house') }}</label>
            <input type="text" :value="house" disabled>
          </div>
          <div>
            <label>{{ $t('company.apartment') }}</label>
            <input type="text" :value="apartment" disabled>
          </div>
        </div>

        <div class="line-three-inp">
          <div>
            <label>{{ $t('company.index') }}</label>
            <input type="text" :value="index" disabled>
          </div>
          <div>
            <label>{{ $t('company.city') }}</label>
            <input type="text" :value="city" disabled>
          </div>
          <div>
            <label>{{ $t('company.country') }}</label>
            <input type="text" :value="country" disabled>
          </div>
        </div>

        <label>{{ $t('company.surname') }}</label>
        <input type="text" :value="surname" disabled>

        <label>{{ $t('company.name') }}</label>
        <input type="text" :value="name" disabled>
        <p class="title-com">{{ $t('company.t_commercial') }}</p>

        <label>{{ $t('company.contract_number') }}</label>
        <input type="text" :value="contract_number" disabled>

        <label>{{ $t('company.service_cost') }}</label>
        <input type="text" :value="service_cost" disabled>

        <label>{{ $t('company.bank_details') }}</label>
        <input type="text" :value="bank_details" disabled>
      </div>
      <div class="section-input">
          <label>{{ $t('company.personnel_VAT') }}</label>
        <div class="mb-30">
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            VAT
          </label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            VAT UE
          </label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            {{ $t('company.employees') }}
          </label>
        </div>
        <label>{{ $t('company.type_of_ownership') }}</label>
        <input type="text" :value="type_of_ownership" disabled>
        <label>{{ $t('company.nip') }}</label>
        <input type="text" :value="nip" disabled>

        <div class="line-three-inp">
          <div>
            <label>{{ $t('company.street') }}</label>
            <input type="text" :value="street" disabled>
          </div>
          <div>
            <label>{{ $t('company.house') }}</label>
            <input type="text" :value="house" disabled>
          </div>
          <div>
            <label>{{ $t('company.apartment') }}</label>
            <input type="text" :value="apartment" disabled>
          </div>
        </div>

        <div class="line-three-inp">
          <div>
            <label>{{ $t('company.index') }}</label>
            <input type="text" :value="index" disabled>
          </div>
          <div>
            <label>{{ $t('company.city') }}</label>
            <input type="text" :value="city" disabled>
          </div>
          <div>
            <label>{{ $t('company.country') }}</label>
            <input type="text" :value="country" disabled>
          </div>
        </div>

        <label>{{ $t('company.surname') }}</label>
        <input type="text" :value="surname" disabled>

        <label>{{ $t('company.name') }}</label>
        <input type="text" :value="name" disabled>
        <p class="title-com">{{ $t('company.t_commercial') }}</p>

        <label>{{ $t('company.contract_number') }}</label>
        <input type="text" :value="contract_number" disabled>

        <label>{{ $t('company.service_cost') }}</label>
        <input type="text" :value="service_cost" disabled>

        <label>{{ $t('company.bank_details') }}</label>
        <input type="text" :value="bank_details" disabled>
      </div>
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
      name_company: "Mia Consult Group",
      nip: "1000000032",
      address: "",
      index: "",
      city: "",
      country: "",
      bank_details: "1324231412",
      bank_name: "",
      swift: "",
      company_is_auth: "",
      type_of_ownership:"Individual entrepreneur",
      street: "Vogla",
      house: "28",
      apartment: "Apartment",
      surname: "Surname",
      name: "Pavel",
      contract_number: "contract_number",
      service_cost: "service_cost",
      personnel_VAT: ""
    }
  }
}
</script>

<style scoped>
.section-company{
  display: flex;
  gap: 30px;
}
.section-input{
  width: 100%;
  max-width: 50%;
}
.section-input input:not([type="checkbox"]){
  padding: 0px 15px;
  margin-bottom: 30px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.section-input label:not(.check-lab){
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
.top-head p{
  font-size: 1rem;
  color: #48465b;
  margin: 0 35px 0 0;
}
.title-com{font-size: 1.2rem;margin: 0 0 30px 0;}
.company-name{ font-size: 1.2rem;color: var(--active-color)}
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
<style scoped>
.line{
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}
.l-inp, .r-inp{
  width: 100%;
  max-width: 49%;
}

.line input:not([type="checkbox"]){
  padding: 0px 15px;
  margin-top: 5px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.line label:not(.check-lab){
  display: block;
  text-align: left;
  color: var(--active-color);
  margin-bottom: 5px;
  font-size: .8rem;
}
.checkbox{
  margin-right: 5px;
}
.check-lab {
  color: var(--font-color);
  cursor: pointer;
  display: block;
  margin: 0 15px 0 0;
}
</style>
