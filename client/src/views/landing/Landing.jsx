import style from './Landing.module.css';

function Landing() {
  return (
    <div className={style.container}>
       <div className={style.image}>
        <div className={style.content}>
        <button onClick={() => window.location.href = '/home'}>START</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;