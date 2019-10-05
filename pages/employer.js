import '../static/styles.css';
import Link from 'next/link';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head';


let buttonStyles = {
    fontFamily:"Proxima nova",
    fontSize:"30px"
}

let forEmployersStyle = {
    fontFamily:"Fira Sans Italic",
    fontSize:"2rem",
}

const EmployerIndex = () => {
    const login = 1;
    return (
        <div>
            {/* calling the header */}
            <Header activePage={'employer'}/> 
            <div className="bg-white min-h-full">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <div>
                    <p style={forEmployersStyle} className="text-center italic m-4">For Employers Only.</p>
                </div>
                <div className="flex justify-around mt-4">
                    <Link href={`/employerLogin?login=${login}`} as={`/employerLogin`}>
                        <button style={buttonStyles} 
                                id="createbtn" 
                                className="text-white bg-green-darker px-10 py-3 font-bold rounded-full hover:bg-red-light">Create</button>
                    </Link>
                    <Link href="/employerLogin">
                        <button style={buttonStyles} 
                                id="loginbtn" 
                                className="text-white bg-green-darker hover:bg-red-light px-10 py-3 font-bold rounded-full">Login</button>
                    </Link>
                </div>
                <img src="/static/gender-equality-edited.png" id="landing"/>
                    
                
                <style jsx global>{`
                        body {
                            background-color: #FFFFFF;
                            height:100%;
                            width:100%;
                        } 
                        #landing {
                            background-size: contain;
                            background-repeat: no-repeat;
                        } 
                    `}
                </style>
            </div>
            <Footer /> 
        </div>
    );
}

export default EmployerIndex;