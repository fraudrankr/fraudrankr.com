$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            events: {
                load: function () {
                    
                    // Draw the flow chart
                    var ren = this.renderer,
                        //colors = Highcharts.getOptions().colors,
                        colors = [
                            '#ed9c28', // orange
                            '#3276b1', // blue
                            '#47a447', // green
                            '#39b3d7' // light blue
                        ],
                        rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                        leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];
                    
                    // Separator, collection from service
                    ren.path(['M', 175, 40, 'L', 175, 330])
                        .attr({
                            'stroke-width': 2,
                            stroke: 'silver',
                            dashstyle: 'dash'
                        })
                        .add();
                    
                    // Separator, score from service
                    ren.path(['M', 350, 40, 'L', 350, 330])
                        .attr({
                            'stroke-width': 2,
                            stroke: 'silver',
                            dashstyle: 'dash'
                        })
                        .add();
                    
                    // Headers
                    ren.label('Event collection', 20, 40)
                        .css({
                            fontWeight: 'bold'
                        })
                        .add();
                    ren.label('FraudRankr', 220, 40)
                        .css({
                            fontWeight: 'bold'
                        })
                        .add();
                    ren.label('Fraud score', 440, 40)
                        .css({
                            fontWeight: 'bold'
                        })
                        .add();
        
                    // website label
                    ren.label('Website', 20, 82)
                        .attr({
                            fill: colors[0],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white'
                        })
                        .add()
                        .shadow(true);
                    
                    // Arrow from website to FraudRankr
                    ren.path(rightArrow)
                         .attr({
                             'stroke-width': 2,
                             stroke: colors[3]
                         })
                        .translate(95, 95)
                        .add();
                             
                    ren.label('via JavaScript', 90, 75)
                        .css({
                            fontSize: '10px',
                            color: colors[3]
                        }) 
                        .add();
                    
                    ren.label('FraudRankr<br/>', 210, 82)
                        .attr({
                            r: 5,
                            width: 100,
                            height: 150,
                            fill: colors[1]
                        })
                        .css({
                            color: 'white',
                            fontWeight: 'bold'
                        })
                        .add();
                    
                    
              
            
                    
                    // Browser label
                    ren.label('Servers', 20, 180)
                        .attr({
                            fill: colors[0],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '100px'
                        })
                        .add()
                        .shadow(true);
                    
                    
                    
                    // Arrow from CURL to FraudRankr
                    ren.path(rightArrow)
                         .attr({
                             'stroke-width': 2,
                             stroke: colors[1]
                         })
                        .translate(95, 205)
                         .add();
                             
                    ren.label('via REST API', 90, 185)
                        .css({
                            color: colors[1],
                            fontSize: '10px'
                        })
                        .add();
                    
                                       
                    // Script label
                    ren.label('Servers', 450, 132)
                        .attr({
                            fill: colors[2],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '100px'
                        })
                        .add()
                        .shadow(true);
                    
                    // Arrow from Servers to FraudRankr
                    ren.path(leftArrow)
                         .attr({
                             'stroke-width': 2,
                             stroke: colors[2]
                         })
                        .translate(330, 140)
                         .add();
                             
                    ren.label('via REST API', 355, 120)
                        .css({
                            color: colors[2],
                            fontSize: '10px'
                        })
                        .add();
                    
                    // Arrow from FraudRankr to Servers
                    ren.path(rightArrow)
                         .attr({
                             'stroke-width': 2,
                             stroke: colors[2]
                         })
                        .translate(330, 150)
                         .add();
                             
                 
                    
                    
                }
            }
        },
        title: {
            text: 'FraudRankr from events to scoring'
        }
            
    });
});
