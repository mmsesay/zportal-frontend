import "../../static/styles.css";
import React from "react";
import { func } from "prop-types";

export function Input(props) {
  let { className, ...otherProps } = props;
  let style = `w-full block focus:outline-none ` + className;
  return (
    <div className="flex px-2 border border-black">
      <input {...otherProps} className={style} />
      <svg
        className="h-12 w-12 block"
        fill="green"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 24 24"
        onClick={props.onAdd}
      >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </div>
  );
}

export const Item = ({ text, key, onClick }) => {
  return (
    <div className="flex flex-row" key={key}>
      <p className="rounded-full text-white bg-green-darker p-2 m-2">{text}</p>
      <a
        className="cursor-pointer block leading-loose text-xl mt-1 rounded-full bg-white"
        onClick={() => onClick(key)}
      >
        &times;
      </a>
    </div>
  );
};

class AddTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
  }

  inputChangeHandler = event => {
    this.setState({ ...this.state, text: event.target.value });
  };

  addHandler = () => {
    const newItems = [...this.state.items];
    newItems.push(this.state.text);
    this.setState({ ...this.state, items: newItems, text: "" });
  };

  deleteHandler = index => {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({ ...this.state, items: newItems });
  };

  render = () => {
    return (
      <div>
        <Input
          value={this.state.text}
          onChange={this.inputChangeHandler}
          onAdd={this.addHandler}
          placeholder={this.props.placeholder}
        />
        <div className="flex flex-row flex-wrap">
          {this.state.items.map((text, index) => (
            <Item text={text} key={index} onClick={this.deleteHandler} />
          ))}
        </div>
      </div>
    );
  };
}

export default AddTextInput;
