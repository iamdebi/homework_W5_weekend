document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript has loaded");

  const formElement = document.querySelector("#add-bands-form");

  const handleFormSubmit = function(event) {
    event.preventDefault();
    console.dir(formElement);
    const formList = document.querySelector("#band-list");
    const newListItem = document.createElement("li");
    const newDivName = document.createElement("div");
    const newDivLead = document.createElement("div");
    const newDivGerne = document.createElement("div");

    const bandName = this.name.value;
    const bandLead = this.lead.value;
    const bandGenre = this.genre.value;

    console.dir(newDivGerne);

    newListItem.textContent = `${bandName} ${bandLead} ${bandGenre}`;
    formList.appendChild(newListItem);
    formElement.reset();
  };
  formElement.addEventListener("submit", handleFormSubmit);
});

// const formElement = document.querySelector("#new-item-form");

// const handleFormSubmit = function(event) {
//   event.preventDefault();
//   const formList = document.querySelector("#reading-list");
//   const newListItem = document.createElement("li");

//   newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
//   formList.appendChild(newListItem);
//   formElement.reset();
// };
// formElement.addEventListener("submit", handleFormSubmit);

// const handleReset = function() {
//   formList = document.querySelector("ul");
//   formList.innerHTML = "";
// };
// const deleteElement = document.querySelector("#delete");
// deleteElement.addEventListener("click", handleReset);
