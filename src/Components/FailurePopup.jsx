
const FailurePopup = ({ message }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-green-500 text-white px-4 py-2 rounded">
          {message}
        </div>
      </div>
    );
  };
  
  export default FailurePopup;
  