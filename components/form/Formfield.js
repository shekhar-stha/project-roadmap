import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FormField({ label, type, placeholder, selectOptions, radioOptions, value, onChange }) {
    return (
        <div className="mb-4.5">
            {
                label && (
                    <label className="mb-2.5 block text-black dark:text-white">
                        {label} <span className="text-meta-1">*</span>
                    </label>
                )
            }
            {type === 'select' ? (
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        {selectOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <ExpandMoreIcon className="text-black dark:text-gray" />
                    </span>
                </div>
            ) : type === 'textarea' ? (
                <textarea
                    rows={6}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
            ) : type === 'text' ? (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
            ) : type === 'radio' ? (
                <div className='flex [540px]:flex-row flex-row [540px]:gap-y-0 gap-y-3 gap-x-5'>
                    {radioOptions.map((option, index) => (
                        <div className="flex items-center cursor-pointer bg-white rounded-md px-6 pe-7 py-2" key={index}>
                            <input
                                type="radio"
                                id={option.label}
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange(option.value)}
                                className="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor={option.label}
                                className="cursor-pointer ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 dark:text-black"
                            >
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
