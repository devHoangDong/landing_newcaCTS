import React, {useState} from 'react'
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import s from './MyUpload.module.scss';
import { countBy } from 'lodash';


export default function MyUpload({getFile}) {
  const [selectedFile,SetSelectedFile] = useState(null);
  const [b64,SetB64] = useState('');
  
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 1000);
  };
  
  const onChange = info => {
    switch (info.file.status) {
      case "uploading":
        break;
      case "done":
        const b64final = b64.replace("data:", "").replace(/^.+,/, "");
        SetSelectedFile(info.file);
        getFile(info.file,b64final);
        break;

      default:
        // error or removed
        SetSelectedFile(null);
    }
  };
  
  const props = {
    name: 'file',
    accept: 'image/jpeg,image/png,application/pdf',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    progress: {
      strokeWidth: 1,
      strokeColor: {
        '0%': '#fff',
        '100%': '#008FFF',
      },
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
    beforeUpload(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onloadend = () => {
  
      // use a regex to remove data url part
        const base64String = reader.result
            .replace('data:', '')
            .replace(/^.+,/, '');
  
      // log to console
      // logs wL2dvYWwgbW9yZ...
        SetB64(base64String)
      };
      reader.readAsDataURL(file);
    })
    }
    
  };
      
    return (
        <>
    <Upload 
      {...props} className={s.upload}
      customRequest={dummyRequest}
      onChange={onChange}
       >
      <Button icon={<UploadOutlined />} className={s.btn}>Upload</Button>
    </Upload>
  </>
    )
}