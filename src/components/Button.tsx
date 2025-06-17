interface ButtonProps {
    btnText: string
}

const Button = ({btnText}:ButtonProps) => {
    return <button className="mt-14 md:mt-17 bg-Very-light-gray-b-h-b h-[42px] p-2 
    font-medium rounded-[25px] text-[15px] w-[100px] cursor-pointer hover:opacity-90">{btnText}</button>
}

export default Button