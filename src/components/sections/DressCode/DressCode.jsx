
import DressCodeMan from './DressCodeMan.jsx'
import DressCodeTitle from './DressCodeTitle'
import DressCodeWoman from './DressCodeWoman'

export default () => {
    return (
        <div className="dress_code__section">
            <DressCodeTitle/>
            <DressCodeWoman/>
            <div className="dress_code__section-note">
             <div className="dress_code__section-note-title">
                ЗАМЕТКА!
             </div>
             <div className="dress_code__section-note-text">
                Вы можете выбрать наряд в базовых оттенках и разбавить ярким акцентом. Пример: сумки, платки, украшения
             </div>
            </div>
            <DressCodeMan/>
        </div>
    )
}