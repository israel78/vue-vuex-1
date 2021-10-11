import { createStore } from 'vuex'

export default createStore({
  //Estado unico que contiene el estado de la aplicación
  state: {
    contador:100
  },
  //Las mutaciones cambian los states
  mutations: {
    incrementar(state,payload){
      this.state.contador+=payload
    },
    disminuir(state,payload){
      this.state.contador-=payload
    }
  },
  actions: {
    //Commit param ejecuta la mutacion. La accion ejecuta la mutacion
    accionIncrementar({commit},numero){
      //a la mutación se accede a traves del coomit
      commit("incrementar",numero)
    },
    accionDisminuir({commit},numero){
      commit("disminuir",numero)
    },
    //Como segundo parametro se recibe un unico parametro, dato simple
    accionBoton({commit},objeto){
      if (objeto.state)
        commit("incrementar",objeto.numero)
      else
        commit("disminuir",objeto.numero)
    }
  },
  modules: {
  }
})
