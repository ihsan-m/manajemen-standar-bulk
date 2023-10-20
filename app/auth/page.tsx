// Di file: /auth/page.tsx



import React from 'react'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
      return (
    <div>LoginPage
        <LoginForm />
    </div>
  )
}

export default LoginPage

// import React from 'react';

// export default function LoginPage() {
//     return (
//         <div className="flex justify-center items-center h-screen bg-blue-500">
//             {/* Logo dan Judul */}
//             <div className="text-center mb-6">
//                 <div className="mb-4 rounded-full bg-white p-6">
//                     <span className="text-blue-500 text-4xl font-bold">Sb</span>
//                 </div>
//                 <h1 className="text-white text-xl">MANAJEMEN STANDAR BULK</h1>
//             </div>

//             {/* Form Login */}
//             <div className="bg-white p-8 rounded-md shadow-md w-96">
//                 <h2 className="text-center mb-4">Selamat datang di Manajemen Standar Bulk!</h2>

//                 <form>
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm mb-2" htmlFor="email">Email PTI</label>
//                         <input type="email" className="border rounded w-full py-2 px-3 text-gray-700" id="email" />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm mb-2" htmlFor="password">Password</label>
//                         <input type="password" className="border rounded w-full py-2 px-3 text-gray-700" id="password" />
//                     </div>

//                     <div className="flex items-center justify-between mb-4">
//                         <label className="text-sm text-gray-600">
//                             <input type="checkbox" className="mr-2" />
//                             Ingat Saya
//                         </label>
//                         <a href="#" className="text-sm text-blue-500 hover:underline">Lupa Password?</a>
//                     </div>

//                     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// }