async function getMenu() {

}

fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(function(data) {
        var container = document.getElementById("container");
        console.log(data)
        for (let i = 0; i < data.length; i++) {


            var divBody = `
      <div class="card" >
          <img src="${data[i].imgSrc}" class="card-img" alt="" >
          <div class="content">
              <h2>${data[i].id}</h3>
              <h3>${data[i].name}</h4>
              <h3> Price: ${data[i].price}</h4>
              <a href="#" onclick="takeOrder(${data[i].id},'${data[i].imgSrc}','${data[i].name}',${data[i].price})"> Order now</a>
          </div>
      </div>`;
            container.innerHTML += divBody;
        }


    })
    .catch(error => console.error(error));






// Function to take the order
function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ["Burger 1", "Burger 2", "Burger 3"];
            const order = {
                burger1: burgers[Math.floor(Math.random() * burgers.length)],
                burger2: burgers[Math.floor(Math.random() * burgers.length)],
                burger3: burgers[Math.floor(Math.random() * burgers.length)]
            };

            resolve(order);
        }, 2500);
    });
}

// preparing order
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = true;
            const paid = false;
            resolve({ orderStatus, paid });
        }, 1500);
    });
}

// bill payment
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = true;
            const paid = true;
            resolve({ orderStatus, paid });
        }, 1000);
    });
}

//Thanking
function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

//promise chaining
getMenu()
    .then(() => takeOrder())
    .then(order => {
        console.log(order);

        return orderPrep();
    })
    .then(status => {
        console.log(status);
        return payOrder();
    })
    .then(status => {
        console.log(status);
        thankyouFnc();
    })
    .catch(error => console.error(error));

//   this Async/await
async function restaurant() {
    try {
        await getMenu();
        const order = await takeOrder();
        console.log(order);
        const status = await orderPrep();
        console.log(status);
        const payment = await payOrder();
        console.log(payment);
        thankyouFnc();
    } catch (error) {
        console.error(error);
    }
}

restaurant();