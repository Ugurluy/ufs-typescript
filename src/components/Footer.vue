<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <!-- <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn> -->
      <v-col
        class="primary darken-1 py-4 text-center white--text"
        cols="12"
      >
        <strong>Uğurlu Finisaj Sistemleri A.Ş</strong> - {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        "Home",
        "About Us",
        "Team",
        "Services",
        "Blog",
        "Contact Us",
      ],
    }),
  }
</script>