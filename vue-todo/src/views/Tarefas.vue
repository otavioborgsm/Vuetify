<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
      <div 
        v-for="tarefa, index in $store.state.tarefas"
        :key="index"
      >
        <TarefaItem 
          :tarefa="tarefa"
        />
      </div>
      


      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TarefaItem from '../components/tarefas/TarefaItem.vue'

  export default {
    name: 'TarefasTodo',

    components:{
      TarefaItem
    },
    data(){
      return{
        campoInput:null,
        
      }
    },
    methods:{
      handleAddTarefa(){
        if(this.campoInput){
          this.$store.commit("adicionaTarefa", this.campoInput)
          this.campoInput= null
        }
      }
    }
  }
</script>
