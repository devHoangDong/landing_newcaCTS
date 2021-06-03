import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import '../../scss/fonts.scss';
import MyBtn from '../common/MyBtn';
import MySelect from '../common/MySelect';
import RadioBtn from '../common/RadioBtn';
import s from './RegisterCTC.module.scss';

export default function RegisterCTC(props) {
    const [list,setList] = useState([])
    const [packageObj,setPackageObj] = useState({})
    const [price,setPrice] = useState('0')
    const update = (key,value) => {
        props.update(key,value);
    };
    const providerObj = {
        'FastCA':1,
        'newTel':2
    }
    // const list2 = [
    //     'Chứng minh nhân dân',
    //     'Hộ chiếu',
    //     'Căn cước công dân',
    //     'Mã bảo hiểm xã hội'
    // ]
    const content1 = [
        'Cấp mới',
        'Gia hạn',
        'Chuyển đổi',
    ]
    const id1 = [
        1,
        2,
        3,
    ]
    // const content2 = [
    //     'Token',
    //     'HSM',
    // ]
    // const id2 = [
    //     'token',
    //     'hsm',
    // ]
    const formik = useFormik({
        initialValues: {
            provider:1,
            price: '1800000',
            target: '',
            servicePkg: 'CBH-COB-1Y',
            quantity:'',
          },
          onSubmit: values => {
            for (const [key, value] of Object.entries(values)) {
                update(key,value);
                }
                props.goToStep(3);
          },
          validationSchema: Yup.object({
            provider: Yup.string()
              .required("Required!"),
            price: Yup.string()
              .required("Required!"),
            target: Yup.string()
              .required("Required!"),
            servicePkg: Yup.string()
              .required("Required!"),
            quantity: Yup.number()
            .positive("Số lượng phải lớn hơn 0")
              .required("Required!"),
          })
      })
    const setRadioTarget = (value) => {
        formik.values.target = value;
    }
    const getList = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Token", "uk0resTyJfVq4uk3Fd57grxsEZb3Nvjy8r29ckZ5HUwm9Ddn4G");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
          
          fetch(" http://10.30.1.47/api/requesthsm/package", requestOptions)
            .then(response => response.json())
            .then(respone => {
                const result = respone;
                const {data} = result;
                let returnObj = data.reduce((acc,e) => {
                    let key = e.name;
                    if (!acc[key]) {acc[key] = e.price}
                    return acc;
                },{});
                setPackageObj(returnObj);
                setList(Object.keys(returnObj));
            })
            .catch(error => console.log('error', error));
    }
    const setSelectPackage = (value) => {
        formik.values.servicePkg = value.replace(/'/g, '');
        setPrice(packageObj[value.replace(/'/g, '')]);
        formik.values.price = price;
    }
    const setSelectProvider = (value) => {formik.values.provider = providerObj[value.replace(/'/g, '')];}
    
    useEffect(() => {
        getList();
        setPrice(1800000);
    },[])
    return (
        <div className={s.formContainer}>
            <form onSubmit={formik.handleSubmit} noValidate>
            <div className={s.formContainer__title}>
                THÔNG TIN GÓI DỊCH VỤ ĐĂNG KÝ
            </div>
            <div className={s.formContainer__input}>
                <div className={s.formContainer__input__provider}>
                    {formik.errors.provider && (<p>{formik.errors.provider}</p>)}
                    <MySelect list={Object.keys(providerObj)} name='provider' id='provider' setSelect={setSelectProvider} />
                    <label for="provider">Nhà cung cấp <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__servicePkg}>
                    {formik.errors.servicePkg && (<p>{formik.errors.servicePkg}</p>)}
                    <MySelect list={list} name='servicePkg' id='servicePkg' setSelect={setSelectPackage}/>
                    <label for="servicePkg">Gói dịch vụ <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__price}>
                    {formik.errors.price && (<p>{formik.errors.price}</p>)}
                    <input  
                    type="text" 
                    id="price"  
                    name="price"
                    onChange={formik.handleChange} 
                    value={price}
                    placeholder="Giá bán"
                    disabled/>
                    <label for="price">Giá bán</label>
                </div>
                <div className={s.formContainer__input__quantity}>
                    {formik.errors.quantity && formik.touched.quantity && (
                        <p>{formik.errors.quantity}</p>)}
                    <input  
                    type="number" 
                    id="quantity"
                    name="quantity" 
                    onChange={formik.handleChange} 
                    value={formik.values.quantity}
                    placeholder="Số lượng"/>
                    <label for="quantity">Số lượng <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__target}>
                    {formik.errors.target && formik.touched.target && (
                        <p>Required!</p>)}
                    <RadioBtn content={content1} name='target' id={id1} setRadio={setRadioTarget} />
                    <label for="target">Đối tượng<span className={s.redRose}>*</span></label>
                </div>
                {/* <div className={s.formContainer__input__deviceType}>
                    <RadioBtn content={content2} name='deviceType' setRadio={setRadioDevice} id={id2} />
                    <label for="deviceType">Loại thiết bị đầu cuối thuê bao <span className={s.redRose}>*</span></label>
                </div> */}
            </div>
            <MyBtn content="Quay lại" callback={props.previousStep} type='button' />
            <MyBtn content="Tiếp theo" callback={update} type='summit' />
            </form>
        </div>
    )
}