# Explain for style_tag.html
* `style` has 3 ways to show CSS: 
  - inline style: style is an attribute in each HTML element
  - external: an external CSS file
  - internal: style element(tag) in `<head></head>` section
* Put `<style></style>` tag inside `<head></head>`tag to change appearance of elements in the `<body></body>` tag
* Inside `<style></style>` tag, we use `{ }` to make expression with elements needed to be changed.

# Explain for style.id.html
* add an `id` attribute to each HTML element
* an `id` should be used only one time
* Inside `<style></style>` tag, the CSS syntax will start with `#id` selector and `{ }`
  ```sh
  #id {
    property: value ;
  }
  ```
