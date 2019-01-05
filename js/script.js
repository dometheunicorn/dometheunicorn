function doStuff() {
  let i = 0;
  while (i < 1000000) {
    url = "steam://rungameid/" + i;
    window.open(url,'_self');
    i++;
  }
}
