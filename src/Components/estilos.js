// Estilos.js
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils/index.js';
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios

const styles = {
    
  body:{
    paddingTop:'100px',
    height:'100%',
  } ,
  header: {
    backgroundColor: colores.fondoHeader,
    color: colores.textoHeader,
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  head: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: colores.fondoLogo,
    width: '190px',
    height: '80px',
    marginLeft: '10px',
  },
  navStyles: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: '10px',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'right',
    padding: '10px 0',
  },
  navLink: {
    color: colores.textoNavLink,
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '20px',
  },


//ESTOS SON LOS ESTILOS APLICADOS PARA LOS FORMULARIOS, QUE VAN TODO LO QUE ESTA EN LA SECCION DE INICIAR SESION

  container: { //Esta es para el color de la principal
    backgroundColor: colores.fondoPrincipal,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
},
imgArea: {//Este es para ajustar parametros del lado de la imagen 
    width: '2500px',
    minWidth: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    borderRight: `solid 3px ${colores.separador}`,
},
ImagenFondo: {//Ajuste del tamaño de la imagen

    maxWidth: '780px',
    minHeight: '555px',
    minWidth: '300px'
},
formArea: {//Ajusta el parametros del lado de los formularios 
    minWidth: '358px',
    width: '1360px',
    maxWidth: '1500px',
    display: 'flex',
    justifyContent: 'center',
},
formContainer: {//ajuste general de los formularios
    backgroundColor: colores.fondoForm,
    borderRadius: 10,
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '35%',
    minWidth: '290px',
},
cincuenta: { //usado para separar lo input de nombre y apellido
    display: 'flex',
    width: '96%',
    justifyContent: 'space-between'
},
inCincuenta: { //medidas de los imput divididos a la mitad
    width: '45%',
},
title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colores.negro,
    textAlign: "center",
    marginBottom: 20,
},
label: {
    fontSize: 16,
    color: colores.negro,
    marginBottom: 5,
},
input: {
    width: '93%',
    backgroundColor: "#fff",
    borderColor: colores.bordeInput,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
},
registerButton: {
    backgroundColor: colores.boton, // Usado para el color de fondo de los botones, especialmente el botón de registro
    color: colores.textoBoton,
    padding: 15,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: '100%',
},
loginButtonText: {
    display: 'flex',
    justifyContent: 'right',
    color: colores.linkText,
    textAlign: "center",
    marginTop: 5,
    paddingBottom: '10px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
},


//Estilos aplicados para el home de la pagina
home:{

  backgroundColor: colores.fondoPrincipal,

},

hero: {
  backgroundImage: "url('../assets/imgHome.jpg')", // Ajusta el path según la ubicación real
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px 20px',
  height:'566px',
  textAlign: 'center',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  fontSize:'25px',
  color:'white', 
  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
},
features: {
  backgroundColor: colores.fondoPrincipal,

  padding: '20px 20px',
  textAlign: 'center',
},
featureContainer: {
  height:'400px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
},
feature: {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  width: '30%',
},
featureBoton:{
    backgroundColor: colores.boton, // Usado para el color de fondo de los botones
    color: colores.textoBoton,
    padding: 10,
    borderRadius: 5,
    marginTop:'200px',
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
},
featureImg:{ 
  backgroundColor:colores.fondoLogo,
  width:'',
  height:'',
},

//ESTILOS PARA EL FOOTER
footerDatos:{
  height:'auto',
  backgroundColor:colores.footerColorUp,
  display:'flex',
  justifyContent:'space-between',
  paddingLeft:'10px',
  paddingRight:'10px',

  margin:'0',
},
datos:{
  color:'#daebff',
  display:'flex',
  paddingTop:'10px',
  paddingBottom:'10px',
  flexDirection:'column',
  justifyContent:'center',
},
redes:{
  color:'#daebff',
  display:'flex',
  paddingTop:'10px',
  paddingBottom:'10px',
  flexDirection:'column',
  justifyContent:'center',
},
icons:{
  paddingTop:'10px',
  display:'flex',
  justifyContent:'space-between',
},
footer: {
  padding:0,
  margin:0,
  backgroundColor: "black",
  display:'flex',
  justifyContent:'center',
  color: "white",
  height:'22px'

},
};



export default styles;
