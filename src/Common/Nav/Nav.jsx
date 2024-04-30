import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Nav = () => {
  const { user, logOut, loader } = useContext(AuthContext);

  console.log(user?.photoURL);

  const links = (
    <>
      <li className="btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#FF5956] text-xl font-medium">
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li className="btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#FF5956] text-xl font-medium">
        <NavLink to={'/all_tourists_spot'}>All Tourists Spot</NavLink>
      </li>
      <li className="btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#FF5956] text-xl font-medium">
        <NavLink to={'/add_tourists_spot'}>Add Tourists Spot</NavLink>
      </li>
      <li className="btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#FF5956] text-xl font-medium">
        <NavLink to={'/my_list'}>My LIst</NavLink>
      </li>
    </>
  );

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const savedTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', savedTheme);
  }, [theme]);

  const handleTheme = e => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  console.log(theme);

  return (
    <div>
      <div className="navbar container mx-auto my-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
              data-aos="zoom-in"
            >
              {links}
              {!user && (
                <li className="lg:hidden flex-col items-center justify-center">
                  <Link
                    to={'/register'}
                    className="btn w-auto ml-5 h-auto bg-transparent hover:text-[#FF5956] border-none shadow-none hover:bg-transparent mr-6 text-[16px] font-semibold duration-300"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={'/login'}
                    className="btn rounded-full w-auto h-auto min-h-0 hover:bg-[#2D2330] bg-[#FF5956] text-white font-semibold px-6 py-4 text-[16px] duration-500"
                  >
                    Log in
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl" data-aos="zoom-in">
            Tour
            <span className="text-[#FF5956] text-2xl font-semibold">
              Trekker
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className=" text-xl font-medium bg-transparent flex items-center"
            data-aos="zoom-in"
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === 'light' ? false : true}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {loader ? (
            <div className="flex gap-4 items-center">
              <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
          ) : user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-auto h-auto bg-transparent rounded-full border-none shadow-none hover:bg-transparent"
              >
                <div>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-[#FF5956] ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          user?.photoURL ||
                          'https://i.ibb.co/wMhfdTN/user-profile-icon.png'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <h3>{user?.displayName || 'N/A'}</h3>
                </li>
                <li>
                  <Link to={'/login'} onClick={() => logOut()}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden lg:flex">
              <Link
                to={'/register'}
                className="btn w-auto h-auto bg-transparent hover:text-[#FF5956] border-none shadow-none hover:bg-transparent mr-6 text-[16px] font-semibold duration-300"
              >
                Sign Up
              </Link>
              <Link
                to={'/login'}
                className="btn rounded-full w-auto h-auto min-h-0 hover:bg-[#2D2330] bg-[#FF5956] text-white font-semibold px-6 py-4 text-[16px] duration-500"
              >
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
