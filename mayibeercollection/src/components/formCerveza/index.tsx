import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";
import { IoSaveOutline } from "react-icons/io5";
import SelectListaMarcas from "../select/selectListaMarcas";
import style from "./style.module.css";
import SelectListaEstilos from "../select/selectListaEstilos";
import SelectListaCiudades from "../select/selectListaCiudades";

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
    marca: {},
    idEstilo: 0,
    estilo: {},
    idCiudad: 0,
    ciudad: {},
    idPais: 0,
    observaciones: "",
    contenido: 0,
    imagen: "",
}

export default function FormCerveza({ data, agregarCerveza }: FormCervezaProps) {    
    //console.log(data)
    const [cerveza, setCerveza] = useState(initialForm)

    const handleInputChange = ({target: {name, value}}: HandleInputChange) => {    
       setCerveza({...cerveza, [name]: value});
    }

    const handleNuevaCerveza = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        agregarCerveza(cerveza);
        setCerveza(initialForm);
    }
    
    initialForm.nombre = data?.nombre!;
    initialForm.ibu = data?.ibu!;
    initialForm.alcohol = data?.alcohol!;
    initialForm.idMarca = data?.idMarca!;
    initialForm.idEstilo = data?.idEstilo!;
    initialForm.idCiudad = data?.idCiudad!;
    initialForm.observaciones = data?.observaciones!;
    initialForm.contenido = data?.contenido!;
    initialForm.imagen = data?.imagen!;
    initialForm.marca = data?.marca!;
    initialForm.estilo = data?.estilo!;
    initialForm.ciudad = data?.ciudad!;

    useEffect(() => {    
        setCerveza(initialForm);
    }, [])
    
    //console.log(initialForm)

    return (
        <div>
            <form onSubmit={handleNuevaCerveza}>
                <div className="row">                    
                    <div className="col-6">
                        <label>Nombre</label>    
                        <input type="text" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={cerveza?.nombre || ""} onChange={handleInputChange} />

                        <label>Marca</label>                        
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaMarcas selectedOption={cerveza?.marca}></SelectListaMarcas>
                        </div>

                        <label>Estilo</label>   
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaEstilos selectedOption={cerveza?.estilo}></SelectListaEstilos>
                        </div>   
                        
                        <label>Ciudad</label>   
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaCiudades selectedOption={cerveza?.ciudad}></SelectListaCiudades>
                        </div>  
                    </div>

                    <div className="col-6">                        
                        <label>Alcohol</label>   
                        <input type="number" placeholder="Alcohol..." name="alcohol" className="form-control rounded-0" value={cerveza?.alcohol || ""} onChange={handleInputChange}/>
                        
                        <label>IBU</label>   
                        <input type="number" placeholder="IBU..." name="ibu" className="form-control rounded-0" value={cerveza?.ibu || ""} onChange={handleInputChange}/>
                        
                        <label>Contenido</label>
                        <input type="number" placeholder="Contenido..." name="contenido" className="form-control rounded-0" value={cerveza?.contenido || ""} onChange={handleInputChange}/>

                        <label>Observaciones</label>
                        <textarea placeholder="Observaciones..." name="observaciones" className="form-control rounded-0" value={cerveza?.observaciones || ""} onChange={handleInputChange} />
                    </div>

                    <div className="col-12">
                        <button className="btn btn-success" type="submit"><IoSaveOutline></IoSaveOutline> Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
