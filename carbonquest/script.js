const barCanvas = document.getElementById("emissionsBarChart");

new Chart(barCanvas, {
    type: "bar",

    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

        datasets: [{
            label: "Carbon emissions (kg CO2)",
            data: [8, 6, 9, 7, 4, 3],
            backgroundColor: "#31945a",
            borderRadius: 6
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: true,

        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "kg CO2"
                }
            }
        }
    }
});

const pieCanvas = document.getElementById("emissionsPieChart");

new Chart(pieCanvas, {
    type: "pie",

    data: {
        labels: ["Transport", "Food", "Energy"],

        datasets: [{
            data: [55, 30, 15],

            backgroundColor: [
                "#31945a",
                "#a5d6b2",
                "#e6c76a"
            ],
            
            borderWidth: 2,
            borderColor: "#ffffff"
        }]
    },

    options: {
        responsive: true,
        plugins: {
            legend:{
                position: "bottom"
        }
    }
}
});