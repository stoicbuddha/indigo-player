export interface IData {
  paused: boolean;
  view: ViewTypes;
  visibleControls: boolean;
  seekBarPercentage: number;
  isSeekbarActive: boolean;
  isSeeking: boolean;
  progressPercentage: number;
  bufferedPercentage: number;
  volumeBarPercentage: number;
  isVolumeControlsOpen: boolean;
}

export interface IActions {
  play();
  pause();
  showControls();
  hideControls();
  setSliderSeeking(type: SeekbarTypes);
  setSliderActive(type: SeekbarTypes);
  setSliderInactive(type: SeekbarTypes);
  setVolumeControlsOpen();
  setVolumeControlsClosed();
  toggleMute();
}

export enum ViewTypes {
  LOADING,
  START,
  CONTROLS,
}

export enum SeekbarTypes {
  PROGRESS,
  VOLUME,
}