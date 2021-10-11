<template>
  <button @click="accionBoton({state:estado,numero:30})">{{textoBoton}}</button>
</template>

<script>
import{mapActions} from 'vuex'
export default {
  name: "BottonAccion",
  props:{
    estado:Boolean
  }
  ,computed:{
  textoBoton(){
    return this.estado?'Aumentar':'Disminuir'
  }

  },methods:{
    ...mapActions(["accionBoton"])

  }
}
</script>

<style scoped>

</style>