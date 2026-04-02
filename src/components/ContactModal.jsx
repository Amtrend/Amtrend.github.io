import ReactDOM from "react-dom";
import { useUI } from "../hooks/useUI";
import { useState } from "react";

const ContactModal = () => {
  const { isModalOpen, closeModal } = useUI();
  const [platform, setPlatform] = useState("telegram");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const encodedText = encodeURIComponent(message);
    let url = "";

    if (platform === "telegram") url = `https://t.me/promotrend?text=${encodedText}`;
    if (platform === "whatsapp") url = `https://wa.me/79229778282?text=${encodedText}`;
    if (platform === "email") url = `mailto:sale@amtrend.ru?subject=Contact from CV&body=${encodedText}`;

    window.open(url, "_blank");
    setMessage("");
    closeModal();
  };

  const platforms = [
    { id: 'telegram', label: 'Telegram' },
    { id: 'whatsapp', label: 'WhatsApp' },
    { id: 'email', label: 'E-mail' }
];

  // Portation
  return ReactDOM.createPortal(
    <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 transition-all duration-500
            ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeModal} // Close on click on background
    >

      <div 
        className="w-full max-w-md p-6 rounded-xl border shadow-2xl font-mono m-5"
        style={{ backgroundColor: 'var(--bg-term)', borderColor: 'var(--border)' }}
        onClick={(e) => e.stopPropagation()} // To prevent clicking inside a window from closing it
      >
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-1)' }}>
          Send Message
        </h2>

        <div className="flex flex-col gap-4">
            <div>
                <label className="block text-xs mb-2 opacity-70">
                    Select Method
                </label>
                <div className="flex border border-white/10 overflow-hidden rounded-md">
                    {platforms.map((p) => (
                    <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id)}
                        className={`flex-1 py-2 text-xs font-bold uppercase cursor-pointer
                        ${platform === p.id 
                            ? 'bg-[var(--accent-1)] text-black'
                            : 'bg-transparent text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {platform === p.id && <span className="mr-1">●</span>}
                        {p.label}
                    </button>
                    ))}
                </div>
            </div>

          <div>
            <label className="block text-xs mb-2 opacity-70">Message:</label>
            <textarea 
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full bg-black/20 border border-white/10 rounded p-2 outline-none text-white focus:border-blue-500 resize-none"
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button 
              onClick={closeModal}
              className="px-4 py-2 rounded text-sm hover:bg-white/5 cursor-pointer"
            >
              Cancel
            </button>
            <button 
              onClick={handleSend}
              disabled={!message.trim()}
              className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Execute
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // where are porting
  );
};

export default ContactModal;
