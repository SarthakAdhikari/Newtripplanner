<template>
  <form id="form">
    <app-datepicker @startDate="startsOn" @endDate="endsOn"></app-datepicker>
    <v-text-field label="Trip origin" prepend-icon="place" v-model="tripOrig"></v-text-field>
    <v-text-field label="Trip destination" prepend-icon="place" v-model="tripDest"></v-text-field>
    <app-dialog @dataFromDialog="saveDataFromDialog"></app-dialog>
    <v-layout v-if="showSubmitBtn">
      <button class="btn btn--primary btn-submit" @click.prevent="onSubmit">Submit</button>
    </v-layout>
  </form>
</template>

<script>
const today = new Date();

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
      console.log(request);
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
