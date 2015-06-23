JSNES with Gamepads
===================

A Javascript NES emulator with *Virtual Gamepads* that can be used from mobile devices for a better gaming experience.

JSNES
-----

Is the NES emulator by [bfirsh](https://github.com/bfirsh/jsnes).

Gamepads
--------

The gamepads are very simple and were developed using *Phaser.js*. The communication with the emulator is done via *Socket.io*.

Run
---

- Install the dependencies:

```
$ npm install
```

- Run the application:

```
$ node app
```

- On your Desktop, access [localhost:3000/jsnes].

- On your phone, access [YOUR_IP_ADDRESS:3000/gamepad/gamepad1], the player 2 may access [YOUR_IP_ADDRESS:3000/gamepad/gamepad2]