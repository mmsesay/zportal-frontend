/*
This module provides a means of uploading an image
An extension of file input with some prettiers
*/

import '../static/styles.css';

const ImageUpLoader = (props) => {
    return (
        
            <div id="image-uploader">
                <p className="text-center text-red">{props.header}</p>
                <div id="upload-box">
                        <label htmlFor="fileInput">
                        <svg className="h-full w-full" fill="grey" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                        </label>
                        <input type="file" {...props} className="hidden" id="fileInput"/>
                </div>
                <p className="text-xs">Maxi size of 1MB.JPG or PNG</p>

                <style jsx>{`
                    #upload-box {
                        border : 2px dashed grey;
                        max-width:9rem;
                        max-height:7rem;
                    }
                `}
                </style>
            </div>
        
        
    );
}

export default ImageUpLoader;


//TODO
//Cleanup Styling
//Add disable-ability   DONE