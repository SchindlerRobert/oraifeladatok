var lists = ["egy","kettő","három"]

function listCreate() {
    list = document.getElementById("list");
    
    lists.forEach(element => {
        list.add(new Option(element,index));
    });

    
}