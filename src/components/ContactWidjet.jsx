import { useState } from 'react';
import { FaTelegramPlane, FaWhatsapp, FaEnvelope, FaPhone, FaTerminal, FaTimes, FaEdit } from 'react-icons/fa';
import { useUI } from '../hooks/useUI';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useUI();

  const btnBase = "absolute right-0 flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl";
  const subBtnStyle = `${btnBase} w-12 h-12 bg-[#1a1a1a] border border-white/10 text-white/50 hover:text-[var(--accent-1)] hover:border-[var(--accent-1)]`;
  
  // visibility condition for modals
  const getVisibleClass = (offset) => isOpen 
    ? `${offset} opacity-100 scale-100` 
    : "translate-y-0 opacity-0 scale-50 pointer-events-none";

  const contacts = [
    { id: 'tg', icon: <FaTelegramPlane size={20} />, link: 'https://t.me/promotrend', offset: '-translate-y-16' },
    { id: 'wa', icon: <FaWhatsapp size={20} />, link: 'https://wa.me/79229778282', offset: '-translate-y-32' },
    { id: 'mail', icon: <FaEnvelope size={20} />, link: 'mailto:sale@amtrend.ru', offset: '-translate-y-48' },
    { id: 'call', icon: <FaPhone size={18} />, link: 'tel:+79229778282', offset: '-translate-y-64' },
  ];

  return (
    <div className="fixed bottom-8 left-0 w-full pointer-events-none z-50">
      <div className="max-w-6xl mx-auto px-8 relative h-full">
        <div className="absolute right-8 bottom-0 flex flex-col items-center pointer-events-auto">
          
          {contacts.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noreferrer"
               className={`${subBtnStyle} ${getVisibleClass(item.offset)}`}>
              {item.icon}
            </a>
          ))}

          <button onClick={() => { openModal(); setIsOpen(false); }}
            className={`${btnBase} w-12 h-12 bg-[var(--accent-1)] text-black font-bold cursor-pointer ${getVisibleClass('-translate-y-80')}`}>
            <FaEdit size={20} />
          </button>

          <button onClick={() => setIsOpen(!isOpen)}
            className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 z-10 cursor-pointer
              ${isOpen ? 'bg-gray-800 text-white rotate-90' : 'bg-[var(--accent-1)] text-black'}`}>
            
            {!isOpen && <span className="absolute inset-0 rounded-full bg-[var(--accent-1)] animate-ping opacity-40"></span>}
            {isOpen ? <FaTimes size={24} /> : <FaTerminal size={24} />}
          </button>

        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
