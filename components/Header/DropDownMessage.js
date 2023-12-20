import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ForumIcon from '@mui/icons-material/Forum';
import MessageBox from "../Message/MessageBox";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

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

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      if (!dropdownOpen || event.keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });


  const messageData = [
    {
      name: 'Mariya Desoja',
      message: 'I like your confidence 💪',
      time: '2 min ago',
      imageSrc: '/shekhar-profile.jpg',
      href: '/messages',
      seen: true
    },
    {
      name: 'Robert Jhon',
      message: 'Can you share your offer?',
      time: '10 min ago',
      imageSrc: '/shekhar-profile.jpg',
      href: '/messages',
      seen: false,
    },
    {
      name: 'Henry Dholi',
      message: 'I came across your profile and...',
      time: '1 day ago',
      imageSrc: '/shekhar-profile.jpg',
      href: '/messages',
      seen: false,
    },
    {
      name: 'Cody Fisher',
      message: 'I’m waiting for your response!',
      time: '5days ago',
      imageSrc: '/shekhar-profile.jpg',
      href: '/messages',
      seen: true,
    },
  ];

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        href="#"
      >
        <span
          className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? "hidden" : "inline"
            }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>

        <ForumIcon />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <div className="px-4.5 py-3 flex justify-between">
          <h5 className="text-sm font-medium text-bodydark2">Messages</h5>

          <Link className="underline text-sm hover:text-meta-5" href="/messages">
            View All
          </Link>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {messageData.map((message, index) => (
            <MessageBox key={index} message={message}/>
          ))}
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
