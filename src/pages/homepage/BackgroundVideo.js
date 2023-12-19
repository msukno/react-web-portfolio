// import backVid from '../../multimedia/backgroundVid.webm'

// const BackgroundVideo = () => {
//     return (
//         <div className='backVid-container'>
//             <video autoPlay loop muted id="video-back" src={backVid} type="video/mp4"></video>
//         </div> 
//     );
// }
// export default BackgroundVideo;

import backVid from '../../multimedia/backgroundVid.webm'

const BackgroundVideo = ({ setVideoLoaded }) => {
    const handleLoadedData = () => {
        setVideoLoaded(true);
    };

    return (
        <div className='backVid-container'>
            <video onLoadedData={handleLoadedData} autoPlay loop muted id="video-back" src={backVid} type="video/mp4"></video>
        </div> 
    );
}
 
export default BackgroundVideo;