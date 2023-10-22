import xml2js from 'xml2js';

export default class Output {
    outputHTML(cities) {
        let html = `
      <!DOCTYPE HTML>
      <html>
        <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <title>Relatório de Nomes de Cidades</title>
        </head>
        <body>
          <h1>Relatório de Nomes de Cidades</h1>
          <ul>
      `;

        for (let i = 0; i < cities.length; i++) {
            html += `     <li>${cities[i]['Nome']}</li>\n`;
        }

        html += `
          </ul>
        </body>
      </html>`;

        return html;
    }

    outputTXT(cities) {
        let txt = `Relatório de Nomes de Cidades
  =============================\n`;

        for (let i = 0; i < cities.length; i++) {
            txt += `- ${cities[i]['Nome']}\n`;
        }

        return txt;
    }

    outputJSON(cities) {
        return JSON.stringify(cities);
    }

    outputCSV(cities) {
        if (cities.length === 0) {
          return ''; // Se não houver cidades, retornar uma string vazia
        }
    
        const headers = Object.keys(cities[0]).join(',');
        const csvRows = cities.map((city) => Object.values(city).join(','));
    
        return `${headers}\n${csvRows.join('\n')}`;
      }

    outputXML(cities) {
        const builder = new xml2js.Builder();
        const xmlData = {
            cities: {
                city: cities.map((city) => {
                    return { Nome: city.Nome };
                })
            }
        };

        return builder.buildObject(xmlData);
    }

}