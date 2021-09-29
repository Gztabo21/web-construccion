import React from 'react';
import Image from 'next/image'
import styles from '../styles/service.module.css';
import { LinkBox, LinkOverlay,Box,Text } from "@chakra-ui/react"
import { Heading, Center } from "@chakra-ui/react"

export function ServicePage (){
    return(
        <Box bg="#fff">
            <Center>
                <Heading as="h2" size="md" m={10} isTruncated>
                    SERVICIOS
                </Heading>
           </Center>
            <Box display="flex" alignItems="center" p={5} >
                <Box display="flex" alignItems="center" p={5}className={styles.card__Service}>
                    <Box display="flex" boxShadow="xl"  alignItems="center" w="390px" h="90px" align="center" justify="center" bg="tomato" borderRadius={6}>
                                <Image src="/tools.svg"  className={styles.imagen} m={2} alt="tools Logo" width={72} height={40} />
                    </Box>
                    <Box>
                            <Heading textAlign={[ 'left', 'center' ]} as="h2" p={2} size="sm" isTruncated>
                                    Construcciones y remodelaciones
                            </Heading>
                        <Text textAlign={[ 'left', 'justify' ]} ml={4} mr={4}>Quis commodo irure minim duis ullamco sit veniam labore fugiat ex exercitation excepteur laborum eu. Mollit nisi fugiat pariatur enim sit et voluptate laborum. Irure veniam exercitation consequat mollit eiusmod. Eu excepteur amet nulla eiusmod fugiat ipsum ut aliqua nostrud veniam. Cupidatat sint consectetur cillum id adipisicing culpa reprehenderit elit eiusmod duis eiusmod. Enim proident reprehenderit elit dolor non sunt esse exercitation voluptate.</Text>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center"p={5}  className={styles.card__Service}>
                    <Box display="flex" boxShadow="xl" w="390px" h="90px" alignItems="center" align="center" justify="center"  bg="tomato" borderRadius={6}>
                                <Image src="/tools.svg" className={styles.imagen} m={2} alt="tools Logo" width={80} height={40} />
                    </Box>
                    <Box>
                            <Heading textAlign={[ 'left', 'center' ]} as="h2" p={2} size="sm" isTruncated>
                                   Solucion de Filtracciones 
                            </Heading>
                        <Text  textAlign={[ 'left', 'justify' ]} ml={4} mr={4}>Quis commodo irure minim duis ullamco sit veniam labore fugiat ex exercitation excepteur laborum eu. Mollit nisi fugiat pariatur enim sit et voluptate laborum. Irure veniam exercitation consequat mollit eiusmod. Eu excepteur amet nulla eiusmod fugiat ipsum ut aliqua nostrud veniam. Cupidatat sint consectetur cillum id adipisicing culpa reprehenderit elit eiusmod duis eiusmod. Enim proident reprehenderit elit dolor non sunt esse exercitation voluptate.</Text>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" p={5} >
                <Box display="flex" alignItems="center" p={5} className={styles.card__Service}>
                    <Box display="flex" boxShadow="xl" alignItems="center" w="390px" h="90px" align="center" justify="center" bg="tomato" borderRadius={6}>
                                <Image src="/tools.svg"  className={styles.imagen} m={2} alt="tools Logo" width={72} height={40} />
                    </Box>
                    <Box>
                            <Heading textAlign={[ 'left', 'center' ]} as="h2" size="sm" p={2} isTruncated>
                                    Herreria
                            </Heading>
                        <Text textAlign={[ 'left', 'justify' ]} ml={4} mr={4}>Quis commodo irure minim duis ullamco sit veniam labore fugiat ex exercitation excepteur laborum eu. Mollit nisi fugiat pariatur enim sit et voluptate laborum. Irure veniam exercitation consequat mollit eiusmod. Eu excepteur amet nulla eiusmod fugiat ipsum ut aliqua nostrud veniam. Cupidatat sint consectetur cillum id adipisicing culpa reprehenderit elit eiusmod duis eiusmod. Enim proident reprehenderit elit dolor non sunt esse exercitation voluptate.</Text>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center"p={5}  className={styles.card__Service}>
                    <Box display="flex" boxShadow="xl" w="390px" h="90px" alignItems="center" align="center" justify="center"  bg="tomato" borderRadius={6}>
                                <Image src="/tools.svg" className={styles.imagen} m={2} alt="tools Logo" width={80} height={40} />
                    </Box>
                    <Box>
                            <Heading textAlign={[ 'left', 'center' ]} as="h2" p={2} size="sm" isTruncated>
                                    Plomeria y cañeria
                            </Heading>
                        <Text  textAlign={[ 'left', 'justify' ]} ml={4} mr={4}>Quis commodo irure minim duis ullamco sit veniam labore fugiat ex exercitation excepteur laborum eu. Mollit nisi fugiat pariatur enim sit et voluptate laborum. Irure veniam exercitation consequat mollit eiusmod. Eu excepteur amet nulla eiusmod fugiat ipsum ut aliqua nostrud veniam. Cupidatat sint consectetur cillum id adipisicing culpa reprehenderit elit eiusmod duis eiusmod. Enim proident reprehenderit elit dolor non sunt esse exercitation voluptate.</Text>
                    </Box>
                </Box>
            </Box>
            {/* <Box display="flex" alignItems="center" p={5} >
                <Box display="flex" alignItems="center" p={5}className={styles.card__Service}>
                    <Box display="flex" alignItems="center" w="390px" h="90px" align="center" justify="center" bg="tomato" borderRadius={6}>
                                <Image src="/tools.svg"  className={styles.imagen} m={2} alt="tools Logo" width={72} height={40} />
                    </Box>
                    <Box>
                            <Heading textAlign={[ 'left', 'justify' ]} as="h2" size="sm" isTruncated>
                                    SERVICIOS #1
                            </Heading>
                        <Text textAlign={[ 'left', 'justify' ]} ml={4} mr={4}>Quis commodo irure minim duis ullamco sit veniam labore fugiat ex exercitation excepteur laborum eu. Mollit nisi fugiat pariatur enim sit et voluptate laborum. Irure veniam exercitation consequat mollit eiusmod. Eu excepteur amet nulla eiusmod fugiat ipsum ut aliqua nostrud veniam. Cupidatat sint consectetur cillum id adipisicing culpa reprehenderit elit eiusmod duis eiusmod. Enim proident reprehenderit elit dolor non sunt esse exercitation voluptate.</Text>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center"p={5}  className={styles.card__Service}>
                    <Box display="flex" w="390px" h="90px" alignItems="center" align="center" justify="center"  bg="tomato" borderRadius={6}>
                                <Image src="/tools.svg" className={styles.imagen} m={2} alt="tools Logo" width={80} height={40} />
                    </Box>
                    <Box>
                            <Heading as="h2" size="sm" isTruncated>
                                    SERVICIOS #2
                            </Heading>
                        <Text  textAlign={[ 'left', 'justify' ]} ml={4} mr={4}>Quis commodo irure minim duis ullamco sit veniam labore fugiat ex exercitation excepteur laborum eu. Mollit nisi fugiat pariatur enim sit et voluptate laborum. Irure veniam exercitation consequat mollit eiusmod. Eu excepteur amet nulla eiusmod fugiat ipsum ut aliqua nostrud veniam. Cupidatat sint consectetur cillum id adipisicing culpa reprehenderit elit eiusmod duis eiusmod. Enim proident reprehenderit elit dolor non sunt esse exercitation voluptate.</Text>
                    </Box>
                </Box>
            </Box> */}
        </Box>
    )
}