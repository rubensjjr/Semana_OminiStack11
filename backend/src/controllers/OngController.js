const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
// lista todos os dados da tabela
    async index (request, response) {
         const ongs = await connection('ongs').select('*');
      
         return response.json(ongs);// lista todos os dados da tabela
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // gera 4 byte , gera ID
   
     await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });

    }
};