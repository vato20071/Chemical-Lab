$(function() {
	$("#windowControlMinimize").on("click", function() {
		win.minimize();
	});	
    $("#windowControlClose").on("click", function() {
        win.close();
    });
    $("#windowControlMaximize").on("click", function() {
        if (win.isMaximized)
            win.unmaximize();
        else
            win.maximize();
    });
    win.on('maximize', function(){
        win.isMaximized = true;
    });
    win.on('unmaximize', function(){
        win.isMaximized = false;
    });
});