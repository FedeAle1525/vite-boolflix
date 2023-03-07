import { reactive } from 'vue';

const store = reactive({

  films: [],
  queryName: '',
  apiKey: '088f7fa18f717fff2fc5bf18e9e57aab',
  language: 'it-IT',
  page: 1,
  adults: false
})

export default store;