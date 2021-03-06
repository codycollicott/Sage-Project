( function() {
    tinymce.PluginManager.add( 'cool_timeline', function( editor, url ) {
      
   var layouts=[];

	   layouts.push({"text":'Default Layout',"value":'default'});
	   layouts.push({"text":'One Side Layout',"value":'one-side'});
	   layouts.push({"text":'Simple Layout',"value":'simple'});
	 
     var animations_eff={
		   "animations":[
				{"text":"None","value":"none"},
			   {"text":"fadeInUp","value":"fadeInUp"}
				 ]}
   
   
	  var icons_options=[];
	   icons_options.push({"text":"NO","value":"NO"});
	   icons_options.push({"text":"YES","value":"YES"});
  	  var date_formats={
		   "formats":[
			   {"text":"F j","value":"F j"},
			   {"text":"F j Y","value":"F j Y"},
			   {"text":"Y-m-d","value":"Y-m-d"},
			   {"text":"m/d/Y","value":"m/d/Y"},
			   {"text":"d/m/Y","value":"d/m/Y"},
			   {"text":"F j Y g:i A","value":"F j Y g:i A"},
			   {"text":"Y","value":"Y"},
			   ]};
   
	  editor.addButton( 'cool_timeline_btn', {
				title: 'Cool Timeline Shortcode',
				text: false,
				image: url + '/cooltimeline.png',
				type: 'menubutton',
				menu: [
                {
                    text: 'Add Cool Timeline Shortcode',
					onclick: function() {

						editor.windowManager.open( {
							title: 'Please Select Your Favourite Layout.',
							body: [
								{
									type: 'listbox',
									name: 'timeline_layout',
									label: 'Timeline Layout',
									'values':layouts
								},
								{
									type: 'listbox',
									name: 'animations',
									label: 'Animation Effect',
									'values':animations_eff.animations
								},
								{
									type: 'listbox',
									name: 'date_format',
									label: 'Date formats',
									'values':date_formats.formats
								},
								{
									type: 'listbox',
									name: 'ctl_icons',
									label: 'Icon',
									'values':icons_options
								},
								{
									type: 'textbox',
									name: 'number_of_posts',
									label: 'Show number of posts',
									value:20
								},
								],
							onsubmit: function( e ) {
								editor.insertContent( '[cool-timeline layout="'+ e.data.timeline_layout+'"   animation="' + e.data.animations + '" date-format="' + e.data.date_format + '" icons="' + e.data.ctl_icons + '" show-posts="' + e.data.number_of_posts + '"]');
							}
						});
					}
                }],
			});
			
			
	});
})();