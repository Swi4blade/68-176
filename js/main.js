//МАССИВЫ
//Задание 68
//№1
"use strict";
let arr = [1, 2, 3];
console.log(arr);
// alert(arr);
//№2
let arr1 = ['a', 'b', 'c'];
console.log(arr1);
// alert(arr1); 


//Задание 69
//№1
let arr2 = [1, 2, 3];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
//№2
let arr3 = [1, 2, 3];
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
//№3
let arr4 = [1, 2, 3];
console.log(arr3[0]+arr3[1]+arr3[2]);
//№4
let arr5 = ['a', 'b', 'c', 'd'];
console.log(arr5[0]+"+"+arr5[1]+"+"+arr5[2]+"+"+arr5[3]);


//Задание 70
//№1
let arr6 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(arr6.length)
//№2
let arr7 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(arr7[arr7.length - 1])


//Задание 71
//№1
let arr8 = ['a', 'b', 'c'];
arr8[0] = 1;
arr8[1] = 2;
arr8[2] = 3;
console.log(arr8);


//Задание 72
//№1
let arr9 = [1, 2, 3];
arr9[0] += 3;
arr9[1] += 3;
arr9[2] += 3;
console.log(arr9);


//Задание 73
//№1
let arr10 = [1, 2, 3];
arr10[0]++;
arr10[1]++;
arr10[2]++;
console.log(arr10);


//Задание 74
//№1
let arr11 = [];
arr11[0] = 1;
arr11[1] = 2;
arr11[2] = 3;
console.log(arr11);
//№2
let arr12 = [1, 2, 3];
arr12[3] = 4;
arr12[4] = 5;
console.log(arr12);


//Задание 75
//№1
let arr13 = [];
arr13[3] = 'a';
arr13[8] = 'b';
console.log(arr13.length);


//Задание 76
//№1
let arr14 = [];
arr14.push(1);
arr14.push(2);
arr14.push(3);
console.log(arr14);
//№2
let arr15 = [1, 2, 3];
arr15.push(4);
arr15.push(5);
console.log(arr15);


//Задание 77
//№1
let arr16 = ['a', 'b', 'c'];
let key = 2;
console.log(arr16[key]);
//№2
let arr17 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr17[key1]+arr17[key2]);


//Задание 78
//№1
let arr18 = ['a', 'b', 'c', 'd', 'e'];
delete arr18[1];
delete arr18[3];
console.log(arr18.length);


//Задание 79
//№1
let arr19 = [1, 2, 3, 4, 5];
console.log(arr19[arr19.length - 1]);
//№2
let arr20 = [1, 2, 3, 4, 5];
console.log(arr20[0] + arr20[1] + arr20[2] + arr20[3] + arr20[4]);
//№3
let arr21 = [1, 2, 3, 4, 5];
console.log(arr21.length);
//№4
let arr22 = [1, 2, 3, 4, 5];
console.log(arr22.length);


//ОБЪЕКТЫ
//Задание 80
//№1
let obj = {1: 'Плнедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Птяница'};
console.log(obj[1], obj[2], obj[3], obj[4], obj[5]);


//Задание 81
//№1
let obj1 = {1: 'январь', 2: 'февраль', 3: 'март', 4: 'апрель', 5: 'май', 6: 'июнь', 7: 'июль', 8: 'август', 9: 'сентябрь', 10: 'октябрь', 11: 'ноябрь', 12: 'декабрь'};
console.log(obj1);

//Задание 82
//№1
let user = {name: 'Dmitrii', surname: 'Zhogin', patronymic: 'Ivanovich'};
console.log(user['surname'], user['name'], user['patronymic']);

//Задание 83
//№1
let date = {year: '2023', month: 'Сентября', day: '11'};
console.log(date.year, date.month, date.day);

//Задание 84
//№2
let obj10 = { 
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};
console.log(obj10['1a']);
console.log(obj10.b2);
console.log(obj10['c-c']);
console.log(obj10['d 4']);
console.log(obj10.e5);

//Задание 85
//№1
let obj11 = {x: 1, y: 2, z: 3};
obj11['x'] = 1**2;
obj11['y'] = 2**2;
obj11['z'] = 3**2;
console.log(obj11);

//Задание 86
//№1
let obj12 = {};
obj12.a = 11;
obj12.b = 22;
obj12.c = 33;
console.log(obj12);

