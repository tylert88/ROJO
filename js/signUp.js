
// TERMS OF CONDITIONS POP UP MODAL
$(document).ready(function(){
   $('.modal').modal();
 });
 $('select').material_select();

// CHECKBOX TOGGLE TO SHOW "SUBMIT" BUTTON
$('#test5').click(function() {
  $('#submit-btn').toggleClass('disabled');
});

// INPUT TOGGLE TO SHOW "SIGN UP" BUTTON @quickSignUp
$(document).ready(function() {
     $(':input[type="submit"]').prop('disabled', true);
     $('input[type="email"]').keyup(function() {
        if($(this).checkValidity()) {
           $(':input[type="submit"]').prop('disabled', false);
        }
     });
 });

// $('input[type="email"]').checkValidity();
