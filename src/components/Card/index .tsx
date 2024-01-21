type props = {
  img: string
  text: string
}

function Card({ img, text }: props) {
  return (
   <div>
    <img src={`${img}`} />
    <span>{text}</span>
   </div>
  )
}

export default Card
