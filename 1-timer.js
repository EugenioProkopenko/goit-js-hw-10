import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as p,i as D}from"./assets/vendor-BbbuE1sJ.js";const S=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),q=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]");let r=null,d=null;const l=p(S,{enableTime:!0,time_24hr:!0,minuteIncrement:1,defaultDate:new Date,onOpen(){this.setDate(new Date)},onClose(t){const e=t[0];e<=new Date?(D.error({position:"topRight",title:"Error",message:"Please choose a date in the future"}),r=null,o.disabled=!0):(r=e,o.disabled=!1)}});o.addEventListener("click",M);function M(){r&&(o.disabled=!0,l.input.disabled=!0,s(),d=setInterval(s,1e3))}function s(){const e=r-new Date;if(e<=0){clearInterval(d),c(i(0)),l.input.disabled=!1;return}c(i(e))}function c({days:t,hours:e,minutes:a,seconds:u}){b.textContent=n(t),q.textContent=n(e),C.textContent=n(a),T.textContent=n(u)}function n(t){return String(t).padStart(2,"0")}function i(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}
//# sourceMappingURL=1-timer.js.map
