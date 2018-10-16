/**
 * Submit a HTML form via AJAX.
 * Convert form data to JSON payload, submit via AJAX to a JSON endpoint, display success/error messages based on response. 
 * Rudimentary inline error support is implemented in the form of highlighting which form fields have errors.
 * Several class names embedded in this code would likely need to be changed when reused, but inline errors are quite a tight integration anyway so that should be expected.
 */
const form = document.querySelector( '.contact-form' );
const errorsList = document.querySelector( '.errors-list' );

form.addEventListener( 'submit', e => {
  e.preventDefault();
  const data = new FormData( form );
  const xhr = new XMLHttpRequest();
  xhr.addEventListener( 'load', data => {
    const response = JSON.parse( data.target.responseText );
    if( response.success ) {
      document.querySelector( '.send-button' ).disabled = 'disabled';
      document.querySelector( '.success-wrapper' ).style.display = 'block';
      document.querySelector( '.errors-wrapper' ).style.display = 'none';
    } else {
      document.querySelector( '.errors-list' ).innerHTML = "";
      for( var i = 0; i < response.errors.length; i++ ) {
        var errorsItem = document.createElement( 'li' );
        errorsItem.appendChild( document.createTextNode( response.errors[i].text ) );
        errorsList.appendChild( errorsItem );
        switch (response.errors[i].code) {
          case 'name_empty':
            document.querySelector('.form-section-name').classList.add('form-section-error');
          break;
          case 'email_or_phone_empty':
            document.querySelectorAll('.form-section-email, .form-section-phone').forEach( item => {
              item.classList.add('form-section-error');
            });
          break;
          case 'message_empty':
            document.querySelector('.form-section-message').classList.add('form-section-error');
          break;
          case 'email_invalid':
            document.querySelector('.form-section-email').classList.add('form-section-error');
          break;
        }
      }
      document.querySelector('.errors-wrapper').style.display = 'block';
    }
  });
  xhr.addEventListener('error', data => {
    alert('Your message cannot be sent. Please call us instead.');
  });
  xhr.open('POST', form.action);
  xhr.send(data);
});
