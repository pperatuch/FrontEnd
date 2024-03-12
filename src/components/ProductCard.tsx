import style from './productcard.module.css'
import Image  from 'next/image'

export default function ProductCard() {
    return (
        <div className={style.card}>
            <div className={style.cardimg} >
                <Image src={'/img/car1.jpg'}
                alt ='Product Picture'
                fill = {true}
                objectFit='cover'
                />
            </div>
            <div className={style.cardtext}>Car1</div>
        </div>
    )
}