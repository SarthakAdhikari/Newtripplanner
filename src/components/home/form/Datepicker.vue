<template>
  <div>
    <!-- Starts On Date -->
    <div>
      <v-menu
        :nudge-right="10"
        transition="scale-transition"
        offset-y
        lazy
        primary
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          label="Starts On"
          prepend-icon="date_range"
           :value="today"
        ></v-text-field>
        <v-date-picker v-model="startsOn" :min="today"></v-date-picker>
      </v-menu>
    </div>

    <!-- Ends on Date -->
    <div>
      <v-menu
        :nudge-right="10"
        transition="scale-transition"
        offset-y
        lazy
        primary
        full-width
        min-width="290px"
      >
        <v-text-field slot="activator" label="Ends On" prepend-icon="date_range" :value="tomorrow"></v-text-field>
        <v-date-picker v-model="endsOn" :min="tomorrow"></v-date-picker>
      </v-menu>
    </div>
  </div>
</template>


<script>
const today = new Date();
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    startsOn: '',
    tomorrow: new Date(new Date(today).setDate(today.getDate() + 1)).toISOString().substr(0, 10),
    endsOn: ''
  }),
  methods: {
    //
  }
};
</script>