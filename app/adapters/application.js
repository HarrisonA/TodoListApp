// This was supposed to fix the CORS issue, but it didn't

// import JSONAPIAdapter from 'ember-data/adapters/json-api';

// export default JSONAPIAdapter.extend({
//   ajax: function (url, type, hash) {
//             hash.url = url;
//             hash.type = type;
//             hash.dataType = 'jsonp';
//             hash.contentType = 'application/json; charset=utf-8';
//             hash.context = this;

//             if (hash.data && type !== 'GET') {
//                 hash.data = JSON.stringify(hash.data);
//             }

//             jQuery.ajax(hash);
//         },
// });


// this was ANOTHER try
// import DS from 'ember-data';
//
// export default DS.RESTAdapter.extend({
//   //host: 'https://en.wikipedia.org',
//   headers: {
//     "Access-Control-Allow-Headers": "*"
//   }
// });
