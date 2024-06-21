import './MiOrg.css'

const MiOrg = (props) => {
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}
    console.log(props)

    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg