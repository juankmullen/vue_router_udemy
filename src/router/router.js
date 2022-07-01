import { createRouter,createWebHashHistory } from 'vue-router'

// rutas
import AboutPage from "../modules/pokemon/pages/AboutPage";
import Lispages from "../modules/pokemon/pages/ListPage";
import PokemonPage from "../modules/pokemon/pages/PokemonPage"


const routes = [
    { path: '/', component: Lispages }, 
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage },
  ]
   

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router