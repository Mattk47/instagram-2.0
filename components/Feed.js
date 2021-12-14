import Stories from './Stories'
function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-1 
        md:max-w-3xl xl:grid-cols-3 xl:max-width-6xl mx-auto'>
            {/*Section*/}
            <section className='col-span-2'>
                {/*Stories*/}
                <Stories />
                {/*Posts*/}
            </section>

            {/*Section*/}
            <section>
                {/*Mini profile*/}
                {/*Suggestions*/}
            </section>
        </main>
    )
}

export default Feed
