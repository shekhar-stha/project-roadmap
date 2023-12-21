import React, { useState } from 'react';
import Image from 'next/image';

export default function ImagesGrid(props) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setDimensions({ width: naturalWidth, height: naturalHeight });
    };

    const handleDelete = (index) => {
        props.onDelete(index);
    };

    return (
        <div className="grid grid-cols-4 gap-8">
            {props?.images.map((image, index) => {
                return (
                    <div key={index} className="relative h-60 group">
                        <Image className="rounded-md" layout="fill" objectFit="cover" src={image} alt="Image" onLoad={handleImageLoad} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4">
                            <div className="flex justify-end space-x-2">
                                <a
                                    href={image}
                                    download={`${props?.originalFileNames[index]}.${props?.imgType.toLowerCase()}`}
                                    className="text-white hover:text-blue-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-download w-6 h-6"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                        <path d="M7 11l5 5l5 -5"></path>
                                        <path d="M12 4l0 12"></path>
                                    </svg>
                                </a>
                                {/* Cancel Icon */}
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-white hover:text-red-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="text-white text-s">
                                <span>Width: {dimensions.width} X</span>
                                <span className="ml-1">Height: {dimensions.height}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
