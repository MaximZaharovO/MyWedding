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
      return <div style={{display: 'flex'}}>
        <div style={{margin: '0 12px'}}>
          <div style={{marginBottom: 8}}>{TwoNumber(days)}</div>
          <div style={{fontSize: "24px"}}>Дней</div>
        </div>
        <div>:</div>
        <div style={{margin: '0 12px'}}>
          <div style={{marginBottom: 8}}>{TwoNumber(hours)}</div>
          <div style={{fontSize: "24px"}}>Часов</div>
        </div>
        <div>:</div>
        <div style={{margin: '0 12px'}}>
          <div style={{marginBottom: 8}}>{TwoNumber(minutes)}</div>
          <div style={{fontSize: "24px"}}>Минут</div>
        </div>
        <div>:</div>
        <div style={{margin: '0 12px'}}>
          <div style={{marginBottom: 8}}>{TwoNumber(seconds)}</div>
          <div style={{fontSize: "24px"}}>Секунд</div>
        </div>
      </div>;
    }
  };

  return(
    <Countdown date={end} renderer={renderer} />
  );
};


export {Timer};