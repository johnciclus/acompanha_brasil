$(document).ready(function() {
    
    $("#favorite_project").click(function(){
      var button = $(this);
      var span = $(this).children("span");
      if(button.hasClass("btn-primary")){
        button.removeClass("btn-primary");
        button.addClass("btn-success");
        span.removeClass("glyphicon-star-empty");
        span.addClass("glyphicon-star");  
      }
      else{
        button.removeClass("btn-success");
        button.addClass("btn-primary");
        span.removeClass("glyphicon-star");
        span.addClass("glyphicon-star-empty");
      }
    });
    
    $("#votes button").click(function(){
      $("#voteModal .modal-body").html("<p>Confirma que sua votação é: <b>"+$(this).text()+"</b></p>");
      
    });
    
    $("#acept_vote").click(function(){
      $("#voteModal").modal('hide');
      $("#votes").html("<h4>Votação  popular</h4><div id='graph'></div>");
      Morris.Donut({
        element: 'graph',
        data: [
          {value: 45, label: 'Concordam'},
          {value: 45, label: 'Discordam'},
          {value: 10, label: 'Branco'}
        ],
          formatter: function (x) { return x + "%"}
        }).on('click', function(i, row){
          console.log(i, row);
        });
    });
    
    $("#view_parliament_votes").click(function(){
      get_page("parliament_votes");
    });
        
});