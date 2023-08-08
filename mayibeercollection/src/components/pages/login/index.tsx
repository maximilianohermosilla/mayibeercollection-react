import style from "./style.module.css";

export default function Login() {
    return (
    <div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0">Login</h1>
                <h3 className="title text-warning px-3">Iniciar Sesión</h3>
            </div>
        </div>
    </div>
    );
}