# Frontend Mentor - E-commerce product page solution


- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./images/prodcut%20page-img.png)
![](./images/prodcut%20page-img-2.png)
![](./images/prodcut%20page-img-3.png)


**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/muubaraq/ecommerce-product-page)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- [Tailwindcss](https://tailwindcss.com) - For styles


### What I learned

DOM manipulation: You have learned how to manipulate the DOM (Document Object Model) using JavaScript to dynamically update the HTML content, create HTML elements, append them to the DOM, and handle events such as clicks.

Templating: You have learned how to use template literals to generate dynamic HTML markup, which allows you to dynamically create and insert HTML content into the DOM based on data or events.

Event handling: You have learned how to handle events, such as click events, and attach event listeners to HTML elements using JavaScript. You have also learned how to access event properties and use them to trigger specific actions or behaviors in your project.

Array manipulation: You have learned how to manipulate arrays in JavaScript, such as adding, removing, and updating array items based on different conditions, as well as using array methods like findIndex() and splice().


Image gallery: You have learned how to create a simple image gallery with lightbox functionality, allowing users to view larger images in a modal overlay, and switch between thumbnail images using JavaScript event handling and DOM manipulation

To see how you can add code snippets, see below:

```html
    <div id="lightbox-gallery" class="hidden">

      <div class="lightbox-overlay" onclick="closeLightboxGallery()"></div>
      <div class="lightbox-content hidden sm:block  sm:max-w-md mx-auto">
        <img src="./images/icon-close.svg" alt="close-icon" id="lightbox-image-2" onclick="closeLightboxGallery()"> 
        <img src="" alt="Product Image" id="lightbox-image" class="sm:max-w-sm sm:rounded-lg">
        <div class="lightbox-btn lightbox-btn-prev font-bold text-2xl" onclick="changeLightboxImage(-1)">&#9001;</div>
      <div class="lightbox-btn lightbox-btn-next font-bold text-2xl" onclick="changeLightboxImage(1)">&#9002;  </div>
       </div>
      </div>
```
```css
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
```
```js
function changeProductImage(imageUrl) {
  // Get the product image element
  let productImage = document.getElementById('product-image');
  console.log(productImage)
  
  // Change the source of the product image to the clicked thumbnail image URL
  productImage.src = imageUrl;
}

```

### Continued development

Refining and perfecting techniques: Continue to refine and perfect your coding techniques, such as properly using event listeners, manipulating the DOM, and working with arrays and objects in JavaScript. Ensure that your code follows best practices, is efficient, and is properly organized for maintainability.

Debugging and troubleshooting: Develop your skills in debugging and troubleshooting to quickly identify and resolve issues that may arise during development. Use tools like browser developer tools and console logging to diagnose and fix problems in your code. 

Testing and validation: Thoroughly test your code and validate its functionality to ensure that it works as expected in different scenarios, such as adding various products to the cart, changing quantities, and removing items. Consider edge cases and handle them appropriately in your code.

By focusing on these areas, you can continue to improve your skills and become more proficient in handling cart functionality and other complex interactions in your future projects.


## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/muubaraq)
- Twitter - [@yourusername](https://www.twitter.com/muubaraq)
