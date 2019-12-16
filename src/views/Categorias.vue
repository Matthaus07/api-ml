<template>
  <div>
    <h1>Categorias</h1>
    <h3>Selecione uma categoria</h3>
    <v-container class="grey lighten-5">
      <ListaCategorias v-for="categoria in categorias" :key="categoria.id" :categoria="categoria"></ListaCategorias>
    </v-container>
  </div>
</template>

<script>
import config from "../services/CategoriesApi";
import ListaCategorias from "../components/categories/ListaCategorias";
export default {
  components: {
    ListaCategorias
  },
  data: () => ({
    categorias: [],
  }),
  created() {
    config.getCategories("", response => {
      this.categorias = response.data.categories;
    });
  }
};
</script>