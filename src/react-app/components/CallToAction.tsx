import { AlertTriangle, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function CallToAction() {
  const handleCallNow = () => {
    window.location.href = 'tel:+96512345678';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/96512345678?text=مرحباً، أحتاج خدمة بنشر متنقل', '_blank');
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-800 py-20" dir="rtl">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-[1.5rem] bg-orange-600 px-6 py-4 text-center text-white shadow-lg">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-lg font-bold">حالة طوارئ؟ اتصل الآن - متاحون 24 ساعة!</span>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-stone-50 sm:text-5xl">تحتاج مساعدة فورية؟</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100 sm:text-2xl">
              لا تبقَ عالقاً في الطريق! اتصل بنا الآن واحصل على خدمة سريعة واحترافية في أي وقت.
            </p>
          </div>

          <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <button onClick={handleCallNow} className="group flex flex-col items-center gap-4 rounded-[1.5rem] bg-stone-50 p-8 font-bold text-indigo-900 shadow-lg transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
              <Phone className="h-12 w-12 transition duration-300 group-hover:scale-110" />
              <div>
                <div className="mb-2 text-2xl font-bold">اتصال مباشر</div>
                <div className="text-lg text-slate-700">+965 1234 5678</div>
              </div>
            </button>

            <button onClick={handleWhatsApp} className="group flex flex-col items-center gap-4 rounded-[1.5rem] bg-green-600 p-8 font-bold text-stone-50 shadow-lg transition hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
              <MessageCircle className="h-12 w-12 transition duration-300 group-hover:scale-110" />
              <div>
                <div className="mb-2 text-2xl font-bold">واتساب</div>
                <div className="text-lg text-green-100">رسالة سريعة ومباشرة</div>
              </div>
            </button>
          </div>

          <div className="mt-12 text-center">
            <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-stone-50" />
                <p className="text-lg text-stone-50">متوسط وقت الاستجابة: 15–30 دقيقة</p>
              </div>
              <p className="font-semibold text-blue-100">خدمة احترافية تستحق الثقة</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16" dir="rtl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
            <h3 className="mb-4 text-4xl font-bold text-indigo-900">نغطي جميع مناطق الكويت</h3>
            <p className="mx-auto max-w-3xl text-xl text-slate-700">
              أينما كنت في الكويت، نصل إليك بأسرع وقت ممكن مع نفس المستوى من الاحترافية.
            </p>
          </div>

          <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
            {['العاصمة', 'حولي', 'الفروانية', 'الجهراء', 'الأحمدي', 'مبارك الكبير', 'جميع المناطق', 'الطرق السريعة'].map((area) => (
              <div key={area} className="rounded-[1.25rem] border border-blue-200 bg-white/80 p-6 shadow-sm transition hover:bg-white hover:shadow-lg">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="text-lg font-bold text-indigo-900">{area}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex rounded-full bg-green-100 px-8 py-4 text-lg font-bold text-green-800">
              ✅ تغطية شاملة - خدمة متاحة في جميع الأوقات
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
