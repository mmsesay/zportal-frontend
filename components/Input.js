function Input(props){
    return (
        <input 
            {...props} 
            display="block" 
            className="block w-full bg-gray-200 text-gray-700 border border-black focus:border-green-light rounded-lg py-3 px-4 mb-3 leading-tight focus:border-transparent  focus:outline-none focus:bg-white"
            />
    );
}

export default Input;