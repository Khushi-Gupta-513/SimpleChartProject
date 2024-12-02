script.js
const ctx = document.getElementById(barChart)

new Chart(
    ctx, {
        type: 'bar'
        data: {
            labels: ["Red","Blue","Yellow"],
            datasets: [
                {
                    label: "Votes",]
                    data: [12,9,3], 
                    backgroundColor: ["Red","Blue","Yellow"]
    
                    ]
                }
            ]
        }
    }

)
