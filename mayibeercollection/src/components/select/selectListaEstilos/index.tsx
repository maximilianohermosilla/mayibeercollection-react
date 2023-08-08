import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { getEstilos } from '../../../services/apiEstilo';
import { Estilo } from '../../../interfaces/estilo';
import style from "../style.module.css";

interface SelectedProps {
  selectedOption: any;
  onChangeSelect: any;
  isFilter: boolean;
}

export default function SelectListaEstilos({ selectedOption, onChangeSelect, isFilter }: SelectedProps){
  const [estilos, setEstilos] = useState<Estilo[]>([]);
  const [estilo, setEstilo] = useState<any>();

    const fetchEstilos = async () => {
      let lista: Estilo[] = await getEstilos();if (isFilter){
        lista.unshift({ id: 0, nombre: 'Todos los estilos'});
      }
      setEstilos(lista);
      setEstilo({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
    }

    useEffect(() => {
      setEstilo({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
      fetchEstilos();
    }, []);
    
    const setUserChoice = (choice: any) => {
      setEstilo({value: choice.value, label: choice.label});
      onChangeSelect({value: choice.value, label: choice.label});
    };  

    return <Select options={estilos?.map(m => ({ value: m.id, label: m.nombre }))} value={estilo} onChange={(choice) => setUserChoice(choice)} className={`text-primary ${style.divSelect}`}></Select>
}