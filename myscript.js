//fetch method

fetch("https://fakestoreapi.com/products")
          .then((data) => {
                    //converting json data to object
                    return data.json();
          })
          .then((dataComplete) => {
                    let data1 = "";
                    dataComplete.map((values) => {
                              data1 += `<div class="card" style="width:300px">
                              <div class="card-body">
                                 <h4 class=" title card-title text-center" id="heading">${values.title}</h4>
                                    <img class="card-img flex-wrap" src=${values.image} alt="Card image" class="images">
                                     <p class="card-text">${values.description}</p>
                                    <p class="card-text text-center text-uppercase font-weight-bold category">${values.category}</p>
                                    <p class="card-text price">${values.price}</p>
                              </div>
                              </div> `;
                    });
                    document.getElementById("cards").innerHTML = data1;
          })
          .catch((err) => {
                    console.log(err);
          });
