// import components

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
    return(
        <div>
            <Header activePage={'about'}/>
            <p>We are Innovators</p>
            <Footer />
        </div>    
    );
}