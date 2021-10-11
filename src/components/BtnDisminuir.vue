<template>
<button
    :disabled="deshabilitacionDisminuir"
    @click="accionDisminuir(50)">Disminuir</button>
</template>

<script>
import{mapState,mapActions} from 'vuex'
export default {
  name: "BtnDisminuir",
  computed: {
    //se puede acceder a cualquier variable declarada en store(variable global de la app)
    //Primer computed
    ...mapState(['contador'])
    //Este computed se ejecuta cuando el elemento sobre el que trabaja cambia de valor
    ,deshabilitacionDisminuir(){
      return this.contador === 0
    }
  },
  methods: {
//El método mapmutations para ejecutar metodos suyos internos para modificar variables globales se escriba en methods
    ...mapActions(["accionDisminuir"])
  }
}
</script>

<style>

</style>