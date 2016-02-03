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



  // function populate(data) {
  //   //var title = data.
  //   var links, titles, snippets = [];
  //   console.log(data);
  //   for (var i = 0; i < data[0].length; i++) {
  //     titles[i] = data[1][i];
  //     snippets[i] = data[2][i];
  //     links[i] = data[3][i];
  //     console.log(links);
  //   }
  //
  // }

  // open random wiki page on button press
  // todo: return list instead!
  var randomurl = "https://en.wikipedia.org/wiki/Special:Random";
  $(".random").click(function() {
    window.open(randomurl, '_blank');
  });


  var searchurl = "https://en.wikipedia.org/wiki/api.php";
  // listen for input and perform search - remove go button
  $(".searchbar").on("input", function() {
    var search = $(".searchbar").val();
    console.log(search);

    $.ajax({
      url: 'http://en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        format: 'json',
        formatversion: "2",
        // list: 'search',
        // srsearch: search,
        // srlimit: 20,
        generator: "prefixsearch",
        gpslimit: 20,
        gpssearch: search,
        prop: "pageimages|pageterms|info|extracts",
        piprop: "thumbnail",
        inprop: 'url',
        pithumbsize: 150,
        pilimit: 20,
        exsentences: 2,
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
    console.log(data);
    
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
