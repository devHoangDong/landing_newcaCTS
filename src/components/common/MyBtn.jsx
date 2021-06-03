import React from 'react'
import b from './MyBtn.module.scss'
import PropTypes from 'prop-types'


MyBtn.propTypes = {
    content : PropTypes.string,
    class: PropTypes.string,
}
export default function MyBtn(props) {
    const style = props.class; 
    return (
        <button className={`${b.button} ${b[style]}`} onClick={props.callback} type={props.type} >
            {props.icon}{props.content}
        </button>
    )
}


