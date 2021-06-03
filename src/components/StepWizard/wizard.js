import React, { Fragment, useState } from 'react';
import StepWizard from "react-step-wizard";
import CompanyForm from '../CompanyForm/CompanyForm';
import EmergencyForm from '../EmergencyForm';
import RegisterCTC from '../RegisterCTC';
import SampleRegister from '../SampleRegister';
import UserInfo from '../UserInfo/index';
import Nav from './nav';
import transitions from './transitions.module.scss';
import styles from './wizard.module.scss';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




/* eslint react/prop-types: 0 */

/**
 * A basic demonstration of how to use the step wizard
 */
const Wizard = ({callback}) => {
    const [state, SetState] = useState({
        form: {},
        transitions: {
            enterRight: `${transitions.animated} ${transitions.enterRight}`,
            enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
            exitRight: `${transitions.animated} ${transitions.exitRight}`,
            exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
            intro: `${transitions.animated} ${transitions.intro}`,
        },
        // demo: true, // uncomment to see more
    });

    const updateForm = (key,value) => {
        const { form } = state;
        form[key] = value;
        SetState({
            ...state,
            form,
        });
    };
    // Do something on step change
    // const onStepChange = (stats) => {
    //     // console.log(stats);
    // };

    const setInstance = SW => SetState({
        ...state,
        SW,
    });

    const { SW, demo } = state;

// send all Form info 
    const mapObj= {
        is_organization:"forCompany",
        organization_name: "companyName",
        organization_position: "position",
        organization_department: "roomName",
        organization_tax_code: "numberCode",
        organization_email:"email",
        organization_phone:"phoneNumber",
        organization_address:"adress",
        organization_file_name:"confirmFileName",
        organization_file_base64:"confirmFileB64",
        object:"target",
        provider_id:"provider",	
        package_code:"servicePkg",
        quantity:"quantity",
        identity_type:"typeId",	
        identity_code:"IdCard",	
        identity_date:"date",	
        identity_place:"locationId",
        identity_file_name:"IdFileName",
        identity_file_base64:"IdFileB64",
        tax_code:"taxNum",
        fullname:"fullName",
        phone:"mobile",
        email:"userEmail",
        address:"locationResident",
        province_code:"province",
        district_code:"district",
        support_register:"support",
        fullname_support:"keyName",	
        position_support:"keyPosition",	
        email_support:"keyEmail",
        phone_support:"keyMobile",
        type_document:"docType",
        dk0102_file_name:"fileSigned01Name",
        dk0102_file_base64:"fileSigned01B64",
    }
    const formObj = state.form;
    const handleResult = (map,form) => {
        const finalObj = {};
        for (const [keyForm, valueForm] of Object.entries(form)) {
            for (const [keyMap, valueMap] of Object.entries(map)) {
                if (keyForm === valueMap) {
                    finalObj[keyMap] = valueForm;
                }
            }
        }
        return finalObj;
    };
    const Success = () => {
        let timerInterval 
        const MySwal = withReactContent(Swal) 
        MySwal.fire({  
            icon: 'success',  
            title: 'Đăng ký thành công !!!',
            html: 'Quay về <b></b> seconds.',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                    b.textContent = "Trang chủ" + Math.round(Swal.getTimerLeft()/1000)
                    }
                }
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {  
            callback()
        })  
    }
    const Error = () => {
        const MySwal = withReactContent(Swal) 
        MySwal.fire({  
            icon: 'error',  
            title: 'Có lỗi khi đăng ký!!!',
        })
    }

    const showForm = () => {
        var myHeaders = new Headers();
        myHeaders.append("Token", "uk0resTyJfVq4uk3Fd57grxsEZb3Nvjy8r29ckZ5HUwm9Ddn4G");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(handleResult(mapObj,formObj));
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(" http://10.30.1.47/api/requesthsm/create", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result, 'API trả về')
           Success()
        })
        .catch(error => {
            console.log('error', error)
            Error()
        });
    }
    return (
        <div className={styles.stepwizard}>
            <h3 className={styles.title}>Tạo Yêu cầu CTS cá nhân </h3>
            <div >
                <div >
                    <div>
                        <StepWizard
                            isHashEnabled
                            transitions={state.transitions} // comment out for default transitions
                            nav={<Nav />}
                            instance={setInstance}
                        >
                            <UserInfo update={updateForm} hashKey={'FirstStep'} SW={SW}/>
                            {/* <First hashKey={'FirstStep'} update={updateForm} /> */}
                            <RegisterCTC update={updateForm} />
                            <CompanyForm  update={updateForm} />
                            {/* <Second form={state.form} /> */}
                            
                            
                            <EmergencyForm update={updateForm} />
                            <SampleRegister hashKey={'TheEnd!'} update={updateForm} finish={showForm} />
                            {null /* will be ignored */}
                            {/* <Last hashKey={'TheEnd!'} /> */}
                        </StepWizard>
                    </div>
                </div>
            </div>
            { (demo && SW) && <InstanceDemo SW={SW} /> }
            
        </div>
    );
};

export default Wizard;

/** Demo of using instance */
const InstanceDemo = ({ SW }) => (
    <Fragment>
        <h4>Control from outside component</h4>
        <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
    </Fragment>
);

/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
export const Stats = ({
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
}) => (
    <div>
        <hr />
        { step > 1 &&
            <button className='btn btn-default btn-block' onClick={previousStep}>Go Back</button>
        }
        { step < totalSteps ?
            <button className='btn btn-primary btn-block' onClick={nextStep}>Continue</button>
            :
            <button className='btn btn-success btn-block' onClick={nextStep}>Finish</button>
        }
        <hr />
        {/* <div style={{ fontSize: '21px', fontWeight: '200' }}>
            <h4>Other Functions</h4>
            <div>Current Step: {currentStep}</div>
            <div>Total Steps: {totalSteps}</div>
            <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
            <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
            <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
        </div> */}
    </div>
);

/** Steps */

