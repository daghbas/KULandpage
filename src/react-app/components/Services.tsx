import { Battery, Circle, Wrench, Shield, Clock, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Circle,
      title: "تبديل الإطارات",
      description: "تبديل سريع واحترافي لجميع أنواع الإطارات في موقعك",
      features: ["جميع المقاسات متوفرة", "إطارات أصلية عالية الجودة", "تركيب احترافي وآمن"],
      image: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/tire-service-action.jpg"
    },
    {
      icon: Battery,
      title: "تبديل البطاريات",
      description: "بطاريات عالية الجودة مع فحص شامل للنظام الكهربائي",
      features: ["بطاريات أصلية معتمدة", "فحص مجاني للنظام", "ضمان لمدة سنة كاملة"],
      image: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/battery-service-action.jpg"
    },
    {
      icon: Wrench,
      title: "إصلاحات طارئة",
      description: "حلول سريعة وموثوقة للأعطال الطارئة في الطريق",
      features: ["تشخيص دقيق وسريع", "إصلاح فوري للأعطال", "قطع غيار أصلية متوفرة"],
      image: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/emergency-repair-service.jpg"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "سرعة في الاستجابة",
      description: "نصل إليك خلال 15-30 دقيقة في جميع أنحاء الكويت"
    },
    {
      icon: Shield,
      title: "ضمان وثقة",
      description: "ضمان شامل على جميع الخدمات والقطع المستخدمة"
    },
    {
      icon: Star,
      title: "خدمة متميزة",
      description: "تقييم ممتاز من آلاف العملاء الراضين"
    }
  ];

  return (
    <section className="py-20 bg-stone-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-700 text-stone-50 px-6 py-3 rounded-full font-semibold mb-6">
            خدماتنا المتخصصة
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight">
            خدمات شاملة وموثوقة
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من خدمات السيارات بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Service Card */}
              <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 h-full">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-indigo-900/25"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-stone-50/90 backdrop-blur-sm p-3 rounded-xl">
                    <service.icon className="w-7 h-7 text-indigo-700" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 right-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <p className="text-slate-700 mb-6 leading-relaxed text-lg">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-indigo-800 to-blue-700 rounded-3xl p-12 text-stone-50">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              لماذا تختارنا؟
            </h3>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              نتميز بالجودة والاحترافية في كل ما نقدمه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl inline-block mb-6 group-hover:bg-white/15 transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-stone-50" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-blue-100 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
