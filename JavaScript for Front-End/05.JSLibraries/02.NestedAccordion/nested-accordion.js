$(document).ready(function () {
   $(".toggle").on("click", function (event) {
       event.preventDefault();

       let $this = $(this);

       if ($this.next().hasClass("show")) {
           $this.next().removeClass("show");
           $this.next().slideUp(350);
       } else {
           $this.parent().parent().find("li .inner").removeClass("show");
           $this.parent().parent().find("li .inner").slideUp(350);
           $this.next().toggleClass("show");
           $this.next().slideToggle(350);
       }
   })
});
