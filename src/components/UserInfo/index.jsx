import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import '../../scss/fonts.scss';
import MyBtn from '../common/MyBtn';
import MySelect from '../common/MySelect';
import MyUpload from '../common/MyUpload';
import s from './UserInfo.module.scss';
import { DatePicker, Space } from 'antd';
import moment from 'moment';


export default function UserInfo(props) {
    const [listProvince,setListProvince] = useState([]);
    const [listDistrict,setListDistrict] = useState([]);
    const [provinceObj,setProvinceObj] = useState({});
    const [districtObj,setDistrictObj] = useState({});
    const [typeId,setTypeId] = useState("Chứng minh nhân dân");
    const update = (key,value) => {
        props.update(key,value);
        console.log(formik.values.IdFileB64)
    };
    
    const getProvince = () => {
        
        var myHeaders1 = new Headers();
        myHeaders1.append("Token", "uk0resTyJfVq4uk3Fd57grxsEZb3Nvjy8r29ckZ5HUwm9Ddn4G");
        
        var requestOptions1 = {
          method: 'GET',
          headers: myHeaders1,
          redirect: 'follow'
        };
          
            fetch(" http://10.30.1.47/api/requesthsm/province", requestOptions1)
            .then(response => response.json())
            .then(response => {
            const result = response;
            const { data } = result;
            let myList = data.reduce((acc,e) => {
                let key = e.fullname;
                if (!acc[key]) {acc[key] = e.code};
                return acc;
            },{});
            setProvinceObj(myList);
            setListProvince(Object.keys(myList));
            return myList;
            })
            .catch(error => console.log('error', error));
        }
        const getDistrict = (code) => {

            var myHeaders2 = new Headers();
            myHeaders2.append("Token", "uk0resTyJfVq4uk3Fd57grxsEZb3Nvjy8r29ckZ5HUwm9Ddn4G");
            
            var requestOptions2 = {
              method: 'GET',
              headers: myHeaders2,
              redirect: 'follow'
            };
            
            const districtApi = `http://10.30.1.47/api/requesthsm/district?code=${code}`  
            fetch(districtApi, requestOptions2)
              .then(response => response.json())
              .then(response => {
                const result = response;
                const { data } = result;
                let myListDistrict = data.reduce((acc,e) => {
                    let key = e.fullname;
                    if (!acc[key]) {acc[key] = e.code};
                    return acc;
                },{});
                setDistrictObj(myListDistrict);
                setListDistrict(Object.keys(myListDistrict));
                })
              .catch(error => console.log('error', error));
        }
        
    
    useEffect(() => {
        getProvince();
        getDistrict(101);
    },[])
    const listIdtype = {
        'Chứng minh nhân dân':1,
        'Hộ chiếu':2,
        'Căn cước công dân':3,
        'Mã bảo hiểm xã hội':4,
    }
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    const formik = useFormik({
        initialValues: {
            typeId: 1,
            IdCard: '',
            date: moment().format("YYYY/MM/DD"),
            fullName: '',
            mobile: '',
            locationId: '',
            userEmail: '',
            locationResident: '',
            province: 101,
            district: 10115,
            IdFile: null,
            IdFileName: '',
            IdFileB64: '',
            taxNum: null,
          },
          onSubmit: values => {
            for (const [key, value] of Object.entries(values)) {
                update(key,value);
                }
                props.goToStep(2);
          },
          validationSchema: Yup.object({
            typeId: Yup.string()
              .required("Required!"),
            IdCard: Yup.string()
              .required("Required!").min(8,"Not valid!").max(16,"Not valid!"),
            date: Yup.string()
              .required("Required!"),
            locationId: Yup.string()
              .required("Required!"),
            fullName: Yup.string()
              .required("Required!"),
            mobile: Yup.string()
              .matches(phoneRegExp, 'Phone number is not valid')
              .required("Required!"),
            userEmail: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
            locationResident: Yup.string()
              .required("Required!"),
            province: Yup.number()
              .required("Required!"),
            district: Yup.number()
              .required("Required!"),
            IdFile: Yup.object({
                status: Yup.string().matches(/(done)/, "Required")
            }).required("Required"),
            taxNum: Yup.string().nullable(true).min(8,"Not valid!").max(16,"Not valid!"),
          })
      })
    
    const setSelectProvince = (value) => {
        const codeProvince = provinceObj[value.replace(/'/g, '')];
        console.log(codeProvince)
        formik.values.province = codeProvince;
        getDistrict(codeProvince);
    }
    const setSelectDistrict = (value) => {
        const codeDistrict = districtObj[value.replace(/'/g, '')];
        console.log(codeDistrict)
        formik.values.district = codeDistrict;
    }
    const setSelectTypeId = (value) => {
        formik.values.typeId = listIdtype[value.replace(/'/g, '')];
        setTypeId(value);
    }
    const getIdFile = (file,b64) => {
        formik.values.IdFile = file;
        formik.values.IdFileName = file.name;
        formik.values.IdFileB64 = b64;
    }
    const getDateAntd = (date, dateString) => {
        formik.values.date = dateString;
    }

    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const customFormat = value => `custom format: ${value.format(dateFormat)}`;


    return (
        <div className={s.formContainer}>
            <form onSubmit={formik.handleSubmit} >
            <div className={s.formContainer__title}>
                THÔNG TIN CÁ NHÂN ĐĂNG KÝ
            </div>
            <div className={s.formContainer__input}>
                <div className={s.formContainer__input__typeId}>
                    {formik.errors.typeId && formik.touched.typeId && (
                        <p>{formik.errors.typeId}</p>)}
                    <MySelect list={Object.keys(listIdtype)} name='typeId' id='typeId' setSelect={setSelectTypeId} />
                    <label for="typeId">Loại định danh <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__IdCard}>
                    {formik.errors.IdCard && formik.touched.IdCard && (
                        <p>{formik.errors.IdCard}</p>)}
                    <input  
                    type="text" 
                    id="IdCard"
                    name="IdCard" 
                    placeholder="Mã định danh" 
                    onChange={formik.handleChange} 
                    value={formik.values.IdCard} />
                    <label for="IdCard">{typeId.replace(/'/g, '')} <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__date}>
                    {formik.errors.date && formik.touched.date && (
                        <p>{formik.errors.date}</p>)}
                    <DatePicker 
                    defaultValue={moment(moment(), dateFormatList[0])} 
                    format={dateFormat}
                    onChange={getDateAntd}
                    className="formContainer__input__date__antd"
                    style={{
                        height: "38px",
                        border: "none",
                        borderRadius: "0px",
                        cursor: "pointer",
                        backgroundColor: 'transparent',
                        outline: "none",
                        padding: "0",
                        width: "100% !important",
                        boxShadow: "none"
                      }} />
                    <label for="date">Ngày cấp <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__locationId}>
                    {formik.errors.locationId && formik.touched.locationId && (
                        <p>{formik.errors.locationId}</p>)}
                    <input  
                    type="text" 
                    id="locationId"
                    onChange={formik.handleChange} 
                    value={formik.values.locationId}
                    placeholder="Nơi cấp"/>
                    <label for="locationId">Nơi cấp <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__upload}>
                    {formik.errors.IdFile && formik.touched.IdFile && (
                        <p>Required</p>)}
                    <MyUpload getFile={getIdFile}/>
                    <label>File CMND/Hộ chiếu <span>*</span></label>
                </div>
                <div className={s.formContainer__input__fullName}>
                    {formik.errors.fullName && formik.touched.fullName && (
                        <p>{formik.errors.fullName}</p>
                    )}
                    <input  
                    type="text" 
                    id="fullName" 
                    onChange={formik.handleChange} 
                    value={formik.values.fullName}
                    placeholder="Họ tên cá nhân"/>
                    <label for="fullName">Họ tên cá nhân <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__mobile}>
                    {formik.errors.mobile && formik.touched.mobile && (
                        <p>{formik.errors.mobile}</p>)}
                    <input  
                    type="text" 
                    id="mobile" 
                    onChange={formik.handleChange} 
                    value={formik.values.mobile}
                    placeholder="Số điện thoại"/>
                    <label for="mobile">Số điện thoại <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__userEmail}>
                    {formik.errors.userEmail && formik.touched.userEmail && (
                        <p>{formik.errors.userEmail}</p>)}
                    <input  
                    type="text" 
                    id="userEmail"
                    onChange={formik.handleChange} 
                    value={formik.values.userEmail} 
                    placeholder="Email"/>
                    <label for="userEmail">Email <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__locationResident}>
                    {formik.errors.locationResident && formik.touched.locationResident && (
                        <p>{formik.errors.locationResident}</p>)}
                    <input  
                    type="text" 
                    id="locationResident" 
                    onChange={formik.handleChange} 
                    value={formik.values.locationResident} 
                    placeholder="Địa chỉ thường trú"/>
                    <label for="locationResident">Địa chỉ thường trú <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__province}>
                    {formik.errors.locationResident && formik.touched.locationResident && (
                        <p>{formik.errors.locationResident}</p>)}
                        <MySelect list={listProvince} name='province' id='province' setSelect={setSelectProvince}/>
                    <label for="province">Tỉnh thành <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__district}>
                    {formik.errors.locationResident && formik.touched.locationResident && (
                        <p>{formik.errors.locationResident}</p>)}
                    <MySelect list={listDistrict} name='district' id='district' setSelect={setSelectDistrict}/>
                    <label for="district">Quận huyện <span className={s.redRose}>*</span></label>
                </div>
                <div className={s.formContainer__input__taxNum}>
                    {formik.errors.taxNum && formik.touched.taxNum && (
                        <p>{formik.errors.taxNum}</p>)}
                    <input  
                    type="text" 
                    id="taxNum" 
                    name="taxNum" 
                    onChange={formik.handleChange} 
                    value={formik.values.taxNum} 
                    placeholder="MST cá nhân"/>
                    <label for="taxNum">MST cá nhân (nếu có)</label>
                </div>
            </div>
            <div className={s.formContainer__warn}>
            Lưu ý: Thông tin Số điện thoại và Email bắt buộc nhập chính xác để xác minh khách hàng và nhận hỗ trợ dịch vụ từ NCC
            </div>
            <MyBtn content="Tiếp theo" callback={update} type='submit'/>
            </form>
        </div>
    )
}