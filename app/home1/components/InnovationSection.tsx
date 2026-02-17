export default function InnovationSection() {
  return (
    <section className="bg-[#F5F7F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900">
            Empowering Global Connectivity Through Innovation
          </h2>
          <p className="mt-3 text-[18px] text-[#4A6FA5] max-w-[760px] mx-auto">
            Pioneering seamless eSIM solutions that connect people, businesses,
            and journeys—anytime, anywhere.
          </p>
        </div>

        {/* Image + Quote Card */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Image */}
          <div className="relative">
            <img
              src="/em1.png"
              alt="eSIM innovation"
              className="w-[680px] h-[380px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Floating Quote Card */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-white rounded-xl shadow-xl p-8 max-w-[460px]">
            <p className="text-[16px] text-gray-700 leading-relaxed">
              “At Zoiko Orbit™, we empower people and businesses with seamless,
              secure global connectivity. Our mission is to deliver smart,
              scalable eSIM solutions that enhance every journey and help
              partners thrive in a connected world.”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="James Carter"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">James Carter</p>
                <p className="text-[13px] text-gray-500">
                  Chief Technology Officer, Zoiko Orbit™
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Gained */}
        <div className="mt-20">
          <h3 className="text-[20px] font-semibold text-gray-800 mb-8">
            Value Gained
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Stat 1 */}
            <div className="border-l-4 border-[#0C7687] pl-6">
              <h4 className="text-[32px] font-bold text-[#0C7687]">98%</h4>
              <p className="text-[15px] text-gray-700 mt-2">
                <span className="font-semibold">Customer satisfaction</span>{" "}
                achieved through seamless global connectivity and reliable eSIM
                solutions.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-l-4 border-[#0C7687] pl-6">
              <h4 className="text-[32px] font-bold text-[#0C7687]">500K+</h4>
              <p className="text-[15px] text-gray-700 mt-2">
                <span className="font-semibold">Travelers and partners</span>{" "}
                empowered with instant, secure mobile access across continents.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="border-l-4 border-[#0C7687] pl-6">
              <h4 className="text-[32px] font-bold text-[#0C7687]">50+</h4>
              <p className="text-[15px] text-gray-700 mt-2">
                <span className="font-semibold">Global partnerships</span>{" "}
                built across airlines, travel brands, retailers, and enterprises.
              </p>
            </div>
          </div>

          {/* Discover Button */}
          <div className="flex justify-end mt-8">
            <a href="/about"><button className="text-[#0C7687] text-[14px] font-medium hover:underline">
              Discover Our Story →
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
