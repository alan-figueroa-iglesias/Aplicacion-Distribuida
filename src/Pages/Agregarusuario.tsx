import { useState } from 'react'
import {SimpleGrid, Box,Text, Flex,
Stack,Wrap, WrapItem, Button, Spacer,Image,
FormControl,
InputGroup,
InputLeftElement,
Input,
useToast,Center} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons' 
import { useLocation,useNavigate  } from "react-router-dom";

function Agregarusuario() {
    const [nombre,setNombre]=useState('')
    const [contrasena,setContrasena]=useState('')
    const [correo,setCorreo]=useState('')
    const [tienda,setTienda]=useState('')

    
    const toast = useToast() 
    const location = useLocation(); 
    
    const navigate=useNavigate()
    

    async function guardarUsuario(){
      
    const respuesta=await fetch('https://microservicioscasasxcasas.000webhostapp.com/api.php?comando=agregarUsuario&nombre='+nombre
    +'&contrasena='+contrasena
    +'&correo='+correo
    +'&tienda='+tienda)

    const datos=await respuesta.json()
    
    if(datos.estatus==='ok')            
    navigate(-1)
    else
    {
        console.log(datos.estatus)
        toast({
            title: 'Usuario',
            description: "No se pudo guardar el usuario.",
            status: 'warning',
            duration: 4000,
            isClosable: true,
          })
    }  
    }    
    

    return (
        <Flex
      flexDirection="column"
       // width="200wh"
      //height="200vh"
      backgroundColor="gray.200"
     // justifyContent="center"
      alignItems="center"
    >
    <Stack
        flexDir="column"
        mb="2"
        p={2}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        marginTop={4}
        borderRadius='md'
      >
        
        <Flex minW={{ base: "90%", md: "468px" }} 
        bg="teal.200"
        p='2'>
  <Box p='4' bg="teal.400" as='button' onClick={() =>navigate(-1)}
  borderRadius='md'>
    Regresar
  </Box>
  <Box p='4'>
  <Text fontSize='lg'>Agregar Usuario</Text>
  </Box>
  <Spacer />
  
  <Box p='4' bg='teal.400'as='button' borderRadius='md'
  onClick={guardarUsuario}>
    Guardar
  </Box>
</Flex>
<Box display='flex' mt='2' alignItems='center'>
<Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        
        <Box minW={{ base: "90%", md: "468px" }}>
         
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>                 
                  <Input type="text" placeholder="Nombre" value={nombre}
                 onChange={(e) => setNombre(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>                 
                  <Input type="text" placeholder="Contraseña" value={contrasena}
                 onChange={(e) => setContrasena(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>                 
                  <Input type="text" placeholder="Correo" value={correo}
                 onChange={(e) => setCorreo(e.target.value)}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>                 
                  <Input type="text" placeholder="Tienda" value={tienda}
                 onChange={(e) => setTienda(e.target.value)}/>
                </InputGroup>
              </FormControl>                 
            </Stack>        
          
</Box>
</Stack>
</Box>
</Stack>
</Flex>

    )
}


export default Agregarusuario
