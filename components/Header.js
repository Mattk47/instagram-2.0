import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'

import {
    HomeIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/*Left*/}
                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src='https://links.papareact.com/ocw'
                        layout='fill'
                        objectFit='contain' />
                </div>
                <div className='relative lg:hidden flex-shrink-0 w-10  cursor-pointer'>
                    <Image src='https://links.papareact.com/jjm'
                        layout='fill'
                        objectFit='contain' />
                </div>
                {/*Middle - search*/}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center
                    pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input type='text'
                            placeholder='Search'
                            className='bg-gray-50 block w-full pl-10 
                    sm:text-sm border-gray-300 rounded-md 
                    focus:ring-black focus:border-black' />
                    </div>
                </div>
                {/*Right*/}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className="navButton" />
                    <MenuIcon className="h-6 w-10 md:hidden cursor-pointer" />

                    <div className='relative navButton'>
                        <PaperAirplaneIcon className="rotate-45" />
                        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
                            3</div>

                    </div>
                    <PlusCircleIcon className="navButton" />
                    <UserGroupIcon className="navButton" />
                    <HeartIcon className="navButton" />

                    <img src='https://media.hardwiredmagazine.com/2017/10/Pink_Floyd_DSOTM.jpg' alt='profile pic' className='rounded-full h-10 w-10 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Header
