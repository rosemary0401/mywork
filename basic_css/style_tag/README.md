# Explain for style_tag.html
* `style` has 3 ways to show CSS: 
  - inline style: style is an attribute in each HTML element
  - external: an external CSS file
  - internal: style element(tag) in `<head></head>` section
* Put `<style></style>` tag inside `<head></head>`tag to change appearance of elements in the `<body></body>` tag
* Inside `<style></style>` tag, we use `{ }` to make expression with elements needed to be changed

# Explain for style_id.html
* Add an `id` attribute to a specified HTML element
* An `id` selector should be used only one time in one HTML
* Inside `<style></style>` tag, the CSS syntax will start with `#id` selector and `{ }`
  ```sh
  #id {
    property: value ;
  }
  ```
* Usually not recommend to use id selector for CSS because it's easy to cause conflict with JS DOM when using `getElementById()` method.

# Explain for style_class.html
* add `class` attribute to each HTML element
* `class` can be used by different HTML elements in one HTML
* Inside `<style></style>` tag, the CSS syntax will start with `HTML element` `.class` and `{ }`
* Simple case syntax
  ```sh
  .class {
    property: value ;
  }
  ```
* Multiple uses for different HTML elements
  ```sh
  HTML element.class {
    property: value ;
  }
  ```
* A HTML element can have many `class` at the same time.
  - Put each `class` side by side with space inside HTML element
  ```sh
  <HTML element class=" A B C ">
  I am superwoman.
  </HTML element>
  ```
