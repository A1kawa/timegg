import { useState, useEffect } from 'react'
import './home.css'
import calcTimeDays from "../count/calcTimer"
import Control from '../control/controls'
import Records from '../records/records'

function Clock() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0)
  const [timeArray, setTimeArray] = useState<Array<number | string>>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  useEffect(() => {
    console.log("O estado isOpen mudou para:", isOpen);
  }, [isOpen]);

  useEffect(() => {
    let time: Array<number | string> = calcTimeDays(timeInSeconds)
    setTimeArray(time)
  }, [timeInSeconds])


  return (
    <main>
      <section className='timerCont'>
        <div className='letterCont' onClick={() => { setIsOpen(true) }}>
          <p className='timerText'>{timeArray[0]}</p>
          <p className='timerLeg'>days</p>
        </div>
        <span>:</span>
        <div className='letterCont'>
          <p className='timerText'>{timeArray[1]}</p>
          <p className='timerLeg'>hours</p>
        </div>
        <span>:</span>
        <div className='letterCont'>
          <p className='timerText'>{timeArray[2]}</p>
          <p className='timerLeg'>min</p>
        </div>
        <span>:</span>
        <div className='letterCont'>
          <p className='timerText'>{timeArray[3]}</p>
          <p className='timerLeg'>sec</p>
        </div>
      </section>
      <Control setTimeInSeconds={setTimeInSeconds} setIsOpen={setIsOpen} />
      <Records />
      {isOpen && (
        <section className='popUpCont'>
          <div className='popUpBG' onClick={() => setIsOpen(false)}></div>
          <div className='popUp'>
            <h1>set your personalized start time here</h1>
            <div>
              <input type="number" name="daysInput" placeholder='days' id="" />
              <input type="number" name="daysInput" placeholder='hrs' id="" />
              <input type="number" name="daysInput" placeholder='min' id="" />
              <input type="number" name="daysInput" placeholder='sec' id="" />
            </div>
            <button>submit time</button>
          </div>
        </section>
      )}
    </main>
  )
}

export default Clock
