// Setter riktig delay for åpning/lukking, og fjerner/legger til tag
function addOpenedTag(event) {
   var overlay = document.getElementById("nav");
   var overlayClasses = overlay.classList;
   var headerClasses = document.getElementById("header").classList;
   var contentClasses = document.getElementById("content").classList;

   if (overlayClasses.contains("menu-opened")) {
      var listElements = overlay.children[0].children;
      console.log(listElements);
      var delay = 0;

      for (let i = listElements.length - 1; i >= 0; i--) {
	 listElements[i].style.transitionDelay = `${delay}s`;
	 delay += .05;
	 console.log(delay);
	 console.log(listElements[i].style.transitionDelay);
	 console.log(listElements[i]);
      }

      overlayClasses.remove("menu-opened");
      headerClasses.remove("menu-opened");
      contentClasses.remove("menu-opened");

   } else {
      var listElements = overlay.children[0].children;
      var delay = 27;

      for (let i = 0; i < listElements.length; i++) {
	 listElements[i].style.transitionDelay = `.${delay}s`;
	 delay += 7;
	 // console.log(listElements[i].style.transitionDelay);
	 // console.log(listElements[i]);
      }

      overlayClasses.add("menu-opened");
      headerClasses.add("menu-opened");
      contentClasses.add("menu-opened");
   }
}

document.getElementById("overlay-input").addEventListener("click", addOpenedTag);

