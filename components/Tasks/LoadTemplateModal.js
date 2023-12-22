// LoadTemplateModal.js
import React from 'react';
import { Transition } from '@headlessui/react';
import { DownloadIcon } from '@mui/icons-material';
import FormField from '@/components/form/Formfield';

export default function LoadTemplateModal({ showModal, setShowModal, loadTemplate }) {
  return (
    <Transition show={showModal} as={React.Fragment}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto min-w-[50%] my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-boxdark bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl dark:text-white font-semibold">
                Load Templates
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div
                onClick={() => loadTemplate(1)}
                className='shadow flex items-center justify-between my-6 dark:bg-form-input bg-stroke p-2 px-4'>
                <p className='dark:text-white text-black font-medium'>Junior Development Training</p>
                <div className='w-10 h-10 cursor-pointer bg-primary flex items-center justify-center rounded-full text-white'>
                  <DownloadIcon />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-primary text-white  font-medium  uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-[#000000]"></div>
    </Transition>
  );
}
