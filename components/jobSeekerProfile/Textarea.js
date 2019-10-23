import "../../static/styles.css";

const Textarea = props => {
  const { className, ...otherProps } = props;
  const style = `   border border-black 
                    py-3 px-3 mb-6 focus:border-transparent 
                    focus:border-green-light focus:outline-none 
                    focus:bg-white`;
  return <textarea className={className + style} {...otherProps}></textarea>;
};

export default Textarea;
