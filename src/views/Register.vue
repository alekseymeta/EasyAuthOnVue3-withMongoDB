<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="form__group rounded shadow">
      <form class="p-5" @submit.prevent="submitHandler">
        <div class="row mb-3">
          <label for="inputEmail" class="col-6 col-form-label">Email</label>
          <div class="col-12">
            <input
              v-model="email"
              :class="{ 'is-invalid': v$.email.$errors.length }"
              class="form-control" id="inputEmail">
            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword" class="col-6 col-form-label">Password</label>
          <div class="col-12">
            <input
              v-model="password"
              :class="{ 'is-invalid': v$.password.$errors.length }"
              type="password"
              class="form-control" id="inputPassword">
            <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}. Now: {{password.length}}</div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword2" class="col-6 col-form-label">Re-Password</label>
          <div class="col-12">
            <input
              v-model="confirm"
              :class="{ 'is-invalid': v$.confirm.$errors.length }"
              type="password" class="form-control" id="inputPassword2" autocomplete="on">
            <div class="input-errors" v-for="error of v$.confirm.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1"
                     :class="{ 'is-invalid': v$.agree.$errors.length}"
                     v-model="agree">
              <label
                class="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100 mt-3">Sign up</button>
        <div class="row mt-3 text-center">
          <div class="qwst">
            Do you've an account?
            <router-link to="login">Sign in</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import {email, required, minLength, sameAs} from "@vuelidate/validators";
import messages from "../utils/messages";

export default {
  name: "Register",
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: '',
      confirm: '',
      agree: false
    }
  },
  methods: {
    async submitHandler() {
      this.v$.$validate()
      if (this.v$.$error) {
        this.v$.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$store.commit('SET_MSG', 'Удачная регистрация')
        await this.$router.push('/')
      }
      catch(e) {
        this.$store.commit('SET_MSG', messages[e.error])
        console.log(e)
      }


    }
  },
  validations() {
    return {
      email: {email, required},
      password: {required, minLength: minLength(6)},
      confirm: { required, sameAs: sameAs(this.password) },
      agree: {checked: v => v}
    }
  }
}

</script>

<style scoped>
.input-errors {
  font-size: 12px;
  color: red;
}

.qwst {
  font-size: 14px;
}
</style>
