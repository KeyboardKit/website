
//Global =====================

var audioPlayer;


//Init =======================

$(document).ready(function() {
  $("a[rel='external']").attr("target", "_blank");
  setupBubbles();
  setupTitles();
});


//Setup ======================

function setupBubbles() {
	var amplitude = 1.2;
	$.each($("div.bubble:not(.no-rotate)"), function(i, el){
		rotateElement($(el), 2 * amplitude * (Math.random()-0.5));
		amplitude = -amplitude;
	});
}

/*function setupTitles() {
	var amplitude = 1.5;
	$.each($(".box"), function(i, el){
		rotateElement($(el), 2 * amplitude * (Math.random()-0.5));
		amplitude = -amplitude;
	});
}*/


//Helper methods =============

function rotateElement(element, degrees) {
	element.css('-webkit-transform', 'rotate(' + degrees + 'deg)');
  	element.css('-moz-transform', 'rotate(' + degrees + 'deg)');
  	element.css('-ms-transform', 'rotate(' + degrees + 'deg)');
  	element.css('-o-transform', 'rotate(' + degrees + 'deg)');
  	element.css('transform', 'rotate(' + degrees + 'deg)');
}


//Audio player ===============

/*
function AudioPlayer(source,volume,loop)
{
    this.source = "";
    this.volume = 100;
    this.loop = false;
    var son;
    this.son=son;
    this.finish=false;

    this.play = function(source, volume, loop) {
	    this.source = "";
	    this.volume = 100;
	    this.loop = false;
    }

    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }

    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
}
*/