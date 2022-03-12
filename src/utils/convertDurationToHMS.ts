export const convertDurationToHMS = (duration: number): string => {
  if (!isNaN(duration)) {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - hours * 3600) / 60);
    let seconds = duration - hours * 3600 - minutes * 60;

    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return "Inconnue";
};
