$( function () {
	// Render the editor
	var textarea = new OO.ui.TextInputWidget( {
		multiline: true,
		autosize: true
	} );

	var showDialog = function () {
		var uploadDialog = new UW.UploadDialog( { size: 'larger' } );
		var windowManager = new OO.ui.WindowManager();
		$( 'body' ).append( windowManager.$element );
		windowManager.addWindows( [ uploadDialog ] );
		windowManager.openWindow( uploadDialog ).then( function ( opened ) {
			opened.then( function ( closing, data ) {
				if ( data ) {
					textarea.setValue( '[[File:' + data.internalUrl + ']]' );
				}
			} );
		} );
	}

	var insert = new OO.ui.ButtonWidget( {
		label: 'Insert file',
	} ).on( 'click', showDialog );


	$( '#editor' ).append(
		insert.$element,
		textarea.$element
	);
} );
