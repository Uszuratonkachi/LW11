import './../css/Main_parent.css';
import React from "react";
import Main from "./Main";

import services from './../img/services.png';
import property from './../img/property.png';
import electronics from './../img/electronics.png';
import home from './../img/home.png';
import work from './../img/work.png';
import style from './../img/moda.png';
import kids from './../img/kids.png';
import hobby from './../img/hobbi.png';
import transport from './../img/transport.png';
import animals from './../img/animals.png';
import discount from './../img/discount.png';
import bikes from './../img/bikes.png';
import strollers from './../img/strollers.png';
import building from './../img/building.png';

class Main_parent extends React.Component {
    render() {
        return (
            <div className='items'>
                <div className='mainTitle'>Главные рубрики</div>
                <div className="innerItems">
                    <Main img={services} name="Услуги"/>
                    <Main img={property} name="Недвижимость"/>
                    <Main img={electronics} name="Электроника"/>
                    <Main img={home} name="Дом и сад"/>
                    <Main img={work} name="Работа"/>
                    <Main img={style} name="Мода и стиль"/>
                    <Main img={kids} name="Детский мир"/>
                    <Main img={hobby} name="Хобби, отдых и спорт"/>
                    <Main img={transport} name="Транспорт"/>
                    <Main img={animals} name="Животные"/>
                    <Main img={discount} name="Отдам даром"/>
                    <Main img={bikes} name="Велосипеды"/>
                    <Main img={strollers} name="Коляски"/>
                    <Main img={building} name="Строительные услуги"/>
                </div>
            </div>
        );
    }
}

export default Main_parent;