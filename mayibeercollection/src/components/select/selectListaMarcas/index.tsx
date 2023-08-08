import React, { useEffect, useState } from 'react'
import { Marca } from '../../../interfaces/marca';
import { getMarcas } from '../../../services/apiMarca';
import Select from 'react-select'

interface SelectedProps {
  selectedOption: any;
}

export default function SelectListaMarcas({ selectedOption }: SelectedProps){
    const [marcas, setMarcas] = useState<Marca[]>([]);
    const [marca, setMarca] = useState<any>();

    const fetchMarcas = async () => {
        let lista: Marca[] = await getMarcas();
        setMarcas(lista);
        //console.log("fetch")
        setMarca({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
    }

    useEffect(() => {
      //console.log("use effect")
      //console.log('objecto', selectedOption)
        if (selectedOption == undefined){
          setMarca({ value: '0', label: 'Selecccionar...'}); 
        }
        setMarca({ value: selectedOption?.id || '0', label: selectedOption?.nombre || 'Selecccionar...'});        
        fetchMarcas();
    }, []);
    
    //console.log('objecto', selectedOption)
    //console.log('marca', marca)
    const setUserChoice = (choice: any) => {
      setMarca({value: choice.value, label: choice.label});
    };  

    return <Select options={marcas?.map(m => ({ value: m.id, label: m.nombre }))} value={marca} onChange={(choice) => setUserChoice(choice)}></Select>
}