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
        valor: 0.00671,
        formatacao: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    },
    dolar: {
        moeda: "Dólar americano",
        img: "imgs/estados-unidos icon.png",
        valor: 5.8,
        formatacao: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    },
    euro: {
        moeda: "Euro",
        img: "imgs/euro icon.png",
        valor: 6.03,
        formatacao: new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        })
    },
    iene: {
        moeda: "Iene",
        img: "imgs/iene icon.png",
        valor: 0.038,
        formatacao: new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        })
    },
    libra: {
        moeda: "Libra",
        img: "imgs/libra icon.png",
        valor: 7.26,
        formatacao: new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })
    },
    bitcoin: {
        moeda: "Bitcoin",
        img: "imgs/bitcoin icon.png",
        valor: 559672.62,
        formatacao: new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 8 })
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

value_to_convert.addEventListener("input", () => {
    value_to_convert.value = value_to_convert.value.replace(/[^0-9.,]/g, '');
})
        
conversor_form.addEventListener("submit", (event)=>{
    event.preventDefault()

    calculateConversion()

    value_to_convert.value = ""
})

function calculateConversion() {
    value_coin_convert.textContent = `${(valor_moedas[coin_convert].formatacao).format(Number(value_to_convert.value).toFixed(2))}`
    country_flag_convert.setAttribute("src", `${valor_moedas[coin_convert].img}`)
    coin_name_convert.textContent = `${valor_moedas[coin_convert].moeda}`

    country_flag_target.setAttribute("src", `${valor_moedas[coin_target].img}`)
    coin_name_target.textContent = `${valor_moedas[coin_target].moeda}`

    const price_coin_convert = valor_moedas[coin_convert].valor
    const price_coin_target = valor_moedas[coin_target].valor

    let result = null

    if (price_coin_convert > price_coin_target) {
        result = value_to_convert.value * price_coin_convert
    }

    else if (price_coin_convert === price_coin_target) {
        result = value_to_convert.value * 1
    }

    else {
        result = value_to_convert.value / price_coin_target
    }

    if (coin_target === "bitcoin") {
        value_coin_target.textContent = `${(valor_moedas[coin_target].formatacao).format(result)} BTC`
    }

    else {
        value_coin_target.textContent = `${(valor_moedas[coin_target].formatacao).format(result.toFixed(2))}`
    }
}