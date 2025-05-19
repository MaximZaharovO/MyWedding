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
                Администрация площадки строго запрещает несовершеннолетним покидать банкетную зону без сопровождения взрослых. Просим родителей контролировать перемещение детей во избежание конфликтов с обслуживающим персоналом
            </div>

            <div className='wishes__section-love__split'>
                <img style={{height: '100%'}} src={loveSplitImg}/>
            </div>

            <div className="wishes__section-wish">
                Если у вас есть желание подарить нам цветы, мы будем искренне тронуты! Но чтобы их красота радовала нас не один вечер, а целый год, предлагаем объединиться и оформить для нас цветочную подписку. (можете объединиться с другими гостями для удобства в нашем чате)
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