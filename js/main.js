$(document).ready(function() {

  // open random wiki page on button press
  // todo: return list instead!
  var randomurl = "https://en.wikipedia.org/wiki/Special:Random";
  $(".random").click(function() {
    window.open(randomurl, '_blank');
  });


  // listen for input and perform search
  $(".btn.go").on("click", function() {

    $(".results").children().remove();

    var search = $(".searchbar").val();
    console.log(search);

    $.ajax({
      url: 'http://en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        format: 'json',
        formatversion: "2",
        generator: "prefixsearch",
        gpslimit: 20,
        gpssearch: search,
        prop: "pageimages|pageterms|info|extracts",
        piprop: "thumbnail",
        inprop: 'url',
        pithumbsize: 150,
        pilimit: 20,
        exsentences: 5,
        exintro: 1,
        exlimit: 20,
        explaintext: 1,
        redirects: 1,
        // exlimit: 20,
        // pllimit: 20,
      },
      dataType: 'jsonp',
      success: fire

    });
  });


  function fire(data) {
    var length, title, thumbnail, descr, link;
    console.log(data);
    length = data.query.pages.length;
    console.log(length);
    for (var i = 0; i < length; i++) {
      title = data.query.pages[i].title;
      if (data.query.pages[i].thumbnail) {
        thumbnail = data.query.pages[i].thumbnail.source;
      } else {
        thumbnail = "../Images/placeholder.jpeg";
      }
      descr = data.query.pages[i].extract;
      link = data.query.pages[i].fullurl;

      var template =
        `<div class="resultbox">
      <div class="resultimg" style='background-image: url(${thumbnail})'></div>
      <div class="resulttxt-wrap">
        <div class="resulttitle">
          <h4>${title}</h4></div>
        <div class="resulttxt hide">
          <p>${descr}</p>
        </div>
      </div>
      <a href="${link}" class="resultgo"><img src="assets/arrow-go.png"></a>
    </div>`


      $(".results").append(template);

    }

    $(".resulttxt-wrap").click(function() {
      var element = $(this).find(".resulttxt");

      if (!element.hasClass("hide")) {
        element.addClass("hide");
      } else {
        element.removeClass("hide");
      }
    });

  }
  // $(".btn.go").click(function() {
  //   var search = $("searchbar").text();
  //   var searchurl = "https://en.wikipedia.org/wiki/api.php";
  //   $.ajax({
  //     type: 'GET',
  //     url: searchurl,
  //     headers: {
  //       "Api-User-Agent": "WikiSearchv0.1"
  //     },
  //     crossDomain: true,
  //     dataType: "jsonp",
  //
  //     success: populate
  //
  //   });
  // });



  //var randomTitle = randomPage.getElementById('firstHeading').innerText();

});
