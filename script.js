const ctx = document.getElementById('barChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Black"],
        datasets: [
            {
                label: "Votes",
                data: [12, 9, 3, 10],
                backgroundColor: ["red", "blue", "yellow"],
                borderColor: ["darkred", "darkblue", "gold"],
                borderWidth: 2
            }
        ]
    }
});
