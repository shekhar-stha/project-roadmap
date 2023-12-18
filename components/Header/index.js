/* eslint-disable react-hooks/rules-of-hooks */
'us'
import Link from "next/link";
import Image from "next/image";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropDownNotification";
import DropdownMessage from "./DropDownMessage";
import DropdownUser from "./DropDownUser";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <MenuIcon />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src="/logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <form action="" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">

            <DarkModeSwitcher />

            <DropdownNotification />
          </ul>

          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
