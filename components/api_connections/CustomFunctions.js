import axios from 'axios';
import Router from 'next/router';
// import 'toasted-notes/src/styles.css'; // optional styles

// jobseeker registeration  function
export const jobseekerRegisteration = newUser => {
    // making the post request to the server
    return axios
        .post('http://localhost:5000/portal/jsk/signup', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            confirm_password: newUser.confirm_password
        })
        .then(res => {
            if( res.status == 200 ) {
                console.log('this is the response status: '+ res.status)
                Router.push('/login') //  redirecting the user to the login page
            }
            // console.log('this is the response data: '+ res.data);
            // console.log('this is the response status'+ res.status);
            // console.log('this is the response statusText'+ res.statusText);
            // console.log('this is the response headers'+ res.headers);
            // console.log('this is the response config'+ res.config);
            
        })
        .catch(err => {
            console.log(err);
            alert(err); //See this error
        });
    
}

// jobseeker login function
// export const login = user => {
//     return axios
//         .post('/api/v1/login', {
//             email: user.email,
//             password: user.password,
//         })
//         .then(res => {
//             localStorage.login = res.headers['x-auth'];
//             localStorage.firstName = res.data.firstName;
//             localStorage.userHandle = res.data.userHandle;
//             localStorage.lastName = res.data.lastName;

//             return {
//                 status: "ok"
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// hairstylist register function
// export const registerHairstylist = newUser => {
//     return axios
//         .post('/api/v1/hirestylistAccount', {
//             email: newUser.email,
//             password: newUser.password,
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             phone: newUser.phone,
//             address: newUser.address,
//             city: newUser.city,
//             state: newUser.state,
//             zipCode: newUser.zipCode,
//             priceRange: newUser.priceRange,
//             workFromHome: newUser.workFromHome,
//             userHandle: newUser.userHandle
//         })
//         .then(res => {
//             if (res.status === 200) {
//                 console.log(res)
//                 // {<signInComp />}
//             }
//             // console.log(res.status)
//         })
// }

// // login function
// export const login = user => {
//     return axios
//         .post('/api/v1/login', {
//             email: user.email,
//             password: user.password,
//         })
//         .then(res => {
//             localStorage.login = res.headers['x-auth'];
//             localStorage.firstName = res.data.firstName;
//             localStorage.userHandle = res.data.userHandle;
//             localStorage.lastName = res.data.lastName;

//             return {
//                 status: "ok"
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// // login function
// export const upload = (formData, config) => {

//     // registerHairstyle
//     return axios.post("/api/v1/hirestyle", formData, config)
//         .then((res) => {
//             console.log(res.data)
//             console.log("hairstyle uploaded successfully")

//             return {
//                 status: "ok"
//             }
//         }).catch((error) => {
//             console.log(error)
//         });
// }

// // hairstyle register function
// export const registerHairstyle = newHairstyle => {
//     return axios
//         .post('/api/v1/hirestyle', {
//             name: newHairstyle.name,
//             description: newHairstyle.description,
//             user_handle: newHairstyle.user_handle,
//             contact: newHairstyle.contact,

//         })
//         .then(res => {
//             if (res.status === 200) {
//                 console.log("hairstyle upload successfully")
//                 console.log(res.data)
//             }
//         })
// }

// export const getHairstyles = () => {
//     return axios
//         .get('/api/v1/hirestyles')
//         .then(res => {
//             if (res.status === 200) {
//                 return res.data;
//             }
//         })
//         // .catch(error=>{
//         //     let errorObject=JSON.parse(JSON.stringify(error));
//         //     console.log(errorObject);
//         //     dispatch(authError(errorObject.response.data.error));
//         // })

// }