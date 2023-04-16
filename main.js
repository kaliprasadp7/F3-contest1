let username=document.getElementById("name");
let userprofession=document.getElementById("profession");
let userage=document.getElementById("age");
let btn=document.getElementById("btn");
let recordsDisplay=document.getElementById("display-container");
let userArray=[];

let objstr=localStorage.getItem('users');
userArray=JSON.parse(objstr)||[];
console.log(userArray);
displayInfo();

if(userArray.length==0){
    document.getElementById("empty").style.display="block";
}else{
    document.getElementById("empty").style.display="none";
}

btn.addEventListener("click", function(){
    let name=username.value;
    let profession=userprofession.value;
    let age=userage.value;

    
    if(name != '' && profession != '' && age != ''){
        userArray.push({'name' : name, 'profession' : profession, 'age' : age});
        document.getElementById("error").style.display="none";
        document.getElementById("success").style.display="block";
        document.getElementById("empty").style.display="none";
        username.value='';
        userprofession.value='';
        userage.value='';
    }else{
        document.getElementById("success").style.display="none";
        document.getElementById("error").style.display="block";
        if(userArray.length==0){
            document.getElementById("empty").style.display="block";
        }
    }

    saveInfo(userArray);
})

function saveInfo(){
    let str=JSON.stringify(userArray);
    localStorage.setItem('users', str);
    displayInfo();
}

function displayInfo(){
    let statement ='';
    userArray?.forEach((user,i) => {
        statement += `<div>
        <div>
            <p>${i+1}.</p>
            <p>${user.name}</p>
            <p>${user.profession}</p>
            <p>${user.age}</p>
        </div>
        <button id="deletebtn" class="deletebtn" onclick="deleteInfo(${i})">Delete User</button>
    </div>`;
    });
    recordsDisplay.innerHTML = statement;
}


function deleteInfo(i){
    userArray.splice(i,1);
    saveInfo(userArray);
    document.getElementById("success").style.display="none";
    document.getElementById("error").style.display="none";
    if(userArray.length==0){
        document.getElementById("empty").style.display="block";
    }else{
        document.getElementById("empty").style.display="none";
    }
}
