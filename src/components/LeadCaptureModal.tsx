
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Check } from 'lucide-react';

interface LeadCaptureModalProps {
  id: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Connect the modal to the button by its ID
  React.useEffect(() => {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      modalElement.addEventListener('click', openModal);
    }
    return () => {
      modalElement?.removeEventListener('click', openModal);
    };
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      // In a real app, you would send this data to your backend
      console.log('Lead captured:', { name, email });
    }, 1000);
  };

  return (
    <>
      {/* Hidden element for button targeting */}
      <div id={id} className="hidden"></div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold">Скачать чек-лист по дизайну</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {!submitted ? (
                  <>
                    <p className="text-gray-600 mb-4">
                      Получите бесплатный чек-лист по созданию эффективного дизайна для вашего бренда.
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Имя
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          required
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-brand-indigo flex items-center justify-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <>
                            <Download className="w-5 h-5 mr-2" />
                            Скачать чек-лист
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Спасибо!</h4>
                    <p className="text-gray-600 mb-4">
                      Чек-лист отправлен на вашу электронную почту.
                    </p>
                    <motion.a
                      href="/checklist-design.pdf"
                      download
                      className="inline-flex items-center justify-center bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-brand-indigo"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Скачать напрямую
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadCaptureModal;
