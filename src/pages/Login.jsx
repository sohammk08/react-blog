import React from 'react';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center bg-cover h-vh-50">
      <span className="text-5xl font-vround">Login</span>
      <form className="mt-5 flex flex-col">
        <label className="mt-10 mb-0">Email</label>
        <input type="text" className="p-0.5 bg-white border-none rounded-md" placeholder="Enter your email" required />
        <label className="mt-10 mb-0">Password</label>
        <input type="password" className="p-0.5 bg-white border-none rounded-md" placeholder="Enter your password" required />
        <button className="mt-5 cursor-pointer text-white p-2 text-center bg-lime-700 border-none rounded-md">Register</button>
      </form>
    </div>
  );
};

export default Login;