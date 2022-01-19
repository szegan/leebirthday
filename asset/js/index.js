var $body = $( 'body' );
var $scene = $( '.scene' );

var rx = -15;
$scene.css( '--rx', rx+'deg');

var ry = -30;

$body.on( 'mousedown', startDrag );
$body.on( 'mouseup', stopDrag );

$( 'img' ).prop( 'draggable', false );

function startDrag() {
  $body.on( 'mousemove', rotateScene )
}

function stopDrag() {
  $body.off( 'mousemove', rotateScene )
}

function rotateScene( event ) {
    ry += event.originalEvent.movementX;
    rx -= event.originalEvent.movementY ; 

    if (ry >=30) ry = 30;
    if(ry <= -30) ry = -30;
    
    //console.log( ry );
    
    $scene.css( '--ry', ry+'deg');

}


var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    audio.loop = true;
    button.src = "asset/images/play.png";
  }
  else{
    audio.pause();
    button.src= "asset/images/mute.png";
  }
});

/*
var audio1 = document.getElementById("audio1");
var $card = $( '.card' );
var $border = $( '.border' );
var $palace = $( '.palace' );
var $plant = $( '.plant' );
var $lion = $( '.lion' );
var $firecracker = $( '.firecracker' );
var $title = $( '.title' );
var $money = $( '.money' );
var $flower = $( '.flower' );
var $cloud = $( '.cloud' );
var $fanobj = $( '.fanobj' );

$(".scene").click(function (event){
  if( ! $( event.target).is($card) ) {
    if(! $( event.target).is($border)){
      if(! $( event.target).is($palace)){
        if(! $( event.target).is($plant)){
          if(! $( event.target).is($lion)){
            if(! $( event.target).is($firecracker)){
              if(! $( event.target).is($title)){
                if(! $( event.target).is($money)){
                  if(! $( event.target).is($flower)){
                    if(! $( event.target).is($cloud)){
                      if(! $( event.target).is($fanobj)){
                          audio1.play();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

})
*/