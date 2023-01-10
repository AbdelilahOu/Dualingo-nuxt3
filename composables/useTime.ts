export default () => {
  const timerDate = (): string => {
    const today = new Date();
    const left = 7 - today.getDay();
    const sunday = new Date(
      today.getTime() + left * 24 * 60 * 60 * 1000
    ).getTime();
    console.log(new Date(today.getTime() + left * 24 * 60 * 60 * 1000));

    const seconds = sunday / 1000 - today.getTime() / 1000;
    let d = Math.floor(seconds / (3600 * 24));
    let h = Math.floor((seconds % (3600 * 24)) / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);
    let dDisplay = d > 0 ? d + " days" : null;
    let hDisplay = h > 0 ? h + " hours" : null;
    let mDisplay = m > 0 ? m + " minutes" : null;
    return dDisplay ?? hDisplay ?? mDisplay;
  };
  return {
    timerDate,
  };
};
