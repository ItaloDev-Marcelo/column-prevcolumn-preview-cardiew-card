interface ImageProps {
   ImageUrl: string
}

const Image = ({ImageUrl}:ImageProps) => {
  return <img src={ImageUrl} alt="car icon" className='mb-7'  />
}

export default Image