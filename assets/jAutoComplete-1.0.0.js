/*
    Plugin Name: jAutoComplete
    Copyright (C) 2018 - Mohammad Esmaeilzadeh
    Author URL: http://www.bugless.ir/
    Author Email: bugless.ir@yahoo.com
    GitHub: https://github.com/buglessir
    This is a jQuery plugin for AutoComplete form textboxes
*/

$.fn.jAutoComplete = function(options){

    var settings = $.extend({
        url: null,
        method: 'POST'
    }, options);

    if(settings.url)
    {
        this.after('<div class="jAutoCompleteHolder"></div>');

        this.appendTo('.jAutoCompleteHolder');

        $(this).after('<ul class="jAutoCompleteUl"></ul>');

        this.attr('autocomplete', 'off');

        this.focusout(function(){
            $('.jAutoCompleteUl').css('display', 'none');
        });

        var jAutoCompleteItems = [];

        function jAutoCompleteRequest(value){

            $.ajax({
                url: settings.url,
                dataType: 'json',
                method: settings.method,
                data: { keyword: value }
            })
            .done(function(result) {

                $('.jAutoCompleteUl').empty();

                jAutoCompleteItems = [];

                result.map(function(item){
                    jAutoCompleteItems.push('<li><a href="'+item.link+'">'+item.title+'</a></li>');
                });

                $('.jAutoCompleteUl').append(jAutoCompleteItems);

                $('.jAutoCompleteUl').css('display', 'block');

            });

        }

        this.focusout(function(){
            $('.jAutoCompleteUl').css('display', 'none');
            $('.jAutoCompleteUl').empty();
            jAutoCompleteItems = [];
        });

        this.keypress(function(){
            jAutoCompleteRequest( $(this).val() );
        });

        this.focus(function(){
            if( $(this).val() )
            {
                jAutoCompleteRequest( $(this).val() );
            }
        });
    }
    else
    {
        console.log('Error: jAutoComplete API url in empty !');
    }

}
