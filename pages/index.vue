<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank">documentation</a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >issue board</a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; John Leider</small>
            </em>
          </div>
          <!-- https://gist.github.com/Monota/e3da8a14dea8cf16f84e053827678a10 -->
          <v-data-table
            :headers="headers"
            :items="desserts"
            item-key="name"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <tr @click="rowClick(props.item.name)">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
              </tr>
            </template>
          </v-data-table>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
      <div class="text-xs-center">
        <ul>
          <li>{{paginatorDataList[paginator.page - 1].name}}</li>
        </ul>
        <v-pagination
          v-model="paginator.page"
          :length="paginator.total"
        ></v-pagination>
        <!-- Test ellipsis multi line. -->
        <v-clamp autoresize :max-lines="3">FT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSS. FT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSS. FT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSS. FT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSS. FT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSSFT Labs also has created a JavaScript plugin to do the job. It's nice in that you don't have to specify the number of lines, it just happens when the text overflows the container, so the design decision stay in the CSS. </v-clamp>
        
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import VClamp from 'vue-clamp'

export default {
  components: {
    Logo,
    VuetifyLogo,
    VClamp
  },
  data: () => {
    return {
      paginator: {
        page: 1,
        total: 3,
      },
      selectedItem: "Sample",
      pagination: {
        sortBy: "name"
      },
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name",
          width: "20%"
        },
        { text: "Calories", value: "calories", width: "16%" },
        { text: "Fat (g)", value: "fat", width: "16%" },
        { text: "Carbs (g)", value: "carbs", width: "16%" },
        { text: "Protein (g)", value: "protein", width: "16%" },
        { text: "Iron (%)", value: "iron", width: "16%" }
      ],
      desserts: [
        {
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          value: false,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }
      ],
      paginatorDataList: [
        {
          id: 1,
          name: 'NVA'
        },
        {
          id: 2,
          name: 'NVB'
        },
        {
          id: 3,
          name: 'NVC'
        }
      ]
    };
  },
  watch: {
    'paginator.page': function (pageNew) {
      console.log('pageNew', pageNew)
      this.$router.push({name: this.name, query: {page: pageNew}})
    }
  },
  created() {
    this.paginator.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
  }
};
</script>
