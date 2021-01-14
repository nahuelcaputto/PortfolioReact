import '../..';
import { Header, Navigation } from "react-mdl";
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        <Header className='header-color' title="Nahuel Caputto" scroll>
            <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/aboutme">Sobre Mi</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/resume">CV</Link>
                <Link to="/contact">Contacto</Link>
            </Navigation>
        </Header>
    )
}
export default HeaderBar;
