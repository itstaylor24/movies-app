// ## **Part Two - Movies App!**

// Build an application that uses jQuery to do the following:

// - Contains a form with two inputs for a title and rating along with a button to submit the form.
// - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// - When the button to remove is clicked, remove each title and rating from the DOM.

// const $('form') = $("#movies-form");

currId = 0;
moviesList = [];

$("#movies-form").on("submit", function (evt) {
  evt.preventDefault();

  let movieInput = $("#movie-input").val();
  let ratingInput = $("#rating-input").val();
  let tableBody = $("#movies-list-container");

  currId += 1;

  moviesList.push({ currId, movieInput, ratingInput });

  let tr = $("<tr>");
  let td1 = $("<td>");
  let td2 = $("<td>");
  let td3 = $("<td>");

  td1.append(movieInput);
  td2.append(ratingInput);
  td3.append("<button>Delete</button>");

  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.addClass("row" + currId);

  tableBody.append(tr);

  $("#movies-form").trigger("reset");
});

$("#movies-list-container").on("click", "button", function (evt) {
  // remove it from the DOM
  $(evt.target)
    .closest("tr")
    // searches up element tree
    .remove();
  // removes that element
});
