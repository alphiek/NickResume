$(document).ready(() => {
  $('#mob-btn').on('click', () => {
    $('#mob-details').slideDown(700, 'linear').fadeIn(700);
    });
  $('#mob-details').on('mouseleave', () => {
      $('#mob-details').slideUp(700, 'linear').fadeOut(700);
    });
  $('#close-1').on('click', () => {
    $('#mob-details').slideUp(700, 'linear').fadeOut(700);
  });
  $('#cyn-btn').on('click', () => {
    $('#cyn-details').show();
    });
  $('#cyn-details').on('mouseleave', () => {
      $('#cyn-details').hide();
    });
  $('#close-2').on('click', () => {
    $('#cyn-details').hide();
  });

  $('#qk-btn').on('click', () => {
    $('#mob-details').show();
    });
  $('#qk-details').on('mouseleave', () => {
      $('#qk-details').hide();
    });
  $('#close-3').on('click', () => {
    $('#qk-details').hide();
  });

  $('#cyn-btn2').on('click', () => {
    $('#cyn-details2').show();
    });
  $('#cyn-details2').on('mouseleave', () => {
      $('#cyn-details2').hide();
    });
  $('#close-4').on('click', () => {
    $('#cyn-details2').hide();
  });
});
