// //////////////////////////////////////////
//    Cookies: Session - Local storages    //
// //////////////////////////////////////////


//Local Storage

window.onload = () => {
    if (confirm("Agree to terms and conditions")){
        localStorage.setItem('cookies', 'accepted');
    }
}


//Session Storage
// window.onload = () => {
//     if (confirm("Agree to terms and conditions")){
//         sessionStorage.setItem('cookies', 'accepted');
//     }
// }