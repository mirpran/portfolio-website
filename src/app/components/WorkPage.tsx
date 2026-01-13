import { ShoppingCart, FileText, Briefcase, Award } from 'lucide-react';

export function WorkPage() {
  const ecommercePlatforms = [
    { name: 'Amazon', color: 'bg-orange-50 border-orange-200 text-orange-800' },
    { name: 'Walmart', color: 'bg-blue-50 border-blue-200 text-blue-800' },
    { name: 'Wayfair', color: 'bg-purple-50 border-purple-200 text-purple-800' },
    { name: 'eBay', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
    { name: 'TikTok Shop', color: 'bg-pink-50 border-pink-200 text-pink-800' },
  ];

  const freelancePlatforms = [
    {
      name: 'Fiverr',
      roles: ['AI Mobile App Developer', 'Full-Stack Developer'],
      color: 'bg-green-50 border-green-200',
    },
    {
      name: 'Upwork',
      roles: ['AI Mobile App Developer', 'Full-Stack Developer'],
      color: 'bg-emerald-50 border-emerald-200',
    },
  ];

  const contentProjects = [
    {
      title: 'Product Description Writing',
      description: 'Creating compelling, SEO-optimized product descriptions for global marketplaces',
      icon: FileText,
    },
    {
      title: 'Listing Optimization',
      description: 'Enhancing product listings with strategic keywords and engaging content',
      icon: Award,
    },
    {
      title: 'Content Strategy',
      description: 'Developing content strategies that increase visibility and conversion rates',
      icon: Briefcase,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* E-commerce Experience Section */}
      <section className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingCart className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl text-gray-900">E-commerce Experience</h2>
        </div>
        <p className="text-gray-600 mb-8 text-lg">
          Extensive experience working with leading global e-commerce platforms, helping businesses
          optimize their presence and maximize sales.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {ecommercePlatforms.map((platform, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 text-center ${platform.color} transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="font-semibold text-lg">{platform.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Writing Projects Section */}
      <section className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl text-gray-900">Content Writing Projects</h2>
        </div>
        <p className="text-gray-600 mb-8 text-lg">
          Specialized in e-commerce product content writing for global marketplaces with a focus on
          SEO optimization and conversion-driven copy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Freelance Platforms Section */}
      <section className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl text-gray-900">Freelance Experience</h2>
        </div>
        <p className="text-gray-600 mb-8 text-lg">
          Active on top freelancing platforms, delivering high-quality development and technology
          solutions to clients worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelancePlatforms.map((platform, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border-2 ${platform.color} hover:shadow-lg transition-all duration-200`}
            >
              <h3 className="text-2xl mb-4 text-gray-900">{platform.name}</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-3">Specialized Roles:</p>
                {platform.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-gray-900">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Highlights */}
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl mb-3 text-gray-900">Project Highlights</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Developed and deployed multiple AI-powered mobile applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Built full-stack web applications with modern technologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Integrated AI and machine learning solutions for business automation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Maintained 5-star ratings across multiple client projects</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
