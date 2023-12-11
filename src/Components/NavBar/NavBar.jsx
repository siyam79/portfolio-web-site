import { NavLink } from "react-router-dom";

const NavBar = () => {

    const navBar = <>
        <li className="mx-2 font-medium"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar px-6 w-full  bg-slate-200 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}

                        </ul >
                    </div >
                    <div>

                        <h1 className="lg:w-24 lg:block hidden ">SIYAM </h1>
                    </div>
                </div >




                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <h1 className="lg:w-24 lg:hidden ">SIYAM </h1>
                </div>
            </div >
        </div>
    );
};

export default NavBar;