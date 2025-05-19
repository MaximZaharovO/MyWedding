import Checkbox from "../Checkbox/Checkbox"
import { useState } from "react";
import "../Input/input.css"
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Radiobutton from "../Radiobutton/Radiobutton";

const Anketa = () => {
  const [fio, setFio] = useState("")
  const [secondName, setSecondName] = useState("")
  const [musicList, setMusicList] = useState("")
  const [isZags, setIsZags] = useState(false);
  const [isBunket, setIsBunket] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [salad, setSalad] = useState("")
  const [hotDish, setHotDish] = useState("")

  const [fioInvalid, setFioInvalid] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [result, setResult] = useState("")

  function BadRequest() {
    setIsLoading(false)
    setResult("Не удалось сохранить ваш ответ. Попробуйте повторно")
  }

  function onSubmit(e) {
    if (isLoading)
      return;
    setResult("")
    if (validation()) {
      setIsLoading(true)
      try {
        let request = {
          name: fio,
          secondName: secondName,
          songs: musicList,
          zags: isZags,
          bunket: isBunket,
          party: isParty,
          salad,
          hotDish
        }
        fetch("https://mywedding.somee.com/accepts", {
          method: "POST", 
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        })
          .then(result => {
            if (result.ok) {
              setIsLoading(false)
              setResult("Мы успешно получили ваш ответ! Если хотите что-то изменить в заполнении анкеты, просто заполните и отправьте её повторно")
            } else {
              BadRequest()
            }
          }, () => {
            BadRequest()
          })
      }
      catch (e) {
        BadRequest()
      }
    }
    
  }

  function validation() {
    let invalid = !fio
    setFioInvalid(invalid)
    return !invalid
  }

  return (
    <div className="section_questionnaire">
      <div className="section_questionnaire-title">
        АНКЕТА ДЛЯ ГОСТЕЙ
      </div>
      <div className="section_questionnaire-subtitle">
        Заполните анкету ниже и подтвердите свое присутствие как можно скорее.
      </div>
      <form className="section_questionnaire_form">
        <Input invalid={fioInvalid} value={fio} setValue={setFio} placeholder={"Имя"} label={"Введите ваше имя:"}/>
        <Input value={secondName} setValue={setSecondName} placeholder={"Фамилия"} label={"Введите вашу фамилию:"}/>
        <Checkbox checked={isZags} label={"Смогу присутствовать в ЗАГСе"} setIsChecked={setIsZags}/>
        <Checkbox checked={isBunket} label={"Смогу присутствовать на банкете"} setIsChecked={setIsBunket}/>
        <Checkbox checked={isParty} label={"Смогу присутствовать на вечеринке для друзей после банкета"} setIsChecked={setIsParty}/>
        <TextArea value={musicList} setValue={setMusicList} placeholder={"По одной песне на строку"} label={"Здесь можно написать названия песен, которые вам нравятся:"}/>
        <div>Мы хотим, чтобы вы выбрали для себя блюда на банкет</div>
        <div>Салат</div>
          <Radiobutton setLabel={setSalad} name="salad" label={"Овощной салат с сыром страчателла"} />
          <Radiobutton setLabel={setSalad} name="salad" label={"Салат с хрустящими баклажанами"} />
        <div>Горячее</div>
          <Radiobutton setLabel={setHotDish} name="hotdish" label={"Свинная корейка с жаренным картофелем и чесночным соусом"} />
          <Radiobutton setLabel={setHotDish} name="hotdish" label={"Бефстроганов с картофельным пюре"} />
        <div onClick={onSubmit} className='section_questionnaire_form-submit'>
          {isLoading ? <div className="loader"></div>: "Отправить ответ"}
        </div>

        {result && <div style={{textAlign: 'center', marginTop: 40}}>{result}</div>}
      </form>
    </div>
  )
}

export default Anketa