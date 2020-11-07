let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let postbutton = document.getElementById("postbutton");
postbutton.addEventListener('click',postb);
function postb(e){
    let textValue=document.getElementById("textValue").value;
    let firstname=document.getElementById("first_name").value;
    let lastname=document.getElementById("last_name").value;
    if(textValue === "")
    {
        document.getElementById("qww").innerHTML =`<div style="color:red;margin-left:2px;">
        <small>Fill The Required Field</small>
        </div>`;   
    }
    else{
   document.getElementById("post").innerHTML +=`<div class="card text-center" style="margin:10px 8px;">
    <div class="card-header">
      <b>Post By ~ ${firstname} ${lastname}</b>
    </div>
    <div class="card-body">
      <p class="card-text">${textValue}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
       <pre><b>Publishing Date :</b> ${date}-${month}-${year}     <b>Publishing Time :</b> ${hours}:${minutes}:${seconds}</pre>
    </div>
  </div>`
    }
  form.reset();
  
  }