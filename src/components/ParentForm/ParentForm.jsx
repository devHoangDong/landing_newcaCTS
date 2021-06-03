import React from 'react';
import { useHistory } from "react-router-dom";
import MyBtn from '../common/MyBtn';
import Wizard from '../StepWizard/wizard';
import './parentForm.scss';


export default function ParentForm({props}) {
  let history = useHistory();
  const handleClick = () => { history.push('/') }
  
    return (
        <div className="parentForm">
          <MyBtn callback={handleClick} type="button" content=" Trang chủ" icon={<i class="fal fa-home"></i>} />
          <Wizard callback={handleClick} />
        </div>
        
    )
}