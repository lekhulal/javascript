import createButton from './dynamic-import/widget.js';

var btnAnimation = false;

createButton("Test Alert", () => {
	alert('Alert tested successfully');
})

createButton("Initiate Animation", async () => {
	const animate = await import("./dynamic-import/animation.js")
	
	if(!btnAnimation) {
		createButton("Start", animate.changeBackground)
		createButton("Stop", animate.resetBackground)
		btnAnimation = true;
	}
})

