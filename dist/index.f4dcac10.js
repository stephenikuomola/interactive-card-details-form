!function(){class e{#e=document.getElementById("form");#t=document.getElementById("card-name");#n=document.getElementById("card-number");#r=document.getElementById("card-month");#a=document.getElementById("card-year");#i=document.getElementById("card-cvc");#o=document.querySelector(".loading-spinner");#s=document.querySelector(".interactive-card__info-feedback");constructor(){this.#e?.addEventListener("submit",this.#c.bind(this)),this.#t?.addEventListener("change",this.#l),this.#n?.addEventListener("input",this.#d),this.#r?.addEventListener("change",this.#u),this.#a?.addEventListener("change",this.#m),this.#i?.addEventListener("change",this.#h)}#d(e){if(e.target instanceof HTMLInputElement){let t=document.querySelector(".card-owner-number"),n=e.target,r=n.selectionEnd,a=n.value.length;n.value=n.value.replace(/[^\dA-Z]/g,"").replace(/(.{4})/g,"$1 ").trim(),r!==a&&(r!==a-1||isNaN(parseInt(n.value[r],10)))&&(n.selectionEnd=r),t.textContent=n.value,console.log(r,a,n.value)}}#h(e){e.target instanceof HTMLInputElement&&(document.querySelector(".card-owner-cvv").textContent=e.target?.value)}#m(e){e.target instanceof HTMLInputElement&&(document.querySelector(".card-owner-expiration-date__year").textContent=e.target?.value)}#u(e){e.target instanceof HTMLInputElement&&(document.querySelector(".card-owner-expiration-date__month").textContent=e.target?.value)}#l(e){e.target instanceof HTMLInputElement&&(document.querySelector(".card-owner-name").textContent=e.target?.value.toUpperCase())}async #c(e){e.preventDefault();try{this.#g(),this.#e.style.display="none",this.#v(),await new Promise(e=>setTimeout(e,1e4)),this.#p(),this.#s.removeAttribute("hidden")}catch(e){console.error(e)}}#v(){this.#o.classList.add("active")}#p(){this.#o.classList.remove("active")}#y(e,t,n){return e.setAttribute("aria-invalid","true"),{message:t,className:n}}#f(e,t,n){return e.setAttribute("aria-invalid","false"),{message:t,className:n}}#g(){let e=[];document.querySelectorAll("input").forEach(function(t){if(t instanceof HTMLInputElement){if(""===t.value.trim()||t.validity.valueMissing){let n=this.#y(t,"Cannot be blank","error active");e.push(n)}else if(t.validity.patternMismatch&&"card-name"===t.getAttribute("id")){let n=this.#y(t,"Wrong Format, letters only","error active");e.push(n)}else if("card-name"!==t.getAttribute("id")&&t.validity.patternMismatch){let n=this.#y(t,"Wrong Format, numbers only","error active");e.push(n)}else{let n=this.#f(t,"","error");e.push(n)}}},this),document.querySelectorAll(".error").forEach(function(t,n){t.textContent=e[n].message,t.className=e[n].className}),e.forEach(function(t){if(!(""===t.message&&"error"===t.className))throw e})}}new e}();
//# sourceMappingURL=index.f4dcac10.js.map
