
import { Drawer, Navigation } from "react-mdl";
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <Drawer title="">
            <Navigation>
                <Link to="/aboutme">Sobre Mi</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/resume">CV</Link>
                <Link to="/contact">Contacto</Link>
            </Navigation>
        </Drawer>
    )
}

export default SideBar;