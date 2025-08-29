export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            is_success: "false",
            message: "Method not allowed"
        });
    }

    const input = req.body.array;
    if (!Array.isArray(input)) {
        return res.status(400).json({
            is_success: "false",
            message: "Input must be an array"
        });
    }

    let even = [];
    let odd = [];
    let alphabets = [];
    let upperAlphabets = [];
    let special = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let elem = input[i];
        if (!isNaN(elem)) {
            if (Number(elem) % 2 === 0) {
                even.push(elem);
            } else {
                odd.push(elem);
            }
            sum += Number(elem);
        } else if (/^[a-zA-Z]$/.test(elem)) {
            alphabets.push(elem);
        } else {
            special.push(elem);
        }
    }

    for (let i = 0; i < alphabets.length; i++) {
        upperAlphabets.push(alphabets[i].toUpperCase());
    }

    let concatString = "";
    for (let i = alphabets.length - 1; i >= 0; i--) {
        let ch = alphabets[i];
        if ((alphabets.length - 1 - i) % 2 === 0) {
            concatString += ch.toUpperCase();
        } else {
            concatString += ch.toLowerCase();
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
}
