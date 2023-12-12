// btnというidをもつHTML要素を取得し、定数に代入する
const changeBtn = document.getElementById('btn');

//　HTML要素がクリックされたときにイベント処理を実行する
changeBtn.addEventListener('click', () => {
    // textというidをもつHTML要素を取得し、定数に代入する 
    const content = document.getElementById('text');
    //　innerHTMLプロパティでtextというidをもつHTML要素を書き換える
    text.innerHTML = 'ボタンをクリックしました';
});