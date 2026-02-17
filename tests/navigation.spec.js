// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('./');

    // Check if title contains the course name
    await expect(page).toHaveTitle(/Fundamentos/);
});

test('check sidebar links', async ({ page }) => {
    await page.goto('./aulas/aula-01');

    // Check if sidebar exists
    const sidebar = page.locator('.course-sidebar');
    await expect(sidebar).toBeVisible();

    // Check if link to Aula 02 exists and works
    const linkToLesson2 = page.locator('a[href*="aula-02"]');
    await expect(linkToLesson2).toBeVisible();

    // Click creates a navigation event
    await linkToLesson2.click();

    // Verify URL change
    await expect(page).toHaveURL(/aula-02/);
});

test('check mobile responsiveness', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('./aulas/aula-01');

    // Sidebar should be collapsed or adjusted (checking if it exists still, css handles layout)
    const sidebar = page.locator('.course-sidebar');
    await expect(sidebar).toBeVisible();

    // Check if content is stacked below
    const content = page.locator('.course-content');
    const sidebarBox = await sidebar.boundingBox();
    const contentBox = await content.boundingBox();

    // Simple check: content Y should be below sidebar Y (or at least present)
    // In our CSS, sidebar is static on mobile, so it comes first in Flex column.
    expect(contentBox.y).toBeGreaterThan(sidebarBox.y);
});
