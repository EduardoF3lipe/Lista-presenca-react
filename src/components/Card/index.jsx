import './style.css'


export function Card ({name, time}){
    return (
        <div className='card'>
            <div className="box">
                <strong>{name}</strong>
                <small>{time}</small>
            </div>
        </div>
    )
}