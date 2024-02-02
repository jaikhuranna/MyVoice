"use client"
import React, { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';

function TeachableMachine() {
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);
  let model, webcam, labelContainer, maxPredictions;

  useEffect(() => {
    const URL = "/";

    const init = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(450, 450, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      if (webcamRef.current) {
        webcamRef.current.appendChild(webcam.canvas);
      }

      labelContainer = labelContainerRef.current;
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }
    };

    const loop = async () => {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    };

    const predict = async () => {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions-1; i++) {
        const classPrediction =
          `${prediction[i].className}: ${prediction[i].probability.toFixed(2)}`;
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }
    };

    init();

    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  return (
    <div className='flex items-center justify-center flex-col gap-5 p-24 '>
      <h1 className='text-8xl font-semibold'>MyVoice</h1>
      <div className='' ref={webcamRef}></div>
      <div className='text-5xl' ref={labelContainerRef}></div>
    </div>
  );
}

export default TeachableMachine;
