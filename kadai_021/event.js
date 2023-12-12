// btnというidをもつHTML要素を取得し、定数に代入
const changeBtn = document.getElementById('btn');

// HTML要素をクリックしたときに、イベント処理を実行する
changeBtn.addEventListener('click', () => {
    // textというidをもつHTML要素を取得し、定数に代入
    const content = document.getElementById('text');

    // 2秒後にテキストを書き換える
    setTimeout(() => {
        text.innerHTML = 'ボタンをクリックしました';
    }, 2000);

});