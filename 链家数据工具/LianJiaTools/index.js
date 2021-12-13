	/**
	 * Author:amy
	 * Email:1259688240@qq.com
	 * Date:Wed May 19 2021 23:34:42 GMT+0800 (中国标准时间)
	 */
	var dataArray = document.querySelectorAll(".listContent li");
	var dataString = ''; 
	dataArray.forEach(item => {
		console.log(item.children);
		var title=item.children[1].firstChild.innerText + '_';
		var time = item.children[1].children[1].children[1].innerText + "_";
		var unitprice = item.children[1].children[2].children[2].innerText + ';\n';
		dataString += title + time + unitprice;
	});
	var filename = window.location.pathname.split('/').slice(2,3)[0] || 'pg1';
	saveJSON(dataString, 'lianjia_'+filename+'.txt');

function saveJSON(data, filename) {
	if (!data) {
		alert('data is null');
		return;
	}
	if (!filename) {
		filename = 'json.json'
	}
	if (typeof data === 'object') {
		data = JSON.stringify(data, undefined, 4)
	}
	var blob = new Blob([data], { type: 'text/json' });
	var e = document.createEvent('MouseEvents');
	var a = document.createElement('a');
	a.download = filename;
	a.href = window.URL.createObjectURL(blob);
	a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
	e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	a.dispatchEvent(e);
};
