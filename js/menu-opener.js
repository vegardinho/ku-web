document.getElementById("overlay-input").addEventListener("click", addOpenedTag);

// Setter riktig delay for åpning/lukking, og fjerner/legger til tag
function addOpenedTag(event) {
   var overlay = document.getElementById("mobil-overlay");
   var overlayClasses = overlay.classList;
   var headerClasses = document.getElementById("header").classList;
   var contentClasses = document.getElementById("content").classList;

   if (overlayClasses.contains("menu-opened")) {
      var listElements = overlay.children[0].children;
      console.log(listElements);
      var delay = 15;

      for (let i = listElements.length; i > 0; i--) {
	 listElements[i-1].style.transitionDelay = `.${delay}s`;
	 delay += 7;
	 console.log(listElements[i-1].style.transitionDelay);
	 console.log(listElements[i-1]);
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
	 console.log(listElements[i].style.transitionDelay);
	 console.log(listElements[i]);
      }

      overlayClasses.add("menu-opened");
      headerClasses.add("menu-opened");
      contentClasses.add("menu-opened");
   }
}
