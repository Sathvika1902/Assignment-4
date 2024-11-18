(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(16),s=a.n(n),l=a(5),o=a(2),m=a(8);var i=function(e){let{userLoggedIn:t,setUserLoggedIn:a}=e;const r=Object(o.p)();return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"navbar-brand",to:"/"},c.a.createElement("span",{role:"img","aria-label":"bookstore"},"\ud83d\udcda")," Book Store"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ms-auto"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/products"},"Products")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/cart"},"Cart")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/wishlist"},"Wishlist")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"btn btn-danger ms-2",onClick:()=>{localStorage.removeItem("token"),a(!1),r("/login")}},"Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/login"},"Login")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/register"},"Register")))))))};a(23);var d=function(){return c.a.createElement("div",{className:"home-container text-center"},c.a.createElement("h1",null,"Welcome to the Book Store!"),c.a.createElement("p",null,"Discover an extensive collection of books across various genres. Log in or register to start shopping, save your favorites, and enjoy exclusive deals!"),c.a.createElement("section",{className:"featured-categories mt-5"},c.a.createElement("h2",null,"Featured Categories"),c.a.createElement("div",{className:"categories d-flex justify-content-center mt-4"},c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_one.jpeg",alt:"Fiction",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Fiction")),c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_two.jpeg",alt:"Science",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Science")),c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_three.jpeg",alt:"Finance",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Finance")),c.a.createElement("div",{className:"category-card mx-3 text-center"},c.a.createElement("img",{src:"/book_images/book_image_four.jpeg",alt:"Romance",className:"category-image rounded shadow-sm"}),c.a.createElement("h4",{className:"mt-2"},"Romance")))),c.a.createElement("section",{className:"cta mt-5"},c.a.createElement("h2",null,"Why Choose Us?"),c.a.createElement("p",null,"Whether you\u2019re looking for bestsellers, academic references, or niche collections, our Book Store has it all. Sign up today and enjoy:"),c.a.createElement("ul",{className:"list-unstyled text-start mx-auto",style:{maxWidth:"600px"}},c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"checkmark"},"\u2714\ufe0f")," Exclusive Member Discounts"),c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"checkmark"},"\u2714\ufe0f")," Personalized Recommendations"),c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"checkmark"},"\u2714\ufe0f")," Fast & Free Delivery on Orders Over $50")),c.a.createElement("button",{className:"btn btn-primary mt-3"},"Start Shopping")),c.a.createElement("section",{className:"testimonials mt-5"},c.a.createElement("h2",null,"What Our Customers Say"),c.a.createElement("div",{className:"testimonial d-flex justify-content-center mt-4"},c.a.createElement("div",{className:"testimonial-card mx-3 text-center p-3 rounded shadow-sm"},c.a.createElement("p",null,'"I love the variety of books available here! I found everything I needed in one place."'),c.a.createElement("h5",{className:"mt-2"},"- Sarah L.")),c.a.createElement("div",{className:"testimonial-card mx-3 text-center p-3 rounded shadow-sm"},c.a.createElement("p",null,'"Amazing deals and great service! Highly recommend this Book Store."'),c.a.createElement("h5",{className:"mt-2"},"- John D.")))))},u=(a(24),a(11),a(35));const E=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"http://18.188.241.73:8090",p=u.a.create({baseURL:E,headers:{"Content-Type":"application/json"}});p.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});const g=async e=>{return(await p.post("/api/users/register",e)).data},h=async(e,t)=>{return(await p.post("/api/users/login",{email:e,password:t})).data},v=async()=>{return(await p.get("/api/products")).data},y=async e=>{return(await p.get(`/api/products/${e}`)).data},b=async e=>{return(await p.get(`/api/cart/${e}`)).data.product_details},N=async(e,t,a,r)=>{return(await p.post("/api/cart",{user_id:e,product_id:t,quantity:1,price:r})).data},f=async(e,t)=>{return(await p.delete(`/api/cart/${e}/${t}`)).data},w=async e=>{return(await p.get(`/api/wishlist/${e}`)).data.product_details},x=async(e,t,a,r)=>{return(await p.post("/api/wishlist",{user_id:e,product_id:t,quantity:1,price:r})).data},_=async(e,t)=>{return(await p.delete(`/api/wishlist/${e}/${t}`)).data};var k=function(e){let{userId:t,addToCart:a,addToWishlist:n,cartItems:s,wishlistItems:l}=e;const[o,m]=Object(r.useState)([]),[i,d]=Object(r.useState)(""),[u,E]=Object(r.useState)("");Object(r.useEffect)(()=>{(async()=>{try{const t=await v();m(t)}catch(e){console.error("Error fetching products:",e.message)}})()},[]);const p=o.filter(e=>e.product_name.toLowerCase().includes(i.toLowerCase())&&(""===u||e.price<=parseFloat(u)));return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"filter-container d-flex justify-content-center mb-4"},c.a.createElement("input",{type:"text",placeholder:"Search by name...",value:i,onChange:e=>d(e.target.value),className:"form-control mx-2",style:{maxWidth:"300px"}}),c.a.createElement("input",{type:"number",placeholder:"Max price...",value:u,onChange:e=>E(e.target.value),className:"form-control mx-2",style:{maxWidth:"200px"}}),c.a.createElement("button",{onClick:()=>{d(""),E("")},className:"btn btn-secondary mx-2"},"Reset")),c.a.createElement("div",{className:"row"},p.map(e=>c.a.createElement("div",{key:e.product_id,className:"col-md-4 mb-4"},c.a.createElement("div",{className:"card h-100 shadow-sm"},c.a.createElement("img",{src:e.image_url,alt:e.product_name,className:"card-img-top img-fluid",style:{height:"250px",objectFit:"cover"}}),c.a.createElement("div",{className:"card-body d-flex flex-column"},c.a.createElement("h5",{className:"card-title text-center"},e.product_name),c.a.createElement("p",{className:"card-text text-center"},e.description),c.a.createElement("p",{className:"text-center text-muted"},"$",e.price),c.a.createElement("div",{className:"mt-auto"},c.a.createElement("button",{className:"btn btn-primary w-100 mb-2",onClick:()=>a(e)},"Add to Cart"),c.a.createElement("button",{className:"btn btn-outline-secondary w-100",onClick:()=>n(e)},"Add to Wishlist"))))))),0===p.length&&c.a.createElement("div",{className:"text-center mt-4"},c.a.createElement("h5",null,"No products found.")))};a(29);var j=function(e){let{userId:t,addToCart:a,addToWishlist:n,cartItems:s,wishlistItems:l}=e;const{id:m}=Object(o.r)(),[i,d]=Object(r.useState)(null),[u,E]=Object(r.useState)(1),[p,g]=Object(r.useState)("");return Object(r.useEffect)(()=>{(async()=>{try{const e=await y(m);d(e)}catch(p){console.error("Error fetching product details:",p.message),g("Product not found.")}})()},[m]),p?c.a.createElement("div",{className:"error-message"},p):i?c.a.createElement("div",{className:"product-details-container"},c.a.createElement("div",{className:"product-details"},c.a.createElement("img",{src:i.image_url,alt:i.product_name,className:"product-details-image"}),c.a.createElement("div",{className:"product-details-info"},c.a.createElement("h1",null,i.product_name),c.a.createElement("p",{className:"product-description"},i.description),c.a.createElement("p",{className:"product-price"},"$",i.price),c.a.createElement("div",{className:"quantity-selector"},c.a.createElement("label",{htmlFor:"quantity"},"Quantity:"),c.a.createElement("select",{id:"quantity",value:u,onChange:e=>E(e.target.value)},[...Array(10).keys()].map(e=>c.a.createElement("option",{key:e+1,value:e+1},e+1)))),c.a.createElement("div",{className:"button-group"},c.a.createElement("button",{className:"btn btn-primary",onClick:()=>{i&&(a({...i,quantity:parseInt(u)}),alert(`${i.product_name} (x${u}) has been added to your cart.`))}},"Add to Cart"),c.a.createElement("button",{className:"btn btn-secondary",onClick:()=>{i&&(n(i),alert(`${i.product_name} has been added to your wishlist.`))}},"Add to Wishlist"))))):c.a.createElement("div",null,"Loading...")};a(30);var C=function(e){let{userId:t}=e;const[a,n]=Object(r.useState)([]),s=Object(r.useCallback)(async()=>{try{const a=await b(t);n(a)}catch(e){console.error("Error fetching cart:",e.message)}},[t]);return Object(r.useEffect)(()=>{s()},[s]),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h2",null,"Your Cart"),0===a.length?c.a.createElement("p",null,"Your cart is empty."):c.a.createElement("div",null,c.a.createElement("div",{className:"cart-list"},a.map(e=>c.a.createElement("div",{key:e.product_id,className:"cart-item card mb-3 shadow-sm"},c.a.createElement("div",{className:"row g-0 align-items-center"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("img",{src:e.image_url,alt:e.product_name,className:"img-fluid rounded-start",style:{maxHeight:"100px",objectFit:"cover"}})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.product_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Price:")," $",e.price," each"))),c.a.createElement("div",{className:"col-md-4 d-flex align-items-center justify-content-end"},c.a.createElement("div",{className:"me-3"},c.a.createElement("label",{htmlFor:`quantity-${e.product_id}`,className:"form-label"},"Quantity:"),c.a.createElement("select",{id:`quantity-${e.product_id}`,value:e.quantity,onChange:a=>(async(e,a)=>{try{await N(t,e,a),n(t=>t.map(t=>t.product_id===e?{...t,quantity:a}:t))}catch(r){console.error("Error updating quantity:",r.message)}})(e.product_id,parseInt(a.target.value)),className:"form-select",style:{maxWidth:"80px"}},[...Array(10).keys()].map(e=>c.a.createElement("option",{key:e+1,value:e+1},e+1)))),c.a.createElement("button",{onClick:()=>(async e=>{try{await f(t,e),n(t=>t.filter(t=>t.product_id!==e))}catch(a){console.error("Error removing item:",a.message)}})(e.product_id),className:"btn btn-danger"},"Remove")))))),c.a.createElement("div",{className:"text-end mt-4"},c.a.createElement("h4",null,"Total Price: $",a.reduce((e,t)=>e+t.price*t.quantity,0).toFixed(2)))))};a(31);var I=function(e){let{userId:t,wishlistItems:a,setWishlistItems:n,addToCart:s}=e;Object(r.useEffect)(()=>{(async()=>{try{const a=await w(t);n(a||[])}catch(e){console.error("Error fetching wishlist:",e.message)}})()},[t,n]);const l=async e=>{try{await _(t,e),n(t=>t.filter(t=>t.product_id!==e))}catch(a){console.error("Error removing from wishlist:",a.message)}};return a&&0!==a.length?c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h2",null,"Your Wishlist"),c.a.createElement("div",{className:"wishlist-list"},a.map(e=>c.a.createElement("div",{key:e.product_id,className:"wishlist-item card mb-3 shadow-sm"},c.a.createElement("div",{className:"row g-0 align-items-center"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("img",{src:e.image_url,alt:e.product_name,className:"img-fluid rounded-start",style:{maxHeight:"100px",objectFit:"cover"}})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.product_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Price:")," $",e.price),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Quantity:")," ",e.quantity||1))),c.a.createElement("div",{className:"col-md-4 d-flex justify-content-end align-items-center"},c.a.createElement("button",{className:"btn btn-secondary me-2",onClick:()=>l(e.product_id)},"Remove"),c.a.createElement("button",{className:"btn btn-primary",onClick:()=>(async e=>{try{await s({...e,quantity:e.quantity||1}),await l(e.product_id)}catch(t){console.error("Error moving item to cart:",t.message)}})(e)},"Move to Cart"))))))):c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h2",null,"Your Wishlist"),c.a.createElement("p",null,"Your wishlist is empty."))};a(15);var S=function(e){let{setUserLoggedIn:t}=e;const[a,n]=Object(r.useState)(""),[s,l]=Object(r.useState)(""),[i,d]=Object(r.useState)(""),[u,E]=Object(r.useState)(!1),p=Object(o.p)();return c.a.createElement("div",{className:"auth-container"},c.a.createElement("h2",null,"Login"),i&&c.a.createElement("div",{className:"alert alert-danger"},i),c.a.createElement("form",{onSubmit:async e=>{e.preventDefault(),E(!0),d("");try{const e=await h(a,s);localStorage.setItem("token",e.token),t(!0);const l=Object(m.a)(e.token).user_id;console.log("Logged in userId:",l),p("/")}catch(n){var r,c;d((null===(r=n.response)||void 0===r?void 0:null===(c=r.data)||void 0===c?void 0:c.message)||"Login failed. Please try again.")}finally{E(!1)}}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",className:"form-control",value:a,onChange:e=>n(e.target.value),required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",className:"form-control",value:s,onChange:e=>l(e.target.value),required:!0})),c.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3",disabled:u},u?"Logging in...":"Login")))};var O=function(){const[e,t]=Object(r.useState)(""),[a,n]=Object(r.useState)(""),[s,l]=Object(r.useState)(""),[m,i]=Object(r.useState)(""),d=Object(o.p)();return c.a.createElement("div",{className:"auth-container"},c.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await g({username:e,email:a,password:s}),alert("Registration successful! Please log in."),d("/login")}catch(r){i("Registration failed. Please try again.")}}},c.a.createElement("h2",null,"Register"),m&&c.a.createElement("p",{className:"error-text"},m),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Username:"),c.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",value:a,onChange:e=>n(e.target.value),required:!0,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",value:s,onChange:e=>l(e.target.value),required:!0,className:"form-control"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary w-100"},"Register"),c.a.createElement("p",{className:"text-center mt-3"},"Already have an account?"," ",c.a.createElement("span",{onClick:()=>d("/login"),className:"link"},"Login"))))};var L=function(){const[e,t]=Object(r.useState)(()=>!!localStorage.getItem("token")),[a,n]=Object(r.useState)(null);Object(r.useEffect)(()=>{if(e){const e=(()=>{const e=localStorage.getItem("token");if(e)try{return Object(m.a)(e).user_id}catch(t){console.error("Error decoding token:",t)}return null})();n(e)}else n(null)},[e]);const[s,u]=Object(r.useState)([]),[E,p]=Object(r.useState)([]),[g,h]=Object(r.useState)({text:"",type:""});Object(r.useEffect)(()=>{e&&a&&(async()=>{try{const t=await b(a),r=await w(a);u(t),p(r),h({text:"Cart and Wishlist loaded successfully!",type:"success"})}catch(e){console.error("Error loading cart or wishlist:",e.message),h({text:"Error loading cart or wishlist.",type:"error"})}})()},[e,a]);const v=async e=>{try{const r=await N(a,e.product_id,e.quantity,e.price);u(r.product_details),h({text:`${e.product_name} added to cart!`,type:"success"})}catch(t){console.error("Error adding to cart:",t.message),h({text:"Error adding to cart.",type:"error"})}},y=async e=>{try{const r=await x(a,e.product_id,1,e.price);p(r.product_details),h({text:`${e.product_name} added to wishlist!`,type:"success"})}catch(t){console.error("Error adding to wishlist:",t.message),h({text:"Error adding to wishlist.",type:"error"})}};return Object(r.useEffect)(()=>{if(g.text){const e=setTimeout(()=>h({text:"",type:""}),3e3);return()=>clearTimeout(e)}},[g]),c.a.createElement(l.a,null,c.a.createElement(i,{userLoggedIn:e,setUserLoggedIn:t}),g.text&&c.a.createElement("div",{className:`alert ${"success"===g.type?"alert-success":"alert-danger"}`},g.text),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/login",element:c.a.createElement(S,{setUserLoggedIn:t})}),c.a.createElement(o.a,{path:"/register",element:c.a.createElement(O,null)}),e&&c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{path:"/",element:c.a.createElement(d,null)}),c.a.createElement(o.a,{path:"/products",element:c.a.createElement(k,{userId:a,addToCart:v,addToWishlist:y,cartItems:s,wishlistItems:E})}),c.a.createElement(o.a,{path:"/product/:id",element:c.a.createElement(j,{userId:a,addToCart:v,addToWishlist:y,cartItems:s,wishlistItems:E})}),c.a.createElement(o.a,{path:"/cart",element:c.a.createElement(C,{userId:a,cartItems:s,setCartItems:u,removeFromCart:async e=>{try{const r=await f(a,e);u(r.product_details),h({text:"Product removed from cart.",type:"success"})}catch(t){console.error("Error removing from cart:",t.message),h({text:"Error removing from cart.",type:"error"})}}})}),c.a.createElement(o.a,{path:"/wishlist",element:c.a.createElement(I,{userId:a,wishlistItems:E,setWishlistItems:p,addToCart:v,removeFromWishlist:async e=>{try{const r=await _(a,e);p(r.product_details),h({text:"Product removed from wishlist.",type:"success"})}catch(t){console.error("Error removing from wishlist:",t.message),h({text:"Error removing from wishlist.",type:"error"})}}})}))))};a(32);s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)))}],[[17,1,2]]]);
//# sourceMappingURL=main.7b2f7e32.chunk.js.map