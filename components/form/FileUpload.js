// components/FileUpload.js
import React, { useRef } from "react";
import AttachmentIcon from '@mui/icons-material/Attachment';

const FileUpload = ({ onFileChange }) => {
    const fileUpload = useRef();

    const openFileUpload = () => {
        fileUpload.current.click();
    };

    return (
        <div className="col-span-full cursor-pointer" onClick={openFileUpload}>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                    <input
                        ref={fileUpload}
                        type="file"
                        className="hidden"
                        onChange={onFileChange}
                        multiple
                    />

                    <AttachmentIcon fontSize="large" />
                    <div className="mt-2 flex text-sm leading-6 text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
