import React from 'react';
import { Box, Text, Heading  } from '@chakra-ui/react';
import Style from '../styles/about.module.css';
import Image from 'next/image'

export function AboutUs(){
    return(
        <Box p={10} display="flex" flexdir="column" >
            <Box display="flex" flexDir="column" alignItems="center" justify="center"  color="#fff" justifyContent="center" >
            <Heading m={4}>Quienes Somos</Heading>
            <Text w={600} textAlign={[ 'left', 'justify' ]} >
                Somos una empresa dedicada a las contruccion y remodelacion de hogar, ofreciendo un servicio de calidad, con la mejor mano de obra logrando una mayor sastifacion de nuestros clientes.  
            </Text>
            </Box>
            <Box className={Style.imagenes} p={2}>
                <Box> 
                    <Image className={Style.picture} src="/imagenes/taladro.jpg" width="300px" padding="2rem" height="300px" alt="contrucciones FC - taladro" />
                    <Image className={Style.picture} src="/imagenes/pintar.jpg" width="300px" height="300px" alt="contrucciones FC - pintar" /></Box>
                <Box>
                <Image className={Style.picture} src="/imagenes/empastar.jpg" width="300px" height="300px" alt="contrucciones FC - empastar" />
            <Image  className={Style.picture} src="/imagenes/ator.jpg" width="300px" height="300px" alt="contrucciones FC - atornillar" />
                </Box>
           
            
            </Box>
        </Box>
    )
}