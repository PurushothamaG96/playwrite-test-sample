import { test, expect } from "@playwright/test";

test.describe("Luganodante", () => {
  test.beforeEach(async ({ page }) => {
    const response = await page.goto("https://luganodante.com/");
    expect(response?.status()).toBeLessThan(400);
  });

  test("navigation to hotel", async ({ page }) => {
    await page.getByRole("link", { name: "Hotel" }).click();
    await expect(page).toHaveURL("https://luganodante.com/hotel");
  });

  test("test inputs", async ({ page }) => {
    await page.locator('input[type="email"]').type('john@email.com')
  });

  test.afterEach(async () => {
    console.log("Done test");
  });
});
