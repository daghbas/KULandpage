import { useState, useEffect } from 'react';

export default function ImageShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/tire-service-action.jpg",
      title: "تبديل الإطارات الاحترافي",
      description: "خدمة سريعة ومضمونة"
    },
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/battery-service-action.jpg",
      title: "تبديل البطاريات المتخصص",
      description: "بطاريات أصلية عالية الجودة"
    },
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/emergency-repair-service.jpg",
      title: "إصلاحات طارئة فورية",
      description: "حلول سريعة في أي وقت"
    },
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/service-action.jpg",
      title: "فريق محترف ومدرب",
      description: "خبرة واسعة في جميع الخدمات"
    },
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/satisfied-customers.jpg",
      title: "عملاء راضون وسعداء",
      description: "آلاف العملاء يثقون بنا"
    },
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/hero-background.jpg",
      title: "خدمة متنقلة احترافية",
      description: "نصل إليك أينما كنت"
    },
    {
      url: "https://mocha-cdn.com/0199a6e3-aa03-7d21-a627-6de5590066c7/emergency-scene.jpg",
      title: "استجابة سريعة للطوارئ",
      description: "متاحون على مدار الساعة"
    },
    {
      url: "https://images.unsplash.com/photo-1486662845123-1d1c3925e5e0?w=800&q=80",
      title: "أحدث المعدات والأدوات",
      description: "تكنولوجيا متطورة"
    },
    {
      url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      title: "فحص شامل ودقيق",
      description: "تشخيص احترافي للمشاكل"
    },
    {
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
      title: "ضمان شامل على جميع الخدمات",
      description: "راحة بال وثقة مطلقة"
    }
  ];

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const visibleCount = 5;
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentImageIndex + i) % images.length;
      visible.push({
        ...images[index],
        position: i,
        isCenter: i === 2
      });
    }
    
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold mb-8 text-lg shadow-lg">
            ✨ خدماتنا في صور
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            شاهد مستوى الخدمة الاحترافية
          </h2>
          <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            صور حقيقية لفريقنا المحترف أثناء تقديم أفضل الخدمات لعملائنا
          </p>
        </div>

        {/* Circular Image Carousel */}
        <div className="relative h-96 md:h-[500px] mb-16">
          <div className="flex items-center justify-center h-full relative">
            {getVisibleImages().map((image) => {
              const { position, isCenter } = image;
              
              // Calculate positioning
              const translateX = (position - 2) * 280; // Spread images horizontally
              const scale = isCenter ? 1.2 : position === 1 || position === 3 ? 0.9 : 0.7;
              const zIndex = isCenter ? 30 : position === 1 || position === 3 ? 20 : 10;
              const opacity = isCenter ? 1 : position === 1 || position === 3 ? 0.8 : 0.5;
              
              return (
                <div
                  key={`${image.url}-${currentImageIndex}-${position}`}
                  className="absolute transition-all duration-700 ease-in-out cursor-pointer group"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      if (position < 2) {
                        prevImage();
                      } else {
                        nextImage();
                      }
                    }
                  }}
                >
                  {/* Image Container */}
                  <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    
                    {/* Content Overlay - Only show on center image */}
                    {isCenter && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-blue-100 text-lg">{image.description}</p>
                      </div>
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Reflection Effect */}
                  <div 
                    className="absolute top-full left-0 w-full h-20 opacity-30"
                    style={{
                      background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))`,
                      maskImage: `url(${image.url})`,
                      maskSize: 'cover',
                      transform: 'scaleY(-1)',
                      filter: 'blur(1px)'
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-16">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentImageIndex
                  ? 'w-8 h-3 bg-orange-500'
                  : 'w-3 h-3 bg-slate-400 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">العرض التلقائي نشط</span>
          </div>
        </div>
      </div>
    </section>
  );
}
