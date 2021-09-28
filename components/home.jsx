import React from'react';
import {Navbar} from'./navbar';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Button ,Box } from "@chakra-ui/react"

export function Homepage(){
    return(
        <>
        <Navbar/>
        
        <main className={styles.main}>
        <video  muted loop autoPlay>
            <source src="/video/home.mp4" type="video/mp4" />
        </video>
        <div className={styles.text}>
            <p className={styles.description}>
            Mano de Obra Calificada{' '}
            </p>
            <h1 className={styles.title}>
            Contrucciones <span>FC</span>
            </h1>
        </div>
        <Box>
            <Image alt="whatsapp-ico" src="/whatsapp_icon.svg" width="50xp" height="100xp"/>
        </Box>
        
       <Button className={styles.button} bg="#f54" color="#fff"> Contactanos </Button>
      </main>

        </>
    )
}