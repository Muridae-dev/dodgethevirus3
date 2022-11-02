// KEY: 0WAxbg6V

export default function ({ $axios }, inject) {
  const rijksApi = $axios.create()

  rijksApi.setBaseURL('https://www.rijksmuseum.nl/api/nl/')
  inject('rijksApi', rijksApi)
}


//:style="{opacity: '0', transition: 'opacity 1s, top 5s', height: '200px', position: 'absolute', top: '-200px', left: `${Math.round(Math.random() * 100)}%`}"


