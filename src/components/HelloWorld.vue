<template>
  <v-container>
    <div class="pt-4 pb-4 pl-4 ">
      <span>teste</span>
    </div>
    <v-data-table
      :headers="headers"
      :items="getList"
      :search="search"
      sort-by="calories"
      class="elevation-1 mt-4"
    >
      <template>
      <h1>estou aqui</h1>
          {{getList.data}}
      </template> 
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  async created () {
      //this.fetchList([{name:'Medicina'}])
      await this.fetchList ()
  },
   computed: {
    ...mapGetters('teste', ['getList']),
  },
  methods: {
      ...mapActions('teste', ['fetchList']),
      initialize () {
        this.cursos = ['']
      }
    }
}
</script>
<style scoped>

</style>
