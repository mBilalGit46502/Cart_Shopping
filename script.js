
  let cardSection = document.getElementById("cardSection");
  let btnAddImage = document.getElementById("btnAddImage");
  let fileInputs = document.getElementById("fileInput"); // Reference the file input
  let totalPrice = 0;
  let imagePreview=document.getElementById("imagePreview")


  fileInputs.addEventListener("change", function(e) {
    const file = e.target.files[0]; // Get the selected file
  
    if (file) {
      const reader = new FileReader(); // Create a new FileReader
  
      reader.onload = function(event) {
       
       imagePreview.src= file.name
        imagePreview.src = event.target.result; // Set the src of imagePreview to show the selected image
        imagePreview.style.visibility = "visible"; // Ensure the image preview is visible
      };
  
      reader.readAsDataURL(file); // Read the file as a data URL to load the image
    } else {
      // imagePreview.src = ""; // Clear the src if no file is selected
      alert("Please select an image file.");
      imagePreview.style.visibility = "hidden"; // Hide the preview if no image is selected
    }
    
  
    // Reset the file input value to allow re-selecting the same file
    fileInputs.value = "";

  });
  //  imagePreview=document.getElementById("imagePreview")
 
  btnAddImage.addEventListener("click", function () {
    // Creating the card structure
    let card = document.createElement("div");
    card.className = "card";

    let cardColor=document.createElement("i")
    cardColor.innerHTML=' <i id="cardColor" style="z-index: 2;  ; " class="fa-solid fa-palette"></i>'

    cardColor.addEventListener("click",function(){

      let randColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      let randColor5="#"+Math.floor(Math.random() * 16778225).toString(16);
      for(i=0;i<randColor4.length;i++){
    
       
        card.style.backgroundColor=`${randColor4}`
        addtoCartBtn.style.backgroundColor=`${randColor5}`
      }
    
    })
    // Image container and image element
    let image = document.createElement("div");
    image.className = "image";

    let img = document.createElement("img"); // Image tag
   
    
    img.style.display = "block"; // Ensure the image is displayed
    image.appendChild(img); // Add img to image container

    // Description container with title and description
    let description = document.createElement("div");
    description.className = "description";

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    description.appendChild(h2);
    description.appendChild(p);

    // Price container
    let price = document.createElement("div");
    price.className = "price";

    let h3 = document.createElement("h3");
    price.appendChild(h3);

    // Add to cart button
    let addtoCartBtn = document.createElement("button");
    addtoCartBtn.className = "addtoCartBtn"; // Use class instead of id
    addtoCartBtn.innerHTML = "Add to Cart";

    card.append(image, cardColor, description, price, addtoCartBtn);
    // Append all elements to card
    // Add card to card section
    
    // Retrieve user input values and assign to elements
    let ProductTitle = document.getElementById("ProductTitle");
    let ProductDescription = document.getElementById("ProductDescription");
    let ProductPrice = document.getElementById("ProductPrice");
    if(ProductTitle.value!=="" && ProductDescription.value!==""&& ProductPrice.value!=="" ){
      cardSection.appendChild(card); 
      h2.innerHTML = ProductTitle.value;
      p.innerHTML = ProductDescription.value;
      h3.innerHTML = `$${ProductPrice.value}`;
      img.src=imagePreview.src
      
    }else{
  alert("plz enter the all input value ")


}
    
imagePreview=document.getElementById("imagePreview")
  imagePreview.src=""
  imagePreview.style.visibility = "hidden";
    


    let cartShopping = document.getElementById("cartShopping");
let cartDisplayShow = 0;




cartShopping.addEventListener("click", function (e) {
  let cartNumber = parseInt(document.getElementById("cartNumber").innerHTML);
  let cartDisplay = document.querySelector(".cartDisplay");

  // Check if cartNumber is at least 1 before showing cartDisplay
  if (cartNumber > 0) {
    if (cartDisplayShow === 0) {
      cartDisplay.style.display = "block";
      cartDisplayShow = 1;
    } else {
      cartDisplay.style.display = "none";
      cartDisplayShow = 0;
    }
  } else {
    alert("Please add at least one item to the cart.");
  }

  // Stop event propagation so click on cartShopping doesn't close cartDisplay
  e.stopPropagation();
});

ProductTitle.value=""
ProductDescription.value=""
ProductPrice.value=""

document.addEventListener("click", function (e) {
  let cartDisplay = document.querySelector(".cartDisplay");

  // Check if cartDisplay is visible and if the click is outside cartDisplay or cartShopping
  if (
    cartDisplayShow === 1 &&
    !cartDisplay.contains(e.target) &&
    !cartShopping.contains(e.target)
  ) {
    cartDisplay.style.display = "none";
    cartDisplayShow = 0;
  }
});



// Hide cartDisplay if clicking outside of it, but not when clicking addtoCartBtn
// / Hide cartDisplay if clicking outside of it, but not when clicking addtoCartBtn


    // Add event listener for the dynamically created button
    addtoCartBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent click from propagating to document
      
      let cartDisplay_TotalPrice= document.querySelector(".cartDisplay-totalprice")

      let cartDisplayColor=document.getElementById("cartDisplayColor")
      cartDisplayColor.addEventListener("click",function(){

        console.log("bilal");
        
let cartDisplay=document.querySelector(".cartDisplay")
let randColor6 = "#" + Math.floor(Math.random() * 16777215).toString(16);
let randColor7 = "#" + Math.floor(Math.random() * 16777215).toString(16);
let randColor8 = "#" + Math.floor(Math.random() * 16777215).toString(16);



for(i=0;i<randColor6.length;i++){


  cartDisplay_card.style.backgroundColor=`${randColor6}`
  cartButton.style.backgroundColor=`${randColor7}`
  cartDisplay_TotalPrice.style.backgroundColor=`${randColor8}`

}

})
      
      let cartNumber = document.getElementById("cartNumber");
      cartNumber.innerHTML++;
  
      let cartDisplay = document.querySelector(".cartDisplay");
      let cartDisplay_card = document.createElement("div");
      cartDisplay_card.className = "cartDisplay-card";
  
      cartDisplay.appendChild(cartDisplay_card);
      cartDisplay.scrollTop = cartDisplay.scrollHeight;
  
      let cardImage = img.src;
      let cardTitle = h2.innerText;
      let cardDescription = p.innerText;
      let cardPrice = parseFloat(h3.innerText.replace("$", ""));
  
      let imgElement = document.createElement("img");
      imgElement.className = "cartDisplay-image";
      imgElement.src = cardImage;
  
      let cartDisplay_title = document.createElement("div");
      cartDisplay_title.className = "cartDisplay-title";
      let title = document.createElement("h2");
      title.innerHTML = cardTitle;
      let description = document.createElement("p");
      description.innerHTML = cardDescription;
      cartDisplay_title.append(title, description);
  
      let cartDisplay_Amount = document.createElement("div");
      cartDisplay_Amount.className = "cartDisplay-amount";
  
      let cartButton = document.createElement("button");
      cartButton.className = "cartDisplay-button";
      cartButton.innerHTML = "Go Cart";
  
      let deleteCart = document.createElement("div");
      deleteCart.innerHTML = '<i style="color:black;" class="fa-solid fa-trash"></i>';
      deleteCart.className = "deleteCart";
  
      let cartPrice = document.createElement("div");
      cartPrice.className = "cartDisplay-price";
      cartPrice.textContent = `${cardPrice}$`;
  
      deleteCart.addEventListener("click", function (e) {
          totalPrice -= cardPrice;
          totalPriceDisplay.innerText = `The total price is ${totalPrice}$`;
          cartDisplay_card.remove();
          cartNumber.innerHTML--;
          e.stopPropagation();


      });
  
      let totalPriceDisplay = document.querySelector("#totalPrice");
      totalPrice += cardPrice;
      totalPriceDisplay.innerText = `The total price is $${totalPrice}`;
  
      cartDisplay_Amount.append(cartButton, deleteCart, cartPrice);
      cartDisplay_card.append(imgElement, cartDisplay_title, cartDisplay_Amount);

    });
    
  });
  
