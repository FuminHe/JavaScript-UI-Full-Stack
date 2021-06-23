# CSS - Cascading Style Sheets

## Cascade

The order of CSS rules matter! When two rules apply that have **equal specificity** **the one that comes last** in the CSS is the one that will be used.

```css
/* The color of h1 will be blue! */
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

## Specificity

How the browser decides which rule applies if multiple rules have **different selectors**, but could still apply to the same element.

Measure specificity:

- 1000: Score one in this column if the declaration is inside a style attribute, Also known as **inline styles**.

- 100: Score one in this column for each **ID selector** contained inside the overall selector.

- 10: Score one in this column for each **class selector**, **attribute selector**, or **pseudo-class** contained inside the overall selector.

- 1: Score one in this column for each **element selector** or **pseudo-element** contained inside the overall selector.

```css
/* For example => score: 0 0 2 2*/

/* [href*="en-US"], .inline-warning => 2(10)*/
/* li, a => 2(1) */

li > a[href*="en-US"] > .inline-warning {
  color: red;
}
```

## Inheritance

Some CSS property values set on parent elements are inherited by their child elements, and some aren't.

For example: `color` and `font-family` will be inherited, but `width` will not.

## !important

There is a special piece of CSS that you can use to overrule all of the above calculations, however, you should be very careful with using it — `!important`.

This is used to make a particular property and value the most specific thing, thus overriding the normal rules of the cascade.

# Selectors

## Simple selector

- tag name: `p {}`
- id: `#elementId {}`
- class: `.className {}`
- `p.intro`: Selects only `<p>` elements with `class="intro"`.
- group selectors: `div, .className {}`
- `*{}`: universal selector, apply to all elements in the html.

## Combinator selectors

- `div p`: Selects all <p> elements **inside** <div> elements.
- `div > p`: Selects all <p> elements where **the parent** is a <div> element.
- `div + p`: Selects the first <p> element that are placed **immediately after** <div> elements.
- `div ~ p`: Selects every <p> element that **are preceded by** a <div> element.

  > all p tags which have a div tag **before them** (P tags can't inside div). No mater if there are any other tags between them.

## Pseudo-class selectors:

Selector that **specifies a special state** of the selected element(s).

Pseudo-classes let you apply a style to an element not only in **relation to the content of the document tree**, but also in **relation to external factors** like the history of the navigator (:visited, for example), the status of its content (like :checked on certain form elements), or the position of the mouse (like :hover, which lets you know if the mouse is over an element or not).

- Linguistic pseudo-classes: `:dir`, `:lang`.
- Location: relate to links. `:link`, `visited`, `:target`.
- User action: `:hover`, `:active`, `:focus`.
- Time-dimensional: `:current`, `:past`, `:future`
- Resource state: `:playing`, `:paused`.
- The input: `:autofill`, `:enabled`, `:disabled`, `:checked`...
- Tree-structural: `:nth-child`, `:nth-last-child`...

## Pseudo-elements selectors

Lets you style a **specific part** of the selected element(s).

For example:

- `::after`, `::before`
- `::first-letter`, `::first-line`

## Attribute selectors

- `a[target]{}`: all `a` tags with `target` attribute.
- `a[target="_blank"]{}`: the **value** of the `target` **is** `_blank`.
- `[title~="flower"]{}`: select elements with an attribute whose value is a whitespace-separated list of words, and the list **containing** a specified word. e.g. `title = "fsfd flower fsdfs"`
- `[class|="top"]{}`: exact value, like `class = "top"` or immediately **followed by a hyphen**, like `class = "top-sososo"`.
- `[class^="top"]{}`: attr whose value is **prefixed** (preceded) by value. e.g. `class = "topsasa"`.
- `[class$="test"]`: select elements whose attribute value **ends with** a specified value.
- `[class*="te"]`: select attr whose value contains at least **one occurrence of value within the string**. e.g. `class="dfdtedfd"`
- `[class*="te" i]` or `[class*="te" s]`:

  `i` - case-insensitively.

  `s` - case-sensitively.

# Box Modle

## display

- `inline`: Displays an element as an inline element (like `<span>`). Any height and width properties will have no effect.

- `inline-block`: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but _you can apply height and width values_.

- `inline-flex`: inline-level flex, will not take up the whole width. If there is a `<span>` after, it will show in the same line with this flex.

- `block`: Displays an element as a block element (like `<p>`). It starts on a new line, and _takes up the whole width_.

- `flex`: block-level flex container.
- `grid`: block-level grid container.
- `none`: The element is completely removed.

## Box: Margin, Border, Padding, and Content

> `box-sizing`: border-box, content-box, initial, inherit.
>
> - `box-sizing: border-box`: The width and height properties (and min/max properties) includes content, padding and border.
> - `box-sizing: content-box`: **Default**. The width and height properties (and min/max properties) includes only the content. Border and padding are not included.

- **content**: by default, it could use `width` and `height` to define.
- **margin**: top,right,bottom,left

  > **margin collapsing**: If you have two elements whose margins touch, and both margins are positive, those margins will combine to become one margin, which is the size of the **largest individual** margin. If one margin is negative, the amount of negative value will **subtract** from the total. Where both are negative, the margins will collapse and the largest value will be used.
  >
  > ```css
  > .one {
  >   margin-bottom: 50px;
  > }
  >
  > .two {
  >   margin-top: 30px;
  > }
  >
  > <!-- margin will be 50px -->
  > <p class="one">I am paragraph one.</p>
  > <p class="two">I am paragraph two.</p>
  > ```

  ```css
  *{
     <!-- all four sides -->
     margin: 10px;

     <!-- top&bottom right&left-->
     margin: 10px 10px;

     <!-- top right&left bottom-->
     margin: 10px 10px 10px;

     <!-- top right bottom left -->
     margin: 10px 10px 10px 10px;
  }
  ```

- padding
- border

# Background

## Background colors

## Background images

1. `background-image`

```css
background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
  url("../../media/examples/lizard.png");

/* color under image */
```

2. `background-repeat`

   - no-repeat: not repeat.
   - repeat-x: repeat only horizontally.
   - repeat-y: repeat only vertically.
   - repeat: the default; repeat in both directions.

3. `background-size`:
   - `background-size:cover`: the browser will make the image just large enough so that it completely covers the box area while still **retaining its aspect ratio**. In this case, part of the image is likely to end up outside the box.
   - `background-size:contain`: the browser will make the image the right size to fit inside the box. In this case, you may end up with gaps on either side or on the top and bottom of the image, if the aspect ratio of the image is different from that of the box.
   - `length`, `percentage`
4. `background-position`: top, left, right, bottom, length, percentage.

5. Gradient

   - linear-gradient()
   - radial-gradient()
   - repeating-linear-gradient(), repeating-radial-gradient()
   - conic-gradient()

6. `background-attachment`

- scroll
- fixed
- local: so when you scroll the element, the background scrolls with it.

7. **Accessibility**

   If specifying an image, and text will be placed on top of that image, you should also specify a background-color that will allow the text to be legible if the image does not load.

   Screen readers cannot parse background images, therefore they should be purely decoration; any important content should be part of the HTML page and not contained in a background.

# Text Directions
