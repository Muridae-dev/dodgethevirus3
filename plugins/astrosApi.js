export default function ({ $axios }, inject) {
  const astrosApi = $axios.create()

  astrosApi.setBaseURL('http://api.open-notify.org/astros.json')
  inject('astrosApi', astrosApi)
}

