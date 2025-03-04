

const ShowSinglevioes = ({videoUrl,imgUrl}:{videoUrl:string,imgUrl:string}) => {
  
  return (
    <div>
    <div className=" bg-white  rounded-lg">
    <video width="100%" height="auto" controls preload="none"  poster={imgUrl} >
      <source src={videoUrl} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video> 
          
        </div>
        </div>
  )
}

export default ShowSinglevioes
