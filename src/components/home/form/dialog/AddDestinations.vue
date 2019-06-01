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
export default {
  data() {
    return {
      newDestiny: "",
      midDestinations: []
    };
  },
  methods: {
    addDestiny() {
      this.midDestinations.push({
        cty_nm: this.newDestiny,
        orig: "N",
        middle: "Y",
        dest: "N"
      });
      this.newDestiny = "";
      /* Emitting mid destinations to parent */
      this.$emit("addMidDestinations", this.midDestinations);
    },
    deleteDestiny(index) {
      this.midDestinations.splice(index, 1);
      this.$emit("addMidDestinations", this.midDestinations);
    }
  }
};
</script>

