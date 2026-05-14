import React from 'react';
import { 
  Brain, 
  Globe, 
  Shield, 
  Database, 
  Zap, 
  Upload, 
  MessageSquare, 
  Clock,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: 'Real-time Multilingual Chat',
      description: 'Seamless communication in 2 languages with instant translation and context preservation.',
      details: [
        'Live language switching',
        'Context-aware translations',
        'Cultural sensitivity',
        'Medical terminology accuracy'
      ]
    },
    {
      icon: Clock,
      title: 'Memory Across Sessions',
      description: 'Cura remembers your medical history and previous conversations for personalized care.',
      details: [
        'Persistent conversation history',
        'Medical timeline tracking',
        'Preference learning',
        'Secure data encryption'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and HIPAA compliance ensure your health data stays protected.'
    },
    {
      icon: Database,
      title: 'Health Data Integration',
      description: 'Connect with EHRs, wearables, and health apps for comprehensive health insights.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Responses',
      description: 'Optimized inference engine delivers accurate medical insights in milliseconds.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Designed to work reliably across different regions and healthcare systems.'
    }
  ];

  const benefits = [
    'Reduce diagnostic errors by up to 40%',
    'Save healthcare providers 2+ hours daily',
    'Improve patient satisfaction scores',
    'Support 2B+ people in their native language',
    'Available 24/7 without downtime',
    'Continuous learning and improvement'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Modern Healthcare
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            CURA combines cutting-edge AI technology with healthcare expertise to deliver 
            a comprehensive medical assistant that scales globally.
          </p>
        </div>

        {/* Core Features */}
        <div className="space-y-16 mb-20">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-violet-600 rounded-xl">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">{feature.description}</p>
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-2xl border border-violet-500/30 flex items-center justify-center">
                  <feature.icon className="w-16 h-16 text-violet-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Built for Healthcare Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-violet-600 rounded-lg group-hover:bg-violet-500 transition-colors">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl p-12 border border-violet-500/30 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Proven Results in Healthcare
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                CURA has been designed based on extensive research and real-world healthcare needs, 
                delivering measurable improvements in patient outcomes and provider efficiency.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700 mb-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
              "CURA has revolutionized how we deliver healthcare services. The multilingual support 
              and accurate medical insights have helped us serve our diverse patient population better than ever."
            </blockquote>
           
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience CURA's Full Potential
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join healthcare professionals worldwide who trust CURA for intelligent medical assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;