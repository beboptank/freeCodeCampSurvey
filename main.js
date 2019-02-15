var count = 3;

$(document).ready(function() {
  $('input.fav-breed-checkbox').on('change', function(event) {
    if($(this).siblings(':checked').length >= count) {
      this.checked = false;
    }
  });
});