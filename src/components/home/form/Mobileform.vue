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
              <!-- Date Pickers -->
              <app-datepicker @startDate="startsOn" @endDate="endsOn"></app-datepicker>

              <v-text-field
                label="Trip origin"
                prepend-icon="place"
                v-model="tripOrig"
                :error-messages="tripOrigErrors"
                @blur="$v.tripOrig.$touch()"
              ></v-text-field>
              <v-text-field
                label="Trip destination"
                prepend-icon="place"
                v-model="tripDest"
                :error-messages="tripDestErrors"
                @blur="$v.tripDest.$touch()"
              ></v-text-field>
              <!-- Add Destinations -->
              <app-add-destinations @addMidDestinations="onAddingMidDestinations"></app-add-destinations>

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
                        <v-select
                          v-model="travelMode"
                          :items="travelModes"
                          label="Travel Mode"
                          :error-messages="travelModeError"
                          @blur="$v.travelMode.$touch()"
                        ></v-select>
                      </v-layout>

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
                      </div>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-layout>
                <button class="btn btn--primary btn-submit" @click="onSubmit">Submit</button>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
const today = new Date();
import { required } from "vuelidate/lib/validators";
import AddDestinations from "./dialog/AddDestinations";
import Datepicker from "./Datepicker";

export default {
  data() {
    return {
      dialog: false,
      travelMode: "",
      tripOrig: "",
      tripDest: "",
      travelModes: ["Drive", "Fly", "Transit", "Walk", "Suggest me"],
      midDestinations: null,
      strt_day: new Date().toISOString().substr(0, 10),
      end_day: new Date(new Date(today).setDate(today.getDate() + 1))
        .toISOString()
        .substr(0, 10),
      romRtg: 5,
      wlfRtg: 5,
      natRtg: 5,
      bchRtg: 5,
      cityRtg: 5,
      mntRtg: 5
    };
  },
  validations: {
    travelMode: {
      required: required
    },
    tripOrig: {
      required: required
    },
    tripDest: {
      required
    }
  },
  computed: {
    travelModeError() {
      const errors = [];
      if (!this.$v.travelMode.$dirty) return errors;
      !this.$v.travelMode.$required && errors.push("Travel Mode is required");
      return errors;
    },
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
    onAddingMidDestinations(value) {
      this.midDestinations = value;
    },
    startsOn(value) {
      this.strt_day = value;
    },
    endsOn(value) {
      this.end_day = value;
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
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
          activities: [
            {
              actv_typ: "rom",
              actv_rtg: this.romRtg
            },
            {
              actv_typ: "wlf",
              actv_rtg: this.wlfRtg
            },
            {
              actv_typ: "nat",
              actv_rtg: this.natRtg
            },
            {
              actv_typ: "bch",
              actv_rtg: this.bchRtg
            },
            {
              actv_typ: "city",
              actv_rtg: this.cityRtg
            },
            {
              actv_typ: "mnt",
              actv_rtg: this.mntRtg
            }
          ]
        };
        //console.log(request);
        this.$router.push("/trip-plan-response");
      }
    }
  },
  components: {
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
