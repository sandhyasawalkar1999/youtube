import style from './sidebar.module.css';

function Sidebar(){

    return(
        <>
        <div className={style.sidebar}>
        <div  className={style.sidebar2}>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-house"></i> Home</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-bolt"></i>  Shorts</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-clapperboard"></i>Subscriptions</a>
        </div>
        </div>
        <hr />
        <div  className={style.sidebar2}>
        <div className={style.home}>
        <a href="#">You <i className="fa-solid fa-angle-right"></i></a>
        </div>
      
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-address-card"></i> Your channel</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-clock"></i> History</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-circle-play"></i> Playlists</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-video"></i> Your videos</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-lightbulb"></i> Your cources</a>
        </div>
        <div className={style.home}>
            <a href="#"> <i className="fa-regular fa-thumbs-up"></i> Liked videos</a>
        </div>
        </div>
        <hr />

        <div  className={style.sidebar2}>
        <div className={style.home}>
        <a href="#">Explore <i className="fa-solid fa-angle-right"></i></a>
        </div>
      
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-fire"></i> Treding</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-cart-plus"></i> Shopping</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-circle-play"></i> Music</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-bullseye"></i> Live</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-gamepad"></i> Gaming</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-newspaper"></i> News</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-trophy"></i> Sports</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-regular fa-lightbulb"></i> Course</a>
        </div>
        <div className={style.home}>
            <a href="#"><i className="fa-solid fa-shirt"></i> Fashion & Beauty</a>
        </div>
        <div className={style.home}>
            <a href="#"> <i className="fa-solid fa-hand-holding-droplet"></i> Poducts</a>
        </div>
        </div>
        <hr />
        

        </div>

      
        
        </>
    );
};

export default Sidebar;