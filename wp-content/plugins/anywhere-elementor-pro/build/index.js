!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";t.r(n),t.d(n,"isEditMode",(function(){return h})),t.d(n,"SwiperBase",(function(){return g}));var a=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var i=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var o=function(e){return function(n,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(i(n)&&a(t))if("function"==typeof o)if("number"==typeof r){var s={callback:o,priority:r,namespace:t};if(e[n]){var d,l=e[n].handlers;for(d=l.length;d>0&&!(r>=l[d-1].priority);d--);d===l.length?l[d]=s:l.splice(d,0,s),(e.__current||[]).forEach((function(e){e.name===n&&e.currentIndex>=d&&e.currentIndex++}))}else e[n]={handlers:[s],runs:0};"hookAdded"!==n&&m("hookAdded",n,t,o,r)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var r=function(e,n){return function(t,o){if(i(t)&&(n||a(o))){if(!e[t])return 0;var r=0;if(n)r=e[t].handlers.length,e[t]={runs:e[t].runs,handlers:[]};else for(var s=e[t].handlers,d=function(n){s[n].namespace===o&&(s.splice(n,1),r++,(e.__current||[]).forEach((function(e){e.name===t&&e.currentIndex>=n&&e.currentIndex--})))},l=s.length-1;l>=0;l--)d(l);return"hookRemoved"!==t&&m("hookRemoved",t,o),r}}};var s=function(e){return function(n,t){return void 0!==t?n in e&&e[n].handlers.some((function(e){return e.namespace===t})):n in e}};var d=function(e,n){return function(t){e[t]||(e[t]={handlers:[],runs:0}),e[t].runs++;var a=e[t].handlers;for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];if(!a||!a.length)return n?o[0]:void 0;var s={name:t,currentIndex:0};for(e.__current.push(s);s.currentIndex<a.length;){var d=a[s.currentIndex],l=d.callback.apply(null,o);n&&(o[0]=l),s.currentIndex++}return e.__current.pop(),n?o[0]:void 0}};var l=function(e){return function(){return e.__current&&e.__current.length?e.__current[e.__current.length-1].name:null}};var c=function(e){return function(n){return void 0===n?void 0!==e.__current[0]:!!e.__current[0]&&n===e.__current[0].name}};var u=function(e){return function(n){if(i(n))return e[n]&&e[n].runs?e[n].runs:0}};var f=function(){var e=Object.create(null),n=Object.create(null);return e.__current=[],n.__current=[],{addAction:o(e),addFilter:o(n),removeAction:r(e),removeFilter:r(n),hasAction:s(e),hasFilter:s(n),removeAllActions:r(e,!0),removeAllFilters:r(n,!0),doAction:d(e),applyFilters:d(n,!0),currentAction:l(e),currentFilter:l(n),doingAction:c(e),doingFilter:c(n),didAction:u(e),didFilter:u(n),actions:e,filters:n}},p=f(),m=(p.addAction,p.addFilter,p.removeAction,p.removeFilter,p.hasAction,p.hasFilter,p.removeAllActions,p.removeAllFilters,p.doAction);p.applyFilters,p.currentAction,p.currentFilter,p.doingAction,p.doingFilter,p.didAction,p.didFilter,p.actions,p.filters;window.aep={hooks:f()};const h=()=>!1;class g{constructor(e,n){let t=[];const a=".elementor-element-"+n;if(void 0===e)return!1;t={direction:e.direction,speed:e.speed,autoHeight:e.autoHeight,autoplay:e.autoplay,effect:e.effect,loop:e.loop,slidesPerView:e.slidesPerView.default,slidesPerGroup:e.slidesPerGroup.default,spaceBetween:e.spaceBetween.default,wrapperClass:"ae-swiper-wrapper",slideClass:"ae-swiper-slide"};const i=aepro.breakpoints;let o={};if(o[i.lg-1]={spaceBetween:e.spaceBetween.tablet,slidesPerView:e.slidesPerView.tablet,slidesPerGroup:e.slidesPerGroup.tablet},o[i.md-1]={spaceBetween:e.spaceBetween.mobile,slidesPerView:e.slidesPerView.mobile,slidesPerGroup:e.slidesPerGroup.mobile},t.breakpoints=o,t.keyboard="yes"===e.keyboard&&{enabled:!0,onlyInViewport:!0},"yes"===e.navigation&&(t.navigation={nextEl:a+" .ae-swiper-button-next",prevEl:a+" .ae-swiper-button-prev"}),""!==e.ptype&&(t.pagination={el:a+" .ae-swiper-pagination",type:e.ptype,clickable:e.clickable}),"yes"==e.scrollbar&&(t.scrollbar={el:a+" .ae-swiper-scrollbar",hide:!0}),t.init=!1,"undefined"==typeof Swiper){new(0,elementorFrontend.utils.swiper)(".elementor-element-"+n+" .ae-swiper-container",t).then(t=>{const a=t;this.after_swiper_load_func(a);const i=e.pause_on_hover;"yes"==i&&this.pause_on_hover_func(a,i,n)})}else{const a=new Swiper(".elementor-element-"+n+" .ae-swiper-container",t);this.after_swiper_load_func(a);const i=e.pause_on_hover;"yes"==i&&this.pause_on_hover_func(a,i,n)}jQuery(".elementor-element-"+n+" .ae-swiper-container").css("visibility","visible")}after_swiper_load_func(e){e.length>0?e.forEach((function(n){n.on("slideChangeTransitionStart",(function(){n.$wrapperEl.find(".ae-featured-bg-yes").each((function(){if("none"==jQuery(this).css("background-image")){let e=jQuery(this).attr("data-ae-bg");jQuery(this).css("background-image","url("+e+")")}})),n.$wrapperEl.find(".swiper-slide-duplicate").find(".elementor-invisible").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))}))})),n.on("click",(function(){const n=e.clickedSlide;if(void 0===n)return;const t=n.querySelector(".ae-link-yes");if(null!==t&&0!=t.length){void 0!==jQuery(t).data("ae-url")&&(jQuery(t).data("ae-url")&&jQuery(t).hasClass("ae-new-window-yes")?window.open(jQuery(t).data("ae-url")):location.href=jQuery(t).data("ae-url"))}})),n.init()})):(e.on("slideChangeTransitionStart",(function(){e.$wrapperEl.find(".ae-featured-bg-yes").each((function(){if("none"==jQuery(this).css("background-image")){let e=jQuery(this).attr("data-ae-bg");jQuery(this).css("background-image","url("+e+")")}})),e.$wrapperEl.find(".swiper-slide-duplicate").find(".elementor-invisible").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))}))})),e.on("click",(function(){const n=e.clickedSlide;if(void 0===n)return;const t=n.querySelector(".ae-link-yes");if(null!==t&&0!=t.length){void 0!==jQuery(t).data("ae-url")&&(jQuery(t).data("ae-url")&&jQuery(t).hasClass("ae-new-window-yes")?window.open(jQuery(t).data("ae-url")):location.href=jQuery(t).data("ae-url"))}})),e.init())}pause_on_hover_func(e,n,t){jQuery(".elementor-element-"+t+" .ae-swiper-container").hover((function(){e.autoplay.stop()}),(function(){e.autoplay.start()}))}}},function(e,n,t){"use strict";t.r(n);t(0);const a=function(e,n){e.data("ae-bg")&&e.css("background-image","url("+e.data("ae-bg")+")"),e.data("ae-bg-color")&&e.css("background-color",e.data("ae-bg-color")),((e,n)=>{let t,a,i,o,r=[],s=[],d=e.children(".aepro-section-bs").children(".aepro-section-bs-inner");if(d&&d.data("aepro-bg-slider")){const e=d.data("aepro-bg-slider"),n=d.data("aepro-bg-slider-transition"),l=d.data("aepro-bg-slider-animation"),c=d.data("aepro-bg-custom-overlay");t=("yes"==c||d.data("aepro-bg-slider-overlay"),aepro.plugin_url+"/includes/assets/lib/vegas/overlays/"+d.data("aepro-bg-slider-overlay")),a=d.data("aepro-bg-slider-cover"),i=d.data("aepro-bs-slider-delay"),o=d.data("aepro-bs-slider-timer"),void 0!==e&&(r=e.split(","),jQuery.each(r,(function(e,n){var t=[];t.src=n,s.push(t)})),d.vegas({slides:s,transition:n,animation:l,overlay:t,cover:a,delay:i,timer:o,init:function(){"yes"==c&&d.children(".vegas-overlay").css("background-image","")}}))}})(e),elementorFrontend.isEditMode()||e.parents(".ae-carousel-yes").length>0||e.parents(".facetwp-template ").length>0||e.data("ae-url")&&e.hasClass("ae-link-yes")&&e.on("click",(function(n){e.data("ae-url")&&e.hasClass("ae-new-window-yes")?window.open(e.data("ae-url")):location.href=e.data("ae-url")}))};n.default=a,jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/global",a)}))},function(e,n,t){t(0),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(1),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(23),t(24),e.exports=t(25)},function(e,n,t){"use strict";t.r(n);var a,i,o=t(0);a=jQuery,i=function(e,n){const t=e.find(".ae-swiper-outer-wrapper"),a=e.data("id"),i=t.data("swiper-settings");new o.SwiperBase(i,a)},a(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf-gallery.carousel",i)}))},function(e,n){!function(e){const n=(e,n)=>{if(e.find(".ae-grid-wrapper").hasClass("ae-masonry-yes")){var t=e.find(".ae-grid").masonry({});t.imagesLoaded().progress((function(){t.masonry("layout")}))}e.find(".ae-grid-item-inner").hover((function(){n(this).find(".ae-grid-overlay").addClass("animated")}))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf-gallery.grid",n)}))}(jQuery)},function(e,n){!function(e){const n=(e,n)=>{const t=e.find(".elementor-tab-title.ae-tab-title"),a=e.find(".ae-accordion").data("transition-speed");t.on("click",(function(e){e.preventDefault();const t=n(this);t.hasClass("elementor-active")?(t.removeClass("elementor-active"),t.next().slideUp(a)):(t.parent().parent().find(".elementor-tab-title.ae-tab-title").removeClass("elementor-active"),t.parent().parent().find(".ae-tab-content.ae-acf-repeater-accordion").slideUp(a),t.toggleClass("elementor-active"),t.next().slideToggle(a)),window.location.hash=t.data("hashtag"),setTimeout((function(){t.siblings(".ae-tab-content").find(".elementor-widget-ae-acf-gallery").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),t.siblings(".ae-tab-content").find('[data-widget_type="ae-post-blocks-adv.carousel"]').each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))}))}),100)}));let i=window.location.hash.substring(1);if(i){let e=t.filter('[data-hashtag="'+i+'"]');if(e.length>0){e.hasClass("ae-active")||jQuery(e).trigger("click");let n=parseInt(jQuery(e).offset().top);jQuery("html, body").animate({scrollTop:n-100},1e3)}}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf-repeater.accordion",n)}))}(jQuery)},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1);!function(e){const n=(e,n)=>{const t=e.find(".ae-acf-repeater-wrapper");if(e.find(".ae-acf-repeater-widget-wrapper").hasClass("ae-masonry-yes")){const e=t.masonry({horizontalOrder:!0});e.imagesLoaded().progress((function(){e.masonry("layout")}))}if(e.find(".ae-acf-repeater-widget-wrapper").hasClass("ae-carousel-yes")){const n=e.data("id"),t=e.find(".ae-swiper-outer-wrapper").data("swiper-settings");new a.SwiperBase(t,n)}if(a.isEditMode){const t=e.find(".elementor-section");n.each(t,(function(e,t){Object(i.default)(n(t),n)}));const a=e.find(".elementor-column");n.each(a,(function(e,t){Object(i.default)(n(t),n)}))}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf-repeater.default",n)}))}(jQuery)},function(e,n){!function(e){const n=(e,n)=>{var t,a,i=e.find(".ae-acf-repeater-tabs").data("active-tab"),o=e.find(".ae-acf-repeater-tab-title"),r=e.find(".ae-acf-repeater-tab-content");i||(i=1);const s=e=>{t&&(t.removeClass("active"),a.hide()),(t=o.filter('[data-tab="'+e+'"]')).addClass("active"),(a=r.filter('[data-tab="'+e+'"]')).show(),a.find(".elementor-widget-ae-acf-gallery").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),a.find('[data-widget_type="ae-post-blocks-adv.carousel"]').each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),window.location.hash=t.data("hashtag")};s(i),o.on("click",(function(){s(this.dataset.tab),jQuery(".elementor-widget-ae-acf-repeater .swiper-container").each((function(e,n){n.swiper.init()}))}));let d=window.location.hash.substring(1);if(d){let e=o.filter('[data-hashtag="'+d+'"]');e.length>0&&(e.hasClass("ae-active")||s(e.data("tab")),jQuery("html, body").animate({scrollTop:parseInt(jQuery(e).offset().top)-100},1e3))}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf-repeater.tabs",n)}))}(jQuery)},function(e,n){const t=(e,n)=>{if(e.find(".ae-acf-wrapper").hasClass("ae-acf-unfold-yes")){const n=e.find(".ae-acf-wrapper"),t=e.find(".ae-acf-content-wrapper"),a=n.find(".ae-acf-unfold"),i=a.find(".ae-acf-unfold-link"),o=a.find(".ae-acf-unfold-button-text"),r=a.find(".ae-acf-unfold-button-icon");let s=0;s=t.outerHeight(),s&&(s+=a.outerHeight()),t.outerHeight()<=a.data("unfold-max-height")&&"yes"==a.data("auto-hide-unfold")?a.css({display:"none"}):i.on("click",(function(){a.hasClass("fold")?(n.css({height:n.outerHeight(),"max-height":9999}).animate({height:s},{duration:a.data("animation-speed")}),a.toggleClass("fold"),o.html(a.data("fold-text")),r.html('<i class="'+a.data("fold-icon")+'"></i>')):(n.css({"max-height":s}).animate({"max-height":a.data("unfold-max-height")},{duration:a.data("animation-speed")}),a.toggleClass("fold"),o.html(a.data("unfold-text")),r.html('<i class="'+a.data("unfold-icon")+'"></i>'))}))}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf.wysiwyg",t),elementorFrontend.hooks.addAction("frontend/element_ready/ae-acf.text-area",t)}))},function(e,n,t){"use strict";t.r(n);var a=t(0);!function(e){const n=(e,n)=>{if(e.find(".ae-taxonomy-widget-wrapper").hasClass("ae-carousel-yes")){const n=e.data("id"),t=e.find(".ae-swiper-outer-wrapper").data("swiper-settings");new a.SwiperBase(t,n)}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-taxonomy-blocks.card",n),elementorFrontend.hooks.addAction("frontend/element_ready/ae-taxonomy-blocks.classic",n)}))}(jQuery)},function(e,n){!function(e){const n=(e,n)=>{if(e.find(".ae-cf-gmap").length){const n=(e,n)=>{const t=new google.maps.LatLng(e.attr("data-lat"),e.attr("data-lng"));var a=new google.maps.Marker({position:t,map:n});if(n.markers.push(a),e.html()){var i=new google.maps.InfoWindow({content:e.html()});google.maps.event.addListener(a,"click",(function(){i.open(n,a)}))}},t=t=>{const i=e.find(".ae-cf-gmap").data("zoom"),o=t.find(".marker"),r=e.find(".ae-cf-gmap").data("styles"),s={zoom:i,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:r},d=new google.maps.Map(t[0],s);return d.markers=[],console.log({$markers:o}),o.each((function(){n(jQuery(this),d)})),a(d,i),d},a=(e,n)=>{var t=new google.maps.LatLngBounds;jQuery.each(e.markers,(function(e,n){var a=new google.maps.LatLng(n.position.lat(),n.position.lng());t.extend(a)})),1==e.markers.length?(e.setCenter(t.getCenter()),e.setZoom(n)):e.fitBounds(t)};map=t(e.find(".ae-cf-gmap"))}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-cf-google-map.default",n)}))}(jQuery)},function(e,n){!function(e){const n=function(e,n){elementorFrontend.isEditMode()||e.find(".ae-cf-wrapper").hasClass("hide")&&e.find(".ae-cf-wrapper").closest(".elementor-widget-ae-custom-field").hide()};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-custom-field.default",n)}))}(jQuery)},function(e,n,t){"use strict";t.r(n);var a,i,o=t(0);a=jQuery,i=function(e,n){if(e.hasClass("ae-pods-gallery-carousel")){const n=e.find(".ae-swiper-outer-wrapper"),t=e.data("id"),a=n.data("swiper-settings");new o.SwiperBase(a,t)}if(e.hasClass("ae-pods-gallery-grid")){if(e.find(".ae-grid-wrapper").hasClass("ae-masonry-yes")){var t=e.find(".ae-grid").masonry({});t.imagesLoaded().progress((function(){t.masonry("layout")}))}e.find(".ae-grid-item-inner").hover((function(){n(this).find(".ae-grid-overlay").addClass("animated")}))}},a(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-pods.file_gallery",i)}))},function(e,n){!function(e){const n=(e,n)=>{if(e.find(".ae-post-widget-wrapper").hasClass("ae-masonry-yes")){var t=e.find(".ae-post-list-wrapper").masonry();t.imagesLoaded().progress((function(){t.masonry("layout")}))}e.find("article.ae-post-list-item").css("opacity","1")};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-portfolio.default",n)}))}(jQuery)},function(e,n,t){"use strict";t.r(n);var a=t(0);t(1);!function(e){const n=(e,n)=>{e.find(".ae-post-list-wrapper");if(e.find(".ae-swiper-outer-wrapper").hasClass("ae-carousel-yes")){const n=e.data("id"),t=e.find(".ae-swiper-outer-wrapper").data("swiper-settings");new a.SwiperBase(t,n)}elementorFrontend.isEditMode()&&(e.find(".elementor-section").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),e.find(".elementor-column").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-blocks-adv.carousel",n)}))}(jQuery)},function(e,n){!function(e){const n=(e,n)=>{const t=e.find(".ae-tab-title"),a=(e.find(".ae-tab-content"),e.find(".ae-accordion").data("transition-speed"));t.on("click",(function(e){e.preventDefault();const t=n(this);t.hasClass("ae-active")?(t.removeClass("ae-active"),t.next().slideUp(a)):(t.parent().parent().find(".ae-tab-title").removeClass("ae-active"),t.parent().parent().find(".ae-tab-content").slideUp(a),t.toggleClass("ae-active"),t.next().slideToggle(a)),window.location.hash=t.data("hashtag"),setTimeout((function(){t.siblings(".ae-tab-content").find(".elementor-widget-ae-acf-gallery").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))}))}),100)}));let i=window.location.hash.substring(1);if(i){let e=t.filter('[data-hashtag="'+i+'"]');if(e.length>0){e.hasClass("ae-active")||jQuery(e).trigger("click");let n=parseInt(jQuery(e).offset().top);jQuery("html, body").animate({scrollTop:n-100},1e3)}}elementorFrontend.isEditMode()&&(e.find(".elementor-section").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),e.find(".elementor-column").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-blocks-adv.accordion",n)}))}(jQuery)},function(e,n){!function(e){const n=(e,n,t)=>{const a=e.data("id"),i=".elementor-element-"+a,o=t;let r="";e.find(".ae-outer-wrapper").hasClass("ae-masonry-yes")&&(r=t.data("masonry"));o.infiniteScroll({path:".next",append:i+" .ae-post-item-"+a,status:i+" .scroller-status",hideNav:i+" .ae-pagination-wrapper",outlayer:r,button:i+" .view-more-button",history:e.find(".ae-outer-wrapper").data("ias-history")});if(o.on("append.infiniteScroll",(function(t,a,i,o){if(e.find(".ae-post-collection").find(".elementor-invisible").each((function(){const e=n(this).data("settings"),t=e.animation||e._animation;n(this).removeClass("elementor-invisible").removeClass(t).addClass(t)})),e.find(".ae-post-collection").find(".ae-featured-bg-yes").each((function(){n(this).data("ae-bg")&&n(this).css("background-image","url("+n(this).data("ae-bg")+")")})),e.find(".ae-link-yes").data("ae-url")&&e.find(".ae-link-yes").on("click",(function(e){jQuery(this).data("ae-url")&&jQuery(this).hasClass("ae-new-window-yes")?window.open(jQuery(this).data("ae-url")):location.href=jQuery(this).data("ae-url")})),e.find(".ae-post-collection").find(".ae-cf-wrapper").each((function(){n(this).hasClass("hide")&&n(this).closest(".elementor-widget-ae-custom-field").hide()})),e.find(".eae-popup-link").length){const n=e.find(".eae-popup-wrapper").data("close-btn");e.find(".eae-popup-link").eaePopup({type:"inline",mainClass:"eae-popup eae-popup-"+e.find(".eae-popup-link").data("id")+" eae-wrap-"+e.find(".eae-popup-link").data("ctrl-id"),closeBtnInside:e.find(".eae-popup-wrapper").data("close-in-out"),closeMarkup:'<i class="eae-close '+n+'"> </i>'})}((-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||-1!=navigator.userAgent.indexOf("iPad")&&-1==navigator.userAgent.indexOf("Chrome"))&&safariResize(e),-1!=navigator.userAgent.indexOf("Safari")||-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("iPhone")&&-1==navigator.userAgent.indexOf("Chrome"))&&e.find(".ae-post-list-wrapper").find(".wp-post-image").each((function(e,n){n.outerHTML=n.outerHTML}));document.querySelectorAll(".ae-post-item").forEach((function(e){e.classList.remove("appended")})),o.forEach((function(e){e.classList.add("appended")})),e.find(".ae-post-item.appended .elementor-widget-ae-acf-gallery").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(n(this))}))})),e.find(".ae-outer-wrapper").hasClass("ae-ias-load-with-button-yes")){var s=n(".view-more-button"),d=o.data("infiniteScroll");o.on("load.infiniteScroll",(function e(){d.loadCount==l&&(o.infiniteScroll("option",{loadOnScroll:!1}),s.show(),o.off("load.infiniteScroll",e))}));var l=e.find(".ae-outer-wrapper").data("load-offset-page");if(0==l)o.infiniteScroll("option",{loadOnScroll:!1}),s.show(),e.find(".scroller-status").hide()}o.on("last.infiniteScroll",(function(n,t,a){e.find(".load-more-wrapper").hide()}))},t=(e,t)=>{const a=e.find(".ae-post-collection");if(e.find(".ae-outer-wrapper").hasClass("ae-masonry-yes")){const e=a.masonry({horizontalOrder:!0});e.imagesLoaded().progress((function(){e.masonry("layout")}))}const i=e.find(".ae-outer-wrapper > .ae-post-collection");e.find(".ae-outer-wrapper").hasClass("ae-ias-yes")&&(e.find(".ae-pagination-wrapper .page-numbers").length?n(e,t,i):(e.find(".scroller-status").hide(),e.find(".load-more-wrapper").hide()));var o=e.find(".ae-dropdown");if(o.find(".ae-menu .filter-items.active").length){var r=o.find(".filter-items.active a").html();o.find(".dropdown-filter-text").html(r),o.addClass("active")}else{var s=o.find(".dropdown-filter-text").html();o.find(".dropdown-filter-text").html(s)}elementorFrontend.isEditMode()&&(e.find(".elementor-section").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),e.find(".elementor-column").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})))};if(e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-blocks-adv.grid",t)})),e(document).on("click",".facetwp-template.elementor-widget-ae-post-blocks-adv .ae-pagination-wrapper a",(function(e){e.preventDefault();var n=jQuery(this);jQuery(this).closest(".ae-outer-wrapper").siblings(".ae-post-overlay").show();var t=n.attr("href").match(/\/page\/(\d+)/);null!==t?(FWP.paged=parseInt(t[1]),FWP.soft_refresh=!0,FWP.refresh()):(FWP.paged=1,FWP.soft_refresh=!0,FWP.refresh())})),jQuery(".ae-outer-wrapper").parents(".facetwp-template ").length>0){var a=!1;e(document).on("facetwp-refresh",(function(){jQuery(".ae-outer-wrapper").siblings(".ae-post-overlay").show()})),e(document).on("facetwp-loaded",(function(){var e=jQuery(".ae-outer-wrapper"),n=e.siblings(".ae-post-overlay");if("yes"==e.data("item-reveal-animation"))n.show(),e.removeClass("transit-in"),e.addClass("transit-out"),setTimeout((function(){if(e.find(".ae-featured-bg-yes").each((function(){img=jQuery(this).attr("data-ae-bg"),jQuery(this).css("background-image","url("+img+")")})),e.find(".ae-link-yes").data("ae-url")&&e.find(".ae-link-yes").on("click",(function(e){jQuery(this).data("ae-url")&&jQuery(this).hasClass("ae-new-window-yes")?window.open(jQuery(this).data("ae-url")):location.href=jQuery(this).data("ae-url")})),e.find(".ae-cf-wrapper.hide").each((function(){jQuery(this).closest(".elementor-widget-ae-custom-field").hide()})),e.hasClass("ae-masonry-yes")){var t=e.find(".ae-post-collection").masonry({horizontalOrder:!0});t.imagesLoaded().progress((function(){t.masonry("layout")}))}if(e.find(".elementor-invisible").each((function(){settings=jQuery(this).data("settings"),animation=settings.animation||settings._animation,jQuery(this).removeClass("elementor-invisible").removeClass(animation).addClass(animation)})),e.find("article.ae-post-item").css("opacity","1"),n.hide(),"no"==e.data("disable_scroll_on_ajax_load")&&a){var i=e.data("pagination_scroll_top_offset");jQuery("html,body").animate({scrollTop:e.offset().top-i},"slow")}e.find(".eae-popup-link").length&&($close_btn=e.find(".eae-popup-wrapper").data("close-btn"),$magnific=e.find(".eae-popup-link").eaePopup({type:"inline",mainClass:"eae-popup eae-popup-"+e.find(".eae-popup-link").data("id")+" eae-wrap-"+e.find(".eae-popup-link").data("ctrl-id"),closeBtnInside:e.find(".eae-popup-wrapper").data("close-in-out"),closeMarkup:'<i class="eae-close '+$close_btn+'"> </i>'})),a=!0}),e.data("overlay-animation-speed")),setTimeout((function(){n.hide(),e.removeClass("transit-out"),e.addClass("transit-in")}),e.data("overlay-animation-speed"));else{if(n.show(),e.find(".ae-featured-bg-yes").each((function(){img=jQuery(this).attr("data-ae-bg"),jQuery(this).css("background-image","url("+img+")")})),e.find(".ae-link-yes").data("ae-url")&&e.find(".ae-link-yes").on("click",(function(e){jQuery(this).data("ae-url")&&jQuery(this).hasClass("ae-new-window-yes")?window.open(jQuery(this).data("ae-url")):location.href=jQuery(this).data("ae-url")})),e.find(".ae-cf-wrapper.hide").each((function(){jQuery(this).closest(".elementor-widget-ae-custom-field").hide()})),e.hasClass("ae-masonry-yes")){var t=e.find(".ae-post-collection").masonry({horizontalOrder:!0});t.imagesLoaded().progress((function(){t.masonry("layout")}))}if(e.find(".elementor-invisible").each((function(){settings=jQuery(this).data("settings"),animation=settings.animation||settings._animation,jQuery(this).removeClass("elementor-invisible").removeClass(animation).addClass(animation)})),e.find("article.ae-post-item").css("opacity","1"),"no"==e.data("disable_scroll_on_ajax_load")&&a){var i=e.data("pagination_scroll_top_offset");jQuery("html,body").animate({scrollTop:e.offset().top-i},"slow")}e.find(".eae-popup-link").length&&($close_btn=e.find(".eae-popup-wrapper").data("close-btn"),$magnific=e.find(".eae-popup-link").eaePopup({type:"inline",mainClass:"eae-popup eae-popup-"+e.find(".eae-popup-link").data("id")+" eae-wrap-"+e.find(".eae-popup-link").data("ctrl-id"),closeBtnInside:e.find(".eae-popup-wrapper").data("close-in-out"),closeMarkup:'<i class="eae-close '+$close_btn+'"> </i>'})),a=!0,n.hide()}}))}}(jQuery)},function(e,n){!function(e){const n=(e,n)=>{var t,a,i=e.find(".ae-post-blocks-adv-tabs").data("active-tab"),o=e.find(".ae-post-blocks-adv-tab-title"),r=e.find(".ae-post-blocks-adv-tab-content");i||(i=1);const s=e=>{t&&(t.removeClass("active"),a.hide()),(t=o.filter('[data-tab="'+e+'"]')).addClass("active"),(a=r.filter('[data-tab="'+e+'"]')).show()};s(i),o.on("click",(function(){s(this.dataset.tab),r.find(".elementor-widget-ae-acf-gallery").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))}))})),elementorFrontend.isEditMode()&&(e.find(".elementor-section").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),e.find(".elementor-column").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-blocks-adv.tabs",n)}))}(jQuery)},function(e,n,t){"use strict";t.r(n);var a=t(0);t(1);!function(e){const n=n=>{imagesLoaded(n.find(".ae-element-post-image > .ae_thumb_wrapper img")).on("progress",(function(n,t){if(t.isLoaded&&0==t.img.height){var a=t.img.naturalHeight,i=t.img.naturalWidth;if(t.img.parentElement.clientWidth<i){var o=a/i;a=(i=t.img.parentElement.clientWidth)*o}t.img.setAttribute("style","width: "+i+"px; height: "+a+"px; display:none;"),e(t.img).fadeIn()}}))},t=(e,t,a)=>{const i=e.data("id"),o=".elementor-element-"+i,r=a;let s="";e.find(".ae-post-widget-wrapper").hasClass("ae-masonry-yes")&&(s=a.data("masonry"));r.infiniteScroll({path:".next",append:o+" .ae-post-list-item-"+i,status:o+" .scroller-status",hideNav:o+" .ae-pagination-wrapper",outlayer:s,button:o+" .view-more-button",history:e.find(".ae-post-widget-wrapper").data("ias-history")});if(r.on("append.infiniteScroll",(function(a,i,o,r){if(e.find(".ae-post-list-wrapper").find(".elementor-invisible").each((function(){const e=t(this).data("settings"),n=e.animation||e._animation;t(this).removeClass("elementor-invisible").removeClass(n).addClass(n)})),e.find(".ae-post-list-wrapper").find(".ae-featured-bg-yes").each((function(){t(this).data("ae-bg")&&t(this).css("background-image","url("+t(this).data("ae-bg")+")")})),e.find(".ae-link-yes").data("ae-url")&&e.find(".ae-link-yes").on("click",(function(e){jQuery(this).data("ae-url")&&jQuery(this).hasClass("ae-new-window-yes")?window.open(jQuery(this).data("ae-url")):location.href=jQuery(this).data("ae-url")})),e.find(".ae-post-list-wrapper").find(".ae-cf-wrapper").each((function(){t(this).hasClass("hide")&&t(this).closest(".elementor-widget-ae-custom-field").hide()})),e.find(".eae-popup-link").length){const n=e.find(".eae-popup-wrapper").data("close-btn");e.find(".eae-popup-link").eaePopup({type:"inline",mainClass:"eae-popup eae-popup-"+e.find(".eae-popup-link").data("id")+" eae-wrap-"+e.find(".eae-popup-link").data("ctrl-id"),closeBtnInside:e.find(".eae-popup-wrapper").data("close-in-out"),closeMarkup:'<i class="eae-close '+n+'"> </i>'})}((-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||-1!=navigator.userAgent.indexOf("iPad")&&-1==navigator.userAgent.indexOf("Chrome"))&&n(e),-1!=navigator.userAgent.indexOf("Safari")||-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("iPhone")&&-1==navigator.userAgent.indexOf("Chrome"))&&e.find(".ae-post-list-wrapper").find(".wp-post-image").each((function(e,n){n.outerHTML=n.outerHTML}));document.querySelectorAll(".ae-post-list-item").forEach((function(e){e.classList.remove("appended")})),r.forEach((function(e){e.classList.add("appended")})),e.find(".ae-post-list-item.appended .elementor-widget-ae-acf-gallery").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(t(this))}))})),e.find(".ae-post-widget-wrapper").hasClass("ae-ias-load-with-button-yes")){var d=t(".view-more-button"),l=r.data("infiniteScroll");r.on("load.infiniteScroll",(function e(){l.loadCount==c&&(r.infiniteScroll("option",{loadOnScroll:!1}),d.show(),r.off("load.infiniteScroll",e))}));var c=e.find(".ae-post-widget-wrapper").data("load-offset-page")-1}r.on("last.infiniteScroll",(function(n,t,a){e.find(".load-more-wrapper").hide()}))},i=(e,n)=>{const i=e.find(".ae-post-list-wrapper");if(e.find(".ae-post-widget-wrapper").hasClass("ae-masonry-yes")){const e=i.masonry({horizontalOrder:!0});e.imagesLoaded().progress((function(){e.masonry("layout")}))}if(e.find(".ae-post-widget-wrapper").hasClass("ae-ias-yes")&&(e.find(".ae-pagination-wrapper .page-numbers").length?t(e,n,e.find(".ae-post-widget-wrapper > .ae-post-list-wrapper")):(e.find(".scroller-status").hide(),e.find(".load-more-wrapper").hide())),e.find(".ae-post-widget-wrapper").hasClass("ae-carousel-yes")){const n=e.data("id"),t=e.find(".ae-swiper-outer-wrapper").data("swiper-settings");new a.SwiperBase(t,n)}elementorFrontend.isEditMode()&&(e.find(".elementor-section").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})),e.find(".elementor-column").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-blocks.default",i)}))}(jQuery)},function(e,n){var t,a;t=jQuery,a=function(e,n){if(e.find(".ae-element-post-content").hasClass("ae-post-content-unfold-yes")){const n=e.find(".ae-element-post-content"),t=e.find(".ae-element-post-content-inner"),a=n.find(".ae-post-content-unfold"),i=a.find(".ae-post-content-unfold-link");let o=0;o=t.outerHeight(),o&&(o+=a.outerHeight()),t.outerHeight()<=a.data("unfold-max-height")&&"yes"==a.data("auto-hide-unfold")?a.css({display:"none"}):i.on("click",(function(){a.hasClass("fold")?(n.css({height:n.outerHeight(),"max-height":9999}).animate({height:o},{duration:a.data("animation-speed")}),a.toggleClass("fold"),i.html(a.data("fold-text"))):(n.css({"max-height":o}).animate({"max-height":a.data("unfold-max-height")},{duration:a.data("animation-speed")}),a.toggleClass("fold"),i.html(a.data("unfold-text")))}))}},t(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-content.default",a)}))},function(e,n){!function(e){const n=(e,n)=>{if(e.find(".ae_thumb_wrapper").hasClass("ae_image_ratio_yes")){const n=e.find(".ae-post-image"),t=e.find(".ae-post-image img"),a=n.outerHeight()/n.outerWidth();t.height()/t.width()<a?n.addClass("ae-post-image-fit"):n.removeClass("ae-post-image-fit")}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-post-image.default",n)}))}(jQuery)},function(e,n,t){"use strict";t.r(n);var a,i,o=t(0);a=jQuery,i=function(e,n){const t=e.find(".ae-swiper-outer-wrapper"),a=e.data("id"),i=t.data("swiper-settings");new o.SwiperBase(i,a)},a(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-woo-products.carousel",i)}))},function(e,n){var t,a;t=jQuery,a=function(e,n){if(e.parents(".elementor-editor-active").length&&jQuery(".woocommerce-product-gallery").each((function(){jQuery(this).wc_product_gallery(),wc_single_product_params.zoom_enabled=0})),outer_wrapper=e.find(".ae-swiper-outer-wrapper"),outer_wrapper.length){wid=e.data("id"),wclass=".elementor-element-"+wid;var t=outer_wrapper.data("loop");t="yes"==t;var a=outer_wrapper.data("navigation");adata={wrapperClass:"ae-swiper-wrapper",slideClass:"ae-swiper-slide",observer:!0,loop:t,pagination:{el:".ae-swiper-pagination",type:"bullets",clickable:!0}},"no"!=a&&(adata.navigation={nextEl:".ae-swiper-button-next",prevEl:".ae-swiper-button-prev"}),adata.init=!1;var i=new Swiper(".elementor-element-"+wid+" .ae-swiper-container",adata);n(".elementor-element-"+wid+" .ae-swiper-container").length<=1?(i.on("slideChangeTransitionStart",(function(){i.$wrapperEl.find(".ae-featured-bg-yes").each((function(){"none"==n(this).css("background-image")&&(img=jQuery(this).attr("data-ae-bg"),n(this).css("background-image","url("+img+")"))})),i.$wrapperEl.find(".swiper-slide-active").find(".elementor-invisible").each((function(){settings=jQuery(this).data("settings"),animation=settings.animation||settings._animation,n(this).removeClass("elementor-invisible").removeClass(animation).addClass(animation)}))})),i.init()):n(".elementor-element-"+wid+" .ae-swiper-container").each((function(e){i[e].on("slideChangeTransitionStart",(function(){i[e].$wrapperEl.find(".ae-featured-bg-yes").each((function(){"none"==n(this).css("background-image")&&(img=jQuery(this).attr("data-ae-bg"),n(this).css("background-image","url("+img+")"))})),i[e].$wrapperEl.find(".swiper-slide-active").find(".elementor-invisible").each((function(){settings=jQuery(this).data("settings"),animation=settings.animation||settings._animation,n(this).removeClass("elementor-invisible").removeClass(animation).addClass(animation)}))})),i[e].init()})),n(".elementor-element-"+wid+" .ae-swiper-container").css("visibility","visible")}},t(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-woo-gallery.default",a)}))},function(e,n){!function(e){const n=(e,n)=>{if(e.hasClass("ae-masonry-yes")){const t=e.find(".ae-grid").masonry({});t.imagesLoaded().progress((function(){t.masonry("layout")})),n(window).resize((function(){}))}e.find(".ae-grid-item-inner").hover((function(){n(this).find(".ae-grid-overlay").addClass("animated")}))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-woo-products.grid",n)}))}(jQuery)},function(e,n){},function(e,n){!function(e){const n=(e,n)=>{var t,a,i=e.find(".ae-woo-tabs").data("active-tab"),o=e.find(".ae-woo-tab-title"),r=e.find(".ae-woo-tab-content");i||(i=1);const s=e=>{t&&(t.removeClass("active"),a.hide()),(t=o.filter('[data-tab="'+e+'"]')).addClass("active"),(a=r.filter('[data-tab="'+e+'"]')).show()};if(s(i),o.on("click",(function(){s(this.dataset.tab)})),"reviews"===window.location.hash.substring(1)){let e=o.filter('[data-hashtag="reviews"]');s(e.data("tab"))}};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ae-woo-tabs.default",n)}))}(jQuery)}]);