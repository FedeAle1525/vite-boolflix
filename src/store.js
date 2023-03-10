import { reactive } from 'vue';

const store = reactive({
  // Array di Films
  films: [],

  // Array di Serie TV
  series: [],

  // Array di Generi per le Serie TV
  genresSeries: [],

  // Array di Generi per i Film
  genresFilms: [],

  // Input Search
  queryName: '',

  // Select Genere Serie
  filterGenreSerie: '',

  // Select Genere Film
  filterGenreFilm: '',

  // Parametri costanti per Chiamata Server
  apiKey: '088f7fa18f717fff2fc5bf18e9e57aab',
  language: 'it-IT',
  page: 1,
  adults: false,

  // Parametri costanti per URL Immagine Copertina
  basePath: 'https://image.tmdb.org/t/p/',
  widthImg: 'w342'
})

export default store;