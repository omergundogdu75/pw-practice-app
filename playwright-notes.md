# Playwright Kullanılan Kodlar ve Açıklamaları

1. **`await page.goto('/');`**
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

---

### Child Elements Locators Açıklamaları

1. **`await page.locator('nb-card nb-radio :text-is("Option 1")').click();`**
   - `nb-card` içinde `nb-radio` öğesini bulur ve metni tam olarak `Option 1` olan öğeye tıklar.

2. **`await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();`**
   - `nb-card` içinde `nb-radio` öğesini bulur ve metni tam olarak `Option 2` olan öğeye tıklar.

3. **`await page.locator('nb-card').getByRole('button', { name: 'Sign in' }).first().click();`**
   - `nb-card` içinde `role` değeri `button` ve adı `Sign in` olan ilk öğeyi bulur ve tıklar.

4. **`await page.locator('nb-card').nth(3).getByRole('button').click();`**
   - `nb-card` öğelerinden dördüncüsünü seçer ve içindeki `role` değeri `button` olan öğeye tıklar.

---

### Parent Elements Locators Açıklamaları

1. **`await page.locator('nb-card-header').locator('..').click();`**
   - `nb-card-header` öğesini bulur ve onun ebeveyn öğesine (`..`) tıklar.

2. **`await page.locator('nb-card-body').locator('..').locator('nb-card-header').click();`**
   - `nb-card-body` öğesinin ebeveynini bulur ve ardından bu ebeveynin içindeki `nb-card-header` öğesine tıklar.

3. **`await page.locator('nb-card').locator('..').nth(2).click();`**
   - `nb-card` öğesinin ebeveynini bulur ve bu ebeveyn öğelerden üçüncüsüne tıklar.

---

### `.filter` ve `.has` Kullanımı Açıklamaları

1. **`await page.locator('nb-card').filter({ hasText: 'Basic form' }).click();`**
   - `nb-card` öğeleri arasında metni `Basic form` olan öğeyi seçer ve tıklar.

2. **`await page.locator('nb-card', { has: page.locator('.status-danger') }).click();`**
   - `nb-card` öğeleri arasında içinde `.status-danger` sınıfına sahip bir öğe bulunan öğeyi seçer ve tıklar.

3. **`await page.locator('nb-card').filter({ has: page.locator('nb-checkbox') }).click();`**
   - `nb-card` öğeleri arasında içinde `nb-checkbox` öğesi bulunan öğeyi seçer ve tıklar.

---

### En İyi Uygulamalar

1. **Doğru Seçiciler Kullanın:**
   - `getByRole`, `getByLabel`, `getByPlaceholder` gibi semantik seçiciler kullanmak daha okunabilir ve sürdürülebilir kod sağlar.

2. **XPath Kullanımından Kaçının:**
   - XPath seçiciler genellikle kırılgandır ve önerilmez. Bunun yerine CSS veya Playwright'ın yerleşik yöntemlerini tercih edin.

3. **`filter` ve `has` ile Spesifik Seçimler Yapın:**
   - Çok sayıda benzer öğe olduğunda, `filter` ve `has` kullanarak daha spesifik seçimler yapabilirsiniz.


