const Button = ({ children, className = '', type = 'button', ...props }) => {
    return (
      <button
      type={type}
      className={`cursor-pointer select-none px-4 py-2 rounded-lg font-semibold text-white
      bg-[linear-gradient(135deg,var(--accent),var(--accent-2))]
      hover:brightness-110 active:brightness-95
      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]
      transition ${className}`}
      {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  