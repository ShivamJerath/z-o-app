export default function RealStoriesSection() {
  return (
    <section className="bg-[#EAF4FB] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Real Stories. Real Change.
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
            <img
              src="/give1.png"
              alt="Ranger patrols"
              className="w-full h-[260px] object-cover rounded-xl"
            />

            <p className="mt-6 text-[16px] font-semibold text-gray-900 leading-snug">
              Funding ranger patrols in Maasai Mara to protect elephants and lions
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
            <img
              src="/give2.png"
              alt="Orangutan rehabilitation"
              className="w-full h-[260px] object-cover rounded-xl"
            />

            <p className="mt-6 text-[16px] font-semibold text-gray-900 leading-snug">
              Supported the rehabilitation of injured orangutans in Borneo
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
            <img
              src="/give3.png"
              alt="Rainforest preservation"
              className="w-full h-[260px] object-cover rounded-xl"
            />

            <p className="mt-6 text-[16px] font-semibold text-gray-900 leading-snug">
              Contributing to the preservation of 50,000 hectares of rainforest
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
