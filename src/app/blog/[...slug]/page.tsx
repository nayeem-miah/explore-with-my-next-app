
const CatchAllRoutes = async ({ params }:
    {
        params: Promise<{ slug: string[] }>
    }
) => {
    console.log(await params);
    return (
        <div>Catch All Routes</div>
    )
}

export default CatchAllRoutes