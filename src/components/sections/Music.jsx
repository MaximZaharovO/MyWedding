import React, {useState} from "react";
import mp3 from '../../misc/m.mp3'
import muteimg from '../../imgs/mutes/mute.svg'
import unmuteimg from '../../imgs/mutes/unmute.svg'

const Music = () => {
    const audioRef = React.useRef(null);
    const [isAudio, setIsAudio] = useState(false)
    const play = () => {
        if (!isAudio) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsAudio(prev => !prev)
    }


    return (
        <>
            <audio ref={audioRef} src={mp3}>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
            <div className='playbtn' onClick={e => play()}>
                {isAudio
                    ? <img src={muteimg}/>
                    : <img src={unmuteimg}/>}
            </div>
        </>
    )
}

export default Music