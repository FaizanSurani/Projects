// @ts-check
const { test, expect } = require("@playwright/test");
const { url } = require("inspector");
const ui_url = "http://localhost:5173/";

test("should allow user to sign in", async ({ page }) => {
  await page.goto(ui_url);

  //sign in button
  await page.getByRole("link", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await page.locator("[name=email]").fill("suranifaizan52@gmail.com");
  await page.locator("[name=password]").fill("Faizan@123");

  await page.getByRole("button", { name: "Submit" }).click();
});
