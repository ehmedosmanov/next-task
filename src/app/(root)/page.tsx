import Link from "next/link"

const Home = () => {
    return (
        <section className="h-screen text-center justify-center items-center flex">
            <div className="">
                <h1 className="text-5xl mb-2 font-bold">Next Js Task</h1>
                <Link className="mt-2 text-[15px]" href={'/products'}>Go to Products Page(SSG)</Link>
            </div>
        </section>
    )
}

export default Home