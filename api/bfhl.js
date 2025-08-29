const app = require('express')();
app.use(require('express').json());

app.post("/api/bfhl", (req, res) => {
    const input = req.body.array;
    if (!Array.isArray(input)){
        return res.status(400).json({
            is_success: "false",
            message: "Input must be an array"
        });
    }
    const even=[];
    const odd=[];
    const upperAlphabets=[];
    const special=[];
    let sum=0;

    for (let elem of input){
        if (/^-?\d+$/.test(elem)){
            const num=parseInt(elem, 10);
            if (num%2==0){
                even.push(elem);
            }
            else{
                odd.push(elem);
            }
            sum+=num;
        }
        else if (/^[a-zA-Z]$/.test(elem)){
            upperAlphabets.push(elem.toUpperCase);
        }
        else{
            special.push(elem);
        }
    }

    let concatString="";
    const reversed=upperAlphabets.slice().reverse().join("");
    for (let i=0; i<reversed.length; i++){
        if (i%2===0){
            concatString+=reversed[i].toUpperCase();
        }
        else{
            concatString+=reversed[i].toLowerCase();
        }
    }

    return res.status(200).json({
        is_success: "true",
        user_id: "rishika_nagpal_28032005",
        email: "nagpalrishika425@gmail.com",
        roll_number: "22BCT0341",
        even,
        odd,
        upperAlphabets,
        special,
        sum,
        concatString
    });
});

module.exports=app;
