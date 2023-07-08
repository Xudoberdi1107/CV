import { useEffect, useState } from 'react';
import style from "./style.module.scss"
import { useForm } from 'react-hook-form';
import { FaPlus, FaMinus } from "react-icons/fa"
import Cursor from "../../components/cursor/index"
function MakeCv() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('name', JSON.stringify(data));
  };

  const savedData = JSON.parse(localStorage.getItem('name'));


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
      setValue('month', savedData?.month)
      setValue('year', savedData?.year)
      setValue('place', savedData?.place)
      setValue('prava', savedData?.prava)
      setValue('gender', savedData?.gender)
      setValue('millat', savedData?.millat)
      setValue('level', savedData?.level)
      setValue('account', savedData?.account)
      setValue("img", savedData?.img)
    }
  }, [savedData])

  // const bear = useBearStore((state) => state.bears)
  // increasePopulation(file);

  // console.log(bears);

  const [file, setFile] = useState();
  function handleChangeimg(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setValue('img', e.target.files[0]);
    console.log(e.target.files)
  }



  function getNum(x) {
    let num = []
    for (let i = 1; i <= x; i++) {
      num.push(i);
    }
    return num;
  }
  let a = getNum(31)
  const month = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getYear(x) {
    let num = []
    for (let i = 1945; i <= x; i++) {
      num.push(i);
    }
    return num;
  }
  let year = getYear(2012)
  return (
   <>
    <Cursor back={"/form"} next={"/style_pages"}/>
    <div className={style.card}>
      <h1 className={style.card__head}>Personal details</h1>
      <hr />
    
      <hr />
      <br /><br /><br />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
       <div className={style.card__form}>
       <div className={style.card__box}>
          <div className={style.card__img}>
            <div className={style.card__image}>
              <div className={style.card__image__p}>
                <img src={file} alt='Preview' />
              </div>
              <input type="file" onChange={handleChangeimg} />
            </div>
            <div className={style.card__name}>
              <div>
                <label htmlFor="name">First name*</label>
                <input type="text" {...register('name')} id='name' placeholder='Enter your name' />
              </div>
              <div>
                <label htmlFor="surname">Last name*</label>
                <input {...register('surname')} type="text" id='surname' placeholder='Enter your surname' /></div>
            </div>
          </div>
          <div className={style.card__email}>
            <div className={style.card__email__top}>
              <div>
                <label htmlFor="email">Email address*</label>
                <input {...register('email')} type="text" id='email' placeholder='Enter your email' />
              </div>
              <div>
                <label htmlFor="phone">Phone number*</label>
                <input {...register('phone')} type="text" id='phone' placeholder='Enter your phone number' /></div>
            </div>
            <div>
              <label htmlFor="address">Address*</label>
              <input {...register('address')} type="text" id='address' placeholder='Enter your address' />
            </div>
          </div>
          <div className={style.card__zip}>
            <div>
              <label htmlFor="zip_code">Zip code*</label>
              <input {...register('zip_code')} type="text" id='zip_code' placeholder='Enter your zip_code' />
            </div>
            <div>        <label htmlFor="city">City/Town*</label>
              <input {...register('city')} type="text" id='city' placeholder='Enter your city' /></div>
          </div>
        </div>
        <input type="checkbox" id='chek' className={style.card__chek} />
        <div className={style.card__bottom}>
          <div className={style.card__bottom__date}> <label htmlFor="date">Date of birth</label>
            <div>
              <select id="day" {...register('day')}>
                <option value="0">Day</option>
                {
                  a?.map((e) =>
                    <option value={`${e}`} key={e}>{e}</option>
                  )
                }
              </select>
              <select id="" {...register('month')}>
                {
                  month?.map((e) =>
                    <option value={`${e}`} key={e}>{e}</option>
                  )
                }
              </select>
              <select id="" {...register('year')}>
                {
                  year?.map((e) =>
                    <option value={`${e}`} key={e}>{e}</option>
                  )
                }
              </select></div></div>
          <div>
            <label htmlFor="place">Place of birth</label>
            <input {...register('place')} type="text" id="place" />
          </div>
          <div>
            <label htmlFor="prava">Driving licence</label>
            <input {...register('prava')} type="text" id="prava" />
          </div>
          <div className={style.card__bottom__gender}>
            <label htmlFor="gender">Gender</label>
            <select id="gender" {...register('gender')}>
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div> <label htmlFor="millat">Nationality</label>
            <input {...register('millat')} type="text" id='millat' /></div>
          <div>
            <label htmlFor="level">Marital status</label>
            <input {...register('level')} type="text" id='level' />
          </div>
          <div> <label htmlFor="account">Account</label>
            <input {...register('account')} type="text" id='account' /></div>
          <div> <label htmlFor="account">Account</label>
            <input {...register('account')} type="text" id='account' /></div>
        </div>
        <label htmlFor="chek" className={style.card__bottom__add}>{<FaPlus className={style.card__plus}/>} {<FaMinus className={style.card__minus}/>} Additional information</label>
       </div>
        <button type='submit' className={style.card__btn}>Submit</button>
      </form>
    </div>
   </>
  )
}
export default MakeCv