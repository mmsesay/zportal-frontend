import '../styles/index.css';
import Link from 'next/link';


let buttonStyles = {
    backgroundColor:"#1e5b49",
   ":hover": {
        backgroundColor:"AAl923",                               
   },
    fontFamily:"Proxima nova"
}


const EmployerIndex = () => {
    // const router = useRouter();
    // console.log(router)
    const login = 1;
    return (
        <div className="bg-white min-h-full">
            <div className="p-10">
                <h1 className="text-red font-bold">Post a Job Now.</h1>
                <h2 className="text-center">For Employers Only.</h2>
                <div className="flex justify-around">
                    <Link href={`/employerLogin?login=${login}`} as={`/employerLogin`}>
                        <button style={buttonStyles} 
                                id="createbtn" 
                                className="text-white px-10 py-3 font-bold rounded-full">Create</button>
                    </Link>
                    <Link href="/employerLogin">
                        <button style={buttonStyles} id="loginbtn" className="text-white hover:bg-red-light bg-red px-10 py-3 font-bold rounded-full">Login</button>
                    </Link>
                </div>
                <style jsx global>{`
                    body {
                        background-image : url("/static/gender-equality.png");
                        min-height : 100vh;
                        min-width : 100vw;
                        background-size: contain;
                        background-position: center-bottom;
                        background-color:# 253335;
                    }

                    
                `}
                </style>
            </div>
        </div>
    );
}


// background-size: contain;
// background-repeat: no-repeat;
/* background: cover; */

export default EmployerIndex;