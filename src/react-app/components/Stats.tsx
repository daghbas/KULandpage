import { Users, Clock, CheckCircle, Shield, Building, UserCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, number: "5000+", label: "عميل راضي", color: "text-slate-600" },
    { icon: Clock, number: "24/7", label: "خدمة متواصلة", color: "text-slate-600" },
    { icon: CheckCircle, number: "20", label: "دقيقة متوسط الوصول", color: "text-slate-600" },
    { icon: Shield, number: "100%", label: "ضمان الجودة", color: "text-slate-600" }
  ];

  const certifications = [
    { label: "مرخص من الجهات المختصة", icon: Building },
    { label: "مؤمن بالكامل ضد المخاطر", icon: Shield },
    { label: "فنيون معتمدون ومدربون", icon: UserCheck }
  ];

  return (
    <section className="py-20 bg-stone-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-indigo-800 px-6 py-3 rounded-full font-semibold mb-6">
            إنجازاتنا بالأرقام
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight">
            ثقة العملاء في أرقام
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            نفخر بما حققناه من إنجازات وثقة عملائنا على مر السنين
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-700 mb-6 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-stone-50" />
                </div>
                
                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-indigo-900 mb-3">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-slate-700 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            اعتماداتنا ومؤهلاتنا
          </h3>
          <p className="text-slate-700 text-xl max-w-2xl mx-auto">
            نعمل وفق أعلى معايير الجودة والأمان في الصناعة
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-6 bg-stone-50 px-8 py-6 rounded-2xl border border-blue-200 hover:bg-blue-50 transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-all duration-300">
                  <certification.icon className="w-6 h-6 text-indigo-600" />
                </div>
                
                {/* Status Indicator */}
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                
                {/* Label */}
                <span className="text-indigo-900 font-semibold text-lg flex-1">
                  {certification.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-indigo-800 to-blue-700 rounded-2xl p-8 text-stone-50 max-w-4xl mx-auto">
            <Shield className="w-12 h-12 text-stone-50 mx-auto mb-4" />
            <p className="text-stone-50 text-2xl font-bold mb-3">
              ثقتكم أمانة في أعناقنا
            </p>
            <p className="text-blue-100 text-lg leading-relaxed">
              نعمل بشفافية تامة ووفق أعلى معايير الجودة والأمان لضمان رضاكم التام
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
