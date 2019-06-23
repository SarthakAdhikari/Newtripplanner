<template>
  <v-layout row>
    <button class="add-destinations" @click.stop.prevent="dialog = true">+ Add destinations</button>

    <v-dialog v-model="dialog" max-width="400" persistent>
      <v-card class="py-4">
        <v-card-text>
          <div class="text-center">
            <h2 class="heading-secondary">Add your destinations</h2>
          </div>
          <!-- Add Destinations -->
          <app-add-destinations></app-add-destinations>

          <!-- Travel Mode -->
          <v-layout wrap>
            <v-select
              v-model="travelMode"
              :items="travelModes"
              label="Travel Mode"
              @blur="$v.travelMode.$touch"
              :error-messages="travelModeError"
            ></v-select>
          </v-layout>
          <br>

          <!-- Slider -->
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="grey-text">Additional Options</div>
              </template>
              <v-card>
                <v-card-text>
                  <!-- Sliders -->
                  <div>
                    <!-- First Slider -->
                    <v-layout wrap>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Romantic</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="romRtg"
                        ></v-slider>
                      </v-flex>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Wildlife</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="wlfRtg"
                        ></v-slider>
                      </v-flex>
                    </v-layout>
                    <!-- Second Slider -->
                    <v-layout wrap>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Nature</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="natRtg"
                        ></v-slider>
                      </v-flex>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Beach</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="bchRtg"
                        ></v-slider>
                      </v-flex>
                    </v-layout>
                    <!-- Third Slider -->
                    <v-layout wrap>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>City</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="cityRtg"
                        ></v-slider>
                      </v-flex>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Mountain</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="mntRtg"
                        ></v-slider>
                      </v-flex>
                    </v-layout>
                    <!-- Fourth Slider -->
                    <v-layout wrap>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Adventure</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="advRtg"
                        ></v-slider>
                      </v-flex>
                      <v-flex xs12 sm6 class="px-2">
                        <v-subheader>Random</v-subheader>
                        <v-slider
                          persistent-hint
                          thumb-label="always"
                          thumb-size="20"
                          min="0"
                          max="10"
                          height="5px"
                          v-model="rndRtg"
                        ></v-slider>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>

        <!-- Dialog Actions -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" @click="onSave">Save</v-btn>

          <v-btn color="primary" flat="flat" @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AddDestinations from "./AddDestinations";
export default {
  data() {
    return {
      dialog: false,
      travelMode: "Drive",
      travelModes: ["Drive", "Fly", "Transit", "Walk", "Suggest me"],
      midDestinations: null,
      romRtg: 5,
      wlfRtg: 5,
      natRtg: 5,
      bchRtg: 5,
      cityRtg: 5,
      mntRtg: 5,
      advRtg: 5,
      rndRtg: 5
    };
  },
  components: {
    appAddDestinations: AddDestinations
  },
  validations: {
    travelMode: {
      required: required
    }
  },
  computed: {
    travelModeError() {
      const errors = [];
      if (!this.$v.travelMode.$dirty) return errors;
      !this.$v.travelMode.required && errors.push("Travel Mode is required");
      return errors;
    }
  },
  methods: {
    onSave() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.dialog = false;
        this.$emit("dataFromDialog", {
          travl_mode: this.travelMode,
          activities: [
            {
              actv_typ: "ROM",
              actv_rtg: this.romRtg
            },
            {
              actv_typ: "WLF",
              actv_rtg: this.wlfRtg
            },
            {
              actv_typ: "NAT",
              actv_rtg: this.natRtg
            },
            {
              actv_typ: "BCH",
              actv_rtg: this.bchRtg
            },
            {
              actv_typ: "CTY",
              actv_rtg: this.cityRtg
            },
            {
              actv_typ: "MNT",
              actv_rtg: this.mntRtg
            },
            {
              actv_typ: "ADV",
              actv_rtg: this.advRtg
            },
            {
              actv_typ: "RND",
              actv_rtg: this.rndRtg
            }
          ],
          showSubmitBtn: true
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.heading-secondary {
  margin-bottom: 1rem;
  font-size: 3rem;
}
.add-destinations {
  color: $primary;

  &:hover {
    color: $primary-dark;
  }
}
</style>
