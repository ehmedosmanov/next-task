import Links from './Links'

const Navbar = () => {

    return (
        <nav className='py-2 bg-black/80 text-white'>
            <div className="px-8 py-4 wrapper">
                <div className="navbar flex justify-between items-center">
                    <div className='text-2xl'>
                        <h2>Logo</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Links />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar