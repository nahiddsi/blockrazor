import { Template } from 'meteor/templating';

Template.fundamentalMetrics.onRendered(function (){


  var radar = document.getElementById("radar").getContext('2d');
  radar.canvas.width = 800;
  radar.canvas.height = 600;
    var radarchart = new Chart(radar, {
        type: 'radar',
        data: {
          labels: ["Ongoing Development", "Code Quality", "Community", "Hash Power", "Settlement Speed", "Ease of Use", "Coin Distribution", "Transactions"],
          datasets: [
            {
              label: "1950",
              fill: true,
              backgroundColor: "rgba(255,120,50,0.2)",
              borderColor: "#FF6600",
              pointBorderColor: "#fff",
              pointStyle: "dot",
              pointBackgroundColor: "#FF0000",
              data: [6,7,2,2,7,8,1,3]
            },
            {
              label: "2",
              fill: false,
              backgroundColor: "#fff",
              borderColor: "#ccc",
              pointBorderColor: "#fff",
              borderWidth: 4,
              pointRadius: 0,
              pointBackgroundColor: "#fff",
              data: [10,10,10,10,10,10,10,10]
            },
            {
              label: "3",
              fill: false,
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 1,
              pointBorderColor: "#fff",
              pointBackgroundColor: "#fff",
              data: [0,0,0,0,0,0,0,0]
            }
          ]
        },
          options: {
            responsive: false,
            defaultFontColor: 'red',
          tooltips: {enabled: false},
          maintainAspectRatio: false,
          title: {display: false},
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              fontColor: 'red',
              display: true,
            }
          },
          scale: {
            pointLabels: {fontSize: 14},

          // Hides the scale
          display: true
      }
        }
    });

});

Template.fundamentalMetrics.events({
  'click #name': function () {
    if(Session.get('lastId')){document.getElementById(Session.get('lastId')).style.display = "none";}
    document.getElementById(this._id).style.display = "block";
    Session.set('lastId', this._id);


  }
});

Template.fundamentalMetrics.helpers({
  metricDescription: function () {
    return this.metricTag; //find metricTag data from collection
  },
  metrics: function() {
    var metrics = [{
      _id: "938274n5982735498",
      currencyName: "Bitcoin",
      name: "Ongoing Development",
      commitsYear: 1245,
      commits60day: 244,
      metricTag: "ongoingDevelopment"
    },
    {
      _id: "btyreybtrebret",
      name: "Code Quality",
      commitsYear: 1245,
      commits60day: 244
    },
    {
      _id: "73567567",
      name: "Community",
      commitsYear: 1245,
      commits60day: 244
    }];

    return metrics;
  }
});

//
// Template.metricContent.onRendered(function (){
//   // Session.set('thisId', this.data._id);
//   // if (Session.get('lastId')) {
//   //   document.getElementById(Session.get('lastId')).style.display = "none";
//   // }
//   // document.getElementById(this.data._id).style.display = "block";
//   // Session.set('lastId', this.data._id);
// });
