const Annotations = require('../models/AnnotationData');

module.exports = {

    async update(request, response){
        const { id } = request.params;   //Requisição do ID
        const {notes} = request.body;

        const annotation = await Annotations.findOne({_id : id})    // Requisição do ID para mudança/ Atribuição do _id para id

        if(notes){
            annotation.notes = notes;       // Anotação sobreposta

            await annotation.save();        // Salvando anotação
        }
        return response.json(annotation);
        
    }

}