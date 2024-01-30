import React from "react";

const SearchBar = () => {
    return (
        <div className="row div-search-bar">
            <div className="col-11">
                <input
                    className="search-bar"
                    type="text" name="Search" id="search" placeholder="¿Que quieres solucionar hoy?">
                </input>
            </div>
            <div className="col-1">
            </div>
        </div>
    );
}

export default SearchBar;