import { useState } from 'react'
import './controls.css'

type Props = {
    setTimeInSeconds: Function
    setIsOpen: Function
}

function Control(props: Props) {

    const { setTimeInSeconds, setIsOpen } = props
    const [intervalId, setIntervalId] = useState<number>(0)

    const handlePlay = () => {
        let interval: number = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState + 1)
        }, 1000);

        setIntervalId(interval)
    }

    const handlePause = () => {
        clearInterval(intervalId)
    }

    const handleReset = () => {
        clearInterval(intervalId)
        setTimeInSeconds(0)
    }

    return (
        <>
            <section className='buttonsCont'>
                <button onClick={handlePlay}>start</button>
                <button onClick={handlePause}>pause</button>
                <button onClick={handleReset}>reset</button>
                <button onClick={() => { setIsOpen((prevState:boolean) => !prevState)}}>set prev time</button>
            </section>
        </>
    )
}

export default Control