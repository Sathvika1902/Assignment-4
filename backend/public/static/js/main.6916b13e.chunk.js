(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(17),s=a.n(n),l=a(5),o=a(2),i=a(8);var m=function(e){let{userLoggedIn:t,setUserLoggedIn:a}=e;const r=Object(o.p)();return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"navbar-brand",to:"/"},c.a.createElement("span",{role:"img","aria-label":"bookstore"},"\ud83d\udcda")," Book Store"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ms-auto"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/products"},"Products")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/cart"},"Cart")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/wishlist"},"Wishlist")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"btn btn-danger ms-2",onClick:()=>{localStorage.removeItem("token"),a(!1),r("/login")}},"Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/login"},"Login")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/register"},"Register")))))))};a(24);var d=function(){return c.a.createElement("div",{className:"home-container text-center"},c.a.createElement("h1",null,"Welcome to the Book Store!"),c.a.createElement("p",null,"Discover an extensive collection of books across various genres. Log in or register to start shopping, save your favorites, and enjoy exclusive deals!"),c.a.createElement("section",{className:"featured-categories mt-5"},c.a.createElement("h2",null,"Featured Categories"),c.a.createElement("div",{className:"categories d-flex justify-content-center mt-4"},c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_one.jpeg",alt:"Fiction",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Fiction")),c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_two.jpeg",alt:"Science",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Science")),c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_three.jpeg",alt:"Finance",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Finance")),c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_four.jpeg",alt:"Romance",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Romance")))),c.a.createElement("section",{className:"cta mt-5"},c.a.createElement("h2",null,"Why Choose Us?"),c.a.createElement("p",null,"Whether you\u2019re looking for bestsellers, academic references, or niche collections, our Book Store has it all. Sign up today and enjoy:"),c.a.createElement("ul",{className:"list-unstyled text-start mx-auto",style:{maxWidth:"600px"}},c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"checkmark"},"\u2714\ufe0f")," Exclusive Member Discounts"),c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"checkmark"},"\u2714\ufe0f")," Personalized Recommendations"),c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"checkmark"},"\u2714\ufe0f")," Fast & Free Delivery on Orders Over $50")),c.a.createElement("button",{className:"btn btn-primary mt-3"},"Start Shopping")),c.a.createElement("section",{className:"testimonials mt-5"},c.a.createElement("h2",null,"What Our Customers Say"),c.a.createElement("div",{className:"testimonial d-flex justify-content-center mt-4"},c.a.createElement("div",{className:"testimonial-card mx-3 text-center p-3 rounded shadow-sm"},c.a.createElement("p",null,'"I love the variety of books available here! I found everything I needed in one place."'),c.a.createElement("h5",{className:"mt-2"},"- Sarah L.")),c.a.createElement("div",{className:"testimonial-card mx-3 text-center p-3 rounded shadow-sm"},c.a.createElement("p",null,'"Amazing deals and great service! Highly recommend this Book Store."'),c.a.createElement("h5",{className:"mt-2"},"- John D.")))))},u=(a(14),a(34));const E=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"http://18.188.241.73:8090",g=u.a.create({baseURL:E,headers:{"Content-Type":"application/json"}});g.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});const p=async e=>{return(await g.post("/api/users/register",e)).data},v=async(e,t)=>{return(await g.post("/api/users/login",{email:e,password:t})).data},y=async e=>{return(await g.get(`/api/products/${e}`)).data},h=async e=>{return(await g.get(`/api/cart/${e}`)).data.product_details},b=async(e,t,a,r)=>{return(await g.post("/api/cart",{user_id:e,product_id:t,quantity:a,price:r})).data},N=async(e,t)=>{return(await g.delete(`/api/cart/${e}/${t}`)).data},f=async e=>{return(await g.get(`/api/wishlist/${e}`)).data.product_details},w=async(e,t,a,r)=>{return(await g.post("/api/wishlist",{user_id:e,product_id:t,quantity:a,price:r})).data},k=async(e,t)=>{return(await g.delete(`/api/wishlist/${e}/${t}`)).data};var _=function(e){let{userId:t,addToCart:a,addToWishlist:n}=e;const{id:s}=Object(o.r)(),[l,i]=Object(r.useState)(null),[m,d]=Object(r.useState)(1),[u,E]=Object(r.useState)("");return Object(r.useEffect)(()=>{(async()=>{try{const e=await y(s);i(e)}catch(u){console.error("Error fetching product details:",u.message),E("Product not found.")}})()},[s]),u?c.a.createElement("div",{className:"error-message"},u):l?c.a.createElement("div",{className:"product-details-container"},c.a.createElement("div",{className:"product-details"},c.a.createElement("img",{src:l.image_url,alt:l.product_name,className:"product-details-image"}),c.a.createElement("div",{className:"product-details-info"},c.a.createElement("h1",null,l.product_name),c.a.createElement("p",{className:"product-description"},l.description),c.a.createElement("p",{className:"product-price"},"$",l.price),c.a.createElement("div",{className:"quantity-selector"},c.a.createElement("label",{htmlFor:"quantity"},"Quantity:"),c.a.createElement("select",{id:"quantity",value:m,onChange:e=>d(parseInt(e.target.value))},[...Array(10).keys()].map(e=>c.a.createElement("option",{key:e+1,value:e+1},e+1)))),c.a.createElement("div",{className:"button-group"},c.a.createElement("button",{className:"btn btn-primary",onClick:()=>{l&&a({...l,userId:t,quantity:1})}},"Add to Cart"),c.a.createElement("button",{className:"btn btn-secondary",onClick:()=>{l&&n({...l,userId:t,quantity:1})}},"Add to Wishlist"))))):c.a.createElement("div",null,"Loading...")};var x=function(e){let{userId:t,addToCart:a,addToWishlist:n,cartItems:s,wishlistItems:l}=e;const{id:i}=Object(o.r)(),[m,d]=Object(r.useState)(null),[u,E]=Object(r.useState)(1),[g,p]=Object(r.useState)("");return Object(r.useEffect)(()=>{(async()=>{try{const e=await y(i);d(e)}catch(g){console.error("Error fetching product details:",g.message),p("Product not found.")}})()},[i]),g?c.a.createElement("div",{className:"error-message"},g):m?c.a.createElement("div",{className:"product-details-container"},c.a.createElement("div",{className:"product-details"},c.a.createElement("img",{src:m.image_url,alt:m.product_name,className:"product-details-image"}),c.a.createElement("div",{className:"product-details-info"},c.a.createElement("h1",null,m.product_name),c.a.createElement("p",{className:"product-description"},m.description),c.a.createElement("p",{className:"product-price"},"$",m.price),c.a.createElement("div",{className:"quantity-selector"},c.a.createElement("label",{htmlFor:"quantity"},"Quantity:"),c.a.createElement("select",{id:"quantity",value:u,onChange:e=>E(e.target.value)},[...Array(10).keys()].map(e=>c.a.createElement("option",{key:e+1,value:e+1},e+1)))),c.a.createElement("div",{className:"button-group"},c.a.createElement("button",{className:"btn btn-primary",onClick:()=>{m&&a({...m,userId:t,quantity:1})}},"Add to Cart"),c.a.createElement("button",{className:"btn btn-secondary",onClick:()=>{m&&(n({...m,userId:t,quantity:1}),alert(`${m.product_name} has been added to your wishlist.`))}},"Add to Wishlist"))))):c.a.createElement("div",null,"Loading...")};a(29);var j=function(e){let{userId:t}=e;const[a,n]=Object(r.useState)([]),s=Object(r.useCallback)(async()=>{try{const a=await h(t);n(a)}catch(e){console.error("Error fetching cart:",e.message)}},[t]);return Object(r.useEffect)(()=>{s()},[s]),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h2",null,"Your Cart"),0===a.length?c.a.createElement("p",null,"Your cart is empty."):c.a.createElement("div",null,c.a.createElement("div",{className:"cart-list"},a.map(e=>c.a.createElement("div",{key:e.product_id,className:"cart-item card mb-3 shadow-sm"},c.a.createElement("div",{className:"row g-0 align-items-center"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("img",{src:e.image_url,alt:e.product_name,className:"img-fluid rounded-start",style:{maxHeight:"100px",objectFit:"cover"}})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.product_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Price:")," $",e.price," each"))),c.a.createElement("div",{className:"col-md-4 d-flex align-items-center justify-content-end"},c.a.createElement("div",{className:"me-3"},c.a.createElement("label",{htmlFor:`quantity-${e.product_id}`,className:"form-label"},"Quantity:"),c.a.createElement("select",{id:`quantity-${e.product_id}`,value:e.quantity,onChange:a=>(async(e,a)=>{try{await b(t,e,a),n(t=>t.map(t=>t.product_id===e?{...t,quantity:a}:t))}catch(r){console.error("Error updating quantity:",r.message)}})(e.product_id,parseInt(a.target.value)),className:"form-select",style:{maxWidth:"80px"}},[...Array(10).keys()].map(e=>c.a.createElement("option",{key:e+1,value:e+1},e+1)))),c.a.createElement("button",{onClick:()=>(async e=>{try{await N(t,e),n(t=>t.filter(t=>t.product_id!==e))}catch(a){console.error("Error removing item:",a.message)}})(e.product_id),className:"btn btn-danger"},"Remove")))))),c.a.createElement("div",{className:"text-end mt-4"},c.a.createElement("h4",null,"Total Price: $",a.reduce((e,t)=>e+t.price*t.quantity,0).toFixed(2)))))};a(30),a(15);var I=function(e){let{userId:t,wishlistItems:a,setWishlistItems:n,addToCart:s}=e;Object(r.useEffect)(()=>{(async()=>{try{const a=await f(t);n(a||[])}catch(e){console.error("Error fetching wishlist:",e.message)}})()},[t,n]);const l=async e=>{try{await k(t,e),n(t=>t.filter(t=>t.product_id!==e))}catch(a){console.error("Error removing from wishlist:",a.message)}};return a&&0!==a.length?c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h2",null,"Your Wishlist"),c.a.createElement("div",{className:"wishlist-list"},a.map(e=>c.a.createElement("div",{key:e.product_id,className:"wishlist-item card mb-3 shadow-sm"},c.a.createElement("div",{className:"row g-0 align-items-center"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("img",{src:e.image_url,alt:e.product_name,className:"img-fluid rounded-start",style:{maxHeight:"100px",objectFit:"cover"}})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.product_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Price:")," $",e.price),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Quantity:")," ",e.quantity||1))),c.a.createElement("div",{className:"col-md-4 d-flex justify-content-end align-items-center"},c.a.createElement("button",{className:"btn btn-secondary me-2",onClick:()=>l(e.product_id)},"Remove"),c.a.createElement("button",{className:"btn btn-primary",onClick:()=>(async e=>{try{await s({...e,quantity:e.quantity||1}),await l(e.product_id)}catch(t){console.error("Error moving item to cart:",t.message)}})(e)},"Move to Cart"))))))):c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h2",null,"Your Wishlist"),c.a.createElement("p",null,"Your wishlist is empty."))};a(16);var O=function(e){let{setUserLoggedIn:t}=e;const[a,n]=Object(r.useState)(""),[s,l]=Object(r.useState)(""),[m,d]=Object(r.useState)(""),[u,E]=Object(r.useState)(!1),g=Object(o.p)();return c.a.createElement("div",{className:"auth-container"},c.a.createElement("h2",null,"Login"),m&&c.a.createElement("div",{className:"alert alert-danger"},m),c.a.createElement("form",{onSubmit:async e=>{e.preventDefault(),E(!0),d("");try{const e=await v(a,s);localStorage.setItem("token",e.token),t(!0);const l=Object(i.a)(e.token).user_id;console.log("Logged in userId:",l),g("/")}catch(n){var r,c;d((null===(r=n.response)||void 0===r?void 0:null===(c=r.data)||void 0===c?void 0:c.message)||"Login failed. Please try again.")}finally{E(!1)}}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",className:"form-control",value:a,onChange:e=>n(e.target.value),required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",className:"form-control",value:s,onChange:e=>l(e.target.value),required:!0})),c.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3",disabled:u},u?"Logging in...":"Login")))};var S=function(){const[e,t]=Object(r.useState)(""),[a,n]=Object(r.useState)(""),[s,l]=Object(r.useState)(""),[i,m]=Object(r.useState)(""),d=Object(o.p)();return c.a.createElement("div",{className:"auth-container"},c.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await p({username:e,email:a,password:s}),alert("Registration successful! Please log in."),d("/login")}catch(r){m("Registration failed. Please try again.")}}},c.a.createElement("h2",null,"Register"),i&&c.a.createElement("p",{className:"error-text"},i),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Username:"),c.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",value:a,onChange:e=>n(e.target.value),required:!0,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",value:s,onChange:e=>l(e.target.value),required:!0,className:"form-control"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary w-100"},"Register"),c.a.createElement("p",{className:"text-center mt-3"},"Already have an account?"," ",c.a.createElement("span",{onClick:()=>d("/login"),className:"link"},"Login"))))};var C=function(){const[e,t]=Object(r.useState)(()=>!!localStorage.getItem("token")),[a,n]=Object(r.useState)(null);Object(r.useEffect)(()=>{if(e){const e=(()=>{const e=localStorage.getItem("token");if(e)try{return Object(i.a)(e).user_id}catch(t){console.error("Error decoding token:",t)}return null})();n(e)}else n(null)},[e]);const[s,u]=Object(r.useState)([]),[E,g]=Object(r.useState)([]),[p,v]=Object(r.useState)({text:"",type:""});Object(r.useEffect)(()=>{e&&a&&(async()=>{try{const t=await h(a),r=await f(a);u(t),g(r),v({text:"Cart and Wishlist loaded successfully!",type:"success"})}catch(e){console.error("Error loading cart or wishlist:",e.message),v({text:"Error loading cart or wishlist.",type:"error"})}})()},[e,a]);const y=async(e,t)=>{try{const c=await b(a,e.product_id,t,e.price);u(c.product_details),v({text:`${e.product_name} added to cart!`,type:"success"})}catch(r){console.error("Error adding to cart:",r.message),v({text:"Error adding to cart.",type:"error"})}},C=async e=>{try{const r=await w(a,e.product_id,1,e.price);g(r.product_details),v({text:`${e.product_name} added to wishlist!`,type:"success"})}catch(t){console.error("Error adding to wishlist:",t.message),v({text:"Error adding to wishlist.",type:"error"})}};return Object(r.useEffect)(()=>{if(p.text){const e=setTimeout(()=>v({text:"",type:""}),3e3);return()=>clearTimeout(e)}},[p]),c.a.createElement(l.a,null,c.a.createElement(m,{userLoggedIn:e,setUserLoggedIn:t}),p.text&&c.a.createElement("div",{className:`alert ${"success"===p.type?"alert-success":"alert-danger"}`},p.text),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/login",element:c.a.createElement(O,{setUserLoggedIn:t})}),c.a.createElement(o.a,{path:"/register",element:c.a.createElement(S,null)}),e&&c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{path:"/",element:c.a.createElement(d,null)}),c.a.createElement(o.a,{path:"/products",element:c.a.createElement(_,{userId:a,addToCart:y,addToWishlist:C,cartItems:s,wishlistItems:E})}),c.a.createElement(o.a,{path:"/product/:id",element:c.a.createElement(x,{userId:a,addToCart:y,addToWishlist:C,cartItems:s,wishlistItems:E})}),c.a.createElement(o.a,{path:"/cart",element:c.a.createElement(j,{userId:a,cartItems:s,setCartItems:u,removeFromCart:async e=>{try{const r=await N(a,e);u(r.product_details),v({text:"Product removed from cart.",type:"success"})}catch(t){console.error("Error removing from cart:",t.message),v({text:"Error removing from cart.",type:"error"})}}})}),c.a.createElement(o.a,{path:"/wishlist",element:c.a.createElement(I,{userId:a,wishlistItems:E,setWishlistItems:g,addToCart:y,removeFromWishlist:async e=>{try{const r=await k(a,e);g(r.product_details),v({text:"Product removed from wishlist.",type:"success"})}catch(t){console.error("Error removing from wishlist:",t.message),v({text:"Error removing from wishlist.",type:"error"})}}})}))))};a(31);s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)))}},[[18,1,2]]]);
//# sourceMappingURL=main.6916b13e.chunk.js.map