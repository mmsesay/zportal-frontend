import '../styles/index.css'

const Select = (props) => {
    return (
        <select {...props} className="w-full focus:border-green-light rounded-lg bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-transparent">
            {props.options.map((option)=><option key={option}>{option}</option>)}
        </select>
    );
}

const CustomSelect = (props) => {
    return (
        <div class="inline-block relative w-64">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Really long option that will likely overlap the chevron</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    );
}

// <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// </div>

export default Select;