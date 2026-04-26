'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'An error occurred');
        return;
      }

      login(data.user);
      router.push('/blogs');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-8">
      {/* Background blur effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff7a2f]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff7a2f]/5 rounded-full blur-3xl" />
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-8">
        {/* Top Tabs */}
        <div className="flex mb-8 border-b border-[#eee]">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 pb-3 text-base font-medium transition-colors relative ${
              isLogin ? 'text-[#333]' : 'text-[#888] hover:text-[#555]'
            }`}
          >
            Sign In
            {isLogin && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff7a2f] rounded-full" />
            )}
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 pb-3 text-base font-medium transition-colors relative ${
              !isLogin ? 'text-[#333]' : 'text-[#888] hover:text-[#555]'
            }`}
          >
            Sign Up
            {!isLogin && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff7a2f] rounded-full" />
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-xs text-[#888] mb-1.5 font-medium uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#ddd] rounded-xl text-[#333] placeholder:text-[#aaa] focus:outline-none focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/20 transition-all"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs text-[#888] mb-1.5 font-medium uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-[#ddd] rounded-xl text-[#333] placeholder:text-[#aaa] focus:outline-none focus:border-[#ff7a2f] focus:ring-2 focus:ring-[#ff7a2f]/20 transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#555] transition-colors p-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forget Password */}
          {isLogin && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#888] hover:text-[#ff7a2f] transition-colors"
              >
                Forget Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#ff7a2f] hover:bg-[#e86d24] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#ff7a2f]/25"
          >
            {loading ? (
              'Loading...'
            ) : (
              <>
                {isLogin ? 'Sign In' : 'Sign Up'}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#eee]" />
          <span className="text-sm text-[#888] font-medium">or</span>
          <div className="flex-1 h-px bg-[#eee]" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full py-3 px-4 bg-[#f8f8f8] hover:bg-[#f0f0f0] border border-[#e5e5e5] rounded-xl flex items-center gap-3 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-[#333]">Continue with Google</span>
          </button>

          <button
            type="button"
            className="w-full py-3 px-4 bg-[#f8f8f8] hover:bg-[#f0f0f0] border border-[#e5e5e5] rounded-xl flex items-center gap-3 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span className="text-sm font-medium text-[#333]">Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}

