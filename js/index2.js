// ================================category vabe alada kora
const loadPetsByCategory = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(res => res.json())
        .then(data => allDisplayData(data.data))
        .catch(error => console.log(error))
}

// ================================ Button Category ====================================
const loadCategoryData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(error => console.log(error))
}
const displayCategory = (categories) => {

   const categoryContainer = document.getElementById('category-button');

categories.forEach((btn) => {

    const button = document.createElement('button');

    button.innerHTML = `
        <img 
            class="w-10 h-10"
            src="${btn.category_icon}"
            alt="${btn.category}"
        >

        <span>
            ${btn.category}
        </span>
    `;

    button.className = "btn py-6";

    button.onclick = () => {
       // আগের active button সরাবে
        const allButtons = categoryContainer.querySelectorAll('button');

        allButtons.forEach((btn) => {
            btn.classList.remove('bg-blue-200', 'text-white');
        });

        // যেটাতে click করেছি সেটাকে active করবে
        button.classList.add('bg-blue-200', 'text-white');

        // Category অনুযায়ী data load
        loadPetsByCategory(btn.category);
    };

    categoryContainer.appendChild(button);
});
    
}
loadCategoryData()

// =========================================All Data Load Kora=================================

const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(datas => allDisplayData(datas.pets))
        .catch(error => console.log(error))
}
// ================================== Data Display Kore Dekhano================================
const allDisplayData = (datas) => {

    const petCardContainer = document.getElementById('card-container');

    petCardContainer.innerHTML = "";

    if (datas.length == 0) {
        petCardContainer.classList.remove(
            'grid',
            'grid-cols-1',
            'md:grid-cols-3',
            'gap-5');
        petCardContainer.innerHTML = `
        <div class="w-full min-h-[400px] flex flex-col items-center justify-center text-center">

            <img 
                src="./images2/error.webp" 
                alt="No information"
                class="w-40"
            >

            <h2 class="text-2xl font-bold mt-4">
                No Information Available
            </h2>

            <p class="max-w-xl mt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a.
            </p>

        </div>
    `;
    }

    datas.forEach((pet) => {
        const card = document.createElement('div')
        card.innerHTML = `
         <div class="card bg-base-100 shadow-xl">

                <figure>
                    <img 
                        src="${pet.image}" 
                        alt="${pet.pet_name}"
                        class="w-full h-60 object-cover"
                    />
                </figure>

                <div class="card-body">

                    <h2 class="card-title">
                        ${pet.pet_name}
                    </h2>

                    <p>
                        Breed: ${pet.breed || "Not available"}
                    </p>

                    <p>
                        Category: ${pet.category}
                    </p>

                    <p>
                        Gender: ${pet.gender || "Not available"}
                    </p>

                    <p>
                        Price: $${pet.price ?? "Not available"}
                    </p>
                    <hr class="border-gray-200">  
                   <div class="flex justify-between">
                  <button 
                  onclick="addToLikedPets('${pet.image}', '${pet.pet_name}')"
                  class="btn"
                            > 
                    <i class="fa-solid fa-thumbs-up"></i> 
                  </button>
                    <button class="btn ">
                       Adopt
                    </button>
                    <button id="details-btn" class="btn  ">
                        Details
                    </button>
                   </div>

                </div>
            </div>
         `
        petCardContainer.classList.add(
            'grid',
            'grid-cols-1',
            'md:grid-cols-3',
            'gap-5');
        petCardContainer.appendChild(card)

    })
}
loadAllData()

//=================================== All Data Dispaly End =======================================
// ================================================click


const addToLikedPets = (image, name) => {
    const likedPets = document.getElementById('liked-pets');

    const divcar = document.createElement('div');

    divcar.innerHTML = `
       <div class="w-40"> 
    <img  
        src="${image}"
        alt="${name}"  
        class="w-full h-32 object-cover rounded-lg" 
    >

    <h3 class="font-bold mt-2 text-center">
        ${name}
    </h3>
</div>
    `;

    likedPets.appendChild(divcar);
}


