## Responsive images

To make images work well on devices with different screen sizes, resolutions, and other such features

- `srcset`: defines the set of images we will allow the browser to choose => same size but different resolutions.

## HTML Links

`<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>`

The `target` attribute can have one of the following values:

- `_self` - Default. Opens the document in the same window/tab as it was clicked
- `_blank` - Opens the document in a new window or tab
- `_parent` - Opens the document in the parent frame
- `_top` - Opens the document in the full body of the window

## HTML Tables

```html
<style>
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
  </tr>
</table>
```

## HTML Block and Inline Elements

### Block-level Elements

A block-level element always **starts on a new line.**

A block-level element always **takes up the full width available** (stretches out to the left and right as far as it can).

A block level element **has a top and a bottom margin**, whereas an inline element does not.

`<canvas>` `<div>` `<footer>` `<form>` `<h1>-<h6>` `<hr>` `<li>` `<main>` `<nav>` `<p>` `<table>` `<ul>`

### Inline Elements

An inline element **does not start on a new line.**

An inline element **only takes up as much width as necessary**.

`<a>` `<br>` `<span>` `<img>` `<input>`

## HTML Iframes

An HTML iframe is used to display a web page within a web page.

`<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>`

## HTML Layout

```css
/* nav bar */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* use flex! */
```

## HTML Drag and Drop API

```html
<script>
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
</script>
<!-- -------------------------------- -->
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img
  id="drag1"
  src="img_logo.gif"
  draggable="true"
  ondragstart="drag(event)"
  width="336"
  height="69"
/>
```

## HTML Web Workers

A web worker is **a JavaScript running in the background**, without affecting the performance of the page.

When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

## HTML Accessibility

- Semantic HTML: `<button>` rather than `<div>`
- Headings are defined with the `<h1>` to `<h6>` tags:
- Alternative Text: `alt`

  `<img src="img_chania.jpg" alt="Flowers in Chania">`

- Declare the Language: `<html lang="en">`

- Create Good Link Text: A link text should explain clearly what information the reader will get by clicking on that link.

- The `title` Attribute: specifies extra information about an element.

# [HTML Multimedia](https://www.w3schools.com/tags/ref_av_dom.asp)

## HTML Video

```html
<video width="320" height="240" autoplay muted controls id="video1">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>

<!-- -- -->
<script>
  const video = document.getElementById("video1");

  // play video
  video.play();

  // pause video
  video.pause();
</script>
```

## HTML Audio

```html
<audio controls autoplay muted src="ddd.mp3">
  Your browser does not support the audio element.
</audio>

<!-- also has play and pause -->
```
