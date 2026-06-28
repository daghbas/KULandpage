import { ArrowRight, Clock3, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { useEffect } from 'react';
import heroImage from '../../../assets/images/hero-ecosystem.webp';

export default function Hero() {
  useEffect(() => {
    document.body.style.fontFamily = "'IBM Plex Sans Arabic', sans-serif";
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:+96512345678';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/96512345678?text=مرحباً، أحتاج خدمة بنشر متنقل', '_blank');
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-stone-50" dir="rtl">
      <img src={heroImage} alt="خدمة احترافية على مدار الساعة" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.35),transparent_32%),linear-gradient(135deg,rgba(2,6,23,0.95),rgba(15,23,42,0.84),rgba(30,41,59,0.92))]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/30">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">بنشر متنقل الكويت</p>
              <p className="text-sm text-slate-300">خدمة سريعة واحترافية 24/7</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">خدماتنا</a>
            <button onClick={handleCallNow} className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">اتصل الآن</button>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/15 px-4 py-2 text-sm font-semibold text-orange-200">
              <ShieldCheck className="h-4 w-4" />
              خدمة موثوقة في جميع مناطق الكويت
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              عالق في الطريق؟
              <span className="mt-3 block text-orange-400">نصل إليك بسرعة وبدقة.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
              من تبديل الإطارات إلى البطاريات والإصلاحات الطارئة، نقدم لك فريقاً احترافياً يصل خلال دقائق ويحل المشكلة بأعلى معايير الجودة.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={handleCallNow} className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-7 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-1 hover:shadow-orange-500/40">
                <Phone className="h-5 w-5 transition group-hover:rotate-12" />
                اتصل الآن
              </button>
              <button onClick={handleWhatsApp} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-lg font-semibold text-slate-100 transition hover:bg-white/20">
                واتساب سريع
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                <div className="mb-1 flex items-center gap-2 font-semibold text-white"><Clock3 className="h-4 w-4 text-orange-400" /> 15–30 دقيقة</div>
                <p>متوسط وقت الوصول</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                <div className="mb-1 flex items-center gap-2 font-semibold text-white"><ShieldCheck className="h-4 w-4 text-emerald-400" /> موثوق</div>
                <p>خدمة مضمونة وسريعة</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                <div className="mb-1 flex items-center gap-2 font-semibold text-white"><Wrench className="h-4 w-4 text-sky-400" /> احترافي</div>
                <p>فنيون مدربون ومجهزونون</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-slate-900/60 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-300">خدمة اللحظات الحرجة</p>
                <h2 className="text-2xl font-bold text-white">متاحون على مدار الساعة</h2>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-2 text-sm font-semibold text-emerald-300">متاح الآن</div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'تبديل سريع للإطارات', detail: 'خدمة فورية مع أدوات حديثة' },
                { title: 'بطاريات أصلية', detail: 'فحص شامل للنظام الكهربائي' },
                { title: 'إصلاحات طارئة', detail: 'حلول دقيقة وفي الموقع' }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{item.title}</p>
                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-300">مضمون</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-orange-400/20 bg-gradient-to-r from-orange-500/15 to-red-500/10 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-orange-500/20 p-2">
                  <ShieldCheck className="h-5 w-5 text-orange-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">أفضل تجربة خدمة</p>
                  <p className="text-sm text-slate-300">نضمن لك الوصول السريع والنتيجة النهائية بكل ثقة واحترافية.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
