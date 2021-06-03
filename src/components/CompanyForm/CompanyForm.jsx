import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import '../../scss/fonts.scss';
import MyBtn from '../common/MyBtn';
import MyUpload from '../common/MyUpload';
import RadioBtn from '../common/RadioBtn';
import s from './CompanyForm.module.scss';

export default function CompanyForm(props) {
    const [forCompany,SetForCompany] = useState(false);
    const [file,SetFile] = useState({});
    const update = (key,value) => {
        props.update(key,value);
    };
    
    // let {url} = useRouteMatch();
    // console.log(url, 'route')
    const content1 = [
        'Có',
        'Không',
    ]
    const id1 = {
        'yes':1,
        'no':2,
    }
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const formik = useFormik({
        initialValues: {
            companyName: '',
            roomName: '',
            numberCode: null,
            position: '',
            email: '',
            phoneNumber: '',
            adress: '',
            forCompany: '',
            confirmFile: {
                status: 'no'
            },
            confirmFileB64: '',
            confirmFileName: '',
            companyCheck: false,
          },
          onSubmit: values => {
            for (const [key, value] of Object.entries(values)) {
            update(key,value);
            }
            props.goToStep(4);
          },
          validationSchema: Yup.object({
            companyCheck: Yup.boolean(),
            forCompany: Yup.string().required("Required"),
            companyName: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().required("Required")
              }),
            numberCode: Yup.string().nullable(true)
                .when("companyCheck", {
                is: true,
                then: Yup.string().nullable(true).required("Required").min(8,"Not valid!").max(16,"Not valid!")
              }),
            email: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().required("Required").email("Invalid email format")
              }),
            phoneNumber: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required!")
              }),
            adress: Yup.string()
                .when("companyCheck", {
                is: true,
                then: Yup.string().required("Required")
              }),
            confirmFile: Yup.object().when("companyCheck", {
                is: true,
                then: Yup.object({
                    status: Yup.string().matches(/(done)/, "File require!")
                  })
            })
          })
      })
    const setRadio = (value) => {
        formik.values.forCompany = id1[value.replace(/'/g, '')];
        if (value === 'yes') {
            formik.values.companyCheck = true;
        } else {
            formik.values.companyCheck = false;}
        SetForCompany(id1[value.replace(/'/g, '')]);
    }
    const getConfirmFile = (file,b64) => {
        SetFile(file);
        formik.values.confirmFile = file;
        formik.values.confirmFileName = file.name;
        formik.values.confirmFileB64 = b64;
    }
    
    return (
        <div className={s.formContainer}>
            <form onSubmit={formik.handleSubmit}>
            <div className={s.formContainer__title}>
                Trường hợp cá nhân thuộc tổ chức doanh nghiệp
            </div>
            <div className={s.formContainer__select}>
                <RadioBtn content={content1} name='forCompany' id={Object.keys(id1)} setRadio={setRadio} />
                {formik.errors.forCompany && formik.touched.forCompany && (
                <p>{formik.errors.forCompany}</p>)}
            </div>
            {forCompany === 1 && 
            <>
            <div className={s.formContainer__input}>
                <div className={s.formContainer__input__companyName}>
                    {formik.errors.companyName && formik.touched.companyName && (
                    <p>{formik.errors.companyName}</p>)}
                    <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    onChange={formik.handleChange} 
                    value={formik.values.companyName} 
                    placeholder="Tên tổ chức" />
                    <label for="companyName">Tên tổ chức <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__numberCode}>
                    {formik.errors.numberCode && formik.touched.numberCode && (
                        <p>{formik.errors.numberCode}</p>)}
                    <input  
                    type="text" 
                    id="numberCode" 
                    name="numberCode" 
                    onChange={formik.handleChange} 
                    value={formik.values.numberCode} 
                    placeholder="MST tổ chức/doanh nghiệp"/>
                    <label for="numberCode">MST tổ chức/doanh nghiệp <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__email}>
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>)}
                    <input  
                    type="text" 
                    id="email" 
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    placeholder="Email"/>
                    <label for="email">Email <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__phoneNumber}>
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                        <p>{formik.errors.phoneNumber}</p>)}
                    <input  
                    type="text" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    onChange={formik.handleChange} 
                    value={formik.values.phoneNumber} 
                    placeholder="Số điện thoại"/>
                    <label for="phoneNumber">Số điện thoại <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__adress}>
                    {formik.errors.adress && formik.touched.adress && (
                        <p>{formik.errors.adress}</p>)}
                    <input  
                    type="text" 
                    id="adress" 
                    name="adress" 
                    onChange={formik.handleChange} 
                    value={formik.values.adress} 
                    placeholder="Địa chỉ tổ chức/doanh nghiệp"/>
                    <label for="adress">Địa chỉ tổ chức/doanh nghiệp <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__roomName}>
                    <input  
                    type="text" 
                    id="roomName" 
                    name="roomName" 
                    onChange={formik.handleChange} 
                    value={formik.values.roomName} 
                    placeholder="Tên phòng ban"/>
                    <label for="roomName">Tên phòng ban</label>
                </div>
                <div className={s.formContainer__input__position}>
                    <input  
                    type="text" 
                    id="position" 
                    name="position" 
                    onChange={formik.handleChange} 
                    value={formik.values.position} 
                    placeholder="Chức vụ"/>
                    <label for="position">Chức vụ</label>
                </div>
                <div className={s.formContainer__input__upload}>
                   {formik.errors.confirmFile && formik.touched.confirmFile && (
                        <p>Required!</p>)}
                    <MyUpload getFile={getConfirmFile} />
                    <label className={s.formContainer__upload__label}>File xác nhận <span>*</span></label>
                </div>
            </div> 
            <div className={s.formContainer__upload}>
                
            </div> 
            </>
            }
            <MyBtn content="Quay lại" callback={props.previousStep} type="button" ></MyBtn>
            <MyBtn content="Tiếp theo" type='submit' callback={update}/>
            </form>
        </div>
    )
}

