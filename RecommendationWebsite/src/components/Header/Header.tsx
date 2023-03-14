import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/logo.png.webp';
import noAvartar from 'src/assets/noAvartar.png';
import Popover from '../Poppover';

function Header() {
  const isActive = false;
  const isAuthenticated = true;
  return (
    <div className="mx-4 my-2">
      <div className="mb-2">
        <div className="flex justify-end">
          <Popover
            className="flex translate-y-[3px] cursor-pointer items-center pt-1 pb-2 text-sm text-black hover:text-gray-500 md:text-xs"
            renderPopover={
              <div className="relative rounded-sm border-gray-100 bg-white shadow-md ">
                <div className="flex flex-col py-2 px-3 pr-16">
                  <button className="py-3 px-2 text-xs hover:text-orange">Tiếng Việt</button>
                  <button className="py-2 px-2 text-xs hover:text-orange">English</button>
                </div>
              </div>
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <span className="mx-1 md:text-xs">Tiếng Việt</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Popover>
          {isAuthenticated && (
            <Popover
              className="ml-6 flex cursor-pointer items-center pt-1 pb-2 text-black hover:text-gray-100 md:text-xs"
              renderPopover={
                <div className="rounded-sm border-gray-100 bg-white shadow-md">
                  <Link to="/" className="block border-none bg-white py-3 px-4   text-left  text-black hover:text-cyan-500">
                    Tài khoản của tôi
                  </Link>
                  <Link to="" className="block border-none bg-white py-3 px-4  text-left text-black hover:text-cyan-500">
                    Đơn mua{' '}
                  </Link>
                  <Link to="" className="block border-none bg-white py-3 px-4   text-left text-black hover:text-cyan-500">
                    Đăng xuất
                  </Link>
                </div>
              }
            >
              <div className="mr-2 h-6 w-6 flex-shrink-0 ">
                <img
                  src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/99013175_1552654368248618_9221118823996850176_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rvhw4bTpP_EAX_zd18h&_nc_ht=scontent.fdad3-5.fna&oh=00_AfD8HvOgAyizYU0OyjCyPOmak_DENi_Nu8ON8VvIVwUDfw&oe=64146796"
                  alt="avatar"
                  className="h-full w-full rounded-full border-none object-cover"
                />
              </div>
              {/* <div>{profile?.email}</div> */}
            </Popover>
          )}
          {!isAuthenticated && (
            <div className="flex items-center">
              <Link to="/register" className="mx-3 capitalize hover:text-red-500 hover:opacity-80 md:text-xs md:hover:animate-bounce">
                Đăng ký
              </Link>
              <div className="h-5 translate-y-[2px] rotate-[20deg] border-r-[1px] border-gray-500"></div>
              <Link to="/login" className="mx-3 capitalize hover:text-red-500 hover:opacity-80 md:text-xs md:hover:animate-bounce">
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
      </div>
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-evenly">
          <Link to="/" className="flex items-center">
            <img src={Logo} className=" h-6 sm:h-9" alt=" Logo" />
          </Link>

          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="mobile-menu-2">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
              <li>
                <Link
                  to="/"
                  className={classNames(
                    ' relative block rounded  py-2 pl-3 pr-4 text-black lg:after:customLine  md:bg-transparent md:p-0 md:text-black md:hover:animate-wiggle md:hover:text-red-500',
                    isActive && 'md:text-red-500 md:hover:animate-none ',
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={classNames(
                    ' relative block rounded  py-2 pl-3 pr-4 text-black lg:after:customLine  md:bg-transparent md:p-0 md:text-black md:hover:animate-wiggle md:hover:text-red-500',
                    isActive && 'md:text-red-500 md:hover:animate-none',
                  )}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={classNames(
                    ' relative block rounded  py-2 pl-3 pr-4 text-black lg:after:customLine  md:bg-transparent md:p-0 md:text-black md:hover:animate-wiggle md:hover:text-red-500',
                    isActive && 'md:text-red-500 md:hover:animate-none',
                  )}
                >
                  Man
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={classNames(
                    ' relative block rounded  py-2 pl-3 pr-4 text-black lg:after:customLine  md:bg-transparent md:p-0 md:text-black md:hover:animate-wiggle md:hover:text-red-500',
                    isActive && 'md:text-red-500 md:hover:animate-none',
                  )}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={classNames(
                    ' relative block rounded  py-2 pl-3 pr-4 text-black lg:after:customLine  md:bg-transparent md:p-0 md:text-black md:hover:animate-wiggle md:hover:text-red-500',
                    isActive && 'md:text-red-500 md:hover:animate-none',
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
