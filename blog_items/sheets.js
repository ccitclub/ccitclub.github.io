
      function init() {
        Tabletop.init( {
          key: 'https://docs.google.com/spreadsheets/d/1hnLaH-Ol3Rxz6exDFLZsfMAQY98F2I1fNr0Lyrlv_aA/edit?usp=sharing',
          simpleSheet: true,
          parseNumbers: true }
        ).then(function(data, tabletop) {
          console.log(data);
          var value = [];

          var Mapping = data.map(val => {
              return {Name: val.Name, date: val.Date,Catagory:val.Catagory, Heading: val.Heading, Section1: val.Section1, Section2: val.Section2};
          });
          need= [];

          for (var i = 0; i < Mapping.length; i++) {
            var value =Object.values(data[i]);

            need[i]=value;
          }
          console.log(need);
          for (var i = need.length - 1; i >= 0; i--) {
              (document).getElementById('blogging').innerHTML+='<div class="blog-container '+need[i][2] +'"><div class="element-item"><div id="'+ i +'" class="container"><span class="date">'+need[i][1]+'</span>'+need[i][3]+ '<br>'+'<p class="justify">'+ need[i][0]+ '<br> <span class="silver">' +need[i][2]+'</span></p>'+ '<br>' +need[i][4]+ '<br>' +need[i][5]+ '<br></div></div><button class="seemore-button"> See More...</button></div>';
          }
        })
      }
      window.addEventListener('DOMContentLoaded', init)

        window.setTimeout(function(){
          $('.seemore-button').on('click',function(){
            $('.full-blog').css('display','block');
            $('.button-grp,.blogpost').css('display','none');
            $('.X').css('display','initial');
            var id = $(this).siblings(".element-item").children(".container").attr('id');
            $(".full-blog").html('<div class="full-blog-container '+need[id][2] +'"><div class="full-element-item"><div class="fulcontainer">'+need[id][3]+ '<br>' +need[id][4]+ '<br>' +need[id][5]+ '<p class="justify"> By '+ need[id][0]+'</p><p class="full-blg-dt">Published: '+need[id][1]+'</p></div></div></div>');
            $('html, body').animate({scrollTop:0});
          })
        },4000);

        $('.X').click(function(){
          $('.full-blog').css('display','none');
          $('.button-grp,.blogpost').css('display','block');
          $('.X').css('display','none');
        });

        function SearchQuery(){
                jQuery.expr[':'].icontains = function(a, i, m) {
                return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
              };
              var txtsearch =  $('#SearchBar').val();
              var filt = $("div.blog-container:icontains('" + txtsearch +"')");

              $("div.blog-container").css("display", "none")
                  .filter(filt)
                  .css("display", "inline-block");
                }

        $(document).ready(function() {
        $('#SearchBar').keyup(function(event){
              SearchQuery(); $('.bttn').removeClass('active-bttn'); $("#All").addClass('active-bttn');
            });
          });

        $(function() {

            var header = $(".thisnavbar");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (window.innerWidth>=764) {
                  if (scroll >= 65) {
                      header.addClass("colorChng");
                  } else {
                      header.removeClass("colorChng");
                  }
                }

            });
          });
          $('.bttn').click(function(){
            $('.bttn').removeClass('active-bttn');
            $(this).addClass('active-bttn');

            var projectID= $(this).attr('id');

             if (projectID !== 'All') {
               $(".blog-container").not("."+projectID).slideUp(function(){
                 $(".blog-container").not("."+ projectID).css("display", "none");
               });
               $("."+projectID).slideDown("slow");
          }
          else {
            $(".blog-container").slideDown(function(){
              $(".blog-container").css("display","inline-block");
            });
          }
          });
