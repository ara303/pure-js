# Pure JS
*Replicating useful functions of jQuery in pure (vanilla) JavaScript.*

## Scroll to top
Animated scroll to the top of the document with a trigger element. The duration is adjustable (`400ms` by default).

As a bonus, includes code to reveal the trigger only when the user is a certain way down the page. 

## AJAX form submit
Creates a JSON payload from form data, submits to the server for processing, and handle specific success/failure messages with support for inline errors. 

This expects the HTML to be formatted a certain way, with some empty HTML elements that are shown/hidden in the event of a succcessful submisssion, or used to display errors in the event of a submission with errors.

Check out the [example HTML of I format the form](https://github.com/edadams/pure-js/blob/master/examples/ajax-form-submit.html). 

It's up to you what your server does with the data submitted, but it's worth noting that the JSON response should be delivered in a certain format.

If the submission had no errors, we expect a simple "all clear" response:

````json
{
    "success": 1
}
````

If there was something wrong with the submission, the server should generate error messages. The `code` value is what is used for inline validation, so if the server responds `name_empty` we know the name field was left blank and so we highlight that individual field. 

````json
{
   "success": 0,
   "errors": [
      {
         "code": "name_empty",
         "text": "Please provide your name."
      },
      {
         "code": "email_or_phone_empty",
         "text": "Please provide either your email address or phone number."
      },
      {
         "code": "message_empty",
         "text": "Please provide a message."
      }
   ]
}
````

For safety and to prevent my server from getting spammed, I use both client side  validation (`required` on some field elements and `type="phone"` or `type="email"` which is especially helpful for mobile UX) as well as server side.

The server generates error messages as user-friendly text as well as the `code` values because I write my JS to be concerned with the application's logic only. It also helps with localisation as the project this code was originally written for may support multiple languages later down the line.

### Old IE notice... 
If you need to support IE <11, it is probably better to just use jQuery. This JS is the most helpful for the small, lean sites I build using static site generators like Jekyll that don't need much JS, just a little bit here and there for some functionality.
