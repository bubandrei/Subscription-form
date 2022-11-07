import react, { useEffect, useState } from "react";
import './index.css';
import icon from './icon.png'

const Newsletter = () => {
  const [logInData, setLogInData] = useState([]);
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogInData([...logInData, e.target[0].value])
    setValue('')
  };
  return (
    <>
      <div className='wrap'>
        <div className="inBlock">
          <div className="mainTitle">
            <div><img src={icon}></img> </div>
            <div className="wrapTitle">
              <div className="title">Zapisz się do newslettera</div>
              <div className="inform">Bądź informowany o każdej zmianie</div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Twój adres email"
              value={value}
              onChange={(e) => setValue(e.target.value)
              }></input>
            <button className="btn"><span className="btnText"> ZAPISZ SIĘ</span></button>
          </form>
          <div className="count">{logInData.length} twoich znajomych już nas subskrybuje</div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
