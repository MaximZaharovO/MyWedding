const Anketa = () => {
    return (<section className='text-xl px-20 border-black py-10 w-4/5'>
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

      </section>)
}

export default Anketa