import './header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <header>
               <Link className="logo" to="/">AppFilmes</Link>
               <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
            </header>
        </div>
    )
}
export default Header;