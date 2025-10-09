'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight,
  Award,
  Shield,
  Globe,
  Star,
  Download,
  Play
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Training Courses', href: '/training' },
      { name: 'Find Consultants', href: '/consultants' },
      { name: 'Become Trainer', href: '/trainer' },
      { name: 'Success Stories', href: '/stories' },
      { name: 'Pricing', href: '/pricing' },
    ],
    learning: [
      { name: 'VC Fundamentals', href: '/courses/fundamentals' },
      { name: 'Due Diligence', href: '/courses/due-diligence' },
      { name: 'Portfolio Management', href: '/courses/portfolio' },
      { name: 'Startup Valuation', href: '/courses/valuation' },
      { name: 'Investment Strategy', href: '/courses/strategy' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Templates', href: '/templates' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'VC Glossary', href: '/glossary' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'API Docs', href: '/api' },
      { name: 'Status', href: '/status' },
      { name: 'Security', href: '/security' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/lowase', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/lowase', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/lowase', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/lowase', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/lowase', color: 'hover:text-red-400' },
  ];

  const stats = [
    { label: 'Active Users', value: '2,847+' },
    { label: 'Courses', value: '150+' },
    { label: 'Consultants', value: '247+' },
    { label: 'Success Rate', value: '94%' },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-950 to-leather-950 border-t border-leather-800/30">
      {/* Newsletter Section */}
      <div className="border-b border-leather-800/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-800/20 px-4 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get the Latest VC Insights
            </h3>
            <p className="text-xl text-leather-200 mb-8 max-w-2xl mx-auto">
              Weekly newsletter with market trends, success stories, and exclusive training content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
              />
              <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-leather-400 text-sm mt-4">
              Join 15,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-leather-500 to-leather-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">DEYRAISE</div>
                <div className="text-leather-400 text-sm">Africa's Premier VC Developer Platform</div>
              </div>
            </div>
            
            <p className="text-leather-200 leading-relaxed">
              Africa's premier platform transforming careers through comprehensive venture capital education, 
              expert consultations, and professional networking.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-leather-300">
                <MapPin className="w-5 h-5 text-leather-500" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-leather-300">
                <Phone className="w-5 h-5 text-leather-500" />
                <span>+2348116799050</span>
              </div>
              <div className="flex items-center space-x-3 text-leather-300">
                <Mail className="w-5 h-5 text-leather-500" />
                <span>vcpartners@lowase.org</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-leather-800/20 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-leather-500" />
                <span className="text-leather-300 text-sm">CBN Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-leather-800/20 px-3 py-2 rounded-lg">
                <Award className="w-4 h-4 text-leather-500" />
                <span className="text-leather-300 text-sm">Certified</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-leather-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Learning</h4>
              <ul className="space-y-3">
                {footerLinks.learning.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-leather-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-leather-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-leather-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-leather-800/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-leather-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-leather-800/30">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div>
              <h4 className="text-white font-semibold mb-2">Download Our Mobile App</h4>
              <p className="text-leather-300">Learn on the go with our mobile application</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex items-center space-x-3 bg-leather-800/30 hover:bg-leather-800/50 px-6 py-3 rounded-xl transition-colors">
                <Download className="w-5 h-5 text-leather-400" />
                <div className="text-left">
                  <div className="text-white text-sm font-semibold">Download for</div>
                  <div className="text-leather-300 text-xs">iOS & Android</div>
                </div>
              </button>
              
              <button className="flex items-center space-x-3 bg-leather-800/30 hover:bg-leather-800/50 px-6 py-3 rounded-xl transition-colors">
                <Play className="w-5 h-5 text-leather-400" />
                <div className="text-left">
                  <div className="text-white text-sm font-semibold">Watch</div>
                  <div className="text-leather-300 text-xs">Demo Video</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-leather-800/30 bg-leather-950/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {/* Copyright */}
            <div className="text-center">
              <p className="text-leather-400 text-sm">© {currentYear} DEYRAISE.</p>
              <p className="text-leather-400 text-sm">Established by Lowase Capital Partners Ltd. All rights reserved.</p>
            </div>
            
            {/* Links and Social */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4 text-sm">
                <a href="/privacy" className="text-leather-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-leather-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-leather-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-leather-400 text-sm">Follow us:</span>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-leather-400 ${social.color} transition-colors`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}