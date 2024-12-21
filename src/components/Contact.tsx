import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { currentTheme } = useTheme();

  return (
    <section className={`py-20 bg-${currentTheme.colors.background}`} id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-12 text-${currentTheme.colors.text}`}>Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { Icon: Mail, title: 'Email', content: 'chaudhary.aarti1998@gmail.com' },
            { Icon: Linkedin, title: 'Linkedin', content: 'artichaudhary0' },
            { Icon: MapPin, title: 'Location', content: 'Surat Gujarat, India' }
          ].map(({ Icon, title, content }) => (
            <div key={title} className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${currentTheme.colors.primary} mb-6 group-hover:scale-110 transition-all duration-300`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className={`font-semibold mb-2 text-lg text-black`}>{title}</h3>
              <p className="text-gray-600">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}