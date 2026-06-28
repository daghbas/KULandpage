import { CheckCircle, Navigation, Quote, Star, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'أحمد الكندري',
      location: 'الجهراء',
      rating: 5,
      text: 'خدمة ممتازة وسريعة جداً! وصلوا خلال 20 دقيقة وحلوا المشكلة بكل احترافية. أنصح الجميع بالتعامل معهم.',
      service: 'تبديل إطار',
      timeAgo: 'منذ أسبوع'
    },
    {
      name: 'فاطمة العنزي',
      location: 'الفروانية',
      rating: 5,
      text: 'البطارية تعطلت في الطريق، اتصلت بهم وجاءوا بسرعة. الأسعار معقولة والخدمة احترافية جداً.',
      service: 'تبديل بطارية',
      timeAgo: 'منذ 3 أيام'
    },
    {
      name: 'سالم المطيري',
      location: 'حولي',
      rating: 5,
      text: 'أفضل خدمة بنشر في الكويت بلا منازع! الفنيون مؤدبون ومحترفون. الخدمة متاحة فعلاً على مدار الساعة.',
      service: 'إصلاح طارئ',
      timeAgo: 'منذ يومين'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setIsAutoPlaying(false);
    window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setIsAutoPlaying(false);
    window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-stone-50">
            آراء عملائنا
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-indigo-900 sm:text-5xl">
            ما يقوله عملاؤنا عنا
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-700">
            ثقة عملائنا هي أغلى ما نملك، وإليك بعض تجاربهم الحقيقية معنا.
          </p>
        </div>

        <div className="relative mx-auto mb-16 max-w-5xl">
          <div className="flex min-h-[400px] flex-col justify-between rounded-[2rem] border border-blue-200 bg-stone-50 p-8 shadow-xl sm:p-12">
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-700 shadow-lg">
                <Quote className="h-8 w-8 text-stone-50" />
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: currentTestimonial.rating }, (_, starIndex) => (
                  <Star key={starIndex} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-700 sm:text-2xl">
                “{currentTestimonial.text}”
              </p>

              <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
                  <UserRound className="h-7 w-7 text-indigo-600" />
                </div>
                <div className="text-right">
                  <h4 className="text-lg font-bold text-indigo-900">{currentTestimonial.name}</h4>
                  <p className="text-slate-600">{currentTestimonial.location}</p>
                </div>
                <div className="text-sm text-slate-500">{currentTestimonial.timeAgo}</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-full bg-blue-100 px-6 py-2 font-semibold text-indigo-700">
                  {currentTestimonial.service}
                </div>
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <button onClick={prevSlide} className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-stone-50 shadow-lg transition hover:scale-110 hover:bg-white">
            <Navigation className="h-5 w-5 rotate-180 text-indigo-700" />
          </button>
          <button onClick={nextSlide} className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-stone-50 shadow-lg transition hover:scale-110 hover:bg-white">
            <Navigation className="h-5 w-5 text-indigo-700" />
          </button>
        </div>

        <div className="mb-16 flex justify-center gap-2">
          {testimonials.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button key={index} onClick={() => goToSlide(index)} className={`rounded-full transition-all duration-300 ${isActive ? 'h-3 w-8 bg-indigo-700' : 'h-3 w-3 bg-indigo-300 hover:bg-indigo-500'}`} />
            );
          })}
        </div>

        <div className="rounded-[2rem] border border-blue-200 bg-stone-50 p-8 text-center shadow-lg sm:p-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-4 text-3xl font-bold text-indigo-900">تقييم ممتاز من عملائنا</h3>
            <p className="mb-8 text-xl leading-relaxed text-slate-700">
              أكثر من 5000 عميل راضي عن خدماتنا في جميع أنحاء الكويت.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-900">4.9</div>
                <div className="font-medium text-slate-700">من 5 نجوم</div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-900">1200+</div>
                <div className="font-medium text-slate-700">تقييم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
