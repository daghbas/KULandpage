import { Battery, Circle, Clock3, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import serviceImageOne from '../../../assets/images/graduation-project-1.webp';
import serviceImageTwo from '../../../assets/images/graduation-project-2.webp';
import serviceImageThree from '../../../assets/images/graphic-design.webp';

export default function Services() {
  const services = [
    {
      icon: Circle,
      title: 'تبديل الإطارات',
      description: 'تبديل سريع واحترافي لجميع الأنواع مع التركيز على الأمان والسرعة.',
      features: ['جميع المقاسات متوفرة', 'إطارات أصلية عالية الجودة', 'تركيب احترافي وآمن'],
      image: serviceImageOne
    },
    {
      icon: Battery,
      title: 'تبديل البطاريات',
      description: 'بطاريات عالية الجودة مع فحص شامل للنظام الكهربائي قبل التركيب.',
      features: ['بطاريات أصلية معتمدة', 'فحص مجاني للنظام', 'ضمان لمدة سنة كاملة'],
      image: serviceImageTwo
    },
    {
      icon: Wrench,
      title: 'إصلاحات طارئة',
      description: 'حلول سريعة وموثوقة للأعطال الطارئة في الطريق أو في المكان.',
      features: ['تشخيص دقيق وسريع', 'إصلاح فوري للأعطال', 'قطع غيار أصلية متوفرة'],
      image: serviceImageThree
    }
  ];

  const benefits = [
    { icon: Clock3, title: 'سرعة في الاستجابة', description: 'نصل إليك خلال 15–30 دقيقة في جميع أنحاء الكويت.' },
    { icon: ShieldCheck, title: 'ضمان وثقة', description: 'ضمان شامل على الخدمات والقطع المستخدمة مع متابعة مهنية.' },
    { icon: Sparkles, title: 'خدمة متميزة', description: 'تقييم ممتاز من آلاف العملاء الراضين عن كل عملية.' }
  ];

  return (
    <section id="services" className="bg-stone-50 py-20" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-stone-50">
            خدماتنا المتخصصة
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-indigo-900 sm:text-5xl">
            خدمات شاملة وموثوقة لتغطية أي موقف طارئ
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-700">
            نقدم حلولاً احترافية تجمع بين السرعة، الجودة، وثقة العميل في كل خطوة.
          </p>
        </div>

        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute right-4 top-4 rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                  <service.icon className="h-7 w-7 text-indigo-700" />
                </div>
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="mb-6 text-lg leading-relaxed text-slate-700">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700">
                      <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-indigo-800 to-blue-700 p-8 text-stone-50 sm:p-12">
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-3xl font-bold sm:text-4xl">لماذا تختارنا؟</h3>
            <p className="mx-auto max-w-2xl text-xl text-blue-100">
              نتميز بالجودة والاحترافية في كل ما نقدمه مع تركيز واضح على الراحة والثقة.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center backdrop-blur-sm">
                <div className="mb-6 inline-flex rounded-2xl bg-white/15 p-4">
                  <benefit.icon className="h-10 w-10 text-stone-50" />
                </div>
                <h4 className="mb-3 text-xl font-semibold">{benefit.title}</h4>
                <p className="text-lg leading-relaxed text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
