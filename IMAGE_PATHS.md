# مسارات الصور داخل صفحة الهبوط

فك الضغط داخل جذر الريبو مباشرة بحيث تصبح المسارات هكذا:

- assets/images/hero-ecosystem.webp
- assets/images/graduation-project-1.webp
- assets/images/graduation-project-2.webp
- assets/images/web-programming.webp
- assets/images/custom-software.webp
- assets/images/landing-pages.webp
- assets/images/academic-reports.webp
- assets/images/graphic-design.webp

كل الصور بصيغة WebP مع قناة شفافية RGBA، ولا تحتوي على خلفية مربعة أو checkerboard.

الاستخدام داخل HTML:

```html
<img src="assets/images/hero-ecosystem.webp" alt="رسم توضيحي للخدمات الرقمية">
```

الاستخدام داخل React/Vite إذا وضعتها في public:

```jsx
<img src="/assets/images/hero-ecosystem.webp" alt="رسم توضيحي للخدمات الرقمية" />
```

الاستخدام داخل React/Vite إذا وضعتها في src/assets:

```jsx
import hero from './assets/images/hero-ecosystem.webp';
<img src={hero} alt="رسم توضيحي للخدمات الرقمية" />
```
