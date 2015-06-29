$( function () {

	var newFile = new OO.ui.SelectFileWidget();
	$( '.container h1' ).after(
		$( '<h2>' ).text( 'Add new file' ),
		newFile.$element,
		'<br>',
		'<br>',
		'<br>',
		$( '<h2>' ).text( 'Enter details' )
	);

	// Image
	var imageProgress = new OO.ui.ProgressBarWidget();
	var imageCancel = new OO.ui.ButtonWidget( {
		icon: 'remove',
		flags: 'destructive',
		framed: false
	} );
	var imageSave = new OO.ui.ButtonWidget( {
		label: 'Save',
		flags: [ 'constructive', 'primary' ]
	} );
	var imageToggle = new OO.ui.ToggleSwitchWidget();
	var imageToggleLabel = new OO.ui.LabelWidget( { label: 'Bulk edit' } );
	$( '.image_container' ).append(
		imageProgress.$element,
		'<br>',
		imageCancel.$element,
		imageSave.$element,
		'<br>',
		imageToggle.$element,
		imageToggleLabel.$element
	);


	// Details
	var fileNameInput = new OO.ui.TextInputWidget( {
		indicator: 'required',
		required: true,
		validate: /.+/
	} );


	var fileDateInput = new OO.ui.TextInputWidget( {
		indicator: 'required',
		required: true,
		validate: /.+/
	} );

	var fileDescLang = new OO.ui.DropdownInputWidget( {
		label: 'Pick langauge',
		options: [
			{ data: 'en', label: 'English' },
			{ data: 'hi', label: 'Hindi' },
		]
	} );
	var fileDescInput = new OO.ui.TextInputWidget( {
		indicator: 'required',
		required: true,
		validate: /.+/,
		multiline: true,
		autosize: true
	} );
	var fileDescAdd = new OO.ui.ButtonWidget( {
		label: 'Add another language',
		icon: 'add',
		flags: 'constructive',
		framed: false
	} );

	var fileCatInput = new OO.ui.ComboBoxWidget( {
		icon: 'tag',
		label: 'Pick langauge',
		menu: {
			items: [
				new OO.ui.MenuOptionWidget( {
					data: 'wm-pres',
					label: 'Wikimedia Presentation'
				} ),
				new OO.ui.MenuOptionWidget( {
					data: 'animals',
					label: 'Wild Animals'
				} ),
			]
		}
	} );

	$( fileNameInput.$input )
		.add( fileDateInput.$input )
		.add( fileDescLang.$tabIndexed )
		.add( fileDescInput.$input )
		.add( fileCatInput.$input )
		.on( 'focus', function() {
			$( this ).closest( 'form' ).removeClass( 'compact-form' );
		} ).on( 'blur', function () {
			$( this ).closest( 'form' ).addClass( 'compact-form' );
		} );


	var fileFieldset = new OO.ui.FieldsetLayout( { label: 'Details' } );
	fileFieldset.addItems( [
		new OO.ui.FieldLayout( fileNameInput, {
			label: 'Name',
			align: 'top'
		} ),

		new OO.ui.FieldLayout( fileDateInput, {
			label: 'Date created or first published',
			align: 'top'
		} ),

		new OO.ui.FieldLayout( fileDescLang, {
			label: 'Description',
			align: 'top'
		} ),
		fileDescInput,
		fileDescAdd,

		new OO.ui.FieldLayout( fileCatInput, {
			label: 'Categories',
			align: 'top'
		} )
	] );
	var fileForm = new OO.ui.FormLayout( {
		items: [ fileFieldset ]
	} );

	$( '.details_container' ).append( fileForm.$element );


	// License
	var ownerType = new OO.ui.ToggleSwitchWidget( { value: true } );
	var ownerTypeLabel = new OO.ui.LabelWidget( { label: 'This file is my own work' } );

	var nameInput = new OO.ui.TextInputWidget( {
		indicator: 'required',
		required: true,
		validate: /.+/,
		classes: [ 'license_name_input' ],
		value: 'Prtksxna'
	} );
	var licenseChoice = new OO.ui.ComboBoxWidget( {
		icon: 'tag',
		label: 'Pick a license',
		classes: [ 'license_name_license' ],
		menu: {
			items: [
				new OO.ui.MenuOptionWidget( {
					data: 'CC-BY-SA',
					label: 'Creative Commons Attribution Share Alike'
				} ),
				new OO.ui.MenuOptionWidget( {
					data: 'CC-BY',
					label: 'Creative Commons Attribution'
				} ),
			]
		}
	} );

	$( '.license_container' ).append(
		ownerType.$element,
		ownerTypeLabel.$element,
		'<br>',
		'<br>',
		'I',
		nameInput.$element,
		', the copyright holder of this work, irrevocably grant anyone the right to use this work under the',
		licenseChoice.$element
	);


	// Done files
	var doneLabel = new OO.ui.LabelWidget( { label: 'This file was successfully uploaded' } );
	var fileWikiUseLabel = new OO.ui.LabelWidget( { label: 'On wiki use' } );
	var fileWikiUseInput = new OO.ui.TextInputWidget( {
		value: '[[File: Hall.png]]'
	} );
	var fileUseLabel = new OO.ui.LabelWidget( { label: 'Off wiki use' } );
	var fileUseInput = new OO.ui.TextInputWidget( {
		value: 'http://upload.wikimedia.org/hall.png'
	} );

	$( '.done_file_container .usage_instructions' ).append(
		doneLabel.$element,
		'<br>',
		'<br>',
		fileWikiUseLabel.$element,
		fileWikiUseInput.$element,
		'<br>',
		fileUseLabel.$element,
		fileUseInput.$element
	);
} );
