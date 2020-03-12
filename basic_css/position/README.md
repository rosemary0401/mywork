# Explain
* The position property has five different position values:
  - static
  - relative
  - absolute
  - fixed
  - sticky
  
* To use position properties such as`top`, `bottom`, `right`, `left` properties, we have to set the one of the five position values first. For example:`position: relative`

* `position: relative`
  - element will be positioned relatively by using `top`, `bottom`, `right`, `left` properties
  - relatively-positioned element will move away its normal position by setting `top`, `bottom`, `right`, `left` properties
  - other elements next to the relatively-positioned element won't be moved to fit into the gap left by the relatively-positioned element
  - child element will be moved way its normal position together

* `position: absolute`
  - the position value of the element ancestor will decide the basic start point of absolute position
  - if `position: static` or has no positioned ancestors： the document body will be its start point and moves along with page scrolling.
  - if `position: relative | absolute | fixed | inherit(the first three)`: the absolute element will be adjusted according to the the position of its element ancestor
  
* `position: fixed`
  - is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
  - use `top`, `bottom`, `right`, `left` properties to set its position

* Special rules for position properties:
  - absolute element will not be limited to its original container，so its content will depend on its real width if we don't set the width value first. For example, `<div>` is block. When it's changed the position property to absolute, the block magic will disappear. It's content will depend on its real width.

## Review
* https://ithelp.ithome.com.tw/articles/10212202
