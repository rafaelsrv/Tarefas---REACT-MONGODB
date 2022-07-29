const Annotations = require('../models/AnnotationData');

module.exports={

    async read(request, response){
        const priority = request.query;

        const priorityNotes = await Annotations.find(priority);

        return response.json(priorityNotes);

    },

    //Mudança de prioridade.
    async update(request, response){

        const { id } = request.params;     // Buscando id onde será mudada a prioridade

        const annotation = await Annotations.findOne({ _id : id})      // Requisição do ID. _id é fornecido pelo insomnia.

        if (annotation.priority){
            annotation.priority = false;
        } else {                                // Alternância entre Prioridade ou Não-Prioridade.
            annotation.priority = true;
        }

            await annotation.save();

            return response.json(annotation);
    }
}