import { Cerveza } from "../interfaces/cerveza";

const BASE_URL: string = "https://localhost:7011/Cerveza";

export const getCervezas = async (IdMarca: number, IdEstilo: number, IdCiudad: number, IdPais: number, fullresponse: boolean): Promise<Cerveza[]> => {
    const url = `${BASE_URL}?IdMarca=${IdMarca}&IdEstilo=${IdEstilo}&IdCiudad=${IdCiudad}&IdPais=${IdPais}&fullresponse=${fullresponse}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Cerveza[] = await response.json();
    console.log(data);
    return data;
}