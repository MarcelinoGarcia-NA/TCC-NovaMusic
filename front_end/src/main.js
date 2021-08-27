
import './materialize/css/materialize.css';
import './style.css';
import Logo from './images/logo.png';

function Main() {
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">
                        <img class="logo" src={Logo} alt="" />
                    </a>
                                
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="">Bandas</a></li>
                        <li><a href="">Coral</a></li>
                        <li><a href="">Duplas</a></li>
                        <li><a href="">Grupos</a></li>
                        <li><a href="">Locutores</a></li>
                        <li><a href="">Solos</a></li>
                        <li>
                            <a class="waves-effect waves-light btn-small">
                                <i class="large material-icons">account_circle</i>
                Entrar</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Main;
