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

btn.addEventListener("click", function(){
    let name=username.value;
    let profession=userprofession.value;
    let age=userage.value;

    if(name != '' && profession != '' && age != ''){
        userArray.push({'name' : name, 'profession' : profession, 'age' : age});
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
}
