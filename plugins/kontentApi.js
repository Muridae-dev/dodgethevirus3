export default function ({ $axios }, inject) {
  const kontentApi = $axios.create()

  kontentApi.setBaseURL('https://deliver.kontent.ai/3e31b489-da1a-01ab-1e9e-07176be650cd/items')
  kontentApi.setHeader('Authorization', 'Bearer ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjE1Njc1MTlkMWNiNjQyY2Y5N2ViYjZjOTIyZWUwNTk4IiwNCiAgImlhdCI6ICIxNjY3MzA5NTMyIiwNCiAgImV4cCI6ICIyMDEyOTA5NTMyIiwNCiAgInZlciI6ICIxLjAuMCIsDQogICJwcm9qZWN0X2lkIjogIjNlMzFiNDg5ZGExYTAxYWIxZTllMDcxNzZiZTY1MGNkIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.eSo8rNBRgPCnM9SlPIwI2zE6vnQwhf9bzETh_NNAeUw')
  inject('kontentApi', kontentApi)
}

