# Explain
* 
relative:要設定上下左右的值才會看出變化，設定後，在他相鄰其他元素的位置不會移動，但子元素會跟著移動

absolute:is positioned relative to the nearest positioned ancestor
if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
A "positioned" element is one whose position is anything except static.


fixed:is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
用上下左右值來定義它的位置



1.absolute後會跳脫頁面，浮在最上層的概念，因此在不設定此元素寬度的狀況下，此元素的內容多寡就直接成為他的寬度，例如div會有block的特性，但在跳脫頁面後，
就不受block特性影響，變成以其內容所撐開的寬度為寬度。

第一個圖
2.在父元素有relativ等4個下，absolute的子元素會以父元素的邊界為基底；當父元素無任何設定時，則以整個body的頁面為基底
3.position:relative | absolute | fixed | inherit(前三種繼承)
