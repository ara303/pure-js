# Pure JS
*Replicating useful functions of jQuery in pure (vanilla) JavaScript.*

-----

### Scroll to top
Animated scroll to the top of the document with a trigger element. The duration is adjustable (`400ms` by default).

As a bonus, includes code to reveal the trigger only when the user is a certain way down the page. 

### AJAX form submit
Ssubmit a form to a server via AJAX and then display success/failure messages. Below are examples of the JSON my server sends back.

This is done because I validate the submission server side and the response will contain error messages.

If the submission is accepted and has no errors, we expect the server to respond with the all clear.

````json
{
    "success": 1
}
````

If there was something wrong with the submission:
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

At the moment, I am using both client side form validation (in the form of `required` values on the fields as well as `type="phone"` or `type="email"` which is especially helpful for mobile UX) as well as server side.

My rationale for having the server generate the error messages as user-friendly text as well as developer-friendly alternatives is because I didn't really want that in the JS because it's easier for me to update the validation server side.

It would also help with i18n later down the line as the client I originally wrote this for may go multi-lingual in the future.

### More soon

I've decided to try to move away from jQuery and other big libraries as much as possible, because all the good browsers are now really good at handling pure JS, so I'd like to leverage the performance benefits there.

## Old IE notice... 
If you need to support IE <10, stick to jQuery. 
