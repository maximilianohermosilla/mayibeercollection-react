import { useEffect, useState } from "react";

interface PaginationProps{
    elementsPerPage: any;
    totalElements: any;
    paginate: any;
}

export default function Pagination({elementsPerPage, totalElements, paginate}: PaginationProps){
    const [paginationNumbers, setPagination] = useState<any[]>([]);
    let pageNumbers: any[] = [];

    for (let index = 1; index <= Math.ceil(totalElements.length / elementsPerPage); index++) {
        pageNumbers.push(index);        
    }

    useEffect(() => {        
        setPagination(pageNumbers);
    }, [])  
    
    return(
        <nav>
            <ul className="pagination">
                {paginationNumbers.map(number => 
                    <li key={number} className="page-item">
                        <a href="#" onClick={() => paginate(number)} className="page-link bg-secondary text-light">
                            {number}
                        </a>
                    </li>    
                )}
            </ul>
        </nav>
    )
}