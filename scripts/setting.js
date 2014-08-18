document.onreadystatechange = function()
{    
    if(document.readyState=="complete")
    {
        var searchTags = System.Gadget.Settings.read("searchTags");
        if(searchTags != "")
        {
            searchBox.value = searchTags;
        }       
    }        
}

System.Gadget.onSettingsClosing = function(event)
{
    if (event.closeAction == event.Action.commit) 
    {
        var searchTags = searchBox.value;
        if((searchTags != "") && (/^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test(searchTags)))
        {
            System.Gadget.Settings.write("searchTags", searchTags);
        }
        event.cancel = false;
    }
}