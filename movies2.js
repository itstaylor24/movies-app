// ## **Part Two - Movies App!**

// Build an application that uses jQuery to do the following:

// - Contains a form with two inputs for a title and rating along with a button to submit the form.
// - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// - When the button to remove is clicked, remove each title and rating from the DOM.

// const $('form') = $("#movies-form");

$("#movies-form").on("submit", function (evt) {
  evt.preventDefault();

  (
    <tr>
      <td>$('#movie-input').val()</td>
      <td>$('#rating-input').val()</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ).appendTo("#movies.list.container");

  $("#movies-form").trigger("reset");
});
