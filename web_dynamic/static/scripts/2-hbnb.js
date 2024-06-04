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
$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
}); // Add closing brace here
