import style from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={style.banner}>
            <Image src={'/img/cover.jpg'} 
            alt='cover' 
            fill={true}
            priority
            objectFit='cover'/>
            <div className={style.Text}> 
            <h1>Your Travel Partner </h1>
            <h3>Explore Your World with Us</h3>
            </div>
        </div>
    );
}