var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,o=(a,t,c)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[t]=c,s=(e,s)=>{for(var m in s||(s={}))a.call(s,m)&&o(e,m,s[m]);if(t)for(var m of t(s))c.call(s,m)&&o(e,m,s[m]);return e};import{r as m,a as n}from"./vendor.de62f314.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const c=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,s)=>{const m=new URL(e,c);if(self[a].moduleMap[m])return t(self[a].moduleMap[m]);const n=new Blob([`import * as m from '${m}';`,`${a}.moduleMap['${m}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){s(new Error(`Failed to import: ${e}`)),o(r)},onload(){t(self[a].moduleMap[m]),o(r)}});document.head.appendChild(r)})),self[a].moduleMap={}}}("/assets/");function r(e){const{data:a,onProductDelete:t,onChangeQty:c,price:o}=e,[s,n]=m.useState([]),[r,l]=m.useState(""),[i,d]=m.useState(a.qty);0===i&&t(a.code),m.useEffect((()=>{d(a.qty)}),[a]);let p=a.colors;const g=p.map(((e,a)=>{let t=e.code;return m.createElement("p",{key:a,className:t==r?"active":"",style:{backgroundColor:`${t}`},onClick:()=>u(a)})}));m.useEffect((()=>{let e=p.filter((e=>e.code==a.colorSelection))[0].image,t=a.colorSelection;n([e]),l(t)}),[]);const u=e=>{let a=p[e].image,t=p[e].code;n([a]),l(t)};return m.createElement("div",{className:"item"},m.createElement("img",{src:s[0],alt:"Ảnh sản phẩm"}),m.createElement("div",{className:"info"},m.createElement("div",{className:"color"},g),m.createElement("div",{className:"name"},a.name),m.createElement("div",{className:"id-item"},a.code),m.createElement("div",{className:"price-qty"},m.createElement("div",{className:"price"},o," đ"),m.createElement("div",{className:"qty"},m.createElement("span",null,"số lượng:"),m.createElement("span",{className:"change-qty",onClick:()=>c({id:a.code,sign:"-"})},"-"),m.createElement("span",null,i),m.createElement("span",{className:"change-qty",onClick:()=>c({id:a.code,sign:"+"})},"+"))),m.createElement("div",{className:"delete",onClick:()=>t(a.code)},"Xóa")))}function l(e){const{selectedItem:a,onProductDelete:t,onSearch:c,onChangeQty:o}=e,[s,n]=m.useState(!1),[l,i]=m.useState(""),[d,p]=m.useState(0),[g,u]=m.useState(0);m.useEffect((()=>{if(a){let e=a.reduce(((e,a)=>Number(e)+Number(a.price)*a.qty),0);p(e)}}),[a]),m.useEffect((()=>{if(a){let e=a.reduce(((e,a)=>Number(e)+Number(a.qty)),0);u(e)}}),[a]);const N=e=>{n(e)},E=e=>e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.");let f=a.map((e=>m.createElement(r,{key:e.code,data:e,price:E(e.price),onProductDelete:t,onChangeQty:o})));return m.createElement("div",{className:"header"},m.createElement("div",{className:"nav"},m.createElement("div",{className:"logo"},m.createElement("img",{src:"https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?fit=539%2C244&ssl=1&w=640",alt:"Shopify"})),m.createElement("div",{className:"search-and-cart"},m.createElement("div",{className:"search"},m.createElement("span",{className:"searchicon"},m.createElement("img",{src:"/assets/search.24e3b397.svg",alt:""})),m.createElement("input",{type:"text",value:l,placeholder:"Bạn đang tìm gì?",onChange:async e=>{let a=e.target.value;await i((()=>a)),c(a)}})),m.createElement("span",{className:"cart"},m.createElement("div",{className:"numberitem"},a.length),m.createElement("img",{src:"/assets/shopping-bag.857c0fb7.svg",alt:"",onClick:()=>N(!0)}),m.createElement("div",{className:"modal",style:0==s?{transform:"translate(0, -30%)",background:"rgba(0, 0, 0, 0)",opacity:"0",height:0,width:0}:{transform:"translate(-88%, -48px)",background:"rgba(0, 0, 0, 0.603)",opacity:"1",width:"99vw",height:"100vh"}},m.createElement("div",{className:"detail-cart"},m.createElement("div",{className:"cart"},"Giỏ hàng"),m.createElement("div",{className:"list-item"},f),m.createElement("div",{className:"total"},m.createElement("div",{className:"totall total-qty"},m.createElement("p",null,"Số lượng sản phẩm:"),m.createElement("p",null,g)),m.createElement("div",{className:"totall total-price"},m.createElement("p",null,"Tổng giá trị:"),m.createElement("p",null,E(d)," đ"))),m.createElement("div",{className:"close-modal",onClick:()=>N(!1)},"Close")))))))}function i(e){return m.createElement("div",{className:"promo"},m.createElement("div",{className:"left"},m.createElement("div",{className:"title"},m.createElement("p",null,"Nhà",m.createElement("br",null)," là nơi..."),m.createElement("p",null,"ta được thoải mái nhất")),m.createElement("a",{href:"#product",className:"button"},"Mua ngay")),m.createElement("div",{className:"right"}))}function d(e){const{data:a,onAddToCart:t,price:c}=e,[o,n]=m.useState([]),[r,l]=m.useState("");let i=a.colors;m.useEffect((()=>{let e=i[0].image,a=i[0].code;n([e]),l(a)}),[]);const d=i.map(((e,a)=>{let t=e.code;return m.createElement("p",{key:a,className:t==r?"active":"",style:{backgroundColor:`${t}`},onClick:()=>(e=>{let a=i[e].image,t=i[e].code;n([a]),l(t)})(a)})}));return m.createElement("div",{className:"item"},m.createElement("img",{src:"https://picsum.photos/200/300",alt:"Ảnh sản phẩm",lazyload:"true"}),m.createElement("div",{className:"color"},d),m.createElement("div",{className:"name"},a.name),m.createElement("div",{className:"id-item"},a.code),m.createElement("div",{className:"price"},c," đ"),m.createElement("div",{className:"add-to-card",onClick:()=>{t(s(s({},a),{colorSelection:r}))}},"+ thêm vào giỏ hàng"))}function p(e){const{category:a,data:t,onAddToCart:c,search:o,onForPay:s}=e;let n=t.map(((e,a)=>{let t=e.name,n=e.code;if(t.includes(o.toUpperCase())||n.includes(o.toUpperCase()))return m.createElement(d,{key:a,data:e,price:(r=e.price,r.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")),onAddToCart:c,onForPay:s});var r}));return m.createElement("div",{className:"product",id:"product"},m.createElement("div",{className:"category"},a),m.createElement("div",{className:"items"},n))}function g(e){return m.createElement("div",{className:"footer"},m.createElement("p",null," Copyright © NMHung. All rights reserved. 2021"))}var u=[{name:"QUẦN SOÓC KHAKI NAM SLIMFIT COTTON USA",code:"8BS21S010",price:499e3,category:"men",colors:[{code:"#C2C5BE",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/b/8bs21s010-sa124-31-1.jpg"},{code:"#1E2D54",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/b/8bs21s010-sb128-31-1.jpg"},{code:"#667065",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/b/8bs21s010-sg204-31-1.jpg"}]},{name:"ÁO SƠ MI NAM VẢI PHA LINEN",code:"8TH21S005",price:499e3,category:"men",colors:[{code:"#C0C2C8",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th21s005-sa544-l-1.jpg"},{code:"#D3DDEA",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th21s005-sb869-l-1.jpg"}]},{name:"ÁO PHÔNG UNISEX NGƯỜI LỚN - BỘ SƯU TẬP GIA ĐÌNH",code:"5TS21S001",price:249e3,category:"men",colors:[{code:"#F3F3F5",image:"https://canifa.s3.amazonaws.com/media/catalog/product/5/t/5ts21s001-sw001-s-1.jpg"}]},{name:"ÁO KHOÁC CHỐNG NẮNG NAM CÓ MŨ",code:"8OT21S001",price:399e3,category:"men",colors:[{code:"#9F9F9F",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot21s001-sa046-1-a.jpg"},{code:"#4E709E",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot21s001-sb052-l-1.jpg"},{code:"#162935",image:"https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot21s001-sb060-l-1.jpg"}]},{name:"ÁO PHÔNG NỮ IN HÌNH",code:"6TS21S020",price:249e3,category:"women",colors:[{code:"#C3D5D5",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts21s020-sg398-m-1.jpg"},{code:"#202025",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts21s020-sk010-m-1.jpg"},{code:"#EE6672",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts21s020-sm035-m-1.jpg"}]},{name:"VÁY LIỀN NỮ TAY DÀI",code:"6DS21S003",price:499e3,category:"women",colors:[{code:"#C3A2C3",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/d/6ds21s003-cm033-1-thumb.jpg"},{code:"#A9BFC5",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/d/6ds21s003-cp016-s-1.jpg"}]},{name:"QUẦN JEANS NỮ ỐNG RỘNG",code:"6BJ21S005",price:499e3,category:"women",colors:[{code:"#426078",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/b/6bj21s005-sj639-1.jpg"},{code:"#98B2C0",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/b/6bj21s005-sj640-27-1.jpg"}]},{name:"VÁY LIỀN NỮ XẺ TÀ",code:"6DS21S010",price:499e3,category:"women",colors:[{code:"#202025",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/d/6ds21s010-sk010-s-1_7.jpg"},{code:"#F55088",image:"https://canifa.s3.amazonaws.com/media/catalog/product/6/d/6ds21s010-sm129-s-2.jpg"}]},{name:"PACK 2 QUẦN SOÓC BÉ TRAI IN HÌNH",code:"2SA21S005",price:199e3,category:"boy",colors:[{code:"#AAAEB1",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/s/2sa21s005-sa551-110-2.jpg"},{code:"#18191D",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/s/2sa21s005-sa551-110-4.jpg"}]},{name:"ÁO PHÔNG BÉ TRAI COTTON USA IN HÌNH",code:"2TS21S006",price:169e3,category:"boy",colors:[{code:"#202025",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2ts21s006-sk010-110-1.jpg"},{code:"#F8A606",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2ts21s006-sy181-110-1.jpg"}]},{name:"BỘ MẶC NHÀ BÉ TRAI IN TO",code:"2LS21S006",price:199e3,category:"boy",colors:[{code:"#32313F",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/l/2ls21s006-sb055-120-1-ghep.jpg"},{code:"#2C8D83",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/l/2ls21s006-sg340-120-1-ghep.jpg"},{code:"#F3F3F5",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/l/2ls21s006-sw001-120-ghep.jpg"}]},{name:"ÁO PHÔNG BÉ TRAI COTTON USA IN SPIDERMAN",code:"2TS21S023",price:149e3,category:"boy",colors:[{code:"#1853A7",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2ts21s023-sb756-110-1.jpg"},{code:"#202025",image:"https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2ts21s023-sk010-110-1.jpg"}]},{name:"VÁY LIỀN BÉ GÁI 2 DÂY HOẠ TIẾT",code:"1DS21S014",price:299e3,category:"girl",colors:[{code:"#CDDED5",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/d/1ds21s014-fg078-120-1.jpg"},{code:"#C6C6DB",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/d/1ds21s014-fp016-120-1.jpg"}]},{name:"QUẦN JEANS BÉ GÁI REGULAR",code:"1BJ21S002",price:349e3,category:"girl",colors:[{code:"#447DAB",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/b/1bj21s002-sj624-120-1.jpg"}]},{name:"ÁO SÁT NÁCH BÉ GÁI COTTON USA BÈO GẤU",code:"1TA21S005",price:149e3,category:"girl",colors:[{code:"#E9E4E0",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/t/1ta21s005-se251-120-1.jpg"},{code:"#E9A4C3",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/t/1ta21s005-sm361-120-1.jpg"},{code:"#F3F3F5",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/t/1ta21s005-sw001-120-1.jpg"}]},{name:"VÁY LIỀN BÉ GÁI COTTON USA IN PRINCESS",code:"1DS21S006",price:299e3,category:"girl",colors:[{code:"#59C5AF",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/d/1ds21s006-sg260-120-1.jpg"},{code:"#A3B3E4",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/d/1ds21s006-sp210-120-1.jpg"},{code:"#F4D553",image:"https://canifa.s3.amazonaws.com/media/catalog/product/1/d/1ds21s006-sy182-120-1.jpg"}]}];function N(){const[e,a]=m.useState([]),[t,c]=m.useState(""),o=t=>{const c=JSON.parse(JSON.stringify(e));let o=s(s({},t),{qty:void 0===t.qty?1:t.qty+1});const m=e.findIndex((e=>e.code===t.code));-1!=m?(c[m].qty=c[m].qty+1,a(c)):a([...e,o])};let n=[];u.map((e=>{n.push(e.category)}));let r=Array.from(new Set(n)).map(((e,a)=>{let c=u.filter((a=>a.category==e));return m.createElement(p,{key:a,category:e,data:c,onAddToCart:o,search:t})}));return m.createElement("div",{className:"App"},m.createElement(l,{selectedItem:e,onProductDelete:t=>{const c=e.filter((e=>e.code!=t));a(c)},onSearch:async e=>{let a=e;await c((()=>a))},onChangeQty:t=>{const c=JSON.parse(JSON.stringify(e)),o=e.findIndex((e=>e.code===t.id));-1!=o&&"+"==t.sign&&(c[o].qty=c[o].qty+1,a(c)),-1!=o&&"-"==t.sign&&(c[o].qty=c[o].qty-1,a(c))}}),t?"":m.createElement(i,null),r,m.createElement(g,null))}n.render(m.createElement(N,null),document.getElementById("root"));