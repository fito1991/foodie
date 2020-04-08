import React, { Fragment, useState, useEffect } from 'react';
import Menu from './Menu';
import Hero from './Hero';
import ListFoods from './ListFoods';
import Categories from './Categories';
import Footer from './Footer';
import Page404 from './Page404';
// import axios from 'axios';

const Food = () => {

    /**
     * States para usar en la app
     * 
     * result guardara el resultado inicial de la primera respues del api al entrar a la página menú
     */
    const [category, setCategory] = useState(0);
    const [ categories, setCategories ] = useState([]);
    const [resultFoods, setResultFoods] = useState([]);
    // const [resultSearchFoods, setResultSearchFoods] = useState([]);
    const [searchFoods, setSearchFoods] = useState('');
    const [page, setPage] = useState(1);

    // actualizo el state para el input de búsqueda por nombre
    const handleChange = e => {
        //actualizar state
        setSearchFoods(e.target.value);
    }
    const responseAPI = async () => {

        if(category === 0 && searchFoods === ''){

            const urlAPI = `https://api.elaniin.dev/api/menu?page=${page}`;
            const response = await fetch(urlAPI);
            const result = await response.json();
    
            setResultFoods(result.data);
            
        }else if(searchFoods !== ''){
            const urlAPI = `https://api.elaniin.dev/api/menu?query=${searchFoods}`;
            const response = await fetch(urlAPI);
            const result = await response.json();

            setResultFoods(result.data);
        }else{
            const urlAPI = `https://api.elaniin.dev/api/menu?category=${category}`;
            const response = await fetch(urlAPI);
            const result = await response.json();
    
            setResultFoods(result.data);
        }

        // console.log(JSON.stringify(resultFoods));
    }

    const categoriesAPI = async () => {
        const urlAPI = 'https://api.elaniin.dev/api/categories';
        const response = await fetch(urlAPI);
        const result = await response.json();

        // console.log(result.data);
        setCategories(result.data);
    }

    useEffect(() => {
        
        responseAPI();
        categoriesAPI();


    }, [page, category, searchFoods]);

    // página anterior

    const prevPage = () => {
        const newCurrentPage = page - 1;

        if(newCurrentPage === 0) return;

        setPage(newCurrentPage);
    }
    
    // página siguiente

    const nextPage = () => {
        const newCurrentPage = page + 1;

        if(newCurrentPage > 2) return;

        setPage(newCurrentPage);
    }

    // filtra por categoria

    const searchCategory = (id) => {

        const newCategory = id;
        
        setSearchFoods(''); // Cuando se de click se limpiara el state del input search para que filtre por categoria
        setPage(1);
        setCategory(newCategory);
    }

    return ( 
        <Fragment>
            <div className="bg-black">
                <Menu 
                    position = 'fixed-top'
                    categoryNav = 'navbar-brand-menu'
                    color = 'text-white'
                    zIndex = 'zIndex-menu'
                />
                <Hero 
                    imageHamburger = 'hero_menu_hamburger.png'
                    imageYellow = 'hero_menu_yellow_3.svg'
                    backgroundColor = 'bg-transparent'
                    bgYellow = 'bg-yellow-hero-menu'
                    titleOne = 'Cada sabor'
                    titleTwo = 'es una nueva'
                    titleThree = 'experiencia'
                    subtitleOne = ''
                    subtitleTwo = ''
                />
            </div>
            <div className="row m-0 filter">
                <Categories
                    categories={categories}
                    searchCategory={searchCategory}
                    handleChange={handleChange}
                    searchFoods={searchFoods}
                />
            </div>
            { (resultFoods.length !== 0) ? (
                <ListFoods 
                    resultFoods={resultFoods}
                />
            ) : (
                <Page404 />
            )}

            <div className="row m-0">
                <div className="col-12 pt-3 pb-5 text-center">
                    { (page === 1 || category !== 0 || resultFoods.length === 0) ? null : (
                        <button 
                            className="btn btn-food DrukTextWideBold" 
                            type="button"
                            onClick={prevPage}
                        >&laquo; Anterior
                        </button>
                    )}

                    
                    { (page === 2 || category !== 0 || resultFoods.length === 0) ? null : (
                        <button 
                            className="btn btn-food DrukTextWideBold" 
                            type="button"
                            onClick={nextPage}
                        > Siguiente &raquo;
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default Food;