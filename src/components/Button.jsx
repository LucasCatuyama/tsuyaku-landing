const Button = ({ children, className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={`bg-[var(--button-blue)] text-white px-4 py-2 rounded hover:opacity-80 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
