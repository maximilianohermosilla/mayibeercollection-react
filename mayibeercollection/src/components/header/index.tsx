import style from "./style.module.css";

interface HeaderProps {
    isLogged: boolean;
    isAdmin: boolean
}

export default function Header({ isLogged, isAdmin }: HeaderProps) {
    return (<nav className={`navbar navbar-expand-lg bg-dark ${style.navbars}`} data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand bg-success px-3 rounded-1 text-light" href="#">MayiBeerCollection</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/landing">Home
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    {isLogged ? <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Administración</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/administracion/cervezas">Cervezas</a>
                            <a className="dropdown-item" href="/administracion/marcas">Marcas</a>
                            <a className="dropdown-item" href="/administracion/estilos">Estilos</a>
                            <a className="dropdown-item" href="/administracion/ciudades">Ciudades</a>
                            <a className="dropdown-item" href="/administracion/paises">Países</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Configuración</a>
                        </div>
                    </li>: ''}

                    {isAdmin ? <li className="nav-item">
                        <a className="nav-link" href="/administracion">Administración</a>
                    </li> : ''}

                    <li className="nav-item">
                        <a className="nav-link" href="/cervezas">Cervezas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/busqueda">Búsqueda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/reportes">Reportes</a>
                    </li>                  
                </ul>
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="search" placeholder="Buscar" />
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>)
}