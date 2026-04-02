import { useState } from "react";
import { UIContext } from "../context/UIContext";

export const UIProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <UIContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </UIContext.Provider>
  );
};