//Задание 87
//№1
let obj13 = {3: 'c', 1: 'a', 2: 'b'};
console.log(obj13[1]);
console.log(obj13[2]);
console.log(obj13[3]);

//Задание 88
//№1
let obj14 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj14);
console.log(keys);

//Задание 89
//№1
let obj15 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj15).length);

//Задание 90
//№1
let obj16 = {x: 1, y: 2, z: 3};
let key16 = 'x';
console.log(obj16[key16]);

//Задание 91
//№1
let obj17 = {x: 1, y: 2, z: 3};
console.log(obj17['x']);
//№2
let obj18 = {x: 1, y: 2, z: 3};
let key18 = 'x';
console.log(obj18[key18]);

//Задание 92
//№1
let obj19 = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj19[prop]);
//№2
let obj20 = {x: 1, y: 2, z: 3};
let prop1 = 'x';
console.log(obj20[prop1]);

//Задание 93
//№1
let key21 = 'x';
let obj21 = {
	[key21]: 1,
	y: 2,
	z: 3
};
console.log(obj21);
//№2
let key22 = 'x';
let key23 = 'y';
let key24 = 'z';
let obj22 = {
	[key22]: 1,
	[key23]: 2,
	[key24]: 3
};
console.log(obj22);

//Задание 94
//№1
let obj23 = {x: 1, y: 2, z: 3};
console.log('x' in obj23);
console.log('w' in obj23);

//Задание 95
//№1
let obj24 = {x: 1, y: 2, z: 3};
delete obj24.x;
console.log('x' in obj24);

//Задание 96
//№1
console.log( typeof {x: 1, y: 
	2, z: 3} );
//№2
console.log( typeof {} );
//№3
let obj25 = {x: 1, y: 2, z: 3};
console.log( typeof obj25 );
//№4
let obj26 = {x: 1, y: 2, z: 3};
console.log( typeof obj26['x'] );

//Задание 97
//№1
console.log( typeof {x: 1, y: 
	2, z: 3} );
//№2
console.log( typeof [1, 2, 3] );
//№3
let arr50 = [1, 2, 3];
console.log( typeof arr50 );
//№4
let arr51 = [1, 2, 3];
console.log( typeof arr51[0] );
//№5
let arr52 = ['1', '2', '3'];
console.log( typeof arr52[0] );

//Задание 98
//№1
console.log( Array.isArray([1, 2, 3]) );
//№2
console.log( Array.isArray({x: 1, y: 2, z: 
	3}) );

//Задание 100
//№1
let arr53 = [1, 2, 3];
let arr54 = arr53;
arr53[0] = 'a';
console.log(arr54);
//№2
let arr55 = [1, 2, 3];
let arr56 = arr55;
arr55[0] = 'a';
arr56[1] = 'b';
console.log(arr55)
//№3
let arr57 = [1, 2, 3];
let arr58 = arr57;
arr57[0] = 'a';
arr58[0] = 'b';
console.log(arr58);

//Задание 101
//№1
const arr59 = ['a', 'b', 'c'];
arr59[1] = '!';
console.log(arr59);
//№2
// const arr60 = ['a', 'b', 'c'];   (ошибка)
// arr60 = [1, 2, 3];
// console.log(arr60);

// const arr61 = ['a', 'b', 'c'];   (ошибка)
// arr61 = ['a', 'b', 'c'];
// console.log(arr61);

//Задание 102
//№1
const arr62 = [1, 2, 3, 4, 5];
const res2 = arr62[1] + arr62[2];
console.log(res2);

//Задание 103
//№1
let obj27 = {x: 1, y: 2, z: 3};
console.log(obj27.x)
//№2
let obj28 = {x: 1, y: 2, z: 3};
let key28 = 'x';
console.log(obj28[key28]);
//№3
let obj29 = {x: 1, y: 2, z: 3};
let sum29 = obj29['x'] + obj29['y'] + obj29['z'];
console.log(sum29);
//№4
let obj30 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj30).length);



// let obj2 = {x: 1, y: 2, z: 3};
// console.log(obj2['x']);

// let obj3 = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj3).length);




