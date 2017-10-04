
import './main.scss';

let data_objects = new Array();

//GET
$.get( "http://api.tvmaze.com/shows", function( data ) {

  let element: object;
  let medium: any;

  let image: any;
  let name: any;
  let rating: any;
  let language: any;
  let genres: any;
  let schedule: any;
  let sumary: any;

  let data_html = '';
  console.log("data html");

  $.each(data, function(index: number){
    data[index];
    
    image = data[index]['image']; 
    name = data[index]['name']; 
    rating = data[index]['rating']; 
    language = data[index]['language'];
    genres = data[index]['genres'];
    schedule = data[index]['schedule'];
    sumary = data[index]['sumary'];
    
    data_html += `<li>
                  <div class="show" onCLick="(alert('show details ..'))" >
                  <img src="${image.medium}">
                  <div class="title">${ name }</div>
                  <div  class="rating">Rating: ${ rating.average }</div>
                  </div>  
            </li>`;
    
    
    let vec = [];

    vec[index] = [{ "image": image, "name": name  }];    
    
    data_objects = vec;
    
  });
 
  let div = document.getElementById("div");
  div.innerHTML = data_html;

 function showdetails(){
    alert('show  details ');

  }


});


