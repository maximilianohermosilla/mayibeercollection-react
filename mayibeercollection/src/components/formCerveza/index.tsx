import { ChangeEvent, FormEvent, useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";

interface FormCervezaProps {
    data?: Cerveza;
    agregarCerveza: any;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

const initialForm = {
    id: 0,
    nombre: "",
    ibu: 0,
    alcohol: 0,
    idMarca: 0,
    marca: "",
    idEstilo: 0,
    estilo: "",
    idCiudad: 0,
    ciudad: "",
    idPais: 0,
    observaciones: "",
    contenido: 0,
    imagen: "",
}

export default function FormCerveza({ data, agregarCerveza }: FormCervezaProps) {

    initialForm.nombre = data?.nombre!;
    initialForm.ibu = data?.ibu!;
    initialForm.alcohol = data?.alcohol!;
    initialForm.idMarca = data?.idMarca!;
    initialForm.idEstilo = data?.idEstilo!;
    initialForm.idCiudad = data?.idCiudad!;
    initialForm.observaciones = data?.observaciones!;
    initialForm.contenido = data?.contenido!;
    initialForm.imagen = data?.imagen!;
    console.log(data)
    const [cerveza, setCerveza] = useState(initialForm)

    const handleInputChange = ({target: {name, value}}: HandleInputChange) => {    
       setCerveza({...cerveza, [name]: value});
    }

    const handleNuevaCerveza = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        agregarCerveza(cerveza);
        setCerveza(initialForm);
    }

    return (
        <div>
            <form onSubmit={handleNuevaCerveza}>
                <div className="row">
                    <div className="col-6">
                        Nombre<input type="text" placeholder="Nombre..." name="nombre" className="form-control" value={cerveza?.nombre} onChange={handleInputChange} />
                        Marca<input type="text" placeholder="Marca..." name="marca" className="form-control" value={cerveza?.idMarca} onChange={handleInputChange}/>
                        Estilo<input type="text" placeholder="Estilo..." name="estilo" className="form-control" value={cerveza?.idEstilo} onChange={handleInputChange}/>
                        Ciudad<input type="text" placeholder="Ciudad..." name="ciudad" className="form-control" value={cerveza?.idCiudad} onChange={handleInputChange}/>
                    </div>
                    <div className="col-6">
                        Alcohol<input type="number" placeholder="Alcohol..." name="alcohol" className="form-control" value={cerveza?.alcohol} onChange={handleInputChange}/>
                        Ibu<input type="number" placeholder="IBU..." name="ibu" className="form-control" value={cerveza?.ibu} onChange={handleInputChange}/>
                        Contenido<input type="number" placeholder="Contenido..." name="contenido" className="form-control" value={cerveza?.contenido} onChange={handleInputChange}/>
                        Observaciones<textarea placeholder="Observaciones..." name="observaciones" className="form-control" value={cerveza?.observaciones} onChange={handleInputChange} />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success" type="submit">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