//УСЛОВИЯ
//Задание 142
//№1
// let month = prompt ("Enter the nomber of the month:")
// if (month == "3" || month == "4" || month == "5"){
//     alert("Осень");
// } else if(month == "6" || month == "7" || month == "8"){
//     alert("Лето");
// } else if(month == "9" || month == "10" || month == "11"){
//     alert("Осень");
// } else if(month == "12" || month == "1" || month == "2"){
//     alert("Зима");
// }

//№2
let str = 'abcde';
if (str[0] == 'a') {
	console.log('да');
}
else{
    console.log('нет')
}

//№3
let str1 = [1, 2, 3, 4, 5];
if (str1[0] == 1) {
	console.log('да');
}
else if (str1[1] == 2) {
	console.log('да');
}
else if (str1[2] == 3) {
	console.log('да');
}
else{
    console.log('нет')
}

//№4
let str2 = [1, 2, 3];
let str3 = str2[0]+str2[1]+str2[2];
console.log(str3);

//№5
let str4 = [1, 2, 3, 4, 5, 6];
let str5 = str4[0]+str4[1]+str4[2];
let str6 = str4[3]+str4[4]+str4[5];
if (str5 == str6) {
	console.log('да');
}
else{
    console.log('нет')
}


//ЦИКЛЫ
//Задание 167
//№1
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

//№2
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }

//№3
// for (let i = 2; i <= 100; i += 2) {
// 	console.log(i);
// }

//№4
let str7 = '';
for (let i = 0; i < 10; i++) {
	str7 += 'x';
}
console.log(str7);

//№5
let arr23 = [];
for (let i = 1; i <= 10; i++) {
	arr23.push(i);
}
console.log(arr23);

//№6
let arr24 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr24.length; i++) {
    if (arr24[i] > 0 && arr24[i] < 10) {
        console.log(arr24[i]);
	}
}

//№7
let arr25 = [1, 2, 3, 4, 5];
for (let elem of arr25) {
	if (elem == 5) {
		console.log('true'); // выведет на элементе 3
	} else {
		console.log('false'); // выведет на элементах 1, 2, 4, 5
	}
}

//№8
let arr26 = [1, 2, 3, 4, 5];
let res = 0;
for (let elem of arr26) {
	res += elem;
}
console.log(res);

//№9
let arr27 = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr27) {
	sum += elem**2;
}
console.log(sum);

//№10
let arr28 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < arr28.length; i++) {
    sum1 += arr28[i]
}
let average = sum1 / arr28.length;
console.log(average);

//№11
let arr29 = 5;
let factorial = 1;
for (let i = 1; i < arr29.length; i++) {
    factorial *= i;
}
console.log(factorial);

//№12
let arr30 = [];
for (let i = 10; i >= 1; i--) {
	arr30.push(i);
}
console.log(arr30);

//№13
let arr31 = [11, -4, 6, -4];
let res1 = 0;
for (let i = 10; i < arr31.length; i++) {
    if(arr31[i] > 0) {
        res1 += arr31[i];
    }
}
console.log(res1);

//№14
let arr32 = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr32.length; i++) {
    let strNum = arr32[i].toString();
    let firstDigit = parseInt(strNum[0]);

    if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
        console.log(arr32[i]);
    }
}

//№15
let arr33 = [10, 20, 30, 40, 50];
for (let i = arr33.length - 1; i >= 0; i--) {
    console.log(arr33[i]);
}

//№16
let arr34 = [0, 1, 8, 3, 4, 7];
for (let i = 0; i < arr34.length; i++) {
    if (arr34[i] === i) {
        console.log(arr34[i]);
    }
}

// // №17-18
// let arr35 = [1, 2, 3];
// for (let i = 0; i < arr35.length; i++) {
//     document.write(arr35[i] + "<br>");
// }

// // №19
// let day = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// for (let i = 0; i < day.length; i++) {
//     if (i >= 5) {
//         document.write('<b>' + day[i] + '</b>' + "<br>");
//     } else {
//         document.write(day[i] + "<br>");
//     }
// }

// // №20
// let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let day1 = new Date().getDay() - 1;

// for (let i = 0; i < days.length; i++) {
//     if (i === day1) {
//         document.write('<i>' + days[i] + '</i>' + "<br>");
//     } else {
//         document.write(days[i] + "<br>");
//     }
// }

