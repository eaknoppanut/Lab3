
const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let obj = response;
        let txt = "<table style='width: 50%;margin: auto;' >"; 
			txt += "<tr style='background-color: #FFE4B5;'>";
			txt += "<th>" + "Image" + "</th>";
			txt += "<th>" + "Beer name" + "</th>";
			txt += "<th>" + "Description" + "</th>";
			txt += "<th>" + "Yeast" + "</th>";
			txt += "</tr>";
        for (let i = 0; i < obj.length; i++) {
		txt += "<tr>";
		txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:50%;height:auto;'/></td>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
		txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "</tr>";
     
        }
		txt += "</table>";
        document.getElementById("result").innerHTML = txt;
    })
    const toSearch = (name) => {
    if (name != "") {
         getBeerAPIByName(name)
    } else {
        let result = "No result";
        document.getElementById('result').innerHTML = result
    }
}