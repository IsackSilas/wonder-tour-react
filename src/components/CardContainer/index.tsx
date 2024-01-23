import Card from '../Card/index '
import styles from './CardContainer.module.css'
import ballon from '../../assets/images/ballon-flights-image.jpg'
import mountain from '../../assets/images/mountain-holiday-image.jpg'
import beach from '../../assets/images/beach-holidays-image.jpg'
import Container from '../Container'

function CardContainer() {
  return (
    <section className={styles.cardcontainer}>
      <Container>
        <div className={styles.teste}>
          <div className={styles.cards}>
            <Card img={ballon} text="Balloon Flights" />
          </div>
          <div className={styles.cards}>
            <Card img={mountain} text="Mountain Holiday" />
          </div>
          <div className={styles.cards}>
            <Card img={beach} text="Beach Holidays" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CardContainer
