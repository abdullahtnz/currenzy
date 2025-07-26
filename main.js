const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });

//Converter starts
let from = "EUR";
let to = "USD";
let amount = 1;

function setFrom(currency){
    from = currency;
}

function setTo(currency){
    to = currency;
}

function setAmount(){
    amount = Number(document.getElementById("amount").value) 
}

async function convert() {
    setAmount();

    if (!from || !to || !amount || isNaN(amount) || amount <= 0) {
      document.getElementById("convert-btn").style.animation = "shake 0.5s"
      setTimeout(() => {
        document.getElementById("convert-btn").style.animation = ""
      }, 500);
      return;

    }
    document.getElementById("result").innerText = ""
    document.getElementById("loader").style.display = "block"

    await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        
        
        const convertedAmount = data.rates[to];
        document.getElementById("result").innerText =
          `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
        document.getElementById("loader").style.display = "none";
        
      })



      .catch(() => {
        document.getElementById("result").innerText = "Conversion failed.";
      });
  }

  fetch("https://api.frankfurter.app/latest?from=USD")
  .then(res => res.json())
  .then(data => {
    document.getElementById("eur").innerText = data.rates.EUR?.toFixed(2);
    document.getElementById("aud").innerText = data.rates.AUD?.toFixed(2);
    document.getElementById("bgn").innerText = data.rates.BGN?.toFixed(2);
    document.getElementById("brl").innerText = data.rates.BRL?.toFixed(2);
    document.getElementById("cad").innerText = data.rates.CAD?.toFixed(2);
    document.getElementById("chf").innerText = data.rates.CHF?.toFixed(2);
    document.getElementById("cny").innerText = data.rates.CNY?.toFixed(2);
    document.getElementById("czk").innerText = data.rates.CZK?.toFixed(2);
    document.getElementById("dkk").innerText = data.rates.DKK?.toFixed(2);
    document.getElementById("gbp").innerText = data.rates.GBP?.toFixed(2);
    document.getElementById("hkd").innerText = data.rates.HKD?.toFixed(2);
    document.getElementById("huf").innerText = data.rates.HUF?.toFixed(2);
    document.getElementById("idr").innerText = data.rates.IDR?.toFixed(2);
    document.getElementById("inr").innerText = data.rates.INR?.toFixed(2);
    document.getElementById("isk").innerText = data.rates.ISK?.toFixed(2);
    document.getElementById("jpy").innerText = data.rates.JPY?.toFixed(2);
    document.getElementById("krw").innerText = data.rates.KRW?.toFixed(2);
    document.getElementById("mxn").innerText = data.rates.MXN?.toFixed(2);
    document.getElementById("myr").innerText = data.rates.MYR?.toFixed(2);
    document.getElementById("nok").innerText = data.rates.NOK?.toFixed(2);
    document.getElementById("nzd").innerText = data.rates.NZD?.toFixed(2);
    document.getElementById("php").innerText = data.rates.PHP?.toFixed(2);
    document.getElementById("pln").innerText = data.rates.PLN?.toFixed(2);
    document.getElementById("ron").innerText = data.rates.RON?.toFixed(2);
    document.getElementById("sek").innerText = data.rates.SEK?.toFixed(2);
    document.getElementById("sgd").innerText = data.rates.SGD?.toFixed(2);
    document.getElementById("thb").innerText = data.rates.THB?.toFixed(2);
    document.getElementById("try").innerText = data.rates.TRY?.toFixed(2);
    document.getElementById("zar").innerText = data.rates.ZAR?.toFixed(2);
  });

  //made by abdullahtnz (Abdullah Novruzlu)