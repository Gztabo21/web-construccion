import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '../components/header.jsx'
import {Homepage} from '../components/home';
/* https://templatemo.com/tm-548-training-studio template */

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
     <Homepage/>
     <section name="service">
        <span>Consequat nostrud cillum duis Lorem ad minim dolor. Elit dolore velit esse excepteur aliqua dolore incididunt do consequat est minim sint. Cillum do enim proident quis. Exercitation incididunt magna culpa nisi consequat magna occaecat eiusmod. Anim et irure exercitation consequat eu nostrud qui in. Fugiat irure consectetur incididunt non ad. Exercitation reprehenderit cupidatat laboris Lorem enim amet magna enim sunt irure do ex.</span>
        <span>Consequat nostrud cillum duis Lorem ad minim dolor. Elit dolore velit esse excepteur aliqua dolore incididunt do consequat est minim sint. Cillum do enim proident quis. Exercitation incididunt magna culpa nisi consequat magna occaecat eiusmod. Anim et irure exercitation consequat eu nostrud qui in. Fugiat irure consectetur incididunt non ad. Exercitation reprehenderit cupidatat laboris Lorem enim amet magna enim sunt irure do ex.</span>
        <span>Consequat nostrud cillum duis Lorem ad minim dolor. Elit dolore velit esse excepteur aliqua dolore incididunt do consequat est minim sint. Cillum do enim proident quis. Exercitation incididunt magna culpa nisi consequat magna occaecat eiusmod. Anim et irure exercitation consequat eu nostrud qui in. Fugiat irure consectetur incididunt non ad. Exercitation reprehenderit cupidatat laboris Lorem enim amet magna enim sunt irure do ex.</span>
     </section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
