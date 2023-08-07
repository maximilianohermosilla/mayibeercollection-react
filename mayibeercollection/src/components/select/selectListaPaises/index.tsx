import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Pais } from '../../../interfaces/pais';
import { getPaises } from '../../../services/apiPais';

interface SelectedProps {
  selectedOption: any;
}

export default function SelectListaPaises({ selectedOption }: SelectedProps){
  const [paises, setPaises] = useState<Pais[]>([]);
  const [pais, setPais] = useState<any>();

    const fetchPaises = async () => {
        let lista: Pais[] = await getPaises();
        setPaises(lista);
        setPais({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});    
    }

    useEffect(() => {
        fetchPaises();
        setPais({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});    
    }, []);
  
    const setUserChoice = (choice: any) => {
      setPais({value: choice.value, label: choice.label});
    };  

    return <Select options={paises?.map(m => ({ value: m.id, label: m.nombre }))} value={pais} onChange={(choice) => setUserChoice(choice)}></Select>
}