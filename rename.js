setAnimate() {
  if (this.d && !this.r && !this.l) {
    this.cy = 0 * 1;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.d && this.r) {
    this.cy = 160 * 2;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.r && !this.u) {
    this.cy = 160 * 4;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.r && this.u) {
    this.cy = 160 * 6;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.u && !this.l) {
    this.cy = 160 * 8;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.u && this.l) {
    this.cy = 160 * 10;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.l && !this.d) {
    this.cy = 160 * 12;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.l && this.d) {
    this.cy = 160 * 14;
    this.cx = 160 * 0;
    this.lengthFrame = 4;
  } else if (this.ad && !this.ar && !this.al) {
    this.cy = 0 * 1;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.ad && this.ar) {
    this.cy = 160 * 2;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.ar && !this.au) {
    this.cy = 160 * 4;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.ar && this.au) {
    this.cy = 160 * 6;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.au && !this.al) {
    this.cy = 160 * 8;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.au && this.al) {
    this.cy = 160 * 10;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.al && !this.ad) {
    this.cy = 160 * 12;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else if (this.al && this.ad) {
    this.cy = 160 * 14;
    this.cx = 160 * 14;
    this.lengthFrame = 4;
  } else {
    this.cy = 0;
    this.cx = 0;
    this.lengthFrame = 1;
  }
}
