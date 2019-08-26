document.getElementById("signup").onclick = function() {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=OojsGeEqutJg4lecTcp2iLYiSHsBZx5r`).then((articles) => {
        console.log(articles)
    })
}

// OojsGeEqutJg4lecTcp2iLYiSHsBZx5r