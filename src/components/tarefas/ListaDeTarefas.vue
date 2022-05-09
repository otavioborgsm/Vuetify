<template>
  <div>
    <drop-list
      :items="tarefasComputadas"
      @reorder="$event.apply(tarefasComputadas)"
    >
      <template v-slot:item="{ item, reorder }">
        <drag :key="item.id" :data="item">
          
          <TarefaItem 
            style="background-color: white"
            :tarefa="item"
            :style="
              reorder
                ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' }
                : {}
            "
          />
          
          <v-divider />
        </drag>
      </template>
    </drop-list>
  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import TarefaItem from './TarefaItem.vue'

export default {
  components: {
    Drag,
    DropList,
    TarefaItem
  },
  computed: {
    tarefasComputadas() {
      return this.$store.state.tarefas;
    },
  },
};
</script>

<style>
</style>