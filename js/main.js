//var input_s = ['name', 'surname', 'phone'];


//var name = document.getElementById("name_in");
document.getElementById("butn_1").onclick = function(){
    pars_e();
}

function pars_e (){
    document.getElementById("name").textContent = document.getElementById("name_in").value;
    document.getElementById("surname").textContent = document.getElementById("surname_in").value;
    document.getElementById("phone").textContent = document.getElementById("phone_in").value;
}