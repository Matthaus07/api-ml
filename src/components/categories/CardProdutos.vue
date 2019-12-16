<template>
  <div v-if="tabcategoria.length">
    <v-row>
      <v-col
        v-for="tdcategoria in tabcategoria"
        :key="tdcategoria.id"
        class="mx-auto"
        max-width="300"
        lg="4"
      >
        <v-card>
         
          <v-img class="white--text align-end" width="100px" :src="tdcategoria.thumbnail"></v-img>

          <v-card-subtitle class="pb-0 title-product">{{tdcategoria.title}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Quantidade:{{tdcategoria.available_quantity}} Unidades</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text :href="tdcategoria.permalink">Ir para produto</v-btn>
          </v-card-actions>
       
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    tabcategoria: Array
  }
};
</script>
<style  scoped>
.title-product{
  font-size: 13px
}
</style>