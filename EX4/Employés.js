var Employers = JSON.parse(localStorage.getItem("Employers")) || [];

var Companys = JSON.parse(localStorage.getItem("Companys")) || [];
var slct = document.getElementById('slct');
for (let index = 0; index < Companys.length; index++) {

    slct.innerHTML += ` <option selected value="${Companys[index].CName}" >${Companys[index].CName}</option>`
}

var update = false;

function Créer() {

    var Name = document.getElementById('Name');
    var lastName = document.getElementById('lastName');
    var mail = document.getElementById('mail');
    var adress = document.getElementById('adress');
    var formvalid = true

    if (Name.value == "") {
        Name.classList.add('is-invalid')
        Name.classList.remove('is-valid')
        formvalid = false
    } else {
        Name.classList.remove('is-invalid')
        Name.classList.add('is-valid')
        formvalid = true
    }
    if (lastName.value == "") {
        lastName.classList.add('is-invalid')
        lastName.classList.remove('is-valid')
        formvalid = false
    } else {
        lastName.classList.remove('is-invalid')
        lastName.classList.add('is-valid')
        formvalid = true
    }
    if (mail.value == "") {
        mail.classList.add('is-invalid')
        mail.classList.remove('is-valid')
        formvalid = false
    } else {
        mail.classList.remove('is-invalid')
        mail.classList.add('is-valid')
        formvalid = true
    }
    if (adress.value == "") {
        adress.classList.add('is-invalid')
        adress.classList.remove('is-valid')
        formvalid = false
    } else {
        adress.classList.remove('is-invalid')
        adress.classList.add('is-valid')
        formvalid = true
    }
    if (formvalid == true) {
        var Employer = {
            Name: Name.value,
            lastName: lastName.value,
            mail: mail.value,
            adress: adress.value
        };


        if (update == true) {

            savechanges(indice)

        } else {
            var trouve = Employers.find((element) => {

                return element.mail === mail.value
            });

            if (trouve) {
                alert('E-mail existe déjà!')
            }
            else {

                Employers.push(Employer);
                localStorage.setItem("Employers", JSON.stringify(Employers));
                window.location.href = "./Employés.html"
            }

        }


    }

}
var btncreate = document.getElementById('btncreate');
btncreate.addEventListener('click', Créer)

function Dispayinfos() {
    var table = '';
    for (let index = 0; index < Employers.length; index++) {
        table += `<tr class="text-center">
        <th scope="row">${index}</th>
        <td>${Employers[index].Name}</td>
        <td>${Employers[index].lastName}</td>
        <td>${Employers[index].mail}</td>
        <td>${Employers[index].adress}</td>
        <td>
            <button class="btn btn-warning" onclick="UpdateEmploy(${index})">Update</button>
            <button class="btn btn-danger" onclick="DeleteEmploy(${index})">Delete</button>
        </td>
    </tr>`
        document.getElementById('LisEmp').innerHTML = table

    }
}
function DeleteEmploy(id) {
    Employers.splice(id, 1)//deleting
    localStorage.setItem("Employers", JSON.stringify(Employers))//update localstorage
    window.location.reload()
}
var Name = document.getElementById('Name');
var lastName = document.getElementById('lastName');
var mail = document.getElementById('mail');
var adress = document.getElementById('adress');
var i = 0;
var indice = null
function UpdateEmploy(index) {
    Name.value = Employers[index].Name
    lastName.value = Employers[index].lastName
    mail.value = Employers[index].mail
    adress.value = Employers[index].adress
    i = index
    var btncreate = document.getElementById('btncreate');
    btncreate.textContent = "Update";
    update = true;
    indice = index



}

function savechanges(i) {
    var trouve = Employers.find((element) => {

        return element.mail === mail.value
    });
    if (trouve) {
        alert('E-mail existe déjà!')
    }
    else {
        var Employer = {
            Name: Name.value,
            lastName: lastName.value,
            mail: mail.value,
            adress: adress.value
        }
        Employers.splice(i, 1, Employer)
        localStorage.setItem("Employers", JSON.stringify(Employers))
        window.location.reload()
    }
}
Dispayinfos()