const Modal = ({ action, onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-full sm:w-96">
          <h2 className="text-lg font-semibold mb-4">
            Are you sure you want to {action === "submit" ? "submit" : "go back"}?
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={onConfirm}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Yes
            </button>
            <button
              onClick={onCancel}
              className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  