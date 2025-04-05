import { useRef } from "react";


interface ModalProps {
  headerLabel: string,
  onCloseRequested: () => void,
  children: React.ReactNode
};

function Modal({ headerLabel, onCloseRequested, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  function handleOverlayClick(event: React.FormEvent<HTMLDivElement>) {
    // Close modal if the click is outside the dialog content
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onCloseRequested();
    }
  }

  return (
    <div
      className="fixed inset-0 bg-gray-300 bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white rounded-lg shadow-lg p-6 w-96 max-w-full"
      >
        {/* Header with label and close button */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 id="modal-title" className="text-lg font-bold">
            {headerLabel}
          </h2>
          <button
            aria-label="Close"
            onClick={onCloseRequested}
            className="text-xl font-bold hover:text-red-600"
          >
            ×
          </button>
        </div>

        {/* Modal content */}
        {children}
      </div>
    </div>
  );
}

export default Modal;

