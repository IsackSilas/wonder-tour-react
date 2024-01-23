import { socialMedias } from '../SocialMedias'
import Container from '../Container'
import ItemMenu from '../ItemMenu'
import SocialMedias from '../SocialMedias'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <section>
          <div className={styles.menu}>
            <ul>
              <ItemMenu link="/" text="Home" />
              <ItemMenu link="/about" text="About" />
              <ItemMenu link="/typography" text="Typography" />
              <ItemMenu link="/contact-us" text="Contact Us" />
            </ul>
          </div>
          <div className={styles.social}>
            <ul>
              <SocialMedias social={socialMedias[0]} />
              <SocialMedias social={socialMedias[1]} />
              <SocialMedias social={socialMedias[2]} />
              <SocialMedias social={socialMedias[3]} />
            </ul>
          </div>
        </section>
      </Container>
    </nav>
  )
}

export default Navbar
