import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer'

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Programación",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    equipo: "Front End",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  }])

  const [equipos, actualizaEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //REGISTRAR COLABORADOR
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //SPREAD OPERATOR
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //ELIMINAR COLABORADOR
  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador")
  }

  //ACTUALIZAR COLOR DE EQUIPO
  const actualizarColor = (color, titulo) => {
    console.log("Actualizar:", color, titulo)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.titulo === titulo) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizaEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
