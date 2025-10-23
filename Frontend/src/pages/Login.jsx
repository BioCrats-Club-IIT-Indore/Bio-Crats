import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, Loader2, CheckCircle, X,AlertCircle ,  ArrowLeft,LogIn, User, Settings, Bell } from 'lucide-react';



export default function Login() {
  const [currentPage, setCurrentPage] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
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
        localStorage.setItem("token", data.token);
        setUserEmail(email);
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          setCurrentPage('/');
        }, 2000);
      } else {
        setShowErrorPopup(true);
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setUserEmail(email);
      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
        setCurrentPage('/');
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
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    window.location.href = "/";
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
     window.location.href = "/";
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={closeSuccessPopup}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-2 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Login Successful!
              </h2>
              <p className="text-gray-600">
                Welcome back, {email.split('@')[0]}! Redirecting you to the home page...
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {email.split('@')[0]}
                    </p>
                    <p className="text-xs text-gray-600 truncate">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showErrorPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-full mb-2 shadow-lg">
                <AlertCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Login Failed
              </h2>
              <p className="text-gray-600 text-sm">{error}</p>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={closeErrorPopup}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 px-4 rounded-lg font-medium transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-sm bg-opacity-95 border border-gray-100">
            <button
              onClick={() => {
                console.log('Manual redirect to home');
                window.location.href = '/';
              }}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Go to Home"
            >
              <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
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



          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </a>
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
    </div>
  );
}

// import { useState } from 'react';
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   CheckCircle,
//   AlertCircle,
//   X,
//   ArrowLeft,
//   LogIn,
// } from "lucide-react";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [showErrorPopup, setShowErrorPopup] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [userEmail, setUserEmail] = useState('');
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setShowSuccessPopup(true);
//         setTimeout(() => {
//           window.location.href = "/";
//         }, 2000);
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//         setShowErrorPopup(true);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage(
//         "Network error. Please check if the server is running on localhost:5000"
//       );
//       setShowErrorPopup(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const closeSuccessPopup = () => {
//     setShowSuccessPopup(false);
//     window.location.href = "/";
//   };

//   const closeErrorPopup = () => {
//     setShowErrorPopup(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
//       {showSuccessPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative">
//             <button
//               onClick={closeSuccessPopup}
//               className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <X className="w-5 h-5 text-gray-500" />
//             </button>

//             <div className="text-center space-y-4">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-2 shadow-lg">
//                 <CheckCircle className="w-12 h-12 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Login Successful!
//               </h2>
//               <p className="text-gray-600">
//                 Welcome back, {formData.email.split('@')[0]}! Redirecting you to the home page...
//               </p>

//               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mt-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
//                     <span className="text-white font-bold text-xl">
//                       {formData.email.charAt(0).toUpperCase()}
//                     </span>
//                   </div>
//                   <div className="text-left flex-1 min-w-0">
//                     <p className="text-sm font-semibold text-gray-900 truncate">
//                       {formData.email.split('@')[0]}
//                     </p>
//                     <p className="text-xs text-gray-600 truncate">{formData.email}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showErrorPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
//             <div className="text-center space-y-4">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-full mb-2 shadow-lg">
//                 <AlertCircle className="w-12 h-12 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Login Failed
//               </h2>
//               <p className="text-gray-600 text-sm">{errorMessage}</p>
//               <div className="flex gap-3 mt-6">
//                 <button
//                   onClick={closeErrorPopup}
//                   className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 px-4 rounded-lg font-medium transition-colors"
//                 >
//                   Try Again
//                 </button>
//                 <button
//                   onClick={() => (window.location.href = "/")}
//                   className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
//                 >
//                   Go Home
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="w-full max-w-lg">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-8 text-center relative">
//             <a
//               href="/"
//               className="absolute top-6 left-6 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors group"
//             >
//               <ArrowLeft className="w-5 h-5 text-white" />
//             </a>
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-3 backdrop-blur-sm">
//               <LogIn className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//             <p className="text-blue-100">Sign in to your account</p>
//           </div>

//           <div className="p-8 space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
//                     errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
//                   }`}
//                   placeholder="you@example.com"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
//                   <AlertCircle className="w-3 h-3" />
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-12 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
//                     errors.password ? "border-red-500 bg-red-50" : "border-gray-300"
//                   }`}
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
//                   <AlertCircle className="w-3 h-3" />
//                   {errors.password}
//                 </p>
//               )}
//             </div>



//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                   </svg>
//                   Signing In...
//                 </span>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </div>

//           <div className="px-8 pb-8 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="/signup"
//                 className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
//               >
//                 Sign Up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }