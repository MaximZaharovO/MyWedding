import weImg from "../../imgs/hello/we.png"
import ringImg from "../../imgs/hello/ring.png"
import textBack from "../../imgs/hello/hello_text_back.svg"

const Hello = () => {
    return (
        <div className="App-header">
            <div className='App-header__top'>
            <span>Все начинается с любви</span>
            <span>Все начинается с любви</span>
            <span>Все начинается с любви</span>
            <span>Все начинается с любви</span>
            </div>
            <div className='App-header__body_wrap'>
            <div className='App-header__body'>
                <div className='ring-pic'>
                    <img alt="" src={ringImg}/>
                </div>
                <div className='we-marying__title'>МЫ ЖЕНИМСЯ</div>
                <div className='we-marying__subtitle'>СОФА + МАКСИМ</div>
                <div className='we-pic'>
                    <img alt="" src={weImg}/>
                <div className='guests-text__wrapper'>
                    <img src={textBack}/>
                    <div className='guests-text__title'>Дорогие гости!</div>
                    <div className='guests-text__text'>
                    Судьба дарит нам самый важный день в жизни — день, когда мы станем семьёй! 
                    И нам так хочется разделить это счастье с теми, кто для нас по-настоящему дорог. 
                    Ваше присутствие сделает этот день ещё теплее и радостнее! 
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hello