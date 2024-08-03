// @ts-check
const { test, expect } = require("@playwright/test");
const { url } = require("inspector");
const ui_url = "http://localhost:5173/";

test("should allow user to sign in", async ({ page }) => {
  await page.goto(ui_url);

  //sign in button
  await page.getByRole("link", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await page.locator("[name=email]").fill("test@gmail.com");
  await page.locator("[name=password]").fill("test@123");

  await page.getByRole("button", { name: "Submit" }).click();
});

test("should allow user to register", async ({ page }) => {
  await page.goto(ui_url);

  await page.getByRole("link", { name: "Register" }).click();

  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
  await page.locator("[name=username]").fill("test user");
  await page.locator("[name=email]").fill("test@gmail.com");
  await page.locator("[name=password]").fill("test@123");
  await page.locator("[name=address]").fill("Unknown");

  await page.getByRole("button", { name: "Register" }).click();
});
