export default function InvestorBottom() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">
        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <img
            src="/investor-b.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-35
              top-80 -translate-y-26
              bg-[#0a7a8f]/60
              backdrop-blur-sm
              text-white
              p-8 md:p-10
              rounded-2xl
              max-w-[480px]
              shadow-xl
            "
          >
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/90">
              We invite stakeholders and potential investors to connect with our Investor Relations team for access to quarterly reports, corporate filings, shareholder updates, and investor briefings.
              <br/><br/>For investment-related queries, please contact: ir@zoikoorbit.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
