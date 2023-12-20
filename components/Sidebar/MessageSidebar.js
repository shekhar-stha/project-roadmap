import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";
import GridViewIcon from '@mui/icons-material/GridView';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LanguageIcon from '@mui/icons-material/Language';
import DevicesIcon from '@mui/icons-material/Devices';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import DarkMessageBox from "../Message/DarkMessageBox";
import MessageBox from "../Message/MessageBox";

const MessageSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const pathname = usePathname();

    const trigger = useRef(null);
    const sidebar = useRef(null);

    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );

    console.log(pathname)

    // close on click outside
    useEffect(() => {
        const clickHandler = (event) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(event.target) ||
                trigger.current.contains(event.target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = (event) => {
            if (!sidebarOpen || event.keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    const messageData = [
        {
            name: 'Mariya Desoja',
            message: 'I like your confidence 💪',
            time: '2 min ago',
            imageSrc: '/shekhar-profile.jpg',
            href: '/messages/detail',
            seen: true
        },
        {
            name: 'Robert Jhon',
            message: 'Can you share your offer?',
            time: '10 min ago',
            imageSrc: '/shekhar-profile.jpg',
            href: '/messages/detail',
            seen: false,
        },
        {
            name: 'Henry Dholi',
            message: 'I came across your profile and...',
            time: '1 day ago',
            imageSrc: '/shekhar-profile.jpg',
            href: '/messages/detail',
            seen: false,
        },
        {
            name: 'Cody Fisher',
            message: 'I’m waiting for your response!',
            time: '5days ago',
            imageSrc: '/shekhar-profile.jpg',
            href: '/messages/detail',
            seen: true,
        },
    ];

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-40 flex h-screen w-90 flex-col overflow-y-hidden bg-white shadow-6 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link className="flex items-center gap-x-2" href="/dashboard">
                    <Image
                        width={60}
                        height={32}
                        src="/logo.png"
                        alt="Logo"
                    />
                    <div>
                        <h3 className="text-4xl font-bold mb-1 text-black italic dark:text-white">ZappySites</h3>
                        <p className="text-[12px] font-semibold dark:text-white">Dashboard</p>
                    </div>
                </Link>

                {/* Mobile Button */}
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <ArrowBackIcon className="text-white" />
                </button>
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">

                <nav className=" py-4 px-4 lg:px-6">
                    <Link href="/dashboard" className="dark:bg-black bg-stroke  rounded-md px-4 py-2 flex gap-2 items-center">
                        <ArrowBackIcon />
                        Back to main dashboard
                    </Link>
                    <h3 className="text-4xl mt-6 font-semibold  dark:text-white mb-5">Chats</h3>

                    <ul className="flex h-auto flex-col overflow-y-auto">
                        {messageData.map((message, index) => (
                            <MessageBox key={index} message={message} />
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MessageSidebar;
