import ModalBootstrap from "../../modal";
import style from "./style.module.css";

export default function HomepageInicio() {
    return (
    <div>
        <div className={`container-fluid w-100 text-center p-5 ${style.divTitle}`}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0">MayiBeerCollection</h1>
                <h3 className="title text-warning px-3">Bienvenido/a</h3>
                <ModalBootstrap data={undefined} showModal={false}></ModalBootstrap>
            </div>
        </div>
    </div>
    );
}