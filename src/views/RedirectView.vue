<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        hier ist der link für dich:
        <a :href="$route.query.location">{{ $route.query.location }}</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
