import gramophoneImg from "../imgs/timing/icons/gramophone.png"
import cakeImg from "../imgs/timing/icons/cake.png"
import socialImg from "../imgs/timing/icons/social.png"
import locationImg from "../imgs/timing/icons/location-pin.png"
import contractImg from "../imgs/timing/icons/contract.png"

const WeddingTiming = ({}) => { 
    return <>
        <div className='timing__section-when-block_time'>
            <div className='timing__section-when-block_time_first'>
                    <img alt="" src={contractImg}/>
                </div>
                <div className='timing__section-when-block_time_second'>
                    <div className='timing__section-when-block_time--time'>10:00</div>
                    <div className='timing__section-when-block_time--title'>Регистрация в ЗАГСе</div>
                </div>
            </div>
            <div className='timing__section-when-block_time'>
                <div className='timing__section-when-block_time_first'>
                    <div>
                        <div className='timing__section-when-block_time--time'>14 : 00</div>
                        <div className='timing__section-when-block_time--title'>Банкет</div>
                    </div>
                </div>
                <div className='timing__section-when-block_time_second'>
                    <img alt="" src={socialImg}/>
                </div>
            </div>
            <div className='timing__section-when-block_time'>
                <div className='timing__section-when-block_time_first'>
                    <img alt="" src={cakeImg}/>
                </div>
                <div className='timing__section-when-block_time_second'>
                    <div className='timing__section-when-block_time--time'>17:00</div>
                    <div className='timing__section-when-block_time--title'>Свадебный торт</div>
                </div>
            </div>
            <div className='timing__section-when-block_time'>
                <div className='timing__section-when-block_time_first'>
                    <div>
                        <div className='timing__section-when-block_time--time'>18:00</div>
                        <div className='timing__section-when-block_time--title'>Танцы</div>
                    </div>
                </div>
                <div className='timing__section-when-block_time_second'>
                    <img alt="" src={gramophoneImg}/>
                </div>
            </div>
            <div className='timing__section-when-block_time'>
                <div className='timing__section-when-block_time_first'>
                    <img alt="" src={locationImg}/>
                </div>
                <div className='timing__section-when-block_time_second'>
                    <div className='timing__section-when-block_time--time'>22:00</div>
                    <div className='timing__section-when-block_time--title'>Афтепати</div>
                </div>
            </div>
          </>
}

export default WeddingTiming