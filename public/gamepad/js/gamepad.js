(function() {

	var socket = io();

	function sendEvent(data) {
		socket.emit('pressKey', data);        
	}

	function press(button) {
		window.navigator.vibrate(30);
		sendEvent({ keyCode: button,
	                value: 0x41,
	                type: 'keyDown'
	    });        
	}

	function release(button) {
		sendEvent({ keyCode: button,
	                value: 0x40,
	                type: 'keyUp'
	    });        
	}

	var gamepad = {
		preload: function() {
			this.game.load.image('controller', 'assets/gamepad.png');
			this.game.load.image('up', 'assets/up.png');
			this.game.load.image('right', 'assets/right.png');
			this.game.load.image('button', 'assets/button.png');
			this.game.load.image('select', 'assets/select.png');
		},
		create: function() {
			this.resize = this.game.world.height/588;

			this.gamepad = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'controller');
			this.gamepad.anchor.setTo(0.5, 0.5);
			this.gamepad.scale.setTo(this.resize, this.resize);

			this.B = this.game.add.button(69*this.resize, 388*this.resize, 'button', null, this);
			this.B.scale.setTo(this.resize, this.resize);

			this.B.events.onInputOver.add(function(){ press(keys.B); });
		    this.B.events.onInputOut.add(function(){ release(keys.B); });
		    this.B.events.onInputDown.add(function(){ press(keys.B); });
		    this.B.events.onInputUp.add(function(){ release(keys.B); });

			this.A = this.game.add.button(69*this.resize, 454*this.resize, 'button', null, this);
			this.A.scale.setTo(this.resize, this.resize);

			this.A.events.onInputOver.add(function(){ press(keys.A); });
		    this.A.events.onInputOut.add(function(){ release(keys.A); });
		    this.A.events.onInputDown.add(function(){ press(keys.A); });
		    this.A.events.onInputUp.add(function(){ release(keys.A); });

			this.selectBtn = this.game.add.button(62*this.resize, 226*this.resize, 'select', null, this);
			this.selectBtn.scale.setTo(this.resize, this.resize);

			this.selectBtn.events.onInputOver.add(function(){ press(keys.SELECT); });
		    this.selectBtn.events.onInputOut.add(function(){ release(keys.SELECT); });
		    this.selectBtn.events.onInputDown.add(function(){ press(keys.SELECT); });
		    this.selectBtn.events.onInputUp.add(function(){ release(keys.SELECT); });

			this.startBtn = this.game.add.button(62*this.resize, 295*this.resize, 'select', null, this);
			this.startBtn.scale.setTo(this.resize, this.resize);

			this.startBtn.events.onInputOver.add(function(){ press(keys.START); });
		    this.startBtn.events.onInputOut.add(function(){ release(keys.START); });
		    this.startBtn.events.onInputDown.add(function(){ press(keys.START); });
		    this.startBtn.events.onInputUp.add(function(){ release(keys.START); });

			this.left = this.game.add.button(97*this.resize, 63*this.resize, 'right', null, this);
			this.left.scale.setTo(this.resize, this.resize);

			this.left.events.onInputOver.add(function(){ press(keys.LEFT); });
		    this.left.events.onInputOut.add(function(){ release(keys.LEFT); });
		    this.left.events.onInputDown.add(function(){ press(keys.LEFT); });
		    this.left.events.onInputUp.add(function(){ release(keys.LEFT); });

			this.right = this.game.add.button(97*this.resize, 157*this.resize, 'right', null, this);
			this.right.scale.setTo(this.resize, this.resize);

			this.right.events.onInputOver.add(function(){ press(keys.RIGHT); });
		    this.right.events.onInputOut.add(function(){ release(keys.RIGHT); });
		    this.right.events.onInputDown.add(function(){ press(keys.RIGHT); });
		    this.right.events.onInputUp.add(function(){ release(keys.RIGHT); });

			this.up = this.game.add.button(135*this.resize, 116*this.resize, 'up', null, this);
			this.up.scale.setTo(this.resize, this.resize);

			this.up.events.onInputOver.add(function(){ press(keys.UP); });
		    this.up.events.onInputOut.add(function(){ release(keys.UP); });
		    this.up.events.onInputDown.add(function(){ press(keys.UP); });
		    this.up.events.onInputUp.add(function(){ release(keys.UP); });

			this.down = this.game.add.button(36*this.resize, 115*this.resize, 'up', null, this);
			this.down.scale.setTo(this.resize, this.resize);

			this.down.events.onInputOver.add(function(){ press(keys.DOWN); });
		    this.down.events.onInputOut.add(function(){ release(keys.DOWN); });
		    this.down.events.onInputDown.add(function(){ press(keys.DOWN); });
		    this.down.events.onInputUp.add(function(){ release(keys.DOWN); });

			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

		    if (!this.game.device.desktop) this.game.input.onDown.add(this.gofull, this);
		},
		gofull: function() {
			console.log('fullscreen started!!')
			this.game.scale.startFullScreen();
		}
	};

	var height = window.innerHeight;
	var width = 0.44*height;

	var game = new Phaser.Game(width, height, Phaser.AUTO, 'game_div');

	game.state.add('main', gamepad);
	game.state.start('main');

})();