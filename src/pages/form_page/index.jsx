import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { useState } from 'react';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
function MakeCv() {
const [loading, setLoading] = useState(false);
const [imageUrl, setImageUrl] = useState();
const handleChange = (info) => {
  if (info.file.status === 'uploading') {
    setLoading(true);
    return;
  }
  if (info.file.status === 'done') {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  }
};
const uploadButton = (
  <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload
    </div>
  </div>);
    return(
        <form action="">
             <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action=""
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
            <label htmlFor="name">First name*</label>
            <input type="text" name="name" id='name' placeholder='Enter your name'/>
            <label htmlFor="surname">Last name*</label>
            <input type="text" name="surname" id='surname' placeholder='Enter your surname'/>
            <label htmlFor="email">Email address*</label>
            <input type="text" name="email" id='email' placeholder='Enter your email'/>
            <label htmlFor="phone">Phone number*</label>
            <input type="text" name="phone" id='phone' placeholder='Enter your phone number'/>
            <label htmlFor="address">Address*</label>
            <input type="text" name="address" id='address' placeholder='Enter your address'/>
            <label htmlFor="zip_code">Zip code*</label>
            <input type="text" name="zip_code" id='zip_code' placeholder='Enter your zip_code'/>
            <label htmlFor="city">City/Town*</label>
            <input type="text" name="city" id='city' placeholder='Enter your city'/>
            <div>
              <label htmlFor="date">Date of birth</label>
              <select name="" id="">
                <option value="n">m</option>
              </select>
              <select name="" id="">
                <option value="n">m</option>
              </select>
              <select name="" id="">
                <option value="n">m</option>
              </select>
              <label htmlFor="place">Place of birth</label>
              <input type="text" name="place" id="place"/>
              <label htmlFor="prava">Driving licence</label>
              <input type="text" name="prave" id="prava"/>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender">
                <option value="select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label htmlFor="millat">Nationality</label>
              <input type="text" name='millat' id='millat' />
              <label htmlFor="level">Marital status</label>
              <input type="text" name='level' id='level' />
              <label htmlFor="account">Account</label>
              <input type="text" name='account' id='account'  />
            </div>
        </form>
    )
        }
export default MakeCv