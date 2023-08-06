import AdministracionCervezas from "../components/pages/administracion/cervezas"
import AdministracionCiudades from "../components/pages/administracion/ciudades"
import AdministracionEstilos from "../components/pages/administracion/estilos"
import AdministracionMarcas from "../components/pages/administracion/marcas"
import AdministracionPaises from "../components/pages/administracion/paises"
import Cervezas from "../components/pages/cervezas"
import Reportes from "../components/reportes"

export const LandingPage = () => <h2 className="text-light">Landing Page (Public)</h2>

export const CervezasPage = () => <Cervezas></Cervezas>

export const AdministracionPage = () => <h2 className="text-light">Administration Page (Private, permission: 'analize')</h2>

export const ReportesPage = () => <Reportes></Reportes>

export const AdministracionPaisesPage = () => <AdministracionPaises></AdministracionPaises>

export const AdministracionMarcasPage = () => <AdministracionMarcas></AdministracionMarcas>

export const AdministracionEstilosPage = () => <AdministracionEstilos></AdministracionEstilos>

export const AdministracionCiudadesPage = () => <AdministracionCiudades></AdministracionCiudades>

export const AdministracionCervezasPage = () => <AdministracionCervezas></AdministracionCervezas>