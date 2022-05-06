import './../css/Header.css';
import logo from './../img/logo.png';
import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
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
        let onWrapper = function (){
            let wrapper = document.getElementById('wrapper');
            wrapper.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };

        let offWrapper = function (){
            let wrapper = document.getElementById('wrapper');
            wrapper.style.display = 'none';
            document.body.style.overflow = 'scroll';
        };


        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <header>
                <a href="https://www.olx.kz/" target="_blank"><img src={logo}/></a>
                <div className='head'>
                    <div className='div message' onClick={onWrapper}>
                        <i className="fa-regular fa-comment"></i>
                        Сообщение
                    </div>
                    <div id="wrapper">
                        <div id="close" onClick={offWrapper}>x</div>
                        <h1 className="hello">Здраствуйте, уважаемый гость!</h1>
                        <p className="msg">Вы можете отправить нам свое сообщение:</p>

                        <p className="text11">Ваше имя:</p>
                        <input className="input"/>
                        <p className="text111">Ваш электронный адрес:</p>
                        <input className="input1"/>
                        <p className="text22">Ваше сообщение:</p>
                        <textarea className="input2"/>

                        <button onClick={offWrapper} className="send-mess">Отправить</button>
                    </div>

                    <div className='div selected'>
                        <i className="fa-regular fa-heart"></i>
                    </div>

                    <div className='div profile'>
                        <form action="#">
                            <label htmlFor="lang">Language</label>
                            <select name="languages" id="lang">
                                <option value="javascript">RU</option>
                                <option value="php">ENG</option>
                                <option value="java">KAZ</option>
                            </select>
                        </form>
                    </div>
                    {button}
                </div>
            </header>
        );
    }
}
function LoginButton(props) {
    return (
        <button className="apply" onClick={props.onClick}>
            Подать объявление
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button className="apply" onClick={props.onClick}>
            Объявление отправлено
        </button>
    );
}
export default Header;