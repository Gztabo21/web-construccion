import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '../components/header.jsx'
import {Homepage} from '../components/home';
import { ServicePage } from '../components/service';
import { Flex, Spacer } from "@chakra-ui/react"
/* https://templatemo.com/tm-548-training-studio template */

export default function Home() {
  return (
    <Flex justifyItems="row" className={styles.container}>
     <Header />
     <Homepage className={styles.Homepage}/>
     <ServicePage/>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyrigth &copy;2021 Gustavo Cacharuco
        </a>
      </footer>
    </Flex>
  )
}
