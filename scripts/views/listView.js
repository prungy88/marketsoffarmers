(function(module) {
  var listView = {};

  listView.compileMarkets = function(market) {
    console.log('listView.compileMarkets');
    console.log(Details.all);
    myMap.resetCenter(Details.all[4].Address);
    Details.all.forEach(function(market) {
      var marketToDisplay = Handlebars.compile($('#list-of-markets').html());
      ($('#' + market.id).append(marketToDisplay(market)));
      myMap.requestCoordinates(market);
    });
  };

  // listView.highlightMarket = function(market) {
  //   $('.markets').css('background-color', '#A2C3A4');
  //   $('#' + market.id).css('background-color', '#C4F1BE');
  //   //go to the a tag with href of id
  //   // $('list-container').find('a').attr('href', '#' + market.id);
  // };
  //
  // listView.unhighlightMarket = function(market) {
  //   console.log('unhighlight');
  //   $('.markets').css('background-color', '#A2C3A4');
  //   $('.markets').css('hover', '#C4F1BE');
  // };

  module.listView = listView;
})(window);
