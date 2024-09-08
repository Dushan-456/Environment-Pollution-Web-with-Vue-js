

new Vue({
    el: '#app',
    data: {
        posts: [
            {
                id: 1,

                comments: [
                    { id: 1, content: 'This is a great post!', author: 'Dushan' },
                    { id: 2, content: 'Thanks for sharing!', author: 'Kasun' },
                    { id: 3, content: 'Plastic Polution is....', author: 'Nimal' }
                ],
                newComment: { content: '', author: '' }
            },



           
        ]
    },
    methods: {
        submitComment(post) {
            if (post.newComment.content && post.newComment.author) {
                // Generate a unique ID for the new comment
                const newId = post.comments.length + 1;
                // Push the new comment to the comments array of this post
                post.comments.push({
                    id: newId,
                    content: post.newComment.content,
                    author: post.newComment.author
                });
                // Clear the form fields after submitting
                post.newComment.content = '';
                post.newComment.author = '';
            } else {
                alert('Please fill in all fields!');
            }
        }
    }
});

//contact form thank you
function thankyou() {
    document.getElementById('form').innerHTML="<h3>Thank You For Your<br>Response...<br>We will Contact You As soon as Posssible</h3>" ;
}
//Bolg post Like
function like() {
    let x = parseInt(document.getElementById('like').innerHTML);
    document.getElementById('like').innerHTML= x+1 ;
}
//Blog post disLike
function dislike() {
    let x = parseInt(document.getElementById('dislike').innerHTML);
    document.getElementById('dislike').innerHTML= x+1 ;
}

//Foot print cal

function calculateCarbonFootprint() {
    const electricityUsage = parseFloat(document.getElementById('electricity').value);
    const electricitySource = document.getElementById('electricity-source').value;
    const gasolineUsage = parseFloat(document.getElementById('gasoline').value);
    const publicTransportUsage = parseFloat(document.getElementById('publicTransport').value);

    const emissionFactors = {
      electricity: {
        grid: 0.6, // kg CO2 per kWh
        solar: 0, // Solar energy is considered zero emissions
        wind: 0, // Wind energy is considered zero emissions
        hydro: 0, // Hydro energy is considered zero emissions
        other: 0 // Other renewables are considered zero emissions
      },
      gasoline: 2.3, // kg CO2 per liter
      publicTransport: 0.1 // kg CO2 per kilometer
    };

    // Calculate carbon emissions for each activity
    const electricityEmission = electricityUsage * emissionFactors.electricity[electricitySource];
    const gasolineEmission = gasolineUsage * emissionFactors.gasoline;
    const publicTransportEmission = publicTransportUsage * emissionFactors.publicTransport;

    // Total carbon emissions
    const totalEmission = electricityEmission + gasolineEmission + publicTransportEmission;

    // Display result and    
    // Display emission breakdown
    document.getElementById('result').innerHTML = `
      <div class="emission-breakdown">
      <h1>Your total carbon footprint is: <strong>${totalEmission.toFixed(2)} kg CO2</strong></h1>
        <h3>Emission Breakdown:</h3>
        <ul>
          <li>Electricity: ${electricityEmission.toFixed(2)} kg CO2</li>
          <li>Gasoline: ${gasolineEmission.toFixed(2)} kg CO2</li>
          <li>Public Transport: ${publicTransportEmission.toFixed(2)} kg CO2</li>
        </ul>
        <div class="footavarage">
        <img src="images/footavarage.jpg" alt="">
    </div>
      </div>
    `;
  }