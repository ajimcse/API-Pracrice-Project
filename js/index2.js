const loadCategoryData = () => {
    fetch('')
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
    console.log(datas)
    const petCardContainer = document.getElementById('card-container')
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
                    <button class="btn ">
                       <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                    <button class="btn ">
                       Adopt
                    </button>
                    <button class="btn  ">
                        Details
                    </button>
                   </div>

                </div>
            </div>
         `
        petCardContainer.appendChild(card)

    })
}
loadAllData()

//=================================== All Data Dispaly End =======================================


