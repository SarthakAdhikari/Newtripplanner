<template>
  <div class="form-container sign-up-container">
    <v-form ref="form" class="form">
      <h1>Create Account</h1>
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
        label="Password"
        type="password"
        prepend-icon="lock"
        required
        :rules="passwordRules"
      ></v-text-field>
      <v-text-field
        label="Confirm Password"
        prepend-icon="lock"
        required
        :rules="confirmPswd"
      ></v-text-field>
      <button class="btn btn--primary btn-signup" @click.prevent="submit" >Sign Up</button>
    </v-form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data: () => {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 8) || "Must be at least 8 characters"
      ]
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
    confirmPasswordErrors() {
      const errors = [];
      !this.$v.confirmPassword.sameAs && errors.push("Passwords must be indentical");
      return errors;
    },
    confirmPswd() {
      return [
        () => (this.password === this.confirmPassword) || 'E-mail must match',
        v => !!v || 'Confirm password is required'
      ];
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log("Submitted")
        console.log(this.$v);
      }
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
    confirmPassword: {
      sameAs: sameAs('password')
    }
  }
};
</script>


<style lang="scss" scoped>
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  .form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    .btn-signup {
      margin-top: 2rem;
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
        color: #333;
        text-decoration: none;
        font-size: 1.4rem;
      }
    }

    .v-input {
      flex: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .form-container {
    .form {
      padding: 4rem 3rem;

      h1 {
        display: none;
      }
    }
  }
}
</style>

