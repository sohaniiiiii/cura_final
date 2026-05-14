import React from 'react';
import { 
  Search, 
  Globe, 
  GraduationCap, 
  AlertTriangle, 
  FileText, 
  Users,
  ArrowRight,
  Heart,
  Brain,
  Shield
} from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Search,
      title: 'Symptom Checker',
      description: 'Get preliminary insights about your symptoms and understand when to seek medical attention.',
      features: ['AI-powered symptom analysis', 'Risk assessment', 'Care recommendations', 'Emergency alerts'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Medical Translation',
      description: 'Communicate medical information across language barriers with accurate translations.',
      features: ['2 language support', 'Medical terminology', 'Cultural context', 'Real-time translation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Patient Education',
      description: 'Learn about medical conditions, treatments, and preventive care in simple terms.',
      features: ['Simplified explanations', 'Visual aids', 'Personalized content', 'Progress tracking'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Triage',
      description: 'Quick assessment for urgent medical situations to guide immediate actions.',
      features: ['Rapid evaluation', 'Priority assessment', 'Emergency protocols', '24/7 availability'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Research Assistance',
      description: 'Support healthcare research with literature review and data analysis capabilities.',
      features: ['Literature search', 'Data interpretation', 'Research summaries', 'Citation support'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users,
      title: 'Healthcare Support',
      description: 'Assist healthcare professionals with clinical decision support and patient management.',
      features: ['Clinical guidelines', 'Drug interactions', 'Diagnostic support', 'Treatment protocols'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Use Cases for{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              CURA AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how CURA's advanced medical AI can transform healthcare delivery, 
            research, and patient education across diverse scenarios and languages.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${useCase.color} shadow-lg`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl p-12 border border-violet-500/30 mb-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Empowering Global Healthcare
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">2B+</div>
                <div className="text-gray-300">People Supported</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Available Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the power of CURA AI across these use cases. Start your journey towards smarter healthcare today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25">
              <span>Try CURA Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;