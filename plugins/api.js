// export default function ({ $axios }, inject) {
//   const gifyApi = $axios.create()

//   gifyApi.setBaseURL('https://api.giphy.com/v1/gifs/random?api_key=OVDUPgGqi4pcooi17smazo4Iu9KQftzp&tag=&rating=g')
//   inject('gifyApi', gifyApi)
// }

export default function ({ $axios }, inject) {
  const nasaApi = $axios.create()

  nasaApi.setBaseURL('https://api.nasa.gov/')
  inject('nasaApi', nasaApi)
}


// NASA KEY: 3gXErdvbYNqPy5MzT3UJOwmpIRtwJf22vIzPTfYh
