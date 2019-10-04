import '../static/styles.css';

    
const ListItem = (props) => {
    const activeStyle = "bg-red text-white";
    const inactiveStyle = "";
    let style = inactiveStyle;
    let svgFill = "black"
    if (props.active) {
        style = activeStyle;
        svgFill = "white"
    }
    return (
        <div onClick={props.onClick} className={"flex cursor-pointer justify-between my-4 p-4 hover:bg-red hover:text-white "+style}>
            <div id="icon">
                <svg className="h-4 w-4 mr-5" fill={svgFill} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox={props.viewBox}>
                    <path d={props.path}/>
                </svg>
            </div>
            <div id="title" className="flex-1">
                {props.title}
            </div>
        </div>
    );
}



class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey : 1
        }
    }

    clickHandler = (key) => {
        this.setState({activeKey:key});
    }

    render = () => {
        const personalDetailsIcon = {
            "viewBox":"0 0 448 512",
            "path":"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        }
        const educationIcon = {
            "viewBox":"0 0 640 512",
            "path":"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z",
        }
        const workIcon = {
            "viewBox":"0 0 24 24",
            "path":"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
        }
        const uploadCvIcon = {
            "viewBox":"0 0 640 512",
            "path":"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z",
        }
        const accountSettingsIcon = {
            "viewBox":"0 0 640 512",
            "path":"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z",
        }
       
        const {activeKey} = this.state;
        return (
            <div className="max-w-xs bg-white shadow-lg rounded-lg py-2">
                <ListItem onClick={()=>this.clickHandler(1)} active={this.state.activeKey===1?true:false} {...personalDetailsIcon}  title="Personal Details" />
                <ListItem onClick={()=>this.clickHandler(2)} active={this.state.activeKey===2?true:false} {...educationIcon}  title="Education and Skills" />
                <ListItem onClick={()=>this.clickHandler(3)} active={this.state.activeKey===3?true:false} {...workIcon}  title="Work History" />
                <ListItem onClick={()=>this.clickHandler(4)} active={this.state.activeKey===4?true:false} {...uploadCvIcon}  title="Upload CV & CL" />
                <ListItem onClick={()=>this.clickHandler(5)} active={this.state.activeKey===5?true:false} {...accountSettingsIcon} title="Account Settings"/>
            </div>
        );
    }
}








export default Nav;