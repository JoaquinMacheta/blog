var create_btn = document.getElementById('create_acc'),
    password = document.getElementById('password'),
    log_btn = document.getElementById('log_in'),
    username = document.getElementById('username'); // username input 


/***************** My local Storage *******************/
if(JSON.parse(localStorage.getItem("users")) == null){
    let storage = [
        {"username":"Administrator","password":"theOneAboveAll"}
    ]
    localStorage.setItem("users", JSON.stringify(storage))
}
var store = JSON.parse(localStorage.getItem("users"));

function test(x){
    return x.username == username.value;
}


/***************  Creating an account ****************/
create_btn.addEventListener( 'click', 
    function() {
        try {
            if(store.find(test).username != ""){
                alert('this account already exists');
                window.location.reload();
            }
        }
        catch(error){
                var new_user = {
                    "username": username.value,
                    "password": password.value
                }
                store.push(new_user); // adding user to array 
                localStorage.setItem("users",JSON.stringify(store));
                alert('Account created successfully');
                window.location.reload();
        }
    }
);

/************************ LOGGING INTO AN ACCOUNT ***************************/
log_btn.addEventListener('click',
function() {
        try{
            if(store.find(test).password == password.value){
                window.open("main.html");
                window.location.reload();
            }
            else{
                alert('Please enter a correct password');
            }
        }
        catch(error){
            alert("This account doesn't exist");
        }
}

);