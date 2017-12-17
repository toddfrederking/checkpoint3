
// var canvas = document.getElemenbyId("canvas");
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
//
// var context=canvas.getContext("2d");
// context.fillStyle




var data = {
  totalRevs:360,
  totalCurrent:0,
  totalRPS: 0
};

setInterval(goGo,100);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#nut").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}


$("#nut").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
})

$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
})


  $(function(){
  $(".baker").hover(function(){
    $("#nut").attr('src','image/muppetbaker.png');
  },
  function(){
    $("#nut").attr('src','image/glazednutII.png');
  })
  })

  $(function(){
  $(".coffee").hover(function(){
    $("#nut").attr('src','image/vaderlatte.png');
  },
  function(){
    $("#nut").attr('src','image/glazednutII.png');
  })
  })

  $(function(){
  $(".redbull").hover(function(){
    $("#nut").attr('src','image/redbull.png');
  },
  function(){
    $("#nut").attr('src','image/glazednutII.png');
  })
  })

  $(function(){
  $(".cocaine").hover(function(){
    $("#nut").attr('src','image/rinna.png');
  },
  function(){
    $("#nut").attr('src','image/glazednutII.png');
  })
  })




  updateReport();
