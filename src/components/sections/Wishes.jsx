import loveSplitImg from '../../imgs/wishes/love_spilt.png'
import coupleImg from '../../imgs/wishes/couple.png'
import pikesImg from '../../imgs/wishes/pikes.png'

export default () => {
    return (
        <div className="wishes__section">
            <div className='wishes__section-pikes-before'>
                <img src={pikesImg} />
            </div>
            <div className="wishes__section-title-wrapper">
                <div className="wishes__section-title_row"></div>
                <div className="wishes__section-title">
                    НАШИ ПОЖЕЛАНИЯ
                </div>
                <div className="wishes__section-title_row"></div>
            </div>
            <div className="wishes__section-wish">
                Просим оставить ваших детишек в надежных руках на день торжества, так как формат нашей свадьбы не предполагает развлечения для малышей и детей
            </div>
            
            <div className='wishes__section-love__split'>
                <img style={{height: '100%'}} src={loveSplitImg}/>
            </div>

            <div className="wishes__section-wish">
                Чтобы наши руки были свободны для объятий, будем рады легким подаркам в конвертах
            </div>

            <div className='wishes__section-end__img'>
                <img src={coupleImg}/>
            </div>
            <div className='wishes__section-pikes-after'>
                <img src={pikesImg} />
            </div>
        </div>
    )
}