<template>
  <form id="form">
    <app-datepicker></app-datepicker>
    <v-text-field label="Trip origin" prepend-icon="place"></v-text-field>
    <v-text-field label="Trip destination" prepend-icon="place"></v-text-field>
    <app-dialog></app-dialog>
  </form>
</template>

<script>
import Datepicker from "./Datepicker.vue";
import Dialog from "./dialog/Dialog.vue";
export default {
  data() {
    return {
      //
    };
  },
  components: {
    appDatepicker: Datepicker,
    appDialog: Dialog
  }
};
</script>

<style lang="scss" scoped>
#form {
  position: absolute;
  bottom: 10rem;
  z-index: 10;
  padding: 2rem;
  width: 35rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2rem;
  box-shadow: 0 3rem 6rem rgba($black, .75);
}

@media screen and (max-width: 960px) {
  #form {
    width: 32rem;
  }
}
</style>
