const featuredList = [
    {
        url: './assets/1.jpg',
        price: '78$',
        city: 'Los Angeles',
        description: '24 Tours Available',
        days:4 ,
        nights: 5 ,
    },
    {
        url:'assets/2.jpg',
        price:'98$',
        city: 'Los Angeles',
        description: '24 Tours Available',
        days: 4,
        nights: 5
    },
    {
        url:'assets/3.jpg',
        price:'38$',
        city: 'Miami',
        description: '20 Tours Available',
        days: 1,
        nights: 1
    },
    {
        url:'assets/3.jpg',
        price:'38$',
        city: 'Miami',
        description: '20 Tours Available',
        days: 1,
        nights: 1
    },
    {
        url:'assets/3.jpg',
        price:'38$',
        city: 'Miami',
        description: '20 Tours Available',
        days: 1,
        nights: 1
    },
     {
        url:'assets/3.jpg',
        price:'38$',
        city: 'Miami',
        description: '20 Tours Available',
        days: 1,
        nights: 1
    }
]

const featureRow = document.getElementById('feature-row')

for (let index = 0 ; index < featuredList.length; index++ ){
    featureRow.innerHTML += `
    <div class="col-md-4">
        <div class="feature-box">
            <div class="feature-img">
                <img src=${featuredList[index].url}>
                <div class="price">
                    <p>${featuredList[index].price}</p>
                </div>
            </div>
            <div class="feature-details">
                <h4>${featuredList[index].city}</h4>
                <p> ${featuredList[index].description} </p>
            </div>
            <span><i class="fa fa-map-marker"></i>${featuredList[index].city}</span>
            <span><i class="fa fa-sun-o"></i>${featuredList[index].days} Days</span>
            <span><i class="fa fa-moon-o"></i>${featuredList[index].nights} Nights</span>
        </div>
    </div>
    `
}