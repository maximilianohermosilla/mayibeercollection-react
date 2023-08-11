import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";
import { IoSaveOutline } from "react-icons/io5";
import SelectListaMarcas from "../select/selectListaMarcas";
import style from "./style.module.css";
import SelectListaEstilos from "../select/selectListaEstilos";
import SelectListaCiudades from "../select/selectListaCiudades";
import { SelectOption } from "../../interfaces/selectOption";
import { postImage } from "../../services/apiImage";
import { useForm } from "react-hook-form";

interface FormCervezaProps {
    data?: Cerveza;
    agregarCerveza: any;
    uploadImage: any;
    closeModal: any;
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

export default function FormCerveza({ data, agregarCerveza, uploadImage, closeModal }: FormCervezaProps) {    
    //console.log(data)
    const [cerveza, setCerveza] = useState(initialForm)
    const [idMarca, setMarca] = useState<any>(data?.idMarca)
    const [idEstilo, setEstilo] = useState<any>(data?.idEstilo)
    const [idCiudad, setCiudad] = useState<any>(data?.idCiudad)
    const [file, setFile] = useState<any>();
    const [fileInput, setFileInput] = useState<any>();
    
    const {register, formState: {errors},  handleSubmit } = useForm();

    const handleInputChange = ({target: {name, value}}: HandleInputChange) => {    
       setCerveza({...cerveza, [name]: value});
    }  

    initialForm.id = data?.id!;
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

    const onChangeSelectMarca = (event: SelectOption)  => {
        setMarca(event?.value);
    }
    
    const onChangeSelectEstilo = (event: SelectOption)  => {
        setEstilo(event?.value);
    }
    
    const onChangeSelectCiudad = (event: SelectOption)  => {
        setCiudad(event?.value);
    }

    async function handleChange(e: any) {       
        const target= e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        
        setFile(URL.createObjectURL(e.target.files[0]));
        uploadImage(URL.createObjectURL(e.target.files[0]));
        setFileInput(file)
    }

    const handleNuevaCerveza = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const onSubmit = async (data: any) => {
        //console.log(data);
        let cerv = structuredClone(cerveza);
        cerv.idMarca = idMarca;
        cerv.idEstilo = idEstilo;
        cerv.idCiudad = idCiudad;
        
        if(fileInput){            
            const formData = new FormData();   
            formData.append('file', fileInput);        
            let response = await postImage(formData, cerveza?.nombre || '');
            cerv.imagen = response?.response;
        }    
        
        await agregarCerveza(cerv);
        setCerveza(cerv);
        closeModal();
    }
        
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">    
                    <div className="col-12 mb-2">
                        <div className="form-group">
                            <label htmlFor="formFile" className="form-label mt-4">Foto</label>
                            <input className="form-control bg-dark text-light" type="file" id="formFile" onChange={handleChange}/>
                        </div>
                    </div>                
                    <div className="col-6">
                        <label>* Nombre</label>    
                        <input type="text" placeholder="Nombre..." className="form-control rounded-0" 
                            {...register('nombre', {required: true})}
                            value={cerveza?.nombre || ""} onChange={handleInputChange} />
                        {errors.nombre?.type === "required" && <p className="text-danger">Campo requerido</p>}

                        <label>* Marca</label>                        
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaMarcas 
                                selectedOption={cerveza?.marca} 
                                onChangeSelect={onChangeSelectMarca} 
                                isFilter={false}></SelectListaMarcas>
                        </div>

                        <label>* Estilo</label>   
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaEstilos 
                                selectedOption={cerveza?.estilo} 
                                onChangeSelect={onChangeSelectEstilo} 
                                isFilter={false}></SelectListaEstilos>
                        </div>   
                        
                        <label>* Ciudad</label>   
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaCiudades 
                                selectedOption={cerveza?.ciudad} 
                                onChangeSelect={onChangeSelectCiudad} 
                                isFilter={false}></SelectListaCiudades>
                        </div>  
                    </div>

                    <div className="col-6">                        
                        <label>Alcohol</label>   
                        <input type="number" placeholder="Alcohol..." className="form-control rounded-0" 
                            {...register('alcohol', {max: 100, min: 0})}
                            value={cerveza?.alcohol || ""} onChange={handleInputChange}/>
                        {errors.alcohol?.type === "max" && <p className="text-danger">El valor debe ser inferior a 100</p>}
                        {errors.alcohol?.type === "min" && <p className="text-danger">El valor debe ser mayor o igual a 0</p>}

                        <label>IBU</label>   
                        <input type="number" placeholder="IBU..." className="form-control rounded-0" 
                            {...register('ibu', {min: 0})}
                            value={cerveza?.ibu || ""} onChange={handleInputChange}/>
                        {errors.ibu?.type === "min" && <p className="text-danger">El valor debe ser mayor o igual a 0</p>}
                        
                        <label>Contenido</label>
                        <input type="number" placeholder="Contenido..." className="form-control rounded-0" 
                             {...register('contenido', {min: 0})}
                            value={cerveza?.contenido || ""} onChange={handleInputChange}/>                            
                        {errors.contenido?.type === "min" && <p className="text-danger">El valor debe ser mayor o igual a 0</p>}

                        <label>Observaciones</label>
                        <textarea placeholder="Observaciones..." name="observaciones" className="form-control rounded-0" 
                            value={cerveza?.observaciones || ""} onChange={handleInputChange} />
                    </div>

                    <div className="col-12 d-flex flex-row-reverse">
                        <button className="btn btn-success mt-4" type="submit" disabled={!idMarca || !idEstilo || !idCiudad}><IoSaveOutline></IoSaveOutline> Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
