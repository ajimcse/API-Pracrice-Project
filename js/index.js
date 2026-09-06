function getTimeString(time) {
    const hour = parseInt(time / 3600);
    const minit = parseInt((time % 3600) / 60);
    const second = parseInt(time % 60);

    return `${hour} Hour ${minit} minit ${second} second ago`;
}
// category videos start
const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => displayVideo(data.category))
        .catch(error => console.log(error));
}
// button start
const loadCategroiesButton = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategroies(data.categories))
        .catch(error => console.log(error));
}
const displayCategroies = (manuCategories) => {
    const categoriesConatiner = document.getElementById('categories')
    manuCategories.forEach((item) => {
        console.log(item)
        const buttonContainer = document.createElement("div");
        // button.classList = "btn";
        // button.innerText = item.category;
        buttonContainer.innerHTML = `
        <button onclick="loadCategoryVideos(${item.category_id})" class="btn">
      ${item.category}
        </button>
        `


        categoriesConatiner.append(buttonContainer)
    })
}
loadCategroiesButton()
// button end
//=========== video start
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch(error => console.log(error));
}

const displayVideo = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML=''
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card">
            <figure class="h-[200px] relative">
                <img  class="w-full h-full object-cover"
                    src="${video.thumbnail}"
                    alt="Video Thumbnail"
                />
                ${video.others.posted_date?.length == 0 ? "" : `<span  class=" absolute right-2 bg-black text-white p-1 rounded bottom-2" >${getTimeString(video.others.posted_date)}</span>`
            }
                
            </figure>
            <div class="px-0 py-2">
                <div class="flex gap-3">
                 <img class="w-8 object-cover h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                  <h2 class="card-title">
                    ${video.title}
                  </h2>
                
               ${video.authors[0].verified == true ? `  <img class="text-gray-400 w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt="">` : ''}
              </div>

              <div> 
                 <p>
                 ${video.authors[0].profile_name}
               </p>
                <p>${video.others.views}</p>
               </div>
            </div>
        </div>
        `;
        videoContainer.append(card);
    });
};

loadVideos();

// // {
//   "status": true,
//   "message": "successfully fetched all the videos",
//   "videos": [
//     {
//       "category_id": "1001",
//       "video_id": "aaaa",
//       "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//       "title": "Shape of You",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//         }
//       ],
//       "others": {
//         "views": "100K",
//         "posted_date": "16278"
//       },
//       "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     },//





