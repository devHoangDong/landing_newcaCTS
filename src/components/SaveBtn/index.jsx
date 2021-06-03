import React from 'react'
import MyBtn from '../common/MyBtn'
import s from './SaveBtn.module.scss'

export default function index() {
    return (
        <div className={s.saveBtn}>
            <MyBtn icon={<i className="fal fa-save">&nbsp;</i>} content={'Lưu nháp'}/>
            <MyBtn icon={<i className="fal fa-save">&nbsp;</i>} content={'Trình duyệt'}/>
            <MyBtn icon={<i class="fal fa-times-circle">&nbsp;</i>} content='Hủy'/>
        </div>
    )
}
