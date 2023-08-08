import style from "./style.module.css";
import { IoBriefcaseOutline, IoSettingsOutline } from "react-icons/io5";

export default function AdministracionConfiguracion() {
    return (
    <div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoSettingsOutline className="text-secondary mx-2"></IoSettingsOutline> Configuración</h3>
            </div>
        </div>
    </div>
    );
}