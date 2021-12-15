function SuggestedProfile({ avatar, username, companyName }) {
    return (
        <div className="flex items-center justify-between mt-3">

            <img className='w-10 h-10 p-[2px] rounded-full' src={avatar} alt="" />

            <div className='flex-1 ml-4'>
                <h2 className="font-semibold text-sm">{username}</h2>
                <h3 className='text-sm text-gray-400'>Works at {companyName}</h3>
            </div>

            <button className='text-blue-400 text-sm font-bold'>Follow</button>

        </div>
    )
}

export default SuggestedProfile
