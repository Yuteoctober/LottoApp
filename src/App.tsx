import { useState, useEffect } from 'react'
import { motion } from "framer-motion" 
import { BsCashCoin,
  BsQuestionCircleFill,
  BsCaretDownFill,
  BsXCircleFill
  } from "react-icons/bs";

import './App.css'

function App() {

  const [double, setDouble] = useState(0);
  const [single, setSingle] = useState(0);
  const [power, setPower] = useState(false);
  const [limit, setLimit] = useState(true);
  const [showNum, setShowNum] = useState(false); 
  const [btnDisable, setBtnDisable] = useState(true); 
  const [closeMedal, setCloseMedal] = useState(false); 
  const [about, setAbout] = useState(false);
  const [randomArr, setRandomArr] = useState([0,0,0,0,0]);


  function getRandomArr() {
    const newRandomArr = randomArr.map(() => {
      const randomNumber = Math.floor(Math.random() * (double - single + 1)) + single;
      return randomNumber;
    });
    setRandomArr(newRandomArr);
  }

  function handleDouble(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (!isNaN(Number(value))) {
      setDouble(Number(value));
      setLimit(false)
      setBtnDisable(false)
    }
  }
  function handleSingle(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (!isNaN(Number(value))) {
      setSingle(Number(value));
      setLimit(false)
      setBtnDisable(false)
    }
  }

  function handlePower() {
    setShowNum(false)
    setPower(!power)
    if (!power) {
      setRandomArr([0,0,0,0,0,0])
    } else {
      setRandomArr([0,0,0,0,0])
    }
  }

  function handlePlay() {
    getRandomArr()
    setShowNum(true)
    setBtnDisable(true)

    setTimeout(() => {
      setBtnDisable(false)
    }, 8000);
  }

  useEffect(() => {
    // empty useEffect
  }, []);

  return (
    <>
      <section>
      {about && (  
      <>
       <div className='blur' onClick={() => {(about && closeMedal) && setCloseMedal(true); setAbout(false)}} >
            <div className='about_text'
              onClick={(e) => {
                setCloseMedal(false)
                e.stopPropagation();
              }}>
              <BsXCircleFill  
                className='exit_about' 
                onClick={() => setAbout(false)}
              />
              <h1>Slotto - A Luck-Rolling Game</h1>
                <p> Slotto is an engaging web application designed for 
                  those who enjoy the thrill of chance and luck-based 
                  games. The game involves selecting a range of 
                  numbers and rolling the dice to reveal a set of 
                  random numbers within the chosen range. With a 
                  visually appealing and user-friendly interface, 
                  Slotto provides an exciting and immersive experience 
                  for players seeking a bit of randomness and excitement.
                </p>
                <br />
                <h1>Key features include:</h1>
                <p>Number Selection: Users can set a range of numbers by choosing a minimum and maximum value.The interface offers a clear indication of the selected number range.</p>
                <p>Power Mode: Slotto includes a "Power" mode, adding an extra layer of unpredictability to the game. Activating the "Power" mode enhances the excitement of the random number generation.</p>
                <p>Gameplay: Players can initiate the game by clicking the "PLAY" button. The application dynamically generates a set of random numbers within the chosen range. A visually appealing display presents the randomly generated numbers, heightening the anticipation.</p>
                <p>Interactive Elements: The application features intuitive icons, including a coin symbol and a question mark for additional information. Users can access an informative about section, adding transparency to the game's mechanics.</p>
                <p>Design and Animation: The interface is aesthetically pleasing, with a banner enticing users to roll their luck. Animations and transitions enhance the overall user experience, providing a polished and enjoyable feel.</p>
                <p>About Section: Slotto includes an "About" section, providing users with additional details about the application. Users can close the "About" section by interacting with an 'X' icon.</p>
                <h1>Developer Information:</h1>
                <p>The project is built using React, making it modular, efficient, and scalable. Framer Motion is utilized for animations, contributing to a visually appealing and dynamic UI. The code includes state management using React hooks such as useState and useEffect.</p>
            </div>
          </div>
          </>
          )}
        <div className="container_top">
          <div className="left_top">
            <span><BsCashCoin/></span>
            <h1>Slotto</h1>
          </div>
          <div className="right_top">
            <span onClick={() => setAbout(true)}><BsQuestionCircleFill/></span>
          </div>
        </div>
        <div className="banner">
          <h1>Ready to roll your luck?</h1>
        </div>
        {limit? (
        <div className="limit_div">
          <span className='arrow_min'><BsCaretDownFill /></span>
          <span className='arrow_max'><BsCaretDownFill /></span>
          <span className='limit'>Select min - max below</span>
        </div>
        ):('')}
        <div className="container_num">
        <div className="select_number">
          <input
            className='single'
            type="text"
            inputMode='numeric'
            placeholder="00"
            maxLength={2}
            value={single}
            onChange={handleSingle}
          />
            <p>-</p>
            <input className="double"
              type="text"
              inputMode='numeric'
              placeholder='99'
              maxLength={2}
              value={double}
              onChange={handleDouble}
            /> 
            <div className={`power ${power ? 'active' : ''}`}
              onClick={handlePower}
            >
              <span>Pow</span>
            </div>
          </div>
          <div className="play">
          {randomArr.map((randomNum, index) => 
          (
            <div 
              className={`num ${index === 5 && randomArr.length === 6 ? 'last-item' : ''}`}
              key={index}>
              <h2>
                {!showNum? '':randomNum}
              </h2>
            </div>
          ))}
          </div>
          <motion.button className="btn_play"
            onClick={handlePlay}
            disabled={btnDisable? true : false}
            >
            <span>
              PLAY
            </span>
          </motion.button>
        </div>
      </section>
      <p className='btm_nav' >© 2023 - Yute Lilitprapun</p>
    </>
  )
}

export default App
