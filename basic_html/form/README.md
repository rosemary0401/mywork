# Explain
* use `<form></form>` element
* inside `<form></form>`, use `<label></label>` to make each text discription for your `<input>` element
* inside `<label>`, use `for` attribute to specify which element_id a label is bound to. The `for` attribute of the `<label>` tag should be equal to the `id` attribute of the related element to bind them together. 
* inside `<input>` element, use different attributes to present different effects :
  - `type` attribute for kind of `<input>` you use : text, radio,
  - `id` attribute for clicking the text will select `<label>` automaticallly. The id of the element the label is bound to.
  - `name` attribute will share the same value to be treated as a group.Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group.
  - `value` attribute : The value attribute defines the unique value associated with each radio button. The value is not shown to the user, but is the value that is sent to the server on "submit" to identify which radio button that was selected.
  
* `<labe>` & `<input>` benefit:
  - Users who have difficulty clicking on very small regions (such as checkboxes) - because when a user clicks the text within the <label> element, it toggles the input (this increases the hit area). 
  - https://www.w3schools.com/tags/tag_label.asp
