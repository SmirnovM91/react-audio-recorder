import React, { useState, useEffect, ReactElement } from "react";
import { Props } from "./interfaces";
import useAudioRecorder from "../hooks/useAudioRecorder";

import micSVG from "../icons/mic.svg";

import stopSVG from "../icons/stop.svg";
import "../styles/audio-recorder.css";

/**
 * Usage: https://github.com/samhirtarif/react-audio-recorder#audiorecorder-component
 *
 *
 * @prop `onRecordingComplete` Method that gets called when save recording option is clicked
 * @prop `recorderControls` Externally initilize hook and pass the returned object to this param, this gives your control over the component from outside the component.
 * https://github.com/samhirtarif/react-audio-recorder#combine-the-useaudiorecorder-hook-and-the-audiorecorder-component
 * @prop `classes` Is an object with attributes representing classes for different parts of the component
 */
const AudioRecorder: (props: Props) => ReactElement = ({
  onRecordingComplete,
  recorderControls,
  classes,
  onError,
  onRecordingStart,
}: Props) => {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    recordingTime,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = recorderControls ?? useAudioRecorder();
  const [shouldSave, setShouldSave] = useState(false);
  const stopAudioRecorder: (save?: boolean) => void = (
    save: boolean = true
  ) => {
    setShouldSave(save);
    stopRecording();
  };

  const handleStart = () => {
    startRecording(onError);
    onRecordingStart?.();
  };

  useEffect(() => {
    if (
      (shouldSave || recorderControls) &&
      recordingBlob != null &&
      onRecordingComplete != null
    ) {
      onRecordingComplete(recordingBlob);
    }
  }, [recordingBlob]);

  if (!isRecording) {
    return (
      <div
        className={`audio-recorder-button-button ${
          classes?.AudioRecorderClass ?? ""
        }`}
        onClick={handleStart}
      >
        <img
          src={micSVG}
          className={`audio-recorder-button ${
            classes?.AudioRecorderStartSaveClass ?? ""
          }`}
          data-testid="ar_mic"
          title={"start recording"}
        />
      </div>
    );
  }

  return (
    <div
      className={`audio-recorder ${isRecording ? "recording" : ""} ${
        classes?.AudioRecorderClass ?? ""
      }`}
      data-testid="audio_recorder"
    >
      {isRecording ? (
        <div className="audio-recorder-button-container">
          <div className="audio-recorder-button-status"></div>
          <img
            src={stopSVG}
            className={`audio-recorder-button ${
              classes?.AudioRecorderDiscardClass ?? ""
            }`}
            onClick={() => stopAudioRecorder(true)}
            data-testid="ar_stop"
            title={"stop recording"}
          />
        </div>
      ) : (
        <img
          src={micSVG}
          className={`audio-recorder-button ${
            classes?.AudioRecorderStartSaveClass ?? ""
          }`}
          onClick={handleStart}
          data-testid="ar_mic"
          title={"start recording"}
        />
      )}

      <span
        className={`audio-recorder-timer ${
          !isRecording ? "display-none" : ""
        } ${classes?.AudioRecorderTimerClass ?? ""}`}
        data-testid="ar_timer"
      >
        <div className="audio-recorder-timer-dot"></div>
        <div>
          {Math.floor(recordingTime / 60)}:
          {String(recordingTime % 60).padStart(2, "0")}
        </div>
      </span>
    </div>
  );
};

export default AudioRecorder;
