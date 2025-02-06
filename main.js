const convert = document.getElementById("convert")
const conversion_target = document.getElementById("conversion_target")
const coin_symbol_convert = document.getElementById("coin_symbol_convert")
const coin_symbol_target = document.getElementById("coin_symbol_target")
const conversor_form = document.querySelector(".conversor")

const country_flag_convert = document.querySelector(".country_flag")
const country_flag_target = document.querySelector(".country_flag_2")
const coin_name_convert = document.getElementById("coin_name_convert")
const coin_name_target = document.getElementById("coin_name_target")
const value_coin_convert = document.getElementById("value_coin_convert")
const value_coin_target = document.getElementById("value_coin_target")

let value_to_convert = document.getElementById("value_to_convert")
let coin_convert = convert.value
let coin_target = conversion_target.value

const valor_moedas = {
    real: {
        moeda: "Real",
        img: "imgs/brasil icon.png",
        valor: 0.00671
    },
    dolar: {
        moeda: "Dólar americano",
        img: "imgs/estados-unidos icon.png",
        valor: 5.8
    },
    euro: {
        moeda: "Euro",
        img: "imgs/euro icon.png",
        valor: 6.03
    },
    iene: {
        moeda: "Iene",
        img: "imgs/iene icon.png",
        valor: 0.038
    },
    libra: {
        moeda: "Libra",
        img: "imgs/libra icon.png",
        valor: 7.26
    },
    bitcoin: {
        moeda: "Bitcoin",
        img: "imgs/bitcoin icon.png",
        valor: 559672.62
    }
}

convert.addEventListener("change", ()=>{
    coin_convert = convert.value

    changeIconCoin(coin_convert, coin_symbol_convert)
})

conversion_target.addEventListener("change", ()=>{
    coin_target = conversion_target.value

    changeIconCoin(coin_target, coin_symbol_target)
})

function changeIconCoin(coin, coin_symbol) {
    
    switch (coin) {
        case "real":
            coin_symbol.setAttribute("src", "imgs/real(BR) coin.png")
            break;
    
        case "dolar":
            coin_symbol.setAttribute("src", "imgs/dollar coin.png")
            break;
        
        case "euro":
            coin_symbol.setAttribute("src", "imgs/euro coin.png")
            break;

        case "iene":
            coin_symbol.setAttribute("src", "imgs/iene coin.png")
            break;
    
        case "libra":
            coin_symbol.setAttribute("src", "imgs/libra coin.png")
            break;
        
        case "bitcoin":
            coin_symbol.setAttribute("src", "imgs/bitcoin coin.png")
            break;

        default:
            break;
    }
}
        
conversor_form.addEventListener("submit", (event)=>{
    event.preventDefault()

    calculateConversion()

    conversor_form.reset()
})

function calculateConversion() {
    value_coin_convert.textContent = `${value_to_convert.value}`
    country_flag_convert.setAttribute("src", `${valor_moedas[coin_convert].img}`)
    coin_name_convert.textContent = `${valor_moedas[coin_convert].moeda}`

    country_flag_target.setAttribute("src", `${valor_moedas[coin_target].img}`)
    coin_name_target.textContent = `${valor_moedas[coin_target].moeda}`

    const result = (value_to_convert.value / valor_moedas[coin_target].valor).toFixed(2)

    value_coin_target.textContent = `${result}`
}