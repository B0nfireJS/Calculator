(self.webpackChunkwebpack_pug_starter=self.webpackChunkwebpack_pug_starter||[]).push([[179],{195:function(){let a=document.querySelector(".mortgage__input-cost"),n=document.querySelector(".mortgage__cost-range"),t=document.querySelector(".mortgage__input-payment"),s=document.querySelector(".mortgage__payment-range"),e=document.querySelector(".mortgage__input-term"),l=document.querySelector(".mortgage__input-pay"),o=[n,s,e,a,t];!function(){e=parseInt(e.value.match(/\d+/));let p=1/e,i=Math.pow(1+p,12*e),c=Math.round((a.value-t.value)*p*i/(i-1))+" ₽/мес";l.innerHTML=c,o.forEach((o=>{o.oninput=function(){a.value=n.value,t.value=s.value,e=document.querySelector(".mortgage__input-term"),e=parseInt(e.value.match(/\d+/)),p=1/e,i=Math.pow(1+p,12*e),c=Math.round((a.value-t.value)*p*i/(i-1)),(c<0||!0===isNaN(c))&&(c=0),c+=" ₽/мес",l.innerHTML=c}}))}()},366:function(){class a{constructor(a,n){this._config=Object.assign({},n),this._elTabs="string"==typeof a?document.querySelector(a):a,this._elButtons=this._elTabs.querySelectorAll(".plans__tabs-btn"),this._elPanes=this._elTabs.querySelectorAll(".plans__tabs-pane"),this._eventShow=new Event("tab.itc.change"),this._init(),this._events()}_init(){this._elTabs.setAttribute("role","tablist"),this._elButtons.forEach(((a,n)=>{a.dataset.index=n,a.setAttribute("role","tab"),this._elPanes[n].setAttribute("role","tabpanel")}))}show(a){const n=this._elPanes[a.dataset.index],t=this._elTabs.querySelector(".plans__tabs-btn-active"),s=this._elTabs.querySelector(".plans__tabs-pane-show");a!==t&&(t&&t.classList.remove("plans__tabs-btn-active"),s&&s.classList.remove("plans__tabs-pane-show"),a.classList.add("plans__tabs-btn-active"),n.classList.add("plans__tabs-pane-show"),this._elTabs.dispatchEvent(this._eventShow),a.focus())}showByIndex(a){const n=this._elButtons[a];n&&this.show(n)}_events(){this._elTabs.addEventListener("click",(a=>{const n=a.target.closest(".plans__tabs-btn");n&&(a.preventDefault(),this.show(n))}))}}const n=document.querySelectorAll(".plans__tabs");for(let t=0,s=n.length;t<s;t++)new a(n[t])},186:function(){console.log("test modules")},467:function(a,n,t){"use strict";var s=t(652),e=t(678);new s.Z(".swiper",{modules:[e.W_,e.tl],loop:!0,slidesPerView:"1",spaceBetween:20,centeredSlides:!0,speed:600,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t(186),t(366),t(729),document.querySelectorAll("#pop-widget").forEach((a=>{let n=a.getAttribute("data-id");console.log(n),Planoplan.init({width:"400px",height:"400px",primaryColor:"#81AEE3",secondaryColor:"#F4F7F7",textColor:"#4A4A4A",backgroundColor:"#FFFFFF",fontFamily:"Open Sans, sans-serif",activeTab:"top",activeFloor:"0",activeDesign:"873032",uid:n,el:"pop-widget",lang:"ru"})})),t(195),console.log("Webpack + Pug starter")},380:function(){},729:function(a,n,t){var s=t(55);a.exports=function(a){var n,t="",e=a||{};return function(a){a=[{square:"23.33 м²",house:"2",floor:"14",cost:"от 7 894 940 ₽",id:"8709aa1e2a3ead78bd9207796b7bda0b"},{square:"26.3 м²",house:"3",floor:"11",cost:"от 8 252 940 ₽",id:"c340fb7b8ea2e1e3f75c84e5b93d3e57"},{square:"25.3 м²",house:"1",floor:"5",cost:"от 8 445 180 ₽",id:"bcc31f811686757d669862c8820b2999"},{square:"23.65 м²",house:"4",floor:"10",cost:"от 8 905 600 ₽",id:"8709aa1e2a3ead78bd9207796b7bda0b"},{square:"24.6 м²",house:"1",floor:"7",cost:"от 8 445 180 ₽",id:"bcc31f811686757d669862c8820b2999"}],t+='\n<section class="plans">\n  <div class="plans__wrapper container">\n    <h2 class="plans__title">Планировки</h2>\n    <div class="plans__tabs"> \n      <div class="plans__tabs-nav">\n        <button class="plans__tabs-btn plans__tabs-btn-active">Студии</button>\n        <button class="plans__tabs-btn">1-комнатные</button>\n        <button class="plans__tabs-btn">2-комнатные</button>\n        <button class="plans__tabs-btn">3-комнатные</button>\n      </div>\n      <div class="plans__tabs-content">\n        <div class="plans__tabs-pane plans__tabs-pane-show">\n          <div class="swiper">\n            <div class="swiper-wrapper">',function(){var e=a;if("number"==typeof e.length)for(var l=0,o=e.length;l<o;l++){var p=e[l];t=t+'\n              <div class="swiper-slide d-flex">\n                <div id="pop-widget"'+s.attr("data-id",p.id,!0,!0)+'></div>\n                <div class="plans__plan-info">\n                  <table class="plans__plan-table">\n                    <tr class="plans__plan-table-row">\n                      <th class="plans__plan-table-header">Общая площадь</th>\n                      <th class="plans__plan-table-header">Дом</th>\n                      <th class="plans__plan-table-header">Этаж</th>\n                      <th class="plans__plan-table-header">Цена</th>\n                    </tr>\n                    <tr class="plans__plan-table-row">\n                      <td class="plans__plan-table-cell">'+s.escape(null==(n=p.square)?"":n)+'</td>\n                      <td class="plans__plan-table-cell">'+s.escape(null==(n=p.house)?"":n)+'</td>\n                      <td class="plans__plan-table-cell">'+s.escape(null==(n=p.floor)?"":n)+'</td>\n                      <td class="plans__plan-table-cell plans__plan-table-cell-cost">'+s.escape(null==(n=p.cost)?"":n)+'</td>\n                    </tr>\n                  </table>\n                  <form class="plans__form">\n                    <div class="plans__form-row d-flex">\n                      <input class="plans__form-input plans__inpit" type="text" placeholder="+7 (___) ___-__-__">\n                      <button class="plans__form-button">Отправить заявку</button>\n                    </div><span class="plans__form-description">Отправляя форму, вы соглашаетесь на обработку персональных данных</span>\n                  </form>\n                </div>\n              </div>'}else for(var l in o=0,e)o++,p=e[l],t=t+'\n              <div class="swiper-slide d-flex">\n                <div id="pop-widget"'+s.attr("data-id",p.id,!0,!0)+'></div>\n                <div class="plans__plan-info">\n                  <table class="plans__plan-table">\n                    <tr class="plans__plan-table-row">\n                      <th class="plans__plan-table-header">Общая площадь</th>\n                      <th class="plans__plan-table-header">Дом</th>\n                      <th class="plans__plan-table-header">Этаж</th>\n                      <th class="plans__plan-table-header">Цена</th>\n                    </tr>\n                    <tr class="plans__plan-table-row">\n                      <td class="plans__plan-table-cell">'+s.escape(null==(n=p.square)?"":n)+'</td>\n                      <td class="plans__plan-table-cell">'+s.escape(null==(n=p.house)?"":n)+'</td>\n                      <td class="plans__plan-table-cell">'+s.escape(null==(n=p.floor)?"":n)+'</td>\n                      <td class="plans__plan-table-cell plans__plan-table-cell-cost">'+s.escape(null==(n=p.cost)?"":n)+'</td>\n                    </tr>\n                  </table>\n                  <form class="plans__form">\n                    <div class="plans__form-row d-flex">\n                      <input class="plans__form-input plans__inpit" type="text" placeholder="+7 (___) ___-__-__">\n                      <button class="plans__form-button">Отправить заявку</button>\n                    </div><span class="plans__form-description">Отправляя форму, вы соглашаетесь на обработку персональных данных</span>\n                  </form>\n                </div>\n              </div>'}.call(this),t+='\n            </div>\n            <div class="swiper-pagination"></div>\n            <div class="swiper-button-prev"></div>\n            <div class="swiper-button-next"></div>\n          </div>\n        </div>\n        <div class="plans__tabs-pane">Вкладка 2</div>\n        <div class="plans__tabs-pane">Вкладка 3</div>\n        <div class="plans__tabs-pane">Вкладка 4</div>\n        <div class="plans__tabs-pane">Вкладка 5</div>\n      </div>\n    </div>\n  </div>\n</section>'}.call(this,"planInfo"in e?e.planInfo:"undefined"!=typeof planInfo?planInfo:void 0),t}},835:function(){}},function(a){var n=function(n){return a(a.s=n)};a.O(0,[216],(function(){return n(467),n(380)})),a.O()}]);