import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  const skills = [
    'E-commerce Services',
    'SEO Specialist',
    'IT Software Sales',
    'E-commerce & IT Product Content Writing',
  ];

  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'text-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/',
      color: 'text-green-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@example.com',
      color: 'text-gray-600',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Identity Section */}
      <section className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgyNDM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl sm:text-5xl mb-3">John Anderson</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              E-commerce Specialist | SEO Expert | IT Software & Digital Services Provider
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 mb-8">
        <h2 className="text-3xl mb-6 text-gray-900">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With over 8 years of experience in e-commerce and digital marketing, I specialize in helping
          businesses succeed in the online marketplace. My expertise spans across multiple global
          platforms including Amazon, Walmart, and eBay. I focus on delivering comprehensive IT
          solutions, SEO optimization, and compelling content that drives sales and enhances brand
          visibility. My passion lies in leveraging technology and strategic marketing to create
          measurable growth for businesses of all sizes.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 mb-8">
        <h2 className="text-3xl mb-6 text-gray-900">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-gray-900">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 sm:p-12 text-white">
        <h2 className="text-3xl mb-3">Let's Work Together</h2>
        <p className="text-blue-100 text-lg mb-8">
          Ready to take your e-commerce business to the next level? Get in touch today!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Icon className={`w-6 h-6 ${method.color}`} />
                <span className="text-gray-900 font-medium">{method.label}</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
