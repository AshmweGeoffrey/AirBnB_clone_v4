$(document).ready(function () {
  const checkedAmenity = new Set();
  $('input:checkbox').click(function () {
    const dataName = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      checkedAmenity.add(dataName);
    } else {
      checkedAmenity.delete(dataName);
    }
    $('.amenities h4').text([...checkedAmenity].join(', '));
  });
});
function apistatus() {
  const API_URL = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(API_URL, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  }); // Add closing parenthesis here
}
function fetchplaces() {
  const PLACE_URL = 'https://intranet.alxswe.com/projects/309#:~:text=http%3A//0.0.0.0%3A5001/api/v1/places_search/'
  $.ajax({
    url: PLACE_URL,
    type: 'POST',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      for (const place of data) {
        const article = ['<article>',
          '<div class="title">',
          `<h2>${place.name}</h2>`,
          '<div class="price_by_night">',
          `${place.price_by_night}`,
          '</div>',
          '</div>',
          '<div class="information">',
          `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
          `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
          `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
          '</div>',
          '<div class="description">',
          `${place.description}`,
          '</div>',
          '</article>'];
        $('.places').append(article.join(''));
      }
    } // Remove closing parenthesis here
  });
}
