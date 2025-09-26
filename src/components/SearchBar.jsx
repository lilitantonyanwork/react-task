import {useState} from "react";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }){

    const [searchOpen, setSearchOpen] = useState(false);
    const toggleSearch = () => {
        setSearchOpen((open) => !open);
    };
    const clearSearch = () => {
        setSearchTerm("");
        setSearchOpen(false);
    }
    return(
        <div className='header-search'>
            <button className={`search-open ${searchOpen ? "hide" : ""}`} onClick={toggleSearch}></button>
            <form action=""
                  className={`search-form ${searchOpen ? "show" : ""}`}
                 >
                <input type="text"
                       className='search'
                       value={searchTerm}
                       placeholder="Search..."
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className="search-close"
                        onClick={(e) => {
                            e.preventDefault();
                            clearSearch();
                        }}
                >

                </button>
            </form>
        </div>
    )
}
export default SearchBar;