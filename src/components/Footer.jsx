import './../css/Footer.css';
import logo from './../img/footerLogo.png';

let Footer;

Footer = () =>
{
    return(
        <footer>
            <img src={logo}/>
            <div className='text'>
                Крупнейший онлайн-сервис объявлений Казахстана<br />
                Все онлайн-объявления Казахстана на OLX - здесь вы найдете то, что искали! Нажав на кнопку "Подать объявление", вы<br /> сможете разместить объявление на любую тематику легко и быстро.<br />
                С помощью сервиса OLX вы сможете купить или продать из рук в руки практически все, что угодно.
            </div>
            <div className='contacts'>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <p>Сообщества OLX.kz в социальных сетях</p>
        </footer>
    );
};

export default Footer;