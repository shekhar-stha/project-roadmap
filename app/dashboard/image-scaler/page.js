'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FileInput from './FileInput'
import Resizer from "react-image-file-resizer";
import { useEffect, useState } from 'react';
import ImagesGrid from './imagesGrid';
import Navbar from './Navbar';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const inter = Inter({ subsets: ['latin'] });

const InputField = ({ label, id, type = 'text', placeholder, value, onChange }) => (
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
            {label}
        </label>
        <input
            className="shadow dark:text-white dark:border-form-strokedark dark:bg-form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default function Page() {
    const [scaledImages, setScaledImages] = useState([]);
    const [loadingState, setLoadingState] = useState(false)
    const [totalFiles, setTotalFiles] = useState(0);
    const [unscaledImages, setUnscaledImages] = useState([]);
    const [originalFileNames, setOriginalFileNames] = useState([]);
    const [removedIndex, setRemovedIndex] = useState(null);

    // IMG CONFIG
    const [width, setWidth] = useState('800');
    const [quality, setQuality] = useState(90);
    const [imgType, setImgType] = useState('PNG');

    const resizeFile = (file) =>
        new Promise((resolve) => {
            const aspectRatio = file.width / file.height;
            const height = Math.floor(width / aspectRatio);

            Resizer.imageFileResizer(
                file,
                width,
                height,
                imgType,
                quality,
                0,
                (uri) => {
                    resolve(uri);
                },
                'base64'
            );
        });

    // When we upload image
    const onChange = async (event) => {
        try {
            setLoadingState(true);
            const files = event.target.files;

            let isValid = true;
            const unscaledImagesArray = [];
            const originalFileNamesArray = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (file.type.startsWith('image/')) {
                    const image = await resizeFile(file);
                    setScaledImages((prevImages) => [...prevImages, image]);
                    setTotalFiles(totalFiles + 1);
                    unscaledImagesArray.push(file);

                    const originalFileName = file.name.split('.')[0];
                    originalFileNamesArray.push(originalFileName);
                    console.log(originalFileNamesArray, "Original File Names Array")
                } else {
                    isValid = false;
                    alert('Invalid file type. Please upload an image.');
                }
            }

            setUnscaledImages((prevFiles) => [...prevFiles, ...unscaledImagesArray]);
            setOriginalFileNames((prevNames) => [...prevNames, ...originalFileNamesArray]);
        } catch (err) {
            console.log(err);
            alert(err.message);
        } finally {
            setLoadingState(false);
        }
    };

    // Function to Rescale images
    const applyScaling = async () => {
        try {
            setLoadingState(true);
            console.log(unscaledImages)
            const scaledImagesArray = [];
            const scaledImagesLength = scaledImages.length;
            console.log(scaledImagesLength)

            for (let i = 0; i < scaledImagesLength; i++) {
                const file = unscaledImages[i];
                const image = await resizeFile(file);
                scaledImagesArray.push(image);
            }

            setLoadingState(false);
            console.log("doing")
            setScaledImages(scaledImagesArray);
            console.log("done")
        } catch (err) {
            console.log(err);
            alert(err.message)
            window.location.reload();
        }
    };

    // Removing particular image
    const onDeleteImage = (index) => {
        const newScaledImages = [...scaledImages];
        newScaledImages.splice(index, 1);
        setScaledImages(newScaledImages);

        const newOriginalNames = [...originalFileNames];
        newOriginalNames.splice(index, 1);
        setOriginalFileNames(newOriginalNames);

        setTotalFiles(totalFiles - 1);

        const newUnscaledImages = [...unscaledImages];
        newUnscaledImages.splice(index, 1);
        setUnscaledImages(newUnscaledImages);
    };

    // Download Zip file of Scaled Images
    const downloadZip = () => {
        const zip = new JSZip();

        scaledImages.forEach((image, index) => {
            // Convert base64 image to Blob
            const byteCharacters = atob(image.split(',')[1]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: `image/${imgType.toLowerCase()}` });

            const originalFileName = originalFileNames[index];
            console.log(`Adding file: ${originalFileName}, Type: ${imgType}`);
            console.log(blob)

            // Add image to the zip file
            zip.file(`${originalFileName}.${imgType}`, blob);
        });

        // Generate the zip file and trigger the download
        zip.generateAsync({ type: 'blob' }).then((content) => {
            saveAs(content, 'scaled_images.zip');
        });
    };

    // Image Loading Effect
    useEffect(() => {
        // Check if all images have loaded
        console.log(originalFileNames, "Original File Names")
        console.log("Scaling Images and Total Files ", scaledImages.length, totalFiles)
    }, [scaledImages, totalFiles, unscaledImages, originalFileNames]);



    return (
        <main>

            {loadingState && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
            {loadingState && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            )}
            <div className=''>
                <h3 className='header'>Image Scaler</h3>
                <div className='mx-auto pt-6'>
                    {/* <h2 className='text-4xl font-bold mb-7 text-center'>Image Scaling</h2> */}
                    <div className='grid grid-cols-5 gap-5 mb-4'>
                        <InputField label="Width" id="width" type="number" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
                        <InputField label="Quality" id="quality" type="number" placeholder="Quality" value={quality} onChange={(e) => setQuality(e.target.value)} />
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grid-state">
                                Img Type
                            </label>
                            <div className="relative">
                                <select
                                    className="dark:border-form-strokedark dark:bg-form-input dark:text-white block shadow appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                    value={imgType}
                                    onChange={(e) => setImgType(e.target.value)}
                                >
                                    <option value="PNG">PNG</option>
                                    <option value="JPG">JPG</option>
                                    <option value="JPEG">JPEG</option>
                                    <option value="WEBP">WEBP</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-end w-full'>
                            <button
                                onClick={applyScaling}
                                type="button" className="bg-primary w-full px-6 py-2 rounded text-white">
                                Apply Scaling
                            </button>
                        </div>
                        <div className='flex items-end'>
                            <button
                                onClick={downloadZip}
                                type="button"
                                className="bg-primary w-full px-6 py-2 rounded text-white">
                                Download Zip
                            </button>
                        </div>
                    </div>

                    <FileInput onChange={onChange} />
                    <div className='mt-8'>
                        {
                            scaledImages.length > 0
                            &&
                            <ImagesGrid originalFileNames={originalFileNames} imgType={imgType} images={scaledImages} onDelete={onDeleteImage} />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
