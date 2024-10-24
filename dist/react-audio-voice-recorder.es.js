(function(){"use strict";try{if(typeof document!="undefined"){var i=document.createElement("style");i.appendChild(document.createTextNode(".audio-recorder{display:flex;align-items:center;flex-direction:column}.audio-recorder-button-container{position:relative;display:flex;align-items:center;justify-content:center}.audio-recorder-button{color:#000;padding:24px;width:80px;height:80px;background-color:#6938ef;border-radius:50%;z-index:1}.audio-recorder-button-status{padding:24px;width:80px;height:80px;background-color:#f6898280;border-radius:50%;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite;position:absolute}.audio-recorder-timer{margin-top:16px;font-size:16px;font-weight:600;line-height:1.2;display:flex;align-items:center}.audio-recorder-options{height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording .audio-recorder-button-status{transition:all .2s ease-out;width:70px;height:70px}.recording .audio-recorder-button{background-color:#f04438}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1;width:90px;height:90px}50%{opacity:1;width:80px;height:80px}to{opacity:1;width:90px;height:90px}}.audio-recorder-timer-dot{width:8px;height:8px;background-color:#f04438;border-radius:50%;margin-right:4px}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import i, { useState as D, useRef as b, useCallback as C, useEffect as s } from "react";
const Y = (g = "default") => {
  const [j, M] = D(!1), [y, u] = D(!1), [n, o] = D(0), I = b(), [N, c] = D(), [A, z] = D(), T = () => {
    const e = setInterval(() => {
      o((t) => t + 1);
    }, 1e3);
    c(e);
  }, r = () => {
    N != null && clearInterval(N), c(void 0);
  };
  return {
    startRecording: C(
      (e) => {
        N == null && navigator.mediaDevices.getUserMedia({ audio: { deviceId: g } }).then((t) => {
          var m, x, k;
          const a = [], l = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
          I.current = new MediaRecorder(t, {
            mimeType: l
          }), (m = I.current) == null || m.addEventListener("dataavailable", (d) => {
            d.data.size > 0 && a.push(d.data);
          }), (x = I.current) == null || x.addEventListener("stop", () => {
            var d;
            z(
              new Blob(a, { type: (d = I.current) == null ? void 0 : d.mimeType })
            ), I.current = null;
          }), (k = I.current) == null || k.start(), T(), M(!0);
        }).catch((t) => {
          e && e(t);
        });
      },
      [N, g]
    ),
    stopRecording: () => {
      var e;
      (e = I == null ? void 0 : I.current) == null || e.stop(), r(), o(0), M(!1), u(!1);
    },
    togglePauseResume: () => {
      var e, t;
      y ? (u(!1), (e = I == null ? void 0 : I.current) == null || e.resume(), T()) : (u(!0), r(), (t = I == null ? void 0 : I.current) == null || t.pause());
    },
    recordingBlob: A,
    isRecording: j,
    isPaused: y,
    recordingTime: n,
    mediaRecorder: I.current
  };
}, E = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMTguNDk5OCA0Ljg5NTFIMTguNDk5OEMxOS42MDY0IDQuODk1MSAyMC42Njc3IDUuMzM0NyAyMS40NTAxIDYuMTE3MThDMjIuMjMyNiA2Ljg5OTY2IDIyLjY3MjIgNy45NjA5MyAyMi42NzIyIDkuMDY3NTJWMThDMjIuNjcyMiAxOS4xMDY2IDIyLjIzMjYgMjAuMTY3OSAyMS40NTAxIDIwLjk1MDNDMjAuNjY3NyAyMS43MzI4IDE5LjYwNjQgMjIuMTcyNCAxOC40OTk4IDIyLjE3MjRDMTcuOTUxOSAyMi4xNzI0IDE3LjQwOTMgMjIuMDY0NSAxNi45MDMxIDIxLjg1NDhDMTYuMzk2OSAyMS42NDUxIDE1LjkzNjkgMjEuMzM3OCAxNS41NDk1IDIwLjk1MDRDMTUuMTYyIDIwLjU2MjkgMTQuODU0NyAyMC4xMDMgMTQuNjQ1IDE5LjU5NjdMMTMuMzQ5MiAyMC4xMzM1TDE0LjY0NSAxOS41OTY3QzE0LjQzNTMgMTkuMDkwNSAxNC4zMjc0IDE4LjU0NzkgMTQuMzI3NCAxOFY5LjA2NzVDMTQuMzI3NCA3Ljk2MDkyIDE0Ljc2NyA2Ljg5OTY1IDE1LjU0OTUgNi4xMTcxN0MxNi4zMzE5IDUuMzM0NjkgMTcuMzkzMiA0Ljg5NTEgMTguNDk5OCA0Ljg5NTFaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5Ii8+CjxwYXRoIGQ9Ik0xOC40OTk4IDMuNDg0NzFIMTguNDk5OEMxOS45ODA1IDMuNDg0NzEgMjEuNDAwNSA0LjA3MjkgMjIuNDQ3NCA1LjExOTg4QzIzLjQ5NDQgNi4xNjY4NiAyNC4wODI2IDcuNTg2ODcgMjQuMDgyNiA5LjA2NzUyVjE4QzI0LjA4MjYgMTkuNDgwNyAyMy40OTQ0IDIwLjkwMDcgMjIuNDQ3NCAyMS45NDc2QzIxLjQwMDUgMjIuOTk0NiAxOS45ODA1IDIzLjU4MjggMTguNDk5OCAyMy41ODI4SDE4LjQ5OThDMTcuNzY2NiAyMy41ODI4IDE3LjA0MDcgMjMuNDM4NCAxNi4zNjMzIDIzLjE1NzlDMTUuNjg2IDIyLjg3NzMgMTUuMDcwNiAyMi40NjYxIDE0LjU1MjIgMjEuOTQ3N0MxNC4wMzM3IDIxLjQyOTIgMTMuNjIyNSAyMC44MTM4IDEzLjM0MiAyMC4xMzY1QzEzLjA2MTQgMTkuNDU5MSAxMi45MTcgMTguNzMzMiAxMi45MTcgMThWOS4wNjc1QzEyLjkxNyA3LjU4Njg2IDEzLjUwNTIgNi4xNjY4NSAxNC41NTIyIDUuMTE5ODdDMTUuNTk5MSA0LjA3MjkgMTcuMDE5MSAzLjQ4NDcxIDE4LjQ5OTggMy40ODQ3MVYzLjQ4NDcxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjUgMjguMDQ5MVYzMi41MTUzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuODIwNzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguNDg3MiAxOS4xMTY2QzI4LjIxMjMgMjEuNTczMiAyNy4wNDE3IDIzLjg0MjMgMjUuMTk5MSAyNS40OTAyQzIzLjM1NjYgMjcuMTM4IDIwLjk3MTQgMjguMDQ5MSAxOC40OTk0IDI4LjA0OUMxNi4wMjc1IDI4LjA0OSAxMy42NDIzIDI3LjEzOCAxMS43OTk3IDI1LjQ5MDJDOS45NTcyIDIzLjg0MjMgOC43ODY2IDIxLjU3MzIgOC41MTE3MiAxOS4xMTY2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuODIwNzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", Q = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOS4zMDI5NyAyNy42OTY5VjkuMzAyOTdIMjcuNjk2OVYyNy42OTY5SDkuMzAyOTdaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjgyMDc5Ii8+CjxwYXRoIGQ9Ik0yOC4xNDI5IDcuODkyNThIOC44NTY4OEM4LjMyNDMxIDcuODkyNTggNy44OTI1OCA4LjMyNDMxIDcuODkyNTggOC44NTY4OFYyOC4xNDI5QzcuODkyNTggMjguNjc1NSA4LjMyNDMxIDI5LjEwNzIgOC44NTY4OCAyOS4xMDcySDI4LjE0MjlDMjguNjc1NSAyOS4xMDcyIDI5LjEwNzIgMjguNjc1NSAyOS4xMDcyIDI4LjE0MjlWOC44NTY4OEMyOS4xMDcyIDguMzI0MzEgMjguNjc1NSA3Ljg5MjU4IDI4LjE0MjkgNy44OTI1OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi44MjA3OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
const U = ({
  onRecordingComplete: g,
  recorderControls: j,
  classes: M,
  onError: y,
  onRecordingStart: u
}) => {
  var O, L, S, e, t, a;
  const {
    startRecording: n,
    stopRecording: o,
    recordingBlob: I,
    isRecording: N,
    recordingTime: c
  } = j != null ? j : Y(), [A, z] = D(!1), T = (l = !0) => {
    z(l), o();
  }, r = () => {
    n(y), u == null || u();
  };
  return s(() => {
    (A || j) && I != null && g != null && g(I);
  }, [I]), N ? /* @__PURE__ */ i.createElement("div", {
    className: `audio-recorder ${N ? "recording" : ""} ${(S = M == null ? void 0 : M.AudioRecorderClass) != null ? S : ""}`,
    "data-testid": "audio_recorder"
  }, N ? /* @__PURE__ */ i.createElement("div", {
    className: "audio-recorder-button-container"
  }, /* @__PURE__ */ i.createElement("div", {
    className: "audio-recorder-button-status"
  }), /* @__PURE__ */ i.createElement("img", {
    src: Q,
    className: `audio-recorder-button ${(e = M == null ? void 0 : M.AudioRecorderDiscardClass) != null ? e : ""}`,
    onClick: () => T(!0),
    "data-testid": "ar_stop",
    title: "stop recording"
  })) : /* @__PURE__ */ i.createElement("img", {
    src: E,
    className: `audio-recorder-button ${(t = M == null ? void 0 : M.AudioRecorderStartSaveClass) != null ? t : ""}`,
    onClick: r,
    "data-testid": "ar_mic",
    title: "start recording"
  }), /* @__PURE__ */ i.createElement("span", {
    className: `audio-recorder-timer ${N ? "" : "display-none"} ${(a = M == null ? void 0 : M.AudioRecorderTimerClass) != null ? a : ""}`,
    "data-testid": "ar_timer"
  }, /* @__PURE__ */ i.createElement("div", {
    className: "audio-recorder-timer-dot"
  }), /* @__PURE__ */ i.createElement("div", null, Math.floor(c / 60), ":", String(c % 60).padStart(2, "0")))) : /* @__PURE__ */ i.createElement("div", {
    className: `audio-recorder-button-button ${(O = M == null ? void 0 : M.AudioRecorderClass) != null ? O : ""}`,
    onClick: r
  }, /* @__PURE__ */ i.createElement("img", {
    src: E,
    className: `audio-recorder-button ${(L = M == null ? void 0 : M.AudioRecorderStartSaveClass) != null ? L : ""}`,
    "data-testid": "ar_mic",
    title: "start recording"
  }));
};
export {
  U as AudioRecorder,
  Y as useAudioRecorder
};
