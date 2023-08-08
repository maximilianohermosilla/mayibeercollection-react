import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { getCiudades } from '../../../services/apiCiudad';
import { Ciudad } from '../../../interfaces/ciudad';
import style from "../style.module.css";

interface SelectedProps {
  selectedOption: any;
  onChangeSelect: any;
  isFilter: boolean;
}

export default function SelectListaCiudades({ selectedOption, onChangeSelect, isFilter }: SelectedProps){  
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);
  const [ciudad, setCiudad] = useState<any>();
  
  const fetchCiudades = async () => {
      let lista: Ciudad[] = await getCiudades();if (isFilter){
        lista.unshift({ id: 0, nombre: 'Todas las ciudades'});
      }
      setCiudades(lista);
      setCiudad({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});    
  }

  useEffect(() => {
      fetchCiudades();
      setCiudad({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});    
  }, []);

  const setUserChoice = (choice: any) => {
    setCiudad({value: choice.value, label: choice.label});
    onChangeSelect({value: choice.value, label: choice.label});
  };  

  return <Select options={ciudades?.map(m => ({ value: m.id, label: m.nombre }))} value={ciudad} onChange={(choice) => setUserChoice(choice)} className={`text-primary ${style.divSelect}`}></Select>
}