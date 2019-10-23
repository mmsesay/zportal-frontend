import "../../static/styles.css";

function Input(props) {
  let { className, ...otherProps } = props;
  let style = `w-full block focus:outline-none ` + className;
  return (
    <div className="flex px-2 border border-black">
      <input {...otherProps} display="" className={style} />
      <svg
        className="h-12 w-12 block"
        fill="green"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 24 24"
      >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </div>
  );
}

export default Input;
