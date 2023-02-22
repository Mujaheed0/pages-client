import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export const Modal = ({ openModal, setOpenModal, children }) => {
  useEffect(() => {
    if (openModal) {
      document.body.classList.add("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [openModal]);
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <div
          className="fixed inset-0 z-50 "
          onClick={(e) => setOpenModal(false)}
        >
          <div className="fixed inset-0  bg-slate-500/50"></div>
          <div
            className=" fixed top-1/2 left-1/2  w-[30rem] -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("portal")
  );
};
