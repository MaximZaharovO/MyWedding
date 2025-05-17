import Checkbox from "../Checkbox/Checkbox"
import { useState } from "react";
import "../Input/input.css"
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

const Anketa = () => {
  const [fio, setFio] = useState("")
  const [phone, setPhone] = useState("")
  const [musicList, setMusicList] = useState("")
  const [isZags, setIsZags] = useState(false);
  const [isBunket, setIsBunket] = useState(false);
  const [isParty, setIsParty] = useState(false);

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
          phoneNumber: phone,
          songs: musicList,
          zags: isZags,
          bunket: isBunket,
          party: isParty
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
        <Input invalid={fioInvalid} value={fio} setValue={setFio} placeholder={"Захарова Софья Евгеньевна"} label={"Введите ваше ФИО:"}/>
        <Input value={phone} setValue={setPhone} placeholder={"+7 (999) 999 99-99"} label={"Введите ваш номер телефона:"}/>
        <Checkbox checked={isZags} label={"Смогу присутствовать в ЗАГСе"} setIsChecked={setIsZags}/>
        <Checkbox checked={isBunket} label={"Смогу присутствовать на банкете"} setIsChecked={setIsBunket}/>
        <Checkbox checked={isParty} label={"Смогу присутствовать на вечеринке после банкета"} setIsChecked={setIsParty}/>
        <TextArea value={musicList} setValue={setMusicList} placeholder={"По одной песне на строку"} label={"Здесь можно написать названия песен, которые вам нравятся:"}/>
        <div onClick={onSubmit} className='section_questionnaire_form-submit'>
          {isLoading ? <div className="loader"></div>: "Отправить ответ"}
        </div>

        {result && <div style={{textAlign: 'center', marginTop: 40}}>{result}</div>}
      </form>
    </div>
  )
}

export default Anketa