import { test, expect } from "@playwright/test";
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

test("Should allow hotel search results", async ({ page }) => {
  await page.goto(ui_url);

  await page.getByPlaceholder("Where are you going?").fill("Mumbai");
  await page.getByRole("button", { name: "Search" }).click();

  await expect(page.getByText("Hotels Found in Mumbai")).toBeVisible();
  //   await expect(page.getByText("Test Data")).toBeVisible();
});
