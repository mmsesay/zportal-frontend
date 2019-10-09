/*
This module provides a means of uploading an image
An extension of file input with some prettiers
*/

import '../static/styles.css';

class ImageUpLoader extends React.Component {

    uploadClickHandler = () => {
        document.getElementById("fileInput").click();
    }

    render = () => {
        return (
        
            <div id="image-uploader" className="max-w-xs">
                <div className="flex"> 
                    <div className="flex-1">
                    <p className="text-center font-bold">Profile Picture</p>
                    <div id="upload-box" className="bg-grey-darkest my-2">
                        <label htmlFor="fileInput">
                            <svg className="h-full w-full" fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 448 512">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                            </svg>
                        </label>
                        <input type="file" {...this.props} className="hidden" id="fileInput"/>
                    </div>
                    </div>
                    <button onClick={this.uploadClickHandler} className="bg-green-darker text-white m-2 mt-6 py-1 font-bold px-6 rounded" htmlFor="fileInput">Upload</button>
                </div>
                <p className="text-xs">Maxi size of 1MB.JPG or PNG</p>

                <style jsx>{`
                   
                    #image-uploader {
                        min-width:20rem
                    }
                    button {
                        max-height:30px;
                    }
                `}
                </style>
            </div>
        
        
        );
    }
    
}

export default ImageUpLoader;


//TODO
//Cleanup Styling
//Add disable-ability   DONE