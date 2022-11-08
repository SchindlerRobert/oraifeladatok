function changeInnerHTML() {

    let html = "<table>"

    for (let i = 1; i < 10; i++) {

        html += "<tr>"

        for (let j = 1; j < 10; j++){

            if (i == j) {

                html += "<td>" + 1 + "</td>"

            }

            else {

                html += "<td>" + i * j + "</td>"

            }

        }

        html += "<*tr>"

    }

    html += "</table>"




    document.getElementById("paragrafus").innerHTML = html

}
