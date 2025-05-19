import doveImg from "../../../imgs/timing/dove.png"
import WeddingTiming from './WeddingTiming';
import loveImg from '../../../imgs/love.png'
import whenBack from "../../../imgs/place/whenback.png"

const Timing = ({isFriends}) => {
    return (
        <div className='timing__section'>
            <div className='timing__section-title'>
                <img style={{width: '13%'}} src={doveImg}/>
            <div className='timing__section-when_question'>
                К<span>О<img style={{width: '80%'}} alt="" src={loveImg}/></span>ГДА?
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
                <img src={whenBack} alt="" />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: 'center'
                }}>
                    <div className='timing__section-when-block_title'>ВО СКОЛЬКО?</div>
                    <WeddingTiming isFriends={isFriends}/>
                </div>
            </div>
        </div>
    )
}

export default Timing