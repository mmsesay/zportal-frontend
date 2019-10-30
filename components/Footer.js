import React from 'react'
import FlexRow from './FlexRow';
import googleIcon from '../images/loginBG.jpg';
import { width } from '@material-ui/system';


export default function Footer(){

    return (
        <div className="w-full bg-green-darker">
            {/* <FlexRow> */}
            <div className="flex flex-wrap p-12 container ml-32">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h3 className="text-orange-dark text-small font-thin mb-3 ml-6">About</h3>
                    <span className="text-white font-thin mb-3">www.ziilions.com</span>
                    <FlexRow>
                        {/* facebook svg icon */}
                        <span className="rounded-full h-6 w-6 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 176h-96v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80z" fill="#1976d2"/></svg>
                        </span>
                        {/* end of facebook svg icon */}
                        {/* linkedIn svg icon */}
                        <span className="rounded-full h-6 w-6 ml-3 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.02 512.02"><g fill="#007aaa"><path d="M61.813 4.424c33.545 0 61.793 28.248 61.793 61.793 0 35.31-30.014 62.676-61.793 61.793C29.151 128.893.02 101.527.02 66.217-.863 31.789 27.386 4.424 61.813 4.424M96.241 507.596H25.62c-9.71 0-17.655-7.945-17.655-17.655V180.976c0-9.71 7.062-17.655 16.772-17.655H96.24c9.71 0 17.655 7.945 17.655 17.655v309.848c.001 8.827-7.944 16.772-17.654 16.772M511.137 271.017c0-65.324-48.552-116.524-113.876-116.524h-18.538c-35.31 0-69.738 16.772-88.276 44.138l-8.828 8.828v-35.31c0-3.531-5.297-8.828-8.828-8.828h-88.276c-3.531 0-8.828 3.531-8.828 7.945v329.269c0 3.531 5.297 7.062 8.828 7.062h97.103c3.531 0 8.828-3.531 8.828-7.062V309.858c0-32.662 24.717-60.028 57.379-60.91 16.772 0 31.779 6.179 43.255 17.655 10.593 10.593 15.007 25.6 15.007 42.372v189.793c0 3.531 5.297 8.828 8.828 8.828h88.276c3.531 0 8.828-5.297 8.828-8.828V271.017h-.882z"/></g></svg>
                        </span>
                        {/* end of linkedIn svg icon */}
                        {/* youtube svg icon */}
                        <span className="rounded-full h-6 w-6 ml-3 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className='h-3 w-3' viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M.522 17.874c.49 1.738 1.989 2.056 2.089 2.117 2.467.672 16.295.674 18.799 0 1.715-.496 2.03-2.017 2.089-2.117.653-3.474.696-8.003-.03-11.945l.03.196c-.49-1.738-1.989-2.056-2.089-2.117-2.434-.661-16.298-.686-18.799 0C.896 4.505.581 6.025.522 6.125c-.699 3.651-.734 7.84 0 11.749zm9.086-2.223V8.358l6.266 3.652z" fill="#e53935"/></svg>
                        </span>
                        {/* end of youtube svg icon */}
                        {/* twitter svg icon */}
                        <span className="rounded-full h-6 w-6 ml-3 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" fill="#03a9f4"/></svg>
                        </span>
                        {/* end of twitter svg icon */}
                    </FlexRow>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h3 className="text-orange-dark text-small mb-3 ml-6 font-thin">Contact Us</h3>
                    <span className="text-white font-thin mb-3 ml-3 mt-3">30 Berwick Street</span>
                    <br/>
                    <span className="text-white font-thin mb-3 -ml-6 mt-3">+232-76-000000 / +232-77-111111</span>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h3 className="text-orange-dark text-small mb-3 font-thin">Partners</h3>
                    <span className="text-white font-thin mb-3 -ml-4 mt-3">Inovation Inc</span>
                    <br/>
                    <span className="text-white font-thin mb-3 -ml-4 mt-3">Imagination Lorem</span>
                </div>
            </div>
            <p className="text-center text-white font-thin text-base -mt-10 -ml-8 pb-8">&copy;Job-Portal 2019</p>
        </div>
            /* </FlexRow> */
        /* </div>
        // <div className="w-full bg-green-darker">
        //     <p className="text-center text-lg text-white p-4">&copy;Job-Portal 2019</p>
        // </div> */
    )

}