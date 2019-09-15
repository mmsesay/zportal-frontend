import '../styles/index.css';
import Link from 'next/link';
import Head from 'next/head'


let buttonStyles = {
    fontFamily:"Proxima nova",
    fontSize:"30px"
}

let postJobStyle = {
    fontFamily:"Roboto Regular",
    fontSize:"3rem",
    color:"#aa1923",
}

let forEmployersStyle = {
    fontFamily:"Fira Sans Italic",
    fontSize:"2rem",
    fontColor:"black"
}

const EmployerIndex = () => {
    // const router = useRouter();
    // console.log(router)
    const login = 1;
    return (
        <div className="bg-white min-h-full">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" type='text/css'/>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>
                <link href="https://cdn.jsdelivr.net/npm/roboto-regular-woff@0.7.1/Roboto-Regular.min.css" rel="stylesheet" type='text/css' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div>
                <h1 style={postJobStyle} className="m-4" >Post a Job Now.</h1>
                <h1 style={forEmployersStyle} className="text-center m-4">For Employers Only.</h1>
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
                    } 
                    #landing {
                        background-size: contain;
                        background-repeat: no-repeat;
                    } 
                `}
                </style>
        </div>
    );
}

export default EmployerIndex;