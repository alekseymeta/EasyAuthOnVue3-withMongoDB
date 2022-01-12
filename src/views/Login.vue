<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="form__group rounded shadow">
      <form class="p-5" @submit.prevent="submitHandler">
        <div class="row mb-3">
          <label for="inputEmail" class="col-6 col-form-label" >Email</label>
          <div class="col-12">
            <input
                  v-model="email"
                  :class="{ 'is-invalid': v$.email.$errors.length }"
                   class="form-control"
                   id="inputEmail">
            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword" class="col-6 col-form-label">Password</label>
          <div class="col-12">
            <input v-model="password"
                   :class="{ 'is-invalid': v$.password.$errors.length }"
                   type="password" autocomplete="on" class="form-control" id="inputPassword">
            <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}. Now: {{password.length}}</div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100 mt-3">Sign in</button>
        <div class="row mt-3 text-center">
          <div class="qwst">
            Do you haven't account?
            <router-link to="/register">Create account</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import {email, required, minLength} from "@vuelidate/validators";
import messages from "../utils/messages";

export default {
  name: "Login",
    data() {
      return {
        v$: useVuelidate(),
        email: '',
        password: ''
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
        await this.$store.dispatch('login', formData)
        this.$store.commit('SET_MSG', 'Выполнен вход')
        await this.$router.push('/')
      }
       catch(e) {
        this.$store.commit('SET_MSG', messages[e.message])
         console.log(e.message)
       }





    }
  },
  validations() {
    return {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      console.log(messages[this.$route.query.message])
    }
  }


}
</script>

<style scoped>
.input-errors {
  font-size: 12px;
  color: red;
}
.is-invalid {
  padding-right: calc(1.5em + 0rem) !important;
}

.qwst {
  font-size: 14px;
}
</style>
