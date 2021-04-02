(this["webpackJsonpgoit-react-hw-09-images"]=this["webpackJsonpgoit-react-hw-09-images"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1vLLO",Modal:"Modal_Modal__25wDn"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1BOZB"}},17:function(e,t,a){e.exports={Container:"Loader_Container__30_Wt"}},18:function(e,t,a){e.exports={Button:"Button_Button__39HzO"}},28:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2bpqG",SearchForm:"Searchbar_SearchForm__1yowy",SearchFormButton:"Searchbar_SearchFormButton__WmYL4",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1YATX",SearchFormInput:"Searchbar_SearchFormInput__1iulI"}},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(3),s=a.n(c),l=(a(28),a(11)),i=a(13),u=a(14),m=a(21),h=a(19),g=a(7),d=(a(29),a(20)),b=a(4),j=a.n(b),f=function(e){var t=e.onSubmit,a=Object(r.useState)(""),o=Object(d.a)(a,2),c=o[0],s=o[1];return Object(n.jsx)("header",{className:j.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return g.b.error("Please, add name pokemon!");t(c),s("")},className:j.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(n.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})},p=a(15),O=a.n(p),x=a(9),S=a.n(x),_=function(e){var t=e.webformatURL,a=e.tags,r=e.onClick;return Object(n.jsx)("li",{className:S.a.ImageGalleryItem,onClick:r,children:Object(n.jsx)("img",{src:t,alt:a,className:S.a.ImageGalleryItemImage})})},y=function(e){var t=e.images,a=e.onClose;return Object(n.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,o=e.tags,c=e.largeImageURL;return Object(n.jsx)(_,{webformatURL:r,tags:o,onClick:function(){return function(e){a(e)}(c)}},t)}))})},v=a(16),I=a.n(v),w=(a(51),a(17)),C=a.n(w),L=function(){return Object(n.jsx)("div",{className:C.a.Container,children:Object(n.jsx)(I.a,{type:"BallTriangle",color:"#00BFFF",height:60,width:60})})},k=a(10),F=a.n(k),N=document.querySelector("#modal-root"),B=function(e){var t=e.children,a=e.onClose,o=function(e){"Escape"===e.code&&a()};Object(r.useEffect)((function(){return window.addEventListener("keydown",o),window.removeEventListener("keydown",o)}),[o]);return Object(c.createPortal)(Object(n.jsx)("div",{className:F.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(n.jsx)("div",{className:F.a.Modal,children:t})}),N)},M=a(12),G=a(22),P=a(18),U=a.n(P),E=function(e){var t=e.onClick,a=Object(G.a)(e,["onClick"]);return Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)("button",Object(M.a)(Object(M.a)({className:U.a.Button,type:"button",onClick:t},a),{},{children:"Load more"}))})};var R={fetchImgPixabay:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";console.log("imgName",e),console.log("page",t);var a="https://pixabay.com/api/",n="19252909-b3fce789e9067414046d74c47";return fetch("".concat(a,"?q=").concat(e,"&page=").concat(t,"&key=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){if(e.ok)return e.json()}))}},T="idle",q="pending",A="resolved",z="rejected",D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgName:"",images:[],error:null,status:T,page:1,largeImageURL:"",showModal:!1},e.onScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleFormSubmit=function(t){e.setState({imgName:t})},e.handleClickLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({largeImageURL:t})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=t.imgName,r=this.state.imgName,o=t.page,c=this.state.page;n!==r&&(this.setState({images:[],page:1,status:q}),R.fetchImgPixabay(r).then((function(e){if(0===e.hits.length)return Promise.reject(new Error("Could not find picture for request ".concat(r)));window.scrollTo({top:0}),a.setState({images:e.hits,status:A})})).catch((function(e){return a.setState({error:e,status:z})}))),o!==c&&c>1&&(console.log("nextPage",o),console.log("nextPage",c),this.setState({status:q}),R.fetchImgPixabay(r,c).then((function(e){a.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e.hits)),status:A}})),a.onScroll()})).catch((function(e){return a.setState({error:e,status:z})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,r=e.showModal,o=e.largeImageURL,c=e.error;return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{onSubmit:this.handleFormSubmit}),a===A&&0!==t.length&&Object(n.jsx)(y,{images:t,onClose:this.toggleModal}),a===q&&Object(n.jsx)(L,{}),a===A&&0!==t.length&&Object(n.jsx)(E,{onClick:this.handleClickLoadMore,"aria-label":"\u041d\u0430\u0439\u0442\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),r&&Object(n.jsx)(B,{onClose:this.toggleModal,children:Object(n.jsx)("img",{src:o,alt:t.tags})}),a===z&&Object(n.jsx)("div",{style:{textAlign:"center",color:"red"},children:Object(n.jsx)("p",{children:c.message})}),Object(n.jsx)(g.a,{autoClose:3e3})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1yvfz",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__YZo2m"}}},[[52,1,2]]]);
//# sourceMappingURL=main.180be682.chunk.js.map