//№21-22
let obj4 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let employee in obj4) {
    if (obj4[employee] <= 400) {
        obj4[employee] +=  obj4[employee] * 0.1;
    }
}
console.log(obj4);

//№23
let arr36 = [1, 2, 3, 4, 5];
let arr37 = [6, 7, 8, 9, 10];
let newObj = {};
for (let i = 0; i < arr1.length; i++) {
    newObj[arr36[i]] = arr37[i];
}
console.log(newObj);

//№24
let obj5 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = 0;
let sumValues = 0;
for (let key in obj5) {
    sumKeys += Number(key);
    sumValues += obj5[key];
}
let result = sumKeys / sumValues;
console.log(result);

//№25
let obj6 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keysArray = [];
let valuesArray = [];

for (let key in obj6) {
    keysArray.push(key);
    valuesArray.push(obj6[key]);
}
console.log(keysArray);
console.log(valuesArray);

//№26
let obj7 = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let newArray = [];
for (let key in obj7) {
    let value = obj7[key].toString();
    if (value.startsWith('1') || value.startsWith('2')) {
        newArray.push(obj7[key]);
    }
}
console.log(newArray);

//№27
let arr38 = ['a', 'b', 'c', 'd', 'e'];
let obj8= {};
for (let i = 0; i < arr38.length; i++) {
    obj8[i + 1] = arr38[i];
}
console.log(obj8);

//№28
let arr39 = ['a', 'b', 'c', 'd', 'e'];
let obj9 = {};
for (let i = 0; i < arr39.length; i++) {
    obj9[arr39[i]] = i + 1;
}
console.log(obj9);


//МНОГОМЕРНОСТЬ
//Задание 168
//№1
let arr40 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr40[3][2]);
console.log(arr40[1][1]);
console.log(arr40[2][0]);
console.log(arr40[0][0]);

//№2
let arr41 = [[1, 2], [3, 4], [5, 6]];
console.log(arr41[0][0]+arr41[0][1]+arr41[1][0]+arr41[1][1]+arr41[2][0]+arr41[2][1]);

//Задание 169
//№1
let arr42 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
console.log(arr42[0][0][0]+arr42[0][0][1]+arr42[0][1][0]+arr42[0][1][1]+arr42[1][0][0]+arr42[1][0][1]+arr42[1][1][0]+arr42[1][1][1]);

//Задание 170
//№1
let arr43 = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
console.log(arr43[0][0]+arr43[0][1]+arr43[0][2]+arr43[0][3][0]+arr43[0][3][1]+arr43[0][3][2][0]+arr43[0][3][2][1]+arr43[1][0]+arr43[1][1][0]+arr43[1][1][1]);

//Задание 171
//№1
let arr44 = [[1, 2, 3], [4, 5], [6]];
let sum2 = 0;
for (let subArr of arr44) {
	for (let elem of subArr) {
        sum2 += elem;
	}
}
console.log(sum2);

//№2
let arr45 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum3 = 0;
for (let subArr of arr45) {
    for (let subsubArr of subArr)
	    for (let elem of subsubArr) {
            sum3 += elem;
	    }
    }
console.log(sum3);

//Задание 172
//№1
let arr46 = [[1, 2, 3], [4, 5], [6]];
let sum4 = 0;
for (let i = 0; i < arr46.length; i++) {
	for (let j = 0; j < arr46[i].length; j++) {
        sum4 += arr46[i][j];
	}
}
console.log(sum4);

//№2
let arr47 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum5 = 0;
for (let i = 0; i < arr47.length; i++) {
	for (let j = 0; j < arr47[i].length; j++) {
        for (let p = 0; p < arr47.length; p++) {
        sum5 += arr47[i][j][p];
        }
	}
}
console.log(sum5);

//Задание 173
//№1
let arr48 = [];
for (let i = 0; i < 3; i++) {
	arr48[i] = [];
	for (let j = 0; j < 5; j++) {
		arr48[i].push(j + 1);

	}
}
console.log(arr48);

//№2
let str8 = [];
for (let i = 0; i < 3; i++) {
	str8[i] = [];
	for (let j = 0; j < 5; j++) {
		str8[i].push('x');
	}
}
console.log(str8);

//№3
let arr63 = [];
for (let i = 0; i < 3; i++) {
  arr63[i] = [];
  for (let j = 0; j < 2; j++) {
    arr63[i][j] = [];
    for (let k = 0; k < 5; k++) {
      arr63[i][j][k] = k + 1;
    }
  }
}
console.log(arr63)

