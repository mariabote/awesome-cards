document.querySelector(".js__fieldset_design");document.querySelector(".js__legend_design");document.querySelector(".js__container_design");document.querySelector(".js__arrow_icon_design");document.querySelector(".js__fieldset_fill");document.querySelector(".js__legend_fill");document.querySelector(".js__container_form");document.querySelector(".js__arrow_icon_fill");document.querySelector(".js__container_share");document.querySelector(".js__fieldset_share");document.querySelector(".js__legend_share");document.querySelector(".js__arrow_icon_share");document.querySelector(".js_name");document.querySelector(".js_work");document.querySelector(".js_image");document.querySelector(".js_email");document.querySelector(".js_tel");document.querySelector(".js_linkedin");document.querySelector(".js_github");document.querySelector(".js_createButton");document.querySelector(".js_cardCreated");document.querySelector(".js__img_card_title");document.querySelector(".js__img_card_subtitle");document.querySelector(".js__img_card_image");document.querySelector(".js__create_profile_card_button");document.querySelector(".js__contact1");document.querySelector(".js__contact2");document.querySelector(".js__contact3");document.querySelector(".js__contact4");document.querySelector(".js__form");document.querySelector(".js__create_profile_card");document.querySelector(".js__fieldset_design");const f=document.querySelector(".js__legend_design"),d=document.querySelector(".js__container_design"),u=document.querySelector(".js__arrow_icon_design");document.querySelector(".js__fieldset_fill");const p=document.querySelector(".js__legend_fill"),a=document.querySelector(".js__container_fill"),_=document.querySelector(".js__arrow_icon_fill"),m=document.querySelector(".js__container_share");document.querySelector(".js__fieldset_share");const g=document.querySelector(".js__legend_share"),S=document.querySelector(".js__arrow_icon_share");function y(){d.classList.add("collapsed"),u.classList.add("rotate-icon")}function v(){d.classList.remove("collapsed"),u.classList.remove("rotate-icon")}function c(){a.classList.add("collapsed"),_.classList.add("rotate-icon")}function h(){a.classList.remove("collapsed"),_.classList.remove("rotate-icon")}function r(){m.classList.add("collapsed"),S.classList.add("rotate-icon")}function L(){m.classList.remove("collapsed"),S.classList.remove("rotate-icon")}function k(e){c(),r(),v()}function w(e){y(),r(),h()}function b(e){y(),c(),L()}document.addEventListener("DOMContentLoaded",e=>{c(),r()});f.addEventListener("click",k);p.addEventListener("click",w);g.addEventListener("click",b);const n=document.querySelectorAll('input[name="palette"]'),E=document.querySelector(".create-profile");for(let e=0;e<n.length;e++)n[e].addEventListener("click",()=>{E.className=`create-profile ${n[e].id}`});const l=document.querySelector(".js_name"),s=document.querySelector(".js_work");document.querySelector(".js__profile-upload-btn");const D=document.querySelector(".js_email"),C=document.querySelector(".js_tel"),F=document.querySelector(".js_linkedin"),T=document.querySelector(".js_github"),I=document.querySelector(".js__img_card_title"),P=document.querySelector(".js__img_card_subtitle");document.querySelector(".js__profile-preview");const $=document.querySelector(".js__link_email"),B=document.querySelector(".js__link_phone"),H=document.querySelector(".js__link_linkedin"),M=document.querySelector(".js__link_github");l.addEventListener("input",e=>{e.preventDefault();const t=l.value;I.innerHTML=t});s.addEventListener("input",e=>{e.preventDefault();const t=s.value;P.innerHTML=t});$.addEventListener("click",e=>{e.preventDefault();const t="mailto:"+D.value;window.location.href=t});H.addEventListener("click",e=>{e.preventDefault();const t="https://www."+F.value;window.open(t,"_blank")});M.addEventListener("click",e=>{e.preventDefault();const t="https://github.com"+T.value.replace("@","/");window.open(t,"_blank")});B.addEventListener("click",e=>{e.preventDefault();const t=C.value;window.location.href="tel:"+t});const o=new FileReader,R=document.querySelector(".js__profile-upload-btn"),A=document.querySelector(".js__profile-image"),U=document.querySelector(".js__profile-preview");function G(e){const t=e.currentTarget.files[0];o.addEventListener("load",N),o.readAsDataURL(t)}function N(){A.style.backgroundImage=`url(${o.result})`,U.style.backgroundImage=`url(${o.result})`,data.photo=o.result}R.addEventListener("change",G);const i=document.querySelector(".js_createButton"),x=document.querySelector(".js_cardCreated"),J=document.querySelector(".js__twitterButton");function O(){x.classList.toggle("hidden")}i.addEventListener("click",e=>{e.preventDefault(),i.classList.toggle("clicked"),O()});J.addEventListener("click",e=>{let t="https://awesome-profile-card.com?id=A456DF0001";const q="¡He creado mi nueva tarjeta profesional con Awesome Profile Cards!",j=`https://twitter.com/intent/tweet?url=${encodeURIComponent(t)}&text=${encodeURIComponent(q)}`;window.open(j,"_blank","width=600,height=600")});const z=document.querySelector(".js__img_card_title"),K=document.querySelector(".js__img_card_subtitle"),Q=document.querySelector("js__profile-preview"),V=document.querySelector(".js__create_profile_card_button"),W=document.querySelector(".js__contact1"),X=document.querySelector(".js__contact2"),Y=document.querySelector(".js__contact3"),Z=document.querySelector(".js__contact4"),ee=document.querySelector(".js__form");document.querySelector(".js__create_profile_card_content").innerHTML;const te=()=>{ee.reset(),z.innerHTML="Nombre Apellido",K.innerHTML="Front-end developer",Q.classList.add("img-card-image"),W.href="",X.href="",Y.href="",Z.href=""},oe=e=>{e.preventDefault(),te()};V.addEventListener("click",oe);console.log(">> Ready :)");
//# sourceMappingURL=main.js.map
