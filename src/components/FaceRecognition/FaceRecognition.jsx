import {useEffect, useRef} from "react"
import "./facerecognition.css"
import * as faceapi from "face-api.js";


function FaceRecognition({imageUrl, id, updateCount}) {

  

  const imgRef = useRef()
  const canvasRef = useRef()


  const handleImage = async () => {
    console.log(imageUrl, 'im here firsts')
    const detections = await faceapi
    .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width:960,
      height:540
    })

    const resized = faceapi.resizeResults(detections, {
      width:960,
      height:540

    })
    faceapi.draw.drawDetections(canvasRef.current, resized)
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized)
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized)

    fetch('https://quiet-bastion-31102.herokuapp.com/image', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(count => {
      updateCount(count)   
    })
    .catch(console.log)
  }

  useEffect(()=>{
   
    const loadModels = () =>{
      console.log(imageUrl, 'im here')
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/public/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/public/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/public/models'),
        
      ])
        
        .then(handleImage)
        .catch((e) => console.log(e, "lol"))
    };


    

    imgRef.current && loadModels()
    
  },[imageUrl])


  return (
  
 
    <div className = 'facerecognition'>
     
    <img 
          crossOrigin='anonymous'
          src = {imageUrl}
         width = "960" 
         height = "540" 
         alt = "" 
         ref = {imgRef}
         /> 

    <canvas id = "myCanvas" 
            width = "960" 
            height = "540"
            ref = {canvasRef}
             />

    </div>
    
  )





}


export default FaceRecognition