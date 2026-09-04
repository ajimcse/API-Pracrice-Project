// button start
const loadCategroies = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategroies(data.categories))
        .catch(error => console.log(error));
}
const displayCategroies = (manuCategories) => {
    const categoriesConatiner = document.getElementById('categories')
    manuCategories.forEach((item) => {

        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        categoriesConatiner.append(button)
    })
}
loadCategroies()
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
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card">
            <figure class="h-[200px]">
                <img class="w-full h-full object-cover"
                    src="${video.thumbnail}"
                    alt="Video Thumbnail"
                />
            </figure>
            <div class="px-0 py-2">
                <div class="flex gap-3">
                 <img class="w-8 object-cover h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                  <h2 class="card-title">
                    ${video.title}
                  </h2>
                
                 <img class="text-gray-400 w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt="">
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

// video End
//    <div class="">
//
//                  <img src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt="">
//                 </div>
//                 <div>
//                 </div>