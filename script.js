$(document).ready(function () {
  
  $(".fa-plus-circle").click(function () {
    var impegno = $("#nuovo-impegno").val();
    var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var context = {
        text : impegno,
      };
      var html = template(context);
      $("ul").append(html);
    var impegno = $("#nuovo-impegno").val("");

    
  });
  $(document).on("click",".delete",function () {
    var idImpegno = $(this).parent("li");
    idImpegno.remove();
    
  })
  $(document).on("click",".fa-clipboard-list",function () {
     $(this).parents("li").children("input").removeClass("display-none");
     $(this).parents("li").children(".fa-notes-medical").removeClass("display-none");

  })
  $(document).on("keypress","li input",function () {
    if(event.which == 13 || event.keyCode == 13){
      var nuovoTesto = $(this).val();
      console.log(nuovoTesto);
      $(this).prev().text("");
      $(this).prev().text(nuovoTesto);
      $(this).text("");
      $(this).addClass("display-none");
      $(this).parents("li").children(".fa-notes-medical").addClass("display-none");
    }
  })
  $(document).on("click",".fa-notes-medical",function () {
    var nuovoTesto = $(this).prev().val();
    $(this).parent("li").children("p").text("");
    $(this).parent("li").children("p").text(nuovoTesto);
    $(this).addClass("display-none");
    $(this).prev("input").addClass("display-none");
  })
  $(".fa-check").click(function() {
    if ($(this).parents("li").hasClass("green")){
      console.log("ni");
      $(this).parents("li").removeClass("green");
    }else{
      $(this)
        .parents("li")
        .addClass("green");
    }
  });
})
      
      
    

// funzione stampa
// function printAll() {
//   $.ajax({
//     url :"http://157.230.17.132:3008/todos",
//     method : "GET",
//     success :function (data) {
//       var source = $("#entry-template").html();
//       var template = Handlebars.compile(source);

//       for (var i = 0; i < data.length; i++) {
//         var context = data[i]
//         var html = template(context);
//         $("ul").append(html)
//       }
//     },
//     error : function (error) {
//       alerr("errore"+error)
//     }
//   })
// }
// // inserimento dato
// function nuovoImpegno(testo) {
//   $.ajax({
//     url :"http://157.230.17.132:3008/todos",
//     method : "POST",
//     data : {
//       text : testo,
//     },
//     success :function (data) {
//       $("ul li").remove();
//       printAll()
//     },
//     error : function (error) {
//       alerr("errore"+error)
//     }
//   })
// }
// // funzione cancellazione
// function cancella(id) {
//   $.ajax({
//     url :"http://157.230.17.132:3008/todos/" + id,
//     method : "DELETE",
//     success :function (data) {
//       $("ul li").remove();
//       printAll()
//     },
//     error : function (error) {
//       alert("errore"+error)
//     }
//   })
// }
// funzione modifica
// function modifica(id,modifica) {
//   $.ajax({
//     url :"http://157.230.17.132:3008/todos/" + id,
//     method : "PATCH",
//     data : {
//       text: modifica,
//     },
//     success :function (data) {
//       $("ul li").remove();
//       printAll()
//     },
//     error : function (error) {
//       alert("errore"+error)
//     }
//   })
// }
