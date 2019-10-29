import React from 'react'
import FlexRow from './FlexRow';

export default function Footer(){

    return (
        <div className="w-full bg-green-darker">
            {/* <FlexRow> */}
            <div className="flex flex-wrap m-4 container ml-32">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h3 className="text-orange-dark text-base font-thin mb-3 ml-6">About</h3>
                    <span className="text-white font-thin mb-3">www.ziilions.com</span>
                    <FlexRow>
                        {/* facebook svg icon */}
                        <span className="rounded-full h-6 w-6 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className="bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.605 48.605"><path d="M34.094 8.688h4.756V.005h-8.643c-.721-.03-9.51-.198-11.788 8.489-.033.091-.761 2.157-.761 6.983l-7.903.024v9.107l7.913-.023v24.021h12.087v-24h8v-9.131h-8v-2.873c0-1.786.753-3.914 4.339-3.914zm1.661 8.786v5.131h-8v24h-8.087V22.579l-7.913.023v-5.107l7.934-.023-.021-1.017c-.104-5.112.625-7.262.658-7.365 1.966-7.482 9.473-7.106 9.795-7.086l6.729.002v4.683h-2.756c-4.673 0-6.338 3.054-6.338 5.912v4.873h7.999z"/></svg>
                        </span>
                        {/* end of facebook svg icon */}
                        {/* linkedIn svg icon */}
                        <span className="rounded-full h-6 w-6 ml-3 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className="bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.605 48.605"><path d="M34.094 8.688h4.756V.005h-8.643c-.721-.03-9.51-.198-11.788 8.489-.033.091-.761 2.157-.761 6.983l-7.903.024v9.107l7.913-.023v24.021h12.087v-24h8v-9.131h-8v-2.873c0-1.786.753-3.914 4.339-3.914zm1.661 8.786v5.131h-8v24h-8.087V22.579l-7.913.023v-5.107l7.934-.023-.021-1.017c-.104-5.112.625-7.262.658-7.365 1.966-7.482 9.473-7.106 9.795-7.086l6.729.002v4.683h-2.756c-4.673 0-6.338 3.054-6.338 5.912v4.873h7.999z"/></svg>
                        </span>
                        {/* end of linkedIn svg icon */}
                        {/* youtube svg icon */}
                        <span className="rounded-full h-6 w-6 ml-3 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className="bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.605 48.605"><path d="M34.094 8.688h4.756V.005h-8.643c-.721-.03-9.51-.198-11.788 8.489-.033.091-.761 2.157-.761 6.983l-7.903.024v9.107l7.913-.023v24.021h12.087v-24h8v-9.131h-8v-2.873c0-1.786.753-3.914 4.339-3.914zm1.661 8.786v5.131h-8v24h-8.087V22.579l-7.913.023v-5.107l7.934-.023-.021-1.017c-.104-5.112.625-7.262.658-7.365 1.966-7.482 9.473-7.106 9.795-7.086l6.729.002v4.683h-2.756c-4.673 0-6.338 3.054-6.338 5.912v4.873h7.999z"/></svg>
                        </span>
                        {/* end of youtube svg icon */}
                        {/* twitter svg icon */}
                        <span className="rounded-full h-6 w-6 ml-3 mt-3 border-solid border-2 border-orange-dark flex items-center justify-center">
                        <svg className="bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.605 48.605"><path d="M34.094 8.688h4.756V.005h-8.643c-.721-.03-9.51-.198-11.788 8.489-.033.091-.761 2.157-.761 6.983l-7.903.024v9.107l7.913-.023v24.021h12.087v-24h8v-9.131h-8v-2.873c0-1.786.753-3.914 4.339-3.914zm1.661 8.786v5.131h-8v24h-8.087V22.579l-7.913.023v-5.107l7.934-.023-.021-1.017c-.104-5.112.625-7.262.658-7.365 1.966-7.482 9.473-7.106 9.795-7.086l6.729.002v4.683h-2.756c-4.673 0-6.338 3.054-6.338 5.912v4.873h7.999z"/></svg>
                        </span>
                        {/* end of twitter svg icon */}
                    </FlexRow>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h3 className="text-orange-dark text-base mb-3 ml-6 font-thin">Contact Us</h3>
                    <span className="text-white font-thin mb-3 ml-3 mt-3">30 Berwick Street</span>
                    <br/>
                    <span className="text-white font-thin mb-3 -ml-6 mt-3">+232-76-000000 / +232-77-111111</span>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h3 className="text-orange-dark text-base mb-3 font-thin">Partners</h3>
                    <span className="text-white font-thin mb-3 -ml-4 mt-3">Inovation Inc</span>
                    <br/>
                    <span className="text-white font-thin mb-3 -ml-4 mt-3">Imagination Lorem</span>
                </div>
            </div>
            <p className="text-center text-lg text-white p-2">&copy;Job-Portal 2019</p>
        </div>
            /* </FlexRow> */
        /* </div>
        // <div className="w-full bg-green-darker">
        //     <p className="text-center text-lg text-white p-4">&copy;Job-Portal 2019</p>
        // </div> */
    )

}