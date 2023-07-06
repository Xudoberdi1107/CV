
import { useState } from 'react';
import style from "./style.module.scss"

function MakeCv() {
  const [file, setFile] = useState();
  function handleChangeimg(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
    return(
       <div className={style.card}>
         <form action="">
         <input type="file" onChange={handleChangeimg} />
            <img src={file} />
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
       </div>
    )
        }
export default MakeCv