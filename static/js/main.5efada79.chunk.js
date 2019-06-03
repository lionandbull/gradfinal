(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(t){t.exports=[{_id:"VX",avgArrivalDelay:4.737705721003135,avgDepartureDelay:8.993485501567399,AvgTotal:13.731191222570533},{_id:"WN",avgArrivalDelay:4.3749636792570525,avgDepartureDelay:10.51718323281576,AvgTotal:14.892146912072814},{_id:"AA",avgArrivalDelay:3.4513721447256764,avgDepartureDelay:8.826106166761345,AvgTotal:12.277478311487021},{_id:"US",avgArrivalDelay:3.7062088424131026,avgDepartureDelay:6.08099967563059,AvgTotal:9.787208518043693},{_id:"UA",avgArrivalDelay:5.431593935741549,avgDepartureDelay:14.333055644179753,AvgTotal:19.7646495799213},{_id:"DL",avgArrivalDelay:.18675361236390797,avgDepartureDelay:7.313299819022722,AvgTotal:7.500053431386631}]},function(t){t.exports={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"}},,,,,function(t){t.exports={UA:"United",AA:"American",US:"US Airways",F9:"Frontier",B6:"JetBlue Airways",OO:"Skywest",AS:"Alaska",NK:"Spirit",WN:"Southwest",DL:"Delta",EV:"Atlantic Southeast",HA:"Hawaiian",MQ:"American Eagle",VX:"Virgin America"}},,function(t,e,a){t.exports=a(34)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(19),o=a.n(i),s=(a(29),a(17)),l=a(4),c=a(5),u=a(7),p=a(6),d=a(9),f=a(8),h=a(0),v=a(14),g=(a(30),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).state={usData:null},a.anchor=n.a.createRef(),a}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;Promise.all([fetch("https://cdn.jsdelivr.net/npm/us-atlas@2/us/states-10m.json").then(function(t){return t.json()})]).then(function(e){t.setState({usData:e[0]}),t.setMap(),t.updateAirports()})}},{key:"componentDidUpdate",value:function(){console.log(this.props.airports),this.updateAirports()}},{key:"setMap",value:function(){var t=this,e=function(t,e){return e[t]/r*100+1+"%"},a={left:10,top:10,right:10,bottom:10},r=960-a.left-a.right,n=680-a.top-a.bottom,i=e("left",a),o=e("top",a),s=e("right",a),l=e("bottom",a),c=h.l(this.anchor.current).append("svg").style("padding",o+" "+s+" "+l+" "+i).attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+(r+a.left+a.right)+" "+(n+a.top+a.bottom)).attr("id","svg-content-responsive").attr("class","graph-svg-placeholder"),u=h.e(),p=this.state.usData,d=h.l("#mapTooltip");d.append("rect").attr("width",60).attr("height",20).attr("fill","white").style("opacity",.5),d.append("text").attr("x",30).attr("dy","1.2em").style("text-anchor","middle").attr("font-size","12px").attr("font-weight","bold"),c.append("g").attr("class","feature").selectAll("path").data(v.a(p,p.objects.states).features).enter().append("path").attr("d",u).on("click",function(e){t.handleStateClick(t.props.stateMap[e.properties.name])}).on("mousemove",function(t){return d.style("top",h.c.pageY-100+"px").style("left",h.c.pageX+10+"px")}).on("mouseover",function(t){return d.text(t.properties.name),d.style("visibility","visible")}).on("mouseout",function(){return h.l(this).style("stroke",""),d.style("visibility","hidden")}),c.selectAll("text").data(v.a(p,p.objects.states).features).enter().append("svg:text").text(function(e){return t.props.stateMap[e.properties.name]}).attr("x",function(t){return u.centroid(t)[0]}).attr("y",function(t){return u.centroid(t)[1]}).attr("text-anchor","middle").attr("font-size","6pt"),c.append("path").attr("class","state-boundaries").datum(v.b(p,p.objects.states,function(t,e){return t!==e})).attr("class","mesh").attr("d",u),this.props.airports.forEach(function(t){t.LATITUDE=+t.LATITUDE,t.LONGITUDE=+t.LONGITUDE}),c.append("g").attr("id","mapG")}},{key:"updateAirports",value:function(){var t=this,e=this.props.airports;e.forEach(function(t){t.LATITUDE=+t.LATITUDE,t.LONGITUDE=+t.LONGITUDE});var a=h.d().scale(1280).translate([480,300]),r=h.l("#mapG"),n=h.o().duration(400),i=r.selectAll("circle").data(e,function(t){return t.AIRPORT});i.exit().attr("class","exit").attr("class","bubble").transition(n).attr("r",0).style("fill-opacity",1e-6).remove(),i.attr("class","update").attr("class","bubble").attr("r",5).attr("transform",function(t){var e=[];e.push(t.LONGITUDE),e.push(t.LATITUDE);var r=a(e);return r||(r=[1000.169335964292,190.40024748993005]),"translate("+r+")"}).on("click",function(e){t.handleAirportClick(e)}).append("title").text(function(t){return t.AIRPORT+", "+t.STATE}),i.enter().append("circle").attr("class","enter").attr("class","bubble").attr("r",5).attr("transform",function(t){var e=[];e.push(t.LONGITUDE),e.push(t.LATITUDE);var r=a(e);return r||(r=[1000.169335964292,190.40024748993005]),"translate("+r+")"}).on("click",function(e){t.handleAirportClick(e)}).on("mousemove",function(){h.l(this).style("stroke","black")}).on("mouseout",function(){h.l(this).style("stroke","")}).append("title").text(function(t){return t.AIRPORT+", "+t.STATE})}},{key:"handleAirportClick",value:function(t){this.props.onAirportClick(t)}},{key:"handleStateClick",value:function(t){this.props.onStateClick(t)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:this.anchor}),n.a.createElement("div",{id:"mapTooltip",className:"map-tooltip"}))}}]),e}(n.a.Component)),y=(a(31),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).state={usData:null},a.anchor=n.a.createRef(),a}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setBar2()}},{key:"componentDidUpdate",value:function(){this.updateAvgDelay2()}},{key:"updateAvgDelay2",value:function(){var t=this,e=this.props.avgDelay;e.sort(function(t,e){return t.AvgTotal-e.AvgTotal});var a=["avgArrivalDelay","avgDepartureDelay"],r=function(t,e){return e[t]/i*100+1+"%"},n={left:40,top:10,right:10,bottom:20},i=600-n.left-n.right,o=300-n.top-n.bottom,s=(r("left",n),r("top",n),r("right",n),r("bottom",n),h.l("#svg-g")),l=h.h().rangeRound([n.left,i-n.right]).padding(.2),c=h.i().rangeRound([o-n.bottom,n.top]),u=h.j().range(["#98abc5","#a05d56"]).domain(a);l.domain(e.map(function(t){return t._id})),s.select(".xaxis").attr("transform","translate(0,".concat(o-n.bottom,")")).transition().call(h.a(l)),c.domain([-1,h.f(e,function(t){return t.AvgTotal})+5]),s.select(".yaxis").transition().call(h.b(c)),u.domain(a);var p=s.select(".zaxis").selectAll("g").data(h.n().keys(a)(e),function(t){return t}),d=h.o().duration(400),f=h.l("#barTooltip").style("z-index","999");p.exit().attr("class","exit").transition(d).attr("y",20).style("fill-opacity",1e-6).remove(),p.attr("class","update").selectAll("rect").data(function(t){return t}).enter().transition(d).attr("x",function(t){return l(t.data._id)}).attr("y",function(t){return c(t[1])}).attr("height",function(t){return c(t[0])-c(t[1])}).attr("width",l.bandwidth()),p.enter().append("g").attr("fill",function(t){return u(t.key)}).attr("class","enter").selectAll("rect").data(function(t){return t}).enter().append("rect").transition(d).attr("x",function(t){return l(t.data._id)}).attr("y",function(t){return c(t[1])}).attr("height",function(t){return c(t[0])-c(t[1])}).attr("width",l.bandwidth()),h.m("rect").on("mousemove",function(){return h.l(this).style("stroke","black"),f.style("top",h.c.pageY-40+"px").style("left",h.c.pageX+10+"px")}).on("mouseout",function(){return h.l(this).style("stroke",""),f.style("visibility","hidden")}).on("mouseover",function(t){return f.text((t[1]-t[0]).toFixed(1)),f.style("visibility","visible")}).on("click",function(e){t.props.onClickAirline(e.data._id)})}},{key:"updateAvgDelay",value:function(){var t=function(t,e){return e[t]/a*100+1+"%"},e={left:40,top:10,right:10,bottom:20},a=400-e.left-e.right,r=250-e.top-e.bottom,n=(t("left",e),t("top",e),t("right",e),t("bottom",e),this.props.avgDelay);console.log(n);var i=h.l("#svg-g"),o=h.h().rangeRound([0,a]).padding(.2),s=h.i().rangeRound([r,0]);o.domain(n.map(function(t){return t._id})),i.select(".xaxis").attr("transform","translate(0,"+r+")").transition().call(h.a(o)),s.domain([h.g(n,function(t){return Number(t.avgArrivalDelay)})-2,h.f(n,function(t){return Number(t.avgArrivalDelay)})+2]),i.select(".yaxis").transition().call(h.b(s));var l=h.o().duration(400),c=i.selectAll("rect").data(n,function(t){return console.log(t),t});c.exit().attr("class","exit").attr("class","bar").transition(l).attr("y",60).style("fill-opacity",1e-6).remove(),c.attr("class","update").attr("class","bar").transition(l).attr("x",function(t){return o(t._id)}).attr("y",function(t){return s(Number(t.avgArrivalDelay))}).attr("width",o.bandwidth()).attr("height",function(t){return r-s(Number(t.avgArrivalDelay))}),c.enter().append("rect").attr("class","enter").attr("class","bar").transition(l).attr("x",function(t){return o(t._id)}).attr("y",function(t){return s(Number(t.avgArrivalDelay))}).attr("width",o.bandwidth()).attr("height",function(t){return r-s(Number(t.avgArrivalDelay))})}},{key:"setBar",value:function(){var t=this.props.avgDelay,e=function(t,e){return e[t]/r*100+1+"%"},a={left:40,top:10,right:10,bottom:20},r=400-a.left-a.right,n=250-a.top-a.bottom,i=e("left",a),o=e("top",a),s=e("right",a),l=e("bottom",a),c=h.l(this.anchor.current).append("svg").style("padding",o+" "+s+" "+l+" "+i).attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+(r+a.left+a.right)+" "+(n+a.top+a.bottom)).attr("id","svg-bar").attr("class","graph-svg-placeholder").append("g").attr("transform","translate("+a.left+","+a.top+")").attr("id","svg-g");c.append("g").classed("xaxis",!0),c.append("g").classed("yaxis",!0);var u=h.h().rangeRound([0,r]).padding(.2),p=h.i().rangeRound([n,0]);u.domain(t.map(function(t){return t._id})),c.select(".xaxis").attr("transform","translate(0,"+n+")").transition().call(h.a(u)),p.domain([h.g(t,function(t){return Number(t.avgArrivalDelay)})-2,h.f(t,function(t){return Number(t.avgArrivalDelay)})+2]),c.select(".yaxis").call(h.b(p)).append("text").attr("fill","#000").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.71em").attr("text-anchor","end").text("Average Delay (min)"),c.selectAll(".bar").data(this.props.avgDelay).enter().append("rect").attr("class","bar").attr("x",function(t){return u(t._id)}).attr("y",function(t){return p(Number(t.avgArrivalDelay))}).attr("width",u.bandwidth()).attr("height",function(t){return n-p(Number(t.avgArrivalDelay))})}},{key:"setBar2",value:function(){var t=this,e=this.props.avgDelay;e.sort(function(t,e){return t.AvgTotal-e.AvgTotal});var a=["avgArrivalDelay","avgDepartureDelay"],r=function(t,e){return e[t]/i*100+1+"%"},n={left:40,top:10,right:10,bottom:20},i=600-n.left-n.right,o=300-n.top-n.bottom,s=r("left",n),l=r("top",n),c=r("right",n),u=r("bottom",n),p=h.l(this.anchor.current).append("svg").style("padding",l+" "+c+" "+u+" "+s).attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+(i+n.left+n.right)+" "+(o+n.top+n.bottom)).attr("id","svg-bar").attr("class","graph-svg-placeholder").append("g").attr("transform","translate("+n.left+","+n.top+")").attr("id","svg-g");p.append("g").classed("xaxis",!0),p.append("g").classed("yaxis",!0),p.append("g").classed("zaxis",!0);var d=h.h().rangeRound([n.left,i-n.right]).padding(.2),f=h.i().rangeRound([o-n.bottom,n.top]),v=h.j().range(["#98abc5","#a05d56"]).domain(a);d.domain(e.map(function(t){return t._id})),p.select(".xaxis").attr("transform","translate(0,".concat(o-n.bottom,")")).transition().call(h.a(d)),f.domain([-1,h.f(e,function(t){return t.AvgTotal})+5]),p.select(".yaxis").call(h.b(f)).append("text").attr("x",2).attr("y",f(f.ticks().pop())+.5).attr("dy","0.32em").attr("fill","#000").attr("font-weight","bold").attr("text-anchor","start").text("min"),v.domain(a);var g=p.select(".zaxis").selectAll("g").data(h.n().keys(a)(e)).enter().append("g").attr("fill",function(t){return v(t.key)}).selectAll("rect").data(function(t){return t}).enter().append("rect").attr("class","bar").attr("x",function(t){return d(t.data._id)}).attr("y",function(t){return f(t[1])}).attr("height",function(t){return f(t[0])-f(t[1])}).attr("width",d.bandwidth()).on("click",function(e){t.props.onClickAirline(e.data._id)}),y=h.l("#barTooltip");g.on("mousemove",function(t){return y.style("top",h.c.pageY-40+"px").style("left",h.c.pageX+10+"px")}).on("mouseout",function(){return h.l(this).style("stroke",""),y.style("visibility","hidden")}).on("mouseover",function(t){return h.l(this).style("stroke","black"),y.text((t[1]-t[0]).toFixed(1)),y.style("visibility","visible")});var m=p.append("g").attr("font-family","sans-serif").attr("font-size",10).attr("text-anchor","end").selectAll("g").data(a.slice().reverse()).enter().append("g").attr("transform",function(t,e){return"translate(0,"+20*e+")"});m.append("rect").attr("x",i-19).attr("width",19).attr("height",19).attr("fill",v),m.append("text").attr("x",i-24).attr("y",9.5).attr("dy","0.32em").text(function(t){return t})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:this.anchor}))}}]),e}(n.a.Component)),m=(a(32),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).state={text:null},a.anchor=n.a.createRef(),a}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;Promise.all([fetch("https://aukt2i8vp5.execute-api.us-east-1.amazonaws.com/Prod/main",{method:"post",body:JSON.stringify({type:"findOneTweet",airline:"",isAll:!0})}).then(function(t){return t.json()}).catch(function(t){return console.log(t)})]).then(function(e){var a=JSON.parse(JSON.parse(e[0].tweets)).text;t.setState({text:a.split()}),t.setBar(),t.updateAvgDelay(t.state.text)})}},{key:"componentDidUpdate",value:function(){null===this.props.text?this.updateAvgDelay(this.state.text):this.updateAvgDelay(this.props.text)}},{key:"updateAvgDelay",value:function(t){var e=t,a=h.l("#text-g"),r=h.o().duration(750),n=a.selectAll("text").data(e,function(t){return t});n.exit().attr("class","exit").transition(r).attr("y",60).style("fill-opacity",1e-6).style("fill","brown").remove(),n.attr("class","update").attr("y",0).style("fill-opacity",1).style("fill","#333").transition(r).attr("x",function(t,e){return 32*e}),n.enter().append("text").attr("class","enter").attr("dy",".35em").attr("y",-60).attr("x",function(t,e){return 32*e}).style("fill-opacity",1e-6).style("fill","green").style("font","bold 20px monospace").text(function(t){return t}).transition(r).attr("y",0).style("fill-opacity",1)}},{key:"setBar",value:function(){h.l(this.anchor.current).append("svg").attr("width",1800).attr("height",100).attr("id","svg-text").append("g").attr("transform","translate(100,50)").attr("id","text-g")}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:this.anchor}))}}]),e}(n.a.Component)),b=a(20),A=a.n(b),x=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).state={usData:null,tweets:null},a.anchor=n.a.createRef(),a}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;Promise.all([fetch("https://aukt2i8vp5.execute-api.us-east-1.amazonaws.com/Prod/main",{method:"post",body:JSON.stringify({type:"queryTweets",airline:"Virgin America",isAll:!1})}).then(function(t){return t.json()}).catch(function(t){return console.log(t)})]).then(function(e){var a=JSON.parse(JSON.parse(e[0].tweets));t.setState({tweets:a}),t.buildSvg(),t.setWordCloud(a)})}},{key:"componentDidUpdate",value:function(){null===this.props.tweets?this.setWordCloud(this.state.tweets):this.setWordCloud(this.props.tweets)}},{key:"buildSvg",value:function(){var t=function(t,e){return e[t]/a*100+1+"%"},e={left:5,top:10,right:10,bottom:10},a=600-e.left-e.right,r=300-e.top-e.bottom,n=t("left",e),i=t("top",e),o=t("right",e),s=t("bottom",e);h.l(this.anchor.current).append("svg").style("padding",i+" "+o+" "+s+" "+n).style("background-color","black").style("margin-left","70px").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+(a+e.left+e.right)+" "+(r+e.top+e.bottom)).attr("id","svg-cloud").attr("class","graph-svg-placeholder"),h.l("#svg-cloud").attr("width",a).attr("height",r).append("g").attr("transform","translate(300,150)").attr("id","cloud-g")}},{key:"setWordCloud",value:function(t){A()().size([600,300]).words(t).padding(5).rotate(function(){return 90*~~(2*Math.random())}).font("Impact").fontSize(function(t){return t.frequency}).on("end",function(t){var e=h.j(h.k[9]),a=h.l("#cloud-g").selectAll("text").data(t,function(t){return t.text});a.exit().attr("class","exit").transition().duration(100).style("fill-opacity",0).attr("font-size",1).remove(),a.attr("class","update").transition().duration(100).style("font-size",function(t){return 3*t.frequency+10+"px"}).style("fill",function(t,a){return e(a)}).attr("transform",function(t){return"translate("+[t.x,t.y]+")"}).style("fill-opacity",1),a.enter().append("text").attr("class","enter").transition().duration(100).style("font-size",function(t){return 3*t.frequency+10+"px"}).style("fill",function(t,a){return e(a)}).attr("transform",function(t){return"translate("+[t.x,t.y]+")"}).style("fill-opacity",1).attr("text-anchor","middle").attr("font-size",1).text(function(t){return t.text})}).start()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:this.anchor,style:{marginTop:-30}}))}}]),e}(n.a.Component),D=a(36),k=a(37),O=a(38),w=a(15),S=a(16),N=a(21),T={};Object.keys(S).forEach(function(t){T[S[t]]=t});var j=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(p.a)(e).call(this))).state={airports:null,airportsSlice:null,avgDelay:null,text:null,tweets:null,airlines_dict:Object.assign(N)},t.handleMapStateClick=t.handleMapStateClick.bind(Object(d.a)(t)),t.handleShowAllAirports=t.handleShowAllAirports.bind(Object(d.a)(t)),t.handleAirportClick=t.handleAirportClick.bind(Object(d.a)(t)),t.handleAirlineClick=t.handleAirlineClick.bind(Object(d.a)(t)),t}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;Promise.all([fetch("https://aukt2i8vp5.execute-api.us-east-1.amazonaws.com/Prod/main",{method:"post",body:JSON.stringify({type:"basic"})}).then(function(t){return t.json()})]).then(function(e){t.setState({airports:JSON.parse(JSON.parse(e[0].airports)),airportsSlice:JSON.parse(JSON.parse(e[0].airports)),avgDelay:w})})}},{key:"handleShowAllAirports",value:function(){this.setState({airportsSlice:this.state.airports,avgDelay:w})}},{key:"handleAirlineClick",value:function(t){var e=this,a=["https://aukt2i8vp5.execute-api.us-east-1.amazonaws.com/Prod/main"],r={type:"queryTweets",airline:this.state.airlines_dict[t],isAll:!1},n={type:"findOneTweet",airline:this.state.airlines_dict[t],isAll:!1};Promise.all([fetch(a[0],{method:"post",body:JSON.stringify(r)}).then(function(t){return t.json()}).catch(function(t){return console.log(t)}),fetch(a[0],{method:"post",body:JSON.stringify(n)}).then(function(t){return t.json()}).catch(function(t){return console.log(t)})]).then(function(t){var a=JSON.parse(JSON.parse(t[0].tweets)),r=JSON.parse(JSON.parse(t[1].tweets)).text,n=a.map(function(t){return"\ud83d\ude4f"===t.text&&(t.frequency=0),t});e.setState({tweets:n,text:r.split()})})}},{key:"handleAirportClick",value:function(t){var e=this,a=[];a.push(t.IATA_CODE);var r={type:"queryAirports",isDeparture:!0,airports:a};Promise.all([fetch("https://aukt2i8vp5.execute-api.us-east-1.amazonaws.com/Prod/main",{method:"post",body:JSON.stringify(r)}).then(function(t){return t.json()}).catch(function(t){return console.log(t)})]).then(function(t){var a=JSON.parse(JSON.parse(t[0].delay));a.forEach(function(t){for(var e=0,a=Object.entries(t);e<a.length;e++){var r=a[e],n=Object(s.a)(r,2),i=n[0],o=n[1];!isNaN(o)&&o<0&&(t[i]=0)}t.AvgTotal=t.avgArrivalDelay+t.avgDepartureDelay}),e.setState({avgDelay:a})})}},{key:"handleMapStateClick",value:function(t){var e=this,a=this.state.airports.filter(function(e){return e.STATE===t}),r=[];a.forEach(function(t){r.push(t.IATA_CODE)});var n=["https://aukt2i8vp5.execute-api.us-east-1.amazonaws.com/Prod/main"],i={type:"queryAirports",isDeparture:!0,airports:r};Promise.all([fetch(n[0],{method:"post",body:JSON.stringify(i)}).then(function(t){return t.json()}).catch(function(t){return console.log(t)}),fetch(n[0],{method:"post",body:JSON.stringify({type:"findOneTweet",airline:"",isAll:!0})}).then(function(t){return t.json()}).catch(function(t){return console.log(t)})]).then(function(t){var r=JSON.parse(JSON.parse(t[0].delay)),n=JSON.parse(JSON.parse(t[1].tweets));r.forEach(function(t){for(var e=0,a=Object.entries(t);e<a.length;e++){var r=a[e],n=Object(s.a)(r,2),i=n[0],o=n[1];!isNaN(o)&&o<0&&(t[i]=0)}t.AvgTotal=t.avgArrivalDelay+t.avgDepartureDelay}),e.setState({avgDelay:r,airportsSlice:a,text:n.text.split()})})}},{key:"render",value:function(){return this.state.airports?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"barTooltip",className:"bar-tooltip"}),n.a.createElement(D.a,{className:"justify-content-md-center"},n.a.createElement(k.a,{md:"auto"},n.a.createElement(O.a,{variant:"outline-info",onClick:this.handleShowAllAirports}," Show all airports "))),n.a.createElement(D.a,null,n.a.createElement(m,{text:this.state.text})),n.a.createElement(D.a,null,n.a.createElement(k.a,{md:6},n.a.createElement(g,{stateMap:T,airports:this.state.airportsSlice,onStateClick:this.handleMapStateClick,onAirportClick:this.handleAirportClick})),n.a.createElement(k.a,{md:4},n.a.createElement(x,{tweets:this.state.tweets}),n.a.createElement(y,{avgDelay:this.state.avgDelay,onClickAirline:this.handleAirlineClick})))):null}}]),e}(n.a.Component);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[23,1,2]]]);
//# sourceMappingURL=main.5efada79.chunk.js.map