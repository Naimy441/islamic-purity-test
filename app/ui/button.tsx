import clsx from 'clsx';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center rounded-lg border border-black px-4 py-2 text-xl font-medium text-black transition-colors hover:bg-blue-400',
        className,
      )}
    >
      {children}
    </button>
  );
}
