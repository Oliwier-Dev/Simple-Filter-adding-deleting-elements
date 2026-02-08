const ui = {
    form:         document.querySelector("#form"),
    addItem:      document.querySelector("#addItem"),
    delItem:      document.querySelector("#deleteItem"),
    table:        document.querySelector("#table"),
    tableBody:    document.querySelector("tbody"),
    formSearch:   document.querySelector("#formSearch"),
    searchInput:  document.querySelector("#searchInput")
};

const items = []

ui.form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (ui.addItem.value != "") {
        items.push(ui.addItem.value);
                updateAddTable(ui.addItem.value);
        ui.addItem.value = "";
    } else if (ui.delItem.value != "") {
        items.forEach((item) => {
            if (item === ui.delItem.value) {
                const indexFoundItem = items.indexOf(item);
                items.splice(indexFoundItem, 1);
                console.log(`The index of ${ui.delItem.value} is ${indexFoundItem}`);
                updateDelTable(ui.delItem.value);
            }
        })
        ui.delItem.value = "";
    }  
    console.log(items);
}); 

function updateAddTable (item) {
    const newTRow = document.createElement("tr");
    const newTData = document.createElement("td");
    newTData.textContent = item;

    ui.tableBody.appendChild(newTRow);
    newTRow.appendChild(newTData);
}

function updateDelTable (valueToDelete) {
    const allRows = ui.tableBody.querySelectorAll("tr");
    allRows.forEach((item) => {
        if (item.textContent === valueToDelete) {
            item.remove();
        }
    })
};

ui.formSearch.addEventListener("input", function (event) {
    event.preventDefault();

    const searchInputValue = ui.searchInput.value;
    const allRows = ui.tableBody.querySelectorAll("tr")
    allRows.forEach((item) => {
        if (item.textContent.includes(searchInputValue)) {
            item.style.display = ""
        } else {
            item.style.display = "none"
        }
    })
});