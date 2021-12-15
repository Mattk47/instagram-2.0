import Posts from './Posts'
import Stories from './Stories'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-1 
        md:max-w-3xl xl:grid-cols-3 xl:max-width-6xl mx-auto'>
            {/*Section*/}
            <section className='col-span-2'>
                {/*Stories*/}
                <Stories />
                {/*Posts*/}
                <Posts />
            </section>

            {/*Section*/}
            <section className='hidden xl:inline-grid md:col-span-1'>
                <div className='fixed top-20'>
                    <MiniProfile />
                    <Suggestions />
                </div>
            </section>
        </main>
    )
}

export default Feed
