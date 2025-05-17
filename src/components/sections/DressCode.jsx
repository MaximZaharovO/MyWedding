import womenDressCode from '../../imgs/dress-code/women-dress.png'
import loveImg from '../../imgs/love.png'

export default () => {
    return (
        <div className="dress_code__section">
            <div className="dress_code__section-title">
                Дресс-код
            </div>
            <div className="dress_code__section-info">
                Нам будет очень приятно, если вы поддержите стиль нашей свадьбы в своих нарядах
            </div>

            <div className="dress_code__section-woman_info">
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
                        Не ограничивайте себя в креативных и ярких нарядах, дополняйте ваши обзары стильными и акцентными украшениями
                    </div>

                    <a href='https://pin.it/1ZMGFlYnG' target='_blank'  className='dress_code__section-woman_info-ideas_button'>ИДЕИ ДЛЯ ВАШИХ ОБРАЗОВ</a>
                </div>
            </div>
            <div className="dress_code__section-note">
             <div className="dress_code__section-note-title">
                ЗАМЕТКА!
             </div>
             <div className="dress_code__section-note-text">
                Вы можете выбрать наряд в базовых оттенках и разбавить ярким акцентом. Пример: сумки, платки, украшения
             </div>
            </div>
            <div className="dress_code__section-woman_info">
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
                        Не ограничивайте себя в креативных и ярких нарядах, дополняйте ваши обзары стильными и акцентными украшениями
                    </div>

                    <a href='https://pin.it/1ZMGFlYnG' target='_blank'  className='dress_code__section-woman_info-ideas_button'>ИДЕИ ДЛЯ ВАШИХ ОБРАЗОВ</a>
                </div>
                <div className="dress_code__section-woman_info-img">
                    <img src={womenDressCode}/>
                </div>
            </div>
        </div>
    )
}