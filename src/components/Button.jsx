const Button = ({ children, onClick }) => {
    return (
      <button
        className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  