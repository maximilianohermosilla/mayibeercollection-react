import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { getCiudades } from '../../../services/apiCiudad';
import { Ciudad } from '../../../interfaces/ciudad';

interface SelectedProps {
  selectedOption: any;
}

export default function SelectListaCiudades({ selectedOption }: SelectedProps){  
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);
  const [ciudad, setCiudad] = useState<any>();
  
  const fetchCiudades = async () => {
      let lista: Ciudad[] = await getCiudades();
      setCiudades(lista);
      setCiudad({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});    
  }

  useEffect(() => {
      fetchCiudades();
      setCiudad({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});    
  }, []);

  const setUserChoice = (choice: any) => {
    setCiudad({value: choice.value, label: choice.label});
  };  

  return <Select options={ciudades?.map(m => ({ value: m.id, label: m.nombre }))} value={ciudad} onChange={(choice) => setUserChoice(choice)}></Select>
}