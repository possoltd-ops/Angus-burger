
import React from 'react';

export type LegalType = 'privacy' | 'terms' | 'cookies' | 'allergy' | 'service' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "At Angus Burgers Wembley, we value your privacy.",
      "We collect data only to process your delicious orders and improve our Wembley Park service.",
      "We never sell your data to third parties.",
      "Your payment info is processed via secure, encrypted gateways."
    ]
  },
  terms: {
    title: "Food Ordering Terms",
    content: [
      "Delivery times are estimates. During stadium event days at Wembley, delivery may take longer.",
      "Minimum order for delivery is £15.",
      "Table service fee of £1.95 applies for dine-in.",
      "All our meat is 100% Halal certified."
    ]
  },
  cookies: {
    title: "Cookie Policy",
    content: [
      "We use functional cookies to remember your favorite burgers and analytical cookies to see how Wembley locals interact with our site.",
      "You can manage these at any time through your browser settings."
    ]
  },
  allergy: {
    title: "Allergy & Dietary Information",
    content: [
      "IMPORTANT: Please Inform Staff Before Ordering. If you have a food allergy, intolerance, or sensitivity, please speak to a member of our team before placing your order. Do not rely on menu descriptions alone, as ingredients may change.",
      "Cross-Contamination Disclaimer: Our kitchen is a busy environment that handles multiple allergens, including Nuts, Peanuts, Gluten (Wheat), Dairy (Milk), Sesame, Soya, Eggs, Mustard, Celery, Fish, and Shellfish.",
      "While we take extreme care to minimize the risk of cross-contamination, we use shared equipment and preparation areas. Therefore, we cannot guarantee that any dish is 100% allergen-free. If you have a severe allergy (anaphylaxis), please inform the manager so we can discuss whether it is safe for you to eat with us.",
      "Ingredient Notes: Our Halloumi cheese is made from pasteurized sheep and goat milk.",
      "Supplier Guarantee: We rely on information provided by our suppliers. While we vet them carefully, we cannot guarantee that their production lines are free from trace allergens."
    ]
  },
  service: {
    title: "Terms and Conditions of Service",
    content: [
      "Last Updated: March 2025",
      "Business Name: Angus Burgers Wembley",
      "",
      "1. Introduction",
      "By accessing our website/app and placing an order, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our online ordering system.",
      "",
      "2. Ordering",
      "Capacity: By placing an order, you confirm that you are at least 18 years old and legally capable of entering into binding contracts.",
      "Order Acceptance: Your order is an offer to buy from us. A contract is only formed when we send you a confirmation email or notification that your order has been accepted. We reserve the right to decline any order for any reason (e.g., weather conditions, kitchen capacity, or delivery location).",
      "Alcohol: If your order contains alcohol, you confirm you are of legal drinking age. We operate a Challenge 25 policy; valid ID may be required upon delivery or collection.",
      "",
      "3. Delivery and Collection",
      "Delivery Zones: We only deliver to the specific areas defined on our website.",
      "Timings: All delivery and collection times provided are estimates only. While we make every effort to deliver on time, factors such as traffic, weather, and kitchen volume may cause delays. We accept no liability for late deliveries.",
      "Customer Availability: You must be available to accept delivery at the nominated address. If you are not present, or if you provide incorrect address details, the driver will attempt to contact you. If they cannot reach you, the food may be returned to the store, and no refund will be issued.",
      "Contact-Free: If you request 'leave at door,' you accept full responsibility for the order once the driver leaves it at the specified location.",
      "",
      "4. Cancellations and Refunds",
      "Perishable Goods: As our products are freshly prepared and perishable, the standard 'cooling-off period' under consumer law does not apply.",
      "Customer Cancellations: Once an order has been accepted and the kitchen has begun preparation, you cannot cancel the order free of charge.",
      "Our Cancellations: If we must cancel your order (e.g., due to ingredient shortages), we will notify you immediately and issue a full refund.",
      "Quality Issues: If you are unsatisfied with the quality of your meal, you must contact our Wembley branch immediately on 020 8902 7272. We may ask for photographic evidence or for the food to be returned for inspection. Refunds or replacements are at the manager's discretion.",
      "",
      "5. Allergy and Dietary Information",
      "Customer Responsibility: It is your responsibility to inform us of any allergies or dietary requirements via the 'Notes' section of the order or by calling us directly before ordering.",
      "Cross-Contamination: As stated in our Allergy Notice, our kitchen handles Nuts, Gluten, Dairy, Sesame, and other allergens. We cannot guarantee a 100% allergen-free environment.",
      "Liability: We are not liable for adverse reactions if you fail to inform us of your allergy or if you order despite our cross-contamination warnings.",
      "",
      "6. Prices and Payment",
      "Pricing: Prices are inclusive of VAT where applicable. Prices are subject to change without notice, but changes will not affect orders already accepted.",
      "Payment Methods: We accept major credit/debit cards. Online payments are processed securely by our third-party payment provider. We do not store your full credit card details.",
      "",
      "7. Intellectual Property & Site Use",
      "Misuse: You must not misuse our site by attempting to hack, introduce viruses, or launch denial-of-service attacks.",
      "Fake Orders: Placing a fake order (an order you do not intend to pay for or receive) may result in your IP address being blocked and legal action taken to recover losses.",
      "",
      "8. Limitation of Liability",
      "To the extent permitted by law, Angus Burgers Wembley excludes all liability for any loss or damage (direct or indirect) arising from your use of our website or reliance on information contained within it. Our total liability to you in respect of any order is limited to the purchase price of that order.",
      "",
      "9. Privacy Policy",
      "We process your personal data in accordance with our Privacy Policy. By using our system, you consent to such processing and warrant that all data provided by you is accurate.",
      "",
      "10. Governing Law",
      "These terms are governed by the laws of England and Wales, and any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      "",
      "Contact Us",
      "If you have any questions regarding these Terms, please contact us at:",
      "Address: 115 Wembley Park Drive, Wembley, London, HA9 8HG",
      "Phone: 020 8902 7272"
    ]
  }
};

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const data = LEGAL_CONTENT[type as keyof typeof LEGAL_CONTENT];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fadeIn"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideInUp max-h-[80vh] flex flex-col">
        <div className="bg-orange-600 p-8 text-white flex justify-between items-center">
          <h2 className="text-3xl font-black uppercase tracking-tight oswald">{data.title}</h2>
          <button 
            onClick={onClose}
            className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-600 text-lg leading-relaxed italic mb-8">
              Last Updated: January 2026
            </p>
            <div className="space-y-6 text-neutral-800 font-medium">
              {data.content.map((paragraph, i) => (
                <p key={i} className={paragraph === "" ? "h-2" : ""}>{paragraph}</p>
              ))}
              <p>For further inquiries regarding {data.title}, please contact us directly at our Wembley branch or call 020 8902 7272.</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-12 w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-600 transition-colors shadow-xl"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
