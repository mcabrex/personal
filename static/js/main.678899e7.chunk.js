(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(15),n(1)),s=n(2),l=n(5),u=n(3),p=n(4),m=function(e){return r.a.createElement("div",{className:"bar-black"},"hey.")},h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).state={position:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.scene,t=this.props.position;this.setState({position:t}),setTimeout(function(){e.style.height="10vh"},500)}},{key:"render",value:function(){var e=this.state.position;return r.a.createElement("div",{ref:"scene",className:"scene-".concat(e)})}}]),t}(a.Component),d=n(6),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).state={projectName:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.imageurl,n=e.projectName;e.width;this.refs.projectCover.style.backgroundImage=t,this.setState({projectName:n})}},{key:"render",value:function(){return r.a.createElement("div",{ref:"projectCover",id:this.state.projectName,className:"projects-container-display"})}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).state={project:{},projectClicked:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.projectInfo,t=this.refs.projectCover;this.refs.projectTitle.style.color=e.color,t.style.backgroundImage=e.backgroundImageUrl,this.setState({project:e})}},{key:"render",value:function(){var e=this.state.project;return r.a.createElement("div",{ref:"projectCover",className:"project-slide"},r.a.createElement("div",{onClick:this.props.clickEvent,className:"project-slide-cover"},r.a.createElement("div",{ref:"projectTitle",className:"project-slide-cover-title"},e.name),r.a.createElement("div",{className:"project-slide-cover-tech"},e.technologies),r.a.createElement("div",{className:"project-slide-cover-description"},e.description),e.links?e.links.map(function(t,n){return r.a.createElement("a",{key:"".concat(e.name,"-link-").concat(n),rel:"noopener noreferrer",href:t.href,target:"_blank",className:"project-slide-cover-link"},t.link)}):null))}}]),t}(a.Component),f=[{name:"Tabtracker",technologies:"Vue.js, Vuex, Vuetify Express, Sequelize, SQLite, Webpack",description:"Comprehensive fullstack website clone for keeping track of guitar tabs and songs, created using Vue and SQLite",backgroundImageUrl:"url('./cover-images/TabTracker.png')",color:"rgb(1,92,147)",links:[{href:"https://github.com/mcabrex/tabtracker",link:"github.com/mcabrex/tabtracker"}]},{name:"TheoryScript",technologies:"React.js, React, SCSS, Jest, Heroku",description:"Web application for the realization of functional music theory, created with create-react-app and deployed through Heroku",backgroundImageUrl:"url('./cover-images/TheoryScript.png')",color:"rgb(0,196,179)",links:[{href:"https://theoryscript.herokuapp.com/",link:"theoryscript.herokuapp.com\xa0"}]},{name:"Crossover",technologies:"React, Firebase, Cloudinary, Webpack, SCSS",description:"Collaborative comic generator for users to take turns creating an original comic, deployed and stored through Firebase",backgroundImageUrl:"url('./cover-images/Crossover.png')",color:"rgb(223,159,38)",links:[{href:"https://github.com/mdnyc2017/capstoneCrossover",link:"github.com/mdnyc2017/capstoneCrossover"}]},{name:"Dungeon Master",technologies:"Webpack, React, Redux, Express, PostgresSQL, dnd5eAPI",description:"A web application for DMs to use in maintaining Dungeons and Dragons campaign information. (IN PROGRESS)",backgroundImageUrl:"url('./cover-images/DungeonMaster.png')",color:"rgb(121,0,0)",links:[{href:"https://dee-em.herokuapp.com/",link:"dee-em.herokuapp.com"},{href:"https://github.com/mcabrex/dem",link:"github.com/mcabrex/dem"}]}],v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentProject:{},projectList:[],projectClicked:!1},n.handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({projectList:f})}},{key:"handleClick",value:function(e){var t=e.target.id,n=this.state.projectClicked,a=this.state.projectList,r={};a.forEach(function(e){e.name===t&&(r=e)}),"projects-container"!==e.target.className&&this.setState({projectClicked:!n,currentProject:r,width:n?"10vw":"65vw"})}},{key:"render",value:function(){var e=this.state,t=e.currentProject,n=e.projectClicked,a=e.projectList;return r.a.createElement("div",{onClick:this.handleClick,className:"projects-container"},n?r.a.createElement(b,{clickEvent:this.handleClick,projectInfo:t}):a.map(function(e){var t=e.backgroundImageUrl;return r.a.createElement(k,{key:e.name,projectName:e.name,imageurl:t})}))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"{  }"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t="Mario Leo Cabardo",n=this.state.title.split(""),a="",r=200,c=function(t){return setTimeout(function(){n.splice(n.length-2,0,t),a=n.join(""),e.setState({title:a})},r)},o=0;o<t.length;o++){c(t[o]),r+=100}}},{key:"render",value:function(){var e=this.state.title;return r.a.createElement("h1",{className:"title-title"},e)}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={description:""},n.handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n.handleLinks=n.handleLinks.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs,t=e.carousel,n=e.description,a=e.links;setTimeout(function(){n.style.opacity=1},2500),setTimeout(function(){t.style.opacity=1,a.style.opacity=1},4200),this.setState({description:"developer. engineer. another buzzword."})}},{key:"handleClick",value:function(e){var t=e.target.style.backgroundImage,n=t.slice(19,t.length-6),a=this.state.projects;this.setState({projectClicked:!0,currentProject:a[n]})}},{key:"handleLinks",value:function(e){this.refs.links.style.right="0vw"}},{key:"render",value:function(){var e=this.state.description;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement(j,null),r.a.createElement("h2",{ref:"description",className:"title-description"},e)),r.a.createElement("div",{ref:"carousel",className:"carousel"},r.a.createElement(v,null)),r.a.createElement("div",{onClick:this.handleLinks,ref:"links",className:"links"},"Some Links ->",r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/mcabrex",target:"_blank",className:"title-links"},"github.com/mcabrex"),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/mcabardo/",target:"_blank",className:"title-links"},"linkedin.com/in/mcabardo\xa0")))}}]),t}(a.Component),y=(n(17),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={opened:!0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({opened:!1})},3e3)}},{key:"render",value:function(){var e=this.state.opened;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{position:"top"}),r.a.createElement(h,{position:"bottom"})):r.a.createElement("div",{ref:"app",className:"App"},r.a.createElement(m,null),r.a.createElement(g,null),r.a.createElement(m,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.678899e7.chunk.js.map