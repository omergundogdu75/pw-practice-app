# Playwright Kullanılan Kodlar ve Açıklamaları

1. **`await page.goto('http://localhost:4200/');`**
   - Belirtilen URL'ye gitmek için kullanılır.

2. **`await page.getByText('Forms').click();`**
   - Sayfada belirtilen metni ('Forms') bulur ve üzerine tıklar.

3. **`test.describe('My first test suite', () => { ... });`**
   - Bir test grubu tanımlar. Bu grup içinde birden fazla test tanımlanabilir ve ortak ayarlar veya işlemler paylaşılabilir.

4. **`test.describe.skip('My first test suite 2', () => { ... });`**
   - Bir test grubunu tanımlar ancak bu grubu atlar (çalıştırmaz). Bu, geçici olarak testleri devre dışı bırakmak için kullanılır.

5. **`test.beforeEach(async ({ page }) => { ... });`**
   - Her testten önce çalışacak bir ön hazırlık fonksiyonu tanımlar.

6. **`test.afterEach(async ({ page }) => { ... });`**
   - Her testten sonra çalışacak bir temizlik fonksiyonu tanımlar.

---

### Locator Syntax Açıklamaları

1. **`await page.locator('input').first().click();`**
   - Sayfadaki ilk `input` etiketine tıklar.

2. **`await page.locator('#inputEmail1').click();`**
   - `id` değeri `inputEmail1` olan öğeye tıklar.

3. **`await page.locator('.input-full-width');`**
   - `class` değeri `input-full-width` olan öğeyi seçer.

4. **`await page.locator('[placeholder="Email"]');`**
   - `placeholder` özelliği `Email` olan öğeyi seçer.

5. **`await page.locator('[class="input-full-width size-medium shape-rectangle"]');`**
   - Tam `class` değeri `input-full-width size-medium shape-rectangle` olan öğeyi seçer.

6. **`await page.locator('input[placeholder="Email"][nbinput]');`**
   - `input` etiketi olup `placeholder` özelliği `Email` ve `nbinput` özelliği olan öğeyi seçer.

7. **`await page.locator('//input[@placeholder="Email"]');`**
   - XPath kullanarak `placeholder` özelliği `Email` olan öğeyi seçer (kullanımı önerilmez).

8. **`await page.locator(':text("Using")');`**
   - Metni kısmen `Using` olan öğeyi seçer.

9. **`await page.locator(':text-is("Using the Grid")');`**
   - Metni tam olarak `Using the Grid` olan öğeyi seçer.

---

### User Facing Locators Açıklamaları

1. **`await page.getByRole('textbox', { name: 'Email' }).first().click();`**
   - `role` değeri `textbox` ve adı `Email` olan ilk öğeyi bulur ve tıklar.

2. **`await page.getByRole('button', { name: 'Sign in' }).first().click();`**
   - `role` değeri `button` ve adı `Sign in` olan ilk öğeyi bulur ve tıklar.

3. **`await page.getByLabel('Email').first().click();`**
   - `label` değeri `Email` olan ilk öğeyi bulur ve tıklar.

4. **`await page.getByPlaceholder('Jane Doe').click();`**
   - `placeholder` değeri `Jane Doe` olan öğeyi bulur ve tıklar.

5. **`await page.getByText('Using the Grid').click();`**
   - Metni `Using the Grid` olan öğeyi bulur ve tıklar.

6. **`await page.getByTestId('SignIn').click();`**
   - `test-id` değeri `SignIn` olan öğeyi bulur ve tıklar.


