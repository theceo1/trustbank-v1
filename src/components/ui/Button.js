// src/components/ui/Button.js

export default function Button({ children, onClick, variant, size = 'md' }) {
  const baseStyles = 'rounded px-4 py-2 font-medium focus:outline-none';
  const variantStyles = variant === 'outline' ? 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white' : 'bg-teal-500 text-white hover:bg-teal-600';
  const sizeStyles = size === 'sm' ? 'text-sm' : size === 'icon' ? 'p-2' : 'text-md';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${sizeStyles}`}>
      {children}
    </button>
  );
}
