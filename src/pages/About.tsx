import React from 'react';
import { 
  Target, 
  ArrowRight,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Afsin', social: { linkedin: '#', github: '#' } },
    { name: 'Sohani', social: { linkedin: '#', github: '#' } },
    { name: 'Usha Sri', social: { linkedin: '#', github: '#' } },
    { name: 'Divya', social: { linkedin: '#', github: '#' } },
    { name: 'Vishnu Priya', social: { linkedin: '#', github: '#' } }
  ];

  const achievements = [
    {
      icon: Target,
      title: '95% Accuracy',
      description: 'Medical response accuracy validated by healthcare professionals'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
             CURA
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Democratizing healthcare AI to serve billions across languages and cultures, 
            making quality medical assistance accessible to everyone, everywhere.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Achievement
          </h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-violet-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-violet-500/50 transition-colors text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-slate-700 rounded-lg text-gray-400 hover:text-white hover:bg-violet-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 bg-slate-700 rounded-lg text-gray-400 hover:text-white hover:bg-violet-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl p-12 border border-violet-500/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to make quality healthcare accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25">
              <span>Get Involved</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
