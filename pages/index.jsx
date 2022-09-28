import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '../components/Header';
import MenuSlider from '../components/MenuSlider';
import PopularCategory from '../components/PopularCategory';
import style from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={style.page_container}>
            <Header />
            <main className={style.content_wrapper}>
                <MenuSlider />
                <PopularCategory />
            </main>
        </div>
    );
};

export default Home;
