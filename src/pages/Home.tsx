import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Globe, Shield, Database, Image, Users, Activity } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Persistent Memory',
      description: 'CURA remembers your medical history and previous conversations for personalized care.'
    },
    {
      icon: Users,
      title: 'Personalized Medical Responses',
      description: 'Get tailored health advice based on your unique profile and medical history.'
    },
    {
      icon: Database,
      title: 'Health Data Integration',
      description: 'Seamlessly integrate with your existing health records and wearable devices.'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Communicate in 2 languages: English and Spanish.'
    },
    {
      icon: Image,
      title: 'Medical Image Generation',
      description: 'Generate visual aids and medical diagrams to better understand your health.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your health data is encrypted and protected with enterprise-grade security.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-blue-600/10 dark:from-violet-600/20 dark:via-transparent dark:to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Smarter Healthcare,{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    Powered by Cura
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Cura is a lightweight multilingual medical LLM designed to bring healthcare AI to 2B+ people in 2 languages.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/features"
                  className="group bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25 text-sm"
                >
                  <span>Explore Cura</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/chatbot"
                  className="group border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                >
                  <span>View Live Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:order-last">
              <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600/20 to-blue-600/20 dark:from-violet-600/30 dark:to-blue-600/30 backdrop-blur-sm border border-violet-500/20 dark:border-violet-500/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-base">AI-Powered Healthcare Assistant</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Powerful Features for Better Healthcare
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cura combines cutting-edge AI with medical expertise to provide personalized healthcare assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500 transition-colors">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-600/10 to-blue-600/10 dark:from-violet-600/20 dark:to-blue-600/20 rounded-2xl p-8 border border-violet-500/20 dark:border-violet-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience Smarter Healthcare?
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust Cura for their healthcare needs. Start your conversation today.
            </p>
            <Link
              to="/chatbot"
              className="group bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-violet-500/25 text-sm"
            >
              <span>Try Cura Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;