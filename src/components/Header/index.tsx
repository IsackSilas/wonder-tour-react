import Container from "../Container"
import styles from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import Button from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <section>
          <div>
            <img src={logo} />
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} />
            <span>09:00AM — 05:00PM</span>
            <FontAwesomeIcon icon={faPhone} />
            <span>+1 323-913-4688</span>
            <Button text="Get a Free Quote" />
          </div>
        </section>
      </Container>
    </header>
  )
}

export default Header
