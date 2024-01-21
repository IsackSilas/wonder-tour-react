import { Link } from "react-router-dom"

type props = {
  text: string
  link: string
}

function ItemMenu({ text, link }: props) {
  return (
   <li>
    <Link to={link}>{text}</Link>
   </li>
  )
}

export default ItemMenu
