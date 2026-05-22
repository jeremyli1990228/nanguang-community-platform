import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ShieldCheck, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* 左侧品牌区域 */}
      <div className="hidden lg:flex lg:w-2/3 bg-white relative overflow-hidden">
        {/* 背景图 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/background.png"
            alt="背景"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
        
        {/* Logo和标题 */}
        <div className="relative z-10 flex flex-col justify-start items-start w-full pt-16" style={{ marginLeft: '200px' }}>
          <div className="flex items-center gap-5">
            <div className="w-24 h-24">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5C25.147 5 5 25.147 5 50C5 74.853 25.147 95 50 95C74.853 95 95 74.853 95 50C95 25.147 74.853 5 50 5ZM50 85C30.67 85 15 69.33 15 50C15 30.67 30.67 15 50 15C69.33 15 85 30.67 85 50C85 69.33 69.33 85 50 85Z" fill="#3b82f6"/>
                <path d="M50 20C33.431 20 20 33.431 20 50C20 66.569 33.431 80 50 80C66.569 80 80 66.569 80 50C80 33.431 66.569 20 50 20Z" fill="#10b981"/>
                <path d="M35 40C35 34.477 39.477 30 45 30C47.761 30 50.25 31.122 51.99 32.915L43.985 40.921C42.984 39.885 42.5 38.492 42.5 37C42.5 35.619 43.619 34.5 45 34.5C46.381 34.5 47.5 35.619 47.5 37C47.5 38.342 47.018 39.575 46.196 40.583L54.201 48.589C56.083 46.749 57.2 44.383 57.2 41.8C57.2 33.835 50.73 27.3 44 27.3C37.253 27.3 32 32.553 32 39.3C32 46.076 37.253 51.3 44 51.3C46.824 51.3 49.322 50.451 51.186 48.96L59.191 40.955C60.242 41.981 60.9 43.343 60.9 44.8C60.9 46.455 59.555 47.8 57.9 47.8C56.245 47.8 54.9 46.455 54.9 44.8C54.9 43.389 55.402 42.107 56.217 41.139L48.212 49.144C46.33 50.984 45.213 53.35 45.213 55.933C45.213 63.898 51.683 70.433 58.413 70.433C65.16 70.433 70.413 65.18 70.413 58.433C70.413 51.686 65.16 46.433 58.413 46.433C55.589 46.433 53.091 47.282 51.227 48.773L43.222 56.778C44.273 57.804 44.931 59.166 44.931 60.623C44.931 62.278 46.276 63.623 47.931 63.623C49.586 63.623 50.931 62.278 50.931 60.623C50.931 59.242 50.049 58.03 48.789 57.296L56.794 49.291C58.531 51.056 59.5 53.383 59.5 55.933C59.5 61.892 54.625 66.767 48.667 66.767C42.708 66.767 37.833 61.892 37.833 55.933C37.833 49.975 42.708 45.1 48.667 45.1C51.828 45.1 54.612 46.429 56.568 48.614L48.563 56.619C46.7 58.11 44.202 58.959 41.379 58.959C34.632 58.959 29.379 53.706 29.379 46.959C29.379 40.212 34.632 34.959 41.379 34.959C44.54 34.959 47.324 36.288 49.28 38.473L41.275 46.478L35 40V40Z" fill="#f59e0b"/>
              </svg>
            </div>
            <h1 className="text-[2.75rem] font-bold text-gray-800">南光社区治理平台</h1>
          </div>
        </div>
      </div>
      
      {/* 右侧登录表单区域 */}
      <div className="w-full lg:w-1/3 bg-white flex items-center justify-center p-8 relative shadow-[-20px_0_40px_-15px_rgba(0,0,0,0.08),-10px_0_25px_-10px_rgba(0,0,0,0.05)]">
        <div className="w-full max-w-sm relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-gray-800">用户名登录</h2>
          </div>
          
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-700">当前组织：南光社区</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* 用户名 */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="请输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* 密码 */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>

            {/* 验证码 */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShieldCheck className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="请输入图片验证码"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="w-32 bg-white border border-gray-300 flex items-center justify-center">
                <div className="text-2xl font-bold select-none" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  background: 'linear-gradient(45deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  X5vM
                </div>
              </div>
            </div>

            {/* 登录按钮 */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 text-sm rounded transition-colors"
            >
              登 录
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
