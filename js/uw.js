// Testing
var kw;

$( function () {
	kw = new UW.Bulk( {
		container: 'uw'
	} );
} );
// Testing

var UW = UW || {};

/**
 * Uploader interface for a bulk uploads.
 * Uses instances of UW.Uploader
 *
 * @class
 * @param {Object} [config] Configuration options
 * @cfg {string} [container] ID of the container element
 */
UW.Bulk = function ( config ) {
	// Config stuff
	// TODO: Does the config have a container?
	// TODO: Fill config with defauls
	this.container = config.container;
	this.$container = $( '#' + this.container ).addClass( 'uw-uploader' );

	// Create elements
	this.$bulkform = $( '<div>' )
		.addClass( 'bulkform' )
		.appendTo( this.$container );

	this.$uploaders = $( '<div>' )
		.addClass( 'uploaders' )
		.appendTo( this.$container );

	this.idCounter = 1;
	this.uploaders = {};
	this.selectedUploaders = [];

	this.renderBulkForm();
	this.addUploader();
};

/**
 * Add a new instance of uploader
 */
UW.Bulk.prototype.addUploader = function () {
	var self = this;

	var id = 'uploader-' + self.idCounter;
	self.idCounter += 1;

	var $uploader = $( '<div>' ).attr( 'id', id );
	self.$container.prepend( $uploader );

	self.uploaders[ id ] = new UW.Uploader( {
		container: id,
		containerType: 'bulk'
	} ).once( 'stateChange', function ( state ) {
		if ( state === 'details' ) {
			self.addUploader();
		}
	} ).on( 'select', function ( selected ) {
		self.selectUploader( id, selected );
	} );

};

/**
 * Render the bulk edit form
 */
UW.Bulk.prototype.renderBulkForm = function () {
	this.$counter = $( '<span>' ).text( '0' );
	this.$thumbs = $( '<div>' ).addClass( 'uw-thumbs' );
	this.$bulkform.append(
		$( '<h1>' ).text( 'Bulk edit' ),
		$( '<p>' ).append(
			this.$counter,
			' files selected'
		),
		this.$thumbs
	);
};

/**
 * Select an uploader
 */
UW.Bulk.prototype.selectUploader = function ( id, selected ) {
	if ( selected ) {
		this.selectedUploaders.push( id );
	} else {
		var index = this.selectedUploaders.indexOf( id );
		this.selectedUploaders.splice( index, 1 );
	}

	this.updateCounter();
	this.updateThumbs();
};

/**
 * Update the selection counter
 */
UW.Bulk.prototype.updateCounter = function () {
	this.$counter.text( this.selectedUploaders.length );
};

/**
 * Update the thumbnails on the bulk editor form
 */
UW.Bulk.prototype.updateThumbs = function () {
	this.$thumbs.html( '' );
	for ( var i in this.selectedUploaders ) {
		var u = this.selectedUploaders[ i ];
		this.$thumbs.append( this.uploaders[ u ].getFileDisplayElement() );
	}
}
