import '../static/styles.css'

const Select = (props) => {
    return (
        <select {...props} className="block w-full bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-transparent">
            {props.options.map((option)=><option key={option}>{option}</option>)}
        </select>
    );
}

export default Select;