import { Phone, Wrench } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Font is now loaded locally, no need for external fonts
    document.body.style.fontFamily = "'IBM Plex Sans Arabic', sans-serif";
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:+96512345678';
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900" dir="rtl">
      {/* Background Image with Strong Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/emergency-scene.jpg" 
          alt="حالة طوارئ في الطريق"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-indigo-900/80 to-blue-900/90"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-stone-50 text-2xl font-bold flex items-center gap-3">
            <div className="bg-orange-500 p-3 rounded-xl shadow-lg">
              <Wrench className="w-6 h-6 text-stone-50" />
            </div>
            بنشر متنقل الكويت
          </div>
          <div className="bg-red-600 text-stone-50 px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            ⚡ 24 ساعة
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Problem Statement */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-stone-50 mb-6 leading-tight">
              عالق في الطريق؟
            </h1>
            <p className="text-2xl md:text-3xl text-orange-300 font-semibold mb-8">
              إطار مثقوب أو بطارية فارغة؟
            </p>
          </div>

          {/* Solution Promise */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
              نحل مشكلتك خلال 
              <span className="text-orange-400"> 20 دقيقة</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              فنيون محترفون يصلون إليك أينما كنت في الكويت
            </p>
          </div>

          {/* Magic CTA Button */}
          <div className="space-y-8">
            <button 
              onClick={handleCallNow}
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-stone-50 text-lg md:text-xl font-bold px-10 py-5 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-6">
                <Phone className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                <span>اتصل الآن واحصل على المساعدة</span>
              </div>
            </button>

            

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-8 text-stone-50 text-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>متاح الآن</span>
              </div>
              <div className="w-1 h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>وصول سريع</span>
              </div>
              <div className="w-1 h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>خدمة مضمونة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
