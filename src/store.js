import { reactive } from 'vue';

const store = reactive({
  // Array di Films
  films: [],

  // Input Search
  queryName: '',

  // Parametri costanti per Chiamata Server
  apiKey: '088f7fa18f717fff2fc5bf18e9e57aab',
  language: 'it-IT',
  page: 1,
  adults: false
})

export default store;