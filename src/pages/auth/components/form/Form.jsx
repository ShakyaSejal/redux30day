import React, { useState } from 'react'
import { Link } from 'react-router-dom';

    const Form = ({ type, onSubmit }) => {
        const [data, setData] = useState({
          email: "",
          username: "",
          password: "",
        
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setData({
            ...data,
            [name]: value,
          });
        };
        const handleSubmit = (e) => {
          e.preventDefault();
          onSubmit(data);
        };
  return (
 <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {type === "Login"
              ? "Login here to continue..."
              : "Register here to continue..."}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email" // <-- Change `for` to `htmlFor`
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email" // <-- Change `autocomplete` to `autoComplete`
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange} 
                />
              </div>
            </div>
            {type === "Register" && (
              <div>
                <label
                  htmlFor="username" // <-- Change `for` to `htmlFor`
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text" // <-- Change `type="username"` to `type="text"`
                    autoComplete="username" // <-- Change `autocomplete` to `autoComplete`
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange} // <-- Correct
                  />
                </div>
              </div>
            )}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password" // <-- Change `for` to `htmlFor`
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password" // <-- Change `autocomplete` to `autoComplete`
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange} // <-- Correct
                />
              </div>
            </div>
            {type === "Register" && (
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="ConfirmPassword" // <-- Change `for` to `htmlFor`
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    type="password" // <-- Change `type="ConfirmPassword"` to `type="password"`
                    autoComplete="current-password" // <-- Change `autocomplete` to `autoComplete`
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange} // <-- Correct
                  />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {type === "Login" ? "Sign in" : "Register"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {type === "Login" ? "Don't have an account?" : "Already a member?"}
            <Link
              to={type === "Login" ? "/register" : "/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {type === "Login" ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
 </>
  )
}

export default Form