
const DynamicBlogPage = async ({ params }:
    { params: Promise<{ blogId: string }> }
) => {
    const { blogId } = await params;

    return (
        <div>dynamic blog {blogId}</div>
    )
}

export default DynamicBlogPage;