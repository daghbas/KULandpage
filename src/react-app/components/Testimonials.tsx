import { Star, Quote, CheckCircle, User, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "أحمد الكندري",
      location: "الجهراء",
      rating: 5,
      text: "خدمة ممتازة وسريعة جداً! وصلوا خلال 20 دقيقة وحلوا المشكلة بكل احترافية. أنصح الجميع بالتعامل معهم.",
      service: "تبديل إطار",
      avatar: User,
      timeAgo: "منذ أسبوع"
    },
    {
      name: "فاطمة العنزي",
      location: "الفروانية", 
      rating: 5,
      text: "البطارية تعطلت في الطريق، اتصلت بهم وجاءوا بسرعة. الأسعار معقولة والخدمة احترافية جداً.",
      service: "تبديل بطارية",
      avatar: User,
      timeAgo: "منذ 3 أيام"
    },
    {
      name: "سالم المطيري",
      location: "حولي",
      rating: 5,
      text: "أفضل خدمة بنشر في الكويت بلا منازع! الفنيون مؤدبون ومحترفون. الخدمة متاحة فعلاً على مدار الساعة.",
      service: "إصلاح طارئ",
      avatar: User,
      timeAgo: "منذ يومين"
    },
    {
      name: "منى الشمري",
      location: "الأحمدي",
      rating: 5,
      text: "خدمة رائعة جداً، الفنيين محترمين ومتمكنين من عملهم. سعر مناسب ووقت قياسي للوصول.",
      service: "تبديل إطار",
      avatar: User,
      timeAgo: "منذ 5 أيام"
    },
    {
      name: "خالد البلوشي",
      location: "مبارك الكبير",
      rating: 5,
      text: "تعاملت معهم أكثر من مرة والخدمة دائماً مميزة. فريق محترف وأسعار عادلة.",
      service: "تبديل بطارية",
      avatar: User,
      timeAgo: "منذ أسبوعين"
    }
  ];

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-700 text-stone-50 px-6 py-3 rounded-full font-semibold mb-6">
            آراء عملائنا
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight">
            ما يقوله عملاؤنا عنا
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            ثقة عملائنا هي أغلى ما نملك، اقرأ تجاربهم الحقيقية معنا
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Main Testimonial Card */}
          <div className="bg-stone-50 rounded-3xl p-12 shadow-xl border border-blue-200 min-h-[400px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-stone-50" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center flex-1">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }, (_, starIndex) => (
                  <Star key={starIndex} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-8 text-xl md:text-2xl max-w-3xl mx-auto">
                "{currentTestimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                  <currentTestimonial.avatar className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-indigo-900 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-slate-600">{currentTestimonial.location}</p>
                </div>
                <div className="text-slate-500 text-sm">{currentTestimonial.timeAgo}</div>
              </div>

              {/* Service Badge */}
              <div className="flex justify-center items-center gap-4">
                <div className="bg-blue-100 text-indigo-700 px-6 py-2 rounded-full font-semibold">
                  {currentTestimonial.service}
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone-50 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Navigation className="w-5 h-5 text-indigo-700 rotate-180" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone-50 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Navigation className="w-5 h-5 text-indigo-700" />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {testimonials.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'w-8 h-3 bg-indigo-700' 
                    : 'w-3 h-3 bg-indigo-300 hover:bg-indigo-500'
                }`}
              />
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="bg-stone-50 rounded-3xl p-12 text-center shadow-lg border border-blue-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-indigo-900 mb-4">
              تقييم ممتاز من عملائنا
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              أكثر من 5000 عميل راضي عن خدماتنا في جميع أنحاء الكويت
            </p>
            
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-900">4.9</div>
                <div className="text-slate-700 font-medium">من 5 نجوم</div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-900">1200+</div>
                <div className="text-slate-700 font-medium">تقييم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
