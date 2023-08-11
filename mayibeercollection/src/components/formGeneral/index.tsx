import style from "./style.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";
import { IoSaveOutline } from "react-icons/io5";
import { SelectOption } from "../../interfaces/selectOption";
import { postImage } from "../../services/apiImage";
import { useForm } from "react-hook-form";
import SelectListaPaises from "../select/selectListaPaises";
import { Tipo } from "../../interfaces/tipo";
import imageDefault from "../../img/notfound.png";

interface FormProps {
    data?: any;
    closeModal: any;
    uploadImage: any;
    nuevoElemento: any;
    tipo: Tipo;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

const initialForm = {
    id: 0,
    nombre: "",
    idPais: 0,
    imagen: "",
    nombrePais: ""
}

export default function FormGeneral({ data, uploadImage, nuevoElemento, closeModal, tipo }: FormProps) {    
    const [elemento, setElemento] = useState(data)
    const [file, setFile] = useState<any>();
    const [fileInput, setFileInput] = useState<any>();
    const [tipoCiudad, setTipoCiudad] = useState<boolean>(false);
    const [idPais, setPais] = useState<any>(data?.ciudad?.idPais);
    
    const {register, formState: {errors},  handleSubmit } = useForm();

    const handleInputChange = ({target: {name, value}}: HandleInputChange) => {    
        setElemento({...elemento, [name]: value});
    }  

    initialForm.id = data?.id!;
    initialForm.nombre = data?.nombre!;
    initialForm.imagen = data?.imagen!;
    initialForm.idPais = data?.idPais!;
    initialForm.nombrePais = data?.nombrePais!;  

    useEffect(() => {
        setElemento(data);
        setFile(data?.imagen);
        setTipoCiudad(tipo == Tipo.Ciudad);
        setPais(data?.idPais);
    }, [])
    
    const onChangeSelectPais = (event: SelectOption)  => {
        setPais(event?.value);
    }

    async function handleChange(e: any) {       
        const target= e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        
        setFile(URL.createObjectURL(e.target.files[0]));
        uploadImage(URL.createObjectURL(e.target.files[0]));
        setFileInput(file)
    }

    const onSubmit = async (data: any) => {
        //console.log(data);
        let elem = structuredClone(elemento);
        elem.idPais = idPais;

        if(fileInput){            
            const formData = new FormData();   
            formData.append('file', fileInput);        
            let response = await postImage(formData, elemento?.nombre || '');
            elem.imagen = response?.response;
        }    
        
        await nuevoElemento(elem);
        setElemento(elem);
        closeModal();
    }
        
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">  
                    <div className="col-12 col-md-6 mb-2">
                        <img className="img-modal" src={file || imageDefault} alt={elemento?.nombre}
                        width="100%" min-height="50vh"
                        onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src=imageDefault;}}/>
                    </div>  
                    <div className="col-12 col-md-6 mb-2">  

                        {!tipoCiudad?                       
                        <div className="form-group">
                            <label htmlFor="formFile" className="form-label">Foto</label>
                            <input className="form-control bg-dark text-light" type="file" id="formFile" onChange={handleChange}/>
                        </div>: ''} 

                        <label>* Nombre</label>    
                        <input type="text" placeholder="Nombre..." className="form-control rounded-0" 
                            {...register('nombre', {required: true})}
                            value={elemento?.nombre || ""} onChange={handleInputChange} />
                        {errors.nombre?.type === "required" && <p className="text-danger">Campo requerido</p>}

                        {tipoCiudad? <div><label>* País</label>   
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaPaises 
                                selectedOption={{ id: elemento?.idPais , nombre: elemento?.nombrePais }} 
                                onChangeSelect={onChangeSelectPais} 
                                isFilter={false}></SelectListaPaises>
                        </div> </div>: ''} 
                        <div className="col-12 d-flex flex-row-reverse">
                            <button className="btn btn-success mt-4" type="submit" disabled={tipoCiudad && !idPais}><IoSaveOutline></IoSaveOutline> Guardar</button>
                        </div>
                    </div>    
                                                   
                    
                </div>
            </form>
        </div>
    )
}
