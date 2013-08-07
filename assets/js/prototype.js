// Fullscreen laden van icoontjes
var isFullscreen = false;    

function fullscreen(background, icon, page){ 
    switch(background) {
        case "green":
            var background = 'bg-color-green';
            break;
        case "blue":
            var background = 'bg-color-blue';
            break;
        default:
            var background = 'bg-color-blue';
    }
    $('.icon').addClass('icon-' + icon);

    var d = {};
    var speed = 500;
    if(!isFullscreen){ // MAXIMIZATION
        $("#transitie").show();
        $("#transitie").addClass(background);
        $('#innerTransitie').show();
        d.width = "100%";
        d.height = "100%"; 
        isFullscreen = true;
        window.setTimeout(function(){
            $('.icon').removeClass('icon-' + icon);
            showContent(page, 'pages');
        }, 1000);
    }
    else { 
        return false;
    }
    $("#transitie").animate(d,speed);            
} 

function hideTransition(){
    $('#transitie').hide();
    $('#innerTransitie').hide();
    $('#transitie').css('width', '1px');
    $('#transitie').css('height', '1px');
    isFullscreen = false; 
}

function initSelected(page){
    $('.dashboardknop').removeClass('selected');
    $('.'+ page).addClass('selected');
}

function hideSideNav(status){
    switch(status) {
        case "start":
            $('.side-nav').addClass('large');
            $('.home').show();
            $('.active').show();
            setTimeout(function(){
                    $('.side-nav').removeClass('large');
                    $('.side-nav').hover(function() {
                        $(this).addClass('large');
                    }, function (){
                        $('.side-nav').removeClass('large');     
                    });
            }, 1000);
            break;
        case "stop":
            $('.side-nav').hide();
            break;
        default:
            $('.side-nav').hide();
    }
}

// Prototype: E-learning collapse
function behandelplanAccordion() {
    $('.accordion-body').removeClass('in');

    $('.accordion').on('show', function (e) {
         $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('activeElearning');
         $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-chevron-down');
         $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-chevron-up');
    });

    $('.accordion').on('hide', function (e) {
        $(this).find('.accordion-toggle').not($(e.target)).removeClass('activeElearning');
        $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-chevron-down');
         $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-chevron-up');
    });
}

function showInstructions() {
    $('.instruction').click(function(){
        $(this).hide();
    });
}

function uitklappenFolder() {
    $(".folderContent").hide();
    //when a folder is clicked,
    //position the content folder after the clicked row
    //and toggle all folder / app icon that is not the one clicked.
    //and toggle the folder content panel
    $(".folder").click(function(event) {
        var folderContent = $(".folderContent");
        folderContent.remove();

        var folderContentShown = folderContent.css("display") != "none";

        var clickedFolder = $(this);
        clickedFolder.parent(".rij").after(folderContent);

        folderContent.find(".folderName").text($(this).text());

        $("body").find(".folder, .applicatie").not(clickedFolder).each(function() {
            if (!folderContentShown) $(this).animate({
                opacity: 0.20
            }, "fast");
            else $(this).animate({
                opacity: 1.00
            }, "fast");
        });

        //clickedFolder.animate({opacity: folderContentShown ? 1.00 : 0.70}, "fast");
        folderContent.slideToggle("fast");
        event.preventDefault();
    });
}

function dragndrop() {
    $(function() {
        $( ".rij" ).sortable({
          connectWith: ".rij",
          placeholder: "placeholderTile"
        });
     
        $( ".rij" ).disableSelection();
  });
}

function create( template, vars, opts ){
    return $container.notify("create", template, vars, opts);
}

function notifications() {
    $container = $("#notifications-container").notify();

    create("sticky", { title:'Zorgportaal update', text:'Er is een update voor Zorgportaal.<a href="#"> Meer informatie</a>'});
    create("sticky", { title:'Nieuws', text:'Er zijn <a href="javascript:void(0);">4 nieuwe items</a>'});
}

function toggleNotifications() {
    if ($('.collapsible').hasClass('span8')){
        $('.collapsible').addClass('span6');
        $('.collapsible').removeClass('span8');
        $('.showNotifications').fadeIn();
    } else {
        $('.showNotifications').fadeOut(function(){
             $('.collapsible').removeClass('span6');
             $('.collapsible').addClass('span8');
        });
    }
    if ($('.metro').hasClass('span10')) {
        $('.metro').addClass('span12');
        $('.metro').removeClass('span10'); 
    } else {
        $('.metro').removeClass('span12');
        $('.metro').addClass('span10');
    }
}

function loginscreenBackground(status) {
    if (true) {
       $('body').addClass('loginScreenBackground'); 
    } else {
        $('body').removeClass('loginScreenBackground');
    }
}