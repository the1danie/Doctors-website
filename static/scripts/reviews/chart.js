var ctx = document.getElementById("pieChart");
        Chart.defaults.font.size = 18;
        var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["Позитивные отзывы",  "Нейтральные отзывы","Негативные отзывы",],
        descr:[''],
        datasets: [{
            
            backgroundColor: [
                'red',   
                'blue',   
                'black'  
            ],
            data: [80, 10, 10],
            
        }]
        },
        options: {
            borderWidth:10,
            borderRadius:3,
            responsive: true, /* график будет масштабирован */
            plugins:{
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.formattedValue + '%';
                            return label;
                        }
                    },
                    displayColors: false, // Отключает отображение цветовых иконок
                    
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 16
                        }
                    },
                    
                },
            },
        },
        
    })