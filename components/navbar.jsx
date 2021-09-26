import React from "react";
import { Box } from "@chakra-ui/react"
import styles from '../styles/navbar.module.css'
import { Link } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

export function Navbar () {
    return(
        <Box className={styles.box}>
          <Flex>
          <Text className={styles.title} ml={2}>Contrucciones <span>FC</span></Text>
          <Spacer />
          <Box className={styles.menu} >
            <Link href="#" >Home</Link>
            <Link href="#service" >Servicios</Link>
            <Link href="#" >Quienes Somos</Link>
          </Box>
        </Flex>
      </Box>        
    )
}