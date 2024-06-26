import { MaterialSymbolsCancelOutline } from "../../icons/close";
import "./style.css";
import { motion } from "framer-motion";

export default function Modal({ children, isOpen, setIsOpen }) {
  function handleSetIsOpen() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && (
        <div className="modal-bg">
          <motion.div
            className="modal-body"
            initial={{ opacity: 0, translateX: "20vw" }}
            animate={{ opacity: 1, translateX: "0vw" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <MaterialSymbolsCancelOutline
              className="btn-close-modal"
              onClick={handleSetIsOpen}
            />

            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
