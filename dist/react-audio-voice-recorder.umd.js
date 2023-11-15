(function(){"use strict";try{if(typeof document!="undefined"){var i=document.createElement("style");i.appendChild(document.createTextNode(".audio-recorder{display:flex;align-items:center;flex-direction:column}.audio-recorder-button-container{position:relative;display:flex;align-items:center;justify-content:center}.audio-recorder-button{color:#000;padding:24px;width:32px;height:32px;background-color:#6938ef;border-radius:50%;z-index:1}.audio-recorder-button-status{padding:24px;width:32px;height:32px;background-color:#f6898280;border-radius:50%;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite;position:absolute}.audio-recorder-timer{margin-top:16px;font-size:16px;font-weight:600;line-height:1.2;display:flex;align-items:center}.audio-recorder-options{height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording .audio-recorder-button-status{transition:all .2s ease-out;width:70px;height:70px}.recording .audio-recorder-button{background-color:#f04438}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1;width:46px;height:46px}50%{opacity:1;width:40px;height:40px}to{opacity:1;width:46px;height:46px}}.audio-recorder-timer-dot{width:8px;height:8px;background-color:#f04438;border-radius:50%;margin-right:4px}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(d,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],t):(d=typeof globalThis<"u"?globalThis:d||self,t(d.AudioRecorder={},d.React))})(this,function(d,t){"use strict";const I=(N=>N&&typeof N=="object"&&"default"in N?N:{default:N})(t),x=()=>{const[N,D]=t.useState(!1),[M,a]=t.useState(!1),[r,n]=t.useState(0),e=t.useRef(),[j,g]=t.useState(),[y,S]=t.useState(),T=()=>{const u=setInterval(()=>{n(i=>i+1)},1e3);g(u)},A=()=>{j!=null&&clearInterval(j),g(void 0)};return{startRecording:t.useCallback(u=>{j==null&&navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>{var z,k,E;const c=[],l=MediaRecorder.isTypeSupported("audio/webm")?"audio/webm":"audio/mp4";e.current=new MediaRecorder(i,{mimeType:l}),(z=e.current)==null||z.addEventListener("dataavailable",o=>{o.data.size>0&&c.push(o.data)}),(k=e.current)==null||k.addEventListener("stop",()=>{var o;S(new Blob(c,{type:(o=e.current)==null?void 0:o.mimeType})),e.current=null}),(E=e.current)==null||E.start(),T(),D(!0)}).catch(i=>{u&&u(i)})},[j]),stopRecording:()=>{var u;(u=e==null?void 0:e.current)==null||u.stop(),A(),n(0),D(!1),a(!1)},togglePauseResume:()=>{var u,i;M?(a(!1),(u=e==null?void 0:e.current)==null||u.resume(),T()):(a(!0),A(),(i=e==null?void 0:e.current)==null||i.pause())},recordingBlob:y,isRecording:N,isPaused:M,recordingTime:r}},s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMTguNDk5OCA0Ljg5NTFIMTguNDk5OEMxOS42MDY0IDQuODk1MSAyMC42Njc3IDUuMzM0NyAyMS40NTAxIDYuMTE3MThDMjIuMjMyNiA2Ljg5OTY2IDIyLjY3MjIgNy45NjA5MyAyMi42NzIyIDkuMDY3NTJWMThDMjIuNjcyMiAxOS4xMDY2IDIyLjIzMjYgMjAuMTY3OSAyMS40NTAxIDIwLjk1MDNDMjAuNjY3NyAyMS43MzI4IDE5LjYwNjQgMjIuMTcyNCAxOC40OTk4IDIyLjE3MjRDMTcuOTUxOSAyMi4xNzI0IDE3LjQwOTMgMjIuMDY0NSAxNi45MDMxIDIxLjg1NDhDMTYuMzk2OSAyMS42NDUxIDE1LjkzNjkgMjEuMzM3OCAxNS41NDk1IDIwLjk1MDRDMTUuMTYyIDIwLjU2MjkgMTQuODU0NyAyMC4xMDMgMTQuNjQ1IDE5LjU5NjdMMTMuMzQ5MiAyMC4xMzM1TDE0LjY0NSAxOS41OTY3QzE0LjQzNTMgMTkuMDkwNSAxNC4zMjc0IDE4LjU0NzkgMTQuMzI3NCAxOFY5LjA2NzVDMTQuMzI3NCA3Ljk2MDkyIDE0Ljc2NyA2Ljg5OTY1IDE1LjU0OTUgNi4xMTcxN0MxNi4zMzE5IDUuMzM0NjkgMTcuMzkzMiA0Ljg5NTEgMTguNDk5OCA0Ljg5NTFaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5Ii8+CjxwYXRoIGQ9Ik0xOC40OTk4IDMuNDg0NzFIMTguNDk5OEMxOS45ODA1IDMuNDg0NzEgMjEuNDAwNSA0LjA3MjkgMjIuNDQ3NCA1LjExOTg4QzIzLjQ5NDQgNi4xNjY4NiAyNC4wODI2IDcuNTg2ODcgMjQuMDgyNiA5LjA2NzUyVjE4QzI0LjA4MjYgMTkuNDgwNyAyMy40OTQ0IDIwLjkwMDcgMjIuNDQ3NCAyMS45NDc2QzIxLjQwMDUgMjIuOTk0NiAxOS45ODA1IDIzLjU4MjggMTguNDk5OCAyMy41ODI4SDE4LjQ5OThDMTcuNzY2NiAyMy41ODI4IDE3LjA0MDcgMjMuNDM4NCAxNi4zNjMzIDIzLjE1NzlDMTUuNjg2IDIyLjg3NzMgMTUuMDcwNiAyMi40NjYxIDE0LjU1MjIgMjEuOTQ3N0MxNC4wMzM3IDIxLjQyOTIgMTMuNjIyNSAyMC44MTM4IDEzLjM0MiAyMC4xMzY1QzEzLjA2MTQgMTkuNDU5MSAxMi45MTcgMTguNzMzMiAxMi45MTcgMThWOS4wNjc1QzEyLjkxNyA3LjU4Njg2IDEzLjUwNTIgNi4xNjY4NSAxNC41NTIyIDUuMTE5ODdDMTUuNTk5MSA0LjA3MjkgMTcuMDE5MSAzLjQ4NDcxIDE4LjQ5OTggMy40ODQ3MVYzLjQ4NDcxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjUgMjguMDQ5MVYzMi41MTUzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuODIwNzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguNDg3MiAxOS4xMTY2QzI4LjIxMjMgMjEuNTczMiAyNy4wNDE3IDIzLjg0MjMgMjUuMTk5MSAyNS40OTAyQzIzLjM1NjYgMjcuMTM4IDIwLjk3MTQgMjguMDQ5MSAxOC40OTk0IDI4LjA0OUMxNi4wMjc1IDI4LjA0OSAxMy42NDIzIDI3LjEzOCAxMS43OTk3IDI1LjQ5MDJDOS45NTcyIDIzLjg0MjMgOC43ODY2IDIxLjU3MzIgOC41MTE3MiAxOS4xMTY2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuODIwNzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOS4zMDI5NyAyNy42OTY5VjkuMzAyOTdIMjcuNjk2OVYyNy42OTY5SDkuMzAyOTdaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5Ii8+CjxwYXRoIGQ9Ik0yOC4xNDI5IDcuODkyNThIOC44NTY4OEM4LjMyNDMxIDcuODkyNTggNy44OTI1OCA4LjMyNDMxIDcuODkyNTggOC44NTY4OFYyOC4xNDI5QzcuODkyNTggMjguNjc1NSA4LjMyNDMxIDI5LjEwNzIgOC44NTY4OCAyOS4xMDcySDI4LjE0MjlDMjguNjc1NSAyOS4xMDcyIDI5LjEwNzIgMjguNjc1NSAyOS4xMDcyIDI4LjE0MjlWOC44NTY4OEMyOS4xMDcyIDguMzI0MzEgMjguNjc1NSA3Ljg5MjU4IDI4LjE0MjkgNy44OTI1OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi44MjA3OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",f="",C=({onRecordingComplete:N,recorderControls:D,classes:M,onError:a,onRecordingStart:r})=>{var L,m,u,i,c,l;const{startRecording:n,stopRecording:e,recordingBlob:j,isRecording:g,recordingTime:y}=D!=null?D:x(),[S,T]=t.useState(!1),A=(z=!0)=>{T(z),e()},O=()=>{r==null||r(),n(a)};return t.useEffect(()=>{(S||D)&&j!=null&&N!=null&&N(j)},[j]),g?I.default.createElement("div",{className:`audio-recorder ${g?"recording":""} ${(u=M==null?void 0:M.AudioRecorderClass)!=null?u:""}`,"data-testid":"audio_recorder"},g?I.default.createElement("div",{className:"audio-recorder-button-container"},I.default.createElement("div",{className:"audio-recorder-button-status"}),I.default.createElement("img",{src:b,className:`audio-recorder-button ${(i=M==null?void 0:M.AudioRecorderDiscardClass)!=null?i:""}`,onClick:()=>A(!0),"data-testid":"ar_stop",title:"stop recording"})):I.default.createElement("img",{src:s,className:`audio-recorder-button ${(c=M==null?void 0:M.AudioRecorderStartSaveClass)!=null?c:""}`,onClick:O,"data-testid":"ar_mic",title:"start recording"}),I.default.createElement("span",{className:`audio-recorder-timer ${g?"":"display-none"} ${(l=M==null?void 0:M.AudioRecorderTimerClass)!=null?l:""}`,"data-testid":"ar_timer"},I.default.createElement("div",{className:"audio-recorder-timer-dot"}),I.default.createElement("div",null,Math.floor(y/60),":",String(y%60).padStart(2,"0")))):I.default.createElement("div",{className:`audio-recorder-button-button ${(L=M==null?void 0:M.AudioRecorderClass)!=null?L:""}`,onClick:O},I.default.createElement("img",{src:s,className:`audio-recorder-button ${(m=M==null?void 0:M.AudioRecorderStartSaveClass)!=null?m:""}`,"data-testid":"ar_mic",title:"start recording"}))};d.AudioRecorder=C,d.useAudioRecorder=x,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
