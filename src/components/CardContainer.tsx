import {type CardDataFormate, CardData} from "../data/cardData";
import Card from "./Card";

export default function  CardContainer() {

  return (  
    <main className="flex flex-col lg:flex-row justify-center font-Lexend bg-Very-light-gray-b-h-b ">
         {
         CardData.map(({id,title,btnText,icon,paragraph,
      StyleMode}:CardDataFormate) => (
             <Card key={id} title={title} btnText={btnText} imageUrl={icon}
              text={paragraph} StyleMode={StyleMode}  />
         ))
      }
    </main>
  )
}
