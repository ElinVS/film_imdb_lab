import React, {useState} from "react";

const FilmForm = ({onFilmSubmit}) => {

    const [film, setFilm] = useState('')
    const [url, setUrl] = useState('')

    const handleFilmChange = (event) => {
        setFilm(event.target.value)
    }
    
    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const filmToSubmit = film.trim()
        const urlToSubmit = url.trim()
        if(!filmToSubmit || !urlToSubmit){     //if no value of wither of these. an empty string is falsy
            return 
        }
        onFilmSubmit({film: filmToSubmit, url: urlToSubmit})
        setFilm("")
        setUrl("")
        
    }




return(
    <form onSubmit={handleFormSubmit}>
  <input 
    type="text"
    placeholder="Film Title"
    value={film}
    onChange={handleFilmChange}
  />
  <input 
       type="url" 
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required
       value={url}
       onChange={handleUrlChange}
       />
  <input 
    type="submit"
    value="Post"
  />
</form>

)
}






export default FilmForm;