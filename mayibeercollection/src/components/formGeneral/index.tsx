import style from "./style.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";
import { IoSaveOutline } from "react-icons/io5";
import { SelectOption } from "../../interfaces/selectOption";
import { postImage } from "../../services/apiImage";
import { useForm } from "react-hook-form";
import SelectListaPaises from "../select/selectListaPaises";

interface FormProps {
    data?: Cerveza;
    closeModal: any;
    uploadImage: any;
    nuevoElemento: any;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

const initialForm = {
    id: 0,
    nombre: "",
    idPais: 0,
    imagen: "",
}

export default function FormGeneral({ data, uploadImage, nuevoElemento, closeModal }: FormProps) {    
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
    initialForm.imagen = data?.imagen!;

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

    const onSubmit = async (data: any) => {
        //console.log(data);
        let cerv = structuredClone(cerveza);
        
        if(fileInput){            
            const formData = new FormData();   
            formData.append('file', fileInput);        
            let response = await postImage(formData, cerveza?.nombre || '');
            cerv.imagen = response?.response;
        }    
        
        await nuevoElemento(cerv);
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
                        <label>* Nombre</label>    
                        <input type="text" placeholder="Nombre..." className="form-control rounded-0" 
                            {...register('nombre', {required: true})}
                            value={cerveza?.nombre || ""} onChange={handleInputChange} />
                        {errors.nombre?.type === "required" && <p className="text-danger">Campo requerido</p>}
                        
                        <label>* País</label>   
                        <div className={`text-primary ${style.divSelect}`}>
                            <SelectListaPaises 
                                selectedOption={cerveza?.idPais} 
                                onChangeSelect={onChangeSelectCiudad} 
                                isFilter={false}></SelectListaPaises>
                        </div>  
                    </div>                                    
                    <div className="col-12 d-flex flex-row-reverse">
                        <button className="btn btn-success mt-4" type="submit" disabled={false}><IoSaveOutline></IoSaveOutline> Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
