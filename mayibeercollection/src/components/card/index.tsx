import style from "./style.module.css";

interface CardProps {
    data: any;
    height: number;
}

export default function Card({ data, height }: CardProps) {
    return <div className={style.card}>
        <div className={style.card_header}>
            <div className={style.card_img}>
                <img src={data.imagen} alt={data.nombre} height={height} width="100%"/>
            </div>
        </div>
        <div className={style.card_body}>
            <h6>{data.nombre}</h6>
        </div>  
    </div>
}