import { Chart, PieController, ArcElement,Legend,Title,Tooltip, SubTitle, BarController, BarElement,
    CategoryScale, LinearScale} from 'chart.js';
Chart.register(
    PieController, ArcElement,Legend,Title,Tooltip, SubTitle,BarController,BarElement, CategoryScale,
    LinearScale,);

var pieCanvas = document.querySelector('.pie_canvas');

var pieCTX = pieCanvas.getContext('2d');

Chart.defaults.color = 'white';
Chart.defaults.font.weight = "bolder";
Chart.defaults.font.size = window.innerWidth>=400 ? 16 : 10;

var PieChart = new Chart(pieCTX, {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        datasets: [{
            label: 'Response of students by section',
            data: [24, 20,26, 17, 24, 12, 2],
            backgroundColor: [
                'hsl(0deg 100% 0%)',
                'hsl(0deg 100% 20%)',
                'hsl(0deg 100% 30%)',
                'hsl(0deg 100% 50%)',
                'hsl(0deg 100% 70%)',
                'hsl(0deg 100% 90%)',
                'hsl(0deg 50% 50%)',
            ],
            borderColor: [
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
            ],
            borderWidth: 1,
            spacing: 1,
        }],
        options: {
            Title: {
                display: true
            },
            responsive: true
        }
    },
});

var barCanvas = document.querySelector('.bar_canvas');
var barCTX = barCanvas.getContext('2d');
var BarChart = new Chart(barCTX,{
    type: 'bar',

    data:{
        labels: ['Programming', 'Robotics', 'IOT', 'Machine Learning', 'Web Development'],
        datasets:[{
        label: 'Students',
            data:[61, 30,32, 31, 37],
            backgroundColor: [
                '#C44536',
                '#D7E8BA',
                '#4DA1A9',
                '#2E5077',
                '#611C35',
            ],
            borderColor: [
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
                'rgba(255,255,255)',
            ],
            borderWidth: 2,
            barThickness: 12,
        }]
    },
    options:{
        indexAxis: 'y',
        elements: {
            bar: {hoverBackgroundColor: 'red'},
        },
        responsive:true,
    }
});