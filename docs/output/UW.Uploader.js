Ext.data.JsonP.UW_Uploader({"tagname":"class","name":"UW.Uploader","autodetected":{},"files":[{"filename":"u.js","href":"u.html#UW-Uploader"}],"params":[{"tagname":"params","type":"Object","name":"config","optional":true,"doc":"<p>Configuration options</p>\n","html_type":"Object"}],"members":[{"name":"container","tagname":"cfg","owner":"UW.Uploader","id":"cfg-container","meta":{}},{"name":"containerType","tagname":"cfg","owner":"UW.Uploader","id":"cfg-containerType","meta":{}},{"name":"","tagname":"property","owner":"UW.Uploader","id":"property-","meta":{}},{"name":"containerType","tagname":"property","owner":"UW.Uploader","id":"property-containerType","meta":{}},{"name":"state","tagname":"property","owner":"UW.Uploader","id":"property-state","meta":{}},{"name":"cancel","tagname":"method","owner":"UW.Uploader","id":"method-cancel","meta":{}},{"name":"dismiss","tagname":"method","owner":"UW.Uploader","id":"method-dismiss","meta":{}},{"name":"getFileData","tagname":"method","owner":"UW.Uploader","id":"method-getFileData","meta":{}},{"name":"getFileDisplayElement","tagname":"method","owner":"UW.Uploader","id":"method-getFileDisplayElement","meta":{}},{"name":"initFileUpload","tagname":"method","owner":"UW.Uploader","id":"method-initFileUpload","meta":{}},{"name":"renderDetailsForm","tagname":"method","owner":"UW.Uploader","id":"method-renderDetailsForm","meta":{}},{"name":"renderUploadForm","tagname":"method","owner":"UW.Uploader","id":"method-renderUploadForm","meta":{}},{"name":"renderUsage","tagname":"method","owner":"UW.Uploader","id":"method-renderUsage","meta":{}},{"name":"renderWaitForSave","tagname":"method","owner":"UW.Uploader","id":"method-renderWaitForSave","meta":{}},{"name":"saveFile","tagname":"method","owner":"UW.Uploader","id":"method-saveFile","meta":{}},{"name":"showCancelDialog","tagname":"method","owner":"UW.Uploader","id":"method-showCancelDialog","meta":{}},{"name":"uploadFile","tagname":"method","owner":"UW.Uploader","id":"method-uploadFile","meta":{}},{"name":"fileSaved","tagname":"event","owner":"UW.Uploader","id":"event-fileSaved","meta":{}},{"name":"fileUploaded","tagname":"event","owner":"UW.Uploader","id":"event-fileUploaded","meta":{}},{"name":"stateChange","tagname":"event","owner":"UW.Uploader","id":"event-stateChange","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-UW.Uploader","short_doc":"Uploader interface for a single file. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/u.html#UW-Uploader' target='_blank'>u.js</a></div></pre><div class='doc-contents'><p>Uploader interface for a single file. Can be used in a larger list of\nuploads to control bulk edits.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Configuration options</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-container' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-cfg-container' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-cfg-container' class='name expandable'>container</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>ID of the container element</p>\n</div><div class='long'><p>ID of the container element</p>\n</div></div></div><div id='cfg-containerType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-cfg-containerType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-cfg-containerType' class='name expandable'>containerType</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Type of container - single, dialog or bulk</p>\n</div><div class='long'><p>Type of container - single, dialog or bulk</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-property-' class='name expandable'></a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Select this uploader if part of bulk</p>\n</div><div class='long'><p>Select this uploader if part of bulk</p>\n</div></div></div><div id='property-containerType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-property-containerType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-property-containerType' class='name expandable'>containerType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>{string} This could be - single, dialog or bulk ...</div><div class='long'><p>{string} This could be - single, dialog or bulk</p>\n<p>Defaults to: <code>&#39;single&#39;</code></p></div></div></div><div id='property-state' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-property-state' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-property-state' class='name expandable'>state</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>{string} Current state ...</div><div class='long'><p>{string} Current state</p>\n<p>Defaults to: <code>&#39;upload&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-cancel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Cancel upload\nRemoved the form and deletes the current object if its part of\na bulk editor, TODO: otherwise goes back...</div><div class='long'><p>Cancel upload\nRemoved the form and deletes the current object if its part of\na bulk editor, TODO: otherwise goes back to the upload state.</p>\n</div></div></div><div id='method-dismiss' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-dismiss' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-dismiss' class='name expandable'>dismiss</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dismiss the entire thing ...</div><div class='long'><p>Dismiss the entire thing</p>\n</div></div></div><div id='method-getFileData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-getFileData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-getFileData' class='name expandable'>getFileData</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the file's meta data\nTODO: Should use mw.UploadWizardUpload.js ...</div><div class='long'><p>Get the file's meta data\nTODO: Should use mw.UploadWizardUpload.js</p>\n</div></div></div><div id='method-getFileDisplayElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-getFileDisplayElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-getFileDisplayElement' class='name expandable'>getFileDisplayElement</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the file's display element\nA canvas element with the file rendered or something\nTODO: Should use mw.UploadWizardU...</div><div class='long'><p>Get the file's display element\nA canvas element with the file rendered or something\nTODO: Should use mw.UploadWizardUpload.js</p>\n</div></div></div><div id='method-initFileUpload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-initFileUpload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-initFileUpload' class='name expandable'>initFileUpload</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initialize file upload ...</div><div class='long'><p>Initialize file upload</p>\n</div></div></div><div id='method-renderDetailsForm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-renderDetailsForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-renderDetailsForm' class='name expandable'>renderDetailsForm</a>( <span class='pre'></span> ) : OO.ui.FormLayout<span class=\"signature\"></span></div><div class='description'><div class='short'>Renders the details form ...</div><div class='long'><p>Renders the details form</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>OO.ui.FormLayout</span><div class='sub-desc'><p>element</p>\n</div></li></ul></div></div></div><div id='method-renderUploadForm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-renderUploadForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-renderUploadForm' class='name expandable'>renderUploadForm</a>( <span class='pre'></span> ) : OO.ui.FormLayout<span class=\"signature\"></span></div><div class='description'><div class='short'>Renders the file upload form ...</div><div class='long'><p>Renders the file upload form</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>OO.ui.FormLayout</span><div class='sub-desc'><p>element</p>\n</div></li></ul></div></div></div><div id='method-renderUsage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-renderUsage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-renderUsage' class='name expandable'>renderUsage</a>( <span class='pre'>d</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Render the usage ...</div><div class='long'><p>Render the usage</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-renderWaitForSave' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-renderWaitForSave' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-renderWaitForSave' class='name expandable'>renderWaitForSave</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Render the waiting part ...</div><div class='long'><p>Render the waiting part</p>\n</div></div></div><div id='method-saveFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-saveFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-saveFile' class='name expandable'>saveFile</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Save file ...</div><div class='long'><p>Save file</p>\n</div></div></div><div id='method-showCancelDialog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-showCancelDialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-showCancelDialog' class='name expandable'>showCancelDialog</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Confirm whether or not to cancel the upload ...</div><div class='long'><p>Confirm whether or not to cancel the upload</p>\n</div></div></div><div id='method-uploadFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-method-uploadFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-method-uploadFile' class='name expandable'>uploadFile</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Upload file\nTODO: Should use mw.UploadWizardUpload.js ...</div><div class='long'><p>Upload file\nTODO: Should use mw.UploadWizardUpload.js</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-fileSaved' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-event-fileSaved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-event-fileSaved' class='name expandable'>fileSaved</a>( <span class='pre'>details</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Emitted when the file is saved ...</div><div class='long'><p>Emitted when the file is saved</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>details</span> : Object<div class='sub-desc'><p>of where the file was uploaded etc.</p>\n</div></li></ul></div></div></div><div id='event-fileUploaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-event-fileUploaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-event-fileUploaded' class='name expandable'>fileUploaded</a>( <span class='pre'>details</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Emitted when the file is uploaded ...</div><div class='long'><p>Emitted when the file is uploaded</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>details</span> : Object<div class='sub-desc'><p>of where the file was uploaded etc.</p>\n</div></li></ul></div></div></div><div id='event-stateChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UW.Uploader'>UW.Uploader</span><br/><a href='source/u.html#UW-Uploader-event-stateChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UW.Uploader-event-stateChange' class='name expandable'>stateChange</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Emitted when the state of the uploader changes. ...</div><div class='long'><p>Emitted when the state of the uploader changes.\nCould be -\n* upload\n* details\n* usage</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>of the state</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});