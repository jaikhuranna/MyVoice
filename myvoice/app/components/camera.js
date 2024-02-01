import { useCallback, useRef, useState } from "react"
import axios from 'axios';
import Webcam from "react-webcam"; 

export default function Camera(){
    const webcamRef = useRef(null);
    const videoConstraints = {
        width:200,
        height:200,
        facingMode:'user'
    };
    const [name,setName] = useState("");
    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(`imgsrc = ${imageSrc}`);
        axios.post('https://127.0.0.1:5000/api',{data:imageSrc}).then(res=>{
            console.log(`response=${res}`)
            setName(res.data)
        }).catch(error=>{
        console.log(`error = ${error}`)
    })
}, [webcamRef])
    return(
        <div>
            <Webcam audio={false} height={300} ref={webcamRef} screenshotFormat="image/jpeg" width={350} videoConstraints= {videoConstraints} />
            <button onClick={capture} className="p-2 "> Capture </button>
        </div>
    )
}