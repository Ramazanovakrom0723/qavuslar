function tekshirish(input) {
    let ochuvchi = (input.match(/\(/g) || []).length;
    let yopuvchi = (input.match(/\)/g) || []).length;
    
    if (ochuvchi == yopuvchi) {
        return "Ochuvchi va yopuvchi qavslar soni teng";
    } else {
        return "Ochuvchi va yopuvchi qavslar soni teng emas";
    }
}

let input = '(...) (...) (......)';
let natija = tekshirish(input);
alert(natija); 
