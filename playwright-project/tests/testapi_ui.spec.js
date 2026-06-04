const { test, expect } = require('@playwright/test');


const API_KEY = process.env.REQRES_API_KEY ?? 'YOUR_API_KEY';

const AUTH_HEADERS = {
  'x-api-key': process.env.REQRES_API_KEY || 'reqres_d86c54eb492844ecb77f609171ea94af',
  'Content-Type': 'application/json'
};

// // // ─── 1. GET users list via API → verify UI loads ───────────────────────────
// test('GET users page 2 via API and verify UI', async ({ page, request }) => {


//   const res = await request.get('https://reqres.in/api/users?page=2', {
//     headers: AUTH_HEADERS
//   });

//   expect(res.status()).toBe(200);

//   const body = await res.json();
//   expect(body.page).toBe(2);
//  expect(body.data.length).toBeGreaterThan(0);

//   // Assert each user has required fields
//   for (const user of body.data) {
//     expect(user).toHaveProperty('id');
//     expect(user).toHaveProperty('email');
//     expect(user).toHaveProperty('first_name');
//     expect(user.email).toContain('@');
//   }

//   console.log(` Fetched ${body.data.length} users from page 2`);

//   // UI: navigate and check page loads correctly
//   await page.goto('https://reqres.in');
//   await expect(page).toHaveTitle(/ReqRes/i);
// });
// // ─── 2. POST create user → assert 201 and returned ID ─────────────────────
// test('POST create user and assert response', async ({ request }) => {

//   const res = await request.post('https://reqres.in/api/products?page=1', {
//     headers: AUTH_HEADERS,
//     data: { name: 'cerulean', year: 2000 }
//   });

//   expect(res.status()).toBe(201);

//   const body = await res.json();
//   expect(body.name).toBe('cerulean');
//   expect(body.year).toBe(2000);
//   expect(body.id).toBeTruthy();           // server-assigned ID
//   expect(body.createdAt).toBeTruthy();    // timestamp returned

//   console.log(` Created user ID: ${body.id}`);
// });

// // ─── 3. PUT update user → verify fields changed ────────────────────────────
// test('PUT update user and assert updated fields', async ({ request }) => {

//   const res = await request.put('https://reqres.in/api/users/2', {
//     headers: AUTH_HEADERS,
//     data: { email: 'muhad@req.in', first_name: 'Senior QA' }
//   });

//   expect(res.status()).toBe(200);

//   const body = await res.json();
//   expect(body.email).toBe('muhad@req.in');
//   expect(body.first_name).toBe('Senior QA');
//   expect(body.updatedAt).toBeTruthy();    // timestamp confirms update

//   console.log(` Updated at: ${body.updatedAt}`);
// });


// ─── 4. POST create → load UI → DELETE cleanup ─────────────────────────────
test('Create user via API, visit UI, then DELETE cleanup', async ({ page, request }) => {

  // STEP 1: Create user via API
  const createRes = await request.post('https://reqres.in/api/users', {
    headers: AUTH_HEADERS,
    data: { name: 'Temp User', job: 'Tester' }
  });

  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  console.log(` Created user: ${created.id}`);

  // STEP 2: Load UI and verify site is up
  await page.goto('https://reqres.in');
  await expect(page).toHaveTitle(/ReqRes/i);

  // STEP 3: DELETE user via API (cleanup)
  const deleteRes = await request.delete(`https://reqres.in/api/users/${created.id}`, {
    headers: AUTH_HEADERS
  });

  expect(deleteRes.status()).toBe(204);   // 204 = No Content (deleted)
  console.log(` Deleted user: ${created.id}`);
});

