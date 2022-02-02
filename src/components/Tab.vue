<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: "Desi/Parça", content: "Tab 1 Content" },
          { tab: "Dikiş", content: "Tab 2 Content" },
          { tab: "Ekli Keçe", content: "Tab 3 Content" },
          { tab: "Haritalama", content: "Tab 4 Content" },
          { tab: "Hook&Loop", content: "Tab 5 Content" },
          { tab: "Iskarta", content: "Tab 6 Content" },
          { tab: "İz Basım", content: "Tab 7 Content" },
          { tab: "Kalite Kontrol", content: "Tab 8 Content" },
          { tab: "Kesim", content: "Tab 9 Content" },
          { tab: "Kırpım/Ütü", content: "Tab 10 Content" },
          { tab: "Stok/Ambalaj", content: "Tab 10 Content" },
          { tab: "Yapıştırma", content: "Tab 10 Content" },
        ],
      }
    },
  }
</script>