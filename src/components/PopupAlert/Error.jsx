import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React from 'react'
import { useHistory } from "react-router-dom";

export const Error = () => {
    let history = useHistory();
    const handleClick = () => history.push('/')
        const MySwal = withReactContent(Swal)
    const handleAlert = () => {
        let timerInterval  
    Swal.fire({  
        icon: 'error',  
        title: 'Có lỗi khi đăng ký',
    })
    }
}

