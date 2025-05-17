import menDressCode from '../../../imgs/dress-code/men-dress.png'
import men1 from '../../../imgs/dress-code/mens 1.png'
import men2 from '../../../imgs/dress-code/mens 2.png'

import loveImg from '../../../imgs/love.png'

export default () => {
    return (<>
        <div className="dress_code__section-men_info">
            <div className='dress_code__section-men_info_description'>
                <div className='dress_code__section-men_info-description_title'>
                    <div className='dress_code__section-men_info-description_title-img'>
                        <img style={{height: '100%'}} src={loveImg}/>
                    </div>
                    <div className='dress_code__section-men_info-description_title-text'>
                        Man
                    </div>
                    <div className='dress_code__section-men_info-description_title-img'>
                        <img style={{height: '100%'}} src={loveImg}/>
                    </div>
                </div>
                <div className='dress_code__section-men_info-description_wish'>
                    Пусть ваши образы буддут расслабленые и в базовых оттенках. Выбирате для себя комфортнык и легкие ткани 
                </div>
            </div>
            <div className="dress_code__section-men_info-img">
                <img src={menDressCode}/>
            </div>
        </div>
        <div className='dress_code__section-men_imgs'>
            <div className='dress_code__section-men_img'>
                <img src={men1} />
            </div>
            <div className='dress_code__section-men_img'>
                <img src={men2} />
            </div>
        </div>
    </>)
}