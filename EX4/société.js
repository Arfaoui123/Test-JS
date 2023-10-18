var Companys = JSON.parse(localStorage.getItem("Companys")) || [];
var Employers = JSON.parse(localStorage.getItem("Employers")) || [];


function Create() {

    var CName = document.getElementById('CName');
    var adrss = document.getElementById('adrss');
    var email = document.getElementById('email');

    var formvalid = true

    if (CName.value == "") {
        CName.classList.add('is-invalid')
        CName.classList.remove('is-valid')
        formvalid = false
    } else {
        CName.classList.remove('is-invalid')
        CName.classList.add('is-valid')
        formvalid = true
    }
    if (adrss.value == "") {
        adrss.classList.add('is-invalid')
        adrss.classList.remove('is-valid')
        formvalid = false
    } else {
        adrss.classList.remove('is-invalid')
        adrss.classList.add('is-valid')
        formvalid = true
    }
    if (email.value == "") {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        formvalid = false
    } else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        formvalid = true
    }

    if (formvalid == true) {
        var Company = {
            CName: CName.value,
            adrss: adrss.value,
            email: email.value,

        };
        var trouve = Companys.find((element) => {

            return element.email === email.value
        });

        if (trouve) {
            alert('E-email  existe déjà!')
        } else {
            Companys.push(Company);
            localStorage.setItem("Companys", JSON.stringify(Companys));
            window.location.href = "./Société.html"
        }
    }

}
var btnajout = document.getElementById('btnajout');
btnajout.addEventListener('click', Create);

function Dispayinfo() {
    var table = '';
    for (let index = 0; index < Companys.length; index++) {
        table += `<tr class="text-center">
        <th scope="row">${index}</th>
        <td>${Companys[index].CName}</td>
        <td>${Companys[index].adrss}</td>
        <td>${Companys[index].email}</td>
        
        <td>
            <button class="btn btn-warning" onclick="UpdateComp(${index})">Update</button>
            <button class="btn btn-danger" onclick="DeleteCopm(${index})">Delete</button>
        </td>
    </tr>`
        document.getElementById('CompT').innerHTML = table

    }
}
function DeleteCopm(id) {
    Companys.splice(id, 1)//deleting
    localStorage.setItem("Companys", JSON.stringify(Companys))//update localstorage
    window.location.reload()
}
var CName = document.getElementById('CName');
var adrss = document.getElementById('adrss');
var email = document.getElementById('email');
var Employ = document.getElementById('Employ');
var i = 0
function UpdateComp(index) {
    CName.value = Companys[index].CName
    adrss.value = Companys[index].adrss
    mail.value = Companys[index].email
    Employ.value = Companys[index].Employ
    i = index

}
function savechanges(i) {
    var Company = {
        CName: CName.value,
        adrss: adrss.value,
        email: email.value,
        Employ: Employ.value
    };
    Companys.splice(i, 1, Company)
    localStorage.setItem("Companys", JSON.stringify(Companys))
    window.location.reload()
}
Dispayinfo()