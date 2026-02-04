import React from 'react';
import { X } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const BuyNowModal: React.FC<BuyNowModalProps> = ({ isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl relative overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-12 text-center overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Buy Now</h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Easy payments. Transparent pricing. CleanSpark service you can rely on.
            <br />
            Contact us now to make your purchase of the <span className="text-emerald-600">{productName}</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Receive a Call Button */}
            <button className="flex flex-col items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors group h-full">
              <div className="mb-2 p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                <FaPhoneAlt className="w-6 h-6" />
              </div>
              <span className="font-semibold">Receive a call from CleanSpark</span>
            </button>

            {/* Facebook Button */}
            <button className="flex flex-col items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors group h-full">
              <div className="mb-2 p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                <FaFacebook className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Chat to us on Facebook</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">↗</span>
              </div>
            </button>

            {/* WhatsApp Button */}
            <button className="flex flex-col items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors group h-full">
              <div className="mb-2 p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Chat to us on WhatsApp</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">↗</span>
              </div>
            </button>
          </div>

          <p className="text-gray-500">
            Or call us on <a href="tel:+2348007865464" className="text-emerald-600 hover:underline font-semibold">+234 800 786 5464</a> to complete your purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
