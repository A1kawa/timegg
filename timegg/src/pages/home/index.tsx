import { useState, useEffect, useRef } from 'react'
import './home.css'
import calcTimeDays from "../count/calcTimer"
import Control from '../control/controls'
import Records from '../records/records'

function Clock() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0)
  const [timeArray, setTimeArray] = useState<Array<number | string>>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [daysPrev, setDaysPrev] = useState<number>(0)
  const [hoursPrev, setHoursPrev] = useState<number>(0)
  const [minsPrev, setMinsPrev] = useState<number>(0)
  const [secsPrev, setSecsPrev] = useState<number>(0)

  useEffect(() => {
    setDaysPrev(0)
    setHoursPrev(0)
    setMinsPrev(0)
    setSecsPrev(0)
  }, [isOpen]);

  useEffect(() => {
    let time: Array<number | string> = calcTimeDays(timeInSeconds)
    setTimeArray(time)
  }, [timeInSeconds])

  const submitPrev = () => {
    
    setTimeInSeconds(0)

    let prevTimeInSeconds: number = daysPrev + hoursPrev + minsPrev + secsPrev

    setTimeInSeconds(prevTimeInSeconds)
    setIsOpen(false)
  }


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
              <input onChange={(e) => setDaysPrev(parseInt(e.target.value) * 86400)} type="number" name="daysInput" placeholder='days'/>
              <input onChange={(e) => setHoursPrev(parseInt(e.target.value) * 3600)} type="number" name="hoursInput" placeholder='hrs'/>
              <input onChange={(e) => setMinsPrev(parseInt(e.target.value) * 60)} type="number" name="minutesInput" placeholder='min'/>
              <input onChange={(e) => setSecsPrev(parseInt(e.target.value))} type="number" name="secondsInput" placeholder='sec'/>
            </div>
            <button onClick={submitPrev}>submit time</button>
          </div>
        </section>
      )}
    </main>
  )
}

export default Clock
