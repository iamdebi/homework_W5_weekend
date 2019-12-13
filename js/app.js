document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript has loaded");

  const formElement = document.querySelector("#add-bands-form");

  const handleFormSubmit = function(event) {
    event.preventDefault();
    console.dir(formElement);
    const formList = document.querySelector("#band-list");
    const newListItem = document.createElement("li");

    let allTime;
    const bandName = this.name.value;
    const bandLead = this.lead.value;
    const bandGenre = this.genre.value;
    const favourite = this.favourite.value;

    if (favourite === "true") {
      allTime = "it was true";
    } else {
      allTime = "it was not true";
    }

    newListItem.textContent = `${bandName} ${bandLead} ${bandGenre} ${allTime}`;
    formList.appendChild(newListItem);
    formElement.reset();
  };
  formElement.addEventListener("submit", handleFormSubmit);

  const handleDelete = function() {
    formList = document.querySelector("ul");
    formList.innerHTML = "";
  };
  const deleteElement = document.querySelector("#delete");
  deleteElement.addEventListener("click", handleDelete);
});

// const handleReset = function() {
//   formList = document.querySelector("ul");
//   formList.innerHTML = "";
// };
// const deleteElement = document.querySelector("#delete");
// deleteElement.addEventListener("click", handleReset);
