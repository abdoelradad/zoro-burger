"use client";
import React, { useState } from "react";

import Image from "next/image";
import Modal from "react-modal";
import BurgerDetails from "./BurgerDetails";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Burger = ({ burger }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-between p-5 shadow-md group">
      {/* image */}
      <div className="flex items-center justify-center h-[40%]">
        <Image
          onClick={openModal}
          className="mb-8 transition-all duration-300 bg-cover cursor-pointer lg:group-hover:translate-y-3"
          width={200}
          height={200}
          src={burger.image}
          alt=""
          priority={1}
        />
      </div>
      {/* info */}
      <div className="h-[40%]">
        {/* title */}
        <div onClick={openModal}>
          <div className="text-xl font-bold capitalize cursor-pointer ">
            {burger.name}
          </div>
        </div>
        {/* description */}
        <div className="text-sm text-gray-500 ">{burger.description}</div>
      </div>
      {/* price & btn */}
      <div className="flex items-center justify-between w-full">
        {/* price => hidden (sm) - visible (lg) */}
        <div className="hidden text-xl font-semibold lg:flex">
          starts at {burger.priceSm}
        </div>
        {/* btn -> hidden (sm) - visible (lg) */}
        <button
          onClick={openModal}
          className="hidden text-sm font-semibold text-white rounded-lg lg:flex gradient btn-sm"
        >
          Choose
        </button>
        {/* btn -> visible (sm) - hidden (lg) */}
        <button
          onClick={openModal}
          className="px-3 text-sm btn gradient btn-sm lg:hidden"
        >
          starts at {burger.priceSm}
        </button>
      </div>
      {/* Modal */}
      {modal && (
        <Modal
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Burger"
        >
          {/* close modal */}
          <div
            onClick={closeModal}
            className="absolute z-30 duration-200 cursor-pointer right-2 top-2 hover:scale-110"
          >
            <IoCloseOutline className="text-4xl text-primary" />
          </div>
          {/* pizza details */}
          <BurgerDetails burger={burger} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Burger;
