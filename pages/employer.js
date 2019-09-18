import '../static/styles.css';
import Link from 'next/link';
import Header from '../components/Header'

const EmployerIndex = () => {
    const login = 1;
    return (
        <div>
            {/* calling the header */}
            <Header activePage={'employer'}/> 
        <div className="bg-white min-h-full">
            <div className="p-10">
                <h1 className="text-red font-bold">Post a Job Now.</h1>
                <h2 className="text-center">For Employers Only.</h2>
                <div className="flex justify-around">
                    <Link href={`/employerLogin?login=${login}`} as={`/employerLogin/`}>
                        <button id="createbtn" className="text-white hover:bg-green-light bg-green-darker px-10 py-3 font-bold rounded-full">Create</button>
                    </Link>
                    <Link href="/employerLogin">
                        <button id="loginbtn" className="text-white hover:bg-red-light bg-red px-10 py-3 font-bold rounded-full">Login</button>
                    </Link>
                </div>
                <img src= "/static/gender-equality.png" alt="gender equality" />
                <style jsx>{`
                    
                `}
                </style>
            </div>
        </div>
        </div>
    );
}

export default EmployerIndex;