import style from './productcard.module.css'
import Image  from 'next/image'

export default function ProductCard ( { carName, imgSrc} : { carName:string, imgSrc:string} ) {
    return (
        <div className='w-1/5 h-[300px] rounded-lg shadow-lg'>
            <div className='w-full h-[70%] relative round-t-lg' >
                <Image src={imgSrc}
                alt ='Product Picture'
                fill = {true}
                className='object-cover round-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px]'>{carName}</div>
        </div>
    )
}