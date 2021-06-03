import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import '../../scss/fonts.scss';
import MyBtn from '../common/MyBtn';
import MyUpload from '../common/MyUpload';
import RadioBtn from '../common/RadioBtn';
import s from './SampleRegister.module.scss';


export default function SampleRegister(props) {
    const update = (key,value) => {
        props.update(key,value);
    };
    
    const content1 = {
        'Điện tử':1,
        'Giấy':2,
        'Scan':3,
    }
    
    
    const formik = useFormik({
        initialValues: {
            fileSigned01: null,
            fileSigned01B64: '',
            fileSigned01Name: '',
            fileSigned03: null,
            docType: '',
          },
          onSubmit: values => {
            for (const [key, value] of Object.entries(values)) {
                update(key,value);
                }
            props.finish();
          },
          validationSchema: Yup.object({
            docType: Yup.string()
              .required("Required!"),
            fileSigned01: Yup.object({
                status: Yup.string().matches(/(done)/, "Required")
            }).required("Required")
          })
      })
    const setRadioDocType = (value) => {
        formik.values.docType = content1[value.replace(/'/g, '')];
    }
    const getfileSigned01 = (file,b64) => {
        formik.values.fileSigned01 = file;
        formik.values.fileSigned01Name = file.name;
        formik.values.fileSigned01B64 = b64;
    }
    const getfileSigned03 = (file) => {
        formik.values.fileSigned03 = file;
    }

    return (
        <div className={s.formContainer}>
            <form onSubmit={formik.handleSubmit} noValidate>
            <div className={s.formContainer__title}>
            MẪU ĐĂNG KÝ
            </div>
            <div className={s.formContainer__input}>
                <div className={s.formContainer__input__docType}>
                    {formik.errors.docType && formik.touched.docType && (
                        <p>Required!</p>)}
                    <RadioBtn content={Object.keys(content1)} name='docType' id={Object.keys(content1)} setRadio={setRadioDocType} />
                    <label for="docType">Loại hồ sơ<span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__upload1}>
                    {formik.errors.fileSigned01 && formik.touched.fileSigned01 && (
                        <p>Required!</p>)}
                    <MyUpload getFile={getfileSigned01} />
                    <label className={s.formContainer__upload__label}>Tải file DK-01.02 (Đã ký) <span>*</span></label>
                </div>
                <div className={s.formContainer__input__upload2}>
                    <MyUpload getFile={getfileSigned03} />
                    <label className={s.formContainer__upload__label}>Tải file DK-03 (Đã ký) (Nếu có) <span>*</span></label>
                </div>
            </div>
            <MyBtn content="Quay lại" callback={props.previousStep} type="button" />
            <MyBtn content="Kết thúc" callback={update} type="submit" />
            </form>
        </div>
    )
}