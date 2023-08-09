import style from './style.module.css'
import CardCerveza from "../../cardCerveza";
import ModalCervezaABM from "../../modalCervezaABM";
import SelectListaPaises from "../../select/selectListaPaises";
import SelectListaCiudades from "../../select/selectListaCiudades";
import SelectListaMarcas from "../../select/selectListaMarcas";
import SelectListaEstilos from "../../select/selectListaEstilos";
import { useEffect, useState } from "react";
import { Cerveza } from "../../../interfaces/cerveza";
import { getCervezas, insertCerveza, updateCerveza } from "../../../services/apiCerveza";
import { IoAddCircleOutline, IoBeerOutline } from "react-icons/io5";
import { SelectOption } from "../../../interfaces/selectOption";
import { Filter } from "../../../interfaces/filter";
import Pagination from "../../pagination";

export default function Cervezas() {
    const [cervezas, setCervezas] = useState<Cerveza[]>([]);
    const [cervezasActuales, setCervezasActuales] = useState<Cerveza[]>([]);
    // const [cerveza, setCerveza] = useState<Cerveza>();
    const [filter, setFilters] = useState<Filter>({});   
    const [currentPage, setCurrentPage] = useState(1);
    const [beersPerPage, setBeersPerPage] = useState(10);
    const [loading, setLoading] = useState(true);

    let isFilter = true;

    const fetchCervezas = async () => {
        setLoading(true);
        let listaCervezas: Cerveza[] = await getCervezas(filter.idMarca! || '0', filter.idEstilo! || '0', filter.idCiudad! || '0', filter.idPais! || '0', true);
        await setCervezas(listaCervezas);
        setLoading(false);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);

    const agregarCerveza = async (nuevaCerveza: Cerveza) => {        
        if(nuevaCerveza?.id! > 0){            
            let result = await updateCerveza(nuevaCerveza);
            fetchCervezas();
        }
        else{            
            let result = await insertCerveza(nuevaCerveza);
            fetchCervezas();
            //window.location.reload();  
            //setCervezas([...cervezas, nuevaCerveza]);
        }     
    }

    const uploadImage = (url: string) => {
       console.log(url);
    }

    const agregarNuevaCerveza = async () => {
        const emptyCerveza = {} as Cerveza;
    }

    const onChangeSelectMarca = async (event: SelectOption)  => {
        let filtro: Filter = filter;
        filtro.idMarca = event?.value;
        onChangeSelectUpdate(filtro);
    }

    const onChangeSelectEstilo = async (event: SelectOption)  => {      
        let filtro: Filter = filter;
        filtro.idEstilo = event?.value;
        onChangeSelectUpdate(filtro);
    }

    const onChangeSelectPais = async (event: SelectOption)  => {
        let filtro: Filter = filter;
        filtro.idPais = event?.value;
        onChangeSelectUpdate(filtro);
    }

    const onChangeSelectCiudad = async (event: SelectOption)  => {
        let filtro: Filter = filter;
        filtro.idCiudad = event?.value;
        onChangeSelectUpdate(filtro);
    }

    const onChangeSelectUpdate = async (filtro: Filter) => {
        setFilters(filtro);
        await fetchCervezas();
        paginate(1);
        setBeersPerPage(10);
    }

    
    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = cervezas.slice(indexOfFirstBeer, indexOfLastBeer);
    
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setCervezasActuales(currentBeers);
    }
    
    const renderCervezas = () => currentBeers?.map((v, i) => <CardCerveza data={v} key={i} agregarCerveza={agregarCerveza} uploadImage={uploadImage}></CardCerveza>)
    return (
    <div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 py-1 mt-2"><IoBeerOutline className="text-warning"></IoBeerOutline> Cervezas</h1>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" id="btnAgregarCerveza" className={`btn btn-success ${style.label}`}
                            data-bs-toggle="modal" data-bs-target="#modalCervezaABM"
                            onClick={agregarNuevaCerveza}><IoAddCircleOutline></IoAddCircleOutline> Nueva Cerveza</button>
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

        {cervezas.length>0 && !loading?
            <div>
                <div className={`container-fluid text-light ${style.cervezasMain}`}>
                    {renderCervezas()}                
                </div>
                <div className="container-fluid d-flex justify-content-center p-3 mt-2">
                    <Pagination elementsPerPage={beersPerPage} totalElements={cervezas} paginate={paginate}></Pagination>
                </div>
            </div>:
         <div className="container-fluid text-center w-100">
            <h3 className="text-light">Sin resultados</h3>
        </div>}
        
        <ModalCervezaABM data={undefined} agregarCerveza={agregarCerveza} uploadImage={uploadImage}></ModalCervezaABM>     
    </div>
    )
}