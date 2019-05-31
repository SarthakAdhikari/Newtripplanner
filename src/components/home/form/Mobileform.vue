<template>
  <v-layout row>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <button class="btn btn--primary btn-mobileform" v-on="on">Start Planning</button>
      </template>
      <v-card>
        <v-toolbar dark color="dark-grey">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>
            <h2 class="heading-secondary">Itinerary Planner</h2>
          </v-toolbar-title>
        </v-toolbar>

        <!-- Main Form -->
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <app-datepicker></app-datepicker>
              <v-text-field label="Trip origin" prepend-icon="place"></v-text-field>
              <v-text-field label="Trip destination" prepend-icon="place"></v-text-field>
              <app-add-destinations></app-add-destinations>

              <!-- Expansion Panel -->
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div class="grey-text">+ Options(required)</div>
                  </template>
                  <v-card>
                    <v-card-text>
                      <!-- Travel Modes -->
                      <v-layout wrap>
                        <v-select v-model="travelMode" :items="travelModes" label="Travel Mode"></v-select>
                      </v-layout>

                      <!-- Sliders -->
                      <v-layout wrap>
                        <app-slider>Wildlife</app-slider>
                        <app-slider>Romantic</app-slider>
                      </v-layout>
                      <v-layout wrap>
                        <app-slider>City</app-slider>
                        <app-slider>Mountain</app-slider>
                      </v-layout>
                      <v-layout wrap>
                        <app-slider>Beach</app-slider>
                        <app-slider>Nature</app-slider>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-layout>
                <button class="btn btn--primary btn-submit">Submit</button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Slider from "./dialog/Slider";
import AddDestinations from "./dialog/AddDestinations";
import Datepicker from "./Datepicker";

export default {
  data() {
    return {
      dialog: false,
      travelMode: "Fly",
      travelModes: [ "Drive", "Fly", "Transit", "Walk", "Suggest me" ]
    };
  },
  methods: {
    //
  },
  components: {
    appSlider: Slider,
    appAddDestinations: AddDestinations,
    appDatepicker: Datepicker
  }
};
</script>

<style lang="scss" scoped>
.btn-mobileform {
  display: none;
}
.btn-submit {
  margin-top: 3rem;
}
@media screen and (max-width: 800px) {
  .btn-mobileform {
    display: inline-block;
  }
}
</style>
