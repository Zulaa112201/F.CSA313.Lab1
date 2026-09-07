import { test, expect } from '@playwright/test';

test('1. Амжилттай нэвтрэх тест', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    

    await page.getByPlaceholder('Username').fill('standard_user');
    
    await page.getByRole('button', { name: 'Login' }).click();
    
    
    await expect(page.getByText('Products')).toBeVisible();


    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

    test('2. Амжилтгүй нэвтрэх сөрөг тест', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('wrong_password');
        await page.getByRole('button', { name: 'Login' }).click();
        
        
        await expect(page.getByText('Epic sadface')).toBeVisible();
    });


    test('3. Бараа сагслах үйлдэл', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        
        
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        
        
        await page.getByRole('button', { name: 'Add to cart' }).first().click();
        

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        
    
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
    import { test, expect } from '@playwright/test';

test.describe('Saucedemo автомат тестүүд', () => {


    test('1. Амжилттай нэвтрэх тест', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Products')).toBeVisible();

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });


    test('2. Амжилтгүй нэвтрэх сөрөг тест', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('wrong_password');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Epic sadface')).toBeVisible();
    });


    test('3. Бараа сагслах үйлдэл', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        
        await page.getByRole('button', { name: 'Add to cart' }).first().click();
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
});