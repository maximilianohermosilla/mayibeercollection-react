import { useEffect, useState } from "react";
import { Cerveza } from "../../../interfaces/cerveza";
import { getCervezas } from "../../../services/apiCerveza";
import { IoAddCircleOutline, IoBeerOutline } from "react-icons/io5";
import CardCerveza from "../../cardCerveza";
import style from './style.module.css'
import ModalCervezaABM from "../../modalCervezaABM";
import SelectListaPaises from "../../select/selectListaPaises";
import SelectListaCiudades from "../../select/selectListaCiudades";
import SelectListaMarcas from "../../select/selectListaMarcas";
import SelectListaEstilos from "../../select/selectListaEstilos";
import { SelectOption } from "../../../interfaces/selectOption";
import { Filter } from "../../../interfaces/filter";

export default function Cervezas() {
    const [cervezas, setCervezas] = useState<Cerveza[]>([]);
    const [cerveza, setCerveza] = useState<Cerveza>();
    const [filter, setFilters] = useState<Filter>({});   

    let isFilter = true;

    const fetchCervezas = async () => {
        //let listaCervezas: Cerveza[] = await getCervezas(IdMarca, IdEstilo, IdCiudad, IdPais, fullresponse);
        console.log(filter);
        let listaCervezas: Cerveza[] = await getCervezas(filter.idMarca! || '0', filter.idEstilo! || '0', filter.idCiudad! || '0', filter.idPais! || '0', false);
        await setCervezas(listaCervezas);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);

    const agregarCerveza = (nuevaCerveza: Cerveza) => {
        setCervezas([...cervezas, nuevaCerveza]);
    }

    const setearCerveza = (cerv: Cerveza) => {
        console.log(cerv);
        setCerveza(cerv)
    }

    const agregarNuevaCerveza = async () => {
        const emptyCerveza = {} as Cerveza;
        await setCerveza(emptyCerveza);
    }

    const onChangeSelectMarca = async (event: SelectOption)  => {
        let filtro: Filter = filter;
        filtro.idMarca = event?.value;
        setFilters(filtro);
        await fetchCervezas();
    }

    const onChangeSelectEstilo = async (event: SelectOption)  => {      
        let filtro: Filter = filter;
        filtro.idEstilo = event?.value;
        setFilters(filtro);
        await fetchCervezas();
    }

    const onChangeSelectPais = async (event: SelectOption)  => {
        let filtro: Filter = filter;
        filtro.idPais = event?.value;
        setFilters(filtro);
        await fetchCervezas();
    }

    const onChangeSelectCiudad = async (event: SelectOption)  => {
        // console.log(event)
        // console.log(event?.value)
        let filtro: Filter = filter;
        filtro.idCiudad = event?.value;
        setFilters(filtro);
        await fetchCervezas();
    }

    const renderCervezas = () => cervezas?.map((v, i) => <CardCerveza data={v} key={i} agregarCerveza={setearCerveza}></CardCerveza>)

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 py-1 mt-2"><IoBeerOutline className="text-warning"></IoBeerOutline> Cervezas</h1>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" id="btnAgregarCerveza" className="btn btn-success"
                            data-bs-toggle="modal" data-bs-target="#modalCervezaABM"
                            onClick={agregarNuevaCerveza}><IoAddCircleOutline></IoAddCircleOutline> Agregar Cerveza</button>
            </div>
        </div>
        <div className="row container-fluid my-4 ml-1">
            <div className="col-6 col-sm-3">
                <label className={`text-light ${style.label}`}>Marca</label>
                <SelectListaMarcas selectedOption={undefined} onChangeSelect={onChangeSelectMarca} isFilter={isFilter}></SelectListaMarcas>                
            </div>
            <div className="col-6 col-sm-3">
                <label className={`text-light ${style.label}`}>Estilo</label>
                <SelectListaEstilos selectedOption={undefined} onChangeSelect={onChangeSelectEstilo} isFilter={isFilter}></SelectListaEstilos>
            </div>
            <div className="col-6 col-sm-3">
                <label className={`text-light ${style.label}`}>País</label>
                <SelectListaPaises selectedOption={undefined} onChangeSelect={onChangeSelectPais} isFilter={isFilter}></SelectListaPaises>
            </div>
            <div className="col-6 col-sm-3">
                <label className={`text-light ${style.label}`}>Ciudad</label>
                <SelectListaCiudades selectedOption={undefined} onChangeSelect={onChangeSelectCiudad} isFilter={isFilter}></SelectListaCiudades>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.cervezasMain}`}>
            {renderCervezas()}
        </div>
        {/* <ModalCerveza data={cerveza}></ModalCerveza>
        {cerveza? <ModalCervezaABM data={cerveza} agregarCerveza={agregarCerveza}></ModalCervezaABM> : ''} */}
        <ModalCervezaABM data={undefined} agregarCerveza={agregarCerveza} setearCerveza={setearCerveza}></ModalCervezaABM>     
    </div>)
}