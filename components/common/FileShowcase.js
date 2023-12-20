import React from "react";
import Image from 'next/image';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import SingleFile from "./SingleFile";

const FileShowcase = ({ uploadedFiles }) => {
    const filesArray = Array.from(uploadedFiles);

    return (
        <div className="files-showcase grid xl:grid-cols-5 md:grid-cols-4 msm:grid-cols-2 gap-4 my-3">
            {filesArray.map((file, index) => (
                <SingleFile key={index} file={file} />
            ))}
        </div>
    );
};

export default FileShowcase;
