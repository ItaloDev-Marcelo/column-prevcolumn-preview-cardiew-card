import Button from "./Button";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Title from "./Title";

interface CardProps {
  imageUrl: string,
  title: string,
  text: string,
  btnText: string,
  StyleMode: string
}

export default function  Card({imageUrl,title,text,btnText, StyleMode}:CardProps) {

  return (
      <article className={StyleMode} >
          <div className="pt-5 px-10 mt-5">
              <Image ImageUrl={imageUrl} />
          <Title title={title} />
          <Paragraph Text={text} />
          <Button btnText={btnText} />
          </div>
      </article>
  )

}
