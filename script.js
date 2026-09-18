const reviews=[
{name:"匿名用戶A521",stars:"★☆☆☆☆",likes:3821,text:"我把曖昧對象傳的訊息給他看，對方寫：「最近工作有點忙。」\n\n他翻譯：「目前沒有想約妳，對你沒興趣了，連打炮都不想。」\n\n我很生氣！\n\n三個月後發現他是對的。\n\n媽的更生氣了 😡"},
{name:"草莓麻糬",stars:"★★★★★",likes:3142,text:"姐妹們衝啊！！照片是梗圖！！本人超帥！！真心不騙！！！！\n\n我原本以為被詐騙！結果是被顏值霸凌！！！尖叫！！！！"},
{name:"匿名用戶D883",stars:"★★☆☆☆",likes:2765,text:"他真的很沒禮貌…\n\n我問他我是不是胖了，結果？？？\n\n他說：「妳是想聽實話還是續時優惠？」\n\n我直接被氣笑。\n\n但看在顏值…給他兩顆星，不能再多了。"},
{name:"Momo醬",stars:"★★★★★",likes:2461,text:"很神奇，明明講話很毒，但完全不會覺得他有惡意，還有種被朋友吐槽的感覺，聊天超舒服。\n\n幹…我是不是m啊…."},
{name:"匿名用戶K1172",stars:"★★★★★",likes:2239,text:"第一次見面\n「妳平常是不是很愛胡思亂想？」\n\n第二次見面\n「昨天是不是又熬夜了？長得跟熊貓一樣」\n\n第三次見面\n「記得吃飯，我不想看你餓死欸」\n\n第四次見面\n「到家傳訊息。」\n\n第五次見面\n完了，我完了，暈了，誰來救救我跟我的錢包"},
{name:"奶茶加珍珠=好喝",stars:"★☆☆☆☆",likes:1987,text:"不推薦，真的不推薦。\n\n我本來只是想體驗一次，現在已經預約第九次了，別跟我搶名額啊啊啊啊啊啊"},
{name:"匿名用戶嘿嘿嘿",stars:"★★★★★",likes:1721,text:"很多人都說他傲嬌，我本來不信，後來下雨天見面，他一邊把傘往我這邊移一邊說：「感冒不要找我哭。」\n\n我信了，差一點愛了 😍"}
];
const list=document.querySelector("#reviewList");
function render(items){list.innerHTML=items.map(r=>`<div class="review"><div class="reviewHead"><span class="reviewUser">${r.name}</span><span class="stars">${r.stars}</span></div><p>${r.text}</p><div class="likes">♡ ${r.likes.toLocaleString()} 人覺得這則評價有幫助</div></div>`).join("")}
render(reviews);
document.querySelector("#menuBtn").onclick=()=>document.querySelector("#nav").classList.toggle("open");
const modal=document.querySelector("#bookingModal");
document.querySelectorAll("[data-open-modal]").forEach(b=>b.onclick=()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false")});
document.querySelector("#closeModal").onclick=()=>modal.classList.remove("open");
modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};
document.querySelector("#favBtn").onclick=e=>{e.currentTarget.textContent=e.currentTarget.textContent.includes("♡")?"♥ 已收藏":"♡ 加入收藏"};
document.querySelector("#msgBtn").onclick=()=>alert("訊息功能示範：之後可以接聊天室頁面。");
document.querySelector("#submitBooking").onclick=()=>document.querySelector("#successMsg").style.display="block";
let hot=true; document.querySelector("#sortBtn").onclick=e=>{hot=!hot;render(hot?[...reviews].sort((a,b)=>b.likes-a.likes):[...reviews].reverse());e.currentTarget.textContent=hot?"依熱門排序 ↓":"依最新排序 ↓"};
