const productViews = new WeakMap();
const cartItems = new WeakSet();

const incrementProductViews = (productId) => {
  if(productViews.has(productId)) {
    productViews.set(productId, productViews.get(productId) + 1);
  } else {
    productViews.set(productId, 1);
  }
  console.log(productViews.get(productId))
};

const addToCart = (productId) => {
  if(cartItems.has(productId)) {
    console.log("Product already in cart");
  } else {
    cartItems.add(productId);
    console.log("product added to cart.");
  }
}
const earphone = {
  brand: "sony",
  model: "wf-700n"
}

const phone = {
  brand: "xiaomi",
  model: "11T pro"
}
incrementProductViews(earphone)
incrementProductViews(earphone)
incrementProductViews(phone)
incrementProductViews(phone)

addToCart(earphone)
addToCart(earphone)
addToCart(phone)
addToCart(phone)
