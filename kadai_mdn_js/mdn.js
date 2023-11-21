const date = new Date(2023, 11, 21);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const today = () =>{
    console.log(year + "年" + month + "月" + day + "日");
}

today();