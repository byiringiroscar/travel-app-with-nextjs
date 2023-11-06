import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button
     type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    >
        {icon && <Image alt="icon" src={icon} height={24} width={24} />}
        <label>{title}</label>
    </button>
  )
}

export default Button