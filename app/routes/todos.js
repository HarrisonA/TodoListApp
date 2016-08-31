import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // dummy data
    return [
      {text: "Create Ember app"},
      {text: "Ember Testing"},
      {text: "Rails Testing"}

    ];
  }
  // Not working.  Keep getting Access-Control-Allow-Headers error!
  // model(){
  // return $.get(`https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json`)
  //   .then(wikiResult => {
  //     console.log('wikiResult');
  //     return wikiResult;
  //   });
  // }
});
