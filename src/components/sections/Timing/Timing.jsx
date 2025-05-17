import doveImg from "../../../imgs/timing/dove.png"
import WeddingTiming from './WeddingTiming';
import loveImg from '../../../imgs/love.png'

const Timing = () => {
    return (
        <div className='timing__section'>
            <div className='timing__section-title'>
                <img style={{width: 136}} src={doveImg}/>
            <div className='timing__section-when_question'>
                К<span>О<img alt="" src={loveImg}/></span>ГДА?
            </div>
            <div className='timing__section-when'>
                <div className='timing__section-when_date'>19</div>
                <div className='timing__section-when_my'>
                <div className='timing__section-when_month'>июля</div>
                <div className='timing__section-when_year'>2025</div>
                </div>
            </div>
            </div>
            <div className='timing__section-when-block'>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: 'center'
            }}>
                <div className='timing__section-when-block_title'>ВО СКОЛЬКО?</div>
                <WeddingTiming/>
            </div>
            </div>
        </div>
    )
}

export default Timing