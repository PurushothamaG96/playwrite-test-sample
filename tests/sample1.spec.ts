import {test, expect} from '@playwright/test'
test.skip("sample1", async({ page })=>{
    await page.goto('http://localhost:3000/')
    await expect(page).toHaveTitle(/Converti i tuoi visitatori in clienti | Xpitality/)
});