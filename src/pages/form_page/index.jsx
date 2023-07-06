import { useEffect, useState } from 'react';
import style from "./style.module.scss"
import { useForm } from 'react-hook-form';
function MakeCv() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('name', JSON.stringify(data));
  };

  const savedData = JSON.parse(localStorage.getItem('name'));

  console.log(savedData, "data");

  useEffect(() => {
    if (savedData) {
      setValue('name', savedData?.name)
      setValue('surname', savedData?.surname)
      setValue('email', savedData?.email)
      setValue('phone', savedData?.phone)
      setValue('address', savedData?.address)
      setValue('zip_code', savedData?.zip_code)
      setValue('city', savedData?.city)
      setValue('day', savedData?.day)
      setValue('month', savedData?.name)
      setValue('year', savedData?.year)
      setValue('place', savedData?.place)
      setValue('prava', savedData?.prava)
      setValue('gender', savedData?.gender)
      setValue('millat', savedData?.millat)
      setValue('level', savedData?.level)
      setValue('account', savedData?.account)
    }
  })


  const [file, setFile] = useState();
  function handleChangeimg(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={style.card}>
      <h1>Personal details</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={style.card__img}>
          <div className={style.card__image}><input type="file" onChange={handleChangeimg} />
            <img src={file} /></div>
          <div className={style.card__name}>
            <div>
              <label htmlFor="name">First name*</label>
              <input type="text" {...register('name')} id='name' placeholder='Enter your name' />
            </div>
            <div><label htmlFor="surname">Last name*</label>
              <input {...register('surname')} type="text" id='surname' placeholder='Enter your surname' /></div>
          </div>
        </div>
        <div className={style.card__email}>
          <div>
            <label htmlFor="email">Email address*</label>
            <input {...register('email')} type="text" id='email' placeholder='Enter your email' />
          </div>
          <div>
            <label htmlFor="phone">Phone number*</label>
            <input {...register('phone')} type="text" id='phone' placeholder='Enter your phone number' /></div>
            </div>
        <label htmlFor="address">Address*</label>
        <input {...register('address')} type="text" id='address' placeholder='Enter your address' />
        <label htmlFor="zip_code">Zip code*</label>
        <input {...register('zip_code')} type="text" id='zip_code' placeholder='Enter your zip_code' />
        <label htmlFor="city">City/Town*</label>
        <input {...register('city')} type="text" id='city' placeholder='Enter your city' />
        <div>
          <label htmlFor="date">Date of birth</label>
          <select id="" {...register('day')}>
            <option value="n">m</option>
          </select>
          <select id="" {...register('month')}>
            <option value="n">m</option>
          </select>
          <select id="" {...register('year')}>
            <option value="n">m</option>
          </select>
          <label htmlFor="place">Place of birth</label>
          <input {...register('place')} type="text" id="place" />
          <label htmlFor="prava">Driving licence</label>
          <input {...register('prava')} type="text" id="prava" />
          <label htmlFor="gender">Gender</label>
          <select id="gender" {...register('gender')}>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="millat">Nationality</label>
          <input {...register('millat')} type="text" id='millat' />
          <label htmlFor="level">Marital status</label>
          <input {...register('level')} type="text" id='level' />
          <label htmlFor="account">Account</label>
          <input {...register('account')} type="text" id='account' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default MakeCv