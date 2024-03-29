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
                ref="tripOrigAutoComplete"
                class="search-location"
                id="tripOrig"
              ></v-text-field>
              <v-text-field
                label="Trip destination"
                prepend-icon="place"
                v-model="tripDest"
                :error-messages="tripDestErrors"
                @blur="$v.tripDest.$touch()"
                ref="tripDestAutoComplete"
                id="tripDest"
                class="search-location"
              ></v-text-field>

              <!-- Add Destinations -->
              <app-add-destinations></app-add-destinations>

              <!-- Travel Modes -->
              <v-layout wrap>
                <v-select v-model="travelMode" :items="travelModes" label="Travel Mode"></v-select>
              </v-layout>

              <!-- Expansion Panel -->
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div class="grey-text">+ Options(required)</div>
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
      travelMode: "Drive",
      tripOrig: "",
      tripDest: "",
      travelModes: ["Drive", "Fly", "Transit", "Walk", "Suggest me"],
      strt_day: new Date().toISOString().substr(0, 10),
      end_day: new Date(new Date(today).setDate(today.getDate() + 1))
        .toISOString()
        .substr(0, 10),
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
  mounted() {
    function removePlaceholder(id) {
      document.getElementById(id).placeholder = "";
    }
    const tripOrigAutoComplete = new google.maps.places.Autocomplete(
      this.$refs.tripOrigAutoComplete.$refs.input,
      { types: ["geocode"] }
    );

    tripOrigAutoComplete.addListener("place_changed", () => {
      this.tripOrig = tripOrigAutoComplete.getPlace().formatted_address;
    });
    removePlaceholder("tripOrig")

    const tripDestAutoComplete = new google.maps.places.Autocomplete(
      this.$refs.tripDestAutoComplete.$refs.input,
      { types: ["geocode"] }
    );
    tripDestAutoComplete.addListener("place_changed", () => {
      this.tripDest = tripDestAutoComplete.getPlace().formatted_address;
    });
    removePlaceholder("tripDest")
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
    startsOn(value) {
      this.strt_day = value;
    },
    endsOn(value) {
      this.end_day = value;
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const requestData = {
          strt_day: this.strt_day,
          end_day: this.end_day,
          trip_name: `${this.tripOrig} - ${this.tripDest}`,
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
          midDestinations: this.$store.state.midDestinations,
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
          ]
        };

        this.$store.dispatch("fetchTripPlan", requestData);
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
