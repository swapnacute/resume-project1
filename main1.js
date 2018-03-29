function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.career);
});

var parent = document.querySelector(".flex-parent");
var child1 = document.createElement("div");
child1.classList.add("profile");
parent.appendChild(child1);

var child2 = document.createElement("div");
child2.classList.add("content");
parent.appendChild(child2);


function details(basic){
  var img = document.createElement("img");
  img.src = basic.photo;
  child1.appendChild(img);

var name = document.createElement("h3");
name.textContent = basic.name;
child1.appendChild(name);

var email = document.createElement("a");
email.href="mailto:swapna143.swappu@gmail.com";
email.textContent=basic.email;
child1.appendChild(email);

var phone1=document.createElement("h3");
phone1.textContent=basic.phone;
child1.appendChild(phone1);

 var addr=document.createElement("h1");
 addr.textContent="Address:";
 child1.appendChild(addr);

 var hr=document.createElement("hr");
 child1.appendChild(hr);

 var address = document.createElement("p");
 address.textContent=basic.address;
 child1.appendChild(address);
}
function career(obj){

 var heading=document.createElement("h2");
 heading.textContent= "careerobjectives";

 child2.appendChild(heading);
 
 var hline=document.createElement("hr");
 child2.appendChild(hline);
var p=document.createElement("p");
p.textContent=obj.info;
child2.appendChild(p);
}
