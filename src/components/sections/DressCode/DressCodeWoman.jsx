import loveImg from '../../../imgs/love.png'
import womenDressCode from '../../../imgs/dress-code/women-dress.png'

export default () => {
    return <div className="dress_code__section-woman_info">
        <div className="dress_code__section-woman_info-img">
            <img src={womenDressCode}/>
        </div>
        <div className='dress_code__section-woman_info_description'>
            <div className='dress_code__section-woman_info-description_title'>
                <div className='dress_code__section-woman_info-description_title-img'>
                    <img style={{height: '100%'}} src={loveImg}/>
                </div>
                <div className='dress_code__section-woman_info-description_title-text'>
                    Lady
                </div>
                <div className='dress_code__section-woman_info-description_title-img'>
                    <img style={{height: '100%'}} src={loveImg}/>
                </div>
            </div>
            <div className='dress_code__section-woman_info-description_wish'>
                Не ограничивайте себя в креативных и ярких нарядах, дополняйте ваши образы стильными и акцентными украшениями
            </div>

            <a href='https://pin.it/1ZMGFlYnG' target='_blank'  className='dress_code__section-woman_info-ideas_button'>ИДЕИ ДЛЯ ВАШИХ ОБРАЗОВ</a>
        </div>
    </div>
}