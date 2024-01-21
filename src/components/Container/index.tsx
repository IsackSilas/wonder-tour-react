import styles from './Container.module.css'

type props = {
 children: React.ReactNode
}

function Container({children}: props) {
  return (
    <div className={styles.container}>
     {children}
    </div>
  )
}

export default Container