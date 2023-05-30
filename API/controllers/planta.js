var Planta = require('../models/planta')

// Shop list
module.exports.list = () => {
    return Planta
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlanta = id => {
    return Planta.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlantasEspecie = especie =>{
    return Planta.find({Espécie:especie})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getPlantasImplant = implant =>{
    return Planta.find({Implantação:implant})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
module.exports.freguesias = () => {
    return Planta.aggregate([
        { $group: { _id: "$Freguesia" } },
        { $sort: { _id: 1 } } // Sort in ascending order
    ])
        .then(resposta => {
            const freguesias = resposta.map(item => item._id);
            return freguesias;
        })
        .catch(erro => {
            return erro;
        });
};

module.exports.especies = () => {
    return Planta.aggregate([
        { $group: { _id: "$Espécie" } },
        { $sort: { _id: 1 } } // Sort in ascending order
    ])
        .then(resposta => {
            const especies = resposta.map(item => item._id);
            return especies;
        })
        .catch(erro => {
            return erro;
        });
};


module.exports.addPlanta = p => {
    return Planta.create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
