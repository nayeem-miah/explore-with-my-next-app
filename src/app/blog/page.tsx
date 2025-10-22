interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const BlogPage = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    console.log(posts);


    return (
        <div>
            <h3 className="text-4xl text-center">Blog Page</h3>
            <div className="grid grid-cols-3 gap-6">
                {
                    posts?.map((post: IPost) => <div
                        className="bg-teal-950 p-4 "
                        key={post.id}>
                        <h3 className="text-2xl">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default BlogPage 