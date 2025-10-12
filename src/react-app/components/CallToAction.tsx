import { Phone, MessageCircle, Clock, MapPin, AlertTriangle } from 'lucide-react';

export default function CallToAction() {
  const handleCallNow = () => {
    window.location.href = 'tel:+96512345678';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/96512345678?text=مرحباً، أحتاج خدمة بنشر متنقل', '_blank');
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-800 relative overflow-hidden" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Emergency Banner */}
          <div className="bg-orange-600 text-white text-center py-4 rounded-2xl mb-12 shadow-lg">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-bold text-lg">حالة طوارئ؟ اتصل الآن - متاحون 24 ساعة!</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6 leading-tight">
              تحتاج مساعدة فورية؟
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              لا تبقى عالقاً في الطريق! اتصل بنا الآن واحصل على خدمة سريعة واحترافية
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <button 
              onClick={handleCallNow}
              className="bg-stone-50 hover:bg-white text-indigo-900 p-8 rounded-2xl font-bold transition-all duration-300 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <Phone className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <div className="text-2xl font-bold mb-2">اتصال مباشر</div>
                <div className="text-slate-700 text-lg">+965 1234 5678</div>
              </div>
            </button>

            <button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-stone-50 p-8 rounded-2xl font-bold transition-all duration-300 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <MessageCircle className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <div className="text-2xl font-bold mb-2">واتساب</div>
                <div className="text-green-100 text-lg">رسالة سريعة</div>
              </div>
            </button>
          </div>

          {/* Response Time */}
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-stone-50" />
                <p className="text-stone-50 text-lg">متوسط وقت الاستجابة: 15-30 دقيقة</p>
              </div>
              <p className="text-blue-100 font-semibold">
                خدمة احترافية تستحق الثقة
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Areas - Separate Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white relative" dir="rtl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-indigo-900 mb-4">نغطي جميع مناطق الكويت</h3>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              أينما كنت في الكويت، نصل إليك بأسرع وقت ممكن
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "العاصمة", "حولي", "الفروانية", "الجهراء",
              "الأحمدي", "مبارك الكبير", "جميع المناطق", "الطرق السريعة"
            ].map((area, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-indigo-900 font-bold text-lg">{area}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-green-100 text-green-800 px-8 py-4 rounded-full font-bold text-lg">
              ✅ تغطية شاملة - خدمة متاحة في جميع الأوقات
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
