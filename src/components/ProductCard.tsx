import Image  from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function ProductCard ( { carName, imgSrc} : { carName:string, imgSrc:string} ) {



    return (
        <InteractiveCard contentName={carName}>
            <div className='w-full h-[70%] relative round-t-lg ' >
                <Image src={imgSrc}
                alt ='Product Picture'
                fill = {true}
                className='object-cover round-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px]'>{carName}</div>
        </InteractiveCard>
    )
}