import './../css/Search.css';
import {NavLink} from "react-router-dom";
let Search;

Search = () =>
{
    return(
        <div className='search'>
            <input className='searchInput' placeholder='3 310 468 объявлений'/>
            <input className='placeInput' placeholder='Весь Казахстан'/>
            <NavLink to="/items" className="ok1">
                <div className='ok'>Поиск<i className="fa-solid fa-magnifying-glass"></i></div>
            </NavLink>
        </div>
    );
};

export default Search;