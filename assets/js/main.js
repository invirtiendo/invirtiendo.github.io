(function($, List, _) {

  // List.js classes to use for search elements
  var options = {
    valueNames: ['list-tags', 'list-text', 'consulted_date', 'published_year', 'list-details']
  };
  var booksList = new List('book', options);
  var mediaList = new List('media', options);
  var articlesList = new List('article', options);
  var papersList = new List('paper', options);

  $(".search").keyup(function(){
    booksList.search($(this).val());
    mediaList.search($(this).val());
    articlesList.search($(this).val());
    papersList.search($(this).val());
  });


  $(function() {

    var $search = $('#search');
    var $facets = $('[data-list-facet]'); // All buttons that can filter

    // Clear all
    function resetFilter(e) {
      e.preventDefault();
      // Visually reset buttons
      $facets.removeClass('active');
      // Clear out text field
      $search.val('');
      // Wipe all filters
      promiseList.search();
      promiseList.filter();
    }

  });

})(jQuery, List, _);

$(document).ready(function() {
    // Close search screen with Esc key
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        if ($(".initial-content").hasClass("is--hidden")) {
          $(".search-content").toggleClass("is--visible");
          $(".initial-content").toggleClass("is--hidden");
        }
      }
    });
  
    // Search toggle
    $(".search__toggle").on("click", function() {
      $(".search-content").toggleClass("is--visible");
      $(".initial-content").toggleClass("is--hidden");
      // set focus on input
      setTimeout(function() {
        $(".search-content input").focus();
      }, 400);
    });
});