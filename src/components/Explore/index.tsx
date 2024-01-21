import Button from "../Button"
import Container from "../Container"
import styles from "./Explore.module.css"

function Explore() {
  return (
    <section className={styles.explore}>
      <Container>
        <div>
          <div>
            <h1>Enjoy the Best Destinations with Our Travel Agency</h1>
            <h2>
              Explore <strong>The World</strong>
            </h2>
            <Button text="Get in touch" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Explore
