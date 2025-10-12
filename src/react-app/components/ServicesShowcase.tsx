import { Battery, Circle, Wrench, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function ServicesShowcase() {
  const services = [
    {
      icon: Circle,
      title: "تبديل الإطارات",
      description: "تبديل سريع واحترافي لجميع أنواع الإطارات في موقعك",
      image: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/tire-service-action.jpg",
      features: ["وصول خلال 20 دقيقة", "جميع المقاسات متوفرة", "ضمان شامل"],
      price: "ابتداءً من 15 د.ك"
    },
    {
      icon: Battery,
      title: "تبديل البطاريات",
      description: "بطاريات عالية الجودة مع فحص شامل للنظام الكهربائي",
      image: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/battery-service-action.jpg",
      features: ["فحص مجاني", "بطاريات أصلية", "ضمان سنة كاملة"],
      price: "ابتداءً من 25 د.ك"
    },
    {
      icon: Wrench,
      title: "إصلاحات طارئة",
      description: "حلول سريعة وموثوقة للأعطال الطارئة في الطريق",
      image: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/emergency-repair-service.jpg",
      features: ["تشخيص دقيق", "قطع غيار أصلية", "إصلاح فوري"],
      price: "حسب نوع العطل"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-stone-50 px-8 py-4 rounded-full font-bold mb-8 text-lg">
            ⚡ خدماتنا المميزة
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            نحل مشاكلك بأفضل الطرق
          </h2>
          <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            فريق محترف يصل إليك خلال دقائق مع أحدث المعدات وأفضل الأسعار
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                      <service.icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      {service.price}
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-6 right-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">4.9 تقييم ممتاز</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                    <span className="text-lg">اطلب الخدمة الآن</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>

              {/* Floating Element */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                جاهزون لخدمتك على مدار الساعة
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                فريقنا المتخصص ينتظر اتصالك لحل مشكلتك بأسرع وقت ممكن
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg">
                  <span>اتصل الآن</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-3 text-slate-300">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
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
