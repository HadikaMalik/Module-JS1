// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

test("converst st suffix numbers to an ordinal number", function(){
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(31)).toBe("31st");
});

test("converts nd suffix numbers to an ordinal number", function(){
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(152)).toBe("152nd");

});

test("converts rd suffix numbers to an ordinal number", function(){
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(33)).toBe("33rd");
    expect(getOrdinalNumber(143)).toBe("143rd");
});

test("converts exceptions to an ordinal number", function(){
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
});

// test("converts other numbers to an ordinal number", function(){
//     expect(getOrdinalNumber(4)).toBe("4th");
//     expect(getOrdinalNumber(64)).toBe("64th");
//     expect(getOrdinalNumber(157)).toBe("157th");
// });


function getOrdinalNumber(num){
    const lastDigit = num.toString().slice(-1);
    const last2Digits = num.toString().slice(-2);
    if (lastDigit == 1){
        return `${num}st`;
    }
    if (lastDigit == 2){
        return `${num}nd`;
    }
    if (lastDigit == 3){
        return `${num}rd`;
    }    
    if (last2Digit == 1){
        return `${num}`;
    }
}

console.log(getOrdinalNumber(1));

// 1 = st 
// 2 = nd 
// 3 = rd 
// 4 - onwards = th 
// 11, 12, 13 = th exceptions 

