import { division } from "/division.js";

test("division",()=>{
    expect(division(4,2)).toEqual(2);
    expect(division(10,2)).toEqual(5);

    expect(division(0,0)).toEqual(Error("неопределенно"));
    expect(division(6,0)).toEqual(Error("на 0 делить нельзя"));
    
    expect(division(-6,2)).toEqual(-3);
    expect(division(16,-2)).toEqual(-8);
})