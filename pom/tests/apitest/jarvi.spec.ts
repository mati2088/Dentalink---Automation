import { test, expect, APIResponse, APIRequestContext } from '@playwright/test';
import dotenv from "dotenv"
dotenv.config()

let apiContext : APIRequestContext


test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: 'https://jarvis.dev.healthatom.com/',
    extraHTTPHeaders: {
      'Authorization': ` token ${process.env.TOKENAP}`,
    },
  });
})

test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});


test('get providers', async ({ }) => {
    const providers = await apiContext.get(`/api/v1/providers`, {

     
    });
    
    console.log(await providers.json())

    expect(await providers.status()).toBe(200)
    expect(await providers).toEqual(providers)


})

test('create customer providers', async ({ }) => {
  const createProviders = await apiContext.post(`/api/v1/customerproviders`, {
    data :{
      
        "customer_id" : 1,
        "provider_id" : 3,
        "branch_id" : 7,
        "enabled" : true,
        "data" : {
            "api_key" : "SAFDASDF"
       }
    }
   
  });
  console.log(await createProviders.json())

  expect(await createProviders.status()).toBe(201)
  expect(await createProviders).toEqual(createProviders)

})

test('create device', async ({ }) => {
  const createDevice= await apiContext.post(`/api/v1/devices`, {
    data :{

      "customer_id" : 1,
      "provider_id" : 3,
      "name" : "Prueba POS Fake",
      "branch_id" : 7,
      "data" : {
          "serial" : "ALWAYS_PAID"
       }
    }
   
  });
  console.log(await createDevice.json())

  expect(await createDevice.status()).toBe(201)
  expect(await createDevice).toEqual(createDevice)

})

test('create payment', async ({ }) => {
  const createPayment= await apiContext.post(`/api/v1/payments`, {
    data :{
      "customer_id" : 1,
      "branch_id" : 7,
      "device_id" :306,
      "provider_id" : 3,
      "user_id" : 1,
      "amount" : 600
  }
   
  });
  console.log(await createPayment.json())

  expect(await createPayment.status()).toBe(201)
  expect(await createPayment).toEqual(createPayment)

})
test('get payment', async ({ }) => {
  const getPayment= await apiContext.get(`/api/v1/payments/206`, {
    
   
  });
  console.log(await getPayment.json())

  expect(await getPayment.status()).toBe(200)
  expect(await getPayment).toEqual(getPayment)

})