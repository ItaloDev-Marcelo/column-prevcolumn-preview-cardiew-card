interface TitleProps {
   title: string
}

const Title = ({title}:TitleProps) => {
  return <h2 className='mb-7 text-normal text-[24px] font-bold text-Very-light-gray-b-h-b' >{title}</h2>
}

export default Title