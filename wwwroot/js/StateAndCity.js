
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.



function choose_State() {
    let choose_name = document.getElementById("State");
    let choose_name_value = choose_name.options[choose_name.selectedIndex].value;
    let city = document.getElementById("City");
    city.innerHTML = "";
    let city_name = [];
    if (choose_name_value == "Latvija") {
        city_name = ["Izvēlies pilsētu", "Rīga", "Liepāja", "Venstpils", "Jelgava", "Daugavpils", "Madona", "Valka", "Rēzekne"];
    }
    else if (choose_name_value == "Lietuva") {
        city_name = ["Izvēlies pilsētu", "Palanga", "Šauļi", "Viļņa", "Kauņa", "Jonišķis", "Paņevežis"];
    }

    else if (choose_name_value == "Igaunija") {
        city_name = ["Izvēlies pilsētu", "Valga", "Tallina", "Tartu", "Rakvere", "Narva", "Pērnava", "Kuresāre"];
    }

    else if (choose_name_value == "") {
        city_name = ["Izvēlies pilsētu"];
    }
    for (each = 0; each < city_name.length; each++) {
        let option = document.createElement("option");
        if (city_name[each] == "Izvēlies pilsētu") {
            option.value = "";
            option.text = city_name[each];
        } else {
            option.value = city_name[each];
            option.text = city_name[each];
        }
       
        city.add(option);
    }
}



