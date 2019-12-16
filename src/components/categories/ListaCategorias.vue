<template>
  <div>
    <v-col cols="12" md="12" offset-md="1">
     
      <v-card class="mx-auto" max-width="250" outlined>
        <v-row>
        
          <v-col cols="12" md="8">
            <div class="pa-2" tile>
              <button @click.prevent.stop="produtos_categoria(categoria.id)">{{categoria.name}}</button>
            </div>
          </v-col>
       
        </v-row>
      </v-card>
   
    </v-col>
    <TabelaCategorias :tabcategoria="subcategoria"></TabelaCategorias>
  </div>
</template>

<script>
import config from "../../services/CategoriesApi";
import TabelaCategorias from "./CardProdutos";
export default {
  components: {
    TabelaCategorias
  },

  data:() => ({
      subcategoria: []
  }),
  props: {
    categoria: {
      type: Object,
      required: true
    }
  },
  methods: {
    produtos_categoria
  }
};

function produtos_categoria(categoria) {
  const limit = 10;
  const url = `search?category=${categoria}&limit=${limit}`;
  config.getCategories(url, response => {
    this.subcategoria = response.data.results;
  });
}
</script>

<style scoped>
</style>