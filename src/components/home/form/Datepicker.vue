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
        <v-text-field slot="activator" label="Starts On" prepend-icon="date_range" :value="today"></v-text-field>
        <v-date-picker v-model="today" :min="minStartDay" @input="onStartDate"></v-date-picker>
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
        <v-date-picker v-model="tomorrow" :min="minEndDay" @input="onEndDate"></v-date-picker>
      </v-menu>
    </div>
  </div>
</template>
<script>
const today = new Date();
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    tomorrow: new Date(new Date(today).setDate(today.getDate() + 1))
      .toISOString()
      .substr(0, 10),
    minStartDay: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    onStartDate() {
      this.$emit("startDate", this.today);
    },
    onEndDate() {
      this.$emit("endDate", this.tomorrow);
    }
  },
  computed: {
    minEndDay() {
      const selectedDay = new Date(this.today);
      const nextDay = new Date(new Date(selectedDay).setDate(selectedDay.getDate() + 1))
        .toISOString()
        .substr(0, 10);
      const timeStamp = date => new Date(date).getTime();
      if (timeStamp(nextDay) > timeStamp(this.tomorrow)) {
        this.tomorrow = nextDay;
      }
      return nextDay;
    }
  }
};
</script>