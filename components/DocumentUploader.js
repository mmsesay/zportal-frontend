import '../static/styles.css';

const DocumentUpLoader = (props) => {
    return (
    <div>
        <form>
            <div>
                <div className="flex flex-col m-4 p-4">
                    <label>Upload CV</label>
                    <input type="file" />
                </div>
                <div className="flex flex-col m-4 p-4">
                    <label>Upload Cover Letter</label>
                    <input type="file" />
                </div>
                <div className="m-4">
                    <button 
                        type="submit"
                        className="m-4 p-4 bg-green-darker rounded-lg text-white">
                        Upload
                    </button>
                </div>
            </div>
        </form>
        <style jsx>{`
        `}
        </style>
    </div> 
    );
}

export default DocumentUpLoader;