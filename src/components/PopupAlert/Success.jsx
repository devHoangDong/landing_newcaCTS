// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import React from 'react'
// import { useHistory } from "react-router-dom";



// export const MySwal = withReactContent(Swal)
// let history = useHistory();
//     const handleClick = () => history.push('/')
//         let timerInterval  
// MySwal.fire({
//     icon: 'success',  
//             title: 'Bạn đã đăng ký thành công !!!',
//             html: 'Quay về <b></b> seconds.',
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: () => {
//                 Swal.showLoading()
//                 timerInterval = setInterval(() => {
//                 const content = Swal.getHtmlContainer()
//                 if (content) {
//                     const b = content.querySelector('b')
//                     if (b) {
//                     b.textContent = "Trang chủ" + Math.round(Swal.getTimerLeft()/1000)
//                     }
//                 }
//                 }, 100)
//             },
//             willClose: () => {
//                 clearInterval(timerInterval)
//             }
//         }).then((result) => {  
//             handleClick()
// })


// // export const Success = () => {
// //     let history = useHistory();
// //     const handleClick = () => history.push('/')
// //         const MySwal = withReactContent(Swal)
// //     const handleAlert = () => {
// //         let timerInterval  
// //     Swal.fire({  
// //         icon: 'success',  
// //         title: 'Bạn đã đăng ký thành công !!!',
// //         html: 'Quay về <b></b> seconds.',
// //         timer: 3000,
// //         timerProgressBar: true,
// //         didOpen: () => {
// //             Swal.showLoading()
// //             timerInterval = setInterval(() => {
// //             const content = Swal.getHtmlContainer()
// //             if (content) {
// //                 const b = content.querySelector('b')
// //                 if (b) {
// //                 b.textContent = "Trang chủ" + Math.round(Swal.getTimerLeft()/1000)
// //                 }
// //             }
// //             }, 100)
// //         },
// //         willClose: () => {
// //             clearInterval(timerInterval)
// //         }
// //     }).then((result) => {  
// //         handleClick()
// //     })  
// //     }
// // }

