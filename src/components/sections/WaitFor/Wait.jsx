import { Timer } from './Timer';
import weddingImg from '../../../imgs/wait/wedding.png'

const Wait = () => {
    return (
        <div className='wait__section'>
            <div className='wait__section-title'>
                МЫ СТАНЕМ СЕМЬЕЙ ЧЕРЕЗ
            </div>
            <div className='wait__section-timer'>
                <Timer end={new Date(2025, 6, 19, 13, 20)}/>
            </div>
            <div className='wait__section-img'>
                <img src={weddingImg} />
            </div>
            <div className='wait__section-line'></div>
            <div className='wait__section-line'></div>
            <div className='wait__section-line'></div>
        </div>
    )
}

export default Wait