var account = {
  $body: $('.body'),
  $form: $('form'),

  // Account Information
  givenName: '',
  surname: '',
  username: '',
  email: '',
  password: '',
  posttypes: {
    HR: true;
    RH: true;
    RR: true;
  },

  // Toggle Loading Icon
  toggleLoading: function(){
    this.$body.toggleClass('loadingBody');
    // Toggle the submit button so we don't get double submissions
    this.$form.find('button').prop('disabled', function(i, v) { return !v; });
  },
  // Validation
  userInputIsValid: false,
  validate: function(input) {
    // Validation Here
    userInputIsValid: true,
  },
};
 
$(document).ready(function(){
  // Execute on page load...
  account.$form.on('submit', function(e){
    // Toggle Loading Icon
    account.toggleLoading();

    // Input Account Information
    account.givenName = this.$form.find('input').val();
    account.surname = this.$form.find('input').val();
    account.username = this.$form.find('input').val();
    account.email = this.$form.find('input').val();
    account.password = this.$form.find('input').val();
    // Input Post Types
    account.posttypes.HR = this.$form.find('checkbox').val();
    account.posttypes.RH = this.$form.find('checkbox').val();
    account.posttypes.RR = this.$form.find('checkbox').val();

    // Validate Account Information
    account.validate();
    if ( account.userInputIsValid ) {
      /* make API request */
      account.toggleLoading();
    } 
    else {
      /* throw an error */
    }
  });
});
