function getTimeString(time) {
    const hour = parseInt(time / 3600);
    const minit = parseInt((time % 3600) / 60);
    const second = parseInt(time % 60);

    return `${hour} Hour ${minit} minit ${second} second ago`;
}
const remobeActiveClass = () => {
    const button = document.getElementsByClassName('category-btn');
    for (let btn of button) {
        btn.classList.remove('active')
    }

}
// category videos start
const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            // sobai k active class remove koro
            remobeActiveClass()
            const activeBtn = document.getElementById(`btn-${id}`)
            activeBtn.classList.add('active')
            console.log(activeBtn)
            displayVideo(data.category);

        })
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

        const buttonContainer = document.createElement("div");
        // button.classList = "btn";
        // button.innerText = item.category;
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
      ${item.category}
        </button>
        `
        categoriesConatiner.append(buttonContainer)
    })
}
loadCategroiesButton()
// button end


// detalis start

const loadDetalis = async (videoId) => {
    console.log(videoId);
    const url = 'https://openapi.programming-hero.com/api/phero-tube/video/aaac';
    const res = await fetch(url)
    const data = await res.json();
    displayDetalis(data.video);


}
const displayDetalis = (video) => {
    const datelisContainer = document.getElementById('model-contont')
    datelisContainer.innerHTML = `
     <img src="${video.thumbnail}" alt="">
     <h2 class=" text-2xl font-bold">${video.title}
     </h2>
        <p>${video.description}</p>
   `
    document.getElementById("showModaldata").click()

}
//=========== video start
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch(error => console.log(error));
}

const displayVideo = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''

    if (videos.length == 0) {
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-4 justify-center items-center">
          <img src="assets/Icon.png"/>
          <h2>NO CONTENT HEAR</h2>
        </div>
        `
    } else {
        videoContainer.classList.add('grid')
    }

    videos.forEach((video) => {

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
               <div>
               <p>
                <button onclick="loadDetalis('${video.video_id}')" class="btn btn-primary"> Detalis</button>
               </p>
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





