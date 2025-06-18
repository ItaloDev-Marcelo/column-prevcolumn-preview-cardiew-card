interface ParagraphProps {
   Text: string
}

const Paragraph = ({Text}:ParagraphProps) => {
   return <p className='text-[15px] font-medium text-white-p '> {Text} </p>
}

export default Paragraph