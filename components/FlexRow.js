import '../static/styles.css'

/*
Flex row is a container to display items in a row
but wraps as screen size changes
*/

export default (props) => {
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            {props.children}
        </div>
    );
}