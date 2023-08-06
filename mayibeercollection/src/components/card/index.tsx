import style from "./style.module.css";

interface CardProps {
    data: any;
}

export default function Card({ data }: CardProps) {
    return <div className={style.card}>
        <div className={style.card_header}>
            <div className={style.card_img}>
                <img src={data.imagen} alt={data.nombre} height={50} width="100%"/>
            </div>
        </div>
        <div className={style.card_body}>
            <h6>{data.nombre}</h6>
        </div>  
    </div>
}