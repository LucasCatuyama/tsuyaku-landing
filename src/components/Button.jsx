const Button = ({ children, onClick }) => {
    return (
      <button
        className="bg-[var(--button-blue)] text-white px-4 py-2 rounded hover:opacity-80 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;

  