'use client';

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Phone, 
  Mail,
  Play,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Bell,
  DollarSign
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Platform',
      href: '#',
      dropdown: [
        { name: 'Training Courses', href: '/training', icon: BookOpen, desc: 'Comprehensive VC education' },
        { name: 'Find Consultants', href: '/consultants', icon: Users, desc: 'Expert VC guidance' },
        { name: 'Pitch Optimizer', href: '/pitch', icon: TrendingUp, desc: 'Perfect your investor pitch' },
        { name: 'Raise Capital', href: '/funding', icon: DollarSign, desc: 'Connect with investors' },
        { name: 'Success Stories', href: '/stories', icon: Award, desc: 'Real transformations' },
      ]
    },
    {
      name: 'Learning',
      href: '#',
      dropdown: [
        { name: 'VC Fundamentals', href: '/courses/fundamentals', icon: BookOpen },
        { name: 'Due Diligence', href: '/courses/due-diligence', icon: BookOpen },
        { name: 'Portfolio Management', href: '/courses/portfolio', icon: BookOpen },
        { name: 'Startup Valuation', href: '/courses/valuation', icon: BookOpen },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'HA', name: 'Hausa', flag: '🇳🇬' },
    { code: 'YO', name: 'Yoruba', flag: '🇳🇬' },
    { code: 'IG', name: 'Igbo', flag: '🇳🇬' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-950/95 backdrop-blur-xl border-b border-leather-800/30 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-leather-900/20 backdrop-blur-sm border-b border-leather-800/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-leather-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>2,847 active learners</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-leather-400">
                <Phone className="w-4 h-4" />
                <span>+234 (0) 800 DEYRAISE</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-leather-400">
                <Mail className="w-4 h-4" />
                <span>hello@deyraise.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
                  className="flex items-center space-x-2 text-leather-300 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {activeDropdown === 'language' && (
                  <div className="absolute top-full right-0 mt-2 bg-dark-900 border border-leather-700 rounded-xl shadow-2xl py-2 min-w-[150px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setActiveDropdown(null);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-leather-800/20 text-leather-200 hover:text-white transition-colors flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Notification Bell */}
              <button className="relative text-leather-300 hover:text-white transition-colors">
                <Bell className="w-4 h-4" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-leather-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-leather-500 to-leather-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">DEYRAISE</div>
              <div className="text-xs text-leather-400 -mt-1">Africa's Premier VC Developer Platform</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-1 text-leather-200 hover:text-white transition-colors font-medium"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-leather-200 hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                )}

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 bg-dark-900/95 backdrop-blur-xl border border-leather-700/30 rounded-2xl shadow-2xl py-4 min-w-[280px]">
                    {item.dropdown.map((subItem) => {
                      const Icon = subItem.icon;
                      return (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-leather-800/20 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-leather-600/20 rounded-lg flex items-center justify-center group-hover:bg-leather-600/30">
                            <Icon className="w-4 h-4 text-leather-400 group-hover:text-leather-300" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{subItem.name}</div>
                            {(subItem as any).desc && (
                              <div className="text-leather-400 text-sm">{(subItem as any).desc}</div>
                            )}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#demo" className="flex items-center space-x-2 text-leather-300 hover:text-white transition-colors">
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </a>
            
            <a href="/auth/signin" className="border border-leather-600 text-leather-300 px-4 py-2 rounded-lg hover:bg-leather-600/10 transition-colors">
              Sign In
            </a>
            
            <a href="/auth/signup" className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 animate-pulse-glow">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-leather-200 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-t border-leather-800/30">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full text-leather-200 hover:text-white transition-colors font-medium py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-leather-200 hover:text-white transition-colors font-medium py-2"
                    >
                      {item.name}
                    </a>
                  )}
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center space-x-3 py-2 text-leather-300 hover:text-white transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            <span>{subItem.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-leather-800 space-y-3">
              <a href="/auth/signin" className="block w-full border border-leather-600 text-leather-300 py-3 rounded-lg hover:bg-leather-600/10 transition-colors text-center">
                Sign In
              </a>
              <a href="/auth/signup" className="block w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-3 rounded-lg font-semibold text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}