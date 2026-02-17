export default function AuthPanel() {
  return (
    <section className="min-h-screen bg-[#F3F5F6] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative bg-[#ffffff] flex flex-col justify-between ">

          {/* Image bottom */}
          <div className="flex justify-center">
            <img
              src="/pic4.png"
              alt="Travel connectivity"
              className="w-[280px] sm:w-[340px] lg:w-[380px] object-contain"
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="p-8 sm:p-12 lg:p-16">

          {/* Tabs */}
          <div className="flex gap-10 border-b border-gray-200 text-[16px] font-medium">
            <button className="pb-3 border-b-2 border-[#0C7687] text-[#0C7687]">
              Login
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-800">
              Register
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-800">
              Reset Password
            </button>
          </div>

          {/* Heading */}
          <h3 className="mt-8 text-[32px] font-semibold text-gray-900">
            Welcome back!
          </h3>

          <p className="mt-2 text-[15px] text-gray-600">
            Enter your credentials to access your account.
          </p>

          {/* Form */}
          <form className="mt-8 space-y-6">

            {/* Username */}
            <div>
              <label className="block text-[14px] font-medium text-gray-800 mb-2">
                Username or Email Address
              </label>
              <input
                type="text"
                className="w-full h-[48px] text-gray-600 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C7687]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[14px] font-medium text-gray-800 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full h-[48px] text-gray-600 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C7687]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                  👁
                </span>
              </div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full h-[48px] text-gray-600 border border-gray-300 rounded-lg flex items-center justify-center gap-3 font-medium hover:bg-gray-50 transition"
            >
              <span className="text-red-500 text-[18px] font-bold">G</span>
              Login with Google
            </button>

            {/* Remember */}
            <div className="flex items-center gap-2 text-[14px] text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember for 30 days</span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-[#2F6F67] text-white rounded-lg font-semibold text-[16px] hover:bg-[#265e57] transition"
            >
              Log In
            </button>

            {/* Footer Links */}
            <div className="text-center text-[14px] text-gray-600">
              <a href="#" className="text-[#0C7687] hover:underline">
                Forgot Password?
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="text-[#0C7687] hover:underline">
                Create Account
              </a>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
