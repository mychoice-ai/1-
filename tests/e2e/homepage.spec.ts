import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')

    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: 'Welcome to Next.js!' })).toBeVisible()

    // Check if buttons are present
    await expect(page.getByRole('button', { name: 'Primary action' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Secondary' })).toBeVisible()
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')

    // Assuming there's a link to about page - adjust selector as needed
    // await page.getByRole('link', { name: 'About' }).click()
    // await expect(page).toHaveURL('/about')
    // await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
  })
})