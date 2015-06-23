$(function() {
    var socket = io();
    
    var nes = new JSNES(socket, 
        {'ui': $('#emulator').JSNESUI({
            "Homebrew": [
                ['Super Mario Bros', 'roms/smb/smb.nes'],
                ['Super Mario Bros 3', 'roms/smb3/smb3.nes'],
                ['The Legend of Zelda', 'roms/tloz/tloz.nes']
            ]
        })
    });

    socket.on('keyPressed', function(data) {
        nes.keyboard.onKeyEventReceived(data);
    });
});