/* adler32.js (C) 2014-present SheetJS -- http://sheetjs.com */
export function adler32_buf(buf, seed) {
	var a = 1, b = 0, L = buf.length, M = 0;
	if(typeof seed === 'number') { a = seed & 0xFFFF; b = (seed >>> 16) & 0xFFFF; }
	for(var i = 0; i < L;) {
		M = Math.min(L-i, 2654)+i;
		for(;i<M;i++) {
			a += buf[i]&0xFF;
			b += a;
		}
		a = (15*(a>>>16)+(a&65535));
		b = (15*(b>>>16)+(b&65535));
	}
	return ((b%65521) << 16) | (a%65521);
}
