  // CODED BY KHANDAKAR SHAKIB

  $(document).ready(function(){
    $('.slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
       lazyLoad: 'ondemand',
       autoplay: true,
       autoplaySpeed: 2000,
    });

  });

    var slowLoad = window.setTimeout( function() {
    $('.chart-section').css('display', 'none');
    $('.bgthree').css('min-height', 'auto');
    $(".slow-net-txt").css('display', 'block');
  }, 55000 );

  window.addEventListener( 'load', function() {
      window.clearTimeout( slowLoad );
  }, false );

      if($('.animate').length==1){
        var typed_strings=$('.typing').text();

        var typed = new Typed('.animate',{
          strings: typed_strings.split('?'),
          typeSpeed: 50,
          loop: true,
          backDelay: 800,
          backSpeed: 30,
        });
      }
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
      try {
        google.load("visualization", {packages:["corechart"]});
           google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
             var data = google.visualization.arrayToDataTable([
               ['Section', 'Percentege'],
               ['A',     24.6],
               ['B',      21.7],
               ['C',  15.9],
               ['D', 14.5],
               ['E',    17.4],
               ['F',  4.3],
               ['G',  1.4]
             ]);

             var options = {
               height: 300,
               title: "Response of Student's by Section",
               titleTextStyle: {fontSize: 18 ,
                                fontName: 'verdana',
                              color: 'white'
                              },
              legend:{textStyle: {color: 'white'}},
               is3D: true,
               backgroundColor: { fill:'transparent' },
               fontSize: 12,
               tooltip: {trigger:'selection',
                          text:'percentage',
                          color: 'white'},
               slices: {
                  0: { color: '#a8a8a8' },
                  1: { color: '#1A0000' },
                  2: { color: '#FFB3B3' },
                  3: { color: '#FF4D4D' },
                  4: { color: '#B30000' },
                  5: { color: '#800000' },
                  6: { color: '#330000' }
                  }
             };


             var chart = new google.visualization.PieChart(document.getElementById('piechart'));
             chart.draw(data, options);
           }
           // google.load("visualization", "1", {packages:["corechart"]});
           google.charts.setOnLoadCallback(drawChart1);

           function drawChart1() {

              var data = google.visualization.arrayToDataTable([
                      ['Catagory', 'Number of students'],
                      ['Programming', 61],
                      ['Robotics', 30],
                      ['IOT', 32],
                      ['Machine Learning', 31],
                      ['Web Development', 37]
              ]);

              var options = {
                title: 'Domain of Interest among the Students',
                titleTextStyle: {color: 'white',
                                  fontSize: 15},
                chartArea: {width: '50%'},
                backgroundColor: { fill:'transparent' },
                hAxis: {
                  title: 'Number of Students',
                  titleTextStyle:{color:'white'},
                  textStyle: {color: 'white'},
                  minValue: 0
                },
                vAxis: {textStyle: {color: 'white'}},
                 colors: ['red']
              };

              var chart = new google.visualization.BarChart(document.getElementById('barchart'));

              chart.draw(data, options);
            }
            $( document ).on('load',function() {
              $('.loading-icon').fadeOut('slow');
            });

            $(window).resize(function(){
             drawChart1();
              drawChart();


        });

      } catch (err) {
         document.getElementById("barchart").innerHTML = '<h2 style="background-color:white; width:80%; margin:10px auto; text-align: center; color:red;"><p>'+err +'</p>Failed to load the BarChart.<br> Try refreshing the page.</h2>' ;
         document.getElementById("piechart").innerHTML = '<h2 style="background-color:white; width:80%; margin:10px auto;text-align: center; color:red;"><p>'+err +'</p>Failed to load the PieChart.<br> Try refreshing the page.</h2>' ;
      }
