import './../css/Items.css';

import React from 'react';
import {Link} from "react-router-dom";

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

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <h1 className="tovers">Товары</h1>
                <Link to="/" className="back"><p className="back">Назад</p></Link>
                <div class="my_page">
                    <div className="block-for-list">
                        <p className="currency">Строительные услуги</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={building} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Коляски</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={strollers} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Велосипеды</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={bikes} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Отдам даром</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={discount} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Животные</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={animals} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Транспорт</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={transport} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Хобби, отдых и спорт</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={hobby} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Детский мир</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={kids} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Услуги</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={services} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Недвижимость</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={property} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Электроника</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={electronics} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Дом и сад</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={home} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Работа</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={work} className="img1"/>
                        {button}
                    </div>

                    <div className="block-for-list">
                        <p className="currency">Мода и стиль</p>
                        <p className="price">1$</p>
                        <p className="desription_course">Welcome to our company!</p>
                        <img src={style} className="img1"/>
                        {button}
                    </div>
                </div>
            </div>
        );
    }
}
function LoginButton(props) {
    return (
        <button className="bttton" onClick={props.onClick}>Заказать</button>
    );
}

function LogoutButton(props) {
    return (
        <button className="bttton" onClick={props.onClick}>
            Оформлен
        </button>

    );
}

export default Items;