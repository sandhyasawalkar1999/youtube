import style from './navbar.module.css';

function Navbar(){

    return(
        <div className={style.mainContainer}>
          <div  className={style.NavContainer1}>
            <ul>
                <li>
                <a href="#"><i className="fa-solid fa-bars"></i></a>
                </li>
                <li>
                <a href="#"><i className="fa-brands fa-youtube youtube"></i></a>
                </li>
            </ul>
           
          </div>
          <div className={style.NavContainer2}>
            <ul>
                <li>
                <input type ="text" placeholder="Search..." />
                </li>
                <li>
                <a href="#"><i className="fa-solid fa-microphone"></i></a>
                </li>
            </ul>  
          </div>
          <div className={style.NavContainer3}>
            <ul>
                <li>
                <a href="#"><i className="fa-solid fa-video"></i></a>
                </li>
                <li>
                <a href="#"><i className="fa-solid fa-bell"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa-solid fa-user"></i>
                   
                    </a>
                </li>
            </ul>  
          </div>
        </div>
    );
};

export default Navbar;