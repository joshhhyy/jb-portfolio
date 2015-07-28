$(document).ready(function() {

  defaultMessage = 'Adding more and more by the second:'

  $('#skills').on('click', function(e) {
    e.preventDefault();
    $('.info').animate({scrollTop: 300})
  })

  $('#about').on('click', function(e) {
    e.preventDefault();
    $('.info').animate({scrollTop: 0})
  })

  $('#js').hover(function() {
    $('.skillLevel').html("Easily my most confident language. But I'm eager to learn more about this beat")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })

  $('#jquery').hover(function() {
    $('.skillLevel').html("Makes DOM manipulation SO much easier! Gotta love it when things get easier")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })

  $('#html5').hover(function() {
    $('.skillLevel').html("Fundamentals! Everyday I'm learning more and getting better with structured design")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })

  $('#css3').hover(function() {
    $('.skillLevel').html("I often aim for sleek and minimalist design but I'm completely fine with producing something beyond that.")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })

  $('#ruby').hover(function() {
    $('.skillLevel').html("Extremely confident in Back-end Development and the Ruby language! You can catch me RoRo meetups as well!")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })

  $('#rails').hover(function() {
    $('.skillLevel').html("One of my favourite frameworks! Wouldn't know what to do without it! Big advocate for Test-Driven Development")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })

  $('#github').hover(function() {
    $('.skillLevel').html("My favourite resource for contributing, learning and getting familiar with open source projects! ")
  }, function() {
    $('.skillLevel').html(defaultMessage)
  })


})