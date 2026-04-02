import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const btnStyles = `
    absolute left-8 bottom-0 pointer-events-auto
    w-12 h-12 flex items-center justify-center rounded-full
    bg-white/5 border border-white/10 text-white/30
    hover:text-[var(--accent-1)] hover:border-[var(--accent-1)]
    transition-all duration-500 cursor-pointer
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
  `;

  return (
    <div className="fixed bottom-8 left-0 w-full pointer-events-none z-50">
      <div className="max-w-6xl mx-auto px-8 relative h-full">
        
        <button onClick={scrollToTop} className={btnStyles}>
          <FaChevronUp size={18} className="animate-bounce" />
        </button>

      </div>
    </div>
  );
};

export default ScrollToTop;
