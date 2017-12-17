var connect4_scene = {
	grid : [
		[],
		[], 
		[],
		[],
		[],
		[],
		[]
	],

	column0 : null,
	column1 : null,
	column2 : null,
	column3 : null,
	column4 : null,
	column5 : null,
	column6 : null,

	x_range : [0, 100, 200, 300, 400, 500, 600, 700],

	setup : function( ) {
		this.scene_ready = true;
		// width, height, color, x, y, health = 1, type = "color"
		this.column0 = new block( 100, g_height, "#f00", 0, 0 );
		this.column1 = new block( 100, g_height, "#0f0", 100, 0 );
		this.column2 = new block( 100, g_height, "#00f", 200, 0 );
		this.column3 = new block( 100, g_height, "#f00", 300, 0 );
		this.column4 = new block( 100, g_height, "#0f0", 400, 0 );
		this.column5 = new block( 100, g_height, "#00f", 500, 0 );
		this.column6 = new block( 100, g_height, "#f00", 600, 0 );
	},

	scene_ready : false,

	run : function( ) {
		this.column0.update();
		this.column1.update();
		this.column2.update();
		this.column3.update();
		this.column4.update();
		this.column5.update();
		this.column6.update();

		// for ( var i = 0; i < this.x_range.length; ++i ) {
		// 	if ( mousePos.x > this.x_range[i] && mousePos.x < this.x_range[i+1] ) {
		// 		this.grid.push(1);
		// 		break;
		// 	}
		// }
	},

	clicked : function() {
		// click position will be relative to the canvas and will still be called when the mouse has moved outside the bounds of the canvas
		// alert("_default_scene MOUSE CLICKED x:" + mousePos.x + " y: " + mousePos.y );
		for ( var i = 0; i < this.x_range.length; ++i ) {
			if ( mousePos.x > this.x_range[i] && mousePos.x < this.x_range[i+1] ) {
				this.grid[i].push(1);
				break;
			}
		}
	},

	button_press : function( e ) {
		// alert("_default_scene BUTTON PRESSED " + e.keyCode);
	}
}