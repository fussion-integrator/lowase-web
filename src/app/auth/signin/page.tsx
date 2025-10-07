'use client';

import { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Shield
} from 'lucide-react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-leather-200">Sign in to continue your VC journey</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {/* Password */}
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
                  placeholder="Enter your password"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                  className="w-4 h-4 text-leather-600 bg-leather-800/30 border-leather-700 rounded focus:ring-leather-500"
                />
                <span className="text-leather-200 text-sm">Remember me</span>
              </label>
              <a href="/auth/forgot-password" className="text-leather-400 hover:text-white text-sm transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-leather-800"></div>
            <span className="px-4 text-leather-400 text-sm">Or continue with</span>
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

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <span className="text-leather-400">Don't have an account? </span>
            <a href="/auth/signup" className="text-leather-300 hover:text-white font-semibold transition-colors">
              Sign up
            </a>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-leather-400 text-sm">
          <Shield className="w-4 h-4" />
          <span>Your data is protected with enterprise-grade security</span>
        </div>
      </div>
    </div>
  );
}