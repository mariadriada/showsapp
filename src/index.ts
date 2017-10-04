//import { test } from './tools';
//import {shows} from './shows';

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



$.each(data, function(index: number){
  data[index];
  
 // element = data[index]['image'];  

  image = data[index]['image']['medium']; 
  name = data[index]['name']; 
  rating = data[index]['rating']['average']; 
  language = data[index]['language'];
  genres = data[index]['genres'];
  schedule = data[index]['schedule'];
  sumary = data[index]['sumary'];
  

  //medium = element['medium'];

  console.log('image', image);
  console.log('name', name);
  console.log('language', language);
  console.log('rating', rating);
  console.log('genres', genres);
  console.log('schedule', schedule);


  let vec = [];
  //vec[].index = { image, name, language, rating, genres, schedule };
  //vec[index] = { "image": image };

  //console.log("vec", vec);
  vec[index] = [{ "image": image, "name": name  }];

  
  data_objects = vec;
});
console.log('****************', data_objects.length);

console.log(data_objects);



//console.log("data", data.length);
  $(".dinamic-content" ).html( "asfjkahfalksfhaskfa" );
  alert( "Load was performed." );
});





/*

$.get("http://api.tvmaze.com/shows", function(data, status){
  console.log(data);

  data.each(function(){
    console.log('item');
  });

  alert('hola');
});

;
*/
