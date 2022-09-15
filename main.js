// Validação de campos obrigatórios (verifica se está vazio)
function validateFields(field) {
    if (field.value == null || field.value == "") {
        alert("Please Fill All Required Field");
        return false;
    } else {
        return true;
    }
}

// Mostra os valores do formulário da esquerda na direita
function updateDisplayForm(personInformation) {
    document.getElementById("displayName").value = personInformation["name"].value;
    document.getElementById("displayDate").value = personInformation["date"].value;
    document.getElementById("displayEmail").value = personInformation["email"].value;
    document.getElementById("displayPassword").value = "*******";
    document.getElementById("displayGender").value = personInformation["gender"].value;
    document.getElementById("displayPhone").value = personInformation["phone"].value;
    document.getElementById("displayMobile").value = personInformation["mobile"].value;
    document.getElementById("displaySmoker").value = personInformation["smoker"].value;
    document.getElementById("displayCity").value = personInformation["city"].value;
}

// Event listener para o form principal
const form  = document.getElementById('form');
form.addEventListener('submit', (event) => {
    const information = {
        "name": form.elements['name'],
        "date": (form.elements['date'] != null) ? form.elements['date'] : "",
        "email": form.elements['email'],
        "gender": (form.elements['gender'] != null) ? form.elements['gender'] : "",
        "phone": (form.elements['phone'] != null) ? form.elements['phone'] : "",
        "mobile": (form.elements['mobile'] != null) ? form.elements['mobile'] : "",
        "smoker": (form.elements['smoker'] != null) ? form.elements['smoker'] : "",
        "city": (form.elements['city'] != null) ? form.elements['city'] : ""
    }

    // // Valida todos os campos (não podem estar vazios)
    // for (const [key, value] of Object.entries(information)) {
    //     if (validateFields(value) == false) {
    //         return false;
    //     }
    // }

    // Valida campos de nome e email (não podem estar vazios)
    if (validateFields(information["name"]) == false, validateFields(information["email"]) == false) {
        alert("Preencha todos os campos obrigatórios!")
        return false;
    } else {
        console.log("Nome: " + information["name"].value);
        console.log("Data de nascimento: " + information["date"].value);
        console.log("Email: " + information["email"].value);
        console.log("Sexo: " + information["gender"].value);
        console.log("Telefone: " + information["phone"].value);
        console.log("Celular: " + information["mobile"].value);
        console.log("Fumante: " + information["smoker"].value);
        console.log("Município: " + information["city"].value);

        updateDisplayForm(information);

        return false;
    }
});
