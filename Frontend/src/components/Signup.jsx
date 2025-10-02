
// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, User, Briefcase, GraduationCap, Calendar, CheckCircle, AlertCircle, X } from 'lucide-react';

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     year: '',
//     program: '',
//     jobRole: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   const programs = ['B.Tech', 'M.Tech', 'PhD', 'MS'];
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!formData.year) {
//       newErrors.year = 'Year is required';
//     }

//     if (!formData.program) {
//       newErrors.program = 'Program is required';
//     }

//     if (!formData.jobRole.trim()) {
//       newErrors.jobRole = 'Job role is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
//     setSubmitStatus(null);

//     setTimeout(() => {
//       setShowSuccessPopup(true);
//       setIsLoading(false);

//       const userData = {
//         name: formData.name,
//         email: formData.email,
//         year: formData.year,
//         program: formData.program,
//         jobRole: formData.jobRole
//       };

//       setTimeout(() => {
//         console.log('Redirecting to home page with user data:', userData);
//         alert('Success! Redirecting to home page (Demo mode)');
//         setShowSuccessPopup(false);

//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           year: '',
//           program: '',
//           jobRole: ''
//         });
//       }, 2000);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       {showSuccessPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 transform transition-all duration-300 scale-100 opacity-100 relative">
//             <button
//               onClick={() => {
//                 console.log('Manual redirect to home');
//                 window.location.href = '/';
//               }}
//               className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
//               title="Go to Home"
//             >
//               <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
//             </button>

//             <div className="text-center space-y-4">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-2 shadow-lg">
//                 <CheckCircle className="w-12 h-12 text-white animate-pulse" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">Account Created!</h2>
//               <p className="text-gray-600">Welcome aboard! Redirecting you to home page...</p>
//               <div className="flex items-center justify-center gap-3 mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
//                   <span className="text-white font-bold text-xl">
//                     {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
//                   </span>
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm text-gray-700 font-semibold">{formData.name || 'User'}</p>
//                   <p className="text-xs text-gray-500">{formData.email}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-2">
//               <GraduationCap className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
//             <p className="text-gray-600">Join us and start your journey</p>
//           </div>

//           {submitStatus && (
//             <div className={`flex items-center gap-3 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
//               {submitStatus.type === 'success' ? (
//                 <CheckCircle className="w-5 h-5" />
//               ) : (
//                 <AlertCircle className="w-5 h-5" />
//               )}
//               <p className="text-sm font-medium">{submitStatus.message}</p>
//             </div>
//           )}

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="John Doe"
//                 />
//               </div>
//               {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="you@example.com"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <select
//                     name="year"
//                     value={formData.year}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white ${errors.year ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select</option>
//                     {years.map(year => (
//                       <option key={year} value={year}>{year}</option>
//                     ))}
//                   </select>
//                 </div>
//                 {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
//                 <div className="relative">
//                   <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <select
//                     name="program"
//                     value={formData.program}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white ${errors.program ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select</option>
//                     {programs.map(program => (
//                       <option key={program} value={program}>{program}</option>
//                     ))}
//                   </select>
//                 </div>
//                 {errors.program && <p className="mt-1 text-sm text-red-600">{errors.program}</p>}
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Job Role</label>
//               <div className="relative">
//                 <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="jobRole"
//                   value={formData.jobRole}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.jobRole ? 'border-red-500' : 'border-gray-300'}`}
//                   placeholder="Software Engineer"
//                 />
//               </div>
//               {errors.jobRole && <p className="mt-1 text-sm text-red-600">{errors.jobRole}</p>}
//             </div>

//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Creating Account...' : 'Sign Up'}
//             </button>
//           </div>

//           <div className="text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Briefcase, GraduationCap, Calendar, CheckCircle, AlertCircle, X } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    year: '',
    program: '',
    jobRole: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const programs = ['B.Tech', 'M.Tech', 'PhD', 'MS'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.year) {
      newErrors.year = 'Year is required';
    }

    if (!formData.program) {
      newErrors.program = 'Program is required';
    }

    if (!formData.jobRole.trim()) {
      newErrors.jobRole = 'Job role is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          year: parseInt(formData.year),
          program: formData.program,
          jobRole: formData.jobRole
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Show success popup
        setShowSuccessPopup(true);

        // Store user data in memory
        const userData = {
          name: formData.name,
          email: formData.email,
          year: formData.year,
          program: formData.program,
          jobRole: formData.jobRole
        };

        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          year: '',
          program: '',
          jobRole: ''
        });

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          window.location.href = '/';
          console.log('Redirecting to home page');
        }, 2000);

      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Signup failed. Please try again.'
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check if the server is running on localhost:5000'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 transform transition-all duration-300 scale-100 opacity-100 relative">
            {/* X Button - Top Right Corner */}
            <button
              onClick={() => {
                console.log('Manual redirect to home');
                window.location.href = '/';
              }}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Go to Home"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </button>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-2 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Account Created!</h2>
              <p className="text-gray-600">Welcome aboard! Redirecting you to home page...</p>
              <div className="flex items-center justify-center gap-3 mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">
                    {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-700 font-semibold">{formData.name || 'User'}</p>
                  <p className="text-xs text-gray-500">{formData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-2">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600">Join us and start your journey</p>
          </div>

          {submitStatus && (
            <div className={`flex items-center gap-3 p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {submitStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white ${
                      errors.year ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white ${
                      errors.program ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select</option>
                    {programs.map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
                {errors.program && <p className="mt-1 text-sm text-red-600">{errors.program}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Role
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.jobRole ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Software Engineer"
                />
              </div>
              {errors.jobRole && <p className="mt-1 text-sm text-red-600">{errors.jobRole}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}