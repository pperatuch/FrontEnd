import style from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'


export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className={style.menucontainer}>
            <Image src='/img/logo.png' className={style.logoimg} alt='logo' width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Select Car' pageRef='/car'/>
            <TopMenuItem title='Reservations' pageRef='/reservations'/>
            <TopMenuItem title='About' pageRef='/about'/>
            <div className='flex flex-row absolute right-0 h-full'>
            <TopMenuItem title='Cart' pageRef='/cart'/>
            {
                session? <Link href="api/auth/signout"> 
                <div className='flex item-center  h-full px-2 py-2.5 text-cyan-600 text-m '> Sign-Out of {session.user?.name} </div> 
                </Link>
                : <Link href="api/auth/signin"> 
                <div className='flex item-center  h-full px-2 py-2.5 text-cyan-600 text-m '> Sign-In </div>
                </Link>
            }
            </div>
        </div>
    )
}