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

