import Countdown from 'react-countdown';

const Timer = ({ end }) => {

  const TwoNumber = (num) => {
    if (num >= 10)
      return num.toString()
    return '0' + num
  }

  const renderer = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      // Render a completed state
      return <span>00:00:00:00</span>;
    } else {
      // Render a countdown
      return <div className='flex'>
        <div className='mx-3'>
          <div className='text-5xl mb-1'>{TwoNumber(days)}</div>
          <div className='text-sm'>Дней</div>
        </div>
        <div>:</div>
        <div className='mx-3'>
          <div className='text-5xl mb-1'>{TwoNumber(hours)}</div>
          <div className='text-sm'>Часов</div>
        </div>
        <div>:</div>
        <div className='mx-3'>
          <div className='text-5xl mb-1'>{TwoNumber(minutes)}</div>
          <div className='text-sm'>Минут</div>
        </div>
        <div>:</div>
        <div className='mx-3'>
          <div className='text-5xl mb-1'>{TwoNumber(seconds)}</div>
          <div className='text-sm'>Секунд</div>
        </div>
      </div>;
    }
  };

  return(
    <Countdown date={end} renderer={renderer} />
  );
};


export {Timer};