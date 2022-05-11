import React from "react";
import Film from "./Film";

const FilmList = ({filmsArray}, index) => {
    const filmArrayNodes = filmsArray.map(film =>{
        return (
            <Film>
                    <a href={film.url} target="_blank" > {film.name} </a>   
            </Film>
        )
    })

    return(
        <>
            <ul>
                <li key={index}>
                    {filmArrayNodes} 
                </li>
            </ul>
            
        </>
    )

}



export default FilmList