import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppSelector } from "@/redux/hooks";

const DropdownUser = () => {
    const user = useAppSelector(state => state?.user?.user)

    console.log(user)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = (event) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(event.target) ||
                trigger.current.contains(event.target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    const [initials, setInitials] = useState()
    useEffect(() => {
        if (user !== undefined && user !== null) {
            const words = user?.fullName.split(' ');
            // Extract the first character of each word
            if (words.length > 0) {
                const letters = words[0].charAt(0) + (words.length > 1 ? words[1]?.charAt(0) : '');
                setInitials(letters.toUpperCase());
            } else {
                setInitials(name.charAt(0));
            }
        }
    }, [user]);

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = (event) => {
            if (!dropdownOpen || event.keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative">
            <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                href="#"
            >
                <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">
                        {user?.fullName}
                    </span>
                    <span className="block text-xs capitalize">{user?.userType}</span>
                </span>

                <div className={`flex justify-center items-center h-12 w-12 rounded-full ${user?.photo ? "" : "bg-primary"}`}>
                    {
                        user?.photo ?
                            <Image
                                className="rounded-full"
                                width={55}
                                height={55}
                                src={"/shekhar-profile.jpg"}
                                alt="User"
                            />
                            : <span className="text-white text-[1.2rem]">{initials}</span>
                    }
                </div>
                <ExpandMoreIcon />
            </Link>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li>
                        <Link
                            href="/dashboard/settings"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <SettingsIcon />
                            Account Settings
                        </Link>
                    </li>
                </ul>
                <Link href="/login" className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">

                    <LogoutIcon />
                    Log Out
                </Link>
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default DropdownUser;
