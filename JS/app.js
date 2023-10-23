let isCartOverlayOpen = false;
let catelog = [
  {
    name: "bowl",
    price: 19.99,
    img: "../Images/3DObjects/Static Images/RepousseBowl_Static_Model.png"
  },
  {
    name: "iphone",
    price: 499.99,
    img: "../Images/3DObjects/Static Images/IPhone_Static_Model.png"
  },
  {
    name: "mercCar",
    price: 17.99,
    img: "../Images/3DObjects/Static Images/Merc_Flying_Car_Static_Model.png"
  },
  {
    name: "watch",
    price: 3.99,
    img: "../Images/3DObjects/Static Images/Montana_Watch_Static_Model.png"
  },
  {
    name: "shoe",
    price: 12.99,
    img: "../Images/3DObjects/Static Images/New_Balance_Static_Model.png" 
  },
  {
    name: "porsch911",
    price: 129.99,
    img: "../Images/3DObjects/Static Images/Porsch_911_Static_Model.png" 
  },
  {
    name: "teslaTequilla",
    price: 90.99,
    img: "../Images/3DObjects/Static Images/Tesla_Tequila_Static_Model.png" 
  },
  {
    name: "backPack",
    price: 16.99,
    img: "../Images/3DObjects/Static Images/TravellersBackpack_Static_Model.png"
  },
  {
    name: "vikingHelmet",
    price: 29.99,
    img: "../Images/3DObjects/Static Images/Viking_Helmet_Static_Image.png"
  },
]
let shoppingCartItems = [];

function openCartOverlay() {
  isCartOverlayOpen = !isCartOverlayOpen;
  let cart = document.getElementById("shoppingCartOverlay");
  if(isCartOverlayOpen){
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
}

function updateShoppingCart(){
  let cartCount = document.getElementById("cart_item_count");
  cartCount.textContent = shoppingCartItems.length;
  return;
}

function loginClicked(){
  let container = document.getElementById("login-overlay");
  let display = container.style.display;
  if(display == 'none' || display == ''){
    container.style.display = 'flex';
  } else {
    container.style.display = 'none';
  }
}

function signupClicked(){
  let container = document.getElementById("signup-overlay");
  let display = container.style.display;
  if(display == 'none' || display == ''){
    container.style.display = 'flex';
  } else {
    container.style.display = 'none';
  }
}

function closeOverlay(){
  let loginContainer = document.getElementById("login-overlay");
  let signupContainer = document.getElementById("signup-overlay");
  loginContainer.style.display = 'flex' ? 'none' : 'flex';
  signupContainer.style.display = 'flex' ? 'none' : 'flex';
}

function addToCart(name){
  if(!shoppingCartItems.includes(name)){
    console.log("adding", name, "to the shopping cart!");
    let btn = document.getElementById(name + "Btn");
    btn.textContent = "Remove From Cart"
    shoppingCartItems.push(name);
  } else {
    console.log("removing", name, "from the shopping cart!");
    console.log("button name:", name + "Btn");
    let btn = document.getElementById(name + "Btn");
    btn.textContent = "Add To Cart"
    let index = shoppingCartItems.indexOf(name);
    shoppingCartItems.splice(index, 1);
  }
  updateShoppingCart();
}

function toggleChatWindow() {
  var chatWindow = document.getElementById("chat-window");
  chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
}

function openConfirmationOverlay() {
  let confirmOverlay = document.getElementById("confirmation-overlay");
  let display = confirmOverlay.style.display;
  if(display == 'none' || display == ''){
    confirmOverlay.style.display = 'block';
    updateDynamicDate();
  } else {
    confirmOverlay.style.display = 'none';
  }
}

  function updateDynamicDate(){
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    let fullDate = currentDay + "-" + (currentMonth + 1) + "-" + currentYear;
    let dateHolder = document.getElementById("dynamicDate");
    dateholder.textContent = "Date: " + fullDate;
  }

  function showOrderDetails() {
    const orderDetails = document.getElementById("orderDetails");
    const orderIdInput = document.getElementById("order-id").value;

    if (orderIdInput) {
        document.getElementById("orderIdDisplay").textContent = orderIdInput;
        document.getElementById("trackingIdDisplay").textContent = generateTrackingId();
        document.getElementById("orderNameDisplay").textContent = generateOrderName();
        document.getElementById("orderStatusDisplay").textContent = generateOrderStatus();
        orderDetails.style.display = "block";
    }
}

function generateTrackingId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let trackingId = '';
    for (let i = 0; i < 7; i++) {
        trackingId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return trackingId;
}

function generateOrderStatus() {
  const statuses = ["in-progress", "shipped", "under review", "missing in transit", "given away to the homeless", "stolen by porch pirates", "BE PATIENT!"]
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function generateOrderName(){
    const fNames = [
      "John",
      "Jane",
      "David",
      "Emily",
      "Michael",
      "Sarah",
      "William",
      "Olivia",
      "Robert",
      "Sophia",
      "James",
      "Ava",
      "Joseph",
      "Mia",
      "Daniel",
      "Charlotte",
      "Andrew",
      "Ella",
      "Matthew",
      "Grace"
  ];

  const lNames = [
      "Smith",
      "Johnson",
      "Brown",
      "Davis",
      "Wilson",
      "Miller",
      "Jones",
      "Anderson",
      "Thomas",
      "Harris",
      "Martin",
      "White",
      "Lee",
      "Walker",
      "Hall",
      "Lewis",
      "Allen",
      "Young",
      "Clark",
      "Baker"
  ];

  return fNames[Math.floor(Math.random() * fNames.length)] + " " + lNames[Math.floor(Math.random() * lNames.length)];
}
