type btnDetails = {
    children?: JSX.Element | string;  // Made children optional since it's not always used
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset'; // Allow different button types
}

function Buttons({ children, className = '', onClick, type = 'button' }: btnDetails) {
    return (
        <button
            type={type}  // Dynamically set the button type
            className={`flex items-center justify-center font-bold p-2 ${className}`}
            onClick={onClick}>
                
            {children}            
        </button>
    )
}

export default Buttons;
