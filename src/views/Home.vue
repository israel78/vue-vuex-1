<template>
  <div class="home">
    <h1
    :style="colorContador"
    >{{titulo}}: {{contador}}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <btn-disminuir></btn-disminuir>
    <hr>
    <BottonAccion :estado="true" ></BottonAccion>
    <BottonAccion :estado="false" ></BottonAccion>
  </div>
</template>
<script>
// @ is an alias to /src
import{mapState,mapActions} from 'vuex'
import BtnDisminuir from "../components/BtnDisminuir";
import BottonAccion from "../components/BottonAccion";
export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BottonAccion
  },
  data(){
    return {
      titulo: 'Mi contador Vuex'
    }
  },
  computed:{
    //se puede acceder a cualquier variable declarada en store(variable global de la app)
    //Primer computed
    ...mapState(['contador']),
    //Este computed se ejecuta cuando el elemento sobre el que trabaja cambia de valor
    colorContador(){
      return [this.contador>100?{'color':'green'}:{'color':'red'}]
    }
  },
  methods:{
//El método mapmutations para ejecutar metodos suyos internos para modificar variables globales se escriba en methods
  ...mapActions(["accionIncrementar"])
  }
}
</script>
