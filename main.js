$("#topstories").click(function() {
    $("#gif").hide();
    $("#articles").showw();
})

$("#home").click(function() {
    $("#gif").show();
    $("#articles").hide();
})

$("#button").click(function() {
    $(".videowrapper").hide();

})



document.querySelector("#topstories").onclick = function() {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=OojsGeEqutJg4lecTcp2iLYiSHsBZx5r`).then((articles) => {
        console.log(articles.data)
        topstoryHTML = `
      <div class="card-body">
          <h5 class="card-title">(1)Top Story</h5>
          <p class="card-text">
          <a href= "${articles.data.results[2].url}">${articles.data.results[2].title}</a>
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <img id ="image" src="${articles.data.results[2].multimedia[4].url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">(2)Top Story</h5>
          <p class="card-text">
          <a href= "${articles.data.results[6].url}">${articles.data.results[6].title}</a>
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <img id ="image" src="${articles.data.results[6].multimedia[4].url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">(3)Top Story</h5>
          <p class="card-text">
          <a href= "${articles.data.results[9].url}">${articles.data.results[9].title}</a>
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <img id ="image" src="${articles.data.results[9].multimedia[4].url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">(4)Top Story</h5>
          <p class="card-text">
          <a href= "${articles.data.results[12].url}">${articles.data.results[12].title}</a>
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <img id ="image" src="${articles.data.results[12].multimedia[4].url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">(5)Top Story</h5>
          <p class="card-text">
          <a href= "${articles.data.results[5].url}">${articles.data.results[5].title}</a>
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <img id ="image" src="${articles.data.results[5].multimedia[4].url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">(6)Top Story</h5>
          <p class="card-text">
          <a href= "${articles.data.results[17].url}">${articles.data.results[17].title}</a>
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <img id ="image" src="${articles.data.results[17].multimedia[4].url}" class="card-img-top" alt="...">`
        document.querySelector('.card').innerHTML = topstoryHTML
    })
}


document.querySelector("#button").onclick = function() {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=OojsGeEqutJg4lecTcp2iLYiSHsBZx5r`).then((articles) => {

        let array = articles.data.results.title;

        let input = document.querySelector("#navbarSupportedContent > form > input").value;
        if (input > 19 || input === "") {

            alert("Please Enter a number of 1-19")
        }

        console.log(input)
            // var search = input.filter(function(item) {
            //     return array.tile == input;
            // });

        updateHTML = `<div class="card-body">
      <h5 class="card-title">Article found</h5>
      <p class="card-text">
      <a href= "${articles.data.results[input].url}">${articles.data.results[input].title}</a>
      </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img id="image"src="${articles.data.results[input].multimedia[4].url}" class="card-img-top" alt="...">`

        document.querySelector(".card").innerHTML = updateHTML
    })
}



// KEY - OojsGeEqutJg4lecTcp2iLYiSHsBZx5r