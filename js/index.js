const loadCategroies = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}





const displayCategroies = () =>{

}

loadCategroies()