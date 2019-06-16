<template>
  <form id="form">
    <app-datepicker @startDate="startsOn" @endDate="endsOn"></app-datepicker>
    <v-text-field
      label="Trip origin"
      prepend-icon="place"
      v-model="tripOrig"
      :error-messages="tripOrigErrors"
      @blur="$v.tripOrig.$touch()"
      required
    ></v-text-field>
    <v-text-field
      label="Trip destination"
      prepend-icon="place"
      v-model="tripDest"
      :error-messages="tripDestErrors"
      @blur="$v.tripDest.$touch()"
      required
    ></v-text-field>
    <app-dialog @dataFromDialog="saveDataFromDialog"></app-dialog>
    <v-layout v-if="showSubmitBtn">
      <button class="btn btn--primary btn-submit" @click.prevent="onSubmit">Submit</button>
    </v-layout>
  </form>
</template>

<script>
const today = new Date();
import { required } from "vuelidate/lib/validators";
import Datepicker from "./Datepicker.vue";
import Dialog from "./dialog/Dialog.vue";
export default {
  data() {
    return {
      strt_day: new Date().toISOString().substr(0, 10),
      end_day: new Date(new Date(today).setDate(today.getDate() + 1))
        .toISOString()
        .substr(0, 10),
      tripOrig: "",
      tripDest: "",
      activities: null,
      travelMode: "",
      midDestinations: null,
      showSubmitBtn: false
    };
  },
  components: {
    appDatepicker: Datepicker,
    appDialog: Dialog
  },
  validations: {
    tripOrig: {
      required: required
    },
    tripDest: {
      required
    }
  },
  computed: {
    tripOrigErrors() {
      const errors = [];
      if (!this.$v.tripOrig.$dirty) return errors;
      !this.$v.tripOrig.required && errors.push("Trip Origin is required");
      return errors;
    },
    tripDestErrors() {
      const errors = [];
      if (!this.$v.tripDest.$dirty) return errors;
      !this.$v.tripDest.required && errors.push("Trip Destination is required");
      return errors;
    }
  },
  methods: {
    startsOn(value) {
      this.strt_day = value;
    },
    endsOn(value) {
      this.end_day = value;
    },
    saveDataFromDialog(value) {
      this.showSubmitBtn = value.showSubmitBtn;
      this.activities = value.activities;
      this.midDestinations = value.midDestinations;
      this.travelMode = value.travelMode;
    },
    onSubmit() {
      this.$v.$touch();
      const request = {
        strt_day: this.strt_day,
        end_day: this.end_day,
        destinations: [
          {
            cty_nm: this.tripOrig,
            orig: "Y",
            middle: "N",
            dest: "N"
          },
          {
            cty_nm: this.tripDest,
            orig: "N",
            middle: "N",
            dest: "Y"
          }
        ],
        midDestinations: this.midDestinations,
        travelMode: this.travelMode,
        activities: this.activities
      };

      this.$store.dispatch('fetchTripPlan')
      this.$router.push("/trip-plan-response");
    }
  }
};
</script>

<style lang="scss" scoped>
#form {
  z-index: 10;
  position: relative;
  padding: 4rem 2rem;
  width: 35rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2rem;
  box-shadow: 0 3rem 6rem rgba($black, 0.75);

  .btn-submit {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 960px) {
  #form {
    width: 32rem;
  }
}
</style>
