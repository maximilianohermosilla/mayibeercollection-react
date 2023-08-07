import { Cerveza } from "../../interfaces/cerveza";

interface FormCervezaProps {
    data?: Cerveza;
}

export default function FormCerveza({ data }: FormCervezaProps) {
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-6">
                        Nombre<input type="text" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.nombre} />
                        Estilo<input type="text" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.estilo?.nombre} />
                        País<input type="text" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.ciudad?.pais?.nombre} />
                        Ciudad<input type="text" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.ciudad?.nombre} />
                    </div>
                    <div className="col-6">
                        Alcohol<input type="number" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.alcohol} />
                        Ibu<input type="number" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.ibu} />
                        Contenido<input type="number" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.contenido} />
                        Observaciones<input type="text" placeholder="Nombre..." name="nombre" className="form-control rounded-0" value={data?.observaciones} />
                    </div>
                </div>
            </form>
        </div>
    )
}
