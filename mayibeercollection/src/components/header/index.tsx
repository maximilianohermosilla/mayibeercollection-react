import style from "./style.module.css";
import { IoBeerOutline, IoSearchSharp, IoBarChartOutline, IoBriefcaseOutline, IoHomeOutline, IoBagHandleOutline, IoPintOutline, IoEarthOutline, IoBusinessOutline, IoSettingsOutline  } from "react-icons/io5";

interface HeaderProps {
    isLogged: boolean;
    isAdmin: boolean
}

export default function Header({ isLogged, isAdmin }: HeaderProps) {
    return (<nav className={`navbar navbar-expand-lg bg-primary ${style.navbars}`} data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand bg-success px-3 rounded-1 text-light" href="/inicio">MayiBeerCollection</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className={`nav-item px-1 ${style.label}`} >
                        <a className={`nav-link active ${style.label}`} href="/inicio"><IoHomeOutline></IoHomeOutline> Inicio
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    {isLogged ? <li className={`nav-item dropdown px-1 ${style.label}`}>
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <IoBriefcaseOutline></IoBriefcaseOutline> Administración</a>
                        <div className="dropdown-menu">
                            {/* <a className="dropdown-item" href="/administracion/cervezas"><IoBeerOutline></IoBeerOutline> Cervezas</a> */}
                            <a className="dropdown-item" href="/administracion/marcas"><IoBagHandleOutline></IoBagHandleOutline> Marcas</a>
                            <a className="dropdown-item" href="/administracion/estilos"><IoPintOutline></IoPintOutline> Estilos</a>
                            <a className="dropdown-item" href="/administracion/ciudades"><IoBusinessOutline></IoBusinessOutline> Ciudades</a>
                            <a className="dropdown-item" href="/administracion/paises"><IoEarthOutline></IoEarthOutline> Países</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/administracion/configuracion"><IoSettingsOutline></IoSettingsOutline> Configuración</a>
                        </div>
                    </li>: ''}

                    {isAdmin ? <li className={`nav-item ${style.label}`} >
                        <a className="nav-link" href="/administracion">Administración</a>
                    </li> : ''}

                    <li className={`nav-item px-1 ${style.label}`}>
                        <a className="nav-link" href="/cervezas"><IoBeerOutline></IoBeerOutline> Cervezas</a>
                    </li>
                    {isAdmin ? <li className={`nav-item px-1 ${style.label}`}>
                        <a className="nav-link" href="/busqueda"><IoSearchSharp></IoSearchSharp> Búsqueda</a>
                    </li> : ''}
                    <li className={`nav-item px-1 ${style.label}`}>
                        <a className="nav-link" href="/reportes"><IoBarChartOutline></IoBarChartOutline> Reportes</a>
                    </li>                  
                </ul>
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="search" placeholder="Buscar" />
                    <button className={`btn btn-success my-2 my-sm-0 ${style.label}`} type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>)
}