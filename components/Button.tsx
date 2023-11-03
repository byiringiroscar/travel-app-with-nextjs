import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
     type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
        {icon && <Image alt="icon" src={icon} height={24} width={24} />}
        <label>{title}</label>
    </button>
  )
}

export default Button