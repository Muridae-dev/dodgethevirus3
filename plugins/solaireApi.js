export default function ({ $axios }, inject) {
  const solaireApi = $axios.create()

  solaireApi.setBaseURL('https://api.le-systeme-solaire.net/rest/')
  inject('solaireApi', solaireApi)
}

