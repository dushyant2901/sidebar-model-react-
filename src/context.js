import React, { useState, useContext } from "react";
import { createContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <AppContext.Provider value={{isModalOpen,openModal,closeModal,isSidebarOpen,openSideBar,closeSideBar}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
