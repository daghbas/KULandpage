import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  const handleCallNow = () => {
    window.location.href = 'tel:+96512345678';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/96512345678?text=مرحباً، أحتاج خدمة بنشر متنقل', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-slate-900 py-16 text-stone-50" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-indigo-700 p-2">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">بنشر متنقل الكويت</h3>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-blue-100">
              نحن شركة رائدة في خدمات البنشر المتنقل في الكويت، نقدم خدمات احترافية على مدار 24 ساعة في جميع أنحاء الكويت بأسعار تنافسية وجودة عالية.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleCallNow} className="flex items-center gap-2 rounded-lg bg-indigo-700 px-6 py-3 font-semibold text-stone-50 transition hover:bg-indigo-600">
                <Phone className="h-5 w-5" />
                اتصل الآن
              </button>
              <button onClick={handleWhatsApp} className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-stone-50 transition hover:bg-green-700">
                <MessageCircle className="h-5 w-5" />
                واتساب
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-stone-50">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+965 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">واتساب متاح</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">info@bansharkuwait.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">24 ساعة / 7 أيام</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-stone-50">مناطق الخدمة</h4>
            <div className="space-y-2 text-blue-100">
              {['العاصمة', 'حولي', 'الفروانية', 'الجهراء', 'الأحمدي', 'مبارك الكبير'].map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-300" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-blue-200">© 2024 بنشر متنقل الكويت. جميع الحقوق محفوظة.</div>
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <span>مرخص رسمياً</span>
              <span>•</span>
              <span>مؤمن بالكامل</span>
              <span>•</span>
              <span>فنيون معتمدون</span>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.25rem] bg-red-600 p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-bold">حالة طوارئ؟ اتصل الآن: +965 1234 5678</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
