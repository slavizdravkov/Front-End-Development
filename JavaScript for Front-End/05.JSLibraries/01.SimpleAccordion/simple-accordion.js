$(document).ready(function () {
   $(".toggle").on("click", function (event) {
       event.preventDefault();

       let $this = $(this);
       let $accordion = $(".accordion");

       if ($this.next().hasClass("show")) {
           $this.next().removeClass("show");
           $this.next().slideUp(350);
       } else {
           $accordion.find("li .inner").removeClass("show");
           $accordion.find("li .inner").slideUp(350);
           $this.next().toggleClass("show");
           $this.next().slideToggle(350);
       }
   })
});
