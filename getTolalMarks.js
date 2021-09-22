
const marks = [2,4,6,8,10,12,14,16,18,20];

const getTolalMarks = (marks) => {
    let value = 0;
    for (let i in marks) {
        value += marks[i]
    }
    console.log(value
)
}
getTolalMarks(marks)
