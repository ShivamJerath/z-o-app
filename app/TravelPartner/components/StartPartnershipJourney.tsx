"use client";

export default function StartPartnershipJourney() {
  return (
    <section className="relative bg-[#f4f4f4] py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[600px]">
            <img
              src="/fa1.png"   // replace with your image
              alt="Start Partnership"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================= RIGHT FORM CARD ================= */}
          <div className="relative lg:-ml-20 flex justify-center lg:justify-start">

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[640px] p-8 md:p-10 lg:p-12">

              <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-900">
                Start Your Partnership Journey.
              </h2>

              <p className="mt-2 text-[14px] text-gray-600">
                Fill in your details — our team will reach out within 48 hours.
              </p>

              <form className="mt-8 space-y-5">

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Full Name *" placeholder="Enter Full Name" />
                  <Input label="Company/Agency Name *" placeholder="Enter Company/Agency Name" />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Business Email *" placeholder="Enter Work Email" />
                  <Input label="Role *" placeholder="(Owner, Manager, Agent)" />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Website (if any)" placeholder="Enter Website URL" />
                  <Select
                    label="Type of Partnership *"
                    options={[
                      "API",
                      "White Label",
                      "Distributor",
                      "Other",
                    ]}
                  />
                </div>

                {/* Message */}
                <Textarea
                  label=""
                  placeholder="Enter your message..."
                />

                {/* Checkbox */}
                <label className="flex items-start gap-2 text-[13px] text-gray-600">
                  <input type="checkbox" className="mt-1 accent-[#0b7285]" />
                  I agree to be contacted by Zoiko Orbit regarding partner opportunities.
                </label>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#0b7285] hover:bg-[#0995B3] transition text-white py-3 rounded-lg text-[15px] font-semibold"
                >
                  Submit & Schedule Consultation
                </button>

              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= INPUT ================= */
function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[12px] text-gray-500 mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full bg-[#eeeeee] rounded-lg px-4 py-3 text-[14px] text-gray-800 outline-none border border-transparent focus:border-[#0b7285] focus:bg-white"
      />
    </div>
  );
}

/* ================= SELECT ================= */
function Select({
  label,
  options = [],
}: {
  label: string;
  options?: string[];
}) {
  return (
    <div>
      <label className="block text-[12px] text-gray-500 mb-1">{label}</label>
      <select className="w-full bg-[#eeeeee] rounded-lg px-4 py-3 text-[14px] text-gray-800 outline-none border border-transparent focus:border-[#0b7285] focus:bg-white">
        <option>Select Option</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

/* ================= TEXTAREA ================= */
function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      {label && (
        <label className="block text-[12px] text-gray-500 mb-1">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        className="w-full h-[130px] resize-none bg-[#eeeeee] rounded-lg px-4 py-3 text-[14px] text-gray-800 outline-none border border-transparent focus:border-[#0b7285] focus:bg-white"
      />
    </div>
  );
}
