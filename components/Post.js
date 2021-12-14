import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

function Post({ id, username, profilePic, img, caption }) {
    return (
        <div className='bg-white m-7 border rounded-sm'>
            {/*Header*/}
            <div className="flex items-center p-5">
                <img src={profilePic} alt='profile' className='rounded-full h-12 w-12 border p-1 mr-3' />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>
            {/*Image*/}
            {/*Buttons*/}
            {/*Captions*/}
            {/*Comments*/}
            {/*Input Box*/}
        </div>
    )
}

export default Post
