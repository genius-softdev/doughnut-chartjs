
var backgroundData = {
    // labels: [
    //     "Value", "h"
    // ],
    datasets: [
        {
            data: [100, 0],
            // backgroundColor: [
            //     "rgba(0,0,0,0.5)",
            //     "rgba(0,0,0,0.5)"
            // ],
            hoverBackgroundColor: [
                "#3ec556",
                "rgba(0,0,0,0)"
            ],
            // borderWidth: [
            //     1, 1
            // ], 
            // weight: 10, 
            label: "1"
        },
        {
            data: [100, 0],
            // backgroundColor: [
            //     "rgba(0,0,0,0.5)",
            //     "rgba(0,0,0,0.5)"
            // ],
            hoverBackgroundColor: [
                "#3ec556",
                "rgba(0,0,0,0)"
            ],
            // borderWidth: [
            //     1, 1
            // ],
            // weight: 5, 
            label: "2"
        }
    ]
};

// var backgroundData = {
//     labels: ["Green", "Yellow", "Red", "Purple", "Blue"],
//     datasets: [{
//         data: [1, 2, 3, 4, 5],
//         backgroundColor: [
//             'green',
//             'yellow',
//             'red',
//             'purple',
//             'blue',
//         ],
//         labels: [
//             'green',
//             'yellow',
//             'red',
//             'purple',
//             'blue',
//         ]
//     }, {
//         data: [6, 7, 8],
//         backgroundColor: [
//             'black',
//             'grey',
//             'lightgrey'
//         ],
//         labels: [
//             'black',
//             'grey',
//             'lightgrey'
//         ],
//     },]
// }

var backgroundOpt = {
    cutoutPercentage: 72,
    animation: {
        animationRotate: true,
        duration: 0
    },
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    }
};

var chart1 = new Chart($('#openedCanvas1'), {
    type: 'doughnut',
    data: backgroundData,
    options: backgroundOpt
});


Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function (ease) {
        var ctx = this.chart.chart.ctx;

        var easingDecimal = ease || 1;
        Chart.helpers.each(this.getMeta().data, function (arc, index) {
            arc.transition(easingDecimal).draw();

            var vm = arc._view;
            var radius = (vm.outerRadius + vm.innerRadius) / 2;
            var thickness = (vm.outerRadius - vm.innerRadius) / 2;
            var angle = Math.PI - vm.endAngle - Math.PI / 2;

            ctx.save();
            ctx.fillStyle = vm.backgroundColor;
            ctx.translate(vm.x, vm.y);
            ctx.beginPath();
            ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
            ctx.arc(radius * Math.sin(Math.PI), radius * Math.cos(Math.PI), thickness, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        });
    },
});

var deliveredData = {
    labels: [
        "Value"
    ],
    datasets: [
        {
            data: [71, 29],
            backgroundColor: [
                "#3ec556",
                "rgba(0,0,0,0)"
            ],
            hoverBackgroundColor: [
                "#3ec556",
                "rgba(0,0,0,0)"
            ],
            borderWidth: [
                1, 0
            ]
        },
        {
            data: [12, 88],
            backgroundColor: [
                "red",
                "rgba(0,0,0,0)"
            ],
            hoverBackgroundColor: [
                "#3ec556",
                "rgba(0,0,0,0)"
            ],
            borderWidth: [
                1, 0
            ]
        }
    ]
};

var deliveredOpt = {
    cutoutPercentage: 72,
    animation: {
        animationRotate: true,
        duration: 2000
    },
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    }
};



var chart = new Chart($('#openedCanvas'), {
    type: deliveredData.datasets[0].data[0] == 0 ? 'doughnut' : 'RoundedDoughnut',
    data: deliveredData,
    options: deliveredOpt
});
// $(document).ready(function () {
//     $('.js-example-basic-single').select2();
// });

