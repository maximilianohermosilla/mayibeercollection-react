import { Cerveza } from "../../interfaces/cerveza";
import style from "./style.module.css";

interface CardCervezaProps {
    data: Cerveza;
}

export default function CardCerveza({ data }: CardCervezaProps) {
    return <div className={style.cardCerveza}>
        <div className={style.cardCerveza_header}>
            <div className={style.cardCerveza_img}>
                <img src={data.imagen} alt={data.nombre} height="100%" width="100%"/>
            </div>
        </div>
        <div className={style.cardCerveza_body}>
            <h5>{data.nombre}</h5>
            <div className={style.carCerveza_body_subtitle}>
                <label>{data.marca?.nombre} - {data.estilo?.nombre}</label>
            </div>
        </div>
        <div className={style.cardCerveza_footer}>
            <label>{data.ciudad?.nombre}, {data.ciudad?.pais?.nombre}</label>
        </div>
    </div>
}