var an = 1e-6, rt = typeof Float32Array < "u" ? Float32Array : Array;
function ce() {
  var e = new rt(16);
  return rt != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function qi(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function ji(e, n, r) {
  var i = n[0], a = n[1], s = n[2], o = n[3], f = n[4], c = n[5], u = n[6], l = n[7], h = n[8], d = n[9], p = n[10], y = n[11], g = n[12], v = n[13], w = n[14], _ = n[15], b = r[0], m = r[1], M = r[2], P = r[3];
  return e[0] = b * i + m * f + M * h + P * g, e[1] = b * a + m * c + M * d + P * v, e[2] = b * s + m * u + M * p + P * w, e[3] = b * o + m * l + M * y + P * _, b = r[4], m = r[5], M = r[6], P = r[7], e[4] = b * i + m * f + M * h + P * g, e[5] = b * a + m * c + M * d + P * v, e[6] = b * s + m * u + M * p + P * w, e[7] = b * o + m * l + M * y + P * _, b = r[8], m = r[9], M = r[10], P = r[11], e[8] = b * i + m * f + M * h + P * g, e[9] = b * a + m * c + M * d + P * v, e[10] = b * s + m * u + M * p + P * w, e[11] = b * o + m * l + M * y + P * _, b = r[12], m = r[13], M = r[14], P = r[15], e[12] = b * i + m * f + M * h + P * g, e[13] = b * a + m * c + M * d + P * v, e[14] = b * s + m * u + M * p + P * w, e[15] = b * o + m * l + M * y + P * _, e;
}
function $i(e, n) {
  return e[0] = n[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = n[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Hi(e, n, r, i, a) {
  var s = 1 / Math.tan(n / 2);
  if (e[0] = s / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0) {
    var o = 1 / (i - a);
    e[10] = a * o, e[14] = a * i * o;
  } else
    e[10] = -1, e[14] = -i;
  return e;
}
function Xi(e, n, r, i) {
  var a, s, o, f, c, u, l, h, d, p, y = n[0], g = n[1], v = n[2], w = i[0], _ = i[1], b = i[2], m = r[0], M = r[1], P = r[2];
  return Math.abs(y - m) < an && Math.abs(g - M) < an && Math.abs(v - P) < an ? qi(e) : (l = y - m, h = g - M, d = v - P, p = 1 / Math.sqrt(l * l + h * h + d * d), l *= p, h *= p, d *= p, a = _ * d - b * h, s = b * l - w * d, o = w * h - _ * l, p = Math.sqrt(a * a + s * s + o * o), p ? (p = 1 / p, a *= p, s *= p, o *= p) : (a = 0, s = 0, o = 0), f = h * o - d * s, c = d * a - l * o, u = l * s - h * a, p = Math.sqrt(f * f + c * c + u * u), p ? (p = 1 / p, f *= p, c *= p, u *= p) : (f = 0, c = 0, u = 0), e[0] = a, e[1] = f, e[2] = l, e[3] = 0, e[4] = s, e[5] = c, e[6] = h, e[7] = 0, e[8] = o, e[9] = u, e[10] = d, e[11] = 0, e[12] = -(a * y + s * g + o * v), e[13] = -(f * y + c * g + u * v), e[14] = -(l * y + h * g + d * v), e[15] = 1, e);
}
var Zi = ji;
function U() {
  var e = new rt(3);
  return rt != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function gt(e) {
  var n = e[0], r = e[1], i = e[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function Be(e, n, r) {
  var i = new rt(3);
  return i[0] = e, i[1] = n, i[2] = r, i;
}
function Fe(e, n, r) {
  return e[0] = n[0] + r[0], e[1] = n[1] + r[1], e[2] = n[2] + r[2], e;
}
function Ki(e, n, r) {
  return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], e;
}
function Ie(e, n, r) {
  return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e;
}
function Ye(e, n, r, i) {
  return e[0] = n[0] + r[0] * i, e[1] = n[1] + r[1] * i, e[2] = n[2] + r[2] * i, e;
}
function Se(e, n) {
  var r = n[0], i = n[1], a = n[2], s = r * r + i * i + a * a;
  return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e;
}
function bt(e, n, r) {
  var i = n[0], a = n[1], s = n[2], o = r[0], f = r[1], c = r[2];
  return e[0] = a * c - s * f, e[1] = s * o - i * c, e[2] = i * f - a * o, e;
}
function Nn(e, n, r, i) {
  var a = [], s = [];
  return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], s[0] = a[0] * Math.cos(i) - a[1] * Math.sin(i), s[1] = a[0] * Math.sin(i) + a[1] * Math.cos(i), s[2] = a[2], e[0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e;
}
var Wi = Ki;
(function() {
  var e = U();
  return function(n, r, i, a, s, o) {
    var f, c;
    for (r || (r = 3), i || (i = 0), a ? c = Math.min(a * r + i, n.length) : c = n.length, f = i; f < c; f += r)
      e[0] = n[f], e[1] = n[f + 1], e[2] = n[f + 2], s(e, e, o), n[f] = e[0], n[f + 1] = e[1], n[f + 2] = e[2];
    return n;
  };
})();
class Pn {
  /**
   * The world eye position of the camera.
   */
  wEye = U();
  /**
   * The world look-at position of the camera.
   */
  wLookAt = U();
  /**
   * The world eye direction vector of the camera.
   */
  wEyeDir = U();
  /**
   * The world up vector of the camera.
   */
  wUp = U();
  /**
   * The near clipping plane distance.
   */
  wNear = 0;
  /**
   * The far clipping plane distance.
   */
  wFar = 0;
  /**
   * The field of view angle in the y direction.
   */
  fovy = 45 * Math.PI / 180;
  /**
   * The projection matrix for the camera.
   */
  mProjectionMatrix = ce();
  /**
   * The view matrix for the camera.
   */
  mViewMatrix = ce();
  /**
   * The model matrix for the camera.
   */
  mModelMatrix = ce();
  /**
   * The width of the viewport.
   */
  viewportWidth = 0;
  /**
   * The height of the viewport.
   */
  viewportHeight = 0;
  /**
   * Default camera parameters.
   */
  static defaultParams = {
    up: [0, 1, 0],
    eye: [0, 0, 1e4],
    lookAt: [0, 0, 0]
  };
  /**
   * Constructs a Camera instance with the specified parameters.
   * If no parameters are provided, it uses the default camera parameters.
   * 
   * @param {ICameraData} [params=Camera.defaultParams] - The initial camera parameters.
   */
  constructor(n = Pn.defaultParams) {
    this.resetCamera(n.up, n.lookAt, n.eye);
  }
  /**
   * Resets the camera to the initial position and orientation.
   * 
   * @param {number[]} wUp - The up vector of the camera in world coordinates.
   * @param {number[]} wLookAt - The look-at point of the camera in world coordinates.
   * @param {number[]} wEye - The eye position of the camera in world coordinates.
   */
  resetCamera(n, r, i) {
    this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = ce(), this.mViewMatrix = ce(), this.mModelMatrix = ce(), this.wNear = 1, this.wFar = 1e10, this.wLookAt = Be(r[0], r[1], r[2]), this.wEye = Be(i[0], i[1], i[2]), this.updateEyeDirAndLen(), this.wUp = Be(n[0], n[1], n[2]);
  }
  /**
   * Gets the projection matrix for the camera.
   * @returns {Float32Array | number[]} The projection matrix
   */
  getProjectionMatrix() {
    return Array.from(this.mProjectionMatrix);
  }
  /**
   * Gets the model-view matrix for the camera.
   * @returns {Float32Array | number[]} The model-view matrix
   */
  getModelViewMatrix() {
    const n = Zi(ce(), this.mViewMatrix, this.mModelMatrix);
    return Array.from(n);
  }
  /**
   * Resizes the viewport for the camera.
   * @param {number} width - The new width of the viewport.
   * @param {number} height - The new height of the viewport.
   */
  resize(n, r) {
    this.viewportWidth = n, this.viewportHeight = r, this.update();
  }
  /**
   * Zooms the camera in or out based on the specified delta and screen coordinates.
   * @param {number} delta - The zoom factor (positive to zoom in, negative to zoom out).
   * @param {number} x - The x-coordinate on the screen where the zoom is centered.
   * @param {number} y - The y-coordinate on the screen where the zoom is centered.
   */
  zoom(n, r, i) {
    n = n < 0 ? 100 * (this.wEye[2] * 1e-3) : -100 * (this.wEye[2] * 1e-3);
    const a = this.screenCoordToWorldDir(r, i);
    Ye(this.wEye, this.wEye, a, n), Ye(this.wLookAt, this.wEye, this.wEyeDir, gt(this.wEyeDir));
  }
  /**
   * Translates the camera position by the specified delta values in the x and y directions.
   * The translation is scaled by the current eye distance to maintain consistent movement speed.
   * 
   * @param {number} dx - The translation distance in the x direction.
   * @param {number} dy - The translation distance in the y direction.
   */
  translate(n, r) {
    const i = this.wEye[2], a = U();
    Se(a, bt(a, this.wEyeDir, this.wUp));
    const s = Fe(
      U(),
      Ie(U(), a, n * i),
      Ie(U(), this.wUp, r * i)
    );
    Fe(this.wEye, this.wEye, s), Ye(this.wLookAt, this.wEye, this.wEyeDir, gt(this.wEyeDir));
  }
  /**
   * Yaws the camera around the z-axis.
   * @param {number} delta - The amount to yaw the camera (in radians).
   */
  yaw(n) {
    Nn(this.wEyeDir, this.wEyeDir, Be(0, 0, 0), n), Nn(this.wUp, this.wUp, Be(0, 0, 0), n), Ye(this.wLookAt, this.wEye, this.wEyeDir, gt(this.wEyeDir));
  }
  /**
   * Pitches the camera around the x-axis.
   * @param {number} delta - The amount to pitch the camera (in radians).
   */
  pitch(n) {
    n = -n, Fe(
      this.wEyeDir,
      Ie(U(), this.wUp, Math.sin(n)),
      Ie(U(), this.wEyeDir, Math.cos(n))
    ), Se(this.wEyeDir, this.wEyeDir), Ye(this.wLookAt, this.wEye, this.wEyeDir, gt(this.wEyeDir)), bt(this.wUp, bt(U(), this.wEyeDir, this.wUp), this.wEyeDir), Se(this.wUp, this.wUp);
  }
  /**
   * Updates the camera's view and projection matrices.
   */
  update() {
    const n = this.viewportWidth / this.viewportHeight;
    this.mModelMatrix = $i(ce(), Be(1, 1, 1)), Xi(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp), Hi(this.mProjectionMatrix, this.fovy, n, this.wNear, this.wFar);
  }
  /**
   * Converts screen coordinates to world direction vector.
   * @param {number} x - The x-coordinate on the screen.
   * @param {number} y - The y-coordinate on the screen.
   * @returns {vec3} The direction vector in world coordinates.
   */
  screenCoordToWorldDir(n, r) {
    const i = U();
    Se(i, bt(i, this.wEyeDir, this.wUp));
    const a = Ie(U(), this.wUp, Math.tan(this.fovy / 2) * (r - 0.5) * 2), s = this.viewportWidth / this.viewportHeight, o = Ie(U(), i, Math.tan(this.fovy / 2) * (n - 0.5) * 2 * s), f = Fe(U(), a, o), c = Fe(U(), this.wEyeDir, f);
    return Se(c, c), c;
  }
  /**
   * Updates the eye direction and length based on the current eye and look-at positions.
   */
  updateEyeDirAndLen() {
    this.wEyeDir = U(), Wi(this.wEyeDir, this.wLookAt, this.wEye), Se(this.wEyeDir, this.wEyeDir);
  }
}
function Ht(e, n, r) {
  e.prototype = n.prototype = r, r.constructor = e;
}
function En(e, n) {
  var r = Object.create(e.prototype);
  for (var i in n) r[i] = n[i];
  return r;
}
function Ne() {
}
var xe = 0.7, Ce = 1 / xe, Ae = "\\s*([+-]?\\d+)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qi = /^#([0-9a-f]{3,8})$/, Ji = new RegExp(`^rgb\\(${Ae},${Ae},${Ae}\\)$`), ea = new RegExp(`^rgb\\(${te},${te},${te}\\)$`), ta = new RegExp(`^rgba\\(${Ae},${Ae},${Ae},${it}\\)$`), na = new RegExp(`^rgba\\(${te},${te},${te},${it}\\)$`), ra = new RegExp(`^hsl\\(${it},${te},${te}\\)$`), ia = new RegExp(`^hsla\\(${it},${te},${te},${it}\\)$`), On = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ht(Ne, we, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Dn,
  // Deprecated! Use color.formatHex.
  formatHex: Dn,
  formatHex8: aa,
  formatHsl: sa,
  formatRgb: Vn,
  toString: Vn
});
function Dn() {
  return this.rgb().formatHex();
}
function aa() {
  return this.rgb().formatHex8();
}
function sa() {
  return xr(this).formatHsl();
}
function Vn() {
  return this.rgb().formatRgb();
}
function we(e) {
  var n, r;
  return e = (e + "").trim().toLowerCase(), (n = Qi.exec(e)) ? (r = n[1].length, n = parseInt(n[1], 16), r === 6 ? Fn(n) : r === 3 ? new N(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : r === 8 ? mt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : r === 4 ? mt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ji.exec(e)) ? new N(n[1], n[2], n[3], 1) : (n = ea.exec(e)) ? new N(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ta.exec(e)) ? mt(n[1], n[2], n[3], n[4]) : (n = na.exec(e)) ? mt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ra.exec(e)) ? jn(n[1], n[2] / 100, n[3] / 100, 1) : (n = ia.exec(e)) ? jn(n[1], n[2] / 100, n[3] / 100, n[4]) : On.hasOwnProperty(e) ? Fn(On[e]) : e === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function Fn(e) {
  return new N(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mt(e, n, r, i) {
  return i <= 0 && (e = n = r = NaN), new N(e, n, r, i);
}
function vr(e) {
  return e instanceof Ne || (e = we(e)), e ? (e = e.rgb(), new N(e.r, e.g, e.b, e.opacity)) : new N();
}
function pe(e, n, r, i) {
  return arguments.length === 1 ? vr(e) : new N(e, n, r, i ?? 1);
}
function N(e, n, r, i) {
  this.r = +e, this.g = +n, this.b = +r, this.opacity = +i;
}
Ht(N, pe, En(Ne, {
  brighter(e) {
    return e = e == null ? Ce : Math.pow(Ce, e), new N(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xe : Math.pow(xe, e), new N(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new N(_e(this.r), _e(this.g), _e(this.b), Ut(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yn,
  // Deprecated! Use color.formatHex.
  formatHex: Yn,
  formatHex8: oa,
  formatRgb: qn,
  toString: qn
}));
function Yn() {
  return `#${be(this.r)}${be(this.g)}${be(this.b)}`;
}
function oa() {
  return `#${be(this.r)}${be(this.g)}${be(this.b)}${be((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qn() {
  const e = Ut(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${_e(this.r)}, ${_e(this.g)}, ${_e(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ut(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _e(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function be(e) {
  return e = _e(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jn(e, n, r, i) {
  return i <= 0 ? e = n = r = NaN : r <= 0 || r >= 1 ? e = n = NaN : n <= 0 && (e = NaN), new K(e, n, r, i);
}
function xr(e) {
  if (e instanceof K) return new K(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ne || (e = we(e)), !e) return new K();
  if (e instanceof K) return e;
  e = e.rgb();
  var n = e.r / 255, r = e.g / 255, i = e.b / 255, a = Math.min(n, r, i), s = Math.max(n, r, i), o = NaN, f = s - a, c = (s + a) / 2;
  return f ? (n === s ? o = (r - i) / f + (r < i) * 6 : r === s ? o = (i - n) / f + 2 : o = (n - r) / f + 4, f /= c < 0.5 ? s + a : 2 - s - a, o *= 60) : f = c > 0 && c < 1 ? 0 : o, new K(o, f, c, e.opacity);
}
function fa(e, n, r, i) {
  return arguments.length === 1 ? xr(e) : new K(e, n, r, i ?? 1);
}
function K(e, n, r, i) {
  this.h = +e, this.s = +n, this.l = +r, this.opacity = +i;
}
Ht(K, fa, En(Ne, {
  brighter(e) {
    return e = e == null ? Ce : Math.pow(Ce, e), new K(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xe : Math.pow(xe, e), new K(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, n = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * n, a = 2 * r - i;
    return new N(
      sn(e >= 240 ? e - 240 : e + 120, a, i),
      sn(e, a, i),
      sn(e < 120 ? e + 240 : e - 120, a, i),
      this.opacity
    );
  },
  clamp() {
    return new K($n(this.h), _t(this.s), _t(this.l), Ut(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ut(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$n(this.h)}, ${_t(this.s) * 100}%, ${_t(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $n(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function _t(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function sn(e, n, r) {
  return (e < 60 ? n + (r - n) * e / 60 : e < 180 ? r : e < 240 ? n + (r - n) * (240 - e) / 60 : n) * 255;
}
const ca = Math.PI / 180, ua = 180 / Math.PI;
var wr = -0.14861, Bn = 1.78277, In = -0.29227, Xt = -0.90649, at = 1.97294, Hn = at * Xt, Xn = at * Bn, Zn = Bn * In - Xt * wr;
function la(e) {
  if (e instanceof ve) return new ve(e.h, e.s, e.l, e.opacity);
  e instanceof N || (e = vr(e));
  var n = e.r / 255, r = e.g / 255, i = e.b / 255, a = (Zn * i + Hn * n - Xn * r) / (Zn + Hn - Xn), s = i - a, o = (at * (r - a) - In * s) / Xt, f = Math.sqrt(o * o + s * s) / (at * a * (1 - a)), c = f ? Math.atan2(o, s) * ua - 120 : NaN;
  return new ve(c < 0 ? c + 360 : c, f, a, e.opacity);
}
function ne(e, n, r, i) {
  return arguments.length === 1 ? la(e) : new ve(e, n, r, i ?? 1);
}
function ve(e, n, r, i) {
  this.h = +e, this.s = +n, this.l = +r, this.opacity = +i;
}
Ht(ve, ne, En(Ne, {
  brighter(e) {
    return e = e == null ? Ce : Math.pow(Ce, e), new ve(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xe : Math.pow(xe, e), new ve(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * ca, n = +this.l, r = isNaN(this.s) ? 0 : this.s * n * (1 - n), i = Math.cos(e), a = Math.sin(e);
    return new N(
      255 * (n + r * (wr * i + Bn * a)),
      255 * (n + r * (In * i + Xt * a)),
      255 * (n + r * (at * i)),
      this.opacity
    );
  }
}));
class Kn extends Map {
  constructor(n, r = pa) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), n != null) for (const [i, a] of n) this.set(i, a);
  }
  get(n) {
    return super.get(Wn(this, n));
  }
  has(n) {
    return super.has(Wn(this, n));
  }
  set(n, r) {
    return super.set(ha(this, n), r);
  }
  delete(n) {
    return super.delete(da(this, n));
  }
}
function Wn({ _intern: e, _key: n }, r) {
  const i = n(r);
  return e.has(i) ? e.get(i) : r;
}
function ha({ _intern: e, _key: n }, r) {
  const i = n(r);
  return e.has(i) ? e.get(i) : (e.set(i, r), r);
}
function da({ _intern: e, _key: n }, r) {
  const i = n(r);
  return e.has(i) && (r = e.get(i), e.delete(i)), r;
}
function pa(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const ya = Math.sqrt(50), ga = Math.sqrt(10), ba = Math.sqrt(2);
function Gt(e, n, r) {
  const i = (n - e) / Math.max(0, r), a = Math.floor(Math.log10(i)), s = i / Math.pow(10, a), o = s >= ya ? 10 : s >= ga ? 5 : s >= ba ? 2 : 1;
  let f, c, u;
  return a < 0 ? (u = Math.pow(10, -a) / o, f = Math.round(e * u), c = Math.round(n * u), f / u < e && ++f, c / u > n && --c, u = -u) : (u = Math.pow(10, a) * o, f = Math.round(e / u), c = Math.round(n / u), f * u < e && ++f, c * u > n && --c), c < f && 0.5 <= r && r < 2 ? Gt(e, n, r * 2) : [f, c, u];
}
function ma(e, n, r) {
  if (n = +n, e = +e, r = +r, !(r > 0)) return [];
  if (e === n) return [e];
  const i = n < e, [a, s, o] = i ? Gt(n, e, r) : Gt(e, n, r);
  if (!(s >= a)) return [];
  const f = s - a + 1, c = new Array(f);
  if (i)
    if (o < 0) for (let u = 0; u < f; ++u) c[u] = (s - u) / -o;
    else for (let u = 0; u < f; ++u) c[u] = (s - u) * o;
  else if (o < 0) for (let u = 0; u < f; ++u) c[u] = (a + u) / -o;
  else for (let u = 0; u < f; ++u) c[u] = (a + u) * o;
  return c;
}
function hn(e, n, r) {
  return n = +n, e = +e, r = +r, Gt(e, n, r)[2];
}
function _a(e, n, r) {
  n = +n, e = +e, r = +r;
  const i = n < e, a = i ? hn(n, e, r) : hn(e, n, r);
  return (i ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function va(e, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(n).domain(e);
      break;
  }
  return this;
}
function Mr(e, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof n == "function" ? this.interpolator(n) : this.range(n);
      break;
    }
  }
  return this;
}
const Qn = Symbol("implicit");
function Pr() {
  var e = new Kn(), n = [], r = [], i = Qn;
  function a(s) {
    let o = e.get(s);
    if (o === void 0) {
      if (i !== Qn) return i;
      e.set(s, o = n.push(s) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(s) {
    if (!arguments.length) return n.slice();
    n = [], e = new Kn();
    for (const o of s)
      e.has(o) || e.set(o, n.push(o) - 1);
    return a;
  }, a.range = function(s) {
    return arguments.length ? (r = Array.from(s), a) : r.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (i = s, a) : i;
  }, a.copy = function() {
    return Pr(n, r).unknown(i);
  }, va.apply(a, arguments), a;
}
function xa(e, n, r, i, a) {
  var s = e * e, o = s * e;
  return ((1 - 3 * e + 3 * s - o) * n + (4 - 6 * s + 3 * o) * r + (1 + 3 * e + 3 * s - 3 * o) * i + o * a) / 6;
}
function wa(e) {
  var n = e.length - 1;
  return function(r) {
    var i = r <= 0 ? r = 0 : r >= 1 ? (r = 1, n - 1) : Math.floor(r * n), a = e[i], s = e[i + 1], o = i > 0 ? e[i - 1] : 2 * a - s, f = i < n - 1 ? e[i + 2] : 2 * s - a;
    return xa((r - i / n) * n, o, a, s, f);
  };
}
const Zt = (e) => () => e;
function Er(e, n) {
  return function(r) {
    return e + r * n;
  };
}
function Ma(e, n, r) {
  return e = Math.pow(e, r), n = Math.pow(n, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * n, r);
  };
}
function Pa(e, n) {
  var r = n - e;
  return r ? Er(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Zt(isNaN(e) ? n : e);
}
function Ea(e) {
  return (e = +e) == 1 ? Le : function(n, r) {
    return r - n ? Ma(n, r, e) : Zt(isNaN(n) ? r : n);
  };
}
function Le(e, n) {
  var r = n - e;
  return r ? Er(e, r) : Zt(isNaN(e) ? n : e);
}
const Rt = (function e(n) {
  var r = Ea(n);
  function i(a, s) {
    var o = r((a = pe(a)).r, (s = pe(s)).r), f = r(a.g, s.g), c = r(a.b, s.b), u = Le(a.opacity, s.opacity);
    return function(l) {
      return a.r = o(l), a.g = f(l), a.b = c(l), a.opacity = u(l), a + "";
    };
  }
  return i.gamma = e, i;
})(1);
function Ba(e) {
  return function(n) {
    var r = n.length, i = new Array(r), a = new Array(r), s = new Array(r), o, f;
    for (o = 0; o < r; ++o)
      f = pe(n[o]), i[o] = f.r || 0, a[o] = f.g || 0, s[o] = f.b || 0;
    return i = e(i), a = e(a), s = e(s), f.opacity = 1, function(c) {
      return f.r = i(c), f.g = a(c), f.b = s(c), f + "";
    };
  };
}
var Ia = Ba(wa);
function Sa(e, n) {
  n || (n = []);
  var r = e ? Math.min(n.length, e.length) : 0, i = n.slice(), a;
  return function(s) {
    for (a = 0; a < r; ++a) i[a] = e[a] * (1 - s) + n[a] * s;
    return i;
  };
}
function Ta(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ka(e, n) {
  var r = n ? n.length : 0, i = e ? Math.min(r, e.length) : 0, a = new Array(i), s = new Array(r), o;
  for (o = 0; o < i; ++o) a[o] = dt(e[o], n[o]);
  for (; o < r; ++o) s[o] = n[o];
  return function(f) {
    for (o = 0; o < i; ++o) s[o] = a[o](f);
    return s;
  };
}
function Aa(e, n) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, n = +n, function(i) {
    return r.setTime(e * (1 - i) + n * i), r;
  };
}
function J(e, n) {
  return e = +e, n = +n, function(r) {
    return e * (1 - r) + n * r;
  };
}
function La(e, n) {
  var r = {}, i = {}, a;
  (e === null || typeof e != "object") && (e = {}), (n === null || typeof n != "object") && (n = {});
  for (a in n)
    a in e ? r[a] = dt(e[a], n[a]) : i[a] = n[a];
  return function(s) {
    for (a in r) i[a] = r[a](s);
    return i;
  };
}
var dn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, on = new RegExp(dn.source, "g");
function Ca(e) {
  return function() {
    return e;
  };
}
function za(e) {
  return function(n) {
    return e(n) + "";
  };
}
function Br(e, n) {
  var r = dn.lastIndex = on.lastIndex = 0, i, a, s, o = -1, f = [], c = [];
  for (e = e + "", n = n + ""; (i = dn.exec(e)) && (a = on.exec(n)); )
    (s = a.index) > r && (s = n.slice(r, s), f[o] ? f[o] += s : f[++o] = s), (i = i[0]) === (a = a[0]) ? f[o] ? f[o] += a : f[++o] = a : (f[++o] = null, c.push({ i: o, x: J(i, a) })), r = on.lastIndex;
  return r < n.length && (s = n.slice(r), f[o] ? f[o] += s : f[++o] = s), f.length < 2 ? c[0] ? za(c[0].x) : Ca(n) : (n = c.length, function(u) {
    for (var l = 0, h; l < n; ++l) f[(h = c[l]).i] = h.x(u);
    return f.join("");
  });
}
function dt(e, n) {
  var r = typeof n, i;
  return n == null || r === "boolean" ? Zt(n) : (r === "number" ? J : r === "string" ? (i = we(n)) ? (n = i, Rt) : Br : n instanceof we ? Rt : n instanceof Date ? Aa : Ta(n) ? Sa : Array.isArray(n) ? ka : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? La : J)(e, n);
}
function Ir(e, n) {
  return e = +e, n = +n, function(r) {
    return Math.round(e * (1 - r) + n * r);
  };
}
var Jn = 180 / Math.PI, Sr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Tr(e, n, r, i, a, s) {
  var o, f, c;
  return (o = Math.sqrt(e * e + n * n)) && (e /= o, n /= o), (c = e * r + n * i) && (r -= e * c, i -= n * c), (f = Math.sqrt(r * r + i * i)) && (r /= f, i /= f, c /= f), e * i < n * r && (e = -e, n = -n, c = -c, o = -o), {
    translateX: a,
    translateY: s,
    rotate: Math.atan2(n, e) * Jn,
    skewX: Math.atan(c) * Jn,
    scaleX: o,
    scaleY: f
  };
}
var vt;
function Ua(e) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return n.isIdentity ? Sr : Tr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ga(e) {
  return e == null || (vt || (vt = document.createElementNS("http://www.w3.org/2000/svg", "g")), vt.setAttribute("transform", e), !(e = vt.transform.baseVal.consolidate())) ? Sr : (e = e.matrix, Tr(e.a, e.b, e.c, e.d, e.e, e.f));
}
function kr(e, n, r, i) {
  function a(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, l, h, d, p, y) {
    if (u !== h || l !== d) {
      var g = p.push("translate(", null, n, null, r);
      y.push({ i: g - 4, x: J(u, h) }, { i: g - 2, x: J(l, d) });
    } else (h || d) && p.push("translate(" + h + n + d + r);
  }
  function o(u, l, h, d) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), d.push({ i: h.push(a(h) + "rotate(", null, i) - 2, x: J(u, l) })) : l && h.push(a(h) + "rotate(" + l + i);
  }
  function f(u, l, h, d) {
    u !== l ? d.push({ i: h.push(a(h) + "skewX(", null, i) - 2, x: J(u, l) }) : l && h.push(a(h) + "skewX(" + l + i);
  }
  function c(u, l, h, d, p, y) {
    if (u !== h || l !== d) {
      var g = p.push(a(p) + "scale(", null, ",", null, ")");
      y.push({ i: g - 4, x: J(u, h) }, { i: g - 2, x: J(l, d) });
    } else (h !== 1 || d !== 1) && p.push(a(p) + "scale(" + h + "," + d + ")");
  }
  return function(u, l) {
    var h = [], d = [];
    return u = e(u), l = e(l), s(u.translateX, u.translateY, l.translateX, l.translateY, h, d), o(u.rotate, l.rotate, h, d), f(u.skewX, l.skewX, h, d), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, d), u = l = null, function(p) {
      for (var y = -1, g = d.length, v; ++y < g; ) h[(v = d[y]).i] = v.x(p);
      return h.join("");
    };
  };
}
var Ra = kr(Ua, "px, ", "px)", "deg)"), Na = kr(Ga, ", ", ")", ")");
function Ar(e) {
  return (function n(r) {
    r = +r;
    function i(a, s) {
      var o = e((a = ne(a)).h, (s = ne(s)).h), f = Le(a.s, s.s), c = Le(a.l, s.l), u = Le(a.opacity, s.opacity);
      return function(l) {
        return a.h = o(l), a.s = f(l), a.l = c(Math.pow(l, r)), a.opacity = u(l), a + "";
      };
    }
    return i.gamma = n, i;
  })(1);
}
Ar(Pa);
var Sn = Ar(Le);
function Oa(e, n) {
  n === void 0 && (n = e, e = dt);
  for (var r = 0, i = n.length - 1, a = n[0], s = new Array(i < 0 ? 0 : i); r < i; ) s[r] = e(a, a = n[++r]);
  return function(o) {
    var f = Math.max(0, Math.min(i - 1, Math.floor(o *= i)));
    return s[f](o - f);
  };
}
function Kt(e) {
  return e;
}
function Da(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Nt(e, n) {
  if ((r = (e = n ? e.toExponential(n - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, i = e.slice(0, r);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(r + 1)
  ];
}
function ze(e) {
  return e = Nt(Math.abs(e)), e ? e[1] : NaN;
}
function Va(e, n) {
  return function(r, i) {
    for (var a = r.length, s = [], o = 0, f = e[0], c = 0; a > 0 && f > 0 && (c + f + 1 > i && (f = Math.max(1, i - c)), s.push(r.substring(a -= f, a + f)), !((c += f + 1) > i)); )
      f = e[o = (o + 1) % e.length];
    return s.reverse().join(n);
  };
}
function Fa(e) {
  return function(n) {
    return n.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Ya = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ot(e) {
  if (!(n = Ya.exec(e))) throw new Error("invalid format: " + e);
  var n;
  return new Tn({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Ot.prototype = Tn.prototype;
function Tn(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Tn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function qa(e) {
  e: for (var n = e.length, r = 1, i = -1, a; r < n; ++r)
    switch (e[r]) {
      case ".":
        i = a = r;
        break;
      case "0":
        i === 0 && (i = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        i > 0 && (i = 0);
        break;
    }
  return i > 0 ? e.slice(0, i) + e.slice(a + 1) : e;
}
var Lr;
function ja(e, n) {
  var r = Nt(e, n);
  if (!r) return e + "";
  var i = r[0], a = r[1], s = a - (Lr = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = i.length;
  return s === o ? i : s > o ? i + new Array(s - o + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + Nt(e, Math.max(0, n + s - 1))[0];
}
function er(e, n) {
  var r = Nt(e, n);
  if (!r) return e + "";
  var i = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + i : i.length > a + 1 ? i.slice(0, a + 1) + "." + i.slice(a + 1) : i + new Array(a - i.length + 2).join("0");
}
const tr = {
  "%": (e, n) => (e * 100).toFixed(n),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Da,
  e: (e, n) => e.toExponential(n),
  f: (e, n) => e.toFixed(n),
  g: (e, n) => e.toPrecision(n),
  o: (e) => Math.round(e).toString(8),
  p: (e, n) => er(e * 100, n),
  r: er,
  s: ja,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function nr(e) {
  return e;
}
var rr = Array.prototype.map, ir = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $a(e) {
  var n = e.grouping === void 0 || e.thousands === void 0 ? nr : Va(rr.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? nr : Fa(rr.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(h) {
    h = Ot(h);
    var d = h.fill, p = h.align, y = h.sign, g = h.symbol, v = h.zero, w = h.width, _ = h.comma, b = h.precision, m = h.trim, M = h.type;
    M === "n" ? (_ = !0, M = "g") : tr[M] || (b === void 0 && (b = 12), m = !0, M = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var P = g === "$" ? r : g === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", T = g === "$" ? i : /[%p]/.test(M) ? o : "", L = tr[M], Z = /[defgprs%]/.test(M);
    b = b === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function O(B) {
      var D = P, R = T, q, ie, ae;
      if (M === "c")
        R = L(B) + R, B = "";
      else {
        B = +B;
        var k = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? c : L(Math.abs(B), b), m && (B = qa(B)), k && +B == 0 && y !== "+" && (k = !1), D = (k ? y === "(" ? y : f : y === "-" || y === "(" ? "" : y) + D, R = (M === "s" ? ir[8 + Lr / 3] : "") + R + (k && y === "(" ? ")" : ""), Z) {
          for (q = -1, ie = B.length; ++q < ie; )
            if (ae = B.charCodeAt(q), 48 > ae || ae > 57) {
              R = (ae === 46 ? a + B.slice(q + 1) : B.slice(q)) + R, B = B.slice(0, q);
              break;
            }
        }
      }
      _ && !v && (B = n(B, 1 / 0));
      var H = D.length + B.length + R.length, V = H < w ? new Array(w - H + 1).join(d) : "";
      switch (_ && v && (B = n(V + B, V.length ? w - R.length : 1 / 0), V = ""), p) {
        case "<":
          B = D + B + R + V;
          break;
        case "=":
          B = D + V + B + R;
          break;
        case "^":
          B = V.slice(0, H = V.length >> 1) + D + B + R + V.slice(H);
          break;
        default:
          B = V + D + B + R;
          break;
      }
      return s(B);
    }
    return O.toString = function() {
      return h + "";
    }, O;
  }
  function l(h, d) {
    var p = u((h = Ot(h), h.type = "f", h)), y = Math.max(-8, Math.min(8, Math.floor(ze(d) / 3))) * 3, g = Math.pow(10, -y), v = ir[8 + y / 3];
    return function(w) {
      return p(g * w) + v;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var xt, Cr, zr;
Ha({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ha(e) {
  return xt = $a(e), Cr = xt.format, zr = xt.formatPrefix, xt;
}
function Xa(e) {
  return Math.max(0, -ze(Math.abs(e)));
}
function Za(e, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ze(n) / 3))) * 3 - ze(Math.abs(e)));
}
function Ka(e, n) {
  return e = Math.abs(e), n = Math.abs(n) - e, Math.max(0, ze(n) - ze(e)) + 1;
}
function Wa(e, n, r, i) {
  var a = _a(e, n, r), s;
  switch (i = Ot(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(n));
      return i.precision == null && !isNaN(s = Za(a, o)) && (i.precision = s), zr(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = Ka(a, Math.max(Math.abs(e), Math.abs(n)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = Xa(a)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return Cr(i);
}
function Ur(e) {
  var n = e.domain;
  return e.ticks = function(r) {
    var i = n();
    return ma(i[0], i[i.length - 1], r ?? 10);
  }, e.tickFormat = function(r, i) {
    var a = n();
    return Wa(a[0], a[a.length - 1], r ?? 10, i);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var i = n(), a = 0, s = i.length - 1, o = i[a], f = i[s], c, u, l = 10;
    for (f < o && (u = o, o = f, f = u, u = a, a = s, s = u); l-- > 0; ) {
      if (u = hn(o, f, r), u === c)
        return i[a] = o, i[s] = f, n(i);
      if (u > 0)
        o = Math.floor(o / u) * u, f = Math.ceil(f / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, f = Math.floor(f * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function Qa() {
  var e = 0, n = 1, r, i, a, s, o = Kt, f = !1, c;
  function u(h) {
    return h == null || isNaN(h = +h) ? c : o(a === 0 ? 0.5 : (h = (s(h) - r) * a, f ? Math.max(0, Math.min(1, h)) : h));
  }
  u.domain = function(h) {
    return arguments.length ? ([e, n] = h, r = s(e = +e), i = s(n = +n), a = r === i ? 0 : 1 / (i - r), u) : [e, n];
  }, u.clamp = function(h) {
    return arguments.length ? (f = !!h, u) : f;
  }, u.interpolator = function(h) {
    return arguments.length ? (o = h, u) : o;
  };
  function l(h) {
    return function(d) {
      var p, y;
      return arguments.length ? ([p, y] = d, o = h(p, y), u) : [o(0), o(1)];
    };
  }
  return u.range = l(dt), u.rangeRound = l(Ir), u.unknown = function(h) {
    return arguments.length ? (c = h, u) : c;
  }, function(h) {
    return s = h, r = h(e), i = h(n), a = r === i ? 0 : 1 / (i - r), u;
  };
}
function Gr(e, n) {
  return n.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function kt() {
  var e = Ur(Qa()(Kt));
  return e.copy = function() {
    return Gr(e, kt());
  }, Mr.apply(e, arguments);
}
function Ja() {
  var e = 0, n = 0.5, r = 1, i = 1, a, s, o, f, c, u = Kt, l, h = !1, d;
  function p(g) {
    return isNaN(g = +g) ? d : (g = 0.5 + ((g = +l(g)) - s) * (i * g < i * s ? f : c), u(h ? Math.max(0, Math.min(1, g)) : g));
  }
  p.domain = function(g) {
    return arguments.length ? ([e, n, r] = g, a = l(e = +e), s = l(n = +n), o = l(r = +r), f = a === s ? 0 : 0.5 / (s - a), c = s === o ? 0 : 0.5 / (o - s), i = s < a ? -1 : 1, p) : [e, n, r];
  }, p.clamp = function(g) {
    return arguments.length ? (h = !!g, p) : h;
  }, p.interpolator = function(g) {
    return arguments.length ? (u = g, p) : u;
  };
  function y(g) {
    return function(v) {
      var w, _, b;
      return arguments.length ? ([w, _, b] = v, u = Oa(g, [w, _, b]), p) : [u(0), u(0.5), u(1)];
    };
  }
  return p.range = y(dt), p.rangeRound = y(Ir), p.unknown = function(g) {
    return arguments.length ? (d = g, p) : d;
  }, function(g) {
    return l = g, a = g(e), s = g(n), o = g(r), f = a === s ? 0 : 0.5 / (s - a), c = s === o ? 0 : 0.5 / (o - s), i = s < a ? -1 : 1, p;
  };
}
function Rr() {
  var e = Ur(Ja()(Kt));
  return e.copy = function() {
    return Gr(e, Rr());
  }, Mr.apply(e, arguments);
}
function E(e) {
  for (var n = e.length / 6 | 0, r = new Array(n), i = 0; i < n; ) r[i] = "#" + e.slice(i * 6, ++i * 6);
  return r;
}
const es = E("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ts = E("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), ns = E("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), rs = E("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), is = E("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), as = E("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), ss = E("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), os = E("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), fs = E("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), cs = E("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), us = E("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), S = (e) => Ia(e[e.length - 1]);
var Nr = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(E);
const ls = S(Nr);
var Or = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(E);
const hs = S(Or);
var Dr = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(E);
const ds = S(Dr);
var Vr = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(E);
const ps = S(Vr);
var Fr = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(E);
const ys = S(Fr);
var Yr = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(E);
const gs = S(Yr);
var qr = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(E);
const bs = S(qr);
var jr = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(E);
const ms = S(jr);
var $r = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(E);
const _s = S($r);
var Hr = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(E);
const vs = S(Hr);
var Xr = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(E);
const xs = S(Xr);
var Zr = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(E);
const ws = S(Zr);
var Kr = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(E);
const Ms = S(Kr);
var Wr = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(E);
const Ps = S(Wr);
var Qr = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(E);
const Es = S(Qr);
var Jr = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(E);
const Bs = S(Jr);
var ei = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(E);
const Is = S(ei);
var ti = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(E);
const Ss = S(ti);
var ni = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(E);
const Ts = S(ni);
var ri = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(E);
const ks = S(ri);
var ii = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(E);
const As = S(ii);
var ai = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(E);
const Ls = S(ai);
var si = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(E);
const Cs = S(si);
var oi = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(E);
const zs = S(oi);
var fi = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(E);
const Us = S(fi);
var ci = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(E);
const Gs = S(ci);
var ui = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(E);
const Rs = S(ui);
function Ns(e) {
  return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
const Os = Sn(ne(300, 0.5, 0), ne(-240, 0.5, 1));
var Ds = Sn(ne(-100, 0.75, 0.35), ne(80, 1.5, 0.8)), Vs = Sn(ne(260, 0.75, 0.35), ne(80, 1.5, 0.8)), wt = ne();
function Fs(e) {
  (e < 0 || e > 1) && (e -= Math.floor(e));
  var n = Math.abs(e - 0.5);
  return wt.h = 360 * e - 100, wt.s = 1.5 - 1.5 * n, wt.l = 0.8 - 0.9 * n, wt + "";
}
var Mt = pe(), Ys = Math.PI / 3, qs = Math.PI * 2 / 3;
function js(e) {
  var n;
  return e = (0.5 - e) * Math.PI, Mt.r = 255 * (n = Math.sin(e)) * n, Mt.g = 255 * (n = Math.sin(e + Ys)) * n, Mt.b = 255 * (n = Math.sin(e + qs)) * n, Mt + "";
}
function $s(e) {
  return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
function Wt(e) {
  var n = e.length;
  return function(r) {
    return e[Math.max(0, Math.min(n - 1, Math.floor(r * n)))];
  };
}
const Hs = Wt(E("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var Xs = Wt(E("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Zs = Wt(E("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Ks = Wt(E("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
const qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interpolateBlues: Ls,
  interpolateBrBG: ls,
  interpolateBuGn: vs,
  interpolateBuPu: xs,
  interpolateCividis: Ns,
  interpolateCool: Vs,
  interpolateCubehelixDefault: Os,
  interpolateGnBu: ws,
  interpolateGreens: Cs,
  interpolateGreys: zs,
  interpolateInferno: Zs,
  interpolateMagma: Xs,
  interpolateOrRd: Ms,
  interpolateOranges: Rs,
  interpolatePRGn: hs,
  interpolatePiYG: ds,
  interpolatePlasma: Ks,
  interpolatePuBu: Es,
  interpolatePuBuGn: Ps,
  interpolatePuOr: ps,
  interpolatePuRd: Bs,
  interpolatePurples: Us,
  interpolateRainbow: Fs,
  interpolateRdBu: ys,
  interpolateRdGy: gs,
  interpolateRdPu: Is,
  interpolateRdYlBu: bs,
  interpolateRdYlGn: ms,
  interpolateReds: Gs,
  interpolateSinebow: js,
  interpolateSpectral: _s,
  interpolateTurbo: $s,
  interpolateViridis: Hs,
  interpolateWarm: Ds,
  interpolateYlGn: Ts,
  interpolateYlGnBu: Ss,
  interpolateYlOrBr: ks,
  interpolateYlOrRd: As,
  schemeAccent: ts,
  schemeBlues: ai,
  schemeBrBG: Nr,
  schemeBuGn: Hr,
  schemeBuPu: Xr,
  schemeCategory10: es,
  schemeDark2: ns,
  schemeGnBu: Zr,
  schemeGreens: si,
  schemeGreys: oi,
  schemeObservable10: rs,
  schemeOrRd: Kr,
  schemeOranges: ui,
  schemePRGn: Or,
  schemePaired: is,
  schemePastel1: as,
  schemePastel2: ss,
  schemePiYG: Dr,
  schemePuBu: Qr,
  schemePuBuGn: Wr,
  schemePuOr: Vr,
  schemePuRd: Jr,
  schemePurples: fi,
  schemeRdBu: Fr,
  schemeRdGy: Yr,
  schemeRdPu: ei,
  schemeRdYlBu: qr,
  schemeRdYlGn: jr,
  schemeReds: ci,
  schemeSet1: os,
  schemeSet2: fs,
  schemeSet3: cs,
  schemeSpectral: $r,
  schemeTableau10: us,
  schemeYlGn: ni,
  schemeYlGnBu: ti,
  schemeYlOrBr: ri,
  schemeYlOrRd: ii
}, Symbol.toStringTag, { value: "Module" }));
var I = /* @__PURE__ */ ((e) => (e.AUTK_OSM_SURFACE = "surface", e.AUTK_OSM_PARKS = "parks", e.AUTK_OSM_WATER = "water", e.AUTK_OSM_ROADS = "roads", e.AUTK_OSM_BUILDINGS = "buildings", e.AUTK_GEO_POINTS = "points", e.AUTK_GEO_POLYLINES = "polylines", e.AUTK_GEO_POLYGONS = "polygons", e.AUTK_RASTER = "raster", e))(I || {}), At = /* @__PURE__ */ ((e) => (e.PICK = "pick", e))(At || {}), ee = /* @__PURE__ */ ((e) => (e.AGGREGATION_POINT = "aggregationPoint", e.AGGREGATION_PRIMITIVE = "aggregationPrimitive", e.AGGREGATION_COMPONENT = "aggregationComponent", e))(ee || {}), G = /* @__PURE__ */ ((e) => (e.SEQUENTIAL_REDS = "interpolateReds", e.SEQUENTIAL_BLUES = "interpolateBlues", e.DIVERGING_RED_BLUE = "interpolateRdBu", e.OBSERVABLE10 = "schemeObservable10", e))(G || {}), We = /* @__PURE__ */ ((e) => (e.MOUSE_IDLE = "mouseIdle", e.MOUSE_DRAG = "mouseDrag", e))(We || {});
class W {
  /**
   * The color map interpolator function.
   * This is set when a color map is requested.
   */
  static _interpolator;
  /**
   * ColorMap class provides methods to handle color mapping and interpolation.
   * 
   * It allows retrieval of colors based on values and color map interpolators,
   * as well as conversion between RGB and HEX color formats.
   * @param {number | string} value The value to get the color for
   * @param {ColorMapInterpolator} color The color map interpolator to use
   * @returns {ColorRGB} The RGB color
   */
  static getColor(n, r) {
    W._interpolator = W.buildInterpolator(r);
    const i = /\d+/g, a = W._interpolator(n), s = pe(a).formatRgb().match(i);
    if (s === null)
      return { r: 0, g: 0, b: 0, opacity: 1 };
    const o = s.map((f) => +f);
    return { r: o[0], g: o[1], b: o[2], opacity: 1 };
  }
  /**
   * Get color map for a specific color map interpolator
   * @param {ColorMapInterpolator} color The color map interpolator to use
   * @param {number} res The resolution of the color map
   * @returns {ColorTEX} The texture representation of the color map
   */
  static getColorMap(n, r = 256) {
    const i = [];
    for (let a = 0; a < r; a++) {
      const s = a / (r - 1), o = W.getColor(s, n);
      i.push(o.r, o.g, o.b, 1);
    }
    return i;
  }
  /**
   * Get color array used by interpolator
   * @param {ColorMapInterpolator} color The color map interpolator to use
   * @param {number} res The resolution of the color map
   * @returns {ColorRGB} The array of colors
   */
  static getColorArray(n, r = 256) {
    const i = [];
    for (let a = 0; a < r; a++) {
      const s = a / (r - 1), o = W.getColor(s, n);
      i.push(o);
    }
    return i;
  }
  /**
   * Convert RGB color to HEX format
   * @param {ColorRGB} color The RGB color to convert
   * @returns {ColorHEX} The HEX representation of the color
   */
  static rgbToHex(n) {
    return pe(n.r, n.g, n.b, 1).formatHex();
  }
  /**
   * Convert HEX color to RGB format
   * @param {ColorHEX} color The HEX color to convert
   * @returns {ColorRGB} The RGB representation of the color
   */
  static hexToRgb(n) {
    const r = pe(n);
    return { r: r.r, g: r.g, b: r.b, opacity: 1 };
  }
  /**
   * Build a color interpolator function for the given color map.
   * @param color The color map interpolator to use
   * @returns A function that takes a number t in [0, 1] and returns a color string.
   */
  static buildInterpolator(n) {
    if (n === G.SEQUENTIAL_REDS) {
      const r = kt(qe[G.SEQUENTIAL_REDS]);
      return (i) => r.domain([
        0,
        1
      ])(i);
    } else if (n === G.SEQUENTIAL_BLUES) {
      const r = kt(qe[G.SEQUENTIAL_BLUES]);
      return (i) => r.domain([
        0,
        1
      ])(i);
    } else if (n === G.DIVERGING_RED_BLUE) {
      const r = Rr(qe[G.DIVERGING_RED_BLUE]);
      return (i) => r.domain([
        0,
        0.5,
        1
      ])(i);
    } else if (n === G.OBSERVABLE10) {
      const r = Pr(qe[G.OBSERVABLE10]);
      return (i) => r.domain([
        "0.0",
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9"
      ])(i.toFixed(1));
    } else {
      const r = kt(qe[G.SEQUENTIAL_BLUES]);
      return (i) => r.domain([
        0,
        1
      ])(i);
    }
  }
}
const Ws = "#FFFFFF", Qs = "#FAFAFA", Js = "#cccccd", eo = "#F6F6F6", to = "#bbbbbb", no = "#cbcbcb", ro = "#999", io = "#bbb", ao = "#cbcbcb", so = {
  background: Ws,
  surface: Qs,
  parks: Js,
  water: eo,
  roads: to,
  buildings: no,
  points: ro,
  polylines: io,
  polygons: ao
}, oo = "#DFDFDF", fo = "#AAAAAA", co = "#191b1a", uo = "#191b1a", lo = "#454545", ho = "#DFDFDF", po = "#DFDFDF", yo = "#DFDFDF", go = "#DFDFDF", bo = {
  background: oo,
  surface: fo,
  parks: co,
  water: uo,
  roads: lo,
  buildings: ho,
  points: po,
  polylines: yo,
  polygons: go
};
class Y {
  /**
   * Default map style
   */
  static _default = {
    background: "#bed2d7",
    surface: "#EFEFEF",
    parks: "#C3D0B2",
    water: "#bed2d7",
    roads: "#d9b504",
    buildings: "#DFDFDF",
    points: "#7f7f7fff",
    polylines: "#DFDFDF",
    polygons: "#DFDFDF"
  };
  /**
   * Not found color
   */
  static _notFound = "#FFFFFF";
  /**
   * Highlight color
   */
  static _highlight = "#5dade2";
  /**
   * Current map style
   */
  static _current = Y._default;
  /**
   * Current map style id
   */
  static _currentStyle = "default";
  /**
   * Get the current map style id
   * @return {string} The current map style id
   */
  static get currentStyle() {
    return Y._currentStyle;
  }
  /**
   * Get the feature color
   * @param {string} type Feature type
   */
  static getColor(n) {
    const r = Y._current[n] || Y._notFound;
    return W.hexToRgb(r);
  }
  /**
   * Set the feature color
   * @param {string} style new map style in id: #rrggbb format
   */
  static setPredefinedStyle(n) {
    let r = Y._default, i = "default";
    n === "light" ? (r = so, i = "light") : n === "dark" && (r = bo, i = "dark"), Y._current = r, Y._currentStyle = i;
  }
  /**
   * Set the feature color
   * @param {string} style new map style json
   */
  static setCustomStyle(n) {
    Y._current = n;
  }
  /**
   * Get the highlight color
   * @returns {ColorRGB} The highlight color
   */
  static getHighlightColor() {
    return W.hexToRgb(Y._highlight);
  }
}
class mo {
  /**
   * Reference to the AutkMap instance.
   * @type {AutkMap}
   */
  _map;
  /**
   * Constructor for KeyEvents
   * @param {AutkMap} map The map instance
   */
  constructor(n) {
    this._map = n;
  }
  /**
   * Key events binding function
   */
  bindEvents() {
    document.removeEventListener("keyup", this.keyUp.bind(this), !1), document.addEventListener("keyup", this.keyUp.bind(this), !1);
  }
  /**
   * Handles key up event
   * @param {KeyboardEvent} event The fired event
   */
  async keyUp(n) {
    if (n.key == "s") {
      const r = ["default", "light"], i = Y.currentStyle, a = (r.indexOf(i) + 1) % 3;
      Y.setPredefinedStyle(r[a]);
      for (const s of this._map.layerManager.vectorLayers)
        s.makeLayerRenderInfoDirty();
    }
  }
}
class ye {
  static build(n) {
    if (n.features.length === 0)
      throw new Error("Feature collection is empty");
    const r = n.features[0].geometry.type;
    switch (r) {
      case "Point":
        return ye.buildFromPoints(n);
      case "LineString":
        return ye.buildFromLines(n);
      case "MultiLineString":
        return ye.buildFromMultiLines(n);
      case "Polygon":
        return ye.buildFromPolygons(n);
      case "MultiPolygon":
        return ye.buildFromMultiPolygons(n);
      default:
        throw new Error(`Unsupported geometry type: ${r}`);
    }
  }
  static buildFromPoints(n) {
    let r = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    for (const o of n.features)
      if (o.geometry.type === "Point") {
        const f = o.geometry.coordinates, c = f[0], u = f[1];
        r = Math.min(r, c), i = Math.min(i, u), a = Math.max(a, c), s = Math.max(s, u);
      }
    return [r, i, a, s];
  }
  static buildFromLines(n) {
    let r = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    for (const o of n.features)
      if (o.geometry.type === "LineString") {
        const f = o.geometry.coordinates;
        for (const c of f) {
          const u = c[0], l = c[1];
          r = Math.min(r, u), i = Math.min(i, l), a = Math.max(a, u), s = Math.max(s, l);
        }
      }
    return [r, i, a, s];
  }
  static buildFromMultiLines(n) {
    let r = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    for (const o of n.features)
      if (o.geometry.type === "MultiLineString") {
        const f = o.geometry.coordinates;
        for (const c of f)
          for (const u of c) {
            const l = u[0], h = u[1];
            r = Math.min(r, l), i = Math.min(i, h), a = Math.max(a, l), s = Math.max(s, h);
          }
      }
    return [r, i, a, s];
  }
  static buildFromPolygons(n) {
    let r = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    for (const o of n.features)
      if (o.geometry.type === "Polygon") {
        const f = o.geometry.coordinates;
        for (const c of f)
          for (const u of c) {
            const l = u[0], h = u[1];
            r = Math.min(r, l), i = Math.min(i, h), a = Math.max(a, l), s = Math.max(s, h);
          }
      }
    return [r, i, a, s];
  }
  static buildFromMultiPolygons(n) {
    let r = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    for (const o of n.features)
      if (o.geometry.type === "MultiPolygon") {
        const f = o.geometry.coordinates;
        for (const c of f)
          for (const u of c)
            for (const l of u) {
              const h = l[0], d = l[1];
              r = Math.min(r, h), i = Math.min(i, d), a = Math.max(a, h), s = Math.max(s, d);
            }
      }
    return [r, i, a, s];
  }
}
class li {
  /**
   * Layer information.
   * @type {ILayerInfo}
   */
  _layerInfo;
  /**
   * Layer rendering information.
   * @type {ILayerRenderInfo}
   */
  _layerRenderInfo;
  /**
   * Indicates if the layer's rendering information is dirty.
   * This is used to determine if uniforms need to be reloaded.
   * @type {boolean}
   */
  _renderInfoIsDirty = !1;
  /**
   * Indicates if the layer's data is dirty.
   * This is used to determine if VOBs need to be reconstructed.
   * @type {boolean}
   */
  _dataIsDirty = !1;
  /**
   * Constructor for Layer
   * @param {ILayerInfo} layerInfo - The layer information.
   * @param {ILayerRenderInfo} layerRenderInfo - The layer render information.
   */
  constructor(n, r) {
    this._layerInfo = n, this._layerRenderInfo = r;
  }
  /**
   * Gets the information of the layer.
   * @returns {string} The information of the layer.
   */
  get layerInfo() {
    return this._layerInfo;
  }
  /**
   * Sets the information of the layer.
   * @param {ILayerInfo} layerInfo - The info to set for the layer.
   */
  set layerInfo(n) {
    this._layerInfo = n;
  }
  /**
   * Gets the rendering information of the layer.
   * @returns {ILayerRenderInfo} The rendering information of the layer.
   */
  get layerRenderInfo() {
    return this._layerRenderInfo;
  }
  /**
   * Sets the rendering information of the layer.
   * @param {ILayerRenderInfo} layerRenderInfo - The rendering info to set for the layer.
   */
  set layerRenderInfo(n) {
    this._layerRenderInfo = n;
  }
  /**
   * Marks the layer's data as dirty, indicating that VOBs need to be reconstructed.
   */
  makeLayerDataDirty() {
    this._dataIsDirty = !0;
  }
  /**
   * Marks the layer's rendering information as dirty, indicating uniforms need to be reloaded.
   */
  makeLayerRenderInfoDirty() {
    this._renderInfoIsDirty = !0;
  }
}
var _o = `@group(1) @binding(0) var<uniform> modelView: mat4x4f;
@group(1) @binding(1) var<uniform> projection: mat4x4f;

struct VSOut {
    @builtin(position) outPosition: vec4<f32>,
    @location(0) outTexCoord: vec2<f32>,
 };

@vertex
fn main(@location(0) inPosition: vec3f, @location(1) inTexCoord: vec2f) -> VSOut {
    var vsOut: VSOut;

    vsOut.outPosition = projection * modelView * vec4f(inPosition, 1);
    vsOut.outTexCoord = inTexCoord;

    return vsOut;
}`, vo = `@group(0) @binding(6) var<uniform> opacity : f32;

@group(2) @binding(0) var rasterData : texture_2d<f32>;
@group(2) @binding(1) var rasterSampler : sampler;

@fragment 
fn main(@location(0) inTexCoord: vec2f) -> @location(0) vec4f {
    var color = textureSample(rasterData, rasterSampler, inTexCoord);

    return vec4f(color.rgb * opacity, color.a * opacity);
}`;
class pt {
  /**
   * Renderer reference
   */
  _renderer;
  /**
   * ModelView matrix uniform buffer
   */
  _mviewBuffer;
  /**
   * Projection matrix uniform buffer
   */
  _projcBuffer;
  /**
   * Camera bind group
   */
  _cameraBindGroup;
  /**
   * Camera bind group layout
   */
  _cameraBindGroupLayout;
  /**
   * Color uniform buffer
   */
  _colorBuffer;
  /**
   * Highlight color uniform buffer
   */
  _highlightColorBuffer;
  /**
   * Color map texture
   */
  _cMapTexture;
  /**
   * Use color map uniform buffer
   */
  _useColorMap;
  /**
   * Use highlight uniform buffer
   */
  _useHighlight;
  /**
   * Opacity uniform buffer
   */
  _opacity;
  /**
   * Render information bind group
   */
  _renderInfoBindGroup;
  /**
   * Render information bind group layout
   */
  _renderInfoBindGroupLayout;
  /**
   * Pipeline constructor
   * @param {Renderer} renderer The renderer instance
   */
  constructor(n) {
    this._renderer = n;
  }
  /**
   * Creates the camera uniform bind group.
   */
  createCameraUniformBindGroup() {
    this._mviewBuffer = this._renderer.device.createBuffer({
      label: "ModelView matrix buffer",
      size: 64,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._projcBuffer = this._renderer.device.createBuffer({
      label: "Projection matrix buffer",
      size: 64,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._cameraBindGroupLayout = this._renderer.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          // modelview
          visibility: GPUShaderStage.VERTEX,
          buffer: {}
        },
        {
          binding: 1,
          // projection
          visibility: GPUShaderStage.VERTEX,
          buffer: {}
        }
      ]
    }), this._cameraBindGroup = this._renderer.device.createBindGroup({
      layout: this._cameraBindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: this._mviewBuffer }
        },
        {
          binding: 1,
          resource: { buffer: this._projcBuffer }
        }
      ]
    });
  }
  /**
   * Updates the camera uniform buffers with the current camera state.
   * @param {Camera} camera The camera instance
   */
  updateCameraUniforms(n) {
    const r = new Float32Array(n.getModelViewMatrix()), i = new Float32Array(n.getProjectionMatrix());
    this._renderer.device.queue.writeBuffer(this._mviewBuffer, 0, r), this._renderer.device.queue.writeBuffer(this._projcBuffer, 0, i);
  }
  /**
   * Creates the color uniform bind group.
   */
  createColorUniformBindGroup() {
    this._colorBuffer = this._renderer.device.createBuffer({
      label: "Fixed color buffer",
      size: 16,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._highlightColorBuffer = this._renderer.device.createBuffer({
      label: "Highlight color buffer",
      size: 16,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._useColorMap = this._renderer.device.createBuffer({
      label: "Enable colormap on render",
      size: 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._useHighlight = this._renderer.device.createBuffer({
      label: "Enable highlight on render",
      size: 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._cMapTexture = this._renderer.device.createTexture({
      label: "Colormap texture",
      size: { width: 256, height: 1 },
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
      format: "rgba8unorm"
    });
    const n = this._renderer.device.createSampler({
      label: "Fixed color buffer",
      magFilter: "linear",
      minFilter: "linear",
      addressModeU: "clamp-to-edge",
      addressModeV: "clamp-to-edge"
    });
    this._opacity = this._renderer.device.createBuffer({
      label: "Enable opacity on render",
      size: 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    }), this._renderInfoBindGroupLayout = this._renderer.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          // fixed color
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {}
        },
        {
          binding: 1,
          // highlight color
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {}
        },
        {
          binding: 2,
          // show thematic data
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {}
        },
        {
          binding: 3,
          // show highlight
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {}
        },
        {
          binding: 4,
          // cMap texture
          visibility: GPUShaderStage.FRAGMENT,
          texture: {}
        },
        {
          binding: 5,
          // cMap sampler
          visibility: GPUShaderStage.FRAGMENT,
          sampler: {}
        },
        {
          binding: 6,
          // opacity
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {}
        }
      ]
    }), this._renderInfoBindGroup = this._renderer.device.createBindGroup({
      layout: this._renderInfoBindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: this._colorBuffer }
        },
        {
          binding: 1,
          resource: { buffer: this._highlightColorBuffer }
        },
        {
          binding: 2,
          resource: { buffer: this._useColorMap }
        },
        {
          binding: 3,
          resource: { buffer: this._useHighlight }
        },
        {
          binding: 4,
          resource: this._cMapTexture.createView()
        },
        {
          binding: 5,
          resource: n
        },
        {
          binding: 6,
          resource: { buffer: this._opacity }
        }
      ]
    });
  }
  /**
   * Updates the color uniform buffers with the current layer state.
   * @param {Layer} layer The layer instance
   */
  updateColorUniforms(n) {
    const r = {
      color: Y.getColor(n.layerInfo.typeLayer),
      highlightColor: Y.getHighlightColor(),
      colorMap: W.getColorMap(n.layerRenderInfo.colorMapInterpolator),
      useColorMap: n.layerRenderInfo.isColorMap,
      useHighlight: n.layerRenderInfo.isPick,
      opacity: n.layerRenderInfo.opacity
    }, i = new Float32Array(Object.values(r.color)), a = new Float32Array(Object.values(r.highlightColor)), s = new Float32Array([r.useColorMap ? 1 : 0]), o = new Float32Array([r.useHighlight ? 1 : 0]), f = new Uint8Array(r.colorMap), c = new Float32Array([r.opacity]);
    this._renderer.device.queue.writeBuffer(this._colorBuffer, 0, i), this._renderer.device.queue.writeBuffer(this._highlightColorBuffer, 0, a), this._renderer.device.queue.writeBuffer(this._useHighlight, 0, o), this._renderer.device.queue.writeBuffer(this._useColorMap, 0, s), this._renderer.device.queue.writeTexture(
      { texture: this._cMapTexture },
      f,
      {},
      { width: 256, height: 1 }
    ), this._renderer.device.queue.writeBuffer(this._opacity, 0, c);
  }
}
class xo extends pt {
  /**
   * Position buffer for vertex data.
   * @type {GPUBuffer}
   */
  _positionBuffer;
  /**
   * Buffer for primitive indices.
   * @type {GPUBuffer}
   */
  _texCoordBuffer;
  /**
   * Buffer for primitive indices.
   * @type {GPUBuffer}
   */
  _indicesBuffer;
  /**
   * Vertex shader module.
   * @type {GPUShaderModule}
   */
  _vertModule;
  /**
   * Fragment shader module.
   * @type {GPUShaderModule}
   */
  _fragModule;
  /**
   * Render pipeline for drawing triangles.
   * @type {GPURenderPipeline}
   */
  _pipeline;
  /**
   * Raster uniform buffer
   */
  _rasterBuffer;
  /**
   * Raster bind group
   */
  _rasterBindGroup;
  /**
   * Raster bind group layout
   */
  _rasterBindGroupLayout;
  /**
   * Constructor for PipelineTriangleFlat
   * @param {Renderer} renderer The renderer instance
   */
  constructor(n) {
    super(n);
  }
  /**
   * Builds the pipeline with the provided mesh data.
   * @param {RasterLayer} mesh The mesh data containing positions, thematic, and indices
   */
  build(n) {
    this.createShaders(), this.createVertexBuffers(n), this.createRasterUniformBindGroup(n), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.updateVertexBuffers(n), this.updateColorUniforms(n), this.updateRasterUniforms(n), this.createPipeline();
  }
  /**
   * Creates the vertex and fragment shaders for the pipeline.
   */
  createShaders() {
    const n = {
      code: _o
    };
    this._vertModule = this._renderer.device.createShaderModule(n);
    const r = {
      code: vo
    };
    this._fragModule = this._renderer.device.createShaderModule(r);
  }
  /**
   * Creates the vertex buffers for the pipeline.
   * @param {RasterLayer} raster The mesh data containing positions, thematic, and indices
   */
  createVertexBuffers(n) {
    this._positionBuffer = this._renderer.device.createBuffer({
      label: "Position buffer",
      size: n.position.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._texCoordBuffer = this._renderer.device.createBuffer({
      label: "Texture coordinates buffer",
      size: n.texCoord.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._indicesBuffer = this._renderer.device.createBuffer({
      label: "Primitive indices buffer",
      size: n.indices.length * 4,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
    });
  }
  /**
   * Updates the vertex buffers with the provided mesh data.
   * @param {RasterLayer} mesh The mesh data containing positions, thematic, and indices
   */
  updateVertexBuffers(n) {
    this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, new Float32Array(n.position)), this._renderer.device.queue.writeBuffer(this._texCoordBuffer, 0, new Float32Array(n.texCoord)), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, new Uint32Array(n.indices));
  }
  /**
   * Creates the raster uniform bind group.
   */
  createRasterUniformBindGroup(n) {
    this._rasterBuffer = this._renderer.device.createTexture({
      label: "Raster texture",
      size: { width: n.rasterResX, height: n.rasterResY },
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
      format: "rgba8unorm"
    });
    const r = this._renderer.device.createSampler({
      label: "Raster sampler",
      magFilter: "linear",
      minFilter: "linear",
      addressModeU: "clamp-to-edge",
      addressModeV: "clamp-to-edge"
    });
    this._rasterBindGroupLayout = this._renderer.device.createBindGroupLayout({
      label: "Raster bind group layout",
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {}
        },
        {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          sampler: {}
        }
      ]
    }), this._rasterBindGroup = this._renderer.device.createBindGroup({
      layout: this._rasterBindGroupLayout,
      label: "Raster bind group",
      entries: [
        {
          binding: 0,
          resource: this._rasterBuffer.createView()
        },
        {
          binding: 1,
          resource: r
        }
      ]
    });
  }
  /**
   * Updates the raster uniform buffer with the provided raster data.
   * @param {RasterLayer} raster The raster layer containing raster data
   */
  updateRasterUniforms(n) {
    const r = new Uint8Array(n.rasterData);
    this._renderer.device.queue.writeTexture(
      { texture: this._rasterBuffer },
      r,
      {
        bytesPerRow: n.rasterResX * 4,
        rowsPerImage: n.rasterResY
      },
      { width: n.rasterResX, height: n.rasterResY }
    );
  }
  /**
   * Creates the render pipeline for drawing triangles.
   */
  createPipeline() {
    const n = {
      shaderLocation: 0,
      // [[location(0)]]
      offset: 0,
      format: "float32x3"
    }, r = {
      shaderLocation: 1,
      // [[location(1)]]
      offset: 0,
      format: "float32x2"
    }, i = {
      attributes: [n],
      arrayStride: 12,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, a = {
      attributes: [r],
      arrayStride: 8,
      // sizeof(float) * 2
      stepMode: "vertex"
    }, s = {
      module: this._vertModule,
      entryPoint: "main",
      buffers: [i, a]
    }, o = {
      module: this._fragModule,
      entryPoint: "main",
      targets: [
        {
          format: "bgra8unorm",
          blend: {
            color: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            },
            alpha: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            }
          }
        }
      ]
    }, f = {
      frontFace: "cw",
      cullMode: "none",
      topology: "triangle-list"
    }, c = {
      count: this._renderer.sampleCount
    }, u = {
      depthWriteEnabled: !1,
      depthCompare: "less-equal",
      format: "depth32float"
    }, l = {
      bindGroupLayouts: [this._renderInfoBindGroupLayout, this._cameraBindGroupLayout, this._rasterBindGroupLayout]
    }, h = {
      layout: this._renderer.device.createPipelineLayout(l),
      vertex: s,
      fragment: o,
      primitive: f,
      depthStencil: u,
      multisample: c,
      label: "Pipeline Raster"
    };
    this._pipeline = this._renderer.device.createRenderPipeline(h);
  }
  /**
   * Renders the triangle flat pipeline.
   * @param {Camera} camera The camera instance
   */
  renderPass(n) {
    const r = this._renderer.commandEncoder;
    this._renderer.frameBuffer.loadOp = "load";
    const i = {
      colorAttachments: [this._renderer.frameBuffer],
      depthStencilAttachment: this._renderer.depthBuffer
    }, a = r.beginRenderPass(i);
    a.setPipeline(this._pipeline), this.updateCameraUniforms(n), a.setVertexBuffer(0, this._positionBuffer), a.setVertexBuffer(1, this._texCoordBuffer), a.setIndexBuffer(this._indicesBuffer, "uint32"), a.setBindGroup(0, this._renderInfoBindGroup), a.setBindGroup(1, this._cameraBindGroup), a.setBindGroup(2, this._rasterBindGroup), a.drawIndexed(this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT), a.end();
  }
}
class wo extends li {
  /**
   * Positions of the triangles.
   * @type {number[]}
   */
  _position;
  /**
   * Indices of the triangles.
   * @type {number[]}
   */
  _indices;
  /**
   * The texture coordinates for the layer.
   * @type {number[]}
   */
  _texCoord;
  /**
   * Components of the layer.
   * @type {ILayerComponent[]}
   */
  _components = [];
  /**
   * The raster resolution in X direction.
   * @type {number}
   */
  _rasterResX;
  /**
   * The raster resolution in Y direction.
   * @type {number}
   */
  _rasterResY;
  /**
   * The raster data for the layer.
   * @type {IRasterData}
   */
  _rasterData;
  /**
   * Pipeline for rendering borders.
   * @type {PipelineTriangleBorder}
   */
  _pipeline;
  /**
   * Constructor for Raster
   * @param {ILayerInfo} layerInfo - The layer information.
   * @param {ILayerRenderInfo} layerRenderInfo - The layer render information.
   * @param {ILayerData} layerData - The layer data.
   */
  constructor(n, r, i) {
    super(n, r), this.loadLayerData(i);
  }
  /**
   * Get the positions of the triangles.
   * @returns {number[]} - The positions of the triangles.
   */
  get position() {
    return this._position;
  }
  /**
   * Get the indices of the triangles.
   * @returns {number[]} - The indices of the triangles.
   */
  get indices() {
    return this._indices;
  }
  /**
   * Get the texture coordinates.
   * @returns {number[]} - The texture coordinates.
   */
  get texCoord() {
    return this._texCoord;
  }
  /**
   * Get the components of the layer.
   * @returns {ILayerComponent[]} - The components of the layer.
   */
  get components() {
    return this._components;
  }
  /**
   * Get the raster resolution in X direction.
   * @returns {number} - The raster resolution in X direction.
   */
  get rasterResX() {
    return this._rasterResX;
  }
  /**
   * Get the raster resolution in Y direction.
   * @returns {number} - The raster resolution in Y direction.
   */
  get rasterResY() {
    return this._rasterResY;
  }
  /**
   * Get the raster data.
   * @returns {IRasterData} - The raster data.
   */
  get rasterData() {
    return this._rasterData;
  }
  /**
   * Load the layer data.
   * @param {ILayerData} layerData - The layer data.
   */
  loadLayerData(n) {
    this.loadGeometry(n.geometry), this.loadComponent(n.components), n.raster && n.raster.length && this.loadRaster(n.raster);
  }
  /**
   * Load the texture coordinates from the layer data.
   * @param {ILayerGeometry[]} layerGeometry - The layer data.
   */
  loadGeometry(n) {
    const r = [], i = [], a = [];
    for (let s = 0; s < n.length; s++)
      n[s].indices?.forEach((o) => {
        const f = o + r.length / 3;
        i.push(f);
      }), n[s].position.forEach((o, f) => {
        if (r.push(o), f % 2 === 1) {
          const c = this._layerInfo.zIndex;
          r.push(c);
        }
      }), n[s].texCoord?.forEach((o) => {
        a.push(o);
      });
    this._position = r, this._indices = i, this._texCoord = a;
  }
  /**
   * Load the components of the layer.
   * @param {ILayerComponent[]} layerComponents - The components to load.
   */
  loadComponent(n) {
    this._components = [];
    const r = { nPoints: 0, nTriangles: 0 };
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      r.nPoints += a.nPoints, r.nTriangles += a.nTriangles, this._components.push({
        nPoints: r.nPoints,
        nTriangles: r.nTriangles
      });
    }
  }
  /**
   * Load the raster data from the layer data.
   * @param {IRasterData[]} layerRaster - The layer data.
   */
  loadRaster(n) {
    const r = [];
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      if (a.rasterValues)
        if (this._rasterResX === void 0 && (this._rasterResX = a.rasterResX), this._rasterResY === void 0 && (this._rasterResY = a.rasterResY), a.rasterValues.length === a.rasterResX * a.rasterResY * 4)
          a.rasterValues.forEach((s) => {
            r.push(s);
          });
        else {
          const s = Math.min(...a.rasterValues), o = Math.max(...a.rasterValues) - s;
          a.rasterValues.forEach((f) => {
            const c = (f - s) / o, u = W.getColor(c, this._layerRenderInfo.colorMapInterpolator);
            r.push(u.r), r.push(u.g), r.push(u.b), r.push(255);
          });
        }
    }
    this._rasterData = r;
  }
  /**
   * Create the rendering pipeline for the layer.
   * @param {Renderer} renderer - The renderer instance.
   */
  createPipeline(n) {
    this._pipeline = new xo(n), this._pipeline.build(this);
  }
  /**
   * Render the layer for the current pass.
   * @param {Camera} camera - The camera instance.
   */
  renderPass(n) {
    this._renderInfoIsDirty && (this._pipeline.updateColorUniforms(this), this._renderInfoIsDirty = !1), this._pipeline.renderPass(n);
  }
}
var Mo = `@group(1) @binding(0) var<uniform> modelView: mat4x4f;
@group(1) @binding(1) var<uniform> projection: mat4x4f;

struct VSOut {
    @builtin(position) outPosition: vec4<f32>,
    @location(0) outThematic: f32,
    @location(1) outHighlighted: f32,
    @location(2) outSkipped: f32
 };

@vertex
fn main(@location(0) inPosition: vec3f, @location(1) inThematic: f32, @location(2) inHighlighted: f32, @location(3) inSkipped: f32) -> VSOut {
    var vsOut: VSOut;

    vsOut.outPosition = projection * modelView * vec4f(inPosition, 1);
    vsOut.outThematic = inThematic;
    vsOut.outHighlighted = inHighlighted;
    vsOut.outSkipped = inSkipped;

    return vsOut;
}`, Po = `@group(0) @binding(0) var<uniform> color : vec4f;
@group(0) @binding(1) var<uniform> highlightColor : vec4f;
@group(0) @binding(2) var<uniform> showThematic : f32;
@group(0) @binding(3) var<uniform> showHighlight : f32;
@group(0) @binding(4) var cMapTex : texture_2d<f32>;
@group(0) @binding(5) var cMapSampler : sampler;
@group(0) @binding(6) var<uniform> opacity : f32;

@fragment 
fn main(@location(0) inThematic: f32, @location(1) inHighlighted: f32, @location(2) inSkipped: f32) -> @location(0) vec4f {

    if (inSkipped > 0.0) {
        discard;
    }

    var color = vec4f(color.r / 255, color.g / 255, color.b / 255, color.a);
    var sampledColor = textureSample(cMapTex, cMapSampler, vec2f(inThematic, 0.0));

    if(showHighlight > 0 && inHighlighted > 0) {
        color = vec4f(highlightColor.r / 255, highlightColor.g / 255, highlightColor.b / 255, highlightColor.a);
    }
    else if (showThematic > 0) {
        color = sampledColor;
    }
    return vec4f(color.rgb * opacity, opacity);
}`;
class Eo extends pt {
  /**
   * Position buffer for vertex data.
   * @type {GPUBuffer}
   */
  _positionBuffer;
  /**
   * Buffer for thematic data.
   * @type {GPUBuffer}
   */
  _thematicBuffer;
  /**
   * Buffer for highlighted data.
   * @type {GPUBuffer}
   */
  _highlightedBuffer;
  /**
   * Buffer for skipped data.
   * @type {GPUBuffer}
   */
  _skippedBuffer;
  /**
   * Buffer for primitive indices.
   * @type {GPUBuffer}
   */
  _indicesBuffer;
  /**
   * Vertex shader module.
   * @type {GPUShaderModule}
   */
  _vertModule;
  /**
   * Fragment shader module.
   * @type {GPUShaderModule}
   */
  _fragModule;
  /**
   * Render pipeline for drawing triangles.
   * @type {GPURenderPipeline}
   */
  _pipeline;
  /**
   * Constructor for PipelineTriangleFlat
   * @param {Renderer} renderer The renderer instance
   */
  constructor(n) {
    super(n);
  }
  /**
   * Builds the pipeline with the provided mesh data.
   * @param {VectorLayer} mesh The mesh data containing positions, thematic, and indices
   */
  build(n) {
    this.createShaders(), this.createVertexBuffers(n), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.updateVertexBuffers(n), this.updateColorUniforms(n), this.createPipeline();
  }
  /**
   * Creates the vertex and fragment shaders for the pipeline.
   */
  createShaders() {
    const n = {
      code: Mo
    };
    this._vertModule = this._renderer.device.createShaderModule(n);
    const r = {
      code: Po
    };
    this._fragModule = this._renderer.device.createShaderModule(r);
  }
  /**
   * Creates the vertex buffers for the pipeline.
   * @param {VectorLayer} mesh The mesh data containing positions, thematic, and indices
   */
  createVertexBuffers(n) {
    this._positionBuffer = this._renderer.device.createBuffer({
      label: "Position buffer",
      size: n.position.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._thematicBuffer = this._renderer.device.createBuffer({
      label: "Thematic data buffer",
      size: n.thematic.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._highlightedBuffer = this._renderer.device.createBuffer({
      label: "Highlighted data buffer",
      size: n.highlightedVertices.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._skippedBuffer = this._renderer.device.createBuffer({
      label: "Skipped data buffer",
      size: n.skippedVertices.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._indicesBuffer = this._renderer.device.createBuffer({
      label: "Primitive indices buffer",
      size: n.indices.length * 4,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
    });
  }
  /**
   * Updates the vertex buffers with the provided mesh data.
   * @param {VectorLayer} mesh The mesh data containing positions, thematic, and indices
   */
  updateVertexBuffers(n) {
    this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, new Float32Array(n.position)), this._renderer.device.queue.writeBuffer(this._thematicBuffer, 0, new Float32Array(n.thematic)), this._renderer.device.queue.writeBuffer(this._highlightedBuffer, 0, new Float32Array(n.highlightedVertices)), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, new Float32Array(n.skippedVertices)), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, new Uint32Array(n.indices));
  }
  /**
   * Creates the render pipeline for drawing triangles.
   */
  createPipeline() {
    const n = {
      shaderLocation: 0,
      // [[location(0)]]
      offset: 0,
      format: "float32x3"
    }, r = {
      shaderLocation: 1,
      // [[location(1)]]
      offset: 0,
      format: "float32"
    }, i = {
      shaderLocation: 2,
      // [[location(2)]]
      offset: 0,
      format: "float32"
    }, a = {
      shaderLocation: 3,
      // [[location(3)]]
      offset: 0,
      format: "float32"
    }, s = {
      attributes: [n],
      arrayStride: 12,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, o = {
      attributes: [r],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, f = {
      attributes: [i],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, c = {
      attributes: [a],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, u = {
      module: this._vertModule,
      entryPoint: "main",
      buffers: [s, o, f, c]
    }, l = {
      module: this._fragModule,
      entryPoint: "main",
      targets: [
        {
          format: "bgra8unorm",
          blend: {
            color: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            },
            alpha: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            }
          }
        }
      ]
    }, h = {
      frontFace: "cw",
      cullMode: "none",
      topology: "triangle-list"
    }, d = {
      count: this._renderer.sampleCount
    }, p = {
      depthWriteEnabled: !1,
      depthCompare: "less-equal",
      format: "depth32float"
    }, y = {
      bindGroupLayouts: [this._renderInfoBindGroupLayout, this._cameraBindGroupLayout]
    }, g = {
      layout: this._renderer.device.createPipelineLayout(y),
      vertex: u,
      fragment: l,
      primitive: h,
      depthStencil: p,
      multisample: d,
      label: "Pipeline triangle flat"
    };
    this._pipeline = this._renderer.device.createRenderPipeline(g);
  }
  /**
   * Renders the triangle flat pipeline.
   * @param {Camera} camera The camera instance
   */
  renderPass(n) {
    const r = this._renderer.commandEncoder;
    this._renderer.frameBuffer.loadOp = "load";
    const i = {
      colorAttachments: [this._renderer.frameBuffer],
      depthStencilAttachment: this._renderer.depthBuffer
    }, a = r.beginRenderPass(i);
    a.setPipeline(this._pipeline), this.updateCameraUniforms(n), a.setVertexBuffer(0, this._positionBuffer), a.setVertexBuffer(1, this._thematicBuffer), a.setVertexBuffer(2, this._highlightedBuffer), a.setVertexBuffer(3, this._skippedBuffer), a.setIndexBuffer(this._indicesBuffer, "uint32"), a.setBindGroup(0, this._renderInfoBindGroup), a.setBindGroup(1, this._cameraBindGroup), a.drawIndexed(this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT), a.end();
  }
}
var Bo = `@group(0) @binding(0) var<uniform> modelView: mat4x4f;
@group(0) @binding(1) var<uniform> projection: mat4x4f;

struct VSOut {
    @builtin(position) position: vec4<f32>,
    @location(0) color: vec3<f32>,
 };

@vertex
fn main(@builtin(vertex_index) i: u32, @location(0) inPosition: vec3f, @location(1) objectId: vec3<f32>) -> VSOut {
    var vsOut: VSOut;
    vsOut.position = projection * modelView * vec4f(inPosition, 1);
    vsOut.color = objectId;

    return vsOut;
}`, Io = `@fragment
fn main(@location(0) color: vec3<f32>) -> @location(0) vec4<f32> {
    return vec4<f32>(color, 1.0);
}`;
class hi extends pt {
  /**
   * Position buffer for vertex data.
   * @type {GPUBuffer}
   */
  _positionBuffer;
  /**
   * Buffer for object IDs.
   * @type {GPUBuffer}
   */
  _objectIdsBuffer;
  /**
   * Buffer for primitive indices.
   * @type {GPUBuffer}
   */
  _indicesBuffer;
  /**
   * Render pipeline for drawing triangles.
   * @type {GPURenderPipeline}
   */
  _pipeline;
  /**
   * Vertex shader module.
   * @type {GPUShaderModule}
   */
  _vertModule;
  /**
   * Fragment shader module.
   * @type {GPUShaderModule}
   */
  _fragModule;
  /**
   * Constructor for PipelineTrianglePicking
   * @param {Renderer} renderer The renderer instance
   */
  constructor(n) {
    super(n);
  }
  /**
   * Builds the pipeline with the provided mesh data.
   * @param {VectorLayer} mesh The mesh data containing positions, thematic, and indices
   */
  build(n) {
    this.createShaders(), this.createVertexBuffers(n), this.createCameraUniformBindGroup(), this.updateVertexBuffers(n), this.createPipeline();
  }
  /**
   * Creates the vertex and fragment shaders for the pipeline.
   */
  createShaders() {
    const n = {
      code: Bo
    };
    this._vertModule = this._renderer.device.createShaderModule(n);
    const r = {
      code: Io
    };
    this._fragModule = this._renderer.device.createShaderModule(r);
  }
  /**
   * Creates the vertex buffers for the pipeline.
   * @param {VectorLayer} mesh The mesh data containing positions, thematic, and indices
   */
  createVertexBuffers(n) {
    this._positionBuffer = this._renderer.device.createBuffer({
      label: "Position buffer",
      size: n.position.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._objectIdsBuffer = this._renderer.device.createBuffer({
      label: "Object id buffer",
      size: n.position.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._indicesBuffer = this._renderer.device.createBuffer({
      label: "Primitive indices buffer",
      size: n.indices.length * 4,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
    });
  }
  /**
   * Updates the vertex buffers with the provided mesh data.
   * @param {VectorLayer} layer The mesh data containing positions, thematic, and indices
   */
  updateVertexBuffers(n) {
    this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, new Float32Array(n.position)), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, new Uint32Array(n.indices));
    const r = n.position.length / 3, i = new Array(r * 3).fill(0);
    for (let a = 0; a < n.components.length; a++) {
      const s = this._encodeIdToRGB(a), o = n.components[a], f = a > 0 ? n.components[a - 1].nTriangles : 0, c = o.nTriangles;
      for (let u = f * 3; u < c * 3; u++) {
        const l = n.indices[u] * 3;
        i[l + 0] = s[0], i[l + 1] = s[1], i[l + 2] = s[2];
      }
    }
    this._renderer.device.queue.writeBuffer(this._objectIdsBuffer, 0, new Float32Array(i));
  }
  /**
   * Reads the picked object ID from the picking texture.
   * @param {number} x The x-coordinate of the pick location
   * @param {number} y The y-coordinate of the pick location
   * @returns {Promise<number>} The picked object ID
   */
  async readPickedId(n, r) {
    const i = this._renderer.device.createBuffer({
      size: 256,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    }), a = this._renderer.device.createCommandEncoder();
    a.copyTextureToBuffer(
      {
        texture: this._renderer.pickingTexture,
        origin: { x: n, y: r }
      },
      {
        buffer: i,
        bytesPerRow: 256
      },
      { width: 1, height: 1, depthOrArrayLayers: 1 }
    ), this._renderer.device.queue.submit([a.finish()]), await i.mapAsync(GPUMapMode.READ);
    const s = i.getMappedRange(), o = new Uint8Array(s), f = this._decodeColorToId(o[0], o[1], o[2]);
    return i.unmap(), f;
  }
  /**
   * Encodes an object ID to RGB color for picking.
   * @param {number} id The object ID to encode
   * @returns {[number, number, number]} The encoded RGB color
   */
  _encodeIdToRGB(n) {
    const r = n + 1, i = (r & 255) / 255, a = (r >> 8 & 255) / 255, s = (r >> 16 & 255) / 255;
    return [i, a, s];
  }
  /**
   * Decodes an RGB color back to an object ID.
   * @param {number} r The red component
   * @param {number} g The green component
   * @param {number} b The blue component
   * @returns {number} The decoded object ID
   */
  _decodeColorToId(n, r, i) {
    return (n & 255 | (r & 255) << 8 | (i & 255) << 16) - 1;
  }
  /**
   * Creates the render pipeline for drawing triangles.
   */
  createPipeline() {
    const n = {
      shaderLocation: 0,
      offset: 0,
      format: "float32x3"
    }, r = {
      shaderLocation: 1,
      // [[location(1)]]
      offset: 0,
      format: "float32x3"
    }, i = {
      attributes: [n],
      arrayStride: 12,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, a = {
      attributes: [r],
      arrayStride: 12,
      stepMode: "vertex"
    }, s = {
      module: this._vertModule,
      entryPoint: "main",
      buffers: [i, a]
    }, o = {
      module: this._fragModule,
      entryPoint: "main",
      targets: [
        {
          format: "rgba8unorm"
        }
      ]
    }, f = {
      frontFace: "cw",
      cullMode: "none",
      topology: "triangle-list"
    }, c = {
      depthWriteEnabled: !1,
      depthCompare: "less-equal",
      format: "depth32float"
    }, u = {
      bindGroupLayouts: [this._cameraBindGroupLayout]
    }, l = {
      layout: this._renderer.device.createPipelineLayout(u),
      vertex: s,
      fragment: o,
      primitive: f,
      depthStencil: c,
      label: "Pipeline triangle picking"
    };
    this._pipeline = this._renderer.device.createRenderPipeline(l);
  }
  /**
   * Renders the picking pass for the pipeline.
   * @param {Camera} camera The camera instance
   */
  renderPass(n) {
    if (!this._renderer)
      return;
    const r = this._renderer.commandEncoder, i = {
      colorAttachments: [this._renderer.pickingBuffer],
      depthStencilAttachment: this._renderer.pickingDepthBuffer
    }, a = r.beginRenderPass(i);
    a.setPipeline(this._pipeline), this.updateCameraUniforms(n), a.setVertexBuffer(0, this._positionBuffer), a.setVertexBuffer(1, this._objectIdsBuffer), a.setIndexBuffer(this._indicesBuffer, "uint32"), a.setBindGroup(0, this._cameraBindGroup), a.drawIndexed(this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT), a.end();
  }
}
class di extends li {
  /**
   * Dimension of the layer.
   * @type {number}
   */
  _dimension;
  /**
   * Positions of the triangles.
   * @type {number[]}
   */
  _position;
  /**
   * Thematic data for the layer.
   * @type {number[]}
   */
  _thematic;
  /**
   * Indices of the triangles.
   * @type {number[]}
   */
  _indices;
  /**
   * Components of the layer.
   * @type {ILayerComponent[]}
   */
  _components = [];
  /**
   * Highlighted IDs of the layer.
   * This is a set to ensure uniqueness of highlighted IDs.
   * @type {Set<number>}
   */
  _highlightedIds;
  /**
   * Highlighted vertices of the layer.
   * @type {number[]}
   */
  _highlightedVertices;
  /**
   * Skipped IDs of the layer.
   * This is a set to ensure uniqueness of skipped IDs.
   * @type {Set<number>}
   */
  _skippedIds;
  /**
   * Skipped vertices of the layer.
   * @type {number[]}
   */
  _skippedVertices;
  /**
   * Rendering pipeline for the layer.
   * @type {Pipeline}
   */
  _pipeline;
  /**
   * Pipeline for picking triangles.
   * @type {PipelineTrianglePicking}
   */
  _pipelinePicking;
  /**
   * Constructor for Triangles2DLayer
   * @param {ILayerInfo} layerInfo - The layer information.
   * @param {ILayerRenderInfo} layerRenderInfo - The layer render information.
   * @param {ILayerData} layerData - The layer data.
   * @param {number} dimension - The dimension of the layer (2 or 3).
   */
  constructor(n, r, i, a = 2) {
    super(n, r), this._dimension = a, this.loadLayerData(i);
  }
  /**
   * Get the positions of the triangles.
   * @returns {number[]} - The positions of the triangles.
   */
  get position() {
    return this._position;
  }
  /**
   * Get the thematic data of the layer.
   * @returns {number[]} - The thematic data.
   */
  get thematic() {
    return this._thematic;
  }
  /**
   * Get the indices of the triangles.
   * @returns {number[]} - The indices of the triangles.
   */
  get indices() {
    return this._indices;
  }
  /**
   * Get the components of the layer.
   * @returns {ILayerComponent[]} - The components of the layer.
   */
  get components() {
    return this._components;
  }
  /**
   * Gets the IDs of the highlighted components in the layer.
   * @returns {number[]} The highlighted IDs.
   */
  get highlightedIds() {
    return Array.from(this._highlightedIds);
  }
  /**
   * Gets the highlighted vertices of the layer.
   * @returns {number[]} The highlighted vertices.
   */
  get highlightedVertices() {
    return this._highlightedVertices;
  }
  /**
   * Gets the IDs of the skipped components in the layer.
   * @returns {number[]} The skipped IDs.
   */
  get skippedIds() {
    return Array.from(this._skippedIds);
  }
  /**
   * Gets the skipped vertices of the layer.
   * @returns {number[]} The skipped vertices.
   */
  get skippedVertices() {
    return this._skippedVertices;
  }
  /**
   * Load the layer data, including geometry and components.
   * @param {ILayerData} layerData - The data associated with the layer.
   */
  loadLayerData(n) {
    this.loadGeometry(n.geometry), this.loadComponent(n.components), n.thematic && n.thematic.length && this.loadThematic(n.thematic), this._highlightedVertices = new Array(this._position.length / 3).fill(0), this._highlightedIds = /* @__PURE__ */ new Set(), this._skippedVertices = new Array(this._position.length / 3).fill(0), this._skippedIds = /* @__PURE__ */ new Set();
  }
  /**
   * Load the geometry data for the layer.
   * @param {ILayerGeometry[]} layerGeometry - The geometry data to load.
   */
  loadGeometry(n) {
    const r = [], i = [];
    for (let a = 0; a < n.length; a++)
      n[a].indices?.forEach((s) => {
        const o = s + r.length / 3;
        i.push(o);
      }), n[a].position.forEach((s, o) => {
        if (this._dimension === 2 && (r.push(s), o % 2 === 1)) {
          const f = this._layerInfo.zIndex;
          r.push(f);
        }
        this._dimension === 3 && (o % 3 === 2 && (s += this._layerInfo.zIndex), r.push(s));
      });
    this._position = r, this._indices = i;
  }
  /**
   * Load the components of the layer.
   * @param {ILayerComponent[]} layerComponents - The components to load.
   */
  loadComponent(n) {
    this._components = [];
    const r = { nPoints: 0, nTriangles: 0 };
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      r.nPoints += a.nPoints, r.nTriangles += a.nTriangles, this._components.push({
        nPoints: r.nPoints,
        nTriangles: r.nTriangles
      });
    }
  }
  /**
   * Load the thematic data for the layer.
   * @param {ILayerThematic[]} layerThematic - The thematic data to load.
   */
  loadThematic(n) {
    const r = [];
    for (let i = 0; i < n.length; i++) {
      let a = [];
      switch (n[i].level) {
        case ee.AGGREGATION_POINT:
          a = this.aggregateThematicPoint(n[i]);
          break;
        case ee.AGGREGATION_PRIMITIVE:
          a = this.aggregateThematicPrimitive(i, n[i]);
          break;
        case ee.AGGREGATION_COMPONENT:
          a = this.aggregateThematicComponenet(i, n[i]);
          break;
        default:
          console.error(`Unknown thematic layer aggregation type: ${n[i].level}.`);
          break;
      }
      for (let s = 0; s < a.length; s++)
        r.push(a[s]);
    }
    console.assert(r.length === this._position.length / 3), this._thematic = r;
  }
  /**
   * Create the rendering pipeline for the layer.
   * @param {Renderer} renderer - The renderer instance.
   */
  createPipeline(n) {
    this._pipeline = new Eo(n), this._pipeline.build(this), this._pipelinePicking = new hi(n), this._pipelinePicking.build(this);
  }
  /**
   * Render the layer for the current pass.
   * @param {Camera} camera - The camera instance.
   */
  renderPass(n) {
    this._renderInfoIsDirty && (this._pipeline.updateColorUniforms(this), this._renderInfoIsDirty = !1), this._dataIsDirty && (this._pipeline.updateVertexBuffers(this), this._dataIsDirty = !1), this._pipeline.renderPass(n);
  }
  /**
   * Render the picking pass for the layer.
   * @param {Camera} camera - The camera instance.
   */
  renderPickingPass(n) {
    this._pipelinePicking.renderPass(n);
  }
  /**
   * Get the picked ID at the specified screen coordinates.
   * @param x - The x-coordinate of the screen position.
   * @param y - The y-coordinate of the screen position.
   * @returns {Promise<number>} - A promise that resolves to the picked ID.
   */
  getPickedId(n, r) {
    return this._pipelinePicking.readPickedId(n, r);
  }
  /**
   * Set highlighted IDs for the layer.
   * @param {number[]} ids - The IDs to highlight.
   */
  setHighlightedIds(n) {
    n.forEach((i) => {
      this._highlightedIds.has(i) ? this._highlightedIds.delete(i) : this._highlightedIds.add(i);
    });
    const r = /* @__PURE__ */ new Set();
    for (const i of n) {
      if (i < 0) continue;
      const a = i > 0 ? this._components[i - 1].nTriangles : 0, s = this._components[i].nTriangles;
      for (let o = 3 * a; o < 3 * s; o++) {
        const f = this._indices[o];
        r.has(f) || (this._highlightedVertices[f] = 1 - this._highlightedVertices[f], r.add(f));
      }
    }
    this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
  }
  /**
   * Set skipped IDs for the layer.
   * @param {number[]} ids - The IDs to skip.
   */
  setSkippedIds(n) {
    n.forEach((i) => {
      this._skippedIds.has(i) ? this._skippedIds.delete(i) : this._skippedIds.add(i);
    });
    const r = /* @__PURE__ */ new Set();
    for (const i of n) {
      if (i < 0) continue;
      const a = i > 0 ? this._components[i - 1].nTriangles : 0, s = this._components[i].nTriangles;
      for (let o = 3 * a; o < 3 * s; o++) {
        const f = this._indices[o];
        r.has(f) || (this._skippedVertices[f] = 1 - this._skippedVertices[f], r.add(f));
      }
    }
    this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
  }
  /**
   * Clears the highlighted components of the layer.
   */
  clearHighlightedIds() {
    this._highlightedVertices.fill(0), this._highlightedIds.clear(), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
  }
  /**
   * Clears the skipped components of the layer.
   */
  clearSkippedIds() {
    this._skippedVertices.fill(0), this._skippedIds.clear(), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
  }
  /**
   * Aggregate thematic data for point level.
   * @param {ILayerThematic} layerThematic - The thematic data to aggregate.
   * @returns {number[]} - The aggregated thematic data.
   */
  aggregateThematicPoint(n) {
    return n.values;
  }
  /**
   * Aggregate thematic data for primitive level.
   * @param {number} component - The component index.
   * @param {ILayerThematic} layerThematic - The thematic data to aggregate.
   * @returns {number[]} - The aggregated thematic data.
   */
  aggregateThematicPrimitive(n, r) {
    const i = n > 0 ? this._components[n - 1].nPoints : 0, a = this._components[n].nPoints - i, s = n > 0 ? this._components[n - 1].nTriangles : 0, o = this._components[n].nTriangles, f = new Array(a);
    for (let c = 3 * s; c < 3 * o; c++) {
      const u = this._indices[c] - i, l = Math.floor(c / 3) - s;
      f[u] = r.values[l];
    }
    return f;
  }
  /**
   * Aggregate thematic data for component level.
   * @param {number} component - The component index.
   * @param {ILayerThematic} layerThematic - The thematic data to aggregate.
   * @returns {number[]} - The aggregated thematic data.
   */
  aggregateThematicComponenet(n, r) {
    const i = n > 0 ? this._components[n - 1].nPoints : 0, a = this._components[n].nPoints - i, s = new Array(a);
    for (let o = 0; o < a; o++)
      s[o] = r.values[0];
    return s;
  }
}
var So = `@group(1) @binding(0) var<uniform> modelView: mat4x4f;
@group(1) @binding(1) var<uniform> projection: mat4x4f;

struct VSOut {
    @builtin(position) outPosition: vec4<f32>,
    @location(0) outSkipped: f32
 };

@vertex
fn main(@location(0) inPosition: vec3f, @location(3) inSkipped: f32) -> VSOut {
    var vsOut: VSOut;

    vsOut.outPosition = projection * modelView * vec4f(inPosition, 1);
    vsOut.outSkipped = inSkipped;

    return vsOut;
}`, To = `@fragment
fn main(@location(0) inSkipped: f32) -> @location(0) vec4f {
    if (inSkipped > 0.0) {
        discard;
    }

    return vec4f(0.0, 0.0, 0.0, 1.0); 
}`;
class ko extends pt {
  /**
   * Position buffer for vertex data.
   * @type {GPUBuffer}
   */
  _positionBuffer;
  /**
   * Buffer for border indices.
   * @type {GPUBuffer}
   */
  _borderIndicesBuffer;
  /**
   * Buffer for skipped data.
   * @type {GPUBuffer}
   */
  _skippedBuffer;
  /**
   * Vertex shader module.
   * @type {GPUShaderModule}
   */
  _vertModule;
  /**
   * Fragment shader module.
   * @type {GPUShaderModule}
   */
  _fragModule;
  /**
   * Render pipeline for drawing borders.
   * @type {GPURenderPipeline}
   */
  _pipeline;
  /**
   * Constructor for PipelineBorderFlat
   * @param {Renderer} renderer The renderer instance
   */
  constructor(n) {
    super(n);
  }
  /**
   * Builds the pipeline with the provided border data.
   * @param {Triangles2DLayer} borders The border data containing positions and indices
   */
  build(n) {
    this.createShaders(), this.createVertexBuffers(n), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.updateVertexBuffers(n), this.createPipeline();
  }
  /**
   * Creates the vertex and fragment shaders for the pipeline.
   */
  createShaders() {
    const n = {
      code: So
    };
    this._vertModule = this._renderer.device.createShaderModule(n);
    const r = {
      code: To
    };
    this._fragModule = this._renderer.device.createShaderModule(r);
  }
  /**
   * Creates the vertex buffers for the pipeline.
   * @param {Triangles2DLayer} borders The border data containing positions and indices
   */
  createVertexBuffers(n) {
    this._positionBuffer = this._renderer.device.createBuffer({
      label: "Position buffer",
      size: n.borderPos.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._borderIndicesBuffer = this._renderer.device.createBuffer({
      label: "Primitive indices buffer",
      size: n.borderIds.length * 4,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
    }), this._skippedBuffer = this._renderer.device.createBuffer({
      label: "Skipped data buffer",
      size: n.skippedVertices.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
  }
  /**
   * Updates the vertex buffers with the provided border data.
   * @param {Triangles2DLayer} borders The border data containing positions and indices
   */
  updateVertexBuffers(n) {
    this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, new Float32Array(n.borderPos)), this._renderer.device.queue.writeBuffer(this._borderIndicesBuffer, 0, new Uint32Array(n.borderIds)), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, new Float32Array(n.skippedVertices));
  }
  /**
   * Creates the render pipeline for drawing borders.
   */
  createPipeline() {
    const n = {
      attributes: [{
        shaderLocation: 0,
        // [[location(0)]]
        offset: 0,
        format: "float32x3"
      }],
      arrayStride: 12,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, r = {
      attributes: [{
        shaderLocation: 3,
        // [[location(3)]]
        offset: 0,
        format: "float32"
      }],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, i = {
      module: this._vertModule,
      entryPoint: "main",
      buffers: [n, r]
    }, a = {
      module: this._fragModule,
      entryPoint: "main",
      targets: [
        {
          format: "bgra8unorm",
          blend: {
            color: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            },
            alpha: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            }
          }
        }
      ]
    }, s = {
      topology: "line-list"
    }, o = {
      count: this._renderer.sampleCount
    }, f = {
      depthWriteEnabled: !1,
      depthCompare: "less-equal",
      format: "depth32float"
    }, c = {
      bindGroupLayouts: [this._renderInfoBindGroupLayout, this._cameraBindGroupLayout]
    }, u = {
      layout: this._renderer.device.createPipelineLayout(c),
      vertex: i,
      fragment: a,
      primitive: s,
      depthStencil: f,
      multisample: o,
      label: "Pipeline border flat"
    };
    this._pipeline = this._renderer.device.createRenderPipeline(u);
  }
  /**
   * Renders the border flat pipeline.
   * @param {Camera} camera The camera instance
   */
  renderPass(n) {
    const r = this._renderer.commandEncoder;
    this._renderer.frameBuffer.loadOp = "load";
    const i = {
      colorAttachments: [this._renderer.frameBuffer],
      depthStencilAttachment: this._renderer.depthBuffer
    }, a = r.beginRenderPass(i);
    a.setPipeline(this._pipeline), this.updateCameraUniforms(n), a.setVertexBuffer(0, this._positionBuffer), a.setVertexBuffer(1, this._skippedBuffer), a.setIndexBuffer(this._borderIndicesBuffer, "uint32"), a.setBindGroup(0, this._renderInfoBindGroup), a.setBindGroup(1, this._cameraBindGroup), a.drawIndexed(this._borderIndicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT), a.end();
  }
}
class Ao extends di {
  /**
   * Positions of the borders.
   * @type {number[]}
   */
  _borderPos;
  /**
   * IDs of the borders.
   * @type {number[]}
   */
  _borderIds;
  /**
   * Components of the layer.
   * @type {ILayerComponent[]}
   */
  _borderComponents = [];
  /**
   * Pipeline for rendering borders.
   * @type {PipelineTriangleBorder}
   */
  _pipelineBorder;
  /**
   * Constructor for Triangles2DBorder
   * @param {ILayerInfo} layerInfo - The layer information.
   * @param {ILayerRenderInfo} layerRenderInfo - The layer render information.
   * @param {ILayerData} layerData - The layer data.
   * @param {number} dimension - The dimension of the layer (2 or 3).
   */
  constructor(n, r, i, a = 2) {
    super(n, r, i), this._dimension = a, this.loadLayerData(i);
  }
  /**
   * Get the border positions.
   * @returns {number[]} - The positions of the borders.
   */
  get borderPos() {
    return this._borderPos;
  }
  /**
   * Get the border IDs.
   * @returns {number[]} - The IDs of the borders.
   */
  get borderIds() {
    return this._borderIds;
  }
  /**
   * Create the rendering pipeline for the layer.
   * @param {Renderer} renderer - The renderer instance.
   */
  createPipeline(n) {
    super.createPipeline(n), this._pipelineBorder = new ko(n), this._pipelineBorder.build(this);
  }
  /**
   * Load the layer data, specifically the border information.
   * @param {ILayerData} layerData - The data associated with the layer.
   */
  loadLayerData(n) {
    super.loadLayerData(n), this.loadBorderGeometry(n.border || []), this.loadBorderComponent(n.borderComponents || []);
  }
  /**
   * Load the border geometry data for the layer.
   * @param {ILayerBorder[]} border - The border geometry data to load.
   */
  loadBorderGeometry(n) {
    const r = n, i = [], a = [];
    for (let s = 0; s < r.length; s++)
      r[s].indices.forEach((o) => {
        const f = o + i.length / 3;
        a.push(f);
      }), r[s].position.forEach((o, f) => {
        if (i.push(o), f % 2 === 1) {
          const c = this._layerInfo.zIndex;
          i.push(c);
        }
      });
    this._borderPos = i, this._borderIds = a;
  }
  /**
   * Load the border components for the layer.
   * @param {ILayerBorderComponent[]} borderComponent - The border components to load.
   */
  loadBorderComponent(n) {
    this._borderComponents = [];
    const r = { nPoints: 0, nLines: 0 };
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      r.nPoints += a.nPoints, r.nLines += a.nLines, this._borderComponents.push({
        nPoints: r.nPoints,
        nLines: r.nLines
      });
    }
  }
  /**
   * Render the layer for the current pass.
   * @param {Camera} camera - The camera instance.
   */
  renderPass(n) {
    super.renderPass(n), !(this._borderPos.length === 0 || this._borderIds.length === 0 || this._borderComponents.length === 0) && this._pipelineBorder.renderPass(n);
  }
}
var Lo = `@group(1) @binding(0) var<uniform> modelView: mat4x4f;
@group(1) @binding(1) var<uniform> projection: mat4x4f;

struct VSOut {
    @builtin(position) outPosition: vec4<f32>,
    @location(0) outNormal: vec3<f32>,
    @location(1) outThematic: f32,
    @location(2) outHighlighted: f32,
    @location(3) outSkipped: f32
 };

@vertex
fn main(@location(0) inPosition: vec3f, @location(1) inNormal: vec3f, @location(2) inThematic: f32, @location(3) inHighlighted: f32, @location(4) inSkipped: f32) -> VSOut {
    var vsOut: VSOut;

    vsOut.outPosition = projection * modelView * vec4f(inPosition, 1);
    vsOut.outNormal = inNormal;
    vsOut.outThematic = inThematic;
    vsOut.outHighlighted = inHighlighted;
    vsOut.outSkipped = inSkipped;

    return vsOut;
}`, Co = `@group(0) @binding(0) var<uniform> color : vec4f;
@group(0) @binding(1) var<uniform> highlightColor : vec4f;
@group(0) @binding(2) var<uniform> showThematic : f32;
@group(0) @binding(3) var<uniform> showHighlight : f32;
@group(0) @binding(4) var cMapTex : texture_2d<f32>;
@group(0) @binding(5) var cMapSampler : sampler;
@group(0) @binding(6) var<uniform> opacity : f32;

struct BufferOut {
    @location(0) color  : vec4f,
    @location(1) normal : vec4f,
}

@fragment 
fn main(@location(0) inNormal: vec3f, @location(1) inThematic: f32, @location(2) inHighlighted: f32, @location(3) inSkipped: f32) -> BufferOut {

    if (inSkipped > 0.0) {
        discard;
    }

    var light1: vec3f = normalize(vec3f(1.0, 0.0, 1.0));
    var light2: vec3f = normalize(vec3f(0.0, 1.0, 0.0));

    var normal: vec3f = normalize(inNormal);

    var diffuse: f32 = 0.7 * max(dot(normal, light1) * 0.7, 0.0) + 0.3 * max(dot(normal, light2) * 0.7, 0.0);
    var ambient: f32 = 0.5;

    
    var color = vec4f(color.r / 255, color.g / 255, color.b / 255, color.a);
    var sampledColor = textureSample(cMapTex, cMapSampler, vec2f(inThematic, 0.0));

    if(showHighlight > 0 && inHighlighted > 0) {
        color = vec4f(highlightColor.r / 255, highlightColor.g / 255, highlightColor.b / 255, highlightColor.a);
    }
    else if (showThematic > 0) {
        color = sampledColor;
    }

    var shade: vec4f = color * (diffuse + ambient);

    var output : BufferOut;
    output.color  = vec4f(0.5 * shade.rgb + 0.5 * color.rgb, 1.0);
    output.normal = vec4f(normal * 0.5 + 0.5, 1.0);

    return output;
}`, zo = `struct VSOut {
    @builtin(position) Position: vec4<f32>,
    @location(0) uvs : vec2<f32>,
};

@vertex 
fn main(@builtin(vertex_index) VertexIndex : u32) -> VSOut {
 
    var pos = array( 
        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
        vec2(-1.0,  1.0), vec2(1.0, -1.0), vec2( 1.0, 1.0),
    );

    var vsOut: VSOut;
    vsOut.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
    vsOut.uvs = (pos[VertexIndex] + 1.0) * 0.5;

    return vsOut;
}`, Uo = `fn rand(n: f32) -> f32 { return fract(sin(n) * 43758.5453123); }

@group(1) @binding(0) var texSampler: sampler;
@group(1) @binding(1) var colorTex: texture_2d<f32>;
@group(1) @binding(2) var normalTex: texture_2d<f32>;
@group(0) @binding(6) var<uniform> opacity : f32;

@fragment  
fn main(@location(0) uvs : vec2<f32>) -> @location(0) vec4f { 
    var fuvs = vec2f(uvs.x, 1.0 - uvs.y);

    var sss = 0.0;
    var n0 = normalize(textureSample(normalTex, texSampler, fuvs ).xyz * 2.0 - 1.0);
    let num = 32;
    for(var i: i32 = 0; i < num; i = i + 1) 
    {
        var off  = f32(i);
        var dd = 0.0001;
        if ( i % 5  == 0 ) { dd = 0.001; };
        if ( i % 10 == 0 ) { dd = 0.002; };
        let sx = (1.0 - rand(off) ) * dd;
        let sy = (1.0 - rand(off*2000.0) ) * dd;
        

        var n1 = normalize(textureSample(normalTex, texSampler, fuvs + vec2<f32>(sx,sy) ).xyz * 2.0 - 1.0);
        sss = sss + dot(n0,n1);
    }
    let fr = 1.0/f32(num);
    let cc = clamp( (sss * fr), 0.5, 1.0);

    let color = textureSample(colorTex, texSampler, fuvs );

    return vec4<f32>( cc * color.rgb * opacity, opacity * color.a);
}`;
class Go extends pt {
  /**
   * Position buffer for vertex data.
   * @type {GPUBuffer}
   */
  _positionBuffer;
  /**
   * Normal buffer for vertex data.
   * @type {GPUBuffer}
   */
  _normalBuffer;
  /**
   * Thematic buffer for vertex data.
   * @type {GPUBuffer}
   */
  _thematicBuffer;
  /**
   * Highlighted buffer for vertex data.
   * @type {GPUBuffer}
   */
  _highlightedBuffer;
  /**
   * Highlighted buffer for vertex data.
   * @type {GPUBuffer}
   */
  _skippedBuffer;
  /**
   * Indices buffer for vertex data.
   * @type {GPUBuffer}
   */
  _indicesBuffer;
  /**
   * Vertex shader module for the first pass.
   * @type {GPUShaderModule}
   */
  _vertModule01;
  /**
   * Fragment shader module for the first pass.
   * @type {GPUShaderModule}
   */
  _fragModule01;
  /**
   * Vertex shader module for the second pass.
   * @type {GPUShaderModule}
   */
  _vertModule02;
  /**
   * Fragment shader module for the second pass.
   * @type {GPUShaderModule}
   */
  _fragModule02;
  /**
   * Render pipeline for the first pass.
   * @type {GPURenderPipeline}
   */
  _pipeline01;
  /**
   * Render pipeline for the second pass.
   * @type {GPURenderPipeline}
   */
  _pipeline02;
  /**
   * Shared color buffer for the first pass.
   * @type {GPURenderPassColorAttachment}
   */
  _colorsSharedBuffer;
  /**
   * Shared normal buffer for the first pass.
   * @type {GPURenderPassColorAttachment}
   */
  _normalsSharedBuffer;
  /**
   * Depth buffer for the first pass.
   * @type {GPURenderPassDepthStencilAttachment}
   */
  _depthBufferPass01;
  /**
   * Bind group for colors.
   * @type {GPUBindGroup}
   */
  _texturesPass02BindGroup;
  /**
   * Bind group layout for textures in the second pass.
   * @type {GPUBindGroupLayout}
   */
  _texturesPass02BindGroupLayout;
  /**
   * Constructor for PipelineBuildingSSAO
   * @param {Renderer} renderer The renderer instance
   */
  constructor(n) {
    super(n);
  }
  /**
   * Builds the pipeline with the provided mesh data.
   * @param {Triangles3DLayer} mesh The mesh data containing positions, normals, thematic, and indices
   */
  build(n) {
    this.createShaders(), this.createVertexBuffers(n), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.createSharedTextures(), this.createDepthBufferPass01(), this.createTexturesBindGroupPass02(), this.updateVertexBuffers(n), this.updateColorUniforms(n), this.createPipeline01(), this.createPipeline02();
  }
  /**
   * Creates the vertex and fragment shaders for the pipeline.
   */
  createShaders() {
    const n = {
      label: "Buidlings ssao: vertex shader pass 01",
      code: Lo
    };
    this._vertModule01 = this._renderer.device.createShaderModule(n);
    const r = {
      label: "Buidlings ssao: fragment shader pass 01",
      code: Co
    };
    this._fragModule01 = this._renderer.device.createShaderModule(r);
    const i = {
      label: "Buidlings ssao: vertex shader pass 02",
      code: zo
    };
    this._vertModule02 = this._renderer.device.createShaderModule(i);
    const a = {
      label: "Buidlings ssao: fragment shader pass 02",
      code: Uo
    };
    this._fragModule02 = this._renderer.device.createShaderModule(a);
  }
  /**
   * Creates the vertex buffers for the mesh data.
   * @param {Triangles3DLayer} mesh The mesh data containing positions, normals, thematic, and indices
   */
  createVertexBuffers(n) {
    this._positionBuffer = this._renderer.device.createBuffer({
      label: "Position buffer",
      size: n.position.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._normalBuffer = this._renderer.device.createBuffer({
      label: "Normal buffer",
      size: n.normal.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._thematicBuffer = this._renderer.device.createBuffer({
      label: "Thematic data buffer",
      size: n.thematic.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._highlightedBuffer = this._renderer.device.createBuffer({
      label: "Highlighted data buffer",
      size: n.highlightedVertices.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._skippedBuffer = this._renderer.device.createBuffer({
      label: "Skipped data buffer",
      size: n.skippedVertices.length * 4,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }), this._indicesBuffer = this._renderer.device.createBuffer({
      label: "Primitive indices buffer",
      size: n.indices.length * 4,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
    }), this.updateVertexBuffers(n);
  }
  /**
   * Updates the vertex buffers with the provided mesh data.
   * @param {Triangles3DLayer} mesh The mesh data containing positions, normals, thematic, and indices
   */
  updateVertexBuffers(n) {
    this._renderer.device.queue.writeBuffer(this._normalBuffer, 0, new Float32Array(n.normal)), this._renderer.device.queue.writeBuffer(this._thematicBuffer, 0, new Float32Array(n.thematic)), this._renderer.device.queue.writeBuffer(this._highlightedBuffer, 0, new Float32Array(n.highlightedVertices)), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, new Float32Array(n.skippedVertices)), this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, new Float32Array(n.position)), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, new Uint32Array(n.indices));
  }
  /**
   * Creates the shared textures for the pipeline.
   */
  createSharedTextures() {
    const n = {
      label: "Shared colors texture",
      size: [2 * this._renderer.canvas.width, 2 * this._renderer.canvas.height],
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
      format: "rgba16float"
    }, r = this._renderer.device.createTexture(n).createView();
    this._colorsSharedBuffer = {
      view: r,
      clearValue: [0, 0, 0, 0],
      loadOp: "clear",
      storeOp: "store"
    };
    const i = {
      label: "Shared normals texture",
      size: [2 * this._renderer.canvas.width, 2 * this._renderer.canvas.height],
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
      format: "rgba16float"
    }, a = this._renderer.device.createTexture(i).createView();
    this._normalsSharedBuffer = {
      view: a,
      clearValue: [0, 0, 0, 0],
      loadOp: "clear",
      storeOp: "store"
    };
  }
  /**
   * Creates the depth buffer for the first pass.
   */
  createDepthBufferPass01() {
    const n = {
      label: "Pass 01 depth texture",
      size: [2 * this._renderer.canvas.width, 2 * this._renderer.canvas.height],
      format: "depth32float",
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
    }, r = this._renderer.device.createTexture(n).createView();
    this._depthBufferPass01 = {
      view: r,
      depthClearValue: 1,
      depthLoadOp: "clear",
      depthStoreOp: "store"
    };
  }
  createTexturesBindGroupPass02() {
    const n = this._renderer.device.createSampler({
      label: "Pass 02 sampler",
      magFilter: "linear",
      minFilter: "linear",
      addressModeU: "clamp-to-edge",
      addressModeV: "clamp-to-edge"
    });
    this._texturesPass02BindGroupLayout = this._renderer.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          sampler: {}
        },
        {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {}
        },
        {
          binding: 2,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {}
        }
      ]
    }), this._texturesPass02BindGroup = this._renderer.device.createBindGroup({
      layout: this._texturesPass02BindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: n
        },
        {
          binding: 1,
          resource: this._colorsSharedBuffer.view
        },
        {
          binding: 2,
          resource: this._normalsSharedBuffer.view
        }
      ]
    });
  }
  /**
   * Creates the first render pipeline for the SSAO pass.
   */
  createPipeline01() {
    const n = {
      shaderLocation: 0,
      offset: 0,
      format: "float32x3"
    }, r = {
      shaderLocation: 1,
      offset: 0,
      format: "float32x3"
    }, i = {
      shaderLocation: 2,
      offset: 0,
      format: "float32"
    }, a = {
      shaderLocation: 3,
      offset: 0,
      format: "float32"
    }, s = {
      shaderLocation: 4,
      offset: 0,
      format: "float32"
    }, o = {
      attributes: [n],
      arrayStride: 12,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, f = {
      attributes: [r],
      arrayStride: 12,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, c = {
      attributes: [i],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, u = {
      attributes: [a],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, l = {
      attributes: [s],
      arrayStride: 4,
      // sizeof(float) * 3
      stepMode: "vertex"
    }, h = {
      module: this._vertModule01,
      entryPoint: "main",
      buffers: [o, f, c, u, l]
    }, d = {
      module: this._fragModule01,
      entryPoint: "main",
      targets: [{ format: "rgba16float" }, { format: "rgba16float" }]
    }, p = {
      frontFace: "cw",
      cullMode: "none",
      topology: "triangle-list"
    }, y = {
      depthWriteEnabled: !0,
      depthCompare: "less-equal",
      format: "depth32float"
    }, g = {
      bindGroupLayouts: [this._renderInfoBindGroupLayout, this._cameraBindGroupLayout]
    }, v = {
      layout: this._renderer.device.createPipelineLayout(g),
      vertex: h,
      fragment: d,
      primitive: p,
      depthStencil: y,
      label: "Pipeline triangle ssao 01"
    };
    this._pipeline01 = this._renderer.device.createRenderPipeline(v);
  }
  /**
   * Creates the second render pipeline for the SSAO pass.
   */
  createPipeline02() {
    const n = {
      module: this._vertModule02,
      entryPoint: "main"
    }, r = {
      module: this._fragModule02,
      entryPoint: "main",
      targets: [
        {
          format: "bgra8unorm",
          blend: {
            color: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            },
            alpha: {
              srcFactor: "one",
              dstFactor: "one-minus-src-alpha"
            }
          }
        }
      ]
    }, i = {
      topology: "triangle-strip",
      stripIndexFormat: "uint32"
    }, a = {
      count: this._renderer.sampleCount
    }, s = {
      depthWriteEnabled: !0,
      depthCompare: "less-equal",
      format: "depth32float"
    }, o = {
      bindGroupLayouts: [this._renderInfoBindGroupLayout, this._texturesPass02BindGroupLayout]
    }, f = {
      layout: this._renderer.device.createPipelineLayout(o),
      vertex: n,
      fragment: r,
      primitive: i,
      depthStencil: s,
      multisample: a,
      label: "Pipeline triangle ssao 02"
    };
    this._pipeline02 = this._renderer.device.createRenderPipeline(f);
  }
  /**
   * Renders the first pass of the SSAO pipeline.
   * @param {Camera} camera The camera instance
   */
  pass01(n) {
    const r = this._renderer.commandEncoder, i = {
      colorAttachments: [this._colorsSharedBuffer, this._normalsSharedBuffer],
      depthStencilAttachment: this._depthBufferPass01
    }, a = r.beginRenderPass(i);
    a.setPipeline(this._pipeline01), this.updateCameraUniforms(n), a.setVertexBuffer(0, this._positionBuffer), a.setVertexBuffer(1, this._normalBuffer), a.setVertexBuffer(2, this._thematicBuffer), a.setVertexBuffer(3, this._highlightedBuffer), a.setVertexBuffer(4, this._skippedBuffer), a.setIndexBuffer(this._indicesBuffer, "uint32"), a.setBindGroup(0, this._renderInfoBindGroup), a.setBindGroup(1, this._cameraBindGroup), a.drawIndexed(this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT), a.end();
  }
  /**
   * Renders the second pass of the SSAO pipeline.
   */
  pass02() {
    const n = this._renderer.commandEncoder;
    this._renderer.frameBuffer.loadOp = "load";
    const r = {
      colorAttachments: [this._renderer.frameBuffer],
      depthStencilAttachment: this._renderer.depthBuffer
    }, i = n.beginRenderPass(r);
    i.setPipeline(this._pipeline02), i.setBindGroup(0, this._renderInfoBindGroup), i.setBindGroup(1, this._texturesPass02BindGroup), i.draw(6), i.end();
  }
  renderPass(n) {
    this.pass01(n), this.pass02();
  }
}
class Ro extends di {
  /**
   * Normals of the triangles.
   * @type {number[]}
   */
  _normal;
  /**
   * Constructor for Triangles3DLayer
   * @param {ILayerInfo} layerInfo - The layer information.
   * @param {ILayerRenderInfo} layerRenderInfo - The layer render information.
   * @param {ILayerData} layerData - The layer data.
   */
  constructor(n, r, i) {
    super(n, r, i, 3), this.computeNormals();
  }
  /**
   * Get the normals of the triangles.
   * @returns {number[]} - The normals of the triangles.
   */
  get normal() {
    return this._normal;
  }
  /**
   * Create the rendering pipeline for the layer.
   * @param {Renderer} renderer - The renderer instance.
   */
  createPipeline(n) {
    this._pipeline = new Go(n), this._pipeline.build(this), this._pipelinePicking = new hi(n), this._pipelinePicking.build(this);
  }
  /**
   * Compute the normals for the triangles.
   */
  computeNormals() {
    const n = this._position.length;
    this._normal = new Array(n).fill(0);
    for (let r = 0; r < this._indices.length; r += 3) {
      const i = 3 * this._indices[r + 0], a = 3 * this._indices[r + 1], s = 3 * this._indices[r + 2], o = [], f = [], c = [];
      for (let d = 0; d < 3; d++)
        o.push(this._position[i + d]), f.push(this._position[a + d]), c.push(this._position[s + d]);
      const u = [o[0] - f[0], o[1] - f[1], o[2] - f[2]], l = [o[0] - c[0], o[1] - c[1], o[2] - c[2]], h = [u[1] * l[2] - u[2] * l[1], u[2] * l[0] - u[0] * l[2], u[0] * l[1] - u[1] * l[0]];
      for (let d = 0; d < 3; d++)
        this._normal[i + d] += h[d], this._normal[a + d] += h[d], this._normal[s + d] += h[d];
    }
    for (let r = 0; r < this._normal.length; r += 3) {
      const i = [];
      for (let s = 0; s < 3; s++)
        i.push(this._normal[r + s]);
      const a = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
      for (let s = 0; s < 3; s++)
        this._normal[r + s] = this._normal[r + s] / a;
    }
  }
}
class No {
  /**
   * List of vector layers in the map.
   * @type {VectorLayer[]}
   */
  _vectorLayers = [];
  /**
   * List of raster layers in the map.
   * @type {RasterLayer[]}
   */
  _rasterLayers = [];
  /**
   * Bounding box of the map.
   * @type {BBox}
   */
  _bbox;
  /**
   * Origin of the map.
   * @type {number[]}
   */
  _origin;
  /**
   * Constructor for LayerManager
   */
  constructor() {
    this._vectorLayers = [], this._rasterLayers = [];
  }
  /**
   * Get the vetor layers of the map.
   * @returns {Layer[]} - The list of layers.
   */
  get vectorLayers() {
    return this._vectorLayers;
  }
  /**
   * Get the raster layers of the map.
   * @returns {Layer[]} - The list of layers.
   */
  get rasterLayers() {
    return this._rasterLayers;
  }
  /**
   * Get the origin of the map.
   * @returns {number[]} - The origin coordinates in meters.
   */
  get origin() {
    return this._origin;
  }
  /**
   * Get the bounding box of the map.
   * @returns {BBox} - The bounding box as a GeoJSON polygon.
   */
  get bboxAndOrigin() {
    return this._bbox;
  }
  /**
   * Set the origin and the bounding box of the map.
   * @param {BBox} bbox - The bounding box to set.
   */
  set bboxAndOrigin(n) {
    this._bbox = n, this._origin = [
      (n[2] + n[0]) * 0.5,
      (n[3] + n[1]) * 0.5
    ];
  }
  /**
   * Adds a layer to the map.
   * @param {ILayerInfo} layerInfo - The information about the layer.
   * @param {ILayerRenderInfo} layerRender - The rendering information for the layer.
   * @param {ILayerData} layerData - The data associated with the layer.
   * @returns {Layer | null} - The created layer or null if the type is unknown.
   */
  addVectorLayer(n, r, i) {
    let a = null;
    switch (n.typeLayer) {
      case I.AUTK_OSM_BUILDINGS:
        a = new Ro(n, r, i);
        break;
      default:
        a = new Ao(n, r, i);
        break;
    }
    return a ? (this._vectorLayers.push(a), this._vectorLayers.sort((s, o) => s.layerInfo.zIndex - o.layerInfo.zIndex), a) : null;
  }
  /**
   * Adds a raster layer to the map.
   * @param {ILayerInfo} layerInfo - The information about the layer.
   * @param {ILayerRenderInfo} layerRender - The rendering information for the layer.
   * @param {ILayerData} layerData - The data associated with the layer.
   * @returns {Layer | null} - The created layer or null if the type is unknown.
   */
  addRasterLayer(n, r, i) {
    let a = null;
    switch (n.typeLayer) {
      case I.AUTK_RASTER:
        a = new wo(n, r, i);
        break;
    }
    return a ? (this._rasterLayers.push(a), this._rasterLayers.sort((s, o) => s.layerInfo.zIndex - o.layerInfo.zIndex), a) : null;
  }
  /**
   * Removes a layer from the map.
   * @param {string} layerId - The ID of the layer to remove.
   */
  delLayer(n) {
    for (let r = 0; r < this._vectorLayers.length; r++)
      if (this._vectorLayers[r].layerInfo.id === n) {
        this.vectorLayers.splice(r, 1);
        return;
      }
    for (let r = 0; r < this._rasterLayers.length; r++)
      if (this._rasterLayers[r].layerInfo.id === n) {
        this._rasterLayers.splice(r, 1);
        return;
      }
  }
  /**
   * Searches for a layer by its ID.
   * @param {string} layerId - The ID of the layer to search for.
   * @returns {Layer | null} - The found layer or null if not found.
   */
  searchByLayerId(n) {
    let r = null;
    for (const i of this.vectorLayers)
      if (i.layerInfo.id === n) {
        r = i;
        break;
      }
    for (const i of this.rasterLayers)
      if (i.layerInfo.id === n) {
        r = i;
        break;
      }
    return r;
  }
  /**
   * Computes the Z-index for a given layer type.
   * @param {LayerType} layerType - The type of the layer.
   * @returns {number} - The computed Z-index.
   */
  computeZindex(n) {
    let r = 0;
    switch (n) {
      case I.AUTK_OSM_SURFACE:
        r = 0;
        break;
      case I.AUTK_OSM_PARKS:
        r = 0.1;
        break;
      case I.AUTK_OSM_WATER:
        r = 0.2;
        break;
      case I.AUTK_OSM_ROADS:
        r = 0.3;
        break;
      case I.AUTK_OSM_BUILDINGS:
        r = 1;
        break;
      case I.AUTK_RASTER:
        r = 0.4;
        break;
      case I.AUTK_GEO_POLYGONS:
        r = 0.5;
        break;
      case I.AUTK_GEO_POLYLINES:
        r = 0.6;
        break;
      case I.AUTK_GEO_POINTS:
        r = 0.7;
        break;
    }
    return r;
  }
}
class Oo {
  // HTML Canvas reference
  _canvas;
  // Logical GPU
  _device;
  // WebGPU context
  _context;
  // Multisample & depth textures
  _multisampleTexture;
  _colorTexture;
  _frameBuffer;
  _depthTexture;
  _depthBuffer;
  // Picking
  _pickingBuffer;
  _pickingTexture;
  _pickingDepthBuffer;
  _pickingDepthTexture;
  // command encoder
  _commandEncoder;
  // antalising
  _sampleCount = 4;
  _pickingSampleCount = 1;
  constructor(n) {
    this._canvas = n;
  }
  get canvas() {
    return this._canvas;
  }
  get context() {
    return this._context;
  }
  get device() {
    return this._device;
  }
  get frameBuffer() {
    return this._frameBuffer;
  }
  get depthBuffer() {
    return this._depthBuffer;
  }
  get commandEncoder() {
    return this._commandEncoder;
  }
  get sampleCount() {
    return this._sampleCount;
  }
  get pickingTexture() {
    return this._pickingTexture;
  }
  get pickingBuffer() {
    return this._pickingBuffer;
  }
  get pickingDepthBuffer() {
    return this._pickingDepthBuffer;
  }
  // Start the rendering engine
  async init() {
    await this.initWebGPU() && (this.configureContext(), this.configureFrameBuffer(), this.configureDepthBuffer(), this.configurePickingBuffer());
  }
  // Initialize WebGPU
  async initWebGPU() {
    try {
      const n = navigator.gpu;
      if (!n)
        return !1;
      const r = await n.requestAdapter();
      if (r === null)
        return !1;
      this._device = await r.requestDevice();
    } catch (n) {
      return console.error(n), !1;
    }
    return !0;
  }
  resize(n, r) {
    this._canvas.width = n, this._canvas.height = r, this.configureContext(), this.configureFrameBuffer(), this.configureDepthBuffer(), this.configurePickingBuffer();
  }
  // Configure the webgpu canvas context
  configureContext() {
    if (this._context || (this._context = this._canvas.getContext("webgpu")), this._context) {
      const n = {
        device: this._device,
        format: "bgra8unorm",
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        alphaMode: "premultiplied"
      };
      this._context.configure(n);
    }
  }
  configurePickingBuffer() {
    const n = {
      size: [this._canvas.width, this._canvas.height],
      format: "rgba8unorm",
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
      sampleCount: this._pickingSampleCount
    };
    this._pickingTexture = this._device.createTexture(n);
    const r = this._pickingTexture.createView();
    this._pickingBuffer = {
      view: r,
      clearValue: { r: 0, g: 0, b: 0, a: 1 },
      loadOp: "clear",
      storeOp: "store"
    };
    const i = {
      size: [this._canvas.width, this._canvas.height],
      format: "depth32float",
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
      sampleCount: this._pickingSampleCount
    };
    this._pickingDepthTexture = this._device.createTexture(i);
    const a = this._pickingDepthTexture.createView();
    this._pickingDepthBuffer = {
      view: a,
      depthClearValue: 1,
      depthLoadOp: "clear",
      depthStoreOp: "store"
    };
  }
  configureFrameBuffer() {
    if (!this._context) {
      console.error("GPU canvas context is null.");
      return;
    }
    const n = this._context.getCurrentTexture().createView(), r = {
      size: [this._canvas.width, this._canvas.height],
      sampleCount: this._sampleCount,
      format: "bgra8unorm",
      usage: GPUTextureUsage.RENDER_ATTACHMENT
    };
    this._multisampleTexture = this._device.createTexture(r);
    const i = this._multisampleTexture.createView(), a = Y.getColor("background");
    this._frameBuffer = {
      view: i,
      resolveTarget: n,
      clearValue: { r: a.r / 255, g: a.g / 255, b: a.b / 255, a: 1 },
      loadOp: "clear",
      storeOp: "store"
    };
  }
  configureDepthBuffer() {
    const n = {
      size: [this._canvas.width, this._canvas.height, 1],
      sampleCount: this._sampleCount,
      dimension: "2d",
      format: "depth32float",
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC
    };
    this._depthTexture = this._device.createTexture(n);
    const r = this._depthTexture.createView();
    this._depthBuffer = {
      view: r,
      depthClearValue: 1,
      depthLoadOp: "clear",
      depthStoreOp: "store"
    };
  }
  start() {
    if (!this._context) {
      console.error("GPU canvas context is null.");
      return;
    }
    this._frameBuffer.loadOp = "clear", this._frameBuffer.resolveTarget = this._context.getCurrentTexture().createView(), this._commandEncoder = this._device.createCommandEncoder();
    const n = {
      colorAttachments: [this._frameBuffer],
      depthStencilAttachment: this._depthBuffer
    };
    this._commandEncoder.beginRenderPass(n).end();
  }
  finish() {
    this._device.queue.submit([this._commandEncoder.finish()]);
  }
  startPickingRenderPass() {
    this._pickingBuffer.loadOp = "clear", this._commandEncoder = this._device.createCommandEncoder();
    const n = {
      colorAttachments: [this._pickingBuffer],
      depthStencilAttachment: this._pickingDepthBuffer
    };
    this._commandEncoder.beginRenderPass(n).end();
  }
}
class Do {
  /**
   * Reference to the AutkMap instance.
   * @type {AutkMap}
   */
  _map;
  /**
   * Last mouse position in pixels.
   * This is used to calculate the movement of the mouse for panning.
   * @type {number[]}
   */
  _lastPoint;
  /**
   * Current mouse status.
   * This indicates whether the mouse is idle, dragging, or performing another action.
   * @type {MouseStatus}
   */
  _status;
  /**
   * Constructor for MouseEvents
   * @param {AutkMap} map The map instance
   */
  constructor(n) {
    this._map = n, this._lastPoint = [0, 0], this._status = We.MOUSE_IDLE;
  }
  /**
   * Mouse events binding function
   */
  bindEvents() {
    this._map.renderer.canvas.addEventListener("wheel", this.mouseWheel.bind(this), { passive: !1 }), this._map.renderer.canvas.addEventListener("mousedown", this.mouseDown.bind(this), !1), this._map.renderer.canvas.addEventListener("mouseup", this.mouseUp.bind(this), !1), this._map.renderer.canvas.addEventListener("contextmenu", this.contextMenu.bind(this), !1), this._map.renderer.canvas.addEventListener("mousemove", this.mouseMove.bind(this), !1), this._map.renderer.canvas.addEventListener("dblclick", this.mouseDoubleClick.bind(this), !1);
  }
  /**
   * Handles mouse right click event
   * @param {MouseEvent} event The fired event
   */
  contextMenu(n) {
    n.preventDefault(), n.stopPropagation();
  }
  /**
   * Handles mouse down event
   * @param {MouseEvent} event The fired event
   */
  mouseDown(n) {
    n.preventDefault(), n.stopPropagation(), (n.button == 0 || n.button == 1) && (this._lastPoint = [n.offsetX, n.offsetY], this._status = We.MOUSE_DRAG);
  }
  /**
   * Handles mouse move event
   * @param {MouseEvent} event The fired event
   */
  mouseMove(n) {
    n.preventDefault(), n.stopPropagation();
    const r = this._map.renderer.canvas;
    if (this._status === We.MOUSE_DRAG) {
      const i = -n.offsetX + this._lastPoint[0], a = n.offsetY - this._lastPoint[1];
      n.buttons === 1 && n.shiftKey ? (this._map.camera.yaw(i / r.offsetWidth), this._map.camera.pitch(a / r.offsetHeight)) : this._map.camera.translate(i / r.offsetWidth, a / r.offsetHeight), this._lastPoint = [n.offsetX, n.offsetY];
    }
  }
  /**
   * Handles mouse up event
   * @param {MouseEvent} event The fired event
   */
  mouseUp(n) {
    n.preventDefault(), n.stopPropagation(), this._status = We.MOUSE_IDLE;
  }
  /**
   * Handles mouse down event
   * @param {WheelEvent} event The fired event
   */
  mouseWheel(n) {
    n.preventDefault(), n.stopPropagation();
    const r = this._map.renderer.canvas, i = r.getBoundingClientRect(), a = (n.clientX - i.left) / r.offsetWidth, s = 1 - (n.clientY - i.top) / r.offsetHeight;
    this._map.camera.zoom(n.deltaY * 0.01, a, s);
  }
  /**
   * Handles mouse double click event
   * @param {MouseEvent} event The fired event
   */
  mouseDoubleClick(n) {
    const r = this._map.renderer.canvas, i = r.getBoundingClientRect(), a = n.clientX - i.left, s = n.clientY - i.top, o = r.width / r.offsetWidth, f = r.height / r.offsetHeight, c = Math.floor(a * o), u = Math.floor(s * f);
    this._map.layerManager.vectorLayers.forEach((l) => {
      l.layerRenderInfo.isPick && (l.layerRenderInfo.pickedComps = [c, u]);
    });
  }
}
class Vo {
  /**
   * Listeners for each map event.
   * @type {Object<string, MapEventListener[]>}
   */
  _listeners = {};
  /**
   * Constructor for MapEvents
   * @param {MapEvent[]} events - The list of map events to initialize.
   */
  constructor(n) {
    n.forEach((r) => {
      this._listeners[r] = [];
    });
  }
  /**
   * Adds an event listener for a specific map event.
   * @param {string} event - The name of the event to listen for.
   * @param {MapEventListener} listener - The listener function to call when the event is emitted.
   */
  addEventListener(n, r) {
    this._listeners[n] && this._listeners[n].push(r);
  }
  /**
   * Removes an event listener for a specific map event.
   * @param {string} event - The name of the event to stop listening for.
   * @param {MapEventListener} listener - The listener function to remove.
   */
  removeEventListener(n, r) {
    this._listeners[n] && (this._listeners[n] = this._listeners[n].filter((i) => i !== r));
  }
  /**
   * Emits an event with the provided selection and layer ID.
   * @param {string} event - The name of the event to emit.
   * @param {number[] | string[]} selection - The selection data to pass to the listeners.
   * @param {string} layerId - The ID of the layer associated with the event.
   */
  emit(n, r, i) {
    this._listeners[n] && this._listeners[n].forEach((a) => a(r, i));
  }
}
class ke {
  /**
   * Builds a mesh from GeoJSON features representing points.
   * @param {FeatureCollection} geojson The GeoJSON feature collection
   * @param {number[]} origin The origin point for translation
   * @returns {[ILayerGeometry[], ILayerComponent[]]} An array of geometries and components
   */
  static buildMesh(n, r) {
    const i = [], a = [], s = n.features;
    let o = [];
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      if (c.geometry.type === "Point")
        o = ke.pointToMesh(c, r);
      else if (c.geometry.type === "MultiPoint")
        o = ke.multiPointToMesh(c, r);
      else {
        console.warn("Unsupported geometry type:", c.geometry.type);
        continue;
      }
      let u = 0, l = 0;
      for (const h of o)
        i.push({
          position: h.flatCoords,
          indices: h.flatIds
        }), u += h.flatCoords.length / 2, l += h.flatIds.length / 3;
      a.push({ nPoints: u, nTriangles: l });
    }
    return [i, a];
  }
  //---------------------------------------------------------------------------    
  /**
   * Converts a Point feature to a mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a Point
   * @param {number[]} origin The origin point for translation
   * @returns {{ flatCoords: number[], flatIds: number[] }[]} An array containing the flat coordinates and indices
   */
  static pointToMesh(n, r) {
    const { coordinates: i } = n.geometry, a = 40, s = ke.sampleCircle(
      i[0] - r[0],
      i[1] - r[1],
      100,
      a
    ).flat(), o = [];
    for (let f = 1; f <= a; f++)
      o.push(0, f, f % a + 1);
    return [{ flatCoords: s, flatIds: o }];
  }
  /**
   * Converts a MultiPoint feature to a mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiPoint
   * @param {number[]} origin The origin point for translation
   * @returns {{ flatCoords: number[], flatIds: number[] }[]} An array containing the flat coordinates and indices
   */
  static multiPointToMesh(n, r) {
    const { coordinates: i } = n.geometry, a = 10, s = [];
    for (const o of i) {
      const f = ke.sampleCircle(
        o[0] - r[0],
        o[1] - r[1],
        100,
        a
      ).flat(), c = [];
      for (let u = 1; u <= a; u++)
        c.push(0, u, u % a + 1);
      s.push({ flatCoords: f, flatIds: c });
    }
    return s;
  }
  /**
   * Samples points on a circle.
   * @param {number} centerX The x-coordinate of the circle's center
   * @param {number} centerY The y-coordinate of the circle's center
   * @param {number} radius The radius of the circle
   * @param {number} numPoints The number of points to sample on the circle
   * @returns {[number, number][]} An array of sampled points as [x, y] tuples
   */
  static sampleCircle(n, r, i, a) {
    const s = [[n, r]];
    for (let o = 0; o < a; o++) {
      const f = o / a * 2 * Math.PI, c = n + i * Math.cos(f), u = r + i * Math.sin(f);
      s.push([c, u]);
    }
    return s;
  }
}
function he(e, n, r = 2) {
  const i = e.length;
  let a = Fo(e, 0, i, r, !0);
  const s = [];
  if (!a || a.next === a.prev) return s;
  let o, f, c;
  if (e.length > 80 * r) {
    o = e[0], f = e[1];
    let u = o, l = f;
    for (let h = r; h < i; h += r) {
      const d = e[h], p = e[h + 1];
      d < o && (o = d), p < f && (f = p), d > u && (u = d), p > l && (l = p);
    }
    c = Math.max(u - o, l - f), c = c !== 0 ? 32767 / c : 0;
  }
  return ot(a, s, r, o, f, c, 0), s;
}
function Fo(e, n, r, i, a) {
  let s;
  if (a === ef(e, n, r, i) > 0)
    for (let o = n; o < r; o += i) s = ar(o / i | 0, e[o], e[o + 1], s);
  else
    for (let o = r - i; o >= n; o -= i) s = ar(o / i | 0, e[o], e[o + 1], s);
  return s && Qt(s, s.next) && (ft(s), s = s.next), s;
}
function st(e, n) {
  if (!e) return e;
  n || (n = e);
  let r = e, i;
  do
    if (i = !1, !r.steiner && (Qt(r, r.next) || C(r.prev, r, r.next) === 0)) {
      if (ft(r), r = n = r.prev, r === r.next) break;
      i = !0;
    } else
      r = r.next;
  while (i || r !== n);
  return n;
}
function ot(e, n, r, i, a, s, o) {
  if (!e) return;
  !o && s && Ho(e, i, a, s);
  let f = e;
  for (; e.prev !== e.next; ) {
    const c = e.prev, u = e.next;
    if (s ? qo(e, i, a, s) : Yo(e)) {
      n.push(c.i, e.i, u.i), ft(e), e = u.next, f = u.next;
      continue;
    }
    if (e = u, e === f) {
      o ? o === 1 ? (e = jo(st(e), n), ot(e, n, r, i, a, s, 2)) : o === 2 && $o(e, n, r, i, a, s) : ot(st(e), n, r, i, a, s, 1);
      break;
    }
  }
}
function Yo(e) {
  const n = e.prev, r = e, i = e.next;
  if (C(n, r, i) >= 0) return !1;
  const a = n.x, s = r.x, o = i.x, f = n.y, c = r.y, u = i.y, l = Math.min(a, s, o), h = Math.min(f, c, u), d = Math.max(a, s, o), p = Math.max(f, c, u);
  let y = i.next;
  for (; y !== n; ) {
    if (y.x >= l && y.x <= d && y.y >= h && y.y <= p && Qe(a, f, s, c, o, u, y.x, y.y) && C(y.prev, y, y.next) >= 0) return !1;
    y = y.next;
  }
  return !0;
}
function qo(e, n, r, i) {
  const a = e.prev, s = e, o = e.next;
  if (C(a, s, o) >= 0) return !1;
  const f = a.x, c = s.x, u = o.x, l = a.y, h = s.y, d = o.y, p = Math.min(f, c, u), y = Math.min(l, h, d), g = Math.max(f, c, u), v = Math.max(l, h, d), w = pn(p, y, n, r, i), _ = pn(g, v, n, r, i);
  let b = e.prevZ, m = e.nextZ;
  for (; b && b.z >= w && m && m.z <= _; ) {
    if (b.x >= p && b.x <= g && b.y >= y && b.y <= v && b !== a && b !== o && Qe(f, l, c, h, u, d, b.x, b.y) && C(b.prev, b, b.next) >= 0 || (b = b.prevZ, m.x >= p && m.x <= g && m.y >= y && m.y <= v && m !== a && m !== o && Qe(f, l, c, h, u, d, m.x, m.y) && C(m.prev, m, m.next) >= 0)) return !1;
    m = m.nextZ;
  }
  for (; b && b.z >= w; ) {
    if (b.x >= p && b.x <= g && b.y >= y && b.y <= v && b !== a && b !== o && Qe(f, l, c, h, u, d, b.x, b.y) && C(b.prev, b, b.next) >= 0) return !1;
    b = b.prevZ;
  }
  for (; m && m.z <= _; ) {
    if (m.x >= p && m.x <= g && m.y >= y && m.y <= v && m !== a && m !== o && Qe(f, l, c, h, u, d, m.x, m.y) && C(m.prev, m, m.next) >= 0) return !1;
    m = m.nextZ;
  }
  return !0;
}
function jo(e, n) {
  let r = e;
  do {
    const i = r.prev, a = r.next.next;
    !Qt(i, a) && pi(i, r, r.next, a) && Dt(i, a) && Dt(a, i) && (n.push(i.i, r.i, a.i), ft(r), ft(r.next), r = e = a), r = r.next;
  } while (r !== e);
  return st(r);
}
function $o(e, n, r, i, a, s) {
  let o = e;
  do {
    let f = o.next.next;
    for (; f !== o.prev; ) {
      if (o.i !== f.i && Ko(o, f)) {
        let c = Jo(o, f);
        o = st(o, o.next), c = st(c, c.next), ot(o, n, r, i, a, s, 0), ot(c, n, r, i, a, s, 0);
        return;
      }
      f = f.next;
    }
    o = o.next;
  } while (o !== e);
}
function Ho(e, n, r, i) {
  let a = e;
  do
    a.z === 0 && (a.z = pn(a.x, a.y, n, r, i)), a.prevZ = a.prev, a.nextZ = a.next, a = a.next;
  while (a !== e);
  a.prevZ.nextZ = null, a.prevZ = null, Xo(a);
}
function Xo(e) {
  let n, r = 1;
  do {
    let i = e, a;
    e = null;
    let s = null;
    for (n = 0; i; ) {
      n++;
      let o = i, f = 0;
      for (let u = 0; u < r && (f++, o = o.nextZ, !!o); u++)
        ;
      let c = r;
      for (; f > 0 || c > 0 && o; )
        f !== 0 && (c === 0 || !o || i.z <= o.z) ? (a = i, i = i.nextZ, f--) : (a = o, o = o.nextZ, c--), s ? s.nextZ = a : e = a, a.prevZ = s, s = a;
      i = o;
    }
    s.nextZ = null, r *= 2;
  } while (n > 1);
  return e;
}
function pn(e, n, r, i, a) {
  return e = (e - r) * a | 0, n = (n - i) * a | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e | n << 1;
}
function Zo(e, n, r, i, a, s, o, f) {
  return (a - o) * (n - f) >= (e - o) * (s - f) && (e - o) * (i - f) >= (r - o) * (n - f) && (r - o) * (s - f) >= (a - o) * (i - f);
}
function Qe(e, n, r, i, a, s, o, f) {
  return !(e === o && n === f) && Zo(e, n, r, i, a, s, o, f);
}
function Ko(e, n) {
  return e.next.i !== n.i && e.prev.i !== n.i && !Wo(e, n) && // doesn't intersect other edges
  (Dt(e, n) && Dt(n, e) && Qo(e, n) && // locally visible
  (C(e.prev, e, n.prev) || C(e, n.prev, n)) || // does not create opposite-facing sectors
  Qt(e, n) && C(e.prev, e, e.next) > 0 && C(n.prev, n, n.next) > 0);
}
function C(e, n, r) {
  return (n.y - e.y) * (r.x - n.x) - (n.x - e.x) * (r.y - n.y);
}
function Qt(e, n) {
  return e.x === n.x && e.y === n.y;
}
function pi(e, n, r, i) {
  const a = Et(C(e, n, r)), s = Et(C(e, n, i)), o = Et(C(r, i, e)), f = Et(C(r, i, n));
  return !!(a !== s && o !== f || a === 0 && Pt(e, r, n) || s === 0 && Pt(e, i, n) || o === 0 && Pt(r, e, i) || f === 0 && Pt(r, n, i));
}
function Pt(e, n, r) {
  return n.x <= Math.max(e.x, r.x) && n.x >= Math.min(e.x, r.x) && n.y <= Math.max(e.y, r.y) && n.y >= Math.min(e.y, r.y);
}
function Et(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Wo(e, n) {
  let r = e;
  do {
    if (r.i !== e.i && r.next.i !== e.i && r.i !== n.i && r.next.i !== n.i && pi(r, r.next, e, n)) return !0;
    r = r.next;
  } while (r !== e);
  return !1;
}
function Dt(e, n) {
  return C(e.prev, e, e.next) < 0 ? C(e, n, e.next) >= 0 && C(e, e.prev, n) >= 0 : C(e, n, e.prev) < 0 || C(e, e.next, n) < 0;
}
function Qo(e, n) {
  let r = e, i = !1;
  const a = (e.x + n.x) / 2, s = (e.y + n.y) / 2;
  do
    r.y > s != r.next.y > s && r.next.y !== r.y && a < (r.next.x - r.x) * (s - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next;
  while (r !== e);
  return i;
}
function Jo(e, n) {
  const r = yn(e.i, e.x, e.y), i = yn(n.i, n.x, n.y), a = e.next, s = n.prev;
  return e.next = n, n.prev = e, r.next = a, a.prev = r, i.next = r, r.prev = i, s.next = i, i.prev = s, i;
}
function ar(e, n, r, i) {
  const a = yn(e, n, r);
  return i ? (a.next = i.next, a.prev = i, i.next.prev = a, i.next = a) : (a.prev = a, a.next = a), a;
}
function ft(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function yn(e, n, r) {
  return {
    i: e,
    // vertex index in coordinates array
    x: n,
    y: r,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: !1
    // indicates whether this is a steiner point
  };
}
function ef(e, n, r, i) {
  let a = 0;
  for (let s = n, o = r - i; s < r; s += i)
    a += (e[o] - e[s]) * (e[s + 1] + e[o + 1]), o = s;
  return a;
}
class F {
  /**
   * Builds a mesh from GeoJSON features representing polygons.
   * @param {FeatureCollection} geojson The GeoJSON feature collection
   * @param {number[]} origin The origin point for translation
   * @returns {[ILayerGeometry[], ILayerComponent[]]} An array of geometries and components
   */
  static buildMesh(n, r) {
    const i = [], a = [], s = n.features;
    let o = [];
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      if (c.geometry.type === "LineString")
        o = F.lineStringToMesh(c, r);
      else if (c.geometry.type === "MultiLineString")
        o = F.multiLineStringToMesh(c, r);
      else if (c.geometry.type === "Polygon")
        o = F.polygonToMesh(c, r);
      else if (c.geometry.type === "MultiPolygon")
        o = F.multiPolygonToMesh(c, r);
      else {
        console.warn("Unsupported geometry type:", c.geometry.type);
        continue;
      }
      let u = 0, l = 0;
      for (const h of o)
        i.push({
          position: h.flatCoords,
          indices: h.flatIds
        }), u += h.flatCoords.length / 2, l += h.flatIds.length / 3;
      a.push({ nPoints: u, nTriangles: l });
    }
    return [i, a];
  }
  /**
   * Converts GeoJSON features into a collection of borders.
   * @param {FeatureCollection} geojson The GeoJSON feature collection
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static buildBorder(n, r) {
    const i = [], a = [], s = n.features;
    let o = [];
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      if (c.geometry.type === "LineString")
        o = F.lineStringToBorderMesh(c, r);
      else if (c.geometry.type === "MultiLineString")
        o = F.multiLineStringToBorderMesh(c, r);
      else if (c.geometry.type === "Polygon")
        o = F.polygonToBorderMesh(c, r);
      else if (c.geometry.type === "MultiPolygon")
        o = F.multiPolygonToBorderMesh(c, r);
      else {
        console.warn("Unsupported geometry type:", c.geometry.type);
        continue;
      }
      let u = 0, l = 0;
      for (const h of o)
        i.push({
          position: h.flatCoords,
          indices: h.flatIds
        }), u += h.flatCoords.length / 2, l += h.flatIds.length / 2;
      a.push({ nPoints: u, nLines: l });
    }
    return [i, a];
  }
  //---------------------------------------------------------------------------
  /**
   * Converts a LineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static lineStringToMesh(n, r) {
    const { coordinates: i } = n.geometry, a = i.map((o) => [o[0] - r[0], o[1] - r[1]]).flat(), s = he(a);
    return [{ flatCoords: a, flatIds: s }];
  }
  /**
   * Converts a LineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static lineStringToBorderMesh(n, r) {
    const { coordinates: i } = n.geometry, a = i.map((o) => [o[0] - r[0], o[1] - r[1]]).flat(), s = F.generateBorderIds(a.length / 2);
    return [{ flatCoords: a, flatIds: s }];
  }
  /**
   * Converts a MultiLineString feature to a mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiLineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static multiLineStringToMesh(n, r) {
    const { coordinates: i } = n.geometry, a = [];
    for (const s of i) {
      const o = s.map((c) => [c[0] - r[0], c[1] - r[1]]).flat(), f = he(o);
      a.push({ flatCoords: o, flatIds: f });
    }
    return a;
  }
  /**
   * Converts a MultiLineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiLineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static multiLineStringToBorderMesh(n, r) {
    const { coordinates: i } = n.geometry, a = [];
    for (const s of i) {
      const o = s.map((c) => [c[0] - r[0], c[1] - r[1]]).flat(), f = F.generateBorderIds(o.length / 2);
      a.push({ flatCoords: o, flatIds: f });
    }
    return a;
  }
  /**
   * Converts a Polygon feature to a mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a Polygon
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static polygonToMesh(n, r) {
    const { coordinates: i } = n.geometry, a = i[0].map((c) => c), s = [];
    for (let c = 1; c < i.length; c++)
      s.push(a.length), i[c].forEach((u) => a.push(u));
    const o = a.map((c) => [c[0] - r[0], c[1] - r[1]]).flat(), f = he(o);
    return [{ flatCoords: o, flatIds: f }];
  }
  /**
   * Converts a Polygon feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a Polygon
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static polygonToBorderMesh(n, r) {
    const { coordinates: i } = n.geometry, a = i[0].map((c) => c), s = [];
    for (let c = 1; c < i.length; c++)
      s.push(a.length), i[c].forEach((u) => a.push(u));
    const o = a.map((c) => [c[0] - r[0], c[1] - r[1]]).flat(), f = F.generateBorderIds(o.length / 2);
    return [{ flatCoords: o, flatIds: f }];
  }
  /**
   * Converts a MultiPolygon feature to a mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiPolygon
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static multiPolygonToMesh(n, r) {
    const i = [], { coordinates: a } = n.geometry;
    for (const s of a) {
      const o = s[0].map((l) => l), f = [];
      for (let l = 1; l < s.length; l++)
        f.push(o.length), s[l].forEach((h) => o.push(h));
      const c = o.map((l) => [l[0] - r[0], l[1] - r[1]]).flat(), u = he(c);
      i.push({ flatCoords: c, flatIds: u });
    }
    return i;
  }
  /**
   * Converts a MultiPolygon feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiPolygon
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static multiPolygonToBorderMesh(n, r) {
    const i = [], { coordinates: a } = n.geometry;
    for (const s of a) {
      const o = s[0].map((l) => l), f = [];
      for (let l = 1; l < s.length; l++)
        f.push(o.length), s[l].forEach((h) => o.push(h));
      const c = o.map((l) => [l[0] - r[0], l[1] - r[1]]).flat(), u = F.generateBorderIds(c.length / 2);
      i.push({ flatCoords: c, flatIds: u });
    }
    return i;
  }
  /**
   * Generates border indices for a given number of coordinates.
   * @param {number} nCoords The number of coordinates
   * @returns {number[]} An array of border indices
   */
  static generateBorderIds(n) {
    const r = [];
    for (let i = 0; i < n - 1; i++)
      r.push(i, i + 1);
    return r.push(n - 1, 0), r;
  }
}
var j = 63710088e-1, tf = {
  centimeters: j * 100,
  centimetres: j * 100,
  degrees: 360 / (2 * Math.PI),
  feet: j * 3.28084,
  inches: j * 39.37,
  kilometers: j / 1e3,
  kilometres: j / 1e3,
  meters: j,
  metres: j,
  miles: j / 1609.344,
  millimeters: j * 1e3,
  millimetres: j * 1e3,
  nauticalmiles: j / 1852,
  radians: 1,
  yards: j * 1.0936
};
function Vt(e, n, r = {}) {
  const i = { type: "Feature" };
  return (r.id === 0 || r.id) && (i.id = r.id), r.bbox && (i.bbox = r.bbox), i.properties = n || {}, i.geometry = e, i;
}
function kn(e, n, r = {}) {
  if (e.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Vt({
    type: "LineString",
    coordinates: e
  }, n, r);
}
function nf(e, n, r = {}) {
  return Vt({
    type: "MultiLineString",
    coordinates: e
  }, n, r);
}
function rf(e, n = "kilometers") {
  const r = tf[n];
  if (!r)
    throw new Error(n + " units is invalid");
  return e / r;
}
function af(e, n) {
  return sf(rf(e, n));
}
function sf(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function of(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ff(e) {
  if (Array.isArray(e))
    return e;
  if (e.type === "Feature") {
    if (e.geometry !== null)
      return e.geometry.coordinates;
  } else if (e.coordinates)
    return e.coordinates;
  throw new Error(
    "coords must be GeoJSON Feature, Geometry Object or an Array"
  );
}
function cf(e, n) {
  return e.type === "FeatureCollection" ? "FeatureCollection" : e.type === "GeometryCollection" ? "GeometryCollection" : e.type === "Feature" && e.geometry !== null ? e.geometry.type : e.type;
}
function uf(e, n) {
  var r, i, a, s, o, f, c, u, l, h, d = 0, p = e.type === "FeatureCollection", y = e.type === "Feature", g = p ? e.features.length : 1;
  for (r = 0; r < g; r++) {
    for (f = p ? e.features[r].geometry : y ? e.geometry : e, u = p ? e.features[r].properties : y ? e.properties : {}, l = p ? e.features[r].bbox : y ? e.bbox : void 0, h = p ? e.features[r].id : y ? e.id : void 0, c = f ? f.type === "GeometryCollection" : !1, o = c ? f.geometries.length : 1, a = 0; a < o; a++) {
      if (s = c ? f.geometries[a] : f, s === null) {
        if (n(
          null,
          d,
          u,
          l,
          h
        ) === !1)
          return !1;
        continue;
      }
      switch (s.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (n(
            s,
            d,
            u,
            l,
            h
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (i = 0; i < s.geometries.length; i++)
            if (n(
              s.geometries[i],
              d,
              u,
              l,
              h
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    d++;
  }
}
function lf(e, n) {
  uf(e, function(r, i, a, s, o) {
    var f = r === null ? null : r.type;
    switch (f) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return n(
          Vt(r, a, { bbox: s, id: o }),
          i,
          0
        ) === !1 ? !1 : void 0;
    }
    var c;
    switch (f) {
      case "MultiPoint":
        c = "Point";
        break;
      case "MultiLineString":
        c = "LineString";
        break;
      case "MultiPolygon":
        c = "Polygon";
        break;
    }
    for (var u = 0; u < r.coordinates.length; u++) {
      var l = r.coordinates[u], h = {
        type: c,
        coordinates: l
      };
      if (n(Vt(h, a), i, u) === !1)
        return !1;
    }
  });
}
function Ft(e) {
  var n = e[0], r = e[1];
  return [r[0] - n[0], r[1] - n[1]];
}
function gn(e, n) {
  return e[0] * n[1] - n[0] * e[1];
}
function hf(e, n) {
  return [e[0] + n[0], e[1] + n[1]];
}
function df(e, n) {
  return [e[0] - n[0], e[1] - n[1]];
}
function pf(e, n) {
  return [e * n[0], e * n[1]];
}
function yf(e, n) {
  var r = e[0], i = Ft(e), a = n[0], s = Ft(n), o = gn(i, s), f = df(a, r), c = gn(f, s), u = c / o, l = hf(r, pf(u, i));
  return l;
}
function gf(e, n) {
  var r = Ft(e), i = Ft(n);
  return gn(r, i) === 0;
}
function bf(e, n) {
  return gf(e, n) ? !1 : yf(e, n);
}
function de(e, n, r) {
  if (r = r || {}, !of(r)) throw new Error("options is invalid");
  var i = r.units;
  if (!e) throw new Error("geojson is required");
  if (n == null || isNaN(n))
    throw new Error("distance is required");
  var a = cf(e), s = e.properties;
  switch (a) {
    case "LineString":
      return sr(e, n, i);
    case "MultiLineString":
      var o = [];
      return lf(e, function(f) {
        o.push(
          sr(f, n, i).geometry.coordinates
        );
      }), nf(o, s);
    default:
      throw new Error("geometry " + a + " is not supported");
  }
}
function sr(e, n, r) {
  var i = [], a = af(n, r), s = ff(e), o = [];
  return s.forEach(function(f, c) {
    if (c !== s.length - 1) {
      var u = mf(
        f,
        s[c + 1],
        a
      );
      if (i.push(u), c > 0) {
        var l = i[c - 1], h = bf(u, l);
        h !== !1 && (l[1] = h, u[0] = h), o.push(l[0]), c === s.length - 2 && (o.push(u[0]), o.push(u[1]));
      }
      s.length === 2 && (o.push(u[0]), o.push(u[1]));
    }
  }), kn(o, e.properties);
}
function mf(e, n, r) {
  var i = Math.sqrt(
    (e[0] - n[0]) * (e[0] - n[0]) + (e[1] - n[1]) * (e[1] - n[1])
  ), a = e[0] + r * (n[1] - e[1]) / i, s = n[0] + r * (n[1] - e[1]) / i, o = e[1] + r * (e[0] - n[0]) / i, f = n[1] + r * (e[0] - n[0]) / i;
  return [
    [a, o],
    [s, f]
  ];
}
class me {
  /**
   * The offset distance for the polyline extrusion.
   * @type {number}
   */
  static offset = 300;
  /**
   * Builds a mesh from GeoJSON features representing polylines.
   * @param {FeatureCollection} geojson The GeoJSON feature collection
   * @param {number[]} origin The origin point for translation
   * @returns {[ILayerGeometry[], ILayerComponent[]]} An array of geometries and components
   */
  static buildMesh(n, r) {
    const i = [], a = [], s = n.features;
    let o = [];
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      if (c.geometry.type === "LineString")
        o = me.lineStringToPolyline(c, r, me.offset);
      else if (c.geometry.type === "MultiLineString")
        o = me.multiLineStringToPolyline(c, r, me.offset);
      else {
        console.warn("Unsupported geometry type:", c.geometry.type);
        continue;
      }
      let u = 0, l = 0;
      for (const h of o)
        i.push({
          position: h.flatCoords,
          indices: h.flatIds
        }), u += h.flatCoords.length / 2, l += h.flatIds.length / 3;
      a.push({ nPoints: u, nTriangles: l });
    }
    return [i, a];
  }
  /**
   * Converts a LineString feature to a polyline mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @param {number} offset The offset distance for the polyline extrusion
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static lineStringToPolyline(n, r, i) {
    const a = n.geometry;
    a.coordinates = a.coordinates.map((f) => [f[0] - r[0], f[1] - r[1]]);
    const s = de(a, i).geometry.coordinates;
    de(a, -i).geometry.coordinates.forEach((f) => s.unshift(f)), s.push(s[0]);
    const o = he(s.flat());
    return [{ flatCoords: s.map((f) => [f[0], f[1]]).flat(), flatIds: o }];
  }
  /**
   * Converts a MultiLineString feature to a polyline mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiLineString
   * @param {number[]} origin The origin point for translation
   * @param {number} offset The offset distance for the polyline extrusion
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static multiLineStringToPolyline(n, r, i) {
    const { coordinates: a } = n.geometry, s = [];
    for (const o of a) {
      const f = kn(o).geometry;
      f.coordinates = f.coordinates.map((h) => [h[0] - r[0], h[1] - r[1]]);
      const c = de(f, i).geometry.coordinates;
      de(f, -i).geometry.coordinates.forEach((h) => c.unshift(h)), c.push(c[0]);
      const u = he(c.flat()), l = c.map((h) => [h[0], h[1]]).flat();
      s.push({
        flatCoords: l,
        flatIds: u
      });
    }
    return s;
  }
}
/*!
 * poly-extrude v0.22.2
  */
function or(e, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}
function yi(e, n, r) {
  return n && or(e.prototype, n), r && or(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _f(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, bn(e, n);
}
function bn(e, n) {
  return bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, bn(e, n);
}
function vf(e, n) {
  if (e) {
    if (typeof e == "string") return fr(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fr(e, n);
  }
}
function fr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, i = new Array(n); r < n; r++) i[r] = e[r];
  return i;
}
function xf(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = vf(e)) || n) {
    r && (e = r);
    var i = 0;
    return function() {
      return i >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[i++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wf(e, n, r) {
  var i = n && n.length, a = i ? n[0] * r : e.length, s = gi(e, 0, a, r, !0), o = [];
  if (!s || s.next === s.prev) return o;
  var f, c, u;
  if (i && (s = If(e, n, s, r)), e.length > 80 * r) {
    f = 1 / 0, c = 1 / 0;
    for (var l = -1 / 0, h = -1 / 0, d = r; d < a; d += r) {
      var p = e[d], y = e[d + 1];
      p < f && (f = p), y < c && (c = y), p > l && (l = p), y > h && (h = y);
    }
    u = Math.max(l - f, h - c), u = u !== 0 ? 32767 / u : 0;
  }
  return ct(s, o, r, f, c, u, 0), o;
}
function gi(e, n, r, i, a) {
  var s;
  if (a === Nf(e, n, r, i) > 0)
    for (var o = n; o < r; o += i)
      s = cr(o / i | 0, e[o], e[o + 1], s);
  else
    for (var f = r - i; f >= n; f -= i)
      s = cr(f / i | 0, e[f], e[f + 1], s);
  return s && Ue(s, s.next) && (lt(s), s = s.next), s;
}
function Me(e, n) {
  if (!e) return e;
  n || (n = e);
  var r = e, i;
  do
    if (i = !1, !r.steiner && (Ue(r, r.next) || A(r.prev, r, r.next) === 0)) {
      if (lt(r), r = n = r.prev, r === r.next) break;
      i = !0;
    } else
      r = r.next;
  while (i || r !== n);
  return n;
}
function ct(e, n, r, i, a, s, o) {
  if (e) {
    !o && s && Lf(e, i, a, s);
    for (var f = e; e.prev !== e.next; ) {
      var c = e.prev, u = e.next;
      if (s ? Pf(e, i, a, s) : Mf(e)) {
        n.push(c.i, e.i, u.i), lt(e), e = u.next, f = u.next;
        continue;
      }
      if (e = u, e === f) {
        o ? o === 1 ? (e = Ef(Me(e), n), ct(e, n, r, i, a, s, 2)) : o === 2 && Bf(e, n, r, i, a, s) : ct(Me(e), n, r, i, a, s, 1);
        break;
      }
    }
  }
}
function Mf(e) {
  var n = e.prev, r = e, i = e.next;
  if (A(n, r, i) >= 0) return !1;
  for (var a = n.x, s = r.x, o = i.x, f = n.y, c = r.y, u = i.y, l = Math.min(a, s, o), h = Math.min(f, c, u), d = Math.max(a, s, o), p = Math.max(f, c, u), y = i.next; y !== n; ) {
    if (y.x >= l && y.x <= d && y.y >= h && y.y <= p && Je(a, f, s, c, o, u, y.x, y.y) && A(y.prev, y, y.next) >= 0) return !1;
    y = y.next;
  }
  return !0;
}
function Pf(e, n, r, i) {
  var a = e.prev, s = e, o = e.next;
  if (A(a, s, o) >= 0) return !1;
  for (var f = a.x, c = s.x, u = o.x, l = a.y, h = s.y, d = o.y, p = Math.min(f, c, u), y = Math.min(l, h, d), g = Math.max(f, c, u), v = Math.max(l, h, d), w = mn(p, y, n, r, i), _ = mn(g, v, n, r, i), b = e.prevZ, m = e.nextZ; b && b.z >= w && m && m.z <= _; ) {
    if (b.x >= p && b.x <= g && b.y >= y && b.y <= v && b !== a && b !== o && Je(f, l, c, h, u, d, b.x, b.y) && A(b.prev, b, b.next) >= 0 || (b = b.prevZ, m.x >= p && m.x <= g && m.y >= y && m.y <= v && m !== a && m !== o && Je(f, l, c, h, u, d, m.x, m.y) && A(m.prev, m, m.next) >= 0)) return !1;
    m = m.nextZ;
  }
  for (; b && b.z >= w; ) {
    if (b.x >= p && b.x <= g && b.y >= y && b.y <= v && b !== a && b !== o && Je(f, l, c, h, u, d, b.x, b.y) && A(b.prev, b, b.next) >= 0) return !1;
    b = b.prevZ;
  }
  for (; m && m.z <= _; ) {
    if (m.x >= p && m.x <= g && m.y >= y && m.y <= v && m !== a && m !== o && Je(f, l, c, h, u, d, m.x, m.y) && A(m.prev, m, m.next) >= 0) return !1;
    m = m.nextZ;
  }
  return !0;
}
function Ef(e, n) {
  var r = e;
  do {
    var i = r.prev, a = r.next.next;
    !Ue(i, a) && mi(i, r, r.next, a) && ut(i, a) && ut(a, i) && (n.push(i.i, r.i, a.i), lt(r), lt(r.next), r = e = a), r = r.next;
  } while (r !== e);
  return Me(r);
}
function Bf(e, n, r, i, a, s) {
  var o = e;
  do {
    for (var f = o.next.next; f !== o.prev; ) {
      if (o.i !== f.i && Uf(o, f)) {
        var c = _i(o, f);
        o = Me(o, o.next), c = Me(c, c.next), ct(o, n, r, i, a, s, 0), ct(c, n, r, i, a, s, 0);
        return;
      }
      f = f.next;
    }
    o = o.next;
  } while (o !== e);
}
function If(e, n, r, i) {
  for (var a = [], s = 0, o = n.length; s < o; s++) {
    var f = n[s] * i, c = s < o - 1 ? n[s + 1] * i : e.length, u = gi(e, f, c, i, !1);
    u === u.next && (u.steiner = !0), a.push(zf(u));
  }
  a.sort(Sf);
  for (var l = 0; l < a.length; l++)
    r = Tf(a[l], r);
  return r;
}
function Sf(e, n) {
  var r = e.x - n.x;
  if (r === 0 && (r = e.y - n.y, r === 0)) {
    var i = (e.next.y - e.y) / (e.next.x - e.x), a = (n.next.y - n.y) / (n.next.x - n.x);
    r = i - a;
  }
  return r;
}
function Tf(e, n) {
  var r = kf(e, n);
  if (!r)
    return n;
  var i = _i(r, e);
  return Me(i, i.next), Me(r, r.next);
}
function kf(e, n) {
  var r = n, i = e.x, a = e.y, s = -1 / 0, o;
  if (Ue(e, r)) return r;
  do {
    if (Ue(e, r.next)) return r.next;
    if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
      var f = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
      if (f <= i && f > s && (s = f, o = r.x < r.next.x ? r : r.next, f === i))
        return o;
    }
    r = r.next;
  } while (r !== n);
  if (!o) return null;
  var c = o, u = o.x, l = o.y, h = 1 / 0;
  r = o;
  do {
    if (i >= r.x && r.x >= u && i !== r.x && bi(a < l ? i : s, a, u, l, a < l ? s : i, a, r.x, r.y)) {
      var d = Math.abs(a - r.y) / (i - r.x);
      ut(r, e) && (d < h || d === h && (r.x > o.x || r.x === o.x && Af(o, r))) && (o = r, h = d);
    }
    r = r.next;
  } while (r !== c);
  return o;
}
function Af(e, n) {
  return A(e.prev, e, n.prev) < 0 && A(n.next, e, e.next) < 0;
}
function Lf(e, n, r, i) {
  var a = e;
  do
    a.z === 0 && (a.z = mn(a.x, a.y, n, r, i)), a.prevZ = a.prev, a.nextZ = a.next, a = a.next;
  while (a !== e);
  a.prevZ.nextZ = null, a.prevZ = null, Cf(a);
}
function Cf(e) {
  var n, r = 1;
  do {
    var i = e, a = void 0;
    e = null;
    var s = null;
    for (n = 0; i; ) {
      n++;
      for (var o = i, f = 0, c = 0; c < r && (f++, o = o.nextZ, !!o); c++)
        ;
      for (var u = r; f > 0 || u > 0 && o; )
        f !== 0 && (u === 0 || !o || i.z <= o.z) ? (a = i, i = i.nextZ, f--) : (a = o, o = o.nextZ, u--), s ? s.nextZ = a : e = a, a.prevZ = s, s = a;
      i = o;
    }
    s.nextZ = null, r *= 2;
  } while (n > 1);
  return e;
}
function mn(e, n, r, i, a) {
  return e = (e - r) * a | 0, n = (n - i) * a | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e | n << 1;
}
function zf(e) {
  var n = e, r = e;
  do
    (n.x < r.x || n.x === r.x && n.y < r.y) && (r = n), n = n.next;
  while (n !== e);
  return r;
}
function bi(e, n, r, i, a, s, o, f) {
  return (a - o) * (n - f) >= (e - o) * (s - f) && (e - o) * (i - f) >= (r - o) * (n - f) && (r - o) * (s - f) >= (a - o) * (i - f);
}
function Je(e, n, r, i, a, s, o, f) {
  return !(e === o && n === f) && bi(e, n, r, i, a, s, o, f);
}
function Uf(e, n) {
  return e.next.i !== n.i && e.prev.i !== n.i && !Gf(e, n) && // dones't intersect other edges
  (ut(e, n) && ut(n, e) && Rf(e, n) && // locally visible
  (A(e.prev, e, n.prev) || A(e, n.prev, n)) || // does not create opposite-facing sectors
  Ue(e, n) && A(e.prev, e, e.next) > 0 && A(n.prev, n, n.next) > 0);
}
function A(e, n, r) {
  return (n.y - e.y) * (r.x - n.x) - (n.x - e.x) * (r.y - n.y);
}
function Ue(e, n) {
  return e.x === n.x && e.y === n.y;
}
function mi(e, n, r, i) {
  var a = It(A(e, n, r)), s = It(A(e, n, i)), o = It(A(r, i, e)), f = It(A(r, i, n));
  return !!(a !== s && o !== f || a === 0 && Bt(e, r, n) || s === 0 && Bt(e, i, n) || o === 0 && Bt(r, e, i) || f === 0 && Bt(r, n, i));
}
function Bt(e, n, r) {
  return n.x <= Math.max(e.x, r.x) && n.x >= Math.min(e.x, r.x) && n.y <= Math.max(e.y, r.y) && n.y >= Math.min(e.y, r.y);
}
function It(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Gf(e, n) {
  var r = e;
  do {
    if (r.i !== e.i && r.next.i !== e.i && r.i !== n.i && r.next.i !== n.i && mi(r, r.next, e, n)) return !0;
    r = r.next;
  } while (r !== e);
  return !1;
}
function ut(e, n) {
  return A(e.prev, e, e.next) < 0 ? A(e, n, e.next) >= 0 && A(e, e.prev, n) >= 0 : A(e, n, e.prev) < 0 || A(e, e.next, n) < 0;
}
function Rf(e, n) {
  var r = e, i = !1, a = (e.x + n.x) / 2, s = (e.y + n.y) / 2;
  do
    r.y > s != r.next.y > s && r.next.y !== r.y && a < (r.next.x - r.x) * (s - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next;
  while (r !== e);
  return i;
}
function _i(e, n) {
  var r = _n(e.i, e.x, e.y), i = _n(n.i, n.x, n.y), a = e.next, s = n.prev;
  return e.next = n, n.prev = e, r.next = a, a.prev = r, i.next = r, r.prev = i, s.next = i, i.prev = s, i;
}
function cr(e, n, r, i) {
  var a = _n(e, n, r);
  return i ? (a.next = i.next, a.prev = i, i.next.prev = a, i.next = a) : (a.prev = a, a.next = a), a;
}
function lt(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function _n(e, n, r) {
  return {
    i: e,
    // vertex index in coordinates array
    x: n,
    y: r,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: !1
    // indicates whether this is a steiner point
  };
}
function Nf(e, n, r, i) {
  for (var a = 0, s = n, o = r - i; s < r; s += i)
    a += (e[o] - e[s]) * (e[s + 1] + e[o + 1]), o = s;
  return a;
}
var Of = /* @__PURE__ */ (function() {
  function e(r, i, a, s) {
    r === void 0 && (r = 0), i === void 0 && (i = 0), a === void 0 && (a = 0), s === void 0 && (s = 1), this.isQuaternion = !0, this._x = r, this._y = i, this._z = a, this._w = s;
  }
  e.slerpFlat = function(r, i, a, s, o, f, c) {
    var u = a[s + 0], l = a[s + 1], h = a[s + 2], d = a[s + 3], p = o[f + 0], y = o[f + 1], g = o[f + 2], v = o[f + 3];
    if (c === 0) {
      r[i + 0] = u, r[i + 1] = l, r[i + 2] = h, r[i + 3] = d;
      return;
    }
    if (c === 1) {
      r[i + 0] = p, r[i + 1] = y, r[i + 2] = g, r[i + 3] = v;
      return;
    }
    if (d !== v || u !== p || l !== y || h !== g) {
      var w = 1 - c, _ = u * p + l * y + h * g + d * v, b = _ >= 0 ? 1 : -1, m = 1 - _ * _;
      if (m > Number.EPSILON) {
        var M = Math.sqrt(m), P = Math.atan2(M, _ * b);
        w = Math.sin(w * P) / M, c = Math.sin(c * P) / M;
      }
      var T = c * b;
      if (u = u * w + p * T, l = l * w + y * T, h = h * w + g * T, d = d * w + v * T, w === 1 - c) {
        var L = 1 / Math.sqrt(u * u + l * l + h * h + d * d);
        u *= L, l *= L, h *= L, d *= L;
      }
    }
    r[i] = u, r[i + 1] = l, r[i + 2] = h, r[i + 3] = d;
  }, e.multiplyQuaternionsFlat = function(r, i, a, s, o, f) {
    var c = a[s], u = a[s + 1], l = a[s + 2], h = a[s + 3], d = o[f], p = o[f + 1], y = o[f + 2], g = o[f + 3];
    return r[i] = c * g + h * d + u * y - l * p, r[i + 1] = u * g + h * p + l * d - c * y, r[i + 2] = l * g + h * y + c * p - u * d, r[i + 3] = h * g - c * d - u * p - l * y, r;
  };
  var n = e.prototype;
  return n.set = function(r, i, a, s) {
    return this._x = r, this._y = i, this._z = a, this._w = s, this._onChangeCallback(), this;
  }, n.clone = function() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }, n.copy = function(r) {
    return this._x = r.x, this._y = r.y, this._z = r.z, this._w = r.w, this._onChangeCallback(), this;
  }, n.setFromEuler = function(r, i) {
    i === void 0 && (i = !0);
    var a = r._x, s = r._y, o = r._z, f = r._order, c = Math.cos, u = Math.sin, l = c(a / 2), h = c(s / 2), d = c(o / 2), p = u(a / 2), y = u(s / 2), g = u(o / 2);
    switch (f) {
      case "XYZ":
        this._x = p * h * d + l * y * g, this._y = l * y * d - p * h * g, this._z = l * h * g + p * y * d, this._w = l * h * d - p * y * g;
        break;
      case "YXZ":
        this._x = p * h * d + l * y * g, this._y = l * y * d - p * h * g, this._z = l * h * g - p * y * d, this._w = l * h * d + p * y * g;
        break;
      case "ZXY":
        this._x = p * h * d - l * y * g, this._y = l * y * d + p * h * g, this._z = l * h * g + p * y * d, this._w = l * h * d - p * y * g;
        break;
      case "ZYX":
        this._x = p * h * d - l * y * g, this._y = l * y * d + p * h * g, this._z = l * h * g - p * y * d, this._w = l * h * d + p * y * g;
        break;
      case "YZX":
        this._x = p * h * d + l * y * g, this._y = l * y * d + p * h * g, this._z = l * h * g - p * y * d, this._w = l * h * d - p * y * g;
        break;
      case "XZY":
        this._x = p * h * d - l * y * g, this._y = l * y * d - p * h * g, this._z = l * h * g + p * y * d, this._w = l * h * d + p * y * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + f);
    }
    return i === !0 && this._onChangeCallback(), this;
  }, n.setFromAxisAngle = function(r, i) {
    var a = i / 2, s = Math.sin(a);
    return this._x = r.x * s, this._y = r.y * s, this._z = r.z * s, this._w = Math.cos(a), this._onChangeCallback(), this;
  }, n.setFromRotationMatrix = function(r) {
    var i = r.elements, a = i[0], s = i[4], o = i[8], f = i[1], c = i[5], u = i[9], l = i[2], h = i[6], d = i[10], p = a + c + d;
    if (p > 0) {
      var y = 0.5 / Math.sqrt(p + 1);
      this._w = 0.25 / y, this._x = (h - u) * y, this._y = (o - l) * y, this._z = (f - s) * y;
    } else if (a > c && a > d) {
      var g = 2 * Math.sqrt(1 + a - c - d);
      this._w = (h - u) / g, this._x = 0.25 * g, this._y = (s + f) / g, this._z = (o + l) / g;
    } else if (c > d) {
      var v = 2 * Math.sqrt(1 + c - a - d);
      this._w = (o - l) / v, this._x = (s + f) / v, this._y = 0.25 * v, this._z = (u + h) / v;
    } else {
      var w = 2 * Math.sqrt(1 + d - a - c);
      this._w = (f - s) / w, this._x = (o + l) / w, this._y = (u + h) / w, this._z = 0.25 * w;
    }
    return this._onChangeCallback(), this;
  }, n.setFromUnitVectors = function(r, i) {
    var a = r.dot(i) + 1;
    return a < Number.EPSILON ? (a = 0, Math.abs(r.x) > Math.abs(r.z) ? (this._x = -r.y, this._y = r.x, this._z = 0, this._w = a) : (this._x = 0, this._y = -r.z, this._z = r.y, this._w = a)) : (this._x = r.y * i.z - r.z * i.y, this._y = r.z * i.x - r.x * i.z, this._z = r.x * i.y - r.y * i.x, this._w = a), this.normalize();
  }, n.rotateTowards = function(r, i) {
    var a = this.angleTo(r);
    if (a === 0) return this;
    var s = Math.min(1, i / a);
    return this.slerp(r, s), this;
  }, n.identity = function() {
    return this.set(0, 0, 0, 1);
  }, n.invert = function() {
    return this.conjugate();
  }, n.conjugate = function() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }, n.dot = function(r) {
    return this._x * r._x + this._y * r._y + this._z * r._z + this._w * r._w;
  }, n.lengthSq = function() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }, n.length = function() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }, n.normalize = function() {
    var r = this.length();
    return r === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (r = 1 / r, this._x = this._x * r, this._y = this._y * r, this._z = this._z * r, this._w = this._w * r), this._onChangeCallback(), this;
  }, n.multiply = function(r) {
    return this.multiplyQuaternions(this, r);
  }, n.premultiply = function(r) {
    return this.multiplyQuaternions(r, this);
  }, n.multiplyQuaternions = function(r, i) {
    var a = r._x, s = r._y, o = r._z, f = r._w, c = i._x, u = i._y, l = i._z, h = i._w;
    return this._x = a * h + f * c + s * l - o * u, this._y = s * h + f * u + o * c - a * l, this._z = o * h + f * l + a * u - s * c, this._w = f * h - a * c - s * u - o * l, this._onChangeCallback(), this;
  }, n.slerp = function(r, i) {
    if (i === 0) return this;
    if (i === 1) return this.copy(r);
    var a = this._x, s = this._y, o = this._z, f = this._w, c = f * r._w + a * r._x + s * r._y + o * r._z;
    if (c < 0 ? (this._w = -r._w, this._x = -r._x, this._y = -r._y, this._z = -r._z, c = -c) : this.copy(r), c >= 1)
      return this._w = f, this._x = a, this._y = s, this._z = o, this;
    var u = 1 - c * c;
    if (u <= Number.EPSILON) {
      var l = 1 - i;
      return this._w = l * f + i * this._w, this._x = l * a + i * this._x, this._y = l * s + i * this._y, this._z = l * o + i * this._z, this.normalize(), this;
    }
    var h = Math.sqrt(u), d = Math.atan2(h, c), p = Math.sin((1 - i) * d) / h, y = Math.sin(i * d) / h;
    return this._w = f * p + this._w * y, this._x = a * p + this._x * y, this._y = s * p + this._y * y, this._z = o * p + this._z * y, this._onChangeCallback(), this;
  }, n.slerpQuaternions = function(r, i, a) {
    return this.copy(r).slerp(i, a);
  }, n.random = function() {
    var r = 2 * Math.PI * Math.random(), i = 2 * Math.PI * Math.random(), a = Math.random(), s = Math.sqrt(1 - a), o = Math.sqrt(a);
    return this.set(s * Math.sin(r), s * Math.cos(r), o * Math.sin(i), o * Math.cos(i));
  }, n.equals = function(r) {
    return r._x === this._x && r._y === this._y && r._z === this._z && r._w === this._w;
  }, n.fromArray = function(r, i) {
    return i === void 0 && (i = 0), this._x = r[i], this._y = r[i + 1], this._z = r[i + 2], this._w = r[i + 3], this._onChangeCallback(), this;
  }, n.toArray = function(r, i) {
    return r === void 0 && (r = []), i === void 0 && (i = 0), r[i] = this._x, r[i + 1] = this._y, r[i + 2] = this._z, r[i + 3] = this._w, r;
  }, n.fromBufferAttribute = function(r, i) {
    return this._x = r.getX(i), this._y = r.getY(i), this._z = r.getZ(i), this._w = r.getW(i), this._onChangeCallback(), this;
  }, n.toJSON = function() {
    return this.toArray();
  }, n._onChange = function(r) {
    return this._onChangeCallback = r, this;
  }, n._onChangeCallback = function() {
  }, yi(e, [{
    key: "x",
    get: function() {
      return this._x;
    },
    set: function(r) {
      this._x = r, this._onChangeCallback();
    }
  }, {
    key: "y",
    get: function() {
      return this._y;
    },
    set: function(r) {
      this._y = r, this._onChangeCallback();
    }
  }, {
    key: "z",
    get: function() {
      return this._z;
    },
    set: function(r) {
      this._z = r, this._onChangeCallback();
    }
  }, {
    key: "w",
    get: function() {
      return this._w;
    },
    set: function(r) {
      this._w = r, this._onChangeCallback();
    }
  }]), e;
})(), Df = new Of(), z = /* @__PURE__ */ (function() {
  function e(r, i, a) {
    r === void 0 && (r = 0), i === void 0 && (i = 0), a === void 0 && (a = 0), this.x = r, this.y = i, this.z = a;
  }
  var n = e.prototype;
  return n.set = function(r, i, a) {
    return a === void 0 && (a = this.z), this.x = r, this.y = i, this.z = a, this;
  }, n.clone = function() {
    return new this.constructor(this.x, this.y, this.z);
  }, n.copy = function(r) {
    return this.x = r.x, this.y = r.y, this.z = r.z, this;
  }, n.add = function(r) {
    return this.x += r.x, this.y += r.y, this.z += r.z, this;
  }, n.addScalar = function(r) {
    return this.x += r, this.y += r, this.z += r, this;
  }, n.addVectors = function(r, i) {
    return this.x = r.x + i.x, this.y = r.y + i.y, this.z = r.z + i.z, this;
  }, n.addScaledVector = function(r, i) {
    return this.x += r.x * i, this.y += r.y * i, this.z += r.z * i, this;
  }, n.sub = function(r) {
    return this.x -= r.x, this.y -= r.y, this.z -= r.z, this;
  }, n.subScalar = function(r) {
    return this.x -= r, this.y -= r, this.z -= r, this;
  }, n.subVectors = function(r, i) {
    return this.x = r.x - i.x, this.y = r.y - i.y, this.z = r.z - i.z, this;
  }, n.multiply = function(r) {
    return this.x *= r.x, this.y *= r.y, this.z *= r.z, this;
  }, n.multiplyScalar = function(r) {
    return this.x *= r, this.y *= r, this.z *= r, this;
  }, n.multiplyVectors = function(r, i) {
    return this.x = r.x * i.x, this.y = r.y * i.y, this.z = r.z * i.z, this;
  }, n.applyAxisAngle = function(r, i) {
    return this.applyQuaternion(Df.setFromAxisAngle(r, i));
  }, n.applyMatrix4 = function(r) {
    var i = this.x, a = this.y, s = this.z, o = r.elements, f = 1 / (o[3] * i + o[7] * a + o[11] * s + o[15]);
    return this.x = (o[0] * i + o[4] * a + o[8] * s + o[12]) * f, this.y = (o[1] * i + o[5] * a + o[9] * s + o[13]) * f, this.z = (o[2] * i + o[6] * a + o[10] * s + o[14]) * f, this;
  }, n.applyQuaternion = function(r) {
    var i = this.x, a = this.y, s = this.z, o = r.x, f = r.y, c = r.z, u = r.w, l = u * i + f * s - c * a, h = u * a + c * i - o * s, d = u * s + o * a - f * i, p = -o * i - f * a - c * s;
    return this.x = l * u + p * -o + h * -c - d * -f, this.y = h * u + p * -f + d * -o - l * -c, this.z = d * u + p * -c + l * -f - h * -o, this;
  }, n.divide = function(r) {
    return this.x /= r.x, this.y /= r.y, this.z /= r.z, this;
  }, n.divideScalar = function(r) {
    return this.multiplyScalar(1 / r);
  }, n.min = function(r) {
    return this.x = Math.min(this.x, r.x), this.y = Math.min(this.y, r.y), this.z = Math.min(this.z, r.z), this;
  }, n.max = function(r) {
    return this.x = Math.max(this.x, r.x), this.y = Math.max(this.y, r.y), this.z = Math.max(this.z, r.z), this;
  }, n.clamp = function(r, i) {
    return this.x = Math.max(r.x, Math.min(i.x, this.x)), this.y = Math.max(r.y, Math.min(i.y, this.y)), this.z = Math.max(r.z, Math.min(i.z, this.z)), this;
  }, n.clampScalar = function(r, i) {
    return this.x = Math.max(r, Math.min(i, this.x)), this.y = Math.max(r, Math.min(i, this.y)), this.z = Math.max(r, Math.min(i, this.z)), this;
  }, n.clampLength = function(r, i) {
    var a = this.length();
    return this.divideScalar(a || 1).multiplyScalar(Math.max(r, Math.min(i, a)));
  }, n.dot = function(r) {
    return this.x * r.x + this.y * r.y + this.z * r.z;
  }, n.lengthSq = function() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }, n.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }, n.normalize = function() {
    return this.divideScalar(this.length() || 1);
  }, n.setLength = function(r) {
    return this.normalize().multiplyScalar(r);
  }, n.lerp = function(r, i) {
    return this.x += (r.x - this.x) * i, this.y += (r.y - this.y) * i, this.z += (r.z - this.z) * i, this;
  }, n.lerpVectors = function(r, i, a) {
    return this.x = r.x + (i.x - r.x) * a, this.y = r.y + (i.y - r.y) * a, this.z = r.z + (i.z - r.z) * a, this;
  }, n.cross = function(r) {
    return this.crossVectors(this, r);
  }, n.crossVectors = function(r, i) {
    var a = r.x, s = r.y, o = r.z, f = i.x, c = i.y, u = i.z;
    return this.x = s * u - o * c, this.y = o * f - a * u, this.z = a * c - s * f, this;
  }, n.distanceTo = function(r) {
    return Math.sqrt(this.distanceToSquared(r));
  }, n.equals = function(r) {
    return r.x === this.x && r.y === this.y && r.z === this.z;
  }, n.fromArray = function(r, i) {
    return i === void 0 && (i = 0), this.x = r[i], this.y = r[i + 1], this.z = r[i + 2], this;
  }, n.random = function() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }, e;
})();
function ur(e) {
  let n = 0, r = 1, i, a;
  const s = e.length;
  for (; r < s; )
    i = a || e[0], a = e[r], n += (a[0] - i[0]) * (a[1] + i[1]), r++;
  return n > 0;
}
function Vf(e) {
  vi(e) || e.push(e[0]);
}
function vi(e) {
  const n = e.length, [r, i] = e[0], [a, s] = e[n - 1];
  return r === a && i === s;
}
function Ff(e) {
  let n = 0, r = 0;
  const i = e.length;
  for (; r < i; )
    n += e[r].length, r++;
  return n;
}
function Yf(e, n) {
  for (let r = 0, i = e.length; r < i; r++) {
    const a = e[r];
    Vf(a), r === 0 ? ur(a) || (e[r] = a.reverse()) : ur(a) && (e[r] = a.reverse()), vi(a) && a.splice(a.length - 1, 1);
  }
}
function lr(e, n, r) {
  return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], e;
}
function qf(e, n) {
  const r = n[0], i = n[1], a = n[2], s = Math.sqrt(r * r + i * i + a * a) || 1;
  return e[0] = r / s, e[1] = i / s, e[2] = a / s, e;
}
function jf(e, n, r) {
  const i = n[0], a = n[1], s = n[2], o = r[0], f = r[1], c = r[2];
  return e[0] = a * c - s * f, e[1] = s * o - i * c, e[2] = i * f - a * o, e;
}
function $f(e, n) {
  function r(y, g, v, w) {
    y[0] = g, y[1] = v, y[2] = w;
  }
  const i = [], a = [], s = [], o = [], f = [], c = [], u = e.length, l = new Float32Array(n.length);
  let h = 0;
  for (; h < u; ) {
    const y = e[h], g = e[h + 1], v = e[h + 2], w = y * 3, _ = g * 3, b = v * 3;
    r(i, n[w], n[w + 1], n[w + 2]), r(a, n[_], n[_ + 1], n[_ + 2]), r(s, n[b], n[b + 1], n[b + 2]), lr(f, s, a), lr(o, i, a), jf(c, f, o);
    for (let m = 0; m < 3; m++)
      l[w + m] += c[m], l[_ + m] += c[m], l[b + m] += c[m];
    h += 3;
  }
  let d = 0;
  const p = l.length;
  for (; d < p; )
    r(c, l[d], l[d + 1], l[d + 2]), qf(c, c), l[d] = c[0] || 0, l[d + 1] = c[1] || 0, l[d + 2] = c[2] || 0, d += 3;
  return l;
}
function Hf(e) {
  if (e.length === 1)
    return {
      position: e[0].position,
      normal: e[0].normal,
      uv: e[0].uv,
      indices: e[0].indices,
      results: e
    };
  let n = 0, r = 0;
  for (let c = 0, u = e.length; c < u; c++) {
    const { position: l, indices: h } = e[c];
    n += l.length, r += h.length;
  }
  const i = {
    position: new Float32Array(n),
    normal: new Float32Array(n),
    uv: new Float32Array(n / 3 * 2),
    indices: new Uint32Array(r),
    results: e
  };
  let a = 0, s = 0, o = 0, f = 0;
  for (let c = 0, u = e.length; c < u; c++) {
    const { position: l, indices: h, normal: d, uv: p } = e[c];
    i.position.set(l, a), i.normal.set(d, a), i.uv.set(p, f);
    let y = 0;
    const g = h.length;
    for (; y < g; ) {
      const v = h[y] + s;
      i.indices[o] = v, o++, y++;
    }
    f += p.length, a += l.length, s += l.length / 3;
  }
  return i;
}
function Xf(e, n, r, i, a, s) {
  const o = r * 3, f = i * 3, c = a * 3, u = s * 3, l = n[o], h = n[o + 1], d = n[o + 2], p = n[f], y = n[f + 1], g = n[f + 2], v = n[c], w = n[c + 1], _ = n[c + 2], b = n[u], m = n[u + 1], M = n[u + 2];
  let P = e.length - 1;
  Math.abs(h - y) < Math.abs(l - p) ? (e[++P] = l, e[++P] = 1 - d, e[++P] = p, e[++P] = 1 - g, e[++P] = v, e[++P] = 1 - _, e[++P] = b, e[++P] = 1 - M) : (e[++P] = h, e[++P] = 1 - d, e[++P] = y, e[++P] = 1 - g, e[++P] = w, e[++P] = 1 - _, e[++P] = m, e[++P] = 1 - M);
}
function St(e, n) {
  const r = Object.assign({}, { depth: 2, top: !0 }, n), i = e.map((s) => {
    Yf(s);
    const o = Wf(s, r);
    o.polygon = s;
    const f = wf(o.flatVertices, o.holes, 2);
    return Zf(o, f, r), Kf(o, r), o.position = new Float32Array(o.points), o.indices = new Uint32Array(o.indices), o.uv = new Float32Array(o.uv), o.normal = $f(o.indices, o.position), o;
  }), a = Hf(i);
  return a.polygons = e, a;
}
function Zf(e, n, r) {
  const i = [], { count: a } = e, s = r.top;
  for (let o = 0, f = n.length; o < f; o += 3) {
    const c = n[o], u = n[o + 1], l = n[o + 2];
    s && (i[o] = c, i[o + 1] = u, i[o + 2] = l);
    let h = f + o;
    const d = a + c, p = a + u, y = a + l;
    s || (h = o), i[h] = d, i[h + 1] = p, i[h + 2] = y;
  }
  e.indices = i;
}
function Kf(e, n) {
  const { points: r, indices: i, polygon: a, uv: s } = e, o = n.depth;
  let f = r.length - 1, c = i.length - 1;
  for (let u = 0, l = a.length; u < l; u++) {
    const h = a[u];
    let d = 0;
    const p = h.length;
    for (; d < p; ) {
      const y = h[d];
      let g = h[d + 1];
      d === p - 1 && (g = h[0]);
      const v = r.length / 3, w = y[0], _ = y[1], b = y[2] || 0, m = g[0], M = g[1], P = g[2] || 0;
      r[++f] = w, r[++f] = _, r[++f] = b + o, r[++f] = m, r[++f] = M, r[++f] = P + o, r[++f] = w, r[++f] = _, r[++f] = b, r[++f] = m, r[++f] = M, r[++f] = P;
      const T = v + 2, L = v + 3, Z = v, O = v + 1;
      i[++c] = T, i[++c] = Z, i[++c] = L, i[++c] = Z, i[++c] = O, i[++c] = L, Xf(s, r, T, L, Z, O), d++;
    }
  }
}
function Wf(e, n) {
  const r = Ff(e), i = e.length, a = [], s = new Float32Array(r * 2), o = [], f = [], c = r * 3, u = r * 2, l = n.depth;
  let h = 0, d = 0, p = 0;
  for (let y = 0; y < i; y++) {
    const g = e[y];
    y > 0 && a.push(h / 2);
    let v = 0;
    const w = g.length;
    for (; v < w; ) {
      const _ = g[v], b = _[0], m = _[1], M = _[2] || 0;
      s[h++] = b, s[h++] = m, o[d] = b, o[d + 1] = m, o[d + 2] = l + M, o[c + d] = b, o[c + d + 1] = m, o[c + d + 2] = M, f[p] = b, f[p + 1] = m, f[u + p] = b, f[u + p + 1] = m, d += 3, p += 2, v++;
    }
  }
  return {
    flatVertices: s,
    holes: a,
    points: o,
    count: r,
    uv: f
  };
}
var Qf = /* @__PURE__ */ (function() {
  function e(r, i, a, s, o, f, c, u, l, h, d, p, y, g, v, w) {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r !== void 0 && this.set(r, i, a, s, o, f, c, u, l, h, d, p, y, g, v, w);
  }
  var n = e.prototype;
  return n.set = function(r, i, a, s, o, f, c, u, l, h, d, p, y, g, v, w) {
    var _ = this.elements;
    return _[0] = r, _[4] = i, _[8] = a, _[12] = s, _[1] = o, _[5] = f, _[9] = c, _[13] = u, _[2] = l, _[6] = h, _[10] = d, _[14] = p, _[3] = y, _[7] = g, _[11] = v, _[15] = w, this;
  }, n.multiply = function(r) {
    return this.multiplyMatrices(this, r);
  }, n.makeRotationAxis = function(r, i) {
    var a = Math.cos(i), s = Math.sin(i), o = 1 - a, f = r.x, c = r.y, u = r.z, l = o * f, h = o * c;
    return this.set(l * f + a, l * c - s * u, l * u + s * c, 0, l * c + s * u, h * c + a, h * u - s * f, 0, l * u - s * c, h * u + s * f, o * u * u + a, 0, 0, 0, 0, 1), this;
  }, n.equals = function(r) {
    for (var i = this.elements, a = r.elements, s = 0; s < 16; s++)
      if (i[s] !== a[s]) return !1;
    return !0;
  }, e;
})(), Jf = /* @__PURE__ */ (function() {
  function e() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  var n = e.prototype;
  return n.getPoint = function() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }, n.getPointAt = function(r, i) {
    var a = this.getUtoTmapping(r);
    return this.getPoint(a, i);
  }, n.getPoints = function(r) {
    r === void 0 && (r = 5);
    for (var i = [], a = 0; a <= r; a++)
      i.push(this.getPoint(a / r));
    return i;
  }, n.getLength = function() {
    var r = this.getLengths();
    return r[r.length - 1];
  }, n.getLengths = function(r) {
    if (r === void 0 && (r = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === r + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    var i = [], a, s = this.getPoint(0), o = 0;
    i.push(0);
    for (var f = 1; f <= r; f++)
      a = this.getPoint(f / r), o += a.distanceTo(s), i.push(o), s = a;
    return this.cacheArcLengths = i, i;
  }, n.getUtoTmapping = function(r, i) {
    var a = this.getLengths(), s = 0, o = a.length, f;
    i ? f = i : f = r * a[o - 1];
    for (var c = 0, u = o - 1, l; c <= u; )
      if (s = Math.floor(c + (u - c) / 2), l = a[s] - f, l < 0)
        c = s + 1;
      else if (l > 0)
        u = s - 1;
      else {
        u = s;
        break;
      }
    if (s = u, a[s] === f)
      return s / (o - 1);
    var h = a[s], d = a[s + 1], p = d - h, y = (f - h) / p, g = (s + y) / (o - 1);
    return g;
  }, e;
})();
function ec(e, n) {
  var r = 1 - e;
  return r * r * n;
}
function tc(e, n) {
  return 2 * (1 - e) * e * n;
}
function nc(e, n) {
  return e * e * n;
}
function fn(e, n, r, i) {
  return ec(e, n) + tc(e, r) + nc(e, i);
}
var rc = /* @__PURE__ */ (function(e) {
  _f(n, e);
  function n(i, a, s) {
    var o;
    return i === void 0 && (i = new z()), a === void 0 && (a = new z()), s === void 0 && (s = new z()), o = e.call(this) || this, o.isQuadraticBezierCurve3 = !0, o.type = "QuadraticBezierCurve3", o.v0 = i, o.v1 = a, o.v2 = s, o;
  }
  var r = n.prototype;
  return r.getPoint = function(i, a) {
    a === void 0 && (a = new z());
    var s = a, o = this.v0, f = this.v1, c = this.v2;
    return s.set(fn(i, o.x, f.x, c.x), fn(i, o.y, f.y, c.y), fn(i, o.z, f.z, c.z)), s;
  }, n;
})(Jf);
new z();
new z();
new z();
new Qf();
new rc();
new z(0, 0, 1);
new z();
new z();
new z();
new z();
new z();
new z();
new z(0, 0, 1);
new z();
new z(0, 0, 1);
new z();
new z(0, 0, 0);
var An = Object.defineProperty, ic = Object.getOwnPropertyDescriptor, ac = Object.getOwnPropertyNames, sc = Object.prototype.hasOwnProperty, oc = function(e) {
  return An(e, "__esModule", {
    value: !0
  });
}, fc = function(e, n) {
  for (var r in n)
    An(e, r, {
      get: n[r],
      enumerable: !0
    });
}, cc = function(e, n, r, i) {
  if (n && typeof n == "object" || typeof n == "function")
    for (var a = function() {
      var f = o.value;
      !sc.call(e, f) && r && An(e, f, {
        get: function() {
          return n[f];
        },
        enumerable: !(i = ic(n, f)) || i.enumerable
      });
    }, s = xf(ac(n)), o; !(o = s()).done; )
      a();
  return e;
}, uc = /* @__PURE__ */ (function(e) {
  return function(n, r) {
    return e && e.get(n) || (r = cc(oc({}), n, 1), e && e.set(n, r), r);
  };
})(typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : 0), xi = {};
fc(xi, {
  Bezier: function() {
    return Mi;
  }
});
var je = Math.abs, se = Math.cos, Te = Math.sin, lc = Math.acos, $e = Math.atan2, ue = Math.sqrt, X = Math.pow;
function He(e) {
  return e < 0 ? -X(-e, 1 / 3) : X(e, 1 / 3);
}
var wi = Math.PI, Tt = 2 * wi, le = wi / 2, hc = 1e-6, cn = Number.MAX_SAFE_INTEGER || 9007199254740991, un = Number.MIN_SAFE_INTEGER || -9007199254740991, dc = {
  x: 0,
  y: 0,
  z: 0
}, x = {
  Tvalues: [-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213],
  Cvalues: [0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872],
  arcfn: function(e, n) {
    var r = n(e), i = r.x * r.x + r.y * r.y;
    return typeof r.z < "u" && (i += r.z * r.z), ue(i);
  },
  compute: function(e, n, r) {
    if (e === 0)
      return n[0].t = 0, n[0];
    var i = n.length - 1;
    if (e === 1)
      return n[i].t = 1, n[i];
    var a = 1 - e, s = n;
    if (i === 0)
      return n[0].t = e, n[0];
    if (i === 1) {
      var o = {
        x: a * s[0].x + e * s[1].x,
        y: a * s[0].y + e * s[1].y,
        t: e
      };
      return r && (o.z = a * s[0].z + e * s[1].z), o;
    }
    if (i < 4) {
      var f = a * a, c = e * e, u, l, h, d = 0;
      i === 2 ? (s = [s[0], s[1], s[2], dc], u = f, l = a * e * 2, h = c) : i === 3 && (u = f * a, l = f * e * 3, h = a * c * 3, d = e * c);
      var p = {
        x: u * s[0].x + l * s[1].x + h * s[2].x + d * s[3].x,
        y: u * s[0].y + l * s[1].y + h * s[2].y + d * s[3].y,
        t: e
      };
      return r && (p.z = u * s[0].z + l * s[1].z + h * s[2].z + d * s[3].z), p;
    }
    for (var y = JSON.parse(JSON.stringify(n)); y.length > 1; ) {
      for (var g = 0; g < y.length - 1; g++)
        y[g] = {
          x: y[g].x + (y[g + 1].x - y[g].x) * e,
          y: y[g].y + (y[g + 1].y - y[g].y) * e
        }, typeof y[g].z < "u" && (y[g].z = y[g].z + (y[g + 1].z - y[g].z) * e);
      y.splice(y.length - 1, 1);
    }
    return y[0].t = e, y[0];
  },
  computeWithRatios: function(e, n, r, i) {
    var a = 1 - e, s = r, o = n, f = s[0], c = s[1], u = s[2], l = s[3], h;
    if (f *= a, c *= e, o.length === 2)
      return h = f + c, {
        x: (f * o[0].x + c * o[1].x) / h,
        y: (f * o[0].y + c * o[1].y) / h,
        z: i ? (f * o[0].z + c * o[1].z) / h : !1,
        t: e
      };
    if (f *= a, c *= 2 * a, u *= e * e, o.length === 3)
      return h = f + c + u, {
        x: (f * o[0].x + c * o[1].x + u * o[2].x) / h,
        y: (f * o[0].y + c * o[1].y + u * o[2].y) / h,
        z: i ? (f * o[0].z + c * o[1].z + u * o[2].z) / h : !1,
        t: e
      };
    if (f *= a, c *= 1.5 * a, u *= 3 * a, l *= e * e * e, o.length === 4)
      return h = f + c + u + l, {
        x: (f * o[0].x + c * o[1].x + u * o[2].x + l * o[3].x) / h,
        y: (f * o[0].y + c * o[1].y + u * o[2].y + l * o[3].y) / h,
        z: i ? (f * o[0].z + c * o[1].z + u * o[2].z + l * o[3].z) / h : !1,
        t: e
      };
  },
  derive: function(e, n) {
    for (var r = [], i = e, a = i.length, s = a - 1; a > 1; a--, s--) {
      for (var o = [], f = 0, c; f < s; f++)
        c = {
          x: s * (i[f + 1].x - i[f].x),
          y: s * (i[f + 1].y - i[f].y)
        }, n && (c.z = s * (i[f + 1].z - i[f].z)), o.push(c);
      r.push(o), i = o;
    }
    return r;
  },
  between: function(e, n, r) {
    return n <= e && e <= r || x.approximately(e, n) || x.approximately(e, r);
  },
  approximately: function(e, n, r) {
    return je(e - n) <= (r || hc);
  },
  length: function(e) {
    for (var n = 0.5, r = x.Tvalues.length, i = 0, a = 0, s; a < r; a++)
      s = n * x.Tvalues[a] + n, i += x.Cvalues[a] * x.arcfn(s, e);
    return n * i;
  },
  map: function(e, n, r, i, a) {
    var s = r - n, o = a - i, f = e - n, c = f / s;
    return i + o * c;
  },
  lerp: function(e, n, r) {
    var i = {
      x: n.x + e * (r.x - n.x),
      y: n.y + e * (r.y - n.y)
    };
    return n.z !== void 0 && r.z !== void 0 && (i.z = n.z + e * (r.z - n.z)), i;
  },
  pointToString: function(e) {
    var n = e.x + "/" + e.y;
    return typeof e.z < "u" && (n += "/" + e.z), n;
  },
  pointsToString: function(e) {
    return "[" + e.map(x.pointToString).join(", ") + "]";
  },
  copy: function(e) {
    return JSON.parse(JSON.stringify(e));
  },
  angle: function(e, n, r) {
    var i = n.x - e.x, a = n.y - e.y, s = r.x - e.x, o = r.y - e.y, f = i * o - a * s, c = i * s + a * o;
    return $e(f, c);
  },
  round: function(e, n) {
    var r = "" + e, i = r.indexOf(".");
    return parseFloat(r.substring(0, i + 1 + n));
  },
  dist: function(e, n) {
    var r = e.x - n.x, i = e.y - n.y;
    return ue(r * r + i * i);
  },
  closest: function(e, n) {
    var r = X(2, 63), i, a;
    return e.forEach(function(s, o) {
      a = x.dist(n, s), a < r && (r = a, i = o);
    }), {
      mdist: r,
      mpos: i
    };
  },
  abcratio: function(e, n) {
    if (n !== 2 && n !== 3)
      return !1;
    if (typeof e > "u")
      e = 0.5;
    else if (e === 0 || e === 1)
      return e;
    var r = X(e, n) + X(1 - e, n), i = r - 1;
    return je(i / r);
  },
  projectionratio: function(e, n) {
    if (n !== 2 && n !== 3)
      return !1;
    if (typeof e > "u")
      e = 0.5;
    else if (e === 0 || e === 1)
      return e;
    var r = X(1 - e, n), i = X(e, n) + r;
    return r / i;
  },
  lli8: function(e, n, r, i, a, s, o, f) {
    var c = (e * i - n * r) * (a - o) - (e - r) * (a * f - s * o), u = (e * i - n * r) * (s - f) - (n - i) * (a * f - s * o), l = (e - r) * (s - f) - (n - i) * (a - o);
    return l == 0 ? !1 : {
      x: c / l,
      y: u / l
    };
  },
  lli4: function(e, n, r, i) {
    var a = e.x, s = e.y, o = n.x, f = n.y, c = r.x, u = r.y, l = i.x, h = i.y;
    return x.lli8(a, s, o, f, c, u, l, h);
  },
  lli: function(e, n) {
    return x.lli4(e, e.c, n, n.c);
  },
  makeline: function(e, n) {
    return new Mi(e.x, e.y, (e.x + n.x) / 2, (e.y + n.y) / 2, n.x, n.y);
  },
  findbbox: function(e) {
    var n = cn, r = cn, i = un, a = un;
    return e.forEach(function(s) {
      var o = s.bbox();
      n > o.x.min && (n = o.x.min), r > o.y.min && (r = o.y.min), i < o.x.max && (i = o.x.max), a < o.y.max && (a = o.y.max);
    }), {
      x: {
        min: n,
        mid: (n + i) / 2,
        max: i,
        size: i - n
      },
      y: {
        min: r,
        mid: (r + a) / 2,
        max: a,
        size: a - r
      }
    };
  },
  shapeintersections: function(e, n, r, i, a) {
    if (!x.bboxoverlap(n, i)) return [];
    var s = [], o = [e.startcap, e.forward, e.back, e.endcap], f = [r.startcap, r.forward, r.back, r.endcap];
    return o.forEach(function(c) {
      c.virtual || f.forEach(function(u) {
        if (!u.virtual) {
          var l = c.intersects(u, a);
          l.length > 0 && (l.c1 = c, l.c2 = u, l.s1 = e, l.s2 = r, s.push(l));
        }
      });
    }), s;
  },
  makeshape: function(e, n, r) {
    var i = n.points.length, a = e.points.length, s = x.makeline(n.points[i - 1], e.points[0]), o = x.makeline(e.points[a - 1], n.points[0]), f = {
      startcap: s,
      forward: e,
      back: n,
      endcap: o,
      bbox: x.findbbox([s, e, n, o])
    };
    return f.intersections = function(c) {
      return x.shapeintersections(f, f.bbox, c, c.bbox, r);
    }, f;
  },
  getminmax: function(e, n, r) {
    if (!r) return {
      min: 0,
      max: 0
    };
    var i = cn, a = un, s, o;
    r.indexOf(0) === -1 && (r = [0].concat(r)), r.indexOf(1) === -1 && r.push(1);
    for (var f = 0, c = r.length; f < c; f++)
      s = r[f], o = e.get(s), o[n] < i && (i = o[n]), o[n] > a && (a = o[n]);
    return {
      min: i,
      mid: (i + a) / 2,
      max: a,
      size: a - i
    };
  },
  align: function(e, n) {
    var r = n.p1.x, i = n.p1.y, a = -$e(n.p2.y - i, n.p2.x - r), s = function(o) {
      return {
        x: (o.x - r) * se(a) - (o.y - i) * Te(a),
        y: (o.x - r) * Te(a) + (o.y - i) * se(a)
      };
    };
    return e.map(s);
  },
  roots: function(e, n) {
    n = n || {
      p1: {
        x: 0,
        y: 0
      },
      p2: {
        x: 1,
        y: 0
      }
    };
    var r = e.length - 1, i = x.align(e, n), a = function(Rn) {
      return 0 <= Rn && Rn <= 1;
    };
    if (r === 2) {
      var s = i[0].y, o = i[1].y, f = i[2].y, c = s - 2 * o + f;
      if (c !== 0) {
        var u = -ue(o * o - s * f), l = -s + o, h = -(u + l) / c, d = -(-u + l) / c;
        return [h, d].filter(a);
      } else if (o !== f && c === 0)
        return [(2 * o - f) / (2 * o - 2 * f)].filter(a);
      return [];
    }
    var p = i[0].y, y = i[1].y, g = i[2].y, v = i[3].y, w = -p + 3 * y - 3 * g + v, _ = 3 * p - 6 * y + 3 * g, b = -3 * p + 3 * y, m = p;
    if (x.approximately(w, 0)) {
      if (x.approximately(_, 0))
        return x.approximately(b, 0) ? [] : [-m / b].filter(a);
      var M = ue(b * b - 4 * _ * m), P = 2 * _;
      return [(M - b) / P, (-b - M) / P].filter(a);
    }
    _ /= w, b /= w, m /= w;
    var T = (3 * b - _ * _) / 3, L = T / 3, Z = (2 * _ * _ * _ - 9 * _ * b + 27 * m) / 27, O = Z / 2, B = O * O + L * L * L, D, R, q, ie, ae;
    if (B < 0) {
      var k = -T / 3, H = k * k * k, V = ue(H), Ee = -Z / (2 * V), nn = Ee < -1 ? -1 : Ee > 1 ? 1 : Ee, Oe = lc(nn), rn = He(V), De = 2 * rn;
      return q = De * se(Oe / 3) - _ / 3, ie = De * se((Oe + Tt) / 3) - _ / 3, ae = De * se((Oe + 2 * Tt) / 3) - _ / 3, [q, ie, ae].filter(a);
    } else {
      if (B === 0)
        return D = O < 0 ? He(-O) : -He(O), q = 2 * D - _ / 3, ie = -D - _ / 3, [q, ie].filter(a);
      var Ve = ue(B);
      return D = He(-O + Ve), R = He(O + Ve), [D - R - _ / 3].filter(a);
    }
  },
  droots: function(e) {
    if (e.length === 3) {
      var n = e[0], r = e[1], i = e[2], a = n - 2 * r + i;
      if (a !== 0) {
        var s = -ue(r * r - n * i), o = -n + r, f = -(s + o) / a, c = -(-s + o) / a;
        return [f, c];
      } else if (r !== i && a === 0)
        return [(2 * r - i) / (2 * (r - i))];
      return [];
    }
    if (e.length === 2) {
      var u = e[0], l = e[1];
      return u !== l ? [u / (u - l)] : [];
    }
    return [];
  },
  curvature: function(e, n, r, i, a) {
    var s, o, f, c, u = 0, l = 0, h = x.compute(e, n), d = x.compute(e, r), p = h.x * h.x + h.y * h.y;
    if (i ? (s = ue(X(h.y * d.z - d.y * h.z, 2) + X(h.z * d.x - d.z * h.x, 2) + X(h.x * d.y - d.x * h.y, 2)), o = X(p + h.z * h.z, 3 / 2)) : (s = h.x * d.y - h.y * d.x, o = X(p, 3 / 2)), s === 0 || o === 0)
      return {
        k: 0,
        r: 0
      };
    if (u = s / o, l = o / s, !a) {
      var y = x.curvature(e - 1e-3, n, r, i, !0).k, g = x.curvature(e + 1e-3, n, r, i, !0).k;
      c = (g - u + (u - y)) / 2, f = (je(g - u) + je(u - y)) / 2;
    }
    return {
      k: u,
      r: l,
      dk: c,
      adk: f
    };
  },
  inflections: function(e) {
    if (e.length < 4) return [];
    var n = x.align(e, {
      p1: e[0],
      p2: e.slice(-1)[0]
    }), r = n[2].x * n[1].y, i = n[3].x * n[1].y, a = n[1].x * n[2].y, s = n[3].x * n[2].y, o = 18 * (-3 * r + 2 * i + 3 * a - s), f = 18 * (3 * r - i - 3 * a), c = 18 * (a - r);
    if (x.approximately(o, 0)) {
      if (!x.approximately(f, 0)) {
        var u = -c / f;
        if (0 <= u && u <= 1) return [u];
      }
      return [];
    }
    var l = 2 * o;
    if (x.approximately(l, 0)) return [];
    var h = f * f - 4 * o * c;
    if (h < 0) return [];
    var d = Math.sqrt(h);
    return [(d - f) / l, -(f + d) / l].filter(function(p) {
      return 0 <= p && p <= 1;
    });
  },
  bboxoverlap: function(e, n) {
    for (var r = ["x", "y"], i = r.length, a = 0, s, o, f, c; a < i; a++)
      if (s = r[a], o = e[s].mid, f = n[s].mid, c = (e[s].size + n[s].size) / 2, je(o - f) >= c) return !1;
    return !0;
  },
  expandbox: function(e, n) {
    n.x.min < e.x.min && (e.x.min = n.x.min), n.y.min < e.y.min && (e.y.min = n.y.min), n.z && n.z.min < e.z.min && (e.z.min = n.z.min), n.x.max > e.x.max && (e.x.max = n.x.max), n.y.max > e.y.max && (e.y.max = n.y.max), n.z && n.z.max > e.z.max && (e.z.max = n.z.max), e.x.mid = (e.x.min + e.x.max) / 2, e.y.mid = (e.y.min + e.y.max) / 2, e.z && (e.z.mid = (e.z.min + e.z.max) / 2), e.x.size = e.x.max - e.x.min, e.y.size = e.y.max - e.y.min, e.z && (e.z.size = e.z.max - e.z.min);
  },
  pairiteration: function(e, n, r) {
    var i = e.bbox(), a = n.bbox(), s = 1e5, o = r || 0.5;
    if (i.x.size + i.y.size < o && a.x.size + a.y.size < o)
      return [(s * (e._t1 + e._t2) / 2 | 0) / s + "/" + (s * (n._t1 + n._t2) / 2 | 0) / s];
    var f = e.split(0.5), c = n.split(0.5), u = [{
      left: f.left,
      right: c.left
    }, {
      left: f.left,
      right: c.right
    }, {
      left: f.right,
      right: c.right
    }, {
      left: f.right,
      right: c.left
    }];
    u = u.filter(function(h) {
      return x.bboxoverlap(h.left.bbox(), h.right.bbox());
    });
    var l = [];
    return u.length === 0 || (u.forEach(function(h) {
      l = l.concat(x.pairiteration(h.left, h.right, o));
    }), l = l.filter(function(h, d) {
      return l.indexOf(h) === d;
    })), l;
  },
  getccenter: function(e, n, r) {
    var i = n.x - e.x, a = n.y - e.y, s = r.x - n.x, o = r.y - n.y, f = i * se(le) - a * Te(le), c = i * Te(le) + a * se(le), u = s * se(le) - o * Te(le), l = s * Te(le) + o * se(le), h = (e.x + n.x) / 2, d = (e.y + n.y) / 2, p = (n.x + r.x) / 2, y = (n.y + r.y) / 2, g = h + f, v = d + c, w = p + u, _ = y + l, b = x.lli8(h, d, g, v, p, y, w, _), m = x.dist(b, e), M = $e(e.y - b.y, e.x - b.x), P = $e(n.y - b.y, n.x - b.x), T = $e(r.y - b.y, r.x - b.x), L;
    return M < T ? ((M > P || P > T) && (M += Tt), M > T && (L = T, T = M, M = L)) : T < P && P < M ? (L = T, T = M, M = L) : T += Tt, b.s = M, b.e = T, b.r = m, b;
  },
  numberSort: function(e, n) {
    return e - n;
  }
}, ln = /* @__PURE__ */ (function() {
  function e(r) {
    this.curves = [], this._3d = !1, r && (this.curves = r, this._3d = this.curves[0]._3d);
  }
  var n = e.prototype;
  return n.valueOf = function() {
    return this.toString();
  }, n.toString = function() {
    return "[" + this.curves.map(function(r) {
      return x.pointsToString(r.points);
    }).join(", ") + "]";
  }, n.addCurve = function(r) {
    this.curves.push(r), this._3d = this._3d || r._3d;
  }, n.length = function() {
    return this.curves.map(function(r) {
      return r.length();
    }).reduce(function(r, i) {
      return r + i;
    });
  }, n.curve = function(r) {
    return this.curves[r];
  }, n.bbox = function() {
    for (var r = this.curves, i = r[0].bbox(), a = 1; a < r.length; a++)
      x.expandbox(i, r[a].bbox());
    return i;
  }, n.offset = function(r) {
    var i = [];
    return this.curves.forEach(function(a) {
      i.push.apply(i, a.offset(r));
    }), new e(i);
  }, e;
})(), Xe = Math.abs, hr = Math.min, dr = Math.max, pc = Math.cos, yc = Math.sin, gc = Math.acos, Ze = Math.sqrt, bc = Math.PI, Mi = /* @__PURE__ */ (function() {
  function e(r) {
    var i = r && r.forEach ? r : Array.from(arguments).slice(), a = !1;
    if (typeof i[0] == "object") {
      a = i.length;
      var s = [];
      i.forEach(function(w) {
        ["x", "y", "z"].forEach(function(_) {
          typeof w[_] < "u" && s.push(w[_]);
        });
      }), i = s;
    }
    var o = !1, f = i.length;
    if (a) {
      if (a > 4) {
        if (arguments.length !== 1)
          throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        o = !0;
      }
    } else if (f !== 6 && f !== 8 && f !== 9 && f !== 12 && arguments.length !== 1)
      throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
    for (var c = this._3d = !o && (f === 9 || f === 12) || r && r[0] && typeof r[0].z < "u", u = this.points = [], l = 0, h = c ? 3 : 2; l < f; l += h) {
      var d = {
        x: i[l],
        y: i[l + 1]
      };
      c && (d.z = i[l + 2]), u.push(d);
    }
    var p = this.order = u.length - 1, y = this.dims = ["x", "y"];
    c && y.push("z"), this.dimlen = y.length;
    var g = x.align(u, {
      p1: u[0],
      p2: u[p]
    }), v = x.dist(u[0], u[p]);
    this._linear = g.reduce(function(w, _) {
      return w + Xe(_.y);
    }, 0) < v / 50, this._lut = [], this._t1 = 0, this._t2 = 1, this.update();
  }
  e.quadraticFromPoints = function(r, i, a, s) {
    if (typeof s > "u" && (s = 0.5), s === 0)
      return new e(i, i, a);
    if (s === 1)
      return new e(r, i, i);
    var o = e.getABC(2, r, i, a, s);
    return new e(r, o.A, a);
  }, e.cubicFromPoints = function(r, i, a, s, o) {
    typeof s > "u" && (s = 0.5);
    var f = e.getABC(3, r, i, a, s);
    typeof o > "u" && (o = x.dist(i, f.C));
    var c = o * (1 - s) / s, u = x.dist(r, a), l = (a.x - r.x) / u, h = (a.y - r.y) / u, d = o * l, p = o * h, y = c * l, g = c * h, v = {
      x: i.x - d,
      y: i.y - p
    }, w = {
      x: i.x + y,
      y: i.y + g
    }, _ = f.A, b = {
      x: _.x + (v.x - _.x) / (1 - s),
      y: _.y + (v.y - _.y) / (1 - s)
    }, m = {
      x: _.x + (w.x - _.x) / s,
      y: _.y + (w.y - _.y) / s
    }, M = {
      x: r.x + (b.x - r.x) / s,
      y: r.y + (b.y - r.y) / s
    }, P = {
      x: a.x + (m.x - a.x) / (1 - s),
      y: a.y + (m.y - a.y) / (1 - s)
    };
    return new e(r, M, P, a);
  }, e.getUtils = function() {
    return x;
  };
  var n = e.prototype;
  return n.getUtils = function() {
    return e.getUtils();
  }, n.valueOf = function() {
    return this.toString();
  }, n.toString = function() {
    return x.pointsToString(this.points);
  }, n.toSVG = function() {
    if (this._3d) return !1;
    for (var r = this.points, i = r[0].x, a = r[0].y, s = ["M", i, a, this.order === 2 ? "Q" : "C"], o = 1, f = r.length; o < f; o++)
      s.push(r[o].x), s.push(r[o].y);
    return s.join(" ");
  }, n.setRatios = function(r) {
    if (r.length !== this.points.length)
      throw new Error("incorrect number of ratio values");
    this.ratios = r, this._lut = [];
  }, n.verify = function() {
    var r = this.coordDigest();
    r !== this._print && (this._print = r, this.update());
  }, n.coordDigest = function() {
    return this.points.map(function(r, i) {
      return "" + i + r.x + r.y + (r.z ? r.z : 0);
    }).join("");
  }, n.update = function() {
    this._lut = [], this.dpoints = x.derive(this.points, this._3d), this.computedirection();
  }, n.computedirection = function() {
    var r = this.points, i = x.angle(r[0], r[this.order], r[1]);
    this.clockwise = i > 0;
  }, n.length = function() {
    return x.length(this.derivative.bind(this));
  }, e.getABC = function(r, i, a, s, o) {
    r === void 0 && (r = 2), o === void 0 && (o = 0.5);
    var f = x.projectionratio(o, r), c = 1 - f, u = {
      x: f * i.x + c * s.x,
      y: f * i.y + c * s.y
    }, l = x.abcratio(o, r), h = {
      x: a.x + (a.x - u.x) / l,
      y: a.y + (a.y - u.y) / l
    };
    return {
      A: h,
      B: a,
      C: u,
      S: i,
      E: s
    };
  }, n.getABC = function(r, i) {
    i = i || this.get(r);
    var a = this.points[0], s = this.points[this.order];
    return e.getABC(this.order, a, i, s, r);
  }, n.getLUT = function(r) {
    if (this.verify(), r = r || 100, this._lut.length === r + 1)
      return this._lut;
    this._lut = [], r++, this._lut = [];
    for (var i = 0, a, s; i < r; i++)
      s = i / (r - 1), a = this.compute(s), a.t = s, this._lut.push(a);
    return this._lut;
  }, n.on = function(r, i) {
    i = i || 5;
    for (var a = this.getLUT(), s = [], o = 0, f, c = 0; o < a.length; o++)
      f = a[o], x.dist(f, r) < i && (s.push(f), c += o / a.length);
    return s.length ? t /= s.length : !1;
  }, n.project = function(r) {
    var i = this.getLUT(), a = i.length - 1, s = x.closest(i, r), o = s.mpos, f = (o - 1) / a, c = (o + 1) / a, u = 0.1 / a, l = s.mdist, h = f, d = h, p;
    l += 1;
    for (var y; h < c + u; h += u)
      p = this.compute(h), y = x.dist(r, p), y < l && (l = y, d = h);
    return d = d < 0 ? 0 : d > 1 ? 1 : d, p = this.compute(d), p.t = d, p.d = l, p;
  }, n.get = function(r) {
    return this.compute(r);
  }, n.point = function(r) {
    return this.points[r];
  }, n.compute = function(r) {
    return this.ratios ? x.computeWithRatios(r, this.points, this.ratios, this._3d) : x.compute(r, this.points, this._3d, this.ratios);
  }, n.raise = function() {
    for (var r = this.points, i = [r[0]], a = r.length, s = 1, o, f; s < a; s++)
      o = r[s], f = r[s - 1], i[s] = {
        x: (a - s) / a * o.x + s / a * f.x,
        y: (a - s) / a * o.y + s / a * f.y
      };
    return i[a] = r[a - 1], new e(i);
  }, n.derivative = function(r) {
    return x.compute(r, this.dpoints[0], this._3d);
  }, n.dderivative = function(r) {
    return x.compute(r, this.dpoints[1], this._3d);
  }, n.align = function() {
    var r = this.points;
    return new e(x.align(r, {
      p1: r[0],
      p2: r[r.length - 1]
    }));
  }, n.curvature = function(r) {
    return x.curvature(r, this.dpoints[0], this.dpoints[1], this._3d);
  }, n.inflections = function() {
    return x.inflections(this.points);
  }, n.normal = function(r) {
    return this._3d ? this.__normal3(r) : this.__normal2(r);
  }, n.__normal2 = function(r) {
    var i = this.derivative(r), a = Ze(i.x * i.x + i.y * i.y);
    return {
      t: r,
      x: -i.y / a,
      y: i.x / a
    };
  }, n.__normal3 = function(r) {
    var i = this.derivative(r), a = this.derivative(r + 0.01), s = Ze(i.x * i.x + i.y * i.y + i.z * i.z), o = Ze(a.x * a.x + a.y * a.y + a.z * a.z);
    i.x /= s, i.y /= s, i.z /= s, a.x /= o, a.y /= o, a.z /= o;
    var f = {
      x: a.y * i.z - a.z * i.y,
      y: a.z * i.x - a.x * i.z,
      z: a.x * i.y - a.y * i.x
    }, c = Ze(f.x * f.x + f.y * f.y + f.z * f.z);
    f.x /= c, f.y /= c, f.z /= c;
    var u = [f.x * f.x, f.x * f.y - f.z, f.x * f.z + f.y, f.x * f.y + f.z, f.y * f.y, f.y * f.z - f.x, f.x * f.z - f.y, f.y * f.z + f.x, f.z * f.z], l = {
      t: r,
      x: u[0] * i.x + u[1] * i.y + u[2] * i.z,
      y: u[3] * i.x + u[4] * i.y + u[5] * i.z,
      z: u[6] * i.x + u[7] * i.y + u[8] * i.z
    };
    return l;
  }, n.hull = function(r) {
    var i = this.points, a = [], s = [], o = 0;
    for (s[o++] = i[0], s[o++] = i[1], s[o++] = i[2], this.order === 3 && (s[o++] = i[3]); i.length > 1; ) {
      a = [];
      for (var f = 0, c, u = i.length - 1; f < u; f++)
        c = x.lerp(r, i[f], i[f + 1]), s[o++] = c, a.push(c);
      i = a;
    }
    return s;
  }, n.split = function(r, i) {
    if (r === 0 && i)
      return this.split(i).left;
    if (i === 1)
      return this.split(r).right;
    var a = this.hull(r), s = {
      left: this.order === 2 ? new e([a[0], a[3], a[5]]) : new e([a[0], a[4], a[7], a[9]]),
      right: this.order === 2 ? new e([a[5], a[4], a[2]]) : new e([a[9], a[8], a[6], a[3]]),
      span: a
    };
    return s.left._t1 = x.map(0, 0, 1, this._t1, this._t2), s.left._t2 = x.map(r, 0, 1, this._t1, this._t2), s.right._t1 = x.map(r, 0, 1, this._t1, this._t2), s.right._t2 = x.map(1, 0, 1, this._t1, this._t2), i ? (i = x.map(i, r, 1, 0, 1), s.right.split(i).left) : s;
  }, n.extrema = function() {
    var r = {}, i = [];
    return this.dims.forEach((function(a) {
      var s = function(f) {
        return f[a];
      }, o = this.dpoints[0].map(s);
      r[a] = x.droots(o), this.order === 3 && (o = this.dpoints[1].map(s), r[a] = r[a].concat(x.droots(o))), r[a] = r[a].filter(function(f) {
        return f >= 0 && f <= 1;
      }), i = i.concat(r[a].sort(x.numberSort));
    }).bind(this)), r.values = i.sort(x.numberSort).filter(function(a, s) {
      return i.indexOf(a) === s;
    }), r;
  }, n.bbox = function() {
    var r = this.extrema(), i = {};
    return this.dims.forEach((function(a) {
      i[a] = x.getminmax(this, a, r[a]);
    }).bind(this)), i;
  }, n.overlaps = function(r) {
    var i = this.bbox(), a = r.bbox();
    return x.bboxoverlap(i, a);
  }, n.offset = function(r, i) {
    if (typeof i < "u") {
      var a = this.get(r), s = this.normal(r), o = {
        c: a,
        n: s,
        x: a.x + s.x * i,
        y: a.y + s.y * i
      };
      return this._3d && (o.z = a.z + s.z * i), o;
    }
    if (this._linear) {
      var f = this.normal(0), c = this.points.map(function(u) {
        var l = {
          x: u.x + r * f.x,
          y: u.y + r * f.y
        };
        return u.z && f.z && (l.z = u.z + r * f.z), l;
      });
      return [new e(c)];
    }
    return this.reduce().map(function(u) {
      return u._linear ? u.offset(r)[0] : u.scale(r);
    });
  }, n.simple = function() {
    if (this.order === 3) {
      var r = x.angle(this.points[0], this.points[3], this.points[1]), i = x.angle(this.points[0], this.points[3], this.points[2]);
      if (r > 0 && i < 0 || r < 0 && i > 0) return !1;
    }
    var a = this.normal(0), s = this.normal(1), o = a.x * s.x + a.y * s.y;
    return this._3d && (o += a.z * s.z), Xe(gc(o)) < bc / 3;
  }, n.reduce = function() {
    var r, i = 0, a = 0, s = 0.01, o, f = [], c = [], u = this.extrema().values;
    for (u.indexOf(0) === -1 && (u = [0].concat(u)), u.indexOf(1) === -1 && u.push(1), i = u[0], r = 1; r < u.length; r++)
      a = u[r], o = this.split(i, a), o._t1 = i, o._t2 = a, f.push(o), i = a;
    return f.forEach(function(l) {
      for (i = 0, a = 0; a <= 1; )
        for (a = i + s; a <= 1 + s; a += s)
          if (o = l.split(i, a), !o.simple()) {
            if (a -= s, Xe(i - a) < s)
              return [];
            o = l.split(i, a), o._t1 = x.map(i, 0, 1, l._t1, l._t2), o._t2 = x.map(a, 0, 1, l._t1, l._t2), c.push(o), i = a;
            break;
          }
      i < 1 && (o = l.split(i, 1), o._t1 = x.map(i, 0, 1, l._t1, l._t2), o._t2 = l._t2, c.push(o));
    }), c;
  }, n.translate = function(r, i, a) {
    a = typeof a == "number" ? a : i;
    var s = this.order, o = this.points.map(function(f, c) {
      return (1 - c / s) * i + c / s * a;
    });
    return new e(this.points.map(function(f, c) {
      return {
        x: f.x + r.x * o[c],
        y: f.y + r.y * o[c]
      };
    }));
  }, n.scale = function(r) {
    var i = this, a = this.order, s = !1;
    if (typeof r == "function" && (s = r), s && a === 2)
      return this.raise().scale(s);
    var o = this.clockwise, f = this.points;
    if (this._linear)
      return this.translate(this.normal(0), s ? s(0) : r, s ? s(1) : r);
    var c = s ? s(0) : r, u = s ? s(1) : r, l = [this.offset(0, 10), this.offset(1, 10)], h = [], d = x.lli4(l[0], l[0].c, l[1], l[1].c);
    if (!d)
      throw new Error("cannot scale this curve. Try reducing it first.");
    return [0, 1].forEach(function(p) {
      var y = h[p * a] = x.copy(f[p * a]);
      y.x += (p ? u : c) * l[p].n.x, y.y += (p ? u : c) * l[p].n.y;
    }), s ? ([0, 1].forEach(function(p) {
      if (!(a === 2 && p)) {
        var y = f[p + 1], g = {
          x: y.x - d.x,
          y: y.y - d.y
        }, v = s ? s((p + 1) / a) : r;
        s && !o && (v = -v);
        var w = Ze(g.x * g.x + g.y * g.y);
        g.x /= w, g.y /= w, h[p + 1] = {
          x: y.x + v * g.x,
          y: y.y + v * g.y
        };
      }
    }), new e(h)) : ([0, 1].forEach(function(p) {
      if (!(a === 2 && p)) {
        var y = h[p * a], g = i.derivative(p), v = {
          x: y.x + g.x,
          y: y.y + g.y
        };
        h[p + 1] = x.lli4(y, v, d, f[p + 1]);
      }
    }), new e(h));
  }, n.outline = function(r, i, a, s) {
    if (i = i === void 0 ? r : i, this._linear) {
      var o = this.normal(0), f = this.points[0], c = this.points[this.points.length - 1], u, l, h;
      a === void 0 && (a = r, s = i), u = {
        x: f.x + o.x * r,
        y: f.y + o.y * r
      }, h = {
        x: c.x + o.x * a,
        y: c.y + o.y * a
      }, l = {
        x: (u.x + h.x) / 2,
        y: (u.y + h.y) / 2
      };
      var d = [u, l, h];
      u = {
        x: f.x - o.x * i,
        y: f.y - o.y * i
      }, h = {
        x: c.x - o.x * s,
        y: c.y - o.y * s
      }, l = {
        x: (u.x + h.x) / 2,
        y: (u.y + h.y) / 2
      };
      var p = [h, l, u], y = x.makeline(p[2], d[0]), g = x.makeline(d[2], p[0]), v = [y, new e(d), g, new e(p)];
      return new ln(v);
    }
    var w = this.reduce(), _ = w.length, b = [], m = [], M, P = 0, T = this.length(), L = typeof a < "u" && typeof s < "u";
    function Z(k, H, V, Ee, nn) {
      return function(Oe) {
        var rn = Ee / V, De = (Ee + nn) / V, Ve = H - k;
        return x.map(Oe, 0, 1, k + rn * Ve, k + De * Ve);
      };
    }
    w.forEach(function(k) {
      var H = k.length();
      L ? (b.push(k.scale(Z(r, a, T, P, H))), m.push(k.scale(Z(-i, -s, T, P, H)))) : (b.push(k.scale(r)), m.push(k.scale(-i))), P += H;
    }), m = m.map(function(k) {
      return M = k.points, M[3] ? k.points = [M[3], M[2], M[1], M[0]] : k.points = [M[2], M[1], M[0]], k;
    }).reverse();
    var O = b[0].points[0], B = b[_ - 1].points[b[_ - 1].points.length - 1], D = m[_ - 1].points[m[_ - 1].points.length - 1], R = m[0].points[0], q = x.makeline(D, O), ie = x.makeline(B, R), ae = [q].concat(b).concat([ie]).concat(m);
    return new ln(ae);
  }, n.outlineshapes = function(r, i, a) {
    i = i || r;
    for (var s = this.outline(r, i).curves, o = [], f = 1, c = s.length; f < c / 2; f++) {
      var u = x.makeshape(s[f], s[c - f], a);
      u.startcap.virtual = f > 1, u.endcap.virtual = f < c / 2 - 1, o.push(u);
    }
    return o;
  }, n.intersects = function(r, i) {
    return r ? r.p1 && r.p2 ? this.lineIntersects(r) : (r instanceof e && (r = r.reduce()), this.curveintersects(this.reduce(), r, i)) : this.selfintersects(i);
  }, n.lineIntersects = function(r) {
    var i = this, a = hr(r.p1.x, r.p2.x), s = hr(r.p1.y, r.p2.y), o = dr(r.p1.x, r.p2.x), f = dr(r.p1.y, r.p2.y);
    return x.roots(this.points, r).filter(function(c) {
      var u = i.get(c);
      return x.between(u.x, a, o) && x.between(u.y, s, f);
    });
  }, n.selfintersects = function(r) {
    for (var i = this.reduce(), a = i.length - 2, s = [], o = 0, f, c, u; o < a; o++)
      c = i.slice(o, o + 1), u = i.slice(o + 2), f = this.curveintersects(c, u, r), s.push.apply(s, f);
    return s;
  }, n.curveintersects = function(r, i, a) {
    var s = [];
    r.forEach(function(f) {
      i.forEach(function(c) {
        f.overlaps(c) && s.push({
          left: f,
          right: c
        });
      });
    });
    var o = [];
    return s.forEach(function(f) {
      var c = x.pairiteration(f.left, f.right, a);
      c.length > 0 && (o = o.concat(c));
    }), o;
  }, n.arcs = function(r) {
    return r = r || 0.5, this._iterate(r, []);
  }, n._error = function(r, i, a, s) {
    var o = (s - a) / 4, f = this.get(a + o), c = this.get(s - o), u = x.dist(r, i), l = x.dist(r, f), h = x.dist(r, c);
    return Xe(l - u) + Xe(h - u);
  }, n._iterate = function(r, i) {
    var a = 0, s = 1, o;
    do {
      o = 0, s = 1;
      var f = this.get(a), c = void 0, u = void 0, l = void 0, h = void 0, d = !1, p = !1, y = void 0, g = s, v = 1;
      do {
        p = d, h = l, g = (a + s) / 2, c = this.get(g), u = this.get(s), l = x.getccenter(f, c, u), l.interval = {
          start: a,
          end: s
        };
        var w = this._error(l, f, a, s);
        if (d = w <= r, y = p && !d, y || (v = s), d) {
          if (s >= 1) {
            if (l.interval.end = v = 1, h = l, s > 1) {
              var _ = {
                x: l.x + l.r * pc(l.e),
                y: l.y + l.r * yc(l.e)
              };
              l.e += x.angle({
                x: l.x,
                y: l.y
              }, _, this.get(1));
            }
            break;
          }
          s = s + (s - a) / 2;
        } else
          s = g;
      } while (!y && o++ < 100);
      if (o >= 100)
        break;
      h = h || l, i.push(h), a = v;
    } while (s < 1);
    return i;
  }, yi(e, null, [{
    key: "PolyBezier",
    get: function() {
      return ln;
    }
  }]), e;
})();
uc(xi);
class ge {
  /**
   * Builds a mesh from GeoJSON features representing buildings.
   * @param {FeatureCollection} geojson The GeoJSON feature collection
   * @param {number[]} origin The origin point for translation
   * @returns {[ILayerGeometry[], ILayerComponent[]]} An array of geometries and components
   */
  static buildMesh(n, r) {
    const i = [], a = [], s = this.groupBuildings(n);
    let o = [];
    for (let f = 0; f < s.length; f++) {
      let c = 0, u = 0;
      for (let l = 0; l < s[f].length; l++) {
        const h = s[f][l], d = ge.computeBuildingHeights(h);
        if (d.length) {
          if (h.geometry.type === "LineString")
            o = ge.lineStringToBuildingMesh(h, d, r);
          else if (h.geometry.type === "MultiLineString")
            o = ge.multiLineStringToBuilding(h, d, r);
          else if (h.geometry.type === "Polygon")
            o = ge.polygonToBuilding(h, d, r);
          else if (h.geometry.type === "MultiPolygon")
            o = ge.multiPolygonToBuilding(h, d, r);
          else {
            console.warn("Unsupported geometry type:", h.geometry.type);
            continue;
          }
          for (const p of o)
            i.push({
              position: p.flatCoords,
              indices: p.flatIds
            }), c += p.flatCoords.length / 3, u += p.flatIds.length / 3;
        }
      }
      a.push({ nPoints: c, nTriangles: u });
    }
    return [i, a];
  }
  //---------------------------------------------------------------------------
  /**
   * Groups buildings based on their id.
   * @param {FeatureCollection} geojson The GeoJSON feature collection
   * @returns {Feature[][]} An array of grouped features
   */
  static groupBuildings(n) {
    const r = {};
    for (const i of n.features) {
      let a = i.properties ? i.properties.building_id : "-1";
      r[a] || (r[a] = []), r[a].push(i);
    }
    return Object.values(r);
  }
  /**
   * Computes the heights of a building feature.
   * @param {Feature} feature The GeoJSON feature representing a building
   * @returns {number[]} An array containing the minimum and maximum heights
   */
  static computeBuildingHeights(n) {
    const r = n.properties;
    if (r === null)
      return [];
    let i = 0;
    "height" in r ? i = r.height : "levels" in r ? i = 3.4 * r.levels : "building:levels" in r && (i = 3.4 * r["building:levels"]);
    let a = 0;
    return "min_height" in r ? a = r.min_height : "min_level" in r && r.min_level >= 0 ? a = 3.4 * r.min_level : "building:min_level" in r && (a = 3.4 * r["building:min_level"]), [1 * a, 1 * i];
  }
  //---------------------------------------------------------------------------
  /**
   * Converts a LineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static lineStringToBuildingMesh(n, r, i) {
    const { coordinates: a } = n.geometry, s = a.map((u) => [u[0] - i[0], u[1] - i[1]]), o = St([[s]], { depth: r[1] - r[0] }), f = Array.from(o.position).map((u, l) => l % 3 === 2 ? u + r[0] : u), c = Array.from(o.indices);
    return [{ flatCoords: f, flatIds: c }];
  }
  /**
   * Converts a LineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static multiLineStringToBuilding(n, r, i) {
    const { coordinates: a } = n.geometry, s = [];
    for (const o of a) {
      const f = o.map((h) => [h[0] - i[0], h[1] - i[1]]), c = St([[f]], { depth: r[1] - r[0] }), u = Array.from(c.position).map((h, d) => d % 3 === 2 ? h + r[0] : h), l = Array.from(c.indices);
      s.push({ flatCoords: u, flatIds: l });
    }
    return s;
  }
  /**
   * Converts a LineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static polygonToBuilding(n, r, i) {
    const { coordinates: a } = n.geometry, s = [];
    for (let u = 0; u < a.length; u++)
      s.push(a[u].map((l) => [l[0] - i[0], l[1] - i[1]]));
    const o = St([s], { depth: r[1] - r[0] }), f = Array.from(o.position).map((u, l) => l % 3 === 2 ? u + r[0] : u), c = Array.from(o.indices);
    return [{ flatCoords: f, flatIds: c }];
  }
  /**
   * Converts a LineString feature to a border representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @returns {ILayerBorder[]} An array of borders
   */
  static multiPolygonToBuilding(n, r, i) {
    const a = [], { coordinates: s } = n.geometry;
    for (const o of s) {
      const f = [];
      for (let h = 0; h < o.length; h++)
        f.push(o[h].map((d) => [d[0] - i[0], d[1] - i[1]]));
      const c = St([f], { depth: r[1] - r[0] }), u = Array.from(c.position).map((h, d) => d % 3 === 2 ? h + r[0] : h), l = Array.from(c.indices);
      a.push({ flatCoords: u, flatIds: l });
    }
    return a;
  }
}
var mc = { value: () => {
} };
function Pi() {
  for (var e = 0, n = arguments.length, r = {}, i; e < n; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new Lt(r);
}
function Lt(e) {
  this._ = e;
}
function _c(e, n) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", a = r.indexOf(".");
    if (a >= 0 && (i = r.slice(a + 1), r = r.slice(0, a)), r && !n.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Lt.prototype = Pi.prototype = {
  constructor: Lt,
  on: function(e, n) {
    var r = this._, i = _c(e + "", r), a, s = -1, o = i.length;
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((a = (e = i[s]).type) && (a = vc(r[a], e.name))) return a;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++s < o; )
      if (a = (e = i[s]).type) r[a] = pr(r[a], e.name, n);
      else if (n == null) for (a in r) r[a] = pr(r[a], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var r in n) e[r] = n[r].slice();
    return new Lt(e);
  },
  call: function(e, n) {
    if ((a = arguments.length - 2) > 0) for (var r = new Array(a), i = 0, a, s; i < a; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (s = this._[e], i = 0, a = s.length; i < a; ++i) s[i].value.apply(n, r);
  },
  apply: function(e, n, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], a = 0, s = i.length; a < s; ++a) i[a].value.apply(n, r);
  }
};
function vc(e, n) {
  for (var r = 0, i = e.length, a; r < i; ++r)
    if ((a = e[r]).name === n)
      return a.value;
}
function pr(e, n, r) {
  for (var i = 0, a = e.length; i < a; ++i)
    if (e[i].name === n) {
      e[i] = mc, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: n, value: r }), e;
}
var vn = "http://www.w3.org/1999/xhtml";
const yr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: vn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Jt(e) {
  var n = e += "", r = n.indexOf(":");
  return r >= 0 && (n = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), yr.hasOwnProperty(n) ? { space: yr[n], local: e } : e;
}
function xc(e) {
  return function() {
    var n = this.ownerDocument, r = this.namespaceURI;
    return r === vn && n.documentElement.namespaceURI === vn ? n.createElement(e) : n.createElementNS(r, e);
  };
}
function wc(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ei(e) {
  var n = Jt(e);
  return (n.local ? wc : xc)(n);
}
function Mc() {
}
function Ln(e) {
  return e == null ? Mc : function() {
    return this.querySelector(e);
  };
}
function Pc(e) {
  typeof e != "function" && (e = Ln(e));
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a)
    for (var s = n[a], o = s.length, f = i[a] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = s[l]) && (u = e.call(c, c.__data__, l, s)) && ("__data__" in c && (u.__data__ = c.__data__), f[l] = u);
  return new $(i, this._parents);
}
function Ec(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Bc() {
  return [];
}
function Bi(e) {
  return e == null ? Bc : function() {
    return this.querySelectorAll(e);
  };
}
function Ic(e) {
  return function() {
    return Ec(e.apply(this, arguments));
  };
}
function Sc(e) {
  typeof e == "function" ? e = Ic(e) : e = Bi(e);
  for (var n = this._groups, r = n.length, i = [], a = [], s = 0; s < r; ++s)
    for (var o = n[s], f = o.length, c, u = 0; u < f; ++u)
      (c = o[u]) && (i.push(e.call(c, c.__data__, u, o)), a.push(c));
  return new $(i, a);
}
function Ii(e) {
  return function() {
    return this.matches(e);
  };
}
function Si(e) {
  return function(n) {
    return n.matches(e);
  };
}
var Tc = Array.prototype.find;
function kc(e) {
  return function() {
    return Tc.call(this.children, e);
  };
}
function Ac() {
  return this.firstElementChild;
}
function Lc(e) {
  return this.select(e == null ? Ac : kc(typeof e == "function" ? e : Si(e)));
}
var Cc = Array.prototype.filter;
function zc() {
  return Array.from(this.children);
}
function Uc(e) {
  return function() {
    return Cc.call(this.children, e);
  };
}
function Gc(e) {
  return this.selectAll(e == null ? zc : Uc(typeof e == "function" ? e : Si(e)));
}
function Rc(e) {
  typeof e != "function" && (e = Ii(e));
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a)
    for (var s = n[a], o = s.length, f = i[a] = [], c, u = 0; u < o; ++u)
      (c = s[u]) && e.call(c, c.__data__, u, s) && f.push(c);
  return new $(i, this._parents);
}
function Ti(e) {
  return new Array(e.length);
}
function Nc() {
  return new $(this._enter || this._groups.map(Ti), this._parents);
}
function Yt(e, n) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = n;
}
Yt.prototype = {
  constructor: Yt,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, n) {
    return this._parent.insertBefore(e, n);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Oc(e) {
  return function() {
    return e;
  };
}
function Dc(e, n, r, i, a, s) {
  for (var o = 0, f, c = n.length, u = s.length; o < u; ++o)
    (f = n[o]) ? (f.__data__ = s[o], i[o] = f) : r[o] = new Yt(e, s[o]);
  for (; o < c; ++o)
    (f = n[o]) && (a[o] = f);
}
function Vc(e, n, r, i, a, s, o) {
  var f, c, u = /* @__PURE__ */ new Map(), l = n.length, h = s.length, d = new Array(l), p;
  for (f = 0; f < l; ++f)
    (c = n[f]) && (d[f] = p = o.call(c, c.__data__, f, n) + "", u.has(p) ? a[f] = c : u.set(p, c));
  for (f = 0; f < h; ++f)
    p = o.call(e, s[f], f, s) + "", (c = u.get(p)) ? (i[f] = c, c.__data__ = s[f], u.delete(p)) : r[f] = new Yt(e, s[f]);
  for (f = 0; f < l; ++f)
    (c = n[f]) && u.get(d[f]) === c && (a[f] = c);
}
function Fc(e) {
  return e.__data__;
}
function Yc(e, n) {
  if (!arguments.length) return Array.from(this, Fc);
  var r = n ? Vc : Dc, i = this._parents, a = this._groups;
  typeof e != "function" && (e = Oc(e));
  for (var s = a.length, o = new Array(s), f = new Array(s), c = new Array(s), u = 0; u < s; ++u) {
    var l = i[u], h = a[u], d = h.length, p = qc(e.call(l, l && l.__data__, u, i)), y = p.length, g = f[u] = new Array(y), v = o[u] = new Array(y), w = c[u] = new Array(d);
    r(l, h, g, v, w, p, n);
    for (var _ = 0, b = 0, m, M; _ < y; ++_)
      if (m = g[_]) {
        for (_ >= b && (b = _ + 1); !(M = v[b]) && ++b < y; ) ;
        m._next = M || null;
      }
  }
  return o = new $(o, i), o._enter = f, o._exit = c, o;
}
function qc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function jc() {
  return new $(this._exit || this._groups.map(Ti), this._parents);
}
function $c(e, n, r) {
  var i = this.enter(), a = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), n != null && (a = n(a), a && (a = a.selection())), r == null ? s.remove() : r(s), i && a ? i.merge(a).order() : a;
}
function Hc(e) {
  for (var n = e.selection ? e.selection() : e, r = this._groups, i = n._groups, a = r.length, s = i.length, o = Math.min(a, s), f = new Array(a), c = 0; c < o; ++c)
    for (var u = r[c], l = i[c], h = u.length, d = f[c] = new Array(h), p, y = 0; y < h; ++y)
      (p = u[y] || l[y]) && (d[y] = p);
  for (; c < a; ++c)
    f[c] = r[c];
  return new $(f, this._parents);
}
function Xc() {
  for (var e = this._groups, n = -1, r = e.length; ++n < r; )
    for (var i = e[n], a = i.length - 1, s = i[a], o; --a >= 0; )
      (o = i[a]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Zc(e) {
  e || (e = Kc);
  function n(h, d) {
    return h && d ? e(h.__data__, d.__data__) : !h - !d;
  }
  for (var r = this._groups, i = r.length, a = new Array(i), s = 0; s < i; ++s) {
    for (var o = r[s], f = o.length, c = a[s] = new Array(f), u, l = 0; l < f; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(n);
  }
  return new $(a, this._parents).order();
}
function Kc(e, n) {
  return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function Wc() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Qc() {
  return Array.from(this);
}
function Jc() {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, s = i.length; a < s; ++a) {
      var o = i[a];
      if (o) return o;
    }
  return null;
}
function eu() {
  let e = 0;
  for (const n of this) ++e;
  return e;
}
function tu() {
  return !this.node();
}
function nu(e) {
  for (var n = this._groups, r = 0, i = n.length; r < i; ++r)
    for (var a = n[r], s = 0, o = a.length, f; s < o; ++s)
      (f = a[s]) && e.call(f, f.__data__, s, a);
  return this;
}
function ru(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function iu(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function au(e, n) {
  return function() {
    this.setAttribute(e, n);
  };
}
function su(e, n) {
  return function() {
    this.setAttributeNS(e.space, e.local, n);
  };
}
function ou(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function fu(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function cu(e, n) {
  var r = Jt(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((n == null ? r.local ? iu : ru : typeof n == "function" ? r.local ? fu : ou : r.local ? su : au)(r, n));
}
function ki(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function uu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function lu(e, n, r) {
  return function() {
    this.style.setProperty(e, n, r);
  };
}
function hu(e, n, r) {
  return function() {
    var i = n.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function du(e, n, r) {
  return arguments.length > 1 ? this.each((n == null ? uu : typeof n == "function" ? hu : lu)(e, n, r ?? "")) : Ge(this.node(), e);
}
function Ge(e, n) {
  return e.style.getPropertyValue(n) || ki(e).getComputedStyle(e, null).getPropertyValue(n);
}
function pu(e) {
  return function() {
    delete this[e];
  };
}
function yu(e, n) {
  return function() {
    this[e] = n;
  };
}
function gu(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function bu(e, n) {
  return arguments.length > 1 ? this.each((n == null ? pu : typeof n == "function" ? gu : yu)(e, n)) : this.node()[e];
}
function Ai(e) {
  return e.trim().split(/^|\s+/);
}
function Cn(e) {
  return e.classList || new Li(e);
}
function Li(e) {
  this._node = e, this._names = Ai(e.getAttribute("class") || "");
}
Li.prototype = {
  add: function(e) {
    var n = this._names.indexOf(e);
    n < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var n = this._names.indexOf(e);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Ci(e, n) {
  for (var r = Cn(e), i = -1, a = n.length; ++i < a; ) r.add(n[i]);
}
function zi(e, n) {
  for (var r = Cn(e), i = -1, a = n.length; ++i < a; ) r.remove(n[i]);
}
function mu(e) {
  return function() {
    Ci(this, e);
  };
}
function _u(e) {
  return function() {
    zi(this, e);
  };
}
function vu(e, n) {
  return function() {
    (n.apply(this, arguments) ? Ci : zi)(this, e);
  };
}
function xu(e, n) {
  var r = Ai(e + "");
  if (arguments.length < 2) {
    for (var i = Cn(this.node()), a = -1, s = r.length; ++a < s; ) if (!i.contains(r[a])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? vu : n ? mu : _u)(r, n));
}
function wu() {
  this.textContent = "";
}
function Mu(e) {
  return function() {
    this.textContent = e;
  };
}
function Pu(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Eu(e) {
  return arguments.length ? this.each(e == null ? wu : (typeof e == "function" ? Pu : Mu)(e)) : this.node().textContent;
}
function Bu() {
  this.innerHTML = "";
}
function Iu(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Su(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Tu(e) {
  return arguments.length ? this.each(e == null ? Bu : (typeof e == "function" ? Su : Iu)(e)) : this.node().innerHTML;
}
function ku() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Au() {
  return this.each(ku);
}
function Lu() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cu() {
  return this.each(Lu);
}
function zu(e) {
  var n = typeof e == "function" ? e : Ei(e);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Uu() {
  return null;
}
function Gu(e, n) {
  var r = typeof e == "function" ? e : Ei(e), i = n == null ? Uu : typeof n == "function" ? n : Ln(n);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ru() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Nu() {
  return this.each(Ru);
}
function Ou() {
  var e = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function Du() {
  var e = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function Vu(e) {
  return this.select(e ? Du : Ou);
}
function Fu(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yu(e) {
  return function(n) {
    e.call(this, n, this.__data__);
  };
}
function qu(e) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    return i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), { type: n, name: r };
  });
}
function ju(e) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var r = 0, i = -1, a = n.length, s; r < a; ++r)
        s = n[r], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : n[++i] = s;
      ++i ? n.length = i : delete this.__on;
    }
  };
}
function $u(e, n, r) {
  return function() {
    var i = this.__on, a, s = Yu(n);
    if (i) {
      for (var o = 0, f = i.length; o < f; ++o)
        if ((a = i[o]).type === e.type && a.name === e.name) {
          this.removeEventListener(a.type, a.listener, a.options), this.addEventListener(a.type, a.listener = s, a.options = r), a.value = n;
          return;
        }
    }
    this.addEventListener(e.type, s, r), a = { type: e.type, name: e.name, value: n, listener: s, options: r }, i ? i.push(a) : this.__on = [a];
  };
}
function Hu(e, n, r) {
  var i = qu(e + ""), a, s = i.length, o;
  if (arguments.length < 2) {
    var f = this.node().__on;
    if (f) {
      for (var c = 0, u = f.length, l; c < u; ++c)
        for (a = 0, l = f[c]; a < s; ++a)
          if ((o = i[a]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (f = n ? $u : ju, a = 0; a < s; ++a) this.each(f(i[a], n, r));
  return this;
}
function Ui(e, n, r) {
  var i = ki(e), a = i.CustomEvent;
  typeof a == "function" ? a = new a(n, r) : (a = i.document.createEvent("Event"), r ? (a.initEvent(n, r.bubbles, r.cancelable), a.detail = r.detail) : a.initEvent(n, !1, !1)), e.dispatchEvent(a);
}
function Xu(e, n) {
  return function() {
    return Ui(this, e, n);
  };
}
function Zu(e, n) {
  return function() {
    return Ui(this, e, n.apply(this, arguments));
  };
}
function Ku(e, n) {
  return this.each((typeof n == "function" ? Zu : Xu)(e, n));
}
function* Wu() {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, s = i.length, o; a < s; ++a)
      (o = i[a]) && (yield o);
}
var Gi = [null];
function $(e, n) {
  this._groups = e, this._parents = n;
}
function yt() {
  return new $([[document.documentElement]], Gi);
}
function Qu() {
  return this;
}
$.prototype = yt.prototype = {
  constructor: $,
  select: Pc,
  selectAll: Sc,
  selectChild: Lc,
  selectChildren: Gc,
  filter: Rc,
  data: Yc,
  enter: Nc,
  exit: jc,
  join: $c,
  merge: Hc,
  selection: Qu,
  order: Xc,
  sort: Zc,
  call: Wc,
  nodes: Qc,
  node: Jc,
  size: eu,
  empty: tu,
  each: nu,
  attr: cu,
  style: du,
  property: bu,
  classed: xu,
  text: Eu,
  html: Tu,
  raise: Au,
  lower: Cu,
  append: zu,
  insert: Gu,
  remove: Nu,
  clone: Vu,
  datum: Fu,
  on: Hu,
  dispatch: Ku,
  [Symbol.iterator]: Wu
};
function Ju(e) {
  return typeof e == "string" ? new $([[document.querySelector(e)]], [document.documentElement]) : new $([[e]], Gi);
}
var Re = 0, et = 0, Ke = 0, Ri = 1e3, qt, tt, jt = 0, Pe = 0, en = 0, ht = typeof performance == "object" && performance.now ? performance : Date, Ni = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function zn() {
  return Pe || (Ni(el), Pe = ht.now() + en);
}
function el() {
  Pe = 0;
}
function $t() {
  this._call = this._time = this._next = null;
}
$t.prototype = Oi.prototype = {
  constructor: $t,
  restart: function(e, n, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? zn() : +r) + (n == null ? 0 : +n), !this._next && tt !== this && (tt ? tt._next = this : qt = this, tt = this), this._call = e, this._time = r, xn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xn());
  }
};
function Oi(e, n, r) {
  var i = new $t();
  return i.restart(e, n, r), i;
}
function tl() {
  zn(), ++Re;
  for (var e = qt, n; e; )
    (n = Pe - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --Re;
}
function gr() {
  Pe = (jt = ht.now()) + en, Re = et = 0;
  try {
    tl();
  } finally {
    Re = 0, rl(), Pe = 0;
  }
}
function nl() {
  var e = ht.now(), n = e - jt;
  n > Ri && (en -= n, jt = e);
}
function rl() {
  for (var e, n = qt, r, i = 1 / 0; n; )
    n._call ? (i > n._time && (i = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : qt = r);
  tt = e, xn(i);
}
function xn(e) {
  if (!Re) {
    et && (et = clearTimeout(et));
    var n = e - Pe;
    n > 24 ? (e < 1 / 0 && (et = setTimeout(gr, e - ht.now() - en)), Ke && (Ke = clearInterval(Ke))) : (Ke || (jt = ht.now(), Ke = setInterval(nl, Ri)), Re = 1, Ni(gr));
  }
}
function br(e, n, r) {
  var i = new $t();
  return n = n == null ? 0 : +n, i.restart((a) => {
    i.stop(), e(a + n);
  }, n, r), i;
}
var il = Pi("start", "end", "cancel", "interrupt"), al = [], Di = 0, mr = 1, wn = 2, Ct = 3, _r = 4, Mn = 5, zt = 6;
function tn(e, n, r, i, a, s) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (r in o) return;
  sl(e, r, {
    name: n,
    index: i,
    // For context during callback.
    group: a,
    // For context during callback.
    on: il,
    tween: al,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Di
  });
}
function Un(e, n) {
  var r = Q(e, n);
  if (r.state > Di) throw new Error("too late; already scheduled");
  return r;
}
function re(e, n) {
  var r = Q(e, n);
  if (r.state > Ct) throw new Error("too late; already running");
  return r;
}
function Q(e, n) {
  var r = e.__transition;
  if (!r || !(r = r[n])) throw new Error("transition not found");
  return r;
}
function sl(e, n, r) {
  var i = e.__transition, a;
  i[n] = r, r.timer = Oi(s, 0, r.time);
  function s(u) {
    r.state = mr, r.timer.restart(o, r.delay, r.time), r.delay <= u && o(u - r.delay);
  }
  function o(u) {
    var l, h, d, p;
    if (r.state !== mr) return c();
    for (l in i)
      if (p = i[l], p.name === r.name) {
        if (p.state === Ct) return br(o);
        p.state === _r ? (p.state = zt, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete i[l]) : +l < n && (p.state = zt, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete i[l]);
      }
    if (br(function() {
      r.state === Ct && (r.state = _r, r.timer.restart(f, r.delay, r.time), f(u));
    }), r.state = wn, r.on.call("start", e, e.__data__, r.index, r.group), r.state === wn) {
      for (r.state = Ct, a = new Array(d = r.tween.length), l = 0, h = -1; l < d; ++l)
        (p = r.tween[l].value.call(e, e.__data__, r.index, r.group)) && (a[++h] = p);
      a.length = h + 1;
    }
  }
  function f(u) {
    for (var l = u < r.duration ? r.ease.call(null, u / r.duration) : (r.timer.restart(c), r.state = Mn, 1), h = -1, d = a.length; ++h < d; )
      a[h].call(e, l);
    r.state === Mn && (r.on.call("end", e, e.__data__, r.index, r.group), c());
  }
  function c() {
    r.state = zt, r.timer.stop(), delete i[n];
    for (var u in i) return;
    delete e.__transition;
  }
}
function ol(e, n) {
  var r = e.__transition, i, a, s = !0, o;
  if (r) {
    n = n == null ? null : n + "";
    for (o in r) {
      if ((i = r[o]).name !== n) {
        s = !1;
        continue;
      }
      a = i.state > wn && i.state < Mn, i.state = zt, i.timer.stop(), i.on.call(a ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[o];
    }
    s && delete e.__transition;
  }
}
function fl(e) {
  return this.each(function() {
    ol(this, e);
  });
}
function cl(e, n) {
  var r, i;
  return function() {
    var a = re(this, e), s = a.tween;
    if (s !== r) {
      i = r = s;
      for (var o = 0, f = i.length; o < f; ++o)
        if (i[o].name === n) {
          i = i.slice(), i.splice(o, 1);
          break;
        }
    }
    a.tween = i;
  };
}
function ul(e, n, r) {
  var i, a;
  if (typeof r != "function") throw new Error();
  return function() {
    var s = re(this, e), o = s.tween;
    if (o !== i) {
      a = (i = o).slice();
      for (var f = { name: n, value: r }, c = 0, u = a.length; c < u; ++c)
        if (a[c].name === n) {
          a[c] = f;
          break;
        }
      c === u && a.push(f);
    }
    s.tween = a;
  };
}
function ll(e, n) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Q(this.node(), r).tween, a = 0, s = i.length, o; a < s; ++a)
      if ((o = i[a]).name === e)
        return o.value;
    return null;
  }
  return this.each((n == null ? cl : ul)(r, e, n));
}
function Gn(e, n, r) {
  var i = e._id;
  return e.each(function() {
    var a = re(this, i);
    (a.value || (a.value = {}))[n] = r.apply(this, arguments);
  }), function(a) {
    return Q(a, i).value[n];
  };
}
function Vi(e, n) {
  var r;
  return (typeof n == "number" ? J : n instanceof we ? Rt : (r = we(n)) ? (n = r, Rt) : Br)(e, n);
}
function hl(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function dl(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function pl(e, n, r) {
  var i, a = r + "", s;
  return function() {
    var o = this.getAttribute(e);
    return o === a ? null : o === i ? s : s = n(i = o, r);
  };
}
function yl(e, n, r) {
  var i, a = r + "", s;
  return function() {
    var o = this.getAttributeNS(e.space, e.local);
    return o === a ? null : o === i ? s : s = n(i = o, r);
  };
}
function gl(e, n, r) {
  var i, a, s;
  return function() {
    var o, f = r(this), c;
    return f == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = f + "", o === c ? null : o === i && c === a ? s : (a = c, s = n(i = o, f)));
  };
}
function bl(e, n, r) {
  var i, a, s;
  return function() {
    var o, f = r(this), c;
    return f == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = f + "", o === c ? null : o === i && c === a ? s : (a = c, s = n(i = o, f)));
  };
}
function ml(e, n) {
  var r = Jt(e), i = r === "transform" ? Na : Vi;
  return this.attrTween(e, typeof n == "function" ? (r.local ? bl : gl)(r, i, Gn(this, "attr." + e, n)) : n == null ? (r.local ? dl : hl)(r) : (r.local ? yl : pl)(r, i, n));
}
function _l(e, n) {
  return function(r) {
    this.setAttribute(e, n.call(this, r));
  };
}
function vl(e, n) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, n.call(this, r));
  };
}
function xl(e, n) {
  var r, i;
  function a() {
    var s = n.apply(this, arguments);
    return s !== i && (r = (i = s) && vl(e, s)), r;
  }
  return a._value = n, a;
}
function wl(e, n) {
  var r, i;
  function a() {
    var s = n.apply(this, arguments);
    return s !== i && (r = (i = s) && _l(e, s)), r;
  }
  return a._value = n, a;
}
function Ml(e, n) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  var i = Jt(e);
  return this.tween(r, (i.local ? xl : wl)(i, n));
}
function Pl(e, n) {
  return function() {
    Un(this, e).delay = +n.apply(this, arguments);
  };
}
function El(e, n) {
  return n = +n, function() {
    Un(this, e).delay = n;
  };
}
function Bl(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Pl : El)(n, e)) : Q(this.node(), n).delay;
}
function Il(e, n) {
  return function() {
    re(this, e).duration = +n.apply(this, arguments);
  };
}
function Sl(e, n) {
  return n = +n, function() {
    re(this, e).duration = n;
  };
}
function Tl(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Il : Sl)(n, e)) : Q(this.node(), n).duration;
}
function kl(e, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    re(this, e).ease = n;
  };
}
function Al(e) {
  var n = this._id;
  return arguments.length ? this.each(kl(n, e)) : Q(this.node(), n).ease;
}
function Ll(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    re(this, e).ease = r;
  };
}
function Cl(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Ll(this._id, e));
}
function zl(e) {
  typeof e != "function" && (e = Ii(e));
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a)
    for (var s = n[a], o = s.length, f = i[a] = [], c, u = 0; u < o; ++u)
      (c = s[u]) && e.call(c, c.__data__, u, s) && f.push(c);
  return new fe(i, this._parents, this._name, this._id);
}
function Ul(e) {
  if (e._id !== this._id) throw new Error();
  for (var n = this._groups, r = e._groups, i = n.length, a = r.length, s = Math.min(i, a), o = new Array(i), f = 0; f < s; ++f)
    for (var c = n[f], u = r[f], l = c.length, h = o[f] = new Array(l), d, p = 0; p < l; ++p)
      (d = c[p] || u[p]) && (h[p] = d);
  for (; f < i; ++f)
    o[f] = n[f];
  return new fe(o, this._parents, this._name, this._id);
}
function Gl(e) {
  return (e + "").trim().split(/^|\s+/).every(function(n) {
    var r = n.indexOf(".");
    return r >= 0 && (n = n.slice(0, r)), !n || n === "start";
  });
}
function Rl(e, n, r) {
  var i, a, s = Gl(n) ? Un : re;
  return function() {
    var o = s(this, e), f = o.on;
    f !== i && (a = (i = f).copy()).on(n, r), o.on = a;
  };
}
function Nl(e, n) {
  var r = this._id;
  return arguments.length < 2 ? Q(this.node(), r).on.on(e) : this.each(Rl(r, e, n));
}
function Ol(e) {
  return function() {
    var n = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    n && n.removeChild(this);
  };
}
function Dl() {
  return this.on("end.remove", Ol(this._id));
}
function Vl(e) {
  var n = this._name, r = this._id;
  typeof e != "function" && (e = Ln(e));
  for (var i = this._groups, a = i.length, s = new Array(a), o = 0; o < a; ++o)
    for (var f = i[o], c = f.length, u = s[o] = new Array(c), l, h, d = 0; d < c; ++d)
      (l = f[d]) && (h = e.call(l, l.__data__, d, f)) && ("__data__" in l && (h.__data__ = l.__data__), u[d] = h, tn(u[d], n, r, d, u, Q(l, r)));
  return new fe(s, this._parents, n, r);
}
function Fl(e) {
  var n = this._name, r = this._id;
  typeof e != "function" && (e = Bi(e));
  for (var i = this._groups, a = i.length, s = [], o = [], f = 0; f < a; ++f)
    for (var c = i[f], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var d = e.call(l, l.__data__, h, c), p, y = Q(l, r), g = 0, v = d.length; g < v; ++g)
          (p = d[g]) && tn(p, n, r, g, d, y);
        s.push(d), o.push(l);
      }
  return new fe(s, o, n, r);
}
var Yl = yt.prototype.constructor;
function ql() {
  return new Yl(this._groups, this._parents);
}
function jl(e, n) {
  var r, i, a;
  return function() {
    var s = Ge(this, e), o = (this.style.removeProperty(e), Ge(this, e));
    return s === o ? null : s === r && o === i ? a : a = n(r = s, i = o);
  };
}
function Fi(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function $l(e, n, r) {
  var i, a = r + "", s;
  return function() {
    var o = Ge(this, e);
    return o === a ? null : o === i ? s : s = n(i = o, r);
  };
}
function Hl(e, n, r) {
  var i, a, s;
  return function() {
    var o = Ge(this, e), f = r(this), c = f + "";
    return f == null && (c = f = (this.style.removeProperty(e), Ge(this, e))), o === c ? null : o === i && c === a ? s : (a = c, s = n(i = o, f));
  };
}
function Xl(e, n) {
  var r, i, a, s = "style." + n, o = "end." + s, f;
  return function() {
    var c = re(this, e), u = c.on, l = c.value[s] == null ? f || (f = Fi(n)) : void 0;
    (u !== r || a !== l) && (i = (r = u).copy()).on(o, a = l), c.on = i;
  };
}
function Zl(e, n, r) {
  var i = (e += "") == "transform" ? Ra : Vi;
  return n == null ? this.styleTween(e, jl(e, i)).on("end.style." + e, Fi(e)) : typeof n == "function" ? this.styleTween(e, Hl(e, i, Gn(this, "style." + e, n))).each(Xl(this._id, e)) : this.styleTween(e, $l(e, i, n), r).on("end.style." + e, null);
}
function Kl(e, n, r) {
  return function(i) {
    this.style.setProperty(e, n.call(this, i), r);
  };
}
function Wl(e, n, r) {
  var i, a;
  function s() {
    var o = n.apply(this, arguments);
    return o !== a && (i = (a = o) && Kl(e, o, r)), i;
  }
  return s._value = n, s;
}
function Ql(e, n, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (n == null) return this.tween(i, null);
  if (typeof n != "function") throw new Error();
  return this.tween(i, Wl(e, n, r ?? ""));
}
function Jl(e) {
  return function() {
    this.textContent = e;
  };
}
function eh(e) {
  return function() {
    var n = e(this);
    this.textContent = n ?? "";
  };
}
function th(e) {
  return this.tween("text", typeof e == "function" ? eh(Gn(this, "text", e)) : Jl(e == null ? "" : e + ""));
}
function nh(e) {
  return function(n) {
    this.textContent = e.call(this, n);
  };
}
function rh(e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && nh(a)), n;
  }
  return i._value = e, i;
}
function ih(e) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  return this.tween(n, rh(e));
}
function ah() {
  for (var e = this._name, n = this._id, r = Yi(), i = this._groups, a = i.length, s = 0; s < a; ++s)
    for (var o = i[s], f = o.length, c, u = 0; u < f; ++u)
      if (c = o[u]) {
        var l = Q(c, n);
        tn(c, e, r, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new fe(i, this._parents, e, r);
}
function sh() {
  var e, n, r = this, i = r._id, a = r.size();
  return new Promise(function(s, o) {
    var f = { value: o }, c = { value: function() {
      --a === 0 && s();
    } };
    r.each(function() {
      var u = re(this, i), l = u.on;
      l !== e && (n = (e = l).copy(), n._.cancel.push(f), n._.interrupt.push(f), n._.end.push(c)), u.on = n;
    }), a === 0 && s();
  });
}
var oh = 0;
function fe(e, n, r, i) {
  this._groups = e, this._parents = n, this._name = r, this._id = i;
}
function Yi() {
  return ++oh;
}
var oe = yt.prototype;
fe.prototype = {
  constructor: fe,
  select: Vl,
  selectAll: Fl,
  selectChild: oe.selectChild,
  selectChildren: oe.selectChildren,
  filter: zl,
  merge: Ul,
  selection: ql,
  transition: ah,
  call: oe.call,
  nodes: oe.nodes,
  node: oe.node,
  size: oe.size,
  empty: oe.empty,
  each: oe.each,
  on: Nl,
  attr: ml,
  attrTween: Ml,
  style: Zl,
  styleTween: Ql,
  text: th,
  textTween: ih,
  remove: Dl,
  tween: ll,
  delay: Bl,
  duration: Tl,
  ease: Al,
  easeVarying: Cl,
  end: sh,
  [Symbol.iterator]: oe[Symbol.iterator]
};
function fh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ch = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: fh
};
function uh(e, n) {
  for (var r; !(r = e.__transition) || !(r = r[n]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${n} not found`);
  return r;
}
function lh(e) {
  var n, r;
  e instanceof fe ? (n = e._id, e = e._name) : (n = Yi(), (r = ch).time = zn(), e = e == null ? null : e + "");
  for (var i = this._groups, a = i.length, s = 0; s < a; ++s)
    for (var o = i[s], f = o.length, c, u = 0; u < f; ++u)
      (c = o[u]) && tn(c, e, n, u, o, r || uh(c, n));
  return new fe(i, this._parents, e, n);
}
yt.prototype.interrupt = fl;
yt.prototype.transition = lh;
function nt(e, n, r) {
  this.k = e, this.x = n, this.y = r;
}
nt.prototype = {
  constructor: nt,
  scale: function(e) {
    return e === 1 ? this : new nt(this.k * e, this.x, this.y);
  },
  translate: function(e, n) {
    return e === 0 & n === 0 ? this : new nt(this.k, this.x + this.k * e, this.y + this.k * n);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
nt.prototype;
class hh {
  /**
   * Reference to the AutkMap instance.
   * @type {AutkMap}
   */
  _map;
  /** UI margin for positioning elements */
  _uiMargin = 10;
  /**
   * Currently selected layer in the UI.
   * @type {Layer | null}
   */
  _activeLayer;
  /**
   * Reference to the menu icon HTML element.
   * @type {HTMLDivElement | null}
   */
  _menuIcon = null;
  /**
   * Reference to the submenu HTML element.
   * @type {HTMLDivElement | null}
   */
  _subMenu = null;
  /**
   * Reference to the legend HTML element.
   * @type {HTMLDivElement | null}
   */
  _legend = null;
  /**
   * Constructor for AutkMapUi
   * @param {AutkMap} map The map instance
   */
  constructor(n) {
    this._map = n, this._activeLayer = null;
  }
  /**
   * Get the map instance.
   * @returns {AutkMap} - The map instance.
   */
  get map() {
    return this._map;
  }
  /**
   * Set the map instance.
   * @param {AutkMap} map - The map instance to set.
   */
  set map(n) {
    this._map = n;
  }
  /**
   * Get the current layer in the UI.
   * @returns {Layer | null} - The currently selected layer or null if none is selected.
   */
  get activeLayer() {
    return this._activeLayer;
  }
  /**
   * Set the current layer in the UI.
   * @param {Layer | null} layer - The layer to set as current or null to clear.
   */
  set activeLayer(n) {
    this._activeLayer = n;
  }
  handleResize() {
    if (this._menuIcon && (this._menuIcon.style.top = this.map.canvas.offsetTop + this._uiMargin + "px", this._menuIcon.style.left = this.map.canvas.offsetLeft + this._uiMargin + "px"), this._subMenu && (this._subMenu.style.top = this.map.canvas.offsetTop + 30 + 2 * this._uiMargin + "px", this._subMenu.style.left = this.map.canvas.offsetLeft + this._uiMargin + "px"), this._legend) {
      const n = parseInt(this._legend.style.width || "0", 10) || 0, r = parseInt(this._legend.style.height || "0", 10) || 0;
      this._legend.style.left = this.map.canvas.offsetLeft + this.map.canvas.clientWidth - 2 - n - this._uiMargin + "px", this._legend.style.top = this.map.canvas.offsetTop + this.map.canvas.clientHeight - 2 - r - this._uiMargin + "px";
    }
  }
  /**
   * Change the current layer in the UI.
   * @param {Layer | null} layer - The layer to change to or null to clear.
   */
  changeActiveLayer(n) {
    if (!n || (this.activeLayer = n, console.log(`Active layer: ${this.activeLayer.layerInfo.id}`), this.map.layerManager.vectorLayers.forEach(
      (i) => {
        i.layerInfo.id != this.activeLayer?.layerInfo.id && (this.map.updateRenderInfoProperty(i.layerInfo.id, "isPick", !1), this.map.updateRenderInfoProperty(i.layerInfo.id, "isColorMap", !1));
      }
    ), this.map.updateRenderInfoProperty(this.activeLayer.layerInfo.id, "isPick", !0), !this._subMenu))
      return;
    let r = this._subMenu.querySelector("#showThematicCheckbox");
    r && this.map.updateRenderInfoProperty(this.activeLayer.layerInfo.id, "isColorMap", r.checked), this.updateLegend();
  }
  /**
   * Build the UI elements for the map.
   */
  buildUi() {
    if (!this._menuIcon) {
      this._menuIcon = document.createElement("div"), this._menuIcon.id = "autkMapUi", this._menuIcon.style.width = "30px !important", this._menuIcon.style.height = "30px !important", this._menuIcon.style.position = "absolute", this._menuIcon.style.top = this.map.canvas.offsetTop + this._uiMargin + "px", this._menuIcon.style.left = this.map.canvas.offsetLeft + this._uiMargin + "px", this._menuIcon.style.zIndex = "10";
      const n = document.createElement("a");
      n.id = "menuIcon", n.style.maxWidth = "30px", n.style.maxHeight = "30px", n.style.display = "block", n.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)", n.style.zIndex = "11", n.style.backgroundColor = "#fff", n.style.border = "1px solid #ccc", n.style.borderRadius = "4px", n.href = "#", n.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <rect x="4" y="5"  rx="4" ry="4" width="20" height="3" fill="#aaa" stroke="none"></rect>
                <rect x="4" y="13"  rx="4" ry="4" width="20" height="3" fill="#aaa" stroke="none"></rect>
                <rect x="4" y="21" rx="4" ry="4" width="20" height="3" fill="#aaa" stroke="none"></rect>
            </svg>`, this._menuIcon.appendChild(n), this.map.canvas.parentElement?.appendChild(this._menuIcon), n.addEventListener("click", () => {
        this.buildSubMenu(), this.buildVisibleLayersDropdown(), this.buildActiveLayerDropdown(), this.buildLegendCheckbox(), this.buildLegend(), this._subMenu && (this._subMenu.style.visibility = this._subMenu.style.visibility === "visible" ? "hidden" : "visible");
      });
    }
  }
  /**
   * Build the submenu for layer options.
   */
  buildSubMenu() {
    this._subMenu || (this._subMenu = document.createElement("div"), this._subMenu.id = "autkMapSubMenu", this._subMenu.style.position = "absolute", this._subMenu.style.top = this.map.canvas.offsetTop + 30 + 2 * this._uiMargin + "px", this._subMenu.style.left = this.map.canvas.offsetLeft + this._uiMargin + "px", this._subMenu.style.width = "300px", this._subMenu.style.display = "block", this._subMenu.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)", this._subMenu.style.zIndex = "11", this._subMenu.style.backgroundColor = "#fff", this._subMenu.style.border = "1px solid #ccc", this._subMenu.style.borderRadius = "8px", this._subMenu.style.padding = "10px", this._subMenu.style.visibility = "hidden", this.map.canvas.parentElement?.appendChild(this._subMenu));
  }
  /**
   * Build the active layers dropdown.
   */
  buildVisibleLayersDropdown() {
    if (!this._subMenu) return;
    let n = this._subMenu.querySelector("#visibleLayersTitle");
    n || (n = document.createElement("h3"), n.id = "visibleLayersTitle", n.textContent = "Visible Layers", n.style.margin = "0 0 10px 0", n.style.fontSize = "16px", n.style.color = "#333", this._subMenu.appendChild(n));
    let r = this._subMenu.querySelector("#visibleLayersSeparator");
    r || (r = document.createElement("hr"), r.id = "visibleLayersSeparator", r.style.margin = "10px 0", this._subMenu.appendChild(r));
    let i = this._subMenu.querySelector("#visibleLayerDropdownContainer");
    i || (i = document.createElement("div"), i.id = "visibleLayerDropdownContainer", i.style.position = "relative", i.style.marginBottom = "10px", this._subMenu.appendChild(i));
    let a = this._subMenu.querySelector("#visibleLayerDropdownButton");
    a || (a = document.createElement("button"), a.id = "visibleLayerDropdownButton", a.textContent = "Select Layers", a.style.width = "100%", a.style.padding = "6px 12px", a.style.border = "1px solid #ccc", a.style.borderRadius = "4px", a.style.background = "#f9f9f9", a.style.cursor = "pointer", a.style.textAlign = "left", i.appendChild(a));
    let s = this._subMenu.querySelector("#visibleLayerDropdownList");
    s || (s = document.createElement("div"), s.id = "visibleLayerDropdownList", s.style.position = "absolute", s.style.top = "110%", s.style.left = "0", s.style.width = "99%", s.style.background = "#f9f9f9", s.style.border = "1px solid #ccc", s.style.borderRadius = "4px", s.style.display = "none", s.style.zIndex = "12", s.style.maxHeight = "200px", s.style.overflowY = "auto", s.style.padding = "8px 0", i.appendChild(s)), s.innerHTML = "";
    const o = this.map.layerManager.vectorLayers, f = this.map.layerManager.rasterLayers;
    o.concat(f).forEach((c) => {
      const u = c?.layerRenderInfo.isSkip || !1, l = document.createElement("label");
      l.style.display = "flex", l.style.alignItems = "center", l.style.padding = "4px 12px", l.style.cursor = "pointer";
      const h = document.createElement("input");
      h.type = "checkbox", h.checked = !u, h.value = c.layerInfo.id, h.style.marginRight = "8px", l.appendChild(h), l.appendChild(document.createTextNode(c.layerInfo.id)), s.appendChild(l), h.addEventListener("change", (d) => {
        const p = d.target.checked;
        c.layerRenderInfo.isSkip = !p, s.style.display = "block";
      });
    }), a.addEventListener("click", (c) => {
      c.stopPropagation(), s.style.display = s.style.display === "block" ? "none" : "block";
    }), document.addEventListener("click", () => {
      s.style.display = "none";
    });
  }
  /**
   * Build the active layer dropdown.
   */
  buildActiveLayerDropdown() {
    if (!this._subMenu) return;
    let n = this._subMenu.querySelector("#activeLayersTitle");
    n || (n = document.createElement("h3"), n.id = "activeLayersTitle", n.textContent = "Active Layer", n.style.margin = "30px 0 10px 0", n.style.fontSize = "16px", n.style.color = "#333", this._subMenu.appendChild(n));
    let r = this._subMenu.querySelector("#activeLayersSeparator");
    r || (r = document.createElement("hr"), r.id = "activeLayersSeparator", r.style.margin = "10px 0", this._subMenu.appendChild(r));
    let i = this._subMenu.querySelector("#activeLayersDropdownContainer");
    i || (i = document.createElement("div"), i.id = "activeLayersDropdownContainer", i.style.position = "relative", i.style.marginBottom = "10px", this._subMenu.appendChild(i));
    let a = this._subMenu.querySelector("#activeLayersDropdownButton");
    a || (a = document.createElement("button"), a.id = "activeLayersDropdownButton", a.textContent = "Select Layers", a.style.width = "100%", a.style.padding = "6px 12px", a.style.border = "1px solid #ccc", a.style.borderRadius = "4px", a.style.background = "#f9f9f9", a.style.cursor = "pointer", a.style.textAlign = "left", i.appendChild(a));
    let s = this._subMenu.querySelector("#activeLayersDropdownList");
    s || (s = document.createElement("div"), s.id = "activeLayersDropdownList", s.style.position = "absolute", s.style.top = "110%", s.style.left = "0", s.style.width = "99%", s.style.background = "#f9f9f9", s.style.border = "1px solid #ccc", s.style.borderRadius = "4px", s.style.display = "none", s.style.zIndex = "12", s.style.maxHeight = "200px", s.style.overflowY = "auto", s.style.padding = "8px 0", i.appendChild(s)), s.innerHTML = "";
    const o = this.map.layerManager.vectorLayers;
    o.forEach((f, c) => {
      const u = c === o.length - 1, l = document.createElement("label");
      l.style.display = "flex", l.style.alignItems = "center", l.style.padding = "4px 12px", l.style.cursor = "pointer";
      const h = document.createElement("input");
      h.className = "active-layer-radio", h.type = "radio", h.checked = u, h.value = f.layerInfo.id, h.style.marginRight = "8px", u && this.changeActiveLayer(this.map.layerManager.searchByLayerId(f.layerInfo.id)), l.appendChild(h), l.appendChild(document.createTextNode(f.layerInfo.id)), s.appendChild(l), h.addEventListener("change", (d) => {
        s.querySelectorAll(".active-layer-radio").forEach((p) => p.checked = !1), d.target.checked = !0, this.changeActiveLayer(this.map.layerManager.searchByLayerId(f.layerInfo.id));
      });
    }), a.addEventListener("click", (f) => {
      f.stopPropagation(), s.style.display = s.style.display === "block" ? "none" : "block";
    }), document.addEventListener("click", () => {
      s.style.display = "none";
    });
  }
  /**
   * Build the legend checkbox for showing thematic data.
   */
  buildLegendCheckbox() {
    if (!this._subMenu) return;
    let n = this._subMenu.querySelector("#showThematicCheckboxLabel");
    if (n || (n = document.createElement("label"), n.id = "showThematicCheckboxLabel", n.style.display = "flex", n.style.alignItems = "center", n.style.cursor = "pointer"), !this._subMenu.querySelector("#showThematicCheckbox")) {
      const r = document.createElement("input");
      r.type = "checkbox", r.id = "showThematicCheckbox", r.style.marginRight = "10px", r.checked = this._activeLayer?.layerRenderInfo.isColorMap || !1, n.appendChild(r), n.appendChild(document.createTextNode("Thematic Data")), this._subMenu.appendChild(n), r.addEventListener("change", (i) => {
        if (this._activeLayer) {
          const a = i.target.checked;
          this.map.updateRenderInfoProperty(this._activeLayer.layerInfo.id, "isColorMap", a), this._legend && (this._legend.style.visibility = a ? "visible" : "hidden");
        }
      });
    }
    this.buildLegend();
  }
  /**
   * Build the submenu for layer options.
   */
  buildLegend(n = 250, r = 80) {
    this._legend || (this._legend = document.createElement("div"), this._legend.id = "autkMapLegend", this._legend.style.position = "absolute", this._legend.style.width = n + "px", this._legend.style.height = r + "px", this._legend.style.display = "block", this._legend.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)", this._legend.style.zIndex = "11", this._legend.style.backgroundColor = "#fff", this._legend.style.border = "1px solid #ccc", this._legend.style.borderRadius = "8px", this._legend.style.visibility = "hidden", this._legend.style.left = this.map.canvas.offsetLeft + this.map.canvas.clientWidth - 2 - n - this._uiMargin + "px", this._legend.style.top = this.map.canvas.offsetTop + this.map.canvas.clientHeight - 2 - r - this._uiMargin + "px", this.map.canvas.parentElement?.appendChild(this._legend));
    const i = document.querySelector("#showThematicCheckbox");
    i && (this._legend.style.visibility = i.checked ? "visible" : "hidden"), this.updateLegend(n, r);
  }
  /**
   * Updates the legend display.
   * @param width The width of the legend
   * @param height The height of the legend
   */
  updateLegend(n = 250, r = 80) {
    if (!this._legend || !this._activeLayer) return;
    this._legend.innerHTML = "";
    const i = document.createElement("h4");
    i.textContent = this._activeLayer.layerInfo.id, i.style.margin = `${this._uiMargin}px`, i.style.fontSize = "14px", i.style.color = "#333", this._legend.appendChild(i);
    const a = this._uiMargin, s = 40, o = n - 4 * a, f = r - s, c = this._activeLayer.layerRenderInfo.colorMapInterpolator, u = this._activeLayer.layerRenderInfo.colorMapLabels, l = c === G.OBSERVABLE10 ? 10 : 100, h = c === G.OBSERVABLE10 ? u.length < 10 ? u.length : 10 : 100, d = W.getColorArray(c, l).slice(0, h), p = Ju(this._legend).append("svg").attr("width", n).attr("height", f), y = o / d.length, g = f * 0.3, v = p.append("g").attr("transform", `translate(${2 * a}, 0)`);
    v.selectAll("rect").data(d).join("rect").attr("x", (_, b) => b * y).attr("y", 0).attr("width", y).attr("height", g).style("fill", (_) => `rgb(${_.r},${_.g},${_.b})`).style("stroke", (_) => `rgb(${_.r},${_.g},${_.b})`).style("stroke-width", "1px");
    const w = u.map((_, b) => c === G.OBSERVABLE10 ? { label: _, pos: b * y + y / 2 } : { label: _, pos: b * (o / (u.length - 1)) });
    v.selectAll("text").data(w).join("text").text((_) => `${_.label.substring(0, 3)}`).attr("x", (_) => _.pos).attr("y", g + 12).style("font-size", "12px").style("fill", "#333").style("text-anchor", "middle");
  }
}
class dh {
  /**
   * Builds a mesh from GeoJSON features representing polylines.
   * @param {FeatureCollection} geotiff The GeoJSON feature collection
   * @param {number[]} origin The origin point for translation
   * @returns {[ILayerGeometry[], ILayerComponent[]]} An array of geometries and components
   */
  static buildMesh(n, r) {
    const i = [], a = [], s = n.bbox;
    if (!s)
      return console.warn("GeoTIFF feature collection does not have a bounding box."), [i, a];
    const o = [s[0] - r[0], s[1] - r[1]], f = [s[2] - r[0], s[1] - r[1]], c = [s[2] - r[0], s[3] - r[1]], u = [s[0] - r[0], s[3] - r[1]], l = [o[0], o[1], f[0], f[1], c[0], c[1], u[0], u[1]], h = [0, 0, 1, 0, 1, 1, 0, 1], d = [0, 1, 2, 0, 2, 3];
    i.push({
      position: l,
      texCoord: h,
      indices: d
    });
    const p = l.length / 2, y = d.length / 3;
    return a.push({ nPoints: p, nTriangles: y }), [i, a];
  }
  /**
   * Converts a LineString feature to a polyline mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a LineString
   * @param {number[]} origin The origin point for translation
   * @param {number} offset The offset distance for the polyline extrusion
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static lineStringToPolyline(n, r, i) {
    const a = n.geometry;
    a.coordinates = a.coordinates.map((f) => [f[0] - r[0], f[1] - r[1]]);
    const s = de(a, i).geometry.coordinates;
    de(a, -i).geometry.coordinates.forEach((f) => s.unshift(f)), s.push(s[0]);
    const o = he(s.flat());
    return [{ flatCoords: s.map((f) => [f[0], f[1]]).flat(), flatIds: o }];
  }
  /**
   * Converts a MultiLineString feature to a polyline mesh representation.
   * @param {Feature} feature The GeoJSON feature representing a MultiLineString
   * @param {number[]} origin The origin point for translation
   * @param {number} offset The offset distance for the polyline extrusion
   * @returns {ILayerGeometry[]} An array of geometries
   */
  static multiLineStringToPolyline(n, r, i) {
    const { coordinates: a } = n.geometry, s = [];
    for (const o of a) {
      const f = kn(o).geometry;
      f.coordinates = f.coordinates.map((h) => [h[0] - r[0], h[1] - r[1]]);
      const c = de(f, i).geometry.coordinates;
      de(f, -i).geometry.coordinates.forEach((h) => c.unshift(h)), c.push(c[0]);
      const u = he(c.flat()), l = c.map((h) => [h[0], h[1]]).flat();
      s.push({
        flatCoords: l,
        flatIds: u
      });
    }
    return s;
  }
}
class ph {
  /** The camera instance used for rendering the map */
  _camera;
  /** The renderer instance used for rendering the map */
  _renderer;
  /** The layer manager instance used for managing map layers */
  _layerManager;
  /** The key events handler for keyboard interactions */
  _keyEvents;
  /** The mouse events handler for mouse interactions */
  _mouseEvents;
  /** The map events handler for map interactions */
  _mapEvents;
  /** The UI instance for managing the map's user interface */
  _ui;
  /** The canvas element used for rendering the map */
  _canvas;
  /**
   * Creates an instance of the AutkMap class.
   * @param {HTMLCanvasElement} canvas The canvas element to render the map on
   * @param {boolean} [autoResize=true] Whether to automatically resize the canvas on window resize
   */
  constructor(n, r = !0) {
    this._canvas = n, this._camera = new Pn(), this._renderer = new Oo(n), this._layerManager = new No(), this._keyEvents = new mo(this), this._mouseEvents = new Do(this), this._mapEvents = new Vo([At.PICK]), this._ui = new hh(this), r && window.addEventListener("resize", () => {
      this.handleResize.bind(this)(), this._ui.handleResize();
    });
  }
  /**
   * Gets the camera instance used for rendering the map.
   * @returns {Camera} The camera instance
   */
  get camera() {
    return this._camera;
  }
  /**
   * Sets the camera instance used for rendering the map.
   * @param {Camera} camera The camera instance to set
   */
  set camera(n) {
    this._camera = n;
  }
  /**
   * Gets the renderer instance used for rendering the map.
   * @returns {Renderer} The renderer instance
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * Gets the layer manager instance used for managing map layers.
   * @returns {LayerManager} The layer manager instance
   */
  get layerManager() {
    return this._layerManager;
  }
  /**
   * Gets the map events instance used for handling map interactions.
   * @returns {MapEvents} The map events instance
   */
  get mapEvents() {
    return this._mapEvents;
  }
  /**
   * Gets the canvas element used for rendering the map.
   * @returns {HTMLCanvasElement} The canvas element
   */
  get canvas() {
    return this._canvas;
  }
  /**
   * Gets the UI instance used for managing the map's user interface.
   * @returns {AutkMapUi} The UI instance
   */
  get ui() {
    return this._ui;
  }
  /**
   * Gets the origin of the map, which is the center of the bounding box.
   * @returns {number[]} The origin coordinates [x, y]
   */
  get origin() {
    return this._layerManager.origin;
  }
  /**
   * Gets the bounding box of the map.
   * @returns {Bbox} The bounding box
   */
  get boundingBox() {
    return this._layerManager.bboxAndOrigin;
  }
  set boundingBox(n) {
    this._layerManager.bboxAndOrigin = n;
  }
  /**
   * Initializes the map.
   */
  async init() {
    await this._renderer.init(), this._keyEvents.bindEvents(), this._mouseEvents.bindEvents(), this.handleResize(), this.render(), this._ui.buildUi();
  }
  /**
   * Loads a GeoJSON layer into the map.
   *
   * This method creates a layer based on the provided GeoJSON data and adds it to the map's layer manager.
   * Supported OSM layer types include:
   * - AUTK_OSM_SURFACE
   * - AUTK_OSM_WATER
   * - AUTK_OSM_PARKS
   * - AUTK_OSM_ROADS
   * - AUTK_OSM_BUILDINGS
   *
   * Custom layers can also be loaded with types:
   * - AUTK_GEO_POINTS
   * - AUTK_GEO_POLYLINES
   * - AUTK_GEO_POLYGONS
   * - AUTK_RASTER
   *
   * @param {string} layerName The name of the layer
   * @param {LayerType} typeLayer The type of the layer
   * @param {FeatureCollection} geojson The GeoJSON data to load
   */
  loadGeoJsonLayer(n, r, i = null) {
    if (this.boundingBox || (r.bbox ? this.boundingBox = r.bbox : this.boundingBox = ye.build(r)), i === null) {
      const a = r.features.length > 0 && r.features[0].geometry?.type;
      switch (console.log("Detected geoType:", a), a) {
        case "Point":
        case "MultiPoint":
          i = I.AUTK_GEO_POINTS;
          break;
        case "LineString":
        case "MultiLineString":
          i = I.AUTK_GEO_POLYLINES;
          break;
        case "Polygon":
        case "MultiPolygon":
          i = I.AUTK_GEO_POLYGONS;
          break;
      }
    }
    switch (i) {
      case I.AUTK_OSM_SURFACE:
      case I.AUTK_OSM_WATER:
      case I.AUTK_OSM_PARKS:
      case I.AUTK_GEO_POLYGONS:
        this.createPolygonsLayer(n, r, i);
        break;
      case I.AUTK_OSM_ROADS:
      case I.AUTK_GEO_POLYLINES:
        const a = i === I.AUTK_OSM_ROADS ? 300 : 1e3;
        this.createPolylinesLayer(n, r, i, a);
        break;
      case I.AUTK_GEO_POINTS:
        this.createPointsLayer(n, r, i);
        break;
      case I.AUTK_OSM_BUILDINGS:
        this.createBuildingsLayer(n, r, i);
        break;
      default:
        console.error(`Geojson data of layer ${n} has an unknown layer type: ${i}.`);
        break;
    }
  }
  /**
   * Loads a GeoTIFF layer into the map.
   * This method creates a layer based on the provided GeoTIFF data and adds it to the map's layer manager.
   *
   * @param layerName The name of the layer
   * @param geotiff The GeoTIFF data to load
   * @param typeLayer The type of the layer
   */
  loadGeoTiffLayer(n, r, i = null) {
    switch (i) {
      case I.AUTK_RASTER:
        this.createRasterLayer(n, r);
        break;
      default:
        console.error(`Geojson data of layer ${n} has an unknown layer type: ${i}.`);
        break;
    }
  }
  /**
   * Updates the thematic information of a layer based on a GeoJSON source.
   * 
   * This method extracts thematic values from the GeoJSON features using the provided function,
   * normalizes these values, and updates the layer's thematic data accordingly.
   * 
   * @param {string} layerName The name of the layer to update
   * @param {(feature: Feature) => number | string} getFnv A function that extracts a numeric value from a GeoJSON feature
   * @param {FeatureCollection} geojson The GeoJSON data containing the features
   * @param {boolean} [groupById=false] Whether to group features by their 'building_id' property to ensure uniqueness
   */
  updateGeoJsonLayerThematic(n, r, i, a = !1) {
    const s = [];
    let o = r.features;
    if (a) {
      const c = /* @__PURE__ */ new Set();
      o = o.filter((u) => {
        let l = u.properties ? u.properties.building_id : "-1";
        return c.has(l) ? !1 : (c.add(l), !0);
      });
    }
    const f = typeof i(o[0]);
    if (f === "number") {
      for (const l of o) {
        if (!l.properties)
          continue;
        const h = +i(l);
        s.push({
          level: ee.AGGREGATION_COMPONENT,
          values: [h]
        });
      }
      const c = Math.min(...s.map((l) => +l.values[0])), u = Math.max(...s.map((l) => +l.values[0]));
      this.updateRenderInfoProperty(n, "colorMapLabels", [`${c}`, `${u}`]);
      for (let l = 0; l < s.length; l++) {
        const h = +s[l].values[0];
        s[l].values = [(h - c) / (u - c)];
      }
    }
    if (f === "string") {
      const c = Array.from(new Set(o.map((u) => i(u))));
      this.updateRenderInfoProperty(n, "colorMapLabels", c);
      for (const u of o) {
        if (!u.properties)
          continue;
        const l = 0.1 * c.indexOf(i(u));
        s.push({
          level: ee.AGGREGATION_COMPONENT,
          values: [l]
        });
      }
    }
    this.updateLayerThematic(n, s);
  }
  /**
   * Updates the thematic information of a layer.
   * 
   * @param {string} layerName The name of the layer
   * @param {ILayerThematic[]} layerThematic The thematic information to update
   */
  updateLayerThematic(n, r) {
    const i = this._layerManager.searchByLayerId(n);
    i && (i.loadThematic(r), i.makeLayerDataDirty());
  }
  /**
   * Updates the geometry of a layer.
   * 
   * @param {string} layerName The name of the layer
   * @param {ILayerGeometry[]} layerGeometry The geometry data to update
   */
  updateLayerGeometry(n, r) {
    const i = this._layerManager.searchByLayerId(n);
    i && (i.loadGeometry(r), i.makeLayerDataDirty());
  }
  /**
   * Updates the render information of a layer.
   * 
   * @param {string} layerName The name of the layer
   * @param {ILayerRenderInfo} property The property to update
   * @param {unknown} value The new value for the property
   */
  updateRenderInfoProperty(n, r, i) {
    const a = this._layerManager.searchByLayerId(n);
    if (a) {
      switch (r) {
        case "opacity":
          a.layerRenderInfo.opacity = i;
          break;
        case "isColorMap":
          a.layerRenderInfo.isColorMap = i;
          break;
        case "isSkip":
          a.layerRenderInfo.isSkip = i;
          break;
        case "isPick":
          a.layerRenderInfo.isPick = i, i === !1 && a.clearHighlightedIds();
          break;
        case "colorMapInterpolator":
          a.layerRenderInfo.colorMapInterpolator = i;
          break;
        case "colorMapLabels":
          a.layerRenderInfo.colorMapLabels = i;
          break;
        case "pickedComps":
          a.layerRenderInfo.pickedComps = i;
          break;
        default:
          console.warn(`Unknown property ${r} for layer ${n}.`);
          return;
      }
      a.makeLayerRenderInfoDirty();
    }
  }
  /**
   * Starts the drawing loop.
   * @param {number} fps The frames per second to target.
   */
  draw(n = 60) {
    let r = 0;
    const i = (a) => {
      requestAnimationFrame(i);
      const s = a - r;
      n && s < 1e3 / n || (this.render(), r = a);
    };
    requestAnimationFrame(i);
  }
  /**
   * Handles window resize events
   */
  handleResize() {
    const n = this._canvas.offsetWidth, r = this._canvas.offsetHeight;
    this.resize(n, r);
  }
  /**
   * Resizes the canvas and updates the camera viewport.
   * @param {number} width The new width of the canvas.
   * @param {number} height The new height of the canvas.
   */
  resize(n, r) {
    this._canvas.width = n * (window.devicePixelRatio || 1), this._canvas.height = r * (window.devicePixelRatio || 1), this._camera.resize(n, r), this._renderer.resize(n, r);
  }
  /**
   * Renders the map.
   * This method updates the camera, starts the rendering process, and handles picking for each layer.
   */
  render() {
    this._camera.update(), this._renderer.start(), this._layerManager.vectorLayers.forEach((n) => {
      n.layerRenderInfo.isSkip || n.renderPass(this._camera);
    }), this._layerManager.rasterLayers.forEach((n) => {
      n.layerRenderInfo.isSkip || n.renderPass(this._camera);
    }), this._renderer.finish(), this._renderer.startPickingRenderPass(), this._layerManager.vectorLayers.forEach((n) => {
      !n.layerRenderInfo.isSkip && n.layerRenderInfo.isPick && n.layerRenderInfo.pickedComps && n.renderPickingPass(this._camera);
    }), this._renderer.finish(), this._layerManager.vectorLayers.forEach((n) => {
      if (!n.layerRenderInfo.isSkip && n.layerRenderInfo.isPick && n.layerRenderInfo.pickedComps) {
        const [r, i] = n.layerRenderInfo.pickedComps;
        n.getPickedId(r, i).then((a) => {
          console.log(`Picked id ${a} on layer ${n.layerInfo.id}`), a >= 0 ? (n.setHighlightedIds([a]), this._mapEvents.emit(At.PICK, n.highlightedIds, n.layerInfo.id)) : (n.clearHighlightedIds(), this._mapEvents.emit(At.PICK, [], n.layerInfo.id)), n.layerRenderInfo.pickedComps = void 0;
        });
      }
    });
  }
  /**
   * Creates a features layer from a GeoJSON source.
   * @param {string} layerName The name of the layer.
   * @param {LayerType} typeLayer The type of the layer.
   * @param {FeatureCollection} geojson The GeoJSON data.
   */
  createPolygonsLayer(n, r, i) {
    const a = {
      id: `${n}`,
      zIndex: this._layerManager.computeZindex(i),
      typeLayer: i
    }, s = {
      opacity: 1,
      colorMapInterpolator: G.SEQUENTIAL_REDS,
      colorMapLabels: ["0.0", "1.0"],
      isColorMap: !1,
      isPick: !1,
      isSkip: !1
    }, o = F.buildMesh(r, this.origin);
    if (o[0].length === 0 || o[1].length === 0) {
      console.error("Invalid Polygon Layer");
      return;
    }
    let f = null;
    if (i === I.AUTK_GEO_POLYGONS) {
      if (f = F.buildBorder(r, this.origin), f[0].length === 0 || f[1].length === 0) {
        console.error("Invalid Polygon Layer border.");
        return;
      }
    } else
      f = [[], []];
    const c = {
      geometry: o[0],
      components: o[1],
      border: f[0],
      borderComponents: f[1],
      thematic: o[1].map(() => ({
        level: ee.AGGREGATION_COMPONENT,
        values: [0]
      }))
    };
    this.createLayer(a, s, c);
  }
  /**
   * Creates a roads layer from a GeoJSON source.
   * @param {string} layerName The name of the layer.
   * @param {FeatureCollection} geojson The GeoJSON data.
   */
  createPolylinesLayer(n, r, i, a = 1e3) {
    const s = {
      id: `${n}`,
      zIndex: this._layerManager.computeZindex(i),
      typeLayer: i
    }, o = {
      opacity: 1,
      colorMapInterpolator: G.SEQUENTIAL_REDS,
      colorMapLabels: ["0.0", "1.0"],
      isColorMap: !1,
      isPick: !1,
      isSkip: !1
    };
    me.offset = a;
    const f = me.buildMesh(r, this.origin);
    if (f[0].length === 0 || f[1].length === 0) {
      console.error("Invalid Roads Layer.");
      return;
    }
    const c = {
      geometry: f[0],
      components: f[1],
      thematic: f[1].map(() => ({
        level: ee.AGGREGATION_COMPONENT,
        values: [0]
      }))
    };
    this.createLayer(s, o, c);
  }
  /**
   * Creates a points layer from a GeoJSON source.
   * @param {string} layerName The name of the layer.
   * @param {FeatureCollection} geojson The GeoJSON data.
   */
  createPointsLayer(n, r, i) {
    const a = {
      id: `${n}`,
      zIndex: this._layerManager.computeZindex(i),
      typeLayer: i
    }, s = {
      opacity: 1,
      colorMapInterpolator: G.SEQUENTIAL_REDS,
      colorMapLabels: ["0.0", "1.0"],
      isColorMap: !1,
      isPick: !1,
      isSkip: !1
    }, o = ke.buildMesh(r, this.origin);
    if (o[0].length === 0 || o[1].length === 0) {
      console.error("Invalid Points Layer.");
      return;
    }
    const f = {
      geometry: o[0],
      components: o[1],
      thematic: o[1].map(() => ({
        level: ee.AGGREGATION_COMPONENT,
        values: [0]
      }))
    };
    this.createLayer(a, s, f);
  }
  /**
   * Creates a buildings layer from a GeoJSON source.
   * @param {string} layerName The name of the layer.
   * @param {FeatureCollection} geojson The GeoJSON data.
   */
  createBuildingsLayer(n, r, i) {
    const a = {
      id: `${n}`,
      zIndex: this._layerManager.computeZindex(i),
      typeLayer: I.AUTK_OSM_BUILDINGS
    }, s = {
      opacity: 1,
      colorMapInterpolator: G.SEQUENTIAL_REDS,
      colorMapLabels: ["0.0", "1.0"],
      isColorMap: !1,
      isPick: !1,
      isSkip: !1
    }, o = ge.buildMesh(r, this.origin);
    if (o[0].length === 0 || o[1].length === 0) {
      console.error("Invalid Building Layer.");
      return;
    }
    const f = {
      geometry: o[0],
      components: o[1],
      thematic: o[1].map(() => ({
        level: ee.AGGREGATION_COMPONENT,
        values: [0]
      }))
    };
    this.createLayer(a, s, f);
  }
  /**
   * Creates a custom grid layer from a GeoJSON source.
   * @param {string} layerName The name of the layer.
   * @param {FeatureCollection} geotiff The GeoJSON data.
   */
  createRasterLayer(n, r) {
    const i = {
      id: `${n}`,
      zIndex: this._layerManager.computeZindex(I.AUTK_RASTER),
      typeLayer: I.AUTK_RASTER
    }, a = {
      opacity: 1,
      colorMapInterpolator: G.SEQUENTIAL_REDS,
      colorMapLabels: ["0.0", "1.0"],
      isColorMap: !1,
      isPick: !1,
      isSkip: !1
    }, s = dh.buildMesh(r, this.origin);
    if (s[0].length === 0 || s[1].length === 0) {
      console.error("Invalid Feature Layer.");
      return;
    }
    const o = r.features[0].properties;
    if (!o) {
      console.error("GeoTIFF properties are missing.");
      return;
    }
    const f = {
      geometry: s[0],
      components: s[1],
      raster: [{
        rasterResX: o.rasterResX,
        rasterResY: o.rasterResY,
        rasterValues: o.raster
      }]
    };
    this.createLayer(i, a, f);
  }
  /**
   * Creates a layer from the provided information.
   * @param {ILayerInfo} layerInfo The information about the layer.
   * @param {ILayerRenderInfo} layerRenderInfo The rendering information for the layer.
   * @param {ILayerData} layerData The data for the layer.
   */
  createLayer(n, r, i) {
    let a;
    n.typeLayer === I.AUTK_RASTER ? a = this._layerManager.addRasterLayer(n, r, i) : a = this._layerManager.addVectorLayer(n, r, i), a && a.createPipeline(this._renderer);
  }
}
class yh {
  map;
  async run(n) {
    this.map = new ph(n), await this.map.init();
    const r = await fetch("../data/mnt_neighs_proj.geojson").then((i) => i.json());
    this.map.loadGeoJsonLayer("neighborhoods", r), this.map.draw();
  }
}
async function gh() {
  const e = new yh(), n = document.querySelector("canvas");
  if (!n) {
    console.error("Canvas element not found");
    return;
  }
  await e.run(n);
}
gh();
export {
  yh as StandaloneGeojsonVis
};
