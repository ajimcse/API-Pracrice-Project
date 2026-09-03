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
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure class="h-[200px]">
                <img class="w-[full] h-[full] object-cover"
                    src="${video.thumbnail}"
                    alt="Video Thumbnail"
                />
            </figure>

            <div class="card-body">
                <h2 class="card-title">
                    ${video.title}
                </h2>

                <p>
                    Video information here
                </p>

                <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
        `;

        videoContainer.append(card);
    });
};

loadVideos();

// video End 