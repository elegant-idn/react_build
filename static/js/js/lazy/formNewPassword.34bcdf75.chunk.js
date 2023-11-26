"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[689],{12595:(s,e,a)=>{a.d(e,{Z:()=>o});var r=a(47313),t=a(46417);const n=s=>{let{error:e,label:a,id:n,name:o,type:d,handleChange:i,successResend:l,resendActivationLink:c,resendActivationEmail:h}=s;const[m,p]=(0,r.useState)({showPassword:!1});return(0,t.jsxs)("div",{className:"form__group",children:[(0,t.jsx)("input",{className:e?"errorInput string optional form__field":"string optional form__field",onChange:i,name:o,maxLength:"255",id:n,placeholder:" ",type:"password"!==d?d:m.showPassword?"text":"password",size:"50"}),"password"===d&&(0,t.jsx)("i",{className:m.showPassword?"eye eye-opened":"eye eye-closed",onClick:()=>p({...m,showPassword:!m.showPassword})}),(0,t.jsx)("label",{className:"string optional form__label",htmlFor:n,children:a}),e&&(0,t.jsxs)("span",{className:"errorText",children:[" ",e,".",c&&(0,t.jsx)("span",{onClick:h,className:"resendActivationLink",children:c})]}),l&&!e&&(0,t.jsx)("span",{className:"success",children:l})]})};n.defaultProps={};const o=n},82113:(s,e,a)=>{a.r(e),a.d(e,{FormNewPassword:()=>c,default:()=>h});var r=a(47313),t=a(72231),n=a(12595),o=a(78081),d=a(72905),i=a(76233),l=a(46417);class c extends r.Component{constructor(s){super(s),this.state={error:{password:"",password_confirmation:""},message:""},this.closeLogin=this.closeLogin.bind(this),this.newPasswordSend=this.newPasswordSend.bind(this),this.handleChangeNewPassword=this.handleChangeNewPassword.bind(this)}closeLogin(){t.mW.push("/")}handleChangeNewPassword(s){let{name:e,value:a}=s.target,{error:r}=this.state;/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(a.trim())?$(s.target).parents(".input.full").find(".statusBarPassword").css({background:"#00cb94"}):$(s.target).parents(".input.full").find(".statusBarPassword").css({background:"#ff0000"}),r[e]=null,this.setState({error:r})}newPasswordSend(s){s.preventDefault();let e=this.props.params.hash,a="/api/reset/".concat(e),r=new FormData(document.forms.newPasswordForm);document.getElementById("spinner-box-load").style.display="block",axios.post(a,r).then((s=>{if(document.getElementById("spinner-box-load").style.display="none","true"===s.data.status)document.querySelectorAll(".simform input:not([type=submit])").forEach((s=>s.value="")),this.setState({message:s.data.message});else{let e,a,r=s.data.message;r&&(e=a=r),this.setState({error:{...this.state.error,password:e,password_confirmation:a}})}})).catch((s=>{document.getElementById("spinner-box-load").style.display="none";let e,a,r=s.response.data.errors;r&&r.password&&(e=a=r.password[0]),this.setState({error:{...this.state.error,password:e,password_confirmation:a}})}))}render(){return(0,l.jsx)("div",{className:"resetPassword",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"col-md-8 col-md-push-2 resetPassword-wrap",children:[this.state.message&&(0,l.jsx)("p",{className:"message",children:this.state.message}),(0,l.jsx)("div",{className:"circle"}),(0,l.jsx)("p",{className:"title",children:"Passwort \xe4ndern"}),(0,l.jsxs)("form",{acceptCharset:"utf-8",action:"#",className:"simform",name:"newPasswordForm",onSubmit:this.newPasswordSend,children:[(0,l.jsxs)("div",{className:"sminputs",children:[(0,l.jsxs)("div",{className:"input full",children:[(0,l.jsx)(n.Z,{error:this.state.error.password,id:"new-password",name:"password",type:"password",placeholder:"Neues Passwort",label:"Neues Passwort",handleChange:this.handleChangeNewPassword}),(0,l.jsx)("div",{className:"statusBarPassword"})]}),(0,l.jsx)("div",{className:"input full",children:(0,l.jsx)(n.Z,{error:this.state.error.password_confirmation,id:"confirm_password",name:"password_confirmation",type:"password",placeholder:"Passwort best\xe4tigen",label:"Passwort best\xe4tigen",handleChange:this.handleChangeNewPassword})})]}),(0,l.jsx)("div",{className:"simform-actions",children:(0,l.jsxs)("button",{className:"btn",children:["Senden",(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})})]})]})})})}}c.defaultProps={};const h=(0,o.$j)((function(s){return{}}),(function(s){return{userActions:(0,d.DE)(i,s)}}),null,{pure:!1})(c)}}]);