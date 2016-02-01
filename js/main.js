$(document).ready(function() {

  $(".resulttxt-wrap").click(function() {
    var element = $(this).find(".resulttxt");

    if (!element.hasClass("hide")) {
      element.addClass("hide");
    } else {
      element.removeClass("hide");
    }
  });

  // perform random article and fetch link, thumbnail, first paragraph and title

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("title").innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'https://en.wikipedia.org/wiki/Marvik', true);
  xhr.setRequestHeader("Api-User-Agent", "Example/1.0");
  xhr.send();

  console.log(xhr);
  console.log(xhr.responseText);

  //var randomTitle = randomPage.getElementById('firstHeading').innerText();

});
