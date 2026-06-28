import { Sparkles } from 'lucide-react';
import galleryOne from '../../../assets/images/hero-ecosystem.webp';
import galleryTwo from '../../../assets/images/custom-software.webp';
import galleryThree from '../../../assets/images/web-programming.webp';
import galleryFour from '../../../assets/images/landing-pages.webp';
import galleryFive from '../../../assets/images/academic-reports.webp';
import gallerySix from '../../../assets/images/graphic-design.webp';

export default function ImageShowcase() {
  const items = [
    { title: 'خدمة احترافية في أي لحظة', description: 'تجهيز فنيين ومدربين جاهزين للرد السريع', image: galleryOne, featured: true },
    { title: 'جودة واحترافية', description: 'أدوات حديثة وخبرة عملية ممتدة', image: galleryTwo },
    { title: 'حلول مخصصة', description: 'تنفيذ مناسب لطبيعة كل موقف', image: galleryThree },
    { title: 'سرعة في الوصول', description: 'تغطي مختلف مناطق الكويت', image: galleryFour },
    { title: 'ثقة العملاء', description: 'تقييمات ممتازة ورضا مستمر', image: galleryFive },
    { title: 'تجربة راقية', description: 'مظهر موحّد ورسالة واضحة', image: gallerySix }
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-lg">
            ✨ خدماتنا في صور
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            تجربة مميزة من أول نظرة
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-700">
            نقدم مزيجاً من السرعة والاحترافية والتقنيات التي تجعل كل خدمة تبدو أكثر ثقة ووضوحاً.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={items[0].image} alt={items[0].title} className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-orange-300" />
                تجربة مهنية
              </div>
              <h3 className="mb-3 text-3xl font-bold">{items[0].title}</h3>
              <p className="max-w-xl text-lg text-slate-200">{items[0].description}</p>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {items.slice(1).map((item) => (
              <article key={item.title} className="group relative overflow-hidden rounded-[1.5rem] shadow-xl">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
            خدمة سريعة ومضمونة
          </div>
          <div className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
            فريق احترافي ومدرب
          </div>
          <div className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
            دعم مستمر 24 ساعة
          </div>
        </div>
      </div>
    </section>
  );
}
