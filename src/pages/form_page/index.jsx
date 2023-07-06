import {useForm} from 'react-hook-form'
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
const {register, handleSubmit} = useForm()
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
        <form action="" onChange={handleSubmit}>
             <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
            <input type="text" {...register("name")} placeholder='Enter your name'/>
            <label htmlFor="surname">Last name*</label>
            <input type="text" {...register("surname")} placeholder='Enter your surname'/>
            <label htmlFor="surname">Email address*</label>
            <input type="text" {...register("surname")} placeholder='Enter your email'/>
            <label htmlFor="surname">Phone number*</label>
            <input type="text" {...register("surname")} placeholder='Enter your phone number'/>
            <label htmlFor="address">Address*</label>
            <input type="text" {...register("address")} placeholder='Enter your address'/>
            <label htmlFor="zip_code">Zip code*</label>
            <input type="text" {...register("zip_code")} placeholder='Enter your zip_code'/>
            <label htmlFor="city">City/Town*</label>
            <input type="text" {...register("city")} placeholder='Enter your city'/>
        </form>
    )
}
export default MakeCv