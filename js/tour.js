$(document).ready( function() {
    $('h3').append('<span class="glyphicon glyphicon-info-sign pull-right"></span>');
    $('fieldset legend').append('<span class="glyphicon glyphicon-info-sign pull-right"></span>');

    $('.glyphicon.glyphicon-info-sign').on('click', function() {
        var classes = "div." + $(this).parent().next('div').attr('class');

        var obj = classes.replace(' ', '.');

        console.log(obj);

        $.ajax({
            url: "js/tour-elements.json", 
            success: function(result){
                $.each(result, function(i, field){
                    console.log(i + " - " + field + ", ");
                });
            }
        });

        var tour = new Tour({
            steps: [
                {
                    element: "div.box.one",
                    title: "Box 1",
                    content: "This is box one."
                },
                {
                    element: "div.box.two",
                    title: "Box 2",
                    content: "This is box two."
                }
            ],
            backdrop: true,
            storage: false
        });
        tour.init();
        tour.start();
    });
});