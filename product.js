        // Add event listener to hamburger icon element
      document.querySelector('.hamburger-icon').addEventListener('click', function() {
          // Toggle the 'hidden' class on the offcanvas element
        document.querySelector('.offcanvas').classList.toggle('hidden');
      });

      // Add event listener to offcanvas close button element
      document.querySelector('.offcanvas-close').addEventListener('click', function() {
          // Toggle the 'hidden' class on the offcanvas element
        document.querySelector('.offcanvas').classList.toggle('hidden');
      });

      function changeProductImage(imageUrl) {
  // Get the product image element
  let productImage = document.getElementById('product-image');
  console.log(productImage)
  
  // Change the source of the product image to the clicked thumbnail image URL
  productImage.src = imageUrl;
}

//

let currentImageIndex = 0; // Variable to keep track of the current image index

function openLightboxGallery(index) {
  // Get the lightbox gallery element
  var lightboxGallery = document.getElementById('lightbox-gallery');
  // Set the current image index to the selected thumbnail index
  currentImageIndex = index;
  // Get the lightbox image element
  var lightboxImage = document.getElementById('lightbox-image');
  // Set the source of the lightbox image to the selected thumbnail image source
  lightboxImage.src = document.getElementsByClassName('main-image')[index].src;
  // Show the lightbox gallery
  lightboxGallery.classList.remove('hidden');
}

function closeLightboxGallery() {
  // Get the lightbox gallery element
  var lightboxGallery = document.getElementById('lightbox-gallery');
  // Hide the lightbox gallery
  lightboxGallery.classList.add('hidden');
}

function changeLightboxImage(direction) {
  // Get the lightbox image element
  var lightboxImage = document.getElementById('lightbox-image');
  // Update the current image index based on the direction (1 for next, -1 for previous)
  currentImageIndex += direction;
  // If the current image index goes out of bounds, wrap around to the other end
  if (currentImageIndex < 0) {
    currentImageIndex = document.getElementsByClassName('main-image').length - 1;
  } else if (currentImageIndex >= document.getElementsByClassName('main-image').length) {
    currentImageIndex = 0;
  }
  // Set the source of the lightbox image to the new image source based on the updated index
  lightboxImage.src = document.getElementsByClassName('main-image')[currentImageIndex].src;
}


// Listen for dblclick event on the product thumbnail images
let mainImages= document.getElementsByClassName('main-image');
for (let i = 0; i < mainImages.length; i++) {
  mainImages[i].addEventListener('dblclick', function(e) {
    // Get the image source and index from the clicked thumbnail
    var imageSrc = e.target.src;
    var index = Array.from(mainImages).indexOf(e.target);
    // Call the openLightboxGallery function with the selected thumbnail index
    openLightboxGallery(index);
  });
}

// Add click event listener to the close icon
// var closeIcon = document.getElementById('close-icon');
// closeIcon.addEventListener('click', closeLightboxGallery);
document.addEventListener('DOMContentLoaded', function() {
  let closeIcon = document.getElementById('close-icon');
  if (closeIcon) { // Check if the element exists
    closeIcon.addEventListener('click', closeLightboxGallery);
  }
});

//
// #########
const mainProductImage = document.querySelector('.product-image');
const thumbnailImages = document.querySelectorAll('.main-image');
const cartItemCount = document.querySelector('.cart-item-count');
const addToCartButton = document.getElementById('addToCartButton');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cartIcon = document.querySelector('.cart-icon');

