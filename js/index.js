
const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let obj = response;
        let result = "<table style='width: 50%;margin: auto;' >"; 
			result += "<tr style='background-color: #FFFF00;'>";
			result += "<th>" + "Image" + "</th>";
			result += "<th>" + "Beer name" + "</th>";
			result += "<th>" + "Description" + "</th>";
			result += "<th>" + "Yeast" + "</th>";
			result += "</tr>";
        for (let i = 0; i < obj.length; i++) {
		result += "<tr>";
		result += "<td>" + "<image src =" + obj[i].image_url + " style='width:50%;height:auto;'/></td>";
        result += "<td>" + obj[i].name + "</td>";
        result += "<td>" + obj[i].description + "</td>";
		result += "<td>" + obj[i].ingredients.yeast + "</td>";
        result += "</tr>";
     
        }
		result += "</table>";
        document.getElementById("result").innerHTML = result;
    })
    const toSearch = (name) => {
    if (name != "") {
         getBeerAPIByName(name)
    } else {
        let result = "No result";
        document.getElementById('result').innerHTML = result
    }
}