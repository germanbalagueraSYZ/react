import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/GermanBalaguera954/'  target="_blank" rel="noopener noreferrer">
                <img src="/img/github.png" alt='Github' />
            </a>
            <a href='https://portafoliogermanbalaguera.azurewebsites.net/' target="_blank" rel="noopener noreferrer">
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/germanbalaguera954' target="_blank" rel="noopener noreferrer">
                <img src="/img/linkedin.png" alt='linkedIn' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Germán Balaguera</strong>
    </footer>
}

export default Footer