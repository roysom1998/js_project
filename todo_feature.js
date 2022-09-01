getUpdate = () => {
    item = document.getElementById("items").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem("itemsJson") == null) {
        jsonItemsArray = [];
        // pushing the netered value into array
        jsonItemsArray.push([item, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(jsonItemsArray));
    }
    else {
        itemArraystr = localStorage.getItem("itemsJson");
        jsonItemsArray = JSON.parse(itemArraystr);
        jsonItemsArray.push([item, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(jsonItemsArray));
    }
    update();

}
update = () => {
    if (localStorage.getItem("itemsJson") == null) {
        jsonItemsArray = [];
        // if the itemsJson is null the it  will set the empty array in localstorage
        localStorage.setItem("itemsJson", JSON.stringify(jsonItemsArray));
    }
    else {
        itemArraystr = localStorage.getItem("itemsJson");
        // parse the stringify json into array
        jsonItemsArray = JSON.parse(itemArraystr);
    }
    // for populating the table
    let body = document.getElementById("tablebody");
    let str = "";
    jsonItemsArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-danger" onClick="deleteItems(${index})">Delete</button></td>
      </tr>
        `
    });
    body.innerHTML = str;
}
deleteItems = (itemsIndex) => {
    console.log("deleted item", itemsIndex);
    itemArraystr = localStorage.getItem("itemsJson");
    jsonItemsArray = JSON.parse(itemArraystr);
    // deleting element with a given index
    jsonItemsArray.splice(itemsIndex, 1);
    //storing the updated array in localstorage in string format
    localStorage.setItem("itemsJson", JSON.stringify(jsonItemsArray));
    update();
}
clearItem = () => {
    if (confirm("Do You Want To Clear The List")) {
        localStorage.clear();
        update();
    }
}
// if (localStorage.getItem("itemsJson") != null) {
//     update();
// }

addItems = () => {
    getUpdate();
}
update();