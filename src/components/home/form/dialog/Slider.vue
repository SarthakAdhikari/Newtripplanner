<template>
  <v-flex xs12 sm6 class="px-2">
    <v-subheader>
      <slot></slot>
    </v-subheader>
    <v-slider persistent-hint thumb-label="always" thumb-size="20" min="0" max="10" height="5px"></v-slider>
  </v-flex>
</template>
