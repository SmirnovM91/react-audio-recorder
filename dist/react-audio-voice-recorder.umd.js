(function(){"use strict";try{if(typeof document!="undefined"){var i=document.createElement("style");i.appendChild(document.createTextNode(".audio-recorder{display:flex;align-items:center;flex-direction:column}.audio-recorder-button-container{position:relative;display:flex;align-items:center;justify-content:center}.audio-recorder-button{color:#000;padding:24px;width:80px;height:80px;background-color:#6938ef;border-radius:50%;z-index:1}.audio-recorder-button-status{padding:24px;width:80px;height:80px;background-color:#f6898280;border-radius:50%;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite;position:absolute}.audio-recorder-timer{margin-top:16px;font-size:16px;font-weight:600;line-height:1.2;display:flex;align-items:center}.audio-recorder-options{height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording .audio-recorder-button-status{transition:all .2s ease-out;width:70px;height:70px}.recording .audio-recorder-button{background-color:#f04438}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1;width:90px;height:90px}50%{opacity:1;width:80px;height:80px}to{opacity:1;width:90px;height:90px}}.audio-recorder-timer-dot{width:8px;height:8px;background-color:#f04438;border-radius:50%;margin-right:4px}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(j,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],t):(j=typeof globalThis<"u"?globalThis:j||self,t(j.AudioRecorder={},j.React))})(this,function(j,t){"use strict";const N=(i=>i&&typeof i=="object"&&"default"in i?i:{default:i})(t),x=(i="default")=>{const[r,e]=t.useState(!1),[n,D]=t.useState(!1),[A,y]=t.useState(0),M=t.useRef(),[d,a]=t.useState(),[l,z]=t.useState(),T=()=>{const u=setInterval(()=>{y(I=>I+1)},1e3);a(u)},g=()=>{d!=null&&clearInterval(d),a(void 0)};return{startRecording:t.useCallback(u=>{d==null&&navigator.mediaDevices.getUserMedia({audio:{deviceId:i}}).then(I=>{var k,E,b;const c=[],m=MediaRecorder.isTypeSupported("audio/webm")?"audio/webm":"audio/mp4";M.current=new MediaRecorder(I,{mimeType:m}),(k=M.current)==null||k.addEventListener("dataavailable",o=>{o.data.size>0&&c.push(o.data)}),(E=M.current)==null||E.addEventListener("stop",()=>{var o;z(new Blob(c,{type:(o=M.current)==null?void 0:o.mimeType})),M.current=null}),(b=M.current)==null||b.start(),T(),e(!0)}).catch(I=>{u&&u(I)})},[d,i]),stopRecording:()=>{var u;(u=M==null?void 0:M.current)==null||u.stop(),g(),y(0),e(!1),D(!1)},togglePauseResume:()=>{var u,I;n?(D(!1),(u=M==null?void 0:M.current)==null||u.resume(),T()):(D(!0),g(),(I=M==null?void 0:M.current)==null||I.pause())},recordingBlob:l,isRecording:r,isPaused:n,recordingTime:A,mediaRecorder:M.current}},s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMTguNDk5OCA0Ljg5NTFIMTguNDk5OEMxOS42MDY0IDQuODk1MSAyMC42Njc3IDUuMzM0NyAyMS40NTAxIDYuMTE3MThDMjIuMjMyNiA2Ljg5OTY2IDIyLjY3MjIgNy45NjA5MyAyMi42NzIyIDkuMDY3NTJWMThDMjIuNjcyMiAxOS4xMDY2IDIyLjIzMjYgMjAuMTY3OSAyMS40NTAxIDIwLjk1MDNDMjAuNjY3NyAyMS43MzI4IDE5LjYwNjQgMjIuMTcyNCAxOC40OTk4IDIyLjE3MjRDMTcuOTUxOSAyMi4xNzI0IDE3LjQwOTMgMjIuMDY0NSAxNi45MDMxIDIxLjg1NDhDMTYuMzk2OSAyMS42NDUxIDE1LjkzNjkgMjEuMzM3OCAxNS41NDk1IDIwLjk1MDRDMTUuMTYyIDIwLjU2MjkgMTQuODU0NyAyMC4xMDMgMTQuNjQ1IDE5LjU5NjdMMTMuMzQ5MiAyMC4xMzM1TDE0LjY0NSAxOS41OTY3QzE0LjQzNTMgMTkuMDkwNSAxNC4zMjc0IDE4LjU0NzkgMTQuMzI3NCAxOFY5LjA2NzVDMTQuMzI3NCA3Ljk2MDkyIDE0Ljc2NyA2Ljg5OTY1IDE1LjU0OTUgNi4xMTcxN0MxNi4zMzE5IDUuMzM0NjkgMTcuMzkzMiA0Ljg5NTEgMTguNDk5OCA0Ljg5NTFaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5Ii8+CjxwYXRoIGQ9Ik0xOC40OTk4IDMuNDg0NzFIMTguNDk5OEMxOS45ODA1IDMuNDg0NzEgMjEuNDAwNSA0LjA3MjkgMjIuNDQ3NCA1LjExOTg4QzIzLjQ5NDQgNi4xNjY4NiAyNC4wODI2IDcuNTg2ODcgMjQuMDgyNiA5LjA2NzUyVjE4QzI0LjA4MjYgMTkuNDgwNyAyMy40OTQ0IDIwLjkwMDcgMjIuNDQ3NCAyMS45NDc2QzIxLjQwMDUgMjIuOTk0NiAxOS45ODA1IDIzLjU4MjggMTguNDk5OCAyMy41ODI4SDE4LjQ5OThDMTcuNzY2NiAyMy41ODI4IDE3LjA0MDcgMjMuNDM4NCAxNi4zNjMzIDIzLjE1NzlDMTUuNjg2IDIyLjg3NzMgMTUuMDcwNiAyMi40NjYxIDE0LjU1MjIgMjEuOTQ3N0MxNC4wMzM3IDIxLjQyOTIgMTMuNjIyNSAyMC44MTM4IDEzLjM0MiAyMC4xMzY1QzEzLjA2MTQgMTkuNDU5MSAxMi45MTcgMTguNzMzMiAxMi45MTcgMThWOS4wNjc1QzEyLjkxNyA3LjU4Njg2IDEzLjUwNTIgNi4xNjY4NSAxNC41NTIyIDUuMTE5ODdDMTUuNTk5MSA0LjA3MjkgMTcuMDE5MSAzLjQ4NDcxIDE4LjQ5OTggMy40ODQ3MVYzLjQ4NDcxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjUgMjguMDQ5MVYzMi41MTUzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuODIwNzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguNDg3MiAxOS4xMTY2QzI4LjIxMjMgMjEuNTczMiAyNy4wNDE3IDIzLjg0MjMgMjUuMTk5MSAyNS40OTAyQzIzLjM1NjYgMjcuMTM4IDIwLjk3MTQgMjguMDQ5MSAxOC40OTk0IDI4LjA0OUMxNi4wMjc1IDI4LjA0OSAxMy42NDIzIDI3LjEzOCAxMS43OTk3IDI1LjQ5MDJDOS45NTcyIDIzLjg0MjMgOC43ODY2IDIxLjU3MzIgOC41MTE3MiAxOS4xMTY2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuODIwNzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",C="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOS4zMDI5NyAyNy42OTY5VjkuMzAyOTdIMjcuNjk2OVYyNy42OTY5SDkuMzAyOTdaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5Ii8+CjxwYXRoIGQ9Ik0yOC4xNDI5IDcuODkyNThIOC44NTY4OEM4LjMyNDMxIDcuODkyNTggNy44OTI1OCA4LjMyNDMxIDcuODkyNTggOC44NTY4OFYyOC4xNDI5QzcuODkyNTggMjguNjc1NSA4LjMyNDMxIDI5LjEwNzIgOC44NTY4OCAyOS4xMDcySDI4LjE0MjlDMjguNjc1NSAyOS4xMDcyIDI5LjEwNzIgMjguNjc1NSAyOS4xMDcyIDI4LjE0MjlWOC44NTY4OEMyOS4xMDcyIDguMzI0MzEgMjguNjc1NSA3Ljg5MjU4IDI4LjE0MjkgNy44OTI1OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi44MjA3OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",Q="",Y=({onRecordingComplete:i,recorderControls:r,classes:e,onError:n,onRecordingStart:D})=>{var S,O,L,u,I,c;const{startRecording:A,stopRecording:y,recordingBlob:M,isRecording:d,recordingTime:a}=r!=null?r:x(),[l,z]=t.useState(!1),T=(m=!0)=>{z(m),y()},g=()=>{D==null||D(),A(n)};return t.useEffect(()=>{(l||r)&&M!=null&&i!=null&&i(M)},[M]),d?N.default.createElement("div",{className:`audio-recorder ${d?"recording":""} ${(L=e==null?void 0:e.AudioRecorderClass)!=null?L:""}`,"data-testid":"audio_recorder"},d?N.default.createElement("div",{className:"audio-recorder-button-container"},N.default.createElement("div",{className:"audio-recorder-button-status"}),N.default.createElement("img",{src:C,className:`audio-recorder-button ${(u=e==null?void 0:e.AudioRecorderDiscardClass)!=null?u:""}`,onClick:()=>T(!0),"data-testid":"ar_stop",title:"stop recording"})):N.default.createElement("img",{src:s,className:`audio-recorder-button ${(I=e==null?void 0:e.AudioRecorderStartSaveClass)!=null?I:""}`,onClick:g,"data-testid":"ar_mic",title:"start recording"}),N.default.createElement("span",{className:`audio-recorder-timer ${d?"":"display-none"} ${(c=e==null?void 0:e.AudioRecorderTimerClass)!=null?c:""}`,"data-testid":"ar_timer"},N.default.createElement("div",{className:"audio-recorder-timer-dot"}),N.default.createElement("div",null,Math.floor(a/60),":",String(a%60).padStart(2,"0")))):N.default.createElement("div",{className:`audio-recorder-button-button ${(S=e==null?void 0:e.AudioRecorderClass)!=null?S:""}`,onClick:g},N.default.createElement("img",{src:s,className:`audio-recorder-button ${(O=e==null?void 0:e.AudioRecorderStartSaveClass)!=null?O:""}`,"data-testid":"ar_mic",title:"start recording"}))};j.AudioRecorder=Y,j.useAudioRecorder=x,Object.defineProperties(j,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
