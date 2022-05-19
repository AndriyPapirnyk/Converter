// 0.034 0.15 29.40 4.26 6.89 0.23
clear.onclick = function() {
gr.value = '';
usd.value = '';
zl.value = '';
};
con.onclick = function() {
if(gr.value) {
usd.value = (gr.value*0.034).toFixed(2);
zl.value = (gr.value*0.15).toFixed(2);
} else if(usd.value) {
gr.value = (usd.value*29.40).toFixed(2);
zl.value = (usd.value*4.26).toFixed(2);
} else if(zl.value) {
gr.value = (zl.value*6.89).toFixed(2);
usd.value = (zl.value*0.23).toFixed(2);
};
};
