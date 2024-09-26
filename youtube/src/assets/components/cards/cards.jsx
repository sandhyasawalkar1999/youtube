import style from "./cards.module.css";

function Cards() {
  return (
    <div className={style.container}>
      <div className={style.MainContainer}>
        <div className={style.cardContainer}>
          <img
            src="https://www.enwallpaper.com/wp-content/uploads/2022/03/cocomelon-wallpaper-vobss-6.jpg"
            alt="img"
          />
        </div>
        <div className={style.TitleContainer}>
          <div className={style.LogoContainer}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.P7cmZPwU9ztWO9xViULs7gHaFj&pid=Api&P=0&h=180"
              alt="img"
            />
          </div>
          <div className={style.descContainer}>
            <a href="https://youtu.be/8sWurm5nKsI" > Best Kids Songs 2024</a>
            <p className={style.gray}>Kids Learning</p>
            <span className={style.gray}> 340k views 5 Month ago</span>
          </div>
        </div>
      </div>
      <div className={style.MainContainer}>
        <div className={style.cardContainer}>
          <img
            src="https://www.enwallpaper.com/wp-content/uploads/2022/03/cocomelon-wallpaper-vobss-6.jpg"
            alt="img"
          />
        </div>
        <div className={style.TitleContainer}>
          <div className={style.LogoContainer}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.P7cmZPwU9ztWO9xViULs7gHaFj&pid=Api&P=0&h=180"
              alt="img"
            />
          </div>
          <div className={style.descContainer}>
          <a href="https://youtu.be/8sWurm5nKsI" > Best Kids Songs 2024</a>
          <p className={style.gray}>Kids Learning</p>
            <span className={style.gray}> 340k views 5 Month ago</span>
          </div>
        </div>
      </div>
      <div className={style.MainContainer}>
        <div className={style.cardContainer}>
          <img
            src="https://www.enwallpaper.com/wp-content/uploads/2022/03/cocomelon-wallpaper-vobss-6.jpg"
            alt="img"
          />
        </div>
        <div className={style.TitleContainer}>
          <div className={style.LogoContainer}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.P7cmZPwU9ztWO9xViULs7gHaFj&pid=Api&P=0&h=180"
              alt="img"
            />
          </div>
          <div className={style.descContainer}>
          <a href="https://youtu.be/8sWurm5nKsI" > Best Kids Songs 2024</a>
          <p className={style.gray}>Kids Learning</p>
            <span className={style.gray}> 340k views 5 Month ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
