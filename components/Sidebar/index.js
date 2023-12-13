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

const sidebarLinks = [
    {
        title: 'Dashboard',
        icon: <GridViewIcon />,
        path: '/dashboard',
        group: 'MENU',
    },
    {
        title: 'Projects',
        icon: <AssignmentIcon />,
        path: '/dashboard/projects',
        group: 'MENU',
    },
    {
        title: 'Developers',
        icon: <CodeIcon />,
        path: '/dashboard/developers',
        group: 'MENU',
    },
    {
        title: 'Support Assistant',
        icon: <SupportAgentIcon />,
        path: '/dashboard/support-assistant',
        group: 'MENU',
    },
    {
        title: 'Website Setup',
        icon: <DevicesIcon />,
        path: '#',
        group: 'TOOLS',
    },
    {
        title: 'Image Scaler',
        icon: <AddPhotoAlternateIcon />,
        path: 'https://image-scaler-sigma.vercel.app/',
        group: 'TOOLS',
        targetBlank: true,
    },
    {
        title: 'SEO Checker',
        icon: <LanguageIcon />,
        path: '#',
        group: 'TOOLS',
    },
    {
        title: 'Team Training',
        icon: <VideoLibraryIcon />,
        path: '/dashboard/team-training',
        group: 'MENU',
    },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
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

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link href="/dashboard">
                    <Image
                        width={230}
                        height={32}
                        src="/logo-full-white.png"
                        alt="Logo"
                    />
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

                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    {Array.from(new Set(sidebarLinks.map((link) => link.group))).map((group) => (
                        <div key={group}>
                            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">{group}</h3>
                            <ul className="mb-6 flex flex-col gap-1.5">
                                {sidebarLinks
                                    .filter((link) => link.group === group)
                                    .map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.path}
                                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(link.path === pathname) ||
                                                (pathname.includes(link.path) && link.path !== '/dashboard')
                                                ? "bg-graydark dark:bg-meta-4" : ""}`}
                                            target={link.targetBlank ? "_blank" : undefined}
                                        >
                                            {link.icon}
                                            {link.title}
                                        </Link>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
