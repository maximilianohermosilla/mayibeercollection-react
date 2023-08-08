import React, { useEffect, useState } from 'react'
import { Marca } from '../../../interfaces/marca';
import { getMarcas } from '../../../services/apiMarca';
import Select from 'react-select'
import style from "../style.module.css";

interface SelectedProps {
  selectedOption: any;
  onChangeSelect: any;
  isFilter: boolean;
}

export default function SelectListaMarcas({ selectedOption, onChangeSelect, isFilter }: SelectedProps){
    const [marcas, setMarcas] = useState<Marca[]>([]);
    const [marca, setMarca] = useState<any>();

    const fetchMarcas = async () => {
        let lista: Marca[] = await getMarcas();
        if (isFilter){
          lista.unshift({ id: 0, nombre: 'Todas las marcas'});
        }
        setMarcas(lista);
        setMarca({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
    }

    useEffect(() => {
        setMarca({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
        fetchMarcas();
    }, []);
    
    const setUserChoice = (choice: any) => {
      setMarca({value: choice.value, label: choice.label});
      onChangeSelect({value: choice.value, label: choice.label});
    };  

    return <Select options={marcas?.map(m => ({ value: m.id, label: m.nombre }))} value={marca} onChange={(choice) => setUserChoice(choice)} className={`text-primary ${style.divSelect}`}></Select>
}