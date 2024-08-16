const exp = require("constants");
const { test, expect } = require("playwright/test");
const ui_url = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(ui_url);

  //sign in button
  await page.getByRole("link", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await page.locator("[name=email]").fill("test@gmail.com");
  await page.locator("[name=password]").fill("test@123");

  await page.getByRole("button", { name: "Submit" }).click();
});

test("should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${ui_url}add-hotel`);

  await page.locator('[name="name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test City");
  await page.locator('[name="country"]').fill("Test Country");
  await page
    .locator('[name="description"]')
    .fill("This a sample description for the Test Hotel");
  await page.locator('[name="price"]').fill("1000");
  await page.selectOption('select[name="rating"]', "3");
  await page.getByText("Budget").click();
  await page.getByLabel("Free Wifi").check();
  await page.getByLabel("Parking").check();
  await page.locator('[name="adult"]').fill("2");
  await page.locator('[name="child"]').fill("4");

  await page.getByRole("button", { name: "Add Hotel" }).click();
});

test("should display hotels", async ({ page }) => {
  await page.goto(`${ui_url}my-hotels`);

  await expect(page.getByText("Test Data")).toBeVisible();
  await expect(
    page.locator(':has-text("test data description")')
  ).toBeVisible();
  await expect(page.getByText("Mumbai, India")).toBeVisible();
  await expect(page.getByText("All Inclusive")).toBeVisible();
  await expect(page.getByText("400")).toBeVisible();
  await expect(page.getByText("4 Adult, 2 Child")).toBeVisible();
  await expect(page.getByText("3")).toBeVisible();
});
