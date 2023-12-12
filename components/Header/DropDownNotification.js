import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef(null);
  const dropdown = useRef(null);


  const notificationsData = [
    {
      title: 'Escobar Landscaping Project Assigned.',
      content:
        'You have been assigned to the Escobar Landscaping Project',
      date: '12 May, 2025',
    },
    {
      title: 'It is a long established fact',
      content: 'that a reader will be distracted by the readable.',
      date: '24 Feb, 2025',
    },
    {
      title: 'There are many variations',
      content:
        'of passages of Lorem Ipsum available, but the majority have suffered',
      date: '04 Jan, 2025',
    },
    {
      title: 'There are many variations',
      content:
        'of passages of Lorem Ipsum available, but the majority have suffered',
      date: '01 Dec, 2024',
    },
  ];

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
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      if (!dropdownOpen || event.keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        href="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? 'hidden' : 'inline'
            }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>
        <NotificationsIcon />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${dropdownOpen === true ? 'block' : 'hidden'
          }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {notificationsData.map((notification, index) => (
            <li key={index}>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                href="#"
              >
                <p className="text-sm">
                  <span className="text-black dark:text-white">{notification.title}</span>{' '}
                  {notification.content}
                </p>
                <p className="text-xs">{notification.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
