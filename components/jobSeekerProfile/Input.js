import "../../static/styles.css";

function Input(props) {
  let { className, ...otherProps } = props;
  let style =
    "w-full block focus:border-green-light bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-transparent " +
    className;
  return <input {...otherProps} display="block" className={style} />;
}

export default Input;
