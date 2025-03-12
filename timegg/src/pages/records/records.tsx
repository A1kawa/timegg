import './records.css'

function Records() {
    const curRec: string = '2 days, 11 hours, 23 mins n 40 secs'
    return (
        <section className='curRec'>
            <h1>
                our current <i>no-sleep</i> record is<br/>
                <i>{curRec}</i>
            </h1>
        </section>
    )
}

export default Records