$(document).ready (() => {
  $('.view-details').on('click',(event) => {
    $(event.currentTarget).closest('.employment').next().slideDown("1000");
  });
  $('.close-details').on('click',(event) => {
    $(event.currentTarget).closest('.details').slideUp("1000")
  })
})
