/*১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
 */

const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: {
        course: 'CSE',
        degree: 'BSc',
        year: 2022
    },
    subject: ['Fundamental', 'Object Oriented Programming Language', 'Networking', 'C#'],
    isAttendExam: true,
    exam: function () {
        return `${this.name} is Attending final Exam`;
    },
}
// console.log(student, student.exam());

//২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।

const result = `${student.name} studying : ${student.study.degree} in ${student.study.course}
His second subject is ${student.subject[1]}`;
// console.log(result);


//৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
const number = () => 89;
// console.log(number());


//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const dividedValue = (num) => num / 17;
// console.log(dividedValue(59));
// console.log(dividedValue(59).toFixed(2));


//৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const addSum = (first, second) => (first + second) / 2;
// console.log(addSum(65, 10));


//৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
// then if the result is even return true otherwise return false

const sum = (first, second) => {
    const firstSum = first + 7;
    const secondSum = second + 5;
    const additon = firstSum + secondSum;
    // console.log(additon);
    if (additon % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const finalResult = sum(13, 10);
// console.log(finalResult);


/*৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে
৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */

const array = [7, 14, 16, 21, 23, 36, 63];
const divideAray = array.map(n => n / 7);
// console.log(divideAray);

// solve in two line
const divideAray2 = [7, 14, 21, 23, 63].map(n => n / 7);
// console.log(divideAray2);

// solve in one line
// console.log([14, 21, 28, 35, 63].map(n => n / 7));


//.......reduce.........
const reduceValue = array.reduce((previous, current) => {
    // console.log(previous, current);
    const add = previous + current;
    return add;
}, 0)
// console.log(reduceValue);


//৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const person = {
    name: 'Manush',
    id: 5,
    class: 10,
    isStudyig: true
}

const { name, isStudyig } = person;
// console.log(name, isStudyig);

const array2 = [700, 140000, 1600, 21000, 2300, 36000, 6300];
const [a, balance, c, d] = array2;
// console.log(balance);

// remove one property
const { id, ...rest } = person;
// console.log(rest);

