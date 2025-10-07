'use client';

import { 
  Download, Calendar, Users, Award, 
  FileText, Image, Video, Mail
} from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'Lowase Raises ₦2.5B Series A to Expand VC Education Across West Africa',
      date: 'January 15, 2024',
      excerpt: 'Leading VC education platform secures funding to democratize venture capital knowledge across the region.',
      category: 'Funding'
    },
    {
      id: 2,
      title: 'Lowase Platform Helps Nigerian Startups Raise Over ₦15B in 2023',
      date: 'December 20, 2023',
      excerpt: 'Annual report shows significant impact on startup funding success rates through expert consultation.',
      category: 'Impact'
    },
    {
      id: 3,
      title: 'Partnership with Leading African VCs Expands Consultant Network',
      date: 'November 8, 2023',
      excerpt: 'Strategic partnerships bring top-tier VC expertise to platform users across Africa.',
      category: 'Partnership'
    }
  ];

  const mediaKit = [
    {
      name: 'Company Logo Pack',
      description: 'High-resolution logos in various formats',
      type: 'Images',
      size: '2.4 MB',
      icon: Image
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      type: 'PDF',
      size: '1.8 MB',
      icon: FileText
    },
    {
      name: 'Executive Photos',
      description: 'Professional headshots of leadership team',
      type: 'Images',
      size: '5.2 MB',
      icon: Image
    },
    {
      name: 'Product Screenshots',
      description: 'Platform interface and feature screenshots',
      type: 'Images',
      size: '3.1 MB',
      icon: Image
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2,847+' },
    { label: 'Funds Raised', value: '₦50B+' },
    { label: 'Success Rate', value: '94%' },
    { label: 'Countries', value: '12+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Media Center</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Press &
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Latest news, press releases, and media resources about Lowase. 
              Democratizing VC education across Africa.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-leather-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Press Releases</h2>
            
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <div key={release.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm">
                          {release.category}
                        </span>
                        <div className="flex items-center space-x-1 text-leather-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{release.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                      <p className="text-leather-200">{release.excerpt}</p>
                    </div>
                    <button className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Media Kit</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                    <Icon className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-leather-300 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-leather-400 mb-4">
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                    <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <h3 className="text-2xl font-bold text-white mb-4">Media Inquiries</h3>
                <p className="text-leather-200 mb-6">
                  For press inquiries, interviews, or additional information about Lowase, 
                  please contact our media team.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-leather-400" />
                    <span className="text-leather-200">press@lowase.ng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-leather-400" />
                    <span className="text-leather-200">Media Relations Team</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-leather-400 text-sm">Founded</div>
                    <div className="text-white font-semibold">2022</div>
                  </div>
                  <div>
                    <div className="text-leather-400 text-sm">Headquarters</div>
                    <div className="text-white font-semibold">Lagos, Nigeria</div>
                  </div>
                  <div>
                    <div className="text-leather-400 text-sm">Industry</div>
                    <div className="text-white font-semibold">EdTech, FinTech</div>
                  </div>
                  <div>
                    <div className="text-leather-400 text-sm">Mission</div>
                    <div className="text-white font-semibold">Democratizing VC education across Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}