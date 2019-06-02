<template>
  <div>
    <v-flex xs12>
      <v-layout>
        <v-text-field
          type="text"
          small
          label="Add mid-destinations"
          v-model="newDestiny"
          prepend-icon="place"
          :error-messages="addDestinyError"
          required
        ></v-text-field>
        <v-btn @click="addDestiny" dark color="primary white--text" depressed fab small>
          <v-icon large>add_location</v-icon>
        </v-btn>
      </v-layout>
      <v-list>
        <v-list-tile v-for="(destiny, index) of midDestinations" :key="index">
          <v-list-tile-avatar>
            <v-icon class="grey lighten-1 white--text">room</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ destiny.cty_nm }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1" @click="deleteDestiny(index)">delete_outline</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      newDestiny: "",
      midDestinations: []
    };
  },
  validations: {
    newDestiny: {
      required: required
    }
  },
  computed: {
    addDestinyError() {
      const errors = [];
      if (!this.$v.newDestiny.$dirty) return errors;
      !this.$v.newDestiny.required &&
        errors.push("Mid destination is required");
      return errors;
    }
  },
  methods: {
    addDestiny() {
      if (this.newDestiny !== "") {
        this.midDestinations.push({
          cty_nm: this.newDestiny,
          orig: "N",
          middle: "Y",
          dest: "N"
        });
        this.$v.newDestiny.$reset();
        this.newDestiny = "";
        /* Emitting mid destinations to parent */
        this.$emit("addMidDestinations", this.midDestinations);
      } else {
        this.$v.newDestiny.$touch();
      }
    },
    deleteDestiny(index) {
      this.midDestinations.splice(index, 1);
      this.$emit("addMidDestinations", this.midDestinations);
    }
  }
};
</script>

