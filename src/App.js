import './App.css';
import React, {useState, useRef, useEffect} from "react";
import { Timer } from './Timer';
import Time from './Timea';


function App() {
  const audioRef = React.useRef(null);
  const [isAudio, setIsAudio] = useState(false)

  const clNoBorder = 'text-xl px-20 border-black py-10 w-4/5'
  const cl = clNoBorder + ' border-b border-b-gray-700 flex'

  const play = () => {
    if (!isAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsAudio(prev => !prev)
  }
  const [guestsHeight, setGuestsHeight] = useState(0)
  const [wePicRefHeight, setWePicRefHeight] = useState(0)
  const guestsRef = useRef(null)
  const wePicRef = useRef(null)

  useEffect(() => {
    setGuestsHeight(guestsRef.current.clientHeight)
    setWePicRefHeight(wePicRef.current.clientHeight)
  })
  

  return (
    <div class="App">
      <audio ref={audioRef} src={"./m.mp3"}>
      <p>If you are reading this, it is because your browser does not support the audio element.</p>
      </audio>
      <div className='playbtn' onClick={e => play()}>
        {isAudio
            ? <div className={"mute"}></div>
            : <div className={"unmute"}></div>}
      </div>
      <div className="App-header">
        <div className='App-header__top'>
          <span className='mx-2'>Все начинается с любви</span>
          <span className='mx-2'>Все начинается с любви</span>
          <span className='mx-2'>Все начинается с любви</span>
          <span className='mx-2'>Все начинается с любви</span>
        </div>
        <div className='App-header__body_wrap'>
          <div className='App-header__body'>
            <div className='ring-pic'>
              <img src="Component 4.png"></img>
            </div>
            <div className='we-marying__title'>МЫ ЖЕНИМСЯ</div>
            <div className='we-marying__subtitle'>СОФА + МАКСИМ</div>
            <div ref={wePicRef} className='we-pic'>
              <img src="Component 5.png"></img>
              <div ref={guestsRef}  className='guests-text__wrapper'>
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
      <div className='timing__section'>
        <div className='timing__section-title'>
          <img style={{width: 136}} src='dove.png'/>
          <div className='timing__section-when_question'>
            К<span>О<img src='love.png'/></span>ГДА?
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
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: 'center'
          }}>
            <div className='timing__section-when-block_title'>ВО СКОЛЬКО?</div>
            <Time/>
          </div>
        </div>
      </div>
      <section className={cl}>
        <div className='my-3'>
          <div>
            <div>13:00 – 13:20</div>
            <div>📍 Сбор гостей у <a className='hover:underline' target='_blank' href='https://yandex.ru/maps/237/novokuznetsk/house/prospekt_n_s_yermakova_1k2/bE4YdwRpTkcAQFtpfXt3dX1qYg==/?ll=87.141105%2C53.763724&rtext=53.776362%2C87.064633~53.787576%2C87.129621&rtt=auto&ruri=~&z=17.6'>ЗАГСа</a></div>
          </div>
        </div>
        <div className='my-3'>
          <div>
            <div>13:20 – 14:00</div>
            <div>💍 Торжественная церемония в <a className='hover:underline' target='_blank' href='https://yandex.ru/maps/237/novokuznetsk/house/prospekt_n_s_yermakova_1k2/bE4YdwRpTkcAQFtpfXt3dX1qYg==/?ll=87.141105%2C53.763724&rtext=53.776362%2C87.064633~53.787576%2C87.129621&rtt=auto&ruri=~&z=17.6'>ЗАГСе</a></div>
          </div>
        </div>
        <div className='my-3'>
          <div>
            <div>15:00 – 19:00</div>
            <div>🥂 начало банкета <a className='hover:underline' target='_blank' href='https://yandex.ru/maps/237/novokuznetsk/house/ulitsa_doz_27a/bE4YdwVpTEwDQFtpfXt5dn9lYA==/?ll=87.130363%2C53.786676&rtext=53.776362%2C87.064633~53.787364%2C87.129594&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozOTM2MjAxMzgwEnfQoNC-0YHRgdC40Y8sINCa0LXQvNC10YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Ywg4oCUINCa0YPQt9Cx0LDRgdGBLCDQndC-0LLQvtC60YPQt9C90LXRhtC6LCDRg9C70LjRhtCwINCU0J7QlywgMjfQkCIKDVpCrkIVQyZXQg%2C%2C&z=17.85'>за шиномонтажкой</a></div>
          </div>
        </div>
        <div className='my-3'>
          <div>
            <div>21:00 -23:00</div>
            <div>✨ Завершение праздника</div>
          </div>
        </div>
      </section>
      <section className={cl}>
        <div>Здесь типа инфа о стилистике и дрескоде</div>
      </section>
      <section className={cl}>
        <div>Здесь типа инфа о предпочтительных подарках. ГЛАВНОЕ ДЛЯ НАС ВАШЕ ПРИСУТСТВИЕ, НО ЕСЛИ НЕТ ПОДАРКА, ТО ХОТЯ БЫ КУПИТЕ ТОРТ</div>
      </section>
      <section className={clNoBorder}>
        <div className='text-6xl'>АНКЕТА</div>
        <form className='text-left'>
          <div className='my-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' for='fio'>ФИО КАК В ПАСПОРТЕ</label>
            <input placeholder='Введите ваше ФИО' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='fio'/>
          </div>
          <div className='my-6'>
            <label for="check" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Подтвердите свое присутствие</label>
            <select id="check" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="US">Смогу</option>
              <option value="CA">Смогу только в ЗАГС</option>
              <option value="DE">Не смогу</option>
            </select>
          </div>
          <div className='my-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' for='phone'>Номер телефона</label>
            <input placeholder='Номер телефона' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='phone'/>
          </div>
          <div className='my-6'>
            <div>Укажите свои предпочтения по алкоголю</div>
            <div className='my-4'>
              <input id="vino" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="vino" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Вино</label>
            </div>
            <div className='my-4'>
              <input id="vodka" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="vodka" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">VODKA</label>
            </div>
          </div>
          <div>
            <label for="musicpusic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Вы можете написать названия музыки или исполнителей, которые вам нравятся, и возможно (скорее всего нет) вы услышите их во время торжества!</label>
            <textarea id="musicpusic" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="По одному треку на строку"></textarea>
          </div>
          <div className='my-6'>
            <input id="readyToWork" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="readyToWork" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Мечтаю помочь с приготовлениями!</label>
          </div>
        </form>
        <Timer end={new Date(2025, 6, 19, 13, 20)}/>

      </section>
    </div>
  );
}

export default App;
