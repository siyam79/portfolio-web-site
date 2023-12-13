

const NavBar = () => {

    const navBar = <>

        <li className="text-xl font-mono "> <a href="#home"> Home</a> </li>
        <li className="text-xl font-mono "> <a href="#about"> About</a></li>
        <li className="text-xl font-mono ">  <a href="#experince">Experince</a></li>
        <li className="text-xl font-mono "> <a href="#skills">Skills</a></li>
        <li className="text-xl font-mono "> <a href="#projects">Projects</a></li>
        <li className="text-xl font-mono "> <a href="#education">Education</a></li>
        <li className="text-xl font-mono "> <a href="#contact">Contact</a></li>

    </>

    return (
        <div className="sticky top-0 ">
            <div className="navbar px-6 w-full  sticky top-0 bg-slate-200 ">
                <div className="navbar-start sticky top-0">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}

                        </ul >
                    </div >
                    <div>

                        <h1 className="lg:w-24 lg:block hidden text-2xl font-mono text-[#00008B] ">SI<span className="text-cyan-600 ">YA</span>M</h1>
                    </div>
                </div >

                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <h1 className="lg:w-24 lg:hidden text-xl font-mono text-[#00008B] ">SI<span className="text-cyan-700 ">YA</span>M</h1>
                </div>
            </div >
        </div>
    );
};

export default NavBar;