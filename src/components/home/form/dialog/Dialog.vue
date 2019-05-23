<template>
  <v-layout row>
    <button class="add-destinations" @click.stop.prevent="dialog = true">+ Add destinations</button>

    <v-dialog v-model="dialog" max-width="400" persistent>
      <v-card>
        <v-card-text>
          <div class="text-center">
            <h2 class="heading-secondary">Add your destinations</h2>
          </div>
          <!-- Add Destinations -->
          <app-add-destinations></app-add-destinations>

          <!-- Radio buttons -->
          <v-layout wrap>
            <p class="grey-text">Travel Mode:</p>
            <v-radio-group v-model="travelMode" row>
              <v-radio label="Drive" value="drive"></v-radio>
              <v-radio label="Fly" value="fly"></v-radio>
              <v-radio label="Transit" value="transit"></v-radio>
              <v-radio label="Walk" value="walk"></v-radio>
              <v-radio label="Suggest me" value="suggest me"></v-radio>
            </v-radio-group>
          </v-layout>

          <!-- Slider -->
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="grey-text">Additional Options</div>
              </template>
              <v-card>
                <v-card-text>
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
        </v-card-text>

        <!-- Dialog Actions -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" @click="dialog = false">Save</v-btn>

          <v-btn color="primary" flat="flat" @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import AddDestinations from "./AddDestinations";
import Slider from "./Slider";
export default {
  data() {
    return {
      dialog: false,
      travelMode: ""
    };
  },
  components: {
    appAddDestinations: AddDestinations,
    appSlider: Slider
  }
};
</script>

<style lang="scss" scoped>
.add-destinations {
  color: $primary;

  &:hover {
    color: $primary-dark;
  }
}
</style>
