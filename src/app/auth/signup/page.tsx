'use client';

import { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, User, ArrowRight, 
  Shield, CheckCircle
} from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'learner',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up
  };

  const roles = [
    { id: 'learner', name: 'Aspiring VC Professional', desc: 'Learn VC fundamentals and get certified' },
    { id: 'entrepreneur', name: 'Startup Founder', desc: 'Get funding guidance and pitch optimization' },
    { id: 'consultant', name: 'VC Consultant', desc: 'Share expertise and monetize knowledge' },
    { id: 'investor', name: 'Investor', desc: 'Find deals and connect with startups' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-leather-500 to-leather-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">L</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Lowase</div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join Lowase</h1>
          <p className="text-leather-200">Start your venture capital journey today</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-leather-200 text-sm font-medium mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-leather-200 text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-leather-200 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-leather-200 text-sm font-medium mb-3">
                I'm joining as a...
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {roles.map((role) => (
                  <label key={role.id} className="cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value={role.id}
                      checked={formData.role === role.id}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      formData.role === role.id
                        ? 'border-leather-500 bg-leather-600/20'
                        : 'border-leather-700 bg-leather-800/20 hover:border-leather-600'
                    }`}>
                      <div className="font-semibold text-white text-sm mb-1">{role.name}</div>
                      <div className="text-leather-300 text-xs">{role.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-leather-200 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-10 pr-12 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                    placeholder="Create password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-leather-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-leather-200 text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-10 pr-12 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                    placeholder="Confirm password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-leather-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                  className="w-4 h-4 text-leather-600 bg-leather-800/30 border-leather-700 rounded focus:ring-leather-500 mt-1"
                  required
                />
                <span className="text-leather-200 text-sm">
                  I agree to the <a href="/terms" className="text-leather-300 hover:text-white underline">Terms of Service</a> and <a href="/privacy" className="text-leather-300 hover:text-white underline">Privacy Policy</a>
                </span>
              </label>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.subscribeNewsletter}
                  onChange={(e) => setFormData({...formData, subscribeNewsletter: e.target.checked})}
                  className="w-4 h-4 text-leather-600 bg-leather-800/30 border-leather-700 rounded focus:ring-leather-500 mt-1"
                />
                <span className="text-leather-200 text-sm">
                  Subscribe to our newsletter for VC insights and updates
                </span>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-leather-800"></div>
            <span className="px-4 text-leather-400 text-sm">Or sign up with</span>
            <div className="flex-1 border-t border-leather-800"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center py-3 px-4 bg-leather-800/30 hover:bg-leather-800/50 border border-leather-700 rounded-xl transition-colors">
              <span className="text-leather-300 font-semibold">G</span>
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-leather-800/30 hover:bg-leather-800/50 border border-leather-700 rounded-xl transition-colors">
              <span className="text-leather-300 font-semibold">in</span>
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-leather-800/30 hover:bg-leather-800/50 border border-leather-700 rounded-xl transition-colors">
              <span className="text-leather-300 font-semibold">GH</span>
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <span className="text-leather-400">Already have an account? </span>
            <a href="/auth/signin" className="text-leather-300 hover:text-white font-semibold transition-colors">
              Sign in
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-leather-300 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Free 7-day trial</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-leather-300 text-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Secure & private</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-leather-300 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}