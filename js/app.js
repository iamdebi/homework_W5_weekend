document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript has loaded");

  const formElement = document.querySelector("#add-bands-form");

  const handleFormSubmit = function(event) {
    event.preventDefault();
    console.dir(formElement);
    const formList = document.querySelector("#band-list");
    const formListFav = document.querySelector("#band-list-fav");
    const newListItem = document.createElement("li");

    const bandName = this.name.value;
    const bandLead = this.lead.value;
    const bandGenre = this.genre.value;
    const favourite = this.favourite.value;

    if (favourite === "true") {
      newListItem.textContent = `${bandName} ${bandLead} ${bandGenre}`;
      formListFav.appendChild(newListItem);
    } else {
      newListItem.textContent = `${bandName} ${bandLead} ${bandGenre}`;
      formList.appendChild(newListItem);
    }

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
