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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="modal-body ">
              <MaterialSymbolsCancelOutline
                className="btn-close-modal"
                onClick={handleSetIsOpen}
              />

              {children}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
