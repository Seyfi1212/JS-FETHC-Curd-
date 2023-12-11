let country = document.querySelector(".birb");
let search = document.querySelector("input");
let genSelect = document.querySelector('#genderSelect');


function allCards(data) {
    country.innerHTML = '';
    data.forEach(element => {
        country.innerHTML += `
            <div class="item">
            <p></p>
                <div class="img"><img src="${element.avatar}" alt=""></div>
                <div class="info">
                    <p class="name">${element.firstname}</p>
                    <p class="population">Population ${element.lastname}</p>
                    <p class="capital">${element.email}</p>
                    <button onclick="deleteCart(${element.id})">delete</button>
                    <button onclick="updateCart(${element.id})">Update</button>
                </div>
            </div>`;
    });
}
function getCountry() {
    fetch("http://localhost:3000/all")
        .then(res => res.json())
        .then(data => {


            allCards(data);

            search.addEventListener("input", (e) => {
                let searchTerm = e.target.value;
               

                if (searchTerm) {
                    const filteredData = data.filter(element =>
                        element.firstname.includes(searchTerm)
                    );
                    allCards(filteredData);
                } else {
                    allCards(data);
                }
            });

            genSelect.addEventListener('change', (e)=>{
                let selectTerm =e.target.value;

                if(selectTerm){
                    const filteredData = data.filter(element =>
                        element.gender.includes(selectTerm)
                    );
                    allCards(filteredData)
                }else{
                    allCards(data)
                }
               
            })
        })
        .catch(err => console.log(err));
}
getCountry()