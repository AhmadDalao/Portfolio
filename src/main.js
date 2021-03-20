import $ from "jquery";
export function main() {
  let list;

  /*
   *
   *   find the inputs in login form with placeholder attribute and remove it on focus,
   *   set it back on leave
   *
   */

  let inputs = document.querySelectorAll("input[placeholder]");
  removePlaceHolder(inputs);
  let textArea = document.querySelectorAll("textArea[placeholder]");
  removePlaceHolder(textArea);

  function removePlaceHolder(field) {
    field.forEach((element) => {
      let temp_placeHolder;
      element.addEventListener("focus", function () {
        temp_placeHolder = element.getAttribute("placeholder");
        element.setAttribute("placeholder", "");
      });
      element.addEventListener("blur", function () {
        element.setAttribute("placeholder", temp_placeHolder);
      });
    });
  }

  /* this is  the custom attribute name  which value is to be changed */
  const changeMe = "--main-color";
  /* setting the color from the localStorage  by retrieving */

  document.documentElement.style.setProperty(
    changeMe,
    localStorage.getItem("colorStored")
  );

  /*  getting value of  */
  list = document.querySelectorAll("[data-color]");
  // console.log(list.length);

  for (let i = 0; i < list.length; ++i) {
    list[i].addEventListener(
      "click",
      function (e) {
        // store attribute value in localStorage
        localStorage.setItem(
          "colorStored",
          e.target.getAttribute("data-color")
        );
        // console.log("attribute value " + e.target.getAttribute('data-color'));

        // change color based on the attribute value.
        document.documentElement.style.setProperty(
          changeMe,
          e.target.getAttribute("data-color")
        );
        // console.log("My local storage value " + localStorage.getItem("colorStored"));
      },
      false
    );
  }

  // gallery filter
  $(function () {
    $(".filter").click(function () {
      $(this)
        .addClass("custom__active")
        .siblings()
        .removeClass("custom__active");
      $($(this).data("filter")).fadeIn(500);
      $(".card-holder")
        .find("article")
        .not($(this).data("filter"))
        .fadeOut(1000);
      console.log($(this).data("filter"));
    });
  });

  /* side icon */
  document
    .getElementById("color-toggler")
    .addEventListener("click", function () {
      document.getElementById("color-container").classList.toggle("show");
    });

  // scroll spy
  $("body").scrollspy({
    target: "#navbar",
  });

  // Add smooth scrolling
  $("#navbar a").on("click", function (e) {
    // Check for a hash value
    if (this.hash !== "") {
      // Prevent default behavior
      e.preventDefault();

      // Store hash
      const hash = this.hash;

      // Animate smooth scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash to URL after scroll
          window.location.hash = hash;
        }
      );
    }
  });
}
