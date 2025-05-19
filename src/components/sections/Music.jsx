import React, {useState} from "react";
import mp3 from '../../misc/Tram.mp3'
import muteimg from '../../imgs/mutes/mute.svg'
import unmuteimg from '../../imgs/mutes/unmute.svg'
import volumeimg from '../../imgs/mutes/volume.png'


const Music = () => {
    const audioRef = React.useRef(null);
    const [isAudio, setIsAudio] = useState(false)
    const play = () => {
        if (!isAudio) {
            audioRef.current.volume = 0.1
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsAudio(prev => !prev)
    }


    return (
        <>
            <audio volume="0.2" ref={audioRef} src={mp3}>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
            <div className='playbtn' onClick={e => play()}>
                {isAudio
                    ? <img src={volumeimg}/>
                    : <img src={volumeimg}/>}
            </div>
        </>
    )
}

export default Music