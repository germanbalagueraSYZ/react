import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer'

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/germanbalagueraSYZ.png",
    nombre: "Germán Balaguera",
    puesto: "Aprendiz Desarrollo"
  }])

  const [equipos, actualizaEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
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
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const neuvosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(neuvosColaboradores)
  }

  //ACTUALIZAR COLOR DE EQUIPO
  const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizaEquipos(equiposActualizados)
  }

  //CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) => {
    console.log (nuevoEquipo)
    actualizaEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
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
