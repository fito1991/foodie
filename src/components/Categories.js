import React from 'react';

const Categories = ({categories, searchCategory, handleChange, searchFoods}) => {
    

    return ( 
        <div className="bg-white col-12 pt-4">
            <div className="row mb-4">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <input 
                        className="form-control filter-input" 
                        placeholder="Busca tu platillo favorito" 
                        type="text" 
                        value={searchFoods}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <ul className="nav">
                            <li className="nav-item">
                                <a onClick={() => searchCategory(0)} className="nav-link text-color-black SyneBold link-menu-food hvr-overline-from-center" href="#!">Todas</a>
                            </li>
                            {categories.map(category => (
                                <li className="nav-item" key={category.id}>
                                    <a onClick={() => searchCategory(category.id)} id={category.id} className="nav-link text-color-black SyneBold link-menu-food hvr-overline-from-center" href="#!">{category.name}</a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Categories;