//Задание 174
//№1
let arr64 = [];
for (let i = 0; i < 3; i++) {
    arr64[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr64[i].push(j);
	}
}
console.log(arr64);

//№2
let arr65 = [];
for (let i = 0; i < 3; i++) {
	arr65[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr65[i].push(j);
	}
}
console.log(arr65);

//№3
let arr66 = [];
for (let i = 0; i < 3; i++) {
	arr66[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr66[i].push(j);
	}
}
console.log(arr66);

//№4
let arr67 = [];
for (let i = 0; i < 3; i++) {
	arr67[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr67[i].push(j);
	}
}
console.log(arr67);

//№5
let arr68 = [];
for (let i = 0; i < 3; i++) {
	arr68[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr68[i].push(j);
	}
}
console.log(arr68);

//№6
let arr69 = [];
for (let i = 0; i < 3; i++) {
	arr69[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr69[i].push(j);
	}
}
console.log(arr69);

//Задание 175
//№1
let arr70 = [];
for (let i = 0, k = 1; i < 4; i++) {
	arr70[i] = [];
	for (let j = 0; j < 2; j++) {
		arr70[i].push(k++);
	}
}
console.log(arr70);

//№2
let arr71 = [];
for (let i = 0, k = 0; i < 4; i++) {
	arr71[i] = [];
	for (let j = 0; j < 3; j++) {
		arr71[i].push(k += 2);
	}
}
console.log(arr71);

//№3
let arr72 = [];
for (let i = 0, k = 1; i < 2; i++) {
  arr72[i] = [];
  for (let j = 0; j < 2; j++) {
    arr72[i][j] = [];
    for (let p = 0; p < 2; p++) {
      arr72[i][j].push(k++);
    }
  }
}
console.log(arr72)

//№4
let arr73 = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr73[i] = [];
	for (let j = 0; j < 3; j++) {
		arr73[i].push(k++);
	}
}
console.log(arr73);

//№5
let arr74 = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr74[i] = [];
	for (let j = 0; j < 3; j++) {
		arr74[i][j] = k++;
	}
}
console.log(arr74);

//№6
let arr75 = [];
let k1 = 1;
for (let i = 0; i < 3; i++) {
	arr75[i] = [];
	for (let j = 0; j < 3; j++) {
		arr75[i][j] = k1++;
	}
}
console.log(arr75);

//№7
let arr76 = [];
let k3 = 1;
for (let i = 0; i < 3; i++) {
	arr76[i] = [];
	for (let j = 0; j < 3; j++) {
		arr76[i][j] = k3++;
	}
}
console.log(arr76);

//№8
let arr77 = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr77[i] = [];
	for (let j = 0; j < 3; j++) {
		arr77[i][j] = k++;
	}
}
console.log(arr77);

//№9
let arr78 = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr78[i] = [];
	for (let j = 0; j < 3; j++) {
		arr78[i][j] = k++;
	}
}
console.log(arr78);

//№10
let arr79 = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr79[i] = [];
	for (let j = 0; j < 3; j++) {
		arr79[i][j] = k++;
	}
}
console.log(arr79);

//№11
let arr80 = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr80[i] = [];
	for (let j = 0; j < 3; j++) {
		arr80[i][j] = k++;
	}
}
console.log(arr80);

//№12
let arr81 = [];
let k4 = 1;
for (let i = 0; i < 3; i++) {
	arr81[i] = [];
	for (let j = 0; j < 3; j++) {
		arr81[i][j] = k4++;
	}
}
console.log(arr81);

//№13
let arr82 = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr82[i] = [];
	for (let j = 0; j < 3; k++) {
		arr82[i][j] = k++;
	}
}
console.log(arr82);

//Задание 176
//№1
let obj31 = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
// let sum22 = obj31.key1.key1 + obj31.key1.key1;
// console.log(sum22)
console.log(obj31.key1.key1 + obj31.key1.key2 + obj31.key1.key3 + obj31.key2.key1 + obj31.key2.key2 + obj31.key2.key3 + obj31.key3.key1 + obj31.key3.key2 + obj31.key3.key3);

//№2
let obj33 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj33['2']['2'], obj33['3']['1']);