// import React from 'react';
// import BybError from './BybError'

// export default function VideoClip(props) {
//     const apiKey = 
//     "AIzaSyAxmelNASa0uSVaqf38SNk8UkJ-XP3b5q4"
//     const youTubeURL = 'https://www.googleapis.com/youtube/v3/search';
//     const query = props.query


//     function formatQueryParams(params) {
//         const queryItems = Object.keys(params)
//         .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//         return queryItems.join('&');
//     }

//     const getYouTubeVideos = (query) => {
//         const params = {
//         key: apiKey,
//         q: query,
//         part: 'snippet',
//         maxResults: 2,
//         type: 'video',
//         videoDuration: 'short',
//         };
//         const queryString = formatQueryParams(params)
//         const url = youTubeURL + '?' + queryString;
  
//         fetch(url)
//         .then(response => {
//             if (response.ok) {
//             return response.json();
//             }
//             throw new Error(response.statusText);
//         })
//         .then(responseJson => console.log(responseJson))
//         .catch(err => {
//             return(`Something went wrong: ${err.message}`);
//         });
//     }

//     return(
//         <div>
//             <h3>Videoresults</h3>
//             {getYouTubeVideos(query)}

//         </div>

//     )
//     // const displayResults = (desiredResults) => {
//     //     return(
//     //         <div className = 'video-results'>
//     //           <ul>
//     //             <li>
//     //                 <h3><a href="https://www.youtube.com/watch?v=${desiredResults[i].id} target="_blank">${desiredResults[i].snippet.title}  </a><br>Time: ${desiredResults[i].contentDetails.duration.slice(2)} </h3>
              
//     //                 <div class = iframe-container>
//     //                     <iframe src="https://www.youtube.com/embed/${desiredResults[i].id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     //                 </div>
//     //             </li>
//     //           </ul>
//     //         </div>
//     //     );
//     // }

// }