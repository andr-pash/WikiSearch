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



  function populate(data) {
    //var title = data.
    var links, titles, snippets = [];

    for(var i = 0; i < data[0].length; i++){
      titles[i] = data[1][i];
      snippets[i] = data[2][i];
      links[i] = data[3][i];
      console.log(links);
    }

  }


  var randomurl = "https://en.wikipedia.org/wiki/Special:Random";
  $(".random").click(function() {
    window.open(randomurl, '_blank');
  });

  var search = $("searchbar").text();
  var searchurl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&namespace=0&redirects=resolve&format=jsonp&gplnamespace=0&gpllimit=20&search=" + search;
  $(".btn.go").click(function() {
    $.ajax({
      type: 'GET',
      url: searchurl,
      // crossDomain: true,
      dataType: "jsonp",
      success: populate

    });
  });

  //var randomTitle = randomPage.getElementById('firstHeading').innerText();

});
