(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{43:function(e,t,n){},64:function(e,t,n){e.exports=n(98)},98:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(22),r=n.n(i),o=n(47),c=n(35),s=n(36),u=n(17),h=n(41),d=n(42),m=(n(43),n(50),n(46)),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={show:!0},a.handleItemCompleted=a.handleItemCompleted.bind(Object(u.a)(a)),a.handleItemDelete=a.handleItemDelete.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.content;return l.a.createElement(a.Fragment,null,l.a.createElement("li",{className:this.state.show?"todo":"achieve"},e),l.a.createElement(m.a,{onClick:this.handleItemCompleted},"\u5b8c\u6210"),l.a.createElement(m.a,{onClick:this.handleItemDelete},"\u5220\u9664"),l.a.createElement("br",null),l.a.createElement("br",null))}},{key:"handleItemCompleted",value:function(){this.setState({show:!this.state.show})}},{key:"handleItemDelete",value:function(){this.props.deleteItem(this.props.index),this.setState({show:!0})}}]),n}(a.Component),f=n(100),v=window.localStorage,b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={inputValue:"",list:["\u5b66\u4e60","\u5de5\u4f5c","\u7761\u89c9"]},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleBtnClick=a.handleBtnClick.bind(Object(u.a)(a)),a.handleItemDelete=a.handleItemDelete.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=v.getItem("todoList");e&&this.setState({list:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){v.setItem("todoList",JSON.stringify(this.state.list))}},{key:"render",value:function(){return l.a.createElement(a.Fragment,null,l.a.createElement("div",{style:{overflow:"hidden"}},l.a.createElement(m.a,{type:"primary",style:{float:"right"}},l.a.createElement("a",{href:""},"\u767b\u5f55")),l.a.createElement(m.a,{type:"primary",style:{float:"right"}},l.a.createElement("a",{href:""},"\u6ce8\u518c"))),l.a.createElement("div",{style:{width:"300px",margin:"0 auto"}},l.a.createElement("label",{htmlFor:"insertArea",style:{width:"300px",fontSize:"50px",margin:"0 auto"}},"\u4eca\u65e5\u5f85\u529e"),l.a.createElement("br",null),l.a.createElement("div",{style:{overflow:"hidden"}},l.a.createElement(f.a,{id:"insertArea",placeholder:"\u8bf7\u8f93\u5165\u5f85\u529e\u4e8b\u9879",style:{width:"200px",marginRight:"20px",float:"left"},value:this.state.inputValue,onChange:this.handleInputChange}),l.a.createElement(m.a,{type:"primary",shape:"round",onClick:this.handleBtnClick},"\u63d0\u4ea4                ")),l.a.createElement("ol",null,this.getTodoItem())))}},{key:"getTodoItem",value:function(){var e=this;return this.state.list.map((function(t,n){return l.a.createElement(a.Fragment,{key:n},l.a.createElement(p,{index:n,content:t,deleteItem:e.handleItemDelete,className:"pedding"}))}))}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState((function(){return{inputValue:t}}))}},{key:"handleBtnClick",value:function(){this.setState((function(e){if(e.inputValue.length>0)return{list:[].concat(Object(o.a)(e.list),[e.inputValue]),inputValue:""}}))}},{key:"handleItemDelete",value:function(e){this.setState((function(t){var n=Object(o.a)(t.list);return n.splice(e,1),{list:n}}))}}]),n}(a.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.81fbda80.chunk.js.map