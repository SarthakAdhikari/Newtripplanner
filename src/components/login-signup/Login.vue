<template>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social">
          <i class="fab fa-google-plus-g"></i>
        </a>
        <a href="#" class="social">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        prepend-icon="person"
        required
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        :error-messages="passwordErrors"
        label="Password"
        type="password"
        prepend-icon="lock"
        required
        @blur="$v.password.$touch()"
      ></v-text-field>
      <a href="#">Forgot your password?</a>
      <button class="btn btn--primary" @click="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data: () => {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.email = "";
    }
  },
  validations: {
    email: {
      required: required,
      email: email
    },
    password: { required: required }
  }
};
</script>


<style lang="scss" scoped>
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      color: #333;
      text-decoration: none;
      font-size: 1.4rem;
    }

    .social-container {
      margin: 1rem 0;

      a {
        border: solid 1px #ddd;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
        height: 4rem;
        width: 4rem;
      }
    }

    .btn--primary {
      margin-top: 2rem;
    }

    .v-input {
      flex: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .form-container {
    form {
      padding: 2rem 3rem;

      h1 {
        display: none;
      }
    }
  }
}
</style>
