import chatImg from "../../imgs/chat/chat-icon.svg"

const Chat = ({isFriends}) => {
    return (
        <div className="chat__section">
            <div className="chat__section-title">
                ЧАТ ДЛЯ ГОСТЕЙ
            </div>
            <div className="chat__section-description">
                Добавляйтесь в телеграмм чат гостей, где будет дополнительная информация о вечеринке, а так же вы сможете скинуть и получить после свадьбы все фото и видео
            </div>
            <a target="_blank" href="https://t.me/+vdgw73vOzk40MWQy" className="chat__section-guests_button chat__section_button">
                <span className="chat__section_button-img">
                    <img src={chatImg}/>
                </span>
                Чат для гостей
            </a>
            {isFriends && <a target="_blank" href="https://t.me/+zpEp3ShsaoEzYzdi" className="chat__section-friends_button chat__section_button">
                <span className="chat__section_button-img">
                    <img src={chatImg}/>
                </span>
                Чатик для друзей
            </a>}
        </div>
    )
}

export default Chat