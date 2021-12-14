import Post from "./Post"

const posts = [
    {
        id: 1,
        username: 'Matty',
        profilePic: 'https://media.hardwiredmagazine.com/2017/10/Pink_Floyd_DSOTM.jpg',
        img: 'https://media.hardwiredmagazine.com/2017/10/Pink_Floyd_DSOTM.jpg',
        caption: 'Best album ITW!'
    },
    {
        id: 2,
        username: 'Matty',
        profilePic: 'https://media.hardwiredmagazine.com/2017/10/Pink_Floyd_DSOTM.jpg',
        img: 'https://media.hardwiredmagazine.com/2017/10/Pink_Floyd_DSOTM.jpg',
        caption: 'Best album ITW!'
    }
]

function Posts() {
    return (
        <div>
            {
                posts.map(post => (
                    <Post key={post.id} post={post.id} username={post.username} caption={post.caption}
                        profilePic={post.profilePic} img={post.img} caption={post.caption} />
                ))
            }
        </div>
    )
}

export default Posts
