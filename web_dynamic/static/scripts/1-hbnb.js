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