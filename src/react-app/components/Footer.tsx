import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleCallNow = () => {
    window.location.href = 'tel:+96512345678';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/96512345678?text=مرحباً، أحتاج خدمة بنشر متنقل', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-slate-900 text-stone-50 py-16" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-700 p-2 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">بنشر متنقل الكويت</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 text-lg">
              نحن شركة رائدة في خدمات البنشر المتنقل في الكويت، نقدم خدمات احترافية على مدار 24 ساعة في جميع أنحاء الكويت بأسعار تنافسية وجودة عالية.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleCallNow}
                className="bg-indigo-700 hover:bg-indigo-600 text-stone-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن
              </button>
              <button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-stone-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-stone-50">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">+965 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">واتساب متاح</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">info@bansharkuwait.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">24 ساعة / 7 أيام</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-stone-50">مناطق الخدمة</h4>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span>العاصمة</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>حولي</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>الفروانية</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>الجهراء</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>الأحمدي</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>مبارك الكبير</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-indigo-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-200">
              © 2024 بنشر متنقل الكويت. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center gap-6 text-blue-200">
              <span>مرخص رسمياً</span>
              <span>•</span>
              <span>مؤمن بالكامل</span>
              <span>•</span>
              <span>فنيون معتمدون</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Strip */}
        <div className="mt-8 bg-red-600 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="font-bold">حالة طوارئ؟ اتصل الآن: +965 1234 5678</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
