import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import '../../scss/fonts.scss';
import MyBtn from '../common/MyBtn';
import RadioBtn from '../common/RadioBtn';
import s from './EmergencyForm.module.scss';


export default function EmergencyForm(props) {
    const [emergency,setEmergency] = useState('nonRegister')
    const update = (key,value) => {
        props.update(key,value);
    };
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const formik = useFormik({
        initialValues: {
            support: '',
            keyName: '',
            keyPosition: '',
            keyEmail: '',
            keyMobile: '',
            supportCheck: false,
          },
          onSubmit: values => {
            for (const [key, value] of Object.entries(values)) {
                update(key,value);
                }
                props.goToStep(5);
                
          },
          validationSchema: Yup.object({
            supportCheck: Yup.boolean(),
            support: Yup.string()
                .required("Required!"),
            keyName: Yup.string().when("supportCheck", {
                is: true,
                then: Yup.string().required("Required")
              }),
            keyPosition: Yup.string(),
            keyEmail: Yup.string()
            .when("supportCheck", {
                is: true,
                then: Yup.string().required("Required").email("Invalid email format")
              }),
            keyMobile: Yup.string()
            .when("supportCheck", {
                is: true,
                then: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required")
              }),
            })   
    })
    // let validationSchema = Yup.object({
    //     keyName: Yup.string(),
        
    //   });
    
    //   if (emergency === 'register') {
    //     validationSchema.fields.keyName.withMutation((schema) => {
    //       schema.required();
    //     });
    //   }
    
    const emerArr = [
        'Có đăng ký',
        'Không đăng ký',
    ]
    const emerArrId = {
        'register':1,
        'nonRegister':2,
    }
    const setRadioSupport = (value) => {
        formik.values.support = emerArrId[value.replace(/'/g, '')];
        if (value === 'register') {
            formik.values.supportCheck = true;
        } else {formik.values.supportCheck = false;}
        setEmergency(value.replace(/'/g, ''))
    }
    
    return (
        <div className={s.formContainer}>
             <form onSubmit={formik.handleSubmit}>
            <div className={s.formContainer__title}>
            Đăng ký sử dụng dịch vụ hỗ trợ trường hợp khẩn cấp (nếu cần) 
            </div>
            <div className={s.formContainer__emergency}>
                    <label for="support">ĐK hỗ trợ khẩn cấp <span className={s.redRose}>*</span></label>
                    <RadioBtn content={emerArr} name='support' id={Object.keys(emerArrId)} setRadio={setRadioSupport} myclass="myselect"/>
                    {formik.errors.support && formik.touched.support && (
                        <p>{formik.errors.support}</p>)}
                </div>
            <div className={s.formContainer__input}>
                {emergency === 'register' &&
                <>
                <div className={s.formContainer__input__keyName}>
                    {formik.errors.keyName && formik.touched.keyName && (
                        <p>{formik.errors.keyName}</p>)}
                    <input  
                    type="text" 
                    id="keyName" 
                    onChange={formik.handleChange} 
                    value={formik.values.keyName}
                    placeholder="Họ tên đầu mối"/>
                    <label for="keyName">Họ tên đầu mối <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__keyPosition}>
                    <input  
                    type="text" 
                    id="keyPosition" 
                    onChange={formik.handleChange} 
                    value={formik.values.keyPosition}
                    placeholder="Chức vụ"/>
                    <label for="keyPosition">Chức vụ <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__keyEmail}>
                    {formik.errors.keyEmail && formik.touched.keyEmail && (
                        <p>{formik.errors.keyEmail}</p>)}
                    <input  
                    type="text" 
                    id="keyEmail" 
                    onChange={formik.handleChange} 
                    value={formik.values.keyEmail}
                    placeholder="Email"/>
                    <label for="keyEmail">Email <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__keyMobile}>
                    {formik.errors.keyMobile && formik.touched.keyMobile && (
                        <p>{formik.errors.keyMobile}</p>)}
                    <input  
                    type="text" 
                    id="keyMobile" 
                    onChange={formik.handleChange} 
                    value={formik.values.keyMobile}
                    placeholder="Số điện thoại"/>
                    <label for="keyMobile">Số điện thoại <span className={s.redRose}>*</span></label>
                </div>
                </>
                }
            </div>
            <MyBtn content="Quay lại" callback={props.previousStep} type="button"/>
            <MyBtn content="Tiếp theo" callback={update} type="submit" />
            </form>
        </div>
    )
}