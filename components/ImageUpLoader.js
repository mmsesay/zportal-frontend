/*
This module provides a means of uploading an image
An extension of file input with some prettiers
*/

import '../static/styles.css';

const ImageUpLoader = (props) => {
    return (
        <div>
            <div id="main">
                <p className="text-center">{props.header}</p>
                <div className="p-2" id="upload-logo">
                        <label htmlFor="fileInput">
                            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/>
                            </svg>
                        </label>
                        <input type="file" {...props} className="block" id="fileInput"/>
                </div>
                <p className="text-xs">Maxi size of 1MB.JPG or PNG</p>
            </div>
        <style jsx>{`
            #upload-logo {
                border : 2px dashed grey;
            }

            #main {
                max-width : 7rem;
                min-height : 10rem;
            }
            #fileInput {
                display:none;
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