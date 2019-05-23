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
        <v-list-tile v-for="(destiny, index) of destinations" :key="index">
          <v-list-tile-avatar>
            <v-icon class="grey lighten-1 white--text">room</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ destiny.name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1" @click="destinations.splice(index, 1)">delete_outline</v-icon>
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
      destinations: []
    };
  },
  methods: {
    addDestiny() {
      this.destinations.push({
        name: this.newDestiny
      });
      this.newDestiny = "";
    }
  }
};
</script>

