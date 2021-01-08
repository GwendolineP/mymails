var messagesCount = $('p').length;
$('#count').text(messagesCount)

$('.trash').click(
    function(){
    this.parentNode.remove();
    var messagesCount = $('p').length;
    $('#count').text(messagesCount);
    }
    );

 $('#btn-add').click(function(){
    var message = $('#add-message').val();
    $("body").append(`
      <div class="row">
        <img class="avatar" src="avatar-1.jpg">
        <div class="content">    
          <h6>Eric Dupont</h6>
          <p>`+message+`</p>
        </div>
        <img class="trash" src="trash.png">
      </div>`);
   })

   $("#btn-add").click(function(){
    $("#count").text($('p').length)
    $("#add-message").val("");
   });
 
   $("body").on("click",'.trash', 
   function(){
       this.parentNode.remove();
       var messagesCount = $('p').length;
       $('#count').text(messagesCount);
  });


  $("#btn-search").click(
      function(){
          console.log("ok");
          var rechercher = $("#search-message").val();
          $("h6").each(
              function() {
                console.log(rechercher);
                if(rechercher != $(this).text()) {
                $(this).parent().parent().fadeOut();
            }
            else {
                $(this).parent().parent().show()
            }
              }
            );  
      })



