import {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

function Filme() {
    const[filme, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/{movie_id}", {
                params:{
                    
                    api_key:"4e6f5002f3c257f279dba8fbb03eb6c4",
                    language:"pt-BR",
                    // page:1,
                }
            })
            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,15))
        }
        loadFilmes();
    }, [])
    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filme.map((filme)=>{
                    return(
                        <article key={filme.id}>
                           <strong>{filme.title}</strong> 
                           <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                           {/* <Link to={`/filme/${filme.id}`}>Acessar</Link> */}
                        </article>
                    )
                })}
            </div>
        </div>
    );
}
export default Filme;
