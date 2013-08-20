Template.login.rendered = function() {
  
  var loginForm = this.find("form");


  $(loginForm).validate({

    rules: {
      emailAddress: {
        accountExists: true,
        email: true,
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      emailAddress: {
        accountExists: "This account does not exist.",
        required: "",
        email: ""        
      },
      password: {
        required: "",
        minlength: ""
      }
    },

    submitHandler: function() {
    
      email = $("#login").find("[name='emailAddress']").val(),
      password = $("#login").find("[name='password']").val();
  
      Meteor.loginWithPassword(email, password, function(error, response){
          
        if (error) {
          alert(error.reason);
        } else {
          Meteor.Router.to('/');
        }
        
        
      });    
      
    }
      
  });
  
}

Template.login.events({
  
  'submit form': function(e) {
    e.preventDefault(); 
    //mixpanel.track('form', 'admin login', {});
  }
  
});