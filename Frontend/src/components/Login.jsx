// import { useState } from 'react';
// import { Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('Login successful! Redirecting...');
//         console.log('Login successful:', data);
//         // Handle successful login (store token in memory)
//       } else {
//         setError(data.message || 'Login failed. Please try again.');
//       }
//     } catch (err) {
//       setError('Unable to connect to server. Please try again later.');
//       console.error('Login error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
//       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

//       <div className="w-full max-w-md relative">
//         <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-sm bg-opacity-95 border border-gray-100">
//           {/* Logo/Header */}
//           <div className="text-center space-y-2">
//             <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mx-auto flex items-center justify-center shadow-lg">
//               <Lock className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
//             <p className="text-gray-500">Sign in to your account</p>
//           </div>

//           {/* Login Form */}
//           <div className="space-y-5">
//             {/* Email Input */}
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <span className="text-gray-600">Remember me</span>
//               </label>
//               <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
//                 Forgot password?
//               </button>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             {/* Success Message */}
//             {success && (
//               <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
//                 {success}
//               </div>
//             )}

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   <span>Signing in...</span>
//                 </>
//               ) : (
//                 <span>Sign In</span>
//               )}
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           {/* Social Login Buttons */}
//           <div className="grid grid-cols-2 gap-3">
//             <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//               </svg>
//               <span className="text-gray-700 font-medium">Google</span>
//             </button>

//           </div>

//           {/* Sign Up Link */}
//           <p className="text-center text-sm text-gray-600">
//             Don't have an account?{' '}
//             <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
//               Sign up
//             </button>
//           </p>
//         </div>

//         {/* Footer Text */}
//         <p className="text-center text-xs text-gray-500 mt-6">
//           Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.
//         </p>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, Loader2, CheckCircle, X, User, Settings, Bell } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const getUserInitial = (email) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserEmail(email);
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          setCurrentPage('home');
        }, 2000);
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setUserEmail(email);
      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
        setCurrentPage('home');
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUserEmail('');
    setEmail('');
    setPassword('');
    setCurrentPage('login');
  };

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {getUserInitial(userEmail)}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-800">{userEmail}</p>
                  <p className="text-xs text-gray-500">Premium User</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-red-50 transition-colors group"
                title="Logout"
              >
                <X className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" />
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {userEmail.split('@')[0]}! 👋</h2>
            <p className="text-gray-600">Here's what's happening with your account today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">1,234</h3>
              <p className="text-gray-600 text-sm">Total Users</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">456</h3>
              <p className="text-gray-600 text-sm">Active Projects</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">+23%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">89%</h3>
              <p className="text-gray-600 text-sm">Success Rate</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {getUserInitial(userEmail)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">New login detected</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 transform animate-scale-in">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h3>
                <p className="text-gray-600">Welcome back, {email.split('@')[0]}</p>
              </div>
              <div className="w-full bg-green-100 rounded-full h-1 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 animate-progress"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-sm bg-opacity-95 border border-gray-100">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mx-auto flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-500">Sign in to your account</p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">Google</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button type="button" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.
        </p>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 2s linear;
        }
      `}</style>
    </div>
  );
}