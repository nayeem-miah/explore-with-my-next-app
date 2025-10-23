import { IPost } from "@/types/types";

const PostPage = async () => {
    // ? fetching next level data
    const res = await fetch("http://localhost:5000/posts", {
        // ! do not use
        // cache: "force-cache",
        cache: "no-store",

        // * auto rebuild and redeploy
        // next: {
        //     // revalidate: 5,
        //     tags: ['products']
        // }
    });
    const posts = await res.json();
    // console.log(posts);
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                posts?.map((post: IPost) =>
                    <div
                        key={post.id}
                        className="bg-teal-950 p-4"
                    >

                        <h3 className="text-2xl">{post.title}</h3>
                    </div>
                )
            }
        </div>
    )
}

export default PostPage