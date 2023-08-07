import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { getEstilos } from '../../../services/apiEstilo';
import { Estilo } from '../../../interfaces/estilo';

interface SelectedProps {
  selectedOption: any;
}

export default function SelectListaEstilos({ selectedOption }: SelectedProps){
  const [estilos, setEstilos] = useState<Estilo[]>([]);
  const [estilo, setEstilo] = useState<any>();

    const fetchEstilos = async () => {
      let lista: Estilo[] = await getEstilos();
      setEstilos(lista);
      setEstilo({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
    }

    useEffect(() => {
      setEstilo({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
      fetchEstilos();
    }, []);
    
    const setUserChoice = (choice: any) => {
      setEstilo({value: choice.value, label: choice.label});
    };  

    return <Select options={estilos?.map(m => ({ value: m.id, label: m.nombre }))} value={estilo} onChange={(choice) => setUserChoice(choice)}></Select>
}