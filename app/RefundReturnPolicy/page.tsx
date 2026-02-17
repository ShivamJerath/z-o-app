export default function RefundReturnPolicy() {
  return (
    <section className="bg-[#F5F7F9] py-20">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-gray-800">

        {/* Title */}
        <h1 className="text-[22px] font-semibold mb-12">
          Refund and Return Policy
        </h1>

        {/* Overview */}
        <h2 className="text-[16px] font-semibold mb-4">Overview</h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
          <p>
            Our refund and returns policy lasts 30 days. If 30 days have passed
            since your purchase, we can’t offer you a full refund or exchange.
          </p>

          <p>
            To be eligible for a return, your item must be unused and in the same
            condition that you received it. It must also be in the original
            packaging.
          </p>

          <p>
            Several types of goods are exempt from being returned. Perishable
            goods such as food, flowers, newspapers or magazines cannot be
            returned. We also do not accept products that are intimate or
            sanitary goods, hazardous materials, or flammable liquids or gases.
          </p>

          <div>
            <p className="font-medium mb-2">Additional non-returnable items:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Some health and personal care items</li>
            </ul>
          </div>

          <p>
            To complete your return, we require a receipt or proof of purchase.
          </p>

          <p>Please do not send your purchase back to the manufacturer.</p>

          <div>
            <p className="font-medium mb-2">
              There are certain situations where only partial refunds are granted:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Book with obvious signs of use</li>
              <li>
                CD, DVD, VHS tape, software, video game, cassette tape, or vinyl
                record that has been opened
              </li>
              <li>
                Any item not in its original condition, is damaged or missing
                parts for reasons not due to our error
              </li>
              <li>Any item that is returned more than 30 days after delivery</li>
            </ul>
          </div>
        </div>

        {/* Refunds */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">Refunds</h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
          <p>
            Once your return is received and inspected, we will send you an email
            to notify you that we have received your returned item. We will also
            notify you of the approval or rejection of your refund.
          </p>

          <p>
            If you are approved, then your refund will be processed, and a credit
            will automatically be applied to your credit card or original method
            of payment, within a certain amount of days.
          </p>
        </div>

        {/* Late or missing refunds */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">
          Late or missing refunds
        </h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
          <p>
            If you haven’t received a refund yet, first check your bank account
            again.
          </p>
          <p>
            Then contact your credit card company, it may take some time before
            your refund is officially posted.
          </p>
          <p>
            Next contact your bank. There is often some processing time before a
            refund is posted.
          </p>
          <p>
            If you’ve done all of this and you still have not received your
            refund yet, please contact us at <span className="underline">[email address]</span>.
          </p>
        </div>

        {/* Sale items */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">Sale items</h2>
        <p className="text-[14px] leading-relaxed text-gray-700">
          Only regular priced items may be refunded. Sale items cannot be refunded.
        </p>

        {/* Exchanges */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">Exchanges</h2>
        <p className="text-[14px] leading-relaxed text-gray-700">
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at{" "}
          <span className="underline">[email address]</span> and send your item to:{" "}
          <span className="underline">[physical address]</span>.
        </p>

        {/* Gifts */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">Gifts</h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
          <p>
            If the item was marked as a gift when purchased and shipped directly
            to you, you’ll receive a gift credit for the value of your return.
            Once the returned item is received, a gift certificate will be mailed
            to you.
          </p>
          <p>
            If the item wasn’t marked as a gift when purchased, or the gift giver
            had the order shipped to themselves to give to you later, we will send
            a refund to the gift giver and they will find out about your return.
          </p>
        </div>

        {/* Shipping returns */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">Shipping returns</h2>
        <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
          <p>
            To return your product, you should mail your product to:{" "}
            <span className="underline">[physical address]</span>.
          </p>
          <p>
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you receive
            a refund, the cost of return shipping will be deducted from your refund.
          </p>
          <p>
            Depending on where you live, the time it may take for your exchanged
            product to reach you may vary.
          </p>
          <p>
            If you are returning more expensive items, you may consider using a
            trackable shipping service or purchasing shipping insurance. We don’t
            guarantee that we will receive your returned item.
          </p>
        </div>

        {/* Need help */}
        <h2 className="text-[16px] font-semibold mt-12 mb-4">Need help?</h2>
        <p className="text-[14px] leading-relaxed text-gray-700">
          Contact us at <span className="underline">[email address]</span> for questions related to refunds and returns.
        </p>

      </div>
    </section>
  );
}
