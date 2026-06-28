import { ArrowRight, Battery, CheckCircle, Circle, Star, Wrench } from 'lucide-react';
import serviceImageOne from '../../../assets/images/academic-reports.webp';
import serviceImageTwo from '../../../assets/images/custom-software.webp';
import serviceImageThree from '../../../assets/images/landing-pages.webp';

export default function ServicesShowcase() {
  const services = [
    {
      icon: Circle,
      title: 'تبديل الإطارات',
      description: 'خدمة فورية مع فريق مدرب ومعدات حديثة لضمان التثبيت الآمن.',
      image: serviceImageOne,
      features: ['وصول خلال 20 دقيقة', 'جميع المقاسات متوفرة', 'ضمان شامل'],
      price: 'ابتداءً من 15 د.ك'
    },
    {
      icon: Battery,
      title: 'تبديل البطاريات',
      description: 'بطاريات أصلية مع فحص شامل للنظام الكهربائي قبل التركيب.',
      image: serviceImageTwo,
      features: ['فحص مجاني', 'بطاريات أصلية', 'ضمان سنة كاملة'],
      price: 'ابتداءً من 25 د.ك'
    },
    {
      icon: Wrench,
      title: 'إصلاحات طارئة',
      description: 'حلول سريعة وموثوقة للأعطال في أي وقت وفي أي مكان.',
      image: serviceImageThree,
      features: ['تشخيص دقيق', 'قطع غيار أصلية', 'إصلاح فوري'],
      price: 'حسب نوع العطل'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-stone-50 shadow-lg">
            ⚡ خدماتنا المميزة
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            نحل مشاكلك بأسرع وأقوى طريقة
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-700">
            فريق محترف يصل إليك خلال دقائق مع أحدث المعدات وأفضل الأسعار في الكويت.
          </p>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="group relative">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-3xl">
                <div className="relative h-72 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute right-6 top-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="absolute left-6 top-6 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-bold text-white">
                    {service.price}
                  </div>
                  <div className="absolute bottom-6 right-6 left-6">
                    <h3 className="mb-2 text-3xl font-bold text-white">{service.title}</h3>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-white">4.9 تقييم ممتاز</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="mb-6 text-lg leading-relaxed text-slate-700">{service.description}</p>
                  <div className="mb-8 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 font-bold text-white transition hover:from-orange-600 hover:to-red-600">
                    <span className="text-lg">اطلب الخدمة الآن</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-lg font-bold text-white shadow-lg transition duration-300 group-hover:scale-110">
                {index + 1}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-orange-500 blur-3xl" />
              <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-red-500 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-bold sm:text-4xl">جاهزون لخدمتك على مدار الساعة</h3>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300">
                فريقنا المتخصص ينتظر اتصالك لحل مشكلتك بأسرع وقت ممكن وبأعلى مستوى من الاحترافية.
              </p>
              <div className="flex flex-col justify-center gap-6 md:flex-row">
                <button className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white transition hover:from-orange-600 hover:to-red-600">
                  <span>اتصل الآن</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <div className="flex items-center justify-center gap-3 text-slate-300">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                  <span className="font-semibold">متاح الآن - وصول خلال 20 دقيقة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
