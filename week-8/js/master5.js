function createSelectBox(startYear, endYear) {
  let select = document.createElement("select");
  //(document.createElement("select");) is to creat a element that contain select as string

  for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    //(.createElement("option")) is to creat and element that contane option as string
    option.value = i;
    //(.value) is to let the valuo = i {i = years}
    option.textContent = i;
    //(.textContent) is to let the content = i {i = years}
    select.appendChild(option);
    // (.appendChild(option)) is to add the contant of "Option" to the "select"
  }

  document.body.appendChild(select);
  // (.body) is to select body section on the document
  // (.appendChild(select)) is to add the select part on the body sectoin on the html code
}

createSelectBox(2000, 2021);