// Cart items array to store added products
const cartItems = [];
let productCount = 0;

      document.getElementById('minusButton').addEventListener('click', () => {
        if (productCount > 0) {
            productCount--;
            document.getElementById('productCount').textContent = productCount;
        }
    });
    
    document.getElementById('plusButton').addEventListener('click', () => {
        productCount++;
        document.getElementById('productCount').textContent = productCount;
    });

      // addtocart function
    addToCartButton.addEventListener('click', () => {
      // Get product details
     const productTitle = document.querySelector('.product-title').textContent;
      const productPrice = document.querySelector('.product-price').textContent;
      const productImageSrc = document.getElementById('product-image').src;
      
       // Check if the product count is greater than 0
    if (productCount > 0) {
     // Check if the product is already in the cart
      const existingCartItem = cartItems.find(item => item.title === productTitle);
      if (existingCartItem) {
           // If the product already exists in the cart, update its quantity and price
         existingCartItem.quantity += productCount;
         existingCartItem.totalPrice += Number(productPrice) * productCount;
          updateCartItemCount();
          updateCartItem(existingCartItem);
      } else {
           // If the product is not in the cart, add it as a new cart item
          const cartItem = {
              title: productTitle,
              price: productPrice,
              quantity: productCount,
              totalPrice: Number(productPrice) * Number(productCount),
              imageSrc: productImageSrc
          };
          cartItems.push(cartItem);
          updateCartItemCount();

          // Create cart item markup
           const cartItemMarkup = `
<div class="cart-item mt-3 flex justify-between">
        <img src="${productImageSrc}" alt="${productTitle}" class="cart-item-image w-14 h-14 rounded-sm">
       <div class="cart-item-details">
           <h3 class="cart-item-title text-gray-300">${productTitle}</h3>

            <div class="cart-item-pricing flex justify-">
              <p class="cart-item-price text-gray-400">${productPrice}</p>
            <p class="cart-item-quantity text-gray-400 mx-2">X${productCount}</p>
               <p class="cart-item-price font-bold">${cartItem.totalPrice.toFixed(2)}</p>
               <button class="remove-button ms-auto" data-index="${productTitle}"><img src="./images/icon-delete.svg"></button>
            </div>
        </div>
    </div>
    <button class="my-4 text-white bg-orange-500 inline-block mx-auto rounded-md px-3 py-4 w-full hover:bg-orange-300">Checkout</button>
           `;

          // Append cart item markup to cart items container
          cartItemsContainer.insertAdjacentHTML('beforeend', cartItemMarkup);
      }
   } else {
      alert('Quantity must be greater than 0');
 }
      // Alert success message
      // alert('Product added to cart successfully!');

      // Attach click event listener to cartIcon
      cartIcon.addEventListener('click', () => {
        // Toggle visibility of cart items container
        cartItemsContainer.classList.toggle('block');
      });

      // Remove item from cart
      cartItemsContainer.addEventListener('click', (event) => {
          // Check if the clicked element is a remove button
        if (event.target.classList.contains('remove-button')) {
               // Get the title of the cart item to be removed
              const title = event.target.dataset.title;

  // Find the index of the cart item to be removed
              const index = cartItems.findIndex(item => item.title === title);
  
             // Remove the cart item from the cart items array
              cartItems.splice(index, 1);
  
              // Update cart item count
              updateCartItemCount();
              updateCartTotalPrice();
  
              // Remove the cart item from the DOM
              event.target.closest('.cart-item').remove();
          }
      });
  
      // Update cart item count
      function updateCartItemCount() {
          let totalCount = 0;
          for (const item of cartItems) {
              totalCount += item.quantity;
           }
           cartItemCount.textContent = totalCount;
    
       }
  
     // Update cart item quantity and total price in the DOM
      function updateCartItem(cartItem) {
          const cartItemElement = document.querySelector(`[data-title="${cartItem.title}"]`).closest('.cart-item');
          cartItemElement.querySelector('.cart-item-quantity').textContent = `Quantity: ${cartItem.quantity}`;
          cartItemElement.querySelector('.cart-item-price').textContent = cartItem.totalPrice.toFixed(2);
      }
  // Update cart total price
    function updateCartTotalPrice() {
      let total = 0;
      for (const item of cartItems) {
      total += item.totalPrice;
    }
    document.querySelector('.cart-total-price').textContent = total.toFixed(2);
    }

   });
  



//second button

  

