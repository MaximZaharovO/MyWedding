import React, {useState} from "react";

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
            <audio ref={audioRef} src={"./m.mp3"}>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
            <div className='playbtn' onClick={e => play()}>
                {isAudio
                    ? <div className={"mute"}></div>
                    : <div className={"unmute"}></div>}
            </div>
        </>
    )
}

export default Music