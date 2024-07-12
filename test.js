fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
    .then(data => {
        lista = data.results;
        let masc = 0;
        let fem = 0;
        let paises = 0;
        let registro = 0;
        let idade = 0;

        for (let i = 0; i < lista.length; i++) {
            if (lista[i].gender === "male") {
                masc++;
            }
            if (lista[i].gender === "female") {
                fem++;
            }
            if (lista[i].location.country === "United States") {
                paises++;
            }
            if (new Date(lista[i].registered.date).getFullYear() < 2010) {
                registro++;
            }
            if (lista[i].dob.age > 30) {
                idade++;
            }
        }

        console.log("Temos " + masc + " pessoas do sexo masculino e " + fem + " do sexo feminino, " + paises + " moram nos EUA.");
        console.log(registro + " foram registradas antes de 2010.");
        console.log(idade + " pessoas têm mais de 30 anos.");
    })
    .catch(error => console.error("Erro ao buscar dados:", error));