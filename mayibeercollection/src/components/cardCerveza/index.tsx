import { Cerveza } from "../../interfaces/cerveza";
import style from "./style.module.css";

interface CardCervezaProps {
    data: Cerveza;
}

export default function CardCerveza({ data }: CardCervezaProps) {
    return <div className={`bg-primary text-light ${style.cardCerveza}`}>
        <div className={style.cardCerveza_header}>
            <div className={style.cardCerveza_img}>
                {/* <img className="imagenCerveza" id={data.id?.toString()} src={data.imagen} alt={data.nombre} height="100%" width="100%" /> */}
                <img className="imagenCerveza" id={data.id?.toString()} src={data.imagen} alt={data.nombre} height="100%" width="100%"  data-bs-toggle="modal" data-bs-target="#modalCerveza"/>
            </div>
        </div>
        <div className={style.cardCerveza_body}>
            <h5>{data.nombre}</h5>
            <div className={style.carCerveza_body_subtitle}>
                <label>{data.marca?.nombre} - {data.estilo?.nombre}</label>
            </div>
        </div>
    </div>    
}