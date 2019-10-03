import '../static/styles.css'

const Select = (props) => {
    let {className,...otherProps} = props;
    let style = "w-full focus:border-green-light rounded-lg bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-transparent"
    style = style + " " + className
    
    return (
        <select {...otherProps} className={style}>
            {props.options.map((option)=><option key={option}>{option}</option>)}
        </select>
    );
}

export default Select;