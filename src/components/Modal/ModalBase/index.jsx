import { MaterialSymbolsCancelOutline } from "../../icons/close";
import "./style.css";

export default function Modal({ children, isOpen, setIsOpen }) {
  function handleSetIsOpen() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && (
        <div className="modal-bg">
          <div className="modal-body ">
            <MaterialSymbolsCancelOutline
              className="btn-close-modal"
              onClick={handleSetIsOpen}
            />

            {children}
          </div>
        </div>
      )}
    </>
  );
}