// });

let addImageCheck = 0;
let imageAddBox = document.querySelector(".imageAddBox");

imageAddBox.addEventListener("click", function(event) {
  // Check if the clicked element is the imageAddBox itself, not its children
  if (event.target === event.currentTarget) {
    // imageAddBox.style.backgroundColor = "black";

    if (addImageCheck === 0) {
            imageAddBox.style.animation="gainWidth 2s normal"
      imageAddBox.style.animationPlayState = "running";
      imageAddBox.style.width="300px "
      let ProductTitle=document.getElementById("ProductTitle")
      ProductTitle.style.display="block"
      let ProductDescription=document.getElementById("ProductDescription")
      ProductDescription.style.display="block"
      let ProductPrice=document.getElementById("ProductPrice")
      ProductPrice.style.display="block"
      let fileInput=document.getElementById("fileInput")
      fileInput.style.display="block"
      let btnAddImage=document.getElementById("btnAddImage")
      btnAddImage.style.display="block"
let imageAddBoxColor=document.getElementById("imageAddBoxColor")
imageAddBoxColor.style.display="block"

      addImageCheck = 1;
    } else {
      imageAddBox.style.animation="reduceWidth 2s normal"
      imageAddBox.style.animationPlayState = "running";
      imageAddBox.style.width="10px"
      let ProductTitle=document.getElementById("ProductTitle")
      ProductTitle.style.display="none"
      let ProductDescription=document.getElementById("ProductDescription")
      ProductDescription.style.display="none"
      let ProductPrice=document.getElementById("ProductPrice")
      ProductPrice.style.display="none"
      let fileInput=document.getElementById("fileInput")
      fileInput.style.display="none"
      let btnAddImage=document.getElementById("btnAddImage")
      btnAddImage.style.display="none"
      let imageAddBoxColor=document.getElementById("imageAddBoxColor")
imageAddBoxColor.style.display="none"
      addImageCheck = 0;
    }
  }
});


let headerColor=document.getElementById("headerColor")

headerColor.addEventListener("click",function(){
 
  
  // let color="0123456789abcdef"
  let nav=document.querySelector(".nav")
  
  let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  console.log(randColor);
  
  for(i=0;i<randColor.length;i++){

    nav.style.backgroundColor=`${randColor}`
    

  }
})

let ulColor=document.getElementById("ulColor")
ulColor.addEventListener("click",function(){
  let ul=document.querySelectorAll("ul li")
  let randColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  for(i=0;i<randColor2.length;i++){

   
    ul[i].style.backgroundColor=`${randColor2}`

  }

})

let imageAddBoxColor=document.getElementById("imageAddBoxColor")
imageAddBoxColor.addEventListener("click",function(){
  let randColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  for(i=0;i<randColor3.length;i++){

   
    imageAddBox.style.backgroundColor=`${randColor3}`

  }

})

