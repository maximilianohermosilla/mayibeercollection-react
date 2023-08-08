import style from "./style.module.css";

export default function Login() {
    return (
        <div className="container w-50 pt-5">
            <div className={`container-fluid w-100 p-5 border border-secondary rounded-2 bg-primary ${style.divTitle}`}>
                <div>
                    <h1 className="title text-success px-3 pt-1 mb-0 text-center">Login</h1>
                    <h3 className="title text-warning px-3 text-center">Iniciar sesión</h3>                    
                </div>   

                <div className="container text-light">
                    <form>
                        <div className="container my-5">
                            <label className="text-left">Nombre</label>   
                            <input type="text" placeholder="Alcohol..." name="alcohol" className="form-control rounded-0" />
                        </div>
                        <div className="container my-5">
                            <label className="text-left">Contraseña</label>   
                            <input type="password" placeholder="IBU..." name="ibu" className="form-control rounded-0"/>    
                        </div>
                    </form>
                </div>        
            </div>
        </div>
    );
}