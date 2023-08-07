import style from "./style.module.css";
import imageDefault from "../../img/notfound.png";

interface CardProps {
    data: any;
    height: number;
}

export default function Card({ data, height }: CardProps) {
    return <div className={style.card}>
        <div className={style.card_header}>
            <div className={style.card_img}>
                <img src={data.imagen} alt={data.nombre} height={height} width="100%"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=imageDefault;}}
                />
            </div>
        </div>
        <div className={style.card_body}>
            <h6>{data.nombre}</h6>
        </div>  
    </div>